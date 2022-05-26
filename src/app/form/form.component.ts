import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb:FormBuilder, 
    routes:Router,
    private userservice:UserService
    ) { 
      this.adduser = fb.group({
        name:['',Validators.required],
        email:['',Validators.required],
        phone:['',Validators.required],
        password:['',Validators.required],
      })
    }
  adduser:any;
  

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.adduser.value)
    this.userservice.addUser(this.adduser.value).subscribe((data)=>{
      console.log(data);
    })
  }
}
