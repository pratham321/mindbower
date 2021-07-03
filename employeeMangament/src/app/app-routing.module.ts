import { SubscriptionComponent } from './dashboard/subscription/subscription.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChargeComponent } from './dashboard/charge/charge.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },{
path:'login',
component:LoginComponent
  },{
path:'register',
component:RegisterComponent
  },{
    path:'Dashboard',
    component:DashboardComponent,
    children:[{

      path:'employee',
      component:EmployeeComponent
    },{
      path:'charge',
      component:ChargeComponent
    },{
      path:'subscription',
      component:SubscriptionComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

