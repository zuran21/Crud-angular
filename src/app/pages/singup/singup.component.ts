import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { switchAll } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  public user = {
      username:'',
      password:'',
      nombuser:'',
      apelliuser:'',
      emailuser:'',
      telefuser:''

  }

  constructor(private userService: UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log (this.user);
    if(this.user.username == '' || this.user.username ==null){
      this.snack.open('El nombre de usuario es requerido','Aceptar',{
      duration: 3000,
      horizontalPosition:'right',
      verticalPosition:'bottom'
    });
      return;
    }
    this.userService.insertarusuario(this.user).subscribe(
      (data) =>{
        console.log(data);
        Swal.fire('Pokemon Registrado','Pokemon Guardado Exsitosamente','success')
      })
  }







}
