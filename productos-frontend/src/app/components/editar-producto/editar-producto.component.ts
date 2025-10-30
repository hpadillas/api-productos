import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../servicios/producto.service';
import { Producto } from '../../dto/producto';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editar-producto.component.html'
})
export class EditarProductoComponent implements OnInit {
  productoForm: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.productoService.getById(this.id).subscribe({
      next: (producto) => this.productoForm.patchValue(producto),
      error: (err) => {
        console.error(err);
        alert('No se pudo cargar el producto');
        this.router.navigate(['/productos']);
      }
    });
  }

  actualizar(): void {
    if (this.productoForm.valid) {
      const producto: Producto = this.productoForm.value;
      this.productoService.update(this.id, producto).subscribe({
        next: () => {
          alert('Producto actualizado correctamente');
          this.router.navigate(['/productos']);
        },
        error: (err) => {
          console.error(err);
          alert('Error al actualizar el producto');
        }
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/productos']);
  }
}



