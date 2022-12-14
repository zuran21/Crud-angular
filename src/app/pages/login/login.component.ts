import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snack:MatSnackBar, private loginService:LoginService, private router:Router) { }

  public datalogin = {
    username :'',
    password :''
  }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.datalogin.username == "" || this.datalogin.username.trim() == null){
      this.snack.open("Debe ingresar el usuario pokemon", 'Aceptar', {duration:3000})
      return;
    }
    if(this.datalogin.password == "" || this.datalogin.password.trim() == null){
      this.snack.open("Debe ingresar la contraseña", 'Aceptar', {duration:3000})
      return;
    }
  
    this.loginService.generarToken(this.datalogin).subscribe(
      (data:any)=>{
        console.log(data);
        this.loginService.loginuser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any) =>{
          this.loginService.setuser(user);
          console.log(user);

          if(this.loginService.getUseRol() == 'administrador'){            
            this.router.navigate(['/admin']);
            this.loginService.logginStatusSubject.next(true);
          }else if(this.loginService.getUseRol() == 'Cliente'){
          this.router.navigate(["/listarClientes"]);
          this.loginService.logginStatusSubject.next(true);
        }else if(this.loginService.getUseRol() == 'invitado'){
          this.router.navigate(["/invitados"]);
          this.loginService.logginStatusSubject.next(true);
      }})
      
      }
    )



  }
  
}
