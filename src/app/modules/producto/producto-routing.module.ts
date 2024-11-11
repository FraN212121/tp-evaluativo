import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from '../producto/pages/servicios/servicios.component';
import { ServDistanciaComponent } from '../producto/pages/serv-distancia/serv-distancia.component';
import { ServPresencialesComponent } from '../producto/pages/serv-presenciales/serv-presenciales.component';


const routes: Routes = [
  {
    path: "servicios",component:ServiciosComponent
  },
  {
    path: "serv-distancia",component:ServDistanciaComponent
  },
  {
    path: "serv-presenciales",component:ServPresencialesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
