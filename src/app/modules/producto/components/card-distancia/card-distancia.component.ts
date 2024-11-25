import { Component } from '@angular/core';
import { Servicios } from 'src/app/models/servicios';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-card-distancia',
  templateUrl: './card-distancia.component.html',
  styleUrls: ['./card-distancia.component.css']
})
export class CardDistanciaComponent {
// Definimos colección de productos locales
coleccionServicios: Servicios[] = [];
coleccionServiciosDistancia: Servicios[] = [];

// Variable local para manejar estado de un modal
servicioSeleccionado!: Servicios;

// Variable local para manejar estado de un modal
modalVisible: boolean = false;

constructor(public servicioCrud: CrudService) {}

ngOnInit(): void {
  this.servicioCrud.obtenerServicio().subscribe(servicio => {
    this.coleccionServicios = servicio;
    this.mostrarServiciosDistancia();
  });
}

// Función para filtrar y ordenar los productos de tipo "juegos"
mostrarServiciosDistancia() {
  this.coleccionServiciosDistancia = []; // Reiniciar la colección

  this.coleccionServicios.forEach(servicio => {
    if (servicio.categoria === "Distancia") {
      this.coleccionServiciosDistancia.push(servicio);
    }
  });

  // Ordenar la colección de juegos por nombre
  this.coleccionServiciosDistancia.sort((a, b) => a.nombreServicio.localeCompare(b.nombreServicio));
}

mostrarVer(info: Servicios) {
  this.modalVisible = true;
  this.servicioSeleccionado = info;
}

servicioAnadido(servicio: Servicios) {
  try {
    Swal.fire({
      title: 'Lo sentimos,',
      text: 'Ocurrio un error, carrito en mantenimiento',
      icon: 'info'
    });
  } catch (error) {
    Swal.fire({
      title: 'Lo sentimos,',
      text: 'Ha ocurrido un error, carrito en mantenimiento\n' + error,
      icon: 'error'
/*  try {
    Swal.fire({
      title: 'Perfecto!',
      text: `Ha añadido ${producto.nombre} al carrito`,
      icon: 'info'  
    });
  } catch (error) {
    Swal.fire({
      title: '¡Oh no!',
      text: 'Ha ocurrido un error\n' + error,
      icon: 'error'
*/
    });
  }
}
}


