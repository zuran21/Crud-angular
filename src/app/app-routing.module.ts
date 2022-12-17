import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';

import { ModuloadminitrativoComponent } from './pages/moduloadminitrativo/moduloadminitrativo.component';
import { BienvenidoComponent } from './pages/admin/bienvenido/bienvenido.component';
import { SlidebarComponent } from './pages/admin/slidebar/slidebar.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoriaComponent } from './pages/admin/categoria/categoria.component';
import { AgregarCategoriaComponent } from './pages/admin/agregar-categoria/agregar-categoria.component';
import { ExamenComponent } from './pages/admin/examen/examen.component';
import { AgregarExamenComponent } from './pages/admin/agregar-examen/agregar-examen.component';
import { PreguntaComponent } from './pages/admin/pregunta/pregunta.component';
import { AgregarPreguntaComponent } from './pages/admin/agregar-pregunta/agregar-pregunta.component';

//alumnos
import { AlumnoComponent } from './pages/moduloalumno/alumno/alumno.component';
import {ExamenalumnoComponent} from './pages/moduloalumno/examenalumno/examenalumno.component';
import {SlidebaComponent} from './pages/moduloalumno/slideba/slideba.component';


const routes: Routes = [
  {path : '', component : HomeComponent,pathMatch : 'full'},
  {path : 'login', component : LoginComponent,pathMatch : 'full'},
  {path:'singup', component:SingupComponent,pathMatch:'full'},
  {path : 'moduloAdmin', component : ModuloadminitrativoComponent,pathMatch : 'full'},



  {path : 'admin' ,component : DashboardComponent, 
  children:[
    {
      path : '' ,component : BienvenidoComponent, 
    },
    {
      path : 'slidebar' ,component : SlidebarComponent, 
    },
    {
      path : 'categoria-view' ,component : CategoriaComponent, 
    },
    {
      path : 'categoria-add' ,component : AgregarCategoriaComponent, 
    },
    {
      path : 'examen-view' ,component : ExamenComponent, 
    },
    {
      path : 'examen-add' ,component : AgregarExamenComponent, 
    },
    {
      path : 'pregunta-view/:examenId/:titulo' ,component : PreguntaComponent, 
    },
    {
      path : 'pregunta-add/:examenId/:titulo' ,component : AgregarPreguntaComponent, 
    },
    { 
      path : 'profile', component : ProfileComponent,
    }
   ] },


   {path:'alumnos', component:AlumnoComponent,
   children:[
     {
       path:'slideba' , component:SlidebaComponent,
     },
     {
       path:'examenalumno' , component:ExamenalumnoComponent,
     },
 
   ]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
