import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data:any = '';
  constructor(private list:UserService) {
    list.list().subscribe((listdata)=>{[
      this.data=listdata
    ]})
   }

  ngOnInit(): void {
  }

}
