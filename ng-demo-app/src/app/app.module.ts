import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ParentComponentComponent, MatDialogDemo } from './components/mat-dialog-demo/parent-component/parent-component.component';
import { DialogDemoDataTableComponent } from './components/mat-dialog-demo/dialog-demo-data-table/dialog-demo-data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
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
    MatDialogDemo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
