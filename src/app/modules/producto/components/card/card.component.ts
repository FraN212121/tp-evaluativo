import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Servicios } from 'src/app/models/servicios';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { CarritoService } from 'src/app/modules/carrito/services/carrito.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // definimos coleccion de productos locales
  coleccionServicios: Servicios[] = [];

  // variable local para seleccionar un producto en especifico 
  servicioSeleccionado!: Servicios;

  // variable local para manejar el estado del modal
  modalVisible: boolean = false;

  // booleano  para manejar la visibilidad de "ultima compra"
  compraVisible: boolean = false;

  // directivas para comunicarse con el componente padre
  @Input() servicioReciente: string = '';
  @Output() servicioAgregado = new EventEmitter<Servicios>();
  stock: number = 0;


  constructor(public servicioCrud: CrudService,
    public servicioCarrito: CarritoService
  ) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerServicio().subscribe(servicios => {
      this.coleccionServicios = servicios;
    })
  }

  // funcion para mostrar mas informacion de los productos 
  mostrarVer(info: Servicios) {
    this.modalVisible = true;
    this.servicioSeleccionado = info;
  }


  agregarServicio(info: Servicios) {
    const stockDeseado = Math.trunc(this.stock);

    if (stockDeseado <= 0 || stockDeseado > info.stock) {
      Swal.fire({
        title: '',
        text: '',
        icon: 'error'
      })
    }else{
      this.servicioCarrito.crearPedido(info,stockDeseado);
    }
  }

  servicioAnadido(servicios: Servicios) {
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
      })
    }
  }
}