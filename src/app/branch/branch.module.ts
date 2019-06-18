import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule, MatCheckboxModule,MatDividerModule,MatListModule,
  MatSidenavModule,MatGridListModule,MatTableModule} from '@angular/material';



@NgModule({
  declarations: [SidenavComponent, DetailsComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatTableModule
  ],
  exports:[
    SidenavComponent, 
    DetailsComponent, 
    HeaderComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatTableModule
    ]
})
export class BranchModule { }
