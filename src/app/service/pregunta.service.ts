import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http:HttpClient) { }

  public listarPreguntas(){
    return this.http.get(`${urlbase}/pregunta/obtener`,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }


  public agregarPreguntas(preguntas:any){
    return this.http.post(`${urlbase}/pregunta/agregar`,preguntas,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  public modificarPreguntas(preguntas:any){
    return this.http.put(`${urlbase}/pregunta/modificar`,preguntas,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  public obtenerPreguntasExamen(id:any){
    return this.http.get(`${urlbase}/pregunta/examen/${id}`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  public obtenerPreguntasUnico(id:any){
    return this.http.get(`${urlbase}/pregunta/obtener/${id}`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  public listarPreguntasExamenAdmin(id:any){
    return this.http.get(`${urlbase}/pregunta/examen/todos/${id}`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

  public evaluarExamen(preguntas:any){
    return this.http.post(`${urlbase}/pregunta/evaluar-examen`,preguntas,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  });
  }

}
