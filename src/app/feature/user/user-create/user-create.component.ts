import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  title: string = 'User-Create';
  user: User = new User();
  message?: string = undefined;
  

  constructor(private userSvc: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  save(): void{

    this.userSvc.createUser(this.user).subscribe({
      next: (resp) => {
        this.user = resp;
        this.router.navigateByUrl('/user/list');
      },
      error: (err) => {
        console.log("Error creating user: ", err);
        this.message = "Error creating User";
      },
      complete: () => {}

    });
  }
}
