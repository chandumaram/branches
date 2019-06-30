import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http'; 
import { element } from 'protractor';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  displayedColumns: string[] = ['BranchCode', 'SubCode', 'SubName', 'Credits', 'YearNo', 'SemNo'];
  dataSource:string[];
  Bcode: string;
  url='http://localhost:57271/api';

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log("Check")
      console.log(params['BranchCode']);
      this.Bcode = params['BranchCode'] ? params['BranchCode'] : "ECE";
      this.dataSource = []
      
      this.httpClient.get(this.url+'/SubDetails/'+this.Bcode+"").subscribe(  
        data => {  
         this.dataSource = data as string [];
        
        });
        

    });
  
  console.log(this.dataSource)
  }
}