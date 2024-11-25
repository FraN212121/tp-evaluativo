import { Component } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { CarritoService } from '../../services/carrito.service';
import { AuthService } from 'src/app/modules/autentificacion/service/auth.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  coleccionPedidos: Pedido[] = [];

  constructor(
    public servicioCarrito: CarritoService,
    public servicioAuth: AuthService
  ) { }

  ngOnInit() {
    this.servicioAuth.obtenerUid().then(uid => {
      if (uid) {
        this.servicioAuth.obtenerRol(uid).subscribe(rol => {
          if (rol === 'usuario') {
            // inicializamos le carrito
            this.servicioCarrito.iniciarCarrito();

            this.servicioCarrito.obtenerCarrito().subscribe(servicio =>
              this.coleccionPedidos = servicio
            )
          }else{
            console.error('No se obtuvo el usuario de manera correcta')
          }
        })
      }
    })
  }
  quitarPedido(pedido:Pedido){
    this.servicioCarrito.borrarPedido(pedido);
  }
}
