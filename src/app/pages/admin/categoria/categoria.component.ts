import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria:any []

  constructor(private catservise:CategoriaService) { }

  ngOnInit(): void { 
    this.catservise.listarCategoria().subscribe(
      (dato:any) => {
        this.categoria = dato;
      })

  }
  
}
