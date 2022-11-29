import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent  } from './pages/home/home.component';

import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { ModuloadministrativoComponent } from './pages/moduloadministrativo/moduloadministrativo.component';
import { ListarclientesComponent } from './pages/listarclientes/listarclientes.component';
import { InvitadosComponent } from './pages/invitados/invitados.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { BienvenidoComponent } from './pages/admin/bienvenido/bienvenido.component';
import { SlidebarComponent } from './pages/admin/slidebar/slidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';




const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path:'login', component:LoginComponent,pathMatch:'full'},
  {path:'singup', component:SingupComponent,pathMatch:'full'},
  {path:'listarClientes', component:ListarclientesComponent,pathMatch:'full'},
  {path:'moduloAdmin', component:ModuloadministrativoComponent,pathMatch:'full'},
  {path:'invitados', component:InvitadosComponent,pathMatch:'full'},

  {path:'admin', component:DashboardComponent, 
  children:[
    {
      path:'', component:BienvenidoComponent,
    },
    {
      path:'slidebar' , component:SlidebarComponent,
    }
  ]},
  {path:'profile', component:ProfileComponent,pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
