import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Pedido } from 'src/app/models/pedido';
import { AuthService } from '../../autentificacion/service/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Servicios } from 'src/app/models/servicios';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  pedido: Pedido = {
    idPedido: '',
    servicio: {
      idServicio: '',
      nombreServicio: '',
      costo: 0,
      funcion: '',
      imagen: '',
      categoria: '',
      alt: '',
      stock: 0
    },
    cantidad: 0,
    total: 0
  }
  private pedidoColeccion: AngularFirestoreCollection<Pedido>

  private uid: string | null = null;

  constructor(
    private servicioAuth: AuthService,
    private servicioFirestore: AngularFirestore,
    public servicioRutas: Router
  ) {
    // creamos la subcoleccion dentro de la coleccion de usuarios y le damos ese valor a pedidosColeccion
    this.pedidoColeccion = this.servicioFirestore.collection(`usuarios/${this.uid}/pedido`);
  }
  iniciarCarrito() {
    this.servicioAuth.obtenerUid().then(uid => {
      this.uid = uid

      if (this.uid === null) {
        console.error('no se obtuvo el UID. Intente iniciar sesion');
        this.servicioRutas.navigate(['/inicio-sesion'])
      } else {
        this.pedidoColeccion = this.servicioFirestore.collection(`usuarios/${this.uid}/pedido`);
      }
    })
  }
  // obtiene los productos que ya estan dentor del pedido
  obtenerCarrito() {
    return this.pedidoColeccion.snapshotChanges().pipe(map(action =>
      action.map(a => a.payload.doc.data())))
  }

  crearPedido(servicio: Servicios, stock: number) {
    try {
      const idPedido = this.servicioFirestore.createId();
      this.pedido.idPedido = idPedido;
      this.pedido.servicio = servicio;
      this.pedido.cantidad = stock;
      this.pedido.total = servicio.costo * stock;

      this.pedidoColeccion.doc(idPedido).set(this.pedido);
    } catch (error) {
      Swal.fire({
        title: 'Oh no!',
        text: 'Ha ocurrido un error al subir el producto \n' + error,
        icon: 'error'
      })
    }
  }

  borrarPedido(pedido: Pedido) {
    try {
      this.pedidoColeccion.doc(pedido.idPedido).delete();

      Swal.fire({
        title: `´${pedido.servicio.nombreServicio} ha sido borrado`,
        text: 'Ha borrado su producto con exito',
        icon: 'info'
      })
    } catch (error) {
      Swal.fire({
        title: 'Oh no!',
        text: ' Ha ocurrido un error: \n' + error,
        icon: 'error'
      })
    }
  }
}