import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { MyformComponent } from './myform/myform.component';
import { FormSubmittedComponent } from './form-submitted/form-submitted.component';
import { AdminComponent } from './admin/admin.component';
import { SettingComponent } from './setting/setting.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'form', component: MyformComponent},
  {path: 'form-submitted', component: FormSubmittedComponent},
  {path: 'admin', component: AdminComponent, children: [
    {path: 'setting', component: SettingComponent}
  ]},
  {path: '**', redirectTo: '/home'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
