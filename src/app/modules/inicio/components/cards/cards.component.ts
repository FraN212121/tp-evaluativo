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
        id: "",
        nombreServicio: "Tameana",
        costo: "$20.000",
        funcion: "Terapia intensa que moviliza tu cuerpo en todos los aspectos físicos, emocionales y en el plano espiritual.",
        imagen: "https://acdn.mitiendanube.com/stores/002/141/858/products/9284d3da-46e0-45fc-9d47-90dcb47266741-d3fc452a1d6577a1ff16699832219705-640-0.jpeg",
      },
      {
        id: "",
        nombreServicio: "Reiki",
        costo: "$20.000",
        funcion: "Se basa en un emisor que, a través de sus manos transmite Reiki a un receptor que puede ser él mismo u otra persona, con el fin de intentar eliminar molestias y enfermedades",
        imagen: "https://files.nccih.nih.gov/files/reiki-GettyImages-1146122726-square.jpg",
      },
      {
        id: "",
        nombreServicio: "Barras de access",
        costo: "$30.000",
        funcion: "Consiste en tocar una serie de puntos específicos en la cabeza con la intención de liberar tensiones y bloqueos mentales y emocionales",
        imagen: "https://sanandosanamos.com/wp-content/uploads/2022/11/Diseno-sin-titulo-4.jpg",
      },{
        id: "",
        nombreServicio: "Biodescodificacion",
        costo: "$30.000",
        funcion: "Es una disciplina terapéutica que se basa en la idea de que nuestras enfermedades y dolencias físicas tienen un origen emocional o psicológico subyacente.",
        imagen: "https://d22fxaf9t8d39k.cloudfront.net/350707da09681b2df12966062cd27ed327e2f0a14d0ad3035934bd8941a0d011105196.jpeg",
      },
    ]
  }
}
