import { ProductoRoutingModule } from './producto-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// componentes de material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ServiciosComponent } from '../producto/pages/servicios/servicios.component';
import { ServDistanciaComponent } from './pages/serv-distancia/serv-distancia.component';
import { ServPresencialesComponent } from './pages/serv-presenciales/serv-presenciales.component';
import { CardComponent } from './components/card/card.component';
import { CardDistanciaComponent } from './components/card-distancia/card-distancia.component';
import { CardPresencialesComponent } from './components/card-presenciales/card-presenciales.component';

@NgModule({
  declarations: [
    ServiciosComponent,
    ServPresencialesComponent,
    ServDistanciaComponent,
    CardComponent,
    CardDistanciaComponent,
    CardPresencialesComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ServiciosComponent,
    ServPresencialesComponent,
    ServDistanciaComponent,
    CardComponent,
    CardDistanciaComponent,
    CardPresencialesComponent,
  ]
})
export class ProductoModule { }
