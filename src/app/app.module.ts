import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { SpeciesListComponent } from './feature/species/species-list/species-list.component';
import { WelcomeComponent } from './feature/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PetListComponent } from './feature/pet-list/pet-list.component';
import { BreedListComponent } from './feature/breed/breed-list/breed-list.component';
import { CustomerListComponent } from './feature/customer/customer-list/customer-list.component';
import { ReferenceListComponent } from './feature/reference/reference-list/reference-list.component';
import { UserLoginComponent } from './feature/user-login/user-login.component';
import { BreedDetailsComponent } from './feature/breed/breed-details/breed-details.component';
import { BreedEditComponent } from './feature/breed/breed-edit/breed-edit.component';
import { BreedCreateComponent } from './feature/breed/breed-create/breed-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    SpeciesListComponent,
    WelcomeComponent,
    PetListComponent,
    BreedListComponent,
    CustomerListComponent,
    ReferenceListComponent,
    UserLoginComponent,
    BreedDetailsComponent,
    BreedEditComponent,
    BreedCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
