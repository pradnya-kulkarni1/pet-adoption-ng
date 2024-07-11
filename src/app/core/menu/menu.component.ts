import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menu-item';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  title: string = 'PetHome';
  menuItems: MenuItem[] = [];
  welcomeMsg?: string = undefined;
  isUser:boolean=false;
  userId:number=0;

  constructor(private systemSvc: SystemService){

  }
  ngOnInit(): void {
    this.userId=this.systemSvc.loggedInUser.id;
    if (this.userId ==0){
      this.isUser = false;
     } else if(this.userId !=0) this.isUser=true;
   
    this.menuItems.push(new MenuItem("Species","/species/list","Species List"));
    this.menuItems.push(new MenuItem("Breed","/breed/list","Breed List"));
    this.menuItems.push(new MenuItem("Pet","/pet/list","Pet List"));
    if(this.isUser){
    this.menuItems.push(new MenuItem("User","/user/list","User List"));
    this.menuItems.push(new MenuItem("Customer","/customer/list","Customer List"));
    this.menuItems.push(new MenuItem("Adoption Request","/adoption/request","Adoption Request"));
    this.menuItems.push(new MenuItem("Review","/review/review","Review"));
    this.menuItems.push(new MenuItem("Adopt","/adoption/adopt","Adopt"));
    this.menuItems.push(new MenuItem("Adopted Pets","/adopted-pets","Adopted Pets List"));
    }
  this.systemSvc.checkLogin;
  if (this.systemSvc.loggedInUser.id ==0){
    this.menuItems.push(new MenuItem("User-Login","/user/login","User Login"));
  }
  else if(this.systemSvc.loggedInUser != undefined){
    this.welcomeMsg = "Hi, "+this.systemSvc.loggedInUser.firstname;
    this.menuItems.push(new MenuItem("Logout","/user/login","User Login"));

  }
}

}
