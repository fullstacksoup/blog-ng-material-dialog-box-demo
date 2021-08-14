import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataService } from 'src/app/services/data.service';
import { IChemicals } from '../../../interfaces/IChemicals';
export interface DialogData {
  chemData: IChemicals;
  name: string;
  comment: any;
}

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit, OnDestroy {
  private data: any[] = [];
  private subs = new Subscription();
  public record: IChemicals;

  constructor(private dataSVC: DataService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) {}
    
  ngOnInit(): void {
    this.subs.add(
      this.dataSVC.getAll()
        .subscribe((data) => {
          console.log(data);
          this.data = data;
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
  

  // ************************************************************************************************************************
  // * COMPONENT FUNCTIONS
  // ************************************************************************************************************************

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }

  openDialog(id: number): void {
    this.record = this.data.filter(c => c.position === id)[0];    

    const dialogRef = this.dialog.open(MatDialogDemo, {
      width: '450px',
      height: '375px',
      data: {chemData: this.record}
      
    });

    dialogRef.afterClosed().subscribe(result => {      
      if (result) {
        this.openSnackBar(`Message From Dialog:  ${result}`, 'Close')  
      }            
    });
  }
}

@Component({
  selector: 'mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss'],
})
export class MatDialogDemo {

  constructor(
    public dialogRef: MatDialogRef<MatDialogDemo>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


  onCloseDialog(): void {
    this.dialogRef.close();
  }

  formatImage(img: any): any {
    return 'data:image/jpeg;base64,' + img;
  }
}

