import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosModule } from './servicios.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { CardComponent } from './components/card/card.component';
import { CardDistanciaComponent } from './components/card-distancia/card-distancia.component';

const routes: Routes = [
  {
    path: "",component: ServiciosComponent
  },
  {
    path: "servicios",component:ServiciosComponent
  },
  {
    path: "card",component:CardComponent
  },
  {
    path: "card-distancia",component:CardDistanciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
