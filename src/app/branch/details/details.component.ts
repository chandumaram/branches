import { Component, OnInit } from '@angular/core';

export interface eee {
  name: string;
}
const branch2: eee[]=[
  {name:'Eng Lab'},
  {name:'Phy Lab'},
  {name:'ece-1'},
  {name:'ece-2'},
  {name:'em'}
];


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  dataSource=branch2;
  constructor() {
   }

  ngOnInit() {
  }

}
