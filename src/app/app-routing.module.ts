import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationTableComponent } from './registration-table/registration-table.component';
import { FormComponent } from './form/form.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  { path: 'registration-table', component: RegistrationTableComponent },
  { path: 'form', component: FormComponent },
  { path: 'edit/:id', component: UserEditComponent },
  { path: 'tic', component:TicTacToeComponent},
  { path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
