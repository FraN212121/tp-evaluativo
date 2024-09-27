import { Component } from '@angular/core';
import { Servicios } from 'src/app/models/servicios';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public info: Servicios [];

  constructor() {
    this.info = [
      {
        idServicio: "",
        nombreServicio: "Tameana",
        costo: "$20.000",
        funcion: "Terapia intensiva la cual moviliza tu cuerpo en todos los aspectos posibles: físicos, emocionales y en el plano espiritual.",
        imagen: "https://acdn.mitiendanube.com/stores/002/141/858/products/9284d3da-46e0-45fc-9d47-90dcb47266741-d3fc452a1d6577a1ff16699832219705-640-0.jpeg",
        alt: ''
      },
      {
        idServicio: "",
        nombreServicio: "Reiki",
        costo: "$20.000",
        funcion: "Un emisor que, a través de sus manos transmite Reiki a un receptor, con el fin de intentar eliminar molestias y enfermedades.",
        imagen: "https://files.nccih.nih.gov/files/reiki-GettyImages-1146122726-square.jpg",
        alt: ''
      },
      {
        idServicio: "",
        nombreServicio: "Barras de access",
        costo: "$30.000",
        funcion: "Consiste en tocar una serie de puntos específicos en la cabeza con la intención de liberar tensiones y bloqueos mentales y emocionales.",
        imagen: "https://sanandosanamos.com/wp-content/uploads/2022/11/Diseno-sin-titulo-4.jpg",
        alt: ''
      },
    ]
  }
}
