import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent  } from './pages/home/home.component';
import { ListarclientesComponent } from './pages/listarclientes/listarclientes.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { ModuloadministrativoComponent } from './pages/moduloadministrativo/moduloadministrativo.component';

const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path:'login', component:LoginComponent,pathMatch:'full'},
  {path:'singup', component:SingupComponent,pathMatch:'full'},
  {path:'listarClientes', component:ListarclientesComponent,pathMatch:'full'},
  {path:'moduloAdmin', component:ModuloadministrativoComponent,pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
