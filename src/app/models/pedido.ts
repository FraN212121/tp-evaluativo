import { Servicios } from "./servicios";

export interface Pedido {
    idPedido:string;
    servicio: Servicios;
    cantidad: number;
    total: number;
}
