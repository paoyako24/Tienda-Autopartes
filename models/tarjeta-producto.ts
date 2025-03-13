export interface TarjetaProducto {
    sku: string;
    srcImg: string;
    descripcionProducto: string;
    precio: string;
    oferta?: string;
    tieneOferta?: boolean;
    ranking?: string;
}