import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDemoDataTableComponent } from './dialog-demo-data-table.component';

describe('DialogDemoDataTableComponent', () => {
  let component: DialogDemoDataTableComponent;
  let fixture: ComponentFixture<DialogDemoDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDemoDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDemoDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
