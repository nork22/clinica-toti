import { Component, OnInit } from '@angular/core';
import { FormularioService } from './../../services/formulario.service'
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor( private formularioService: FormularioService) { }

  ngOnInit(): void {
    
  }

  onDelete(id) {
    this.formularioService.deleteCliente(id).subscribe ( res =>{
    console.log(res)
    }, error => console.log(error)
    )
  }

  Oncreate(){
    
  }
}
