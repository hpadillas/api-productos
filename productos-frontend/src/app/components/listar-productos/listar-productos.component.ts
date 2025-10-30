import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductoService } from '../../servicios/producto.service';
import { Producto } from '../../dto/producto';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-productos.component.html'
})
export class ListarProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.getAll().subscribe(data => {
      this.productos = data;
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Seguro que deseas eliminar este producto?')) {
      this.productoService.delete(id).subscribe(() => this.cargarProductos());
    }
  }

  editar(id: number): void {
    this.router.navigate(['/productos/editar', id]);
  }

  nuevo(): void {
    this.router.navigate(['/productos/nuevo']);
  }
}

