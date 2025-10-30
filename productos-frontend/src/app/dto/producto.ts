export interface Producto {
  id?: number;
  nombre: string;
  precio: number;
  stock: number;
  estado: boolean;
  cantidadUnidadesMedida: number;
  categoria: string;
  marca: string;
  unidadMedida: string;
  impuesto: number;
}
