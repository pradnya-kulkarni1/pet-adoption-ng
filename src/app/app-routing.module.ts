import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './feature/welcome/welcome.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { SpeciesListComponent } from './feature/species/species-list/species-list.component';
import { CustomerListComponent } from './feature/customer/customer-list/customer-list.component';
import { PetListComponent } from './feature/pet-list/pet-list.component';
import { BreedListComponent } from './feature/breed/breed-list/breed-list.component';
import { UserLoginComponent } from './feature/user-login/user-login.component';
import { BreedCreateComponent } from './feature/breed/breed-create/breed-create.component';
import { BreedDetailsComponent } from './feature/breed/breed-details/breed-details.component';
import { BreedEditComponent } from './feature/breed/breed-edit/breed-edit.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'user/list',component:UserListComponent},
  {path:'species/list',component:SpeciesListComponent},
  {path:'breed/list',component:BreedListComponent},
  {path:'breed/create',component:BreedCreateComponent},
  {path:'breed/details/:id',component:BreedDetailsComponent},
  {path:'breed/edit/:id',component:BreedEditComponent},
  {path:'pet/list',component:PetListComponent},
  {path:'customer/list',component:CustomerListComponent},
  {path:'user/login',component:UserLoginComponent},
  {path:'**',component:WelcomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
