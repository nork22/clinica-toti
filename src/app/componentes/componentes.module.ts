import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { SobreComponent } from './sobre/sobre.component';



@NgModule({
  declarations: [
    HomeComponent,
    ClientesComponent,
    FormularioComponent,
    ClienteComponent,
    FaleConoscoComponent,
    SobreComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HomeComponent,
    ClientesComponent,
    FormularioComponent,
    ClienteComponent,
    FaleConoscoComponent,
    SobreComponent
  ]
})
export class ComponentesModule { }
