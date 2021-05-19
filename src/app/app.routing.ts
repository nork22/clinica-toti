import { HomeComponent } from './componentes/home/home.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { FaleConoscoComponent } from './componentes/fale-conosco/fale-conosco.component';

import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
  { path:'', component: HomeComponent },
  { path:'formulario', component: FormularioComponent },
  { path:'clientes', component: ClientesComponent },
  { path:'cliente', component: ClienteComponent },
  { path:'sobre', component: SobreComponent },
  { path:'fale-conosco', component: FaleConoscoComponent },
];

export const routing: ModuleWithProviders <any> = RouterModule.forRoot(APP_ROUTES);