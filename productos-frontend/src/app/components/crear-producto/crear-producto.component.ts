import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../../servicios/producto.service';
import { Producto } from '../../dto/producto';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-producto.component.html'
})
export class CrearProductoComponent {
  productoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private router: Router
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      estado: [true],
      cantidadUnidadesMedida: [1, Validators.required],
      categoria: ['', Validators.required],
      marca: ['', Validators.required],
      unidadMedida: ['', Validators.required],
      impuesto: [0, [Validators.required, Validators.min(0)]]
    });
  }

  guardar(): void {
    if (this.productoForm.valid) {
      const producto: Producto = this.productoForm.value;
      this.productoService.create(producto).subscribe({
        next: () => {
          alert('Producto creado correctamente');
          this.router.navigate(['/productos']);
        },
        error: (err) => {
          console.error(err);
          alert('Error al crear el producto');
        }
      });
    } else {
      alert('Por favor completa todos los campos requeridos.');
    }
  }

  cancelar(): void {
    this.router.navigate(['/productos']);
  }
}



