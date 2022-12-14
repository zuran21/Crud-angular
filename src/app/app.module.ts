import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { ListarclientesComponent } from './pages/listarclientes/listarclientes.component';
import { ModuloadministrativoComponent } from './pages/moduloadministrativo/moduloadministrativo.component';
import { InvitadosComponent } from './pages/invitados/invitados.component';
import { SlidebarComponent } from './pages/admin/slidebar/slidebar.component';
import {MatListModule} from '@angular/material/list';
import { BienvenidoComponent } from './pages/admin/bienvenido/bienvenido.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import {MatDividerModule} from '@angular/material/divider';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoriaComponent } from './pages/admin/categoria/categoria.component';
import { AgregarCategoriaComponent } from './pages/admin/agregar-categoria/agregar-categoria.component';
import { ExamenComponent } from './pages/admin/examen/examen.component';
import { AgregarExamenComponent } from './pages/admin/agregar-examen/agregar-examen.component';
import { PreguntaComponent } from './pages/admin/pregunta/pregunta.component';
import { AgregarPreguntaComponent } from './pages/admin/agregar-pregunta/agregar-pregunta.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SingupComponent,
    HomeComponent,
    ListarclientesComponent,
    ModuloadministrativoComponent,
    InvitadosComponent,
    SlidebarComponent,
    BienvenidoComponent,
    DashboardComponent,
    ProfileComponent,
    CategoriaComponent,
    AgregarCategoriaComponent,
    ExamenComponent,
    AgregarExamenComponent,
    PreguntaComponent,
    AgregarPreguntaComponent,
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
