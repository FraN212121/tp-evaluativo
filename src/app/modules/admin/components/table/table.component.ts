import { Component } from '@angular/core';
import { Servicios } from 'src/app/models/servicios';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // creamos collecion local de productos -> la definimos como array
  collectionServicios: Servicios[] = [];

  
  servicioSeleccionado!: Servicios; // ! => toma valores vacios


  modalVisibleServicio: boolean = false;

  nombreImagen!: string // obtendra el nombre de la imagen

  imagen!: string// 


  // definimos formularios para los productos 
  /* 
  atributos alfanumericos (string) se inicializan con comillas simples
  atributos numericos (number) se inicializan ocn cero (0)
  */
  servicio = new FormGroup({
    nombreServicio: new FormControl('', Validators.required),
    costo: new FormControl(0, Validators.required),
    funcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    stock: new FormControl (0, Validators.required)
  })


  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
     // subscribe -> método de notificación de cambios (observable)
    this.servicioCrud.obtenerServicio().subscribe(servicio => {
      this.collectionServicios = servicio;

    })
    console.log(this.collectionServicios)
  }



  async agregarServicio() {
    if (this.servicio.valid) {
      let nuevoServicio: Servicios = {
        idServicio: '',
        nombreServicio: this.servicio.value.nombreServicio!,
        costo: this.servicio.value.costo!,
        funcion: this.servicio.value.funcion!,
        imagen: '',
        categoria: this.servicio.value.categoria!,
        alt: this.servicio.value.alt!,
        stock: this.servicio.value.stock!
      }

      // Enviamos nombre y url de la imagen; definimos carpeta de imagenes como "productos"
      await this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "servicios")
        .then(resp => {
          // encapsula una respeusta 
          this.servicioCrud.obtenerUrlImagen(resp)
            .then(url => {

              this.servicioCrud.crearServicios(nuevoServicio, url)
                .then(servicio => {
                  alert("Ha agregado un nuevo servicio con exito");
                  // resetea el formulario y las casillas quedan vacias
                  this.servicio.reset();
                })
                .catch(error => {
                  alert("Ha ocurrido un erro al cargar el servicio")

                  this.servicio.reset();
                })
            })

        })


    };
  }

  // CARGAR IMAGENES
  cargarImagen(event: any) {
    // variable para obtener el archivo subido desde le input del HTML
    let archivo = event.target.files[0];

    // variable para crear un nuevo objeto de tipo "archivo" o "file" y leerlo
    let reader = new FileReader();

    if (archivo != undefined) {
      // llamamos a metodo readAsDataURL para leer toda la informacion recibida
      // enviamos como parametro el "archivo" porque sera el encargador de tener
      // la info ingresada por el usuario

      reader.readAsDataURL(archivo);

      reader.onloadend = () => {

        let url = reader.result;

        if (url != null) {
          // definimos nombre de la imagen con atributo "name" del input
          this.nombreImagen = archivo.name;

          // definimos ruta de la imagen segun la url recibida 
          this.imagen = url.toString();
        }
      }
    }
  }

  // ELIMINAR PRODUCTOS
  // funcion vinculada al modal y boton de la tabla
  mostrarBorrar(servicioSeleccionado: Servicios) {
    this.modalVisibleServicio = true;

    this.servicioSeleccionado = servicioSeleccionado;
  }

  borrarServicio() {
    /* ahora enviamos tanto la IP  del producto (para identificarlo en la firestore)
     y la url de la imagen (para eliminarlo del almacenamiento de storage)
     ID y URL: identificadores propios de cada archivo en la base de datos
     */
    this.servicioCrud.eliminarServicio(this.servicioSeleccionado.idServicio, this.servicioSeleccionado.imagen)
      .then(respuesta => {
        alert("se ha podido eliminar ocn exito");
      })
      .catch(error => {
        alert("Ha ocurrido un error al eliminar el producto> \n" + error);
      })
  }


  // EDITAR PRODUCTOS
  // Se envía y llama al momento que tocamos botón "Editar" de la tabla
  mostrarEditar(servicioSeleccionado: Servicios) {
    this.servicioSeleccionado = servicioSeleccionado;
    /*
      Toma los valores del producto seleccionado y los va a
      autocompletar en el formulario del modal (menos el ID)
      autocompletar en el formulario del modal
      (menos el ID y la URL de la imagen)
    */
    this.servicio.setValue({
      nombreServicio: servicioSeleccionado.nombreServicio,
      costo: servicioSeleccionado.costo,
      funcion: servicioSeleccionado.funcion,
      // imagen: servicioSeleccionado.imagen,
      categoria:servicioSeleccionado.categoria,
      alt: servicioSeleccionado.alt,
      stock: servicioSeleccionado.stock
    })
  }

  // VINCULA A BOTÓN "editarProducto" del modal de "Editar"
  editarServicio() {
    let datos: Servicios = {
      // Solo idservicio no se modifica por el usuario
      idServicio: this.servicioSeleccionado.idServicio,
      /* Los demás atributos reciben nueva información/ 
      valor desde el formulario */
      nombreServicio: this.servicio.value.nombreServicio!,
      costo: this.servicio.value.costo!,
      funcion: this.servicio.value.funcion!,
      imagen: this.servicioSeleccionado.imagen,
      categoria:this.servicio.value.categoria!,
      alt: this.servicio.value.alt!,
      stock: this.servicio.value.stock!
    }

    // Verificamos si el usuario ingresa o no una nueva imagen
    if (this.imagen) {
      this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "servicios")
        .then(resp => {
          this.servicioCrud.obtenerUrlImagen(resp)
            .then(url => {
              datos.imagen = url; // Actualizamos URL de la imagen en los datos del formulario
              this.actualizarServicio(datos); // Actualizamos los datos
              this.servicio.reset(); // Vaciar las casillas del formulario
            })
            .catch(error => {
              alert("Hubo un problema al subir la imagen :( \n" + error);
              this.servicio.reset();
            })
        })
    } else {
      /*
        Actualizamos formulario con los datos recibidos del usuario, pero sin 
        modificar la imagen ya existente en Firestore y en Storage
      */
      this.actualizarServicio(datos);
    }
  }
  // ACTUALIZAR la información ya existente de los productos
  actualizarServicio(datos: Servicios) {
    // Enviamos al método el id del Servicio seleccionado y los datos actualizados
    this.servicioCrud.modificarServicio(this.servicioSeleccionado.idServicio, datos)
      .then(servicio => {
        alert("El servicio se ha modificado con éxito.");
      })
      .catch(error => {
        alert("Hubo un problema al modificar el servicio: \n" + error);
      })
  }
}

