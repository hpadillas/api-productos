package api;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public List<Producto> getAll() {
        return productoRepository.findAll();
    }

    public Optional<Producto> getProductoById(Long id) {
        return productoRepository.findById(id);
    }

    public Producto guardar(ProductoRequestDTO dto) {
        Producto producto = new Producto();
        producto.setNombre(dto.getNombre());
        producto.setPrecio(dto.getPrecio());
        producto.setStock(dto.getStock());
        producto.setEstado(dto.getEstado());
        producto.setCantidadUnidadesMedida(dto.getCantidadUnidadesMedida());

        // Nuevos tipos simples
        producto.setCategoria(dto.getCategoria());
        producto.setMarca(dto.getMarca());
        producto.setUnidadMedida(dto.getUnidadMedida());
        producto.setImpuesto(dto.getImpuesto()); // int

        return productoRepository.save(producto);
    }

    public void eliminar(Long id) {
        productoRepository.deleteById(id);
    }

    public Producto actualizarProducto(Long id, ProductoRequestDTO dto) {
        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));

        producto.setNombre(dto.getNombre());
        producto.setPrecio(dto.getPrecio());
        producto.setStock(dto.getStock());
        producto.setEstado(dto.getEstado());
        producto.setCantidadUnidadesMedida(dto.getCantidadUnidadesMedida());
        producto.setCategoria(dto.getCategoria());
        producto.setMarca(dto.getMarca());
        producto.setUnidadMedida(dto.getUnidadMedida());
        producto.setImpuesto(dto.getImpuesto());

        return productoRepository.save(producto);
    }
}

