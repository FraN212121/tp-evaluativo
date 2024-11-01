import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';

// componentes de material
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './components/card/card.component';
import { CardDistanciaComponent } from './components/card-distancia/card-distancia.component';

@NgModule({
  declarations: [
    ServiciosComponent,
    CardComponent,
    CardDistanciaComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ServiciosModule { }
