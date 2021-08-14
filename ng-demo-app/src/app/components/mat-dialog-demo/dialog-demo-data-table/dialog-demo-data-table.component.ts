import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DataService } from '../../../services/data.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-dialog-demo-data-table',
  templateUrl: './dialog-demo-data-table.component.html',
  styleUrls: ['./dialog-demo-data-table.component.scss']
})
export class DialogDemoDataTableComponent implements OnInit, AfterViewInit, OnDestroy  {
  @Input() title: string;  
  @Output() openRecord = new EventEmitter<number>();
  @ViewChild(MatSort) sort: MatSort;
  private subs = new Subscription();

  constructor(private dataSVC: DataService) {}
  
  public dataSource: any;
  
  displayedColumns: string[] = ['action', 'position', 'name', 'weight', 'symbol'];
    
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.subs.add(
      this.dataSVC.getAll()
        .subscribe((data) => {          
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }));

  }
  
  ngOnDestroy(): void {
    if (this.subs) {
     this.subs.unsubscribe();
    }
  }
  onOpenDialog(id: number): void {
    console.log(id);
    this.openRecord.emit(id);
  }
}
