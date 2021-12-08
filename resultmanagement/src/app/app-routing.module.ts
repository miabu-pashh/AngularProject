import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AddResultComponent} from './add-result/add-result.component';
import{ListResultComponent} from './list-result/list-result.component';
import{UpdateResultComponent} from './update-result/update-result.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TLoginComponent } from './t-login/t-login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentResultComponent } from './student-result/student-result.component';

const routes: Routes = [
  {
    component:AddResultComponent,
    path:'list/add'
  },
  {
    component:ListResultComponent,
    path:'list'
    
  },
  {
    component:UpdateResultComponent,
    path:'update/:id'
  },
  {
    component:LoginComponent,
    path:''
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:TLoginComponent,
    path:'tLogin'
  },
  {
    component:SignupComponent,
    path:'signup'
  },
  {
    component:StudentLoginComponent,
    path:'studentLogin'
  },
  {
    component:StudentResultComponent,
    path:'studentResult'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
