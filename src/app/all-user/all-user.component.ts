import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: {name:string, job: string, gender:string, country:string, age:number, avatar:string}[] = [];


  ngOnInit() {
    this.users = this.userService.users; 
    // this.userService.users = this
  }

  ShowDetails(user:{name: string, job: string, gender: string, country: string, age: number, avatar: string}){
    this.userService.ShowUserDetails(user);
  }
}
