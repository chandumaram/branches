import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchComponent } from './branch.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',component:BranchComponent,
  children:[{
    path:'details/:BranchCode',component:DetailsComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchRoutingModule { }
