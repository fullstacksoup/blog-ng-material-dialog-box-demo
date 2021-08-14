import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
//import { ParentLayoutold, MatDialogDemo } from './components/mat-dialog-demo/parent-layout-old/parent-layout.component';
import { DialogDemoDataTableComponent } from './components/mat-dialog-demo/dialog-demo-data-table/dialog-demo-data-table.component';
import { ParentLayoutComponent, MatDialogDemo } from './components/mat-dialog-demo/parent-layout/parent-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentLayoutComponent,
    MatDialogDemo,
    DialogDemoDataTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [
   // MatDialogDemo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
