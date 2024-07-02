import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//COMPONENTES LOCALES Y GLOBALES
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
//COMPONENTES DEL MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ]
})
export class SharedModule { }
