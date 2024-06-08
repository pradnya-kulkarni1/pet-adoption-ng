import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { SystemService } from '../../../services/system.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  title: string= "User-List";
  users?: User[] = undefined;
  
  constructor(private userSvc: UserService,
    private systemSvc: SystemService
  ){ }

  ngOnInit(): void{

    //this.systemSvc.checkLogin();

    this.userSvc.getAllUsers().subscribe({
      next:(resp)=>{
        this.users = resp;
      },
      error:(err)=>{
        console.log(err);
      }

    })
  }

}
