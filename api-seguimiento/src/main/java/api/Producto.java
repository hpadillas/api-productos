package api;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "productos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto")
    private Long id;

    @Column(name = "nombre", nullable = false)
    private String nombre;

    @Column(name = "precio")
    private Double precio;

    @Column(name = "stock")
    private Integer stock;

    @Column(name = "estado")
    private Boolean estado;

    @JoinColumn(name = "categoria")
    private String categoria;

    @JoinColumn(name = "marca")
    private String marca;

    @JoinColumn(name = "unidad_medida")
    private String unidadMedida;

    @Column(name = "cantidad_unidades_medida")
    private Integer cantidadUnidadesMedida;

    @JoinColumn(name = "impuesto")
    private int impuesto;
}
