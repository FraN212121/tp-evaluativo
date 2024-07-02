import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CardsComponent } from './components/cards/cards.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';



@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
  exports: [
    InicioComponent,
    CardsComponent
  ]
})
export class InicioModule { }
