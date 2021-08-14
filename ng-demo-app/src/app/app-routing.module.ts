import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentLayoutComponent } from './components/mat-dialog-demo/parent-layout/parent-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ParentLayoutComponent
  },
  {
    path: 'dialog-demo',
    component: ParentLayoutComponent
  }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
