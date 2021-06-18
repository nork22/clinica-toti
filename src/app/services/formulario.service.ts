import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ClientRequest } from 'http';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  API_URL = 'http://localhost:8080';

  constructor( private httpClient: HttpClient) { }

  getUsuario() {
    return this.httpClient.get(`${this.API_URL}/usuario`)
  }

  deleteCliente(id: string){
    return this.httpClient.delete(`${this.API_URL}/cliente/${id}`)
  }

  updateCliente(id: string, updateCliente){
    return this.httpClient.put(`${this.API_URL}/cliente/${id}`, updateCliente)

  }

  createcliente(id: string, cliente) {
    return this.httpClient.post(`${this.API_URL}/cliente/${id}`,ClientRequest)


  }









}

