import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosModule } from './servicios.module';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {
    path: "",component: ServiciosComponent
  },
  {
    path: "servicios",component:ServiciosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
