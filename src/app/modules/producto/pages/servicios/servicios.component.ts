import { Component } from '@angular/core';
import { Servicios } from 'src/app/models/servicios';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
 /* public info: Servicios [];*/

  constructor() {
   /* this.info = [
      {
        idServicio: "",
        nombreServicio: "Tameana",
        costo: "$20.000",
        funcion: "Se trata de una terapia intensiva la cual moviliza tu cuerpo en todos los aspectos posibles: físicos, emocionales y en el plano espiritual.",
        imagen: "https://acdn.mitiendanube.com/stores/002/141/858/products/9284d3da-46e0-45fc-9d47-90dcb47266741-d3fc452a1d6577a1ff16699832219705-640-0.jpeg",
        alt: ''
      },
      {
        idServicio: "",
        nombreServicio: "Reiki",
        costo: "$20.000",
        funcion: "Se encuenrtar el emisor que, a través de sus manos y tacto transmite Reiki a un receptor, con el fin de intentar eliminar molestias y/o enfermedades.",
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
      },{
        idServicio: "",
        nombreServicio: "Biodescodificación",
        costo: "$30.000",
        funcion: "La biodescodificación sugiere que algunas enfermedades y problemas de salud tienen un origen emocional y que, para sanar físicamente, es necesario identificar y liberar el conflicto emocional. Como conflictos emocionales no resueltos o experiencias traumáticas.",
        imagen: "https://d22fxaf9t8d39k.cloudfront.net/350707da09681b2df12966062cd27ed327e2f0a14d0ad3035934bd8941a0d011105196.jpeg",
        alt: ''
      },{
        idServicio: "",
        nombreServicio: "Procesos de cuerpo",
        costo: "$30.000",
        funcion: "Los procesos de Access Consciousness, se basan en la idea de que el cuerpo y la mente almacenan bloqueos energéticos que pueden ser liberados a través del toque suave y la aplicación de técnicas específicas.",
        imagen: "https://anabanda.com.co/wp-content/uploads/2023/04/procesos-energeticos-de-cuerpo-ACCESS_ana-banda-holistica-03.jpg",
        alt: ''
      },{
        idServicio: "",
        nombreServicio: "Mesa radiónica cuántica",
        costo: "$20.000",
        funcion: "Es una herramienta energética utilizada en el ámbito de la sanación, basada en conceptos de radiónica y física cuántica. Utiliza gráficos, símbolos, péndulos, etc. para trabajar a nivel energético y vibracional con la intención de equilibrar y liberar bloqueos en diferentes aspectos de la vida.",
        imagen: "https://lenormind.com/wp-content/uploads/2022/03/STORE_Mesa-Infinity-ok.jpg",
        alt: ''
      },
    ]*/
  }
  servicioagregar() {
    alert("El carrito está en mantenimiento.");
}
}