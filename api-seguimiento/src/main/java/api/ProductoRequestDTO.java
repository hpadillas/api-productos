package api;

public class ProductoRequestDTO {

    private String nombre;
    private Double precio;
    private Integer stock;
    private Boolean estado;
    private Integer cantidadUnidadesMedida;

    // Ahora los campos relacionados son simples
    private String categoria;
    private String marca;
    private String unidadMedida;
    private int impuesto;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public Boolean getEstado() {
        return estado;
    }

    public void setEstado(Boolean estado) {
        this.estado = estado;
    }

    public Integer getCantidadUnidadesMedida() {
        return cantidadUnidadesMedida;
    }

    public void setCantidadUnidadesMedida(Integer cantidadUnidadesMedida) {
        this.cantidadUnidadesMedida = cantidadUnidadesMedida;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getUnidadMedida() {
        return unidadMedida;
    }

    public void setUnidadMedida(String unidadMedida) {
        this.unidadMedida = unidadMedida;
    }

    public int getImpuesto() {
        return impuesto;
    }

    public void setImpuesto(int impuesto) {
        this.impuesto = impuesto;
    }
}

