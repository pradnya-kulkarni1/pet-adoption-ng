import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../../model/user-login';
import { UserService } from '../../services/user.service';
import { SystemService } from '../../services/system.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  title: string = 'User-login';
  userLogin: UserLogin = new UserLogin();
  message?: string = undefined;

  constructor(
    private userSvc: UserService,
    private systemSvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.systemSvc.loggedInUser = new User();
    this.userLogin.email = "pradnya@abcd.com";
    this.userLogin.password = "topsecret";
  }

  login(){
    this.userSvc.login(this.userLogin).subscribe({
      next:(resp) => {
        this.systemSvc.loggedInUser = resp;
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        this.message = 'Invalid username / password combination. Try again';
      },
      complete:() => {},
    });
  }

}
