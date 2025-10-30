import { Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'productos', component: ListarProductosComponent },
  { path: 'productos/nuevo', component: CrearProductoComponent },
  { path: 'productos/editar/:id', component: EditarProductoComponent }
];

