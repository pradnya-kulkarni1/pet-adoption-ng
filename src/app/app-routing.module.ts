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
import { SpeciesCreateComponent } from './feature/species/species-create/species-create.component';
import { SpeciesDetailsComponent } from './feature/species/species-details/species-details.component';
import { SpeciesEditComponent } from './feature/species/species-edit/species-edit.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailsComponent } from './feature/user/user-details/user-details.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { CustomerCreateComponent } from './feature/customer/customer-create/customer-create.component';
import { CustomerDetailsComponent } from './feature/customer/customer-details/customer-details.component';
import { CustomerEditComponent } from './feature/customer/customer-edit/customer-edit.component';
import { PetCreateComponent } from './feature/pet/pet-create/pet-create.component';
import { PetDetailsComponent } from './feature/pet/pet-details/pet-details.component';
import { PetEditComponent } from './feature/pet/pet-edit/pet-edit.component';
import { AdoptionRequestComponent } from './feature/adoption/adoption-request/adoption-request.component';
import { ReferenceCreateComponent } from './feature/reference/reference-create/reference-create.component';
import { ReviewComponent } from './review/review/review.component';
import { AdoptComponent } from './adoption/adopt/adopt.component';
import { AdoptionApproveComponent } from './adoption/adoption-approve/adoption-approve.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'user/list',component:UserListComponent},
  {path:'user/create',component:UserCreateComponent},
  {path:'user/details/:id',component:UserDetailsComponent},
  {path:'user/edit/:id',component:UserEditComponent},
  {path:'species/list',component:SpeciesListComponent},
  {path:'species/create',component:SpeciesCreateComponent},
  {path:'species/details/:id',component:SpeciesDetailsComponent},
  {path:'species/edit/:id',component:SpeciesEditComponent},
  {path:'pet/list',component:PetListComponent},
  {path:'pet/create',component:PetCreateComponent},
  {path:'pet/details/:id',component:PetDetailsComponent},
  {path:'pet/edit/:id',component:PetEditComponent},
  {path:'breed/list',component:BreedListComponent},
  {path:'breed/create',component:BreedCreateComponent},
  {path:'breed/details/:id',component:BreedDetailsComponent},
  {path:'breed/edit/:id',component:BreedEditComponent},
  {path:'pet/list',component:PetListComponent},
  {path:'customer/list',component:CustomerListComponent},
  {path:'customer/create',component:CustomerCreateComponent},
  {path:'customer/details/:id',component:CustomerDetailsComponent},
  {path:'customer/edit/:id',component:CustomerEditComponent},
  {path:'user/login',component:UserLoginComponent},
  {path:'adoption/request',component:AdoptionRequestComponent},
  {path:'reference/create',component:ReferenceCreateComponent},
  {path:'review/review',component: ReviewComponent},
  {path:'adoption/aprove/:id',component: AdoptionApproveComponent},
  {path:'adoption/adopt',component:AdoptComponent},
  {path:'**',component:WelcomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
