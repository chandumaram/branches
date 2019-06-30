import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule,MatMenuModule, MatCheckboxModule,MatDividerModule,MatListModule,MatSidenavModule,MatIconModule,
        MatGridListModule,MatTableModule} from '@angular/material';
import { BranchComponent } from './branch.component';
import { BranchRoutingModule } from './branch-routing.module';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [SidenavComponent, DetailsComponent, HeaderComponent,BranchComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatTableModule,
    BranchRoutingModule,
    Ng2FilterPipeModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule
  ],
  exports:[
    SidenavComponent,
    DetailsComponent,
    HeaderComponent,
    BranchComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatTableModule,
    Ng2FilterPipeModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule
    ],
    providers: [],
  bootstrap: [BranchComponent]
})
export class BranchModule { }
