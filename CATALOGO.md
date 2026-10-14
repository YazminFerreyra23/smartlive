# Catálogo de ModoConectado

El inicio conserva las soluciones y los combos. El catálogo está en `/productos` y se carga por separado.

## Agregar o actualizar productos

Editar `src/app/products/product-catalog.service.ts`. Cada producto tiene un identificador estable, nombre, categoría, imagen, descripción, características y precio.

- Guardar imágenes en `src/assets/images/` y referenciarlas como `assets/images/nombre.png`.
- Usar un identificador único que no cambie cuando cambie el nombre comercial.
- Escribir precios como números en pesos argentinos: `price: 45000`. La pantalla aplica el formato de moneda.
- Usar `price: null` cuando el precio todavía no esté confirmado. Se muestra “Consultar precio”.
- Reemplazar las indicaciones de consulta en `features` por especificaciones verificadas del modelo que se vende.
- Para sumar una categoría, agregarla al tipo `ProductCategory` de `product.model.ts`. Los filtros se generan a partir de los productos.

El número de WhatsApp está centralizado en `src/app/shared/contact.ts`. Cada consulta incluye el nombre y la referencia del producto.

## Evolución

La interfaz consume `ProductCatalogService`, por lo que los datos pueden migrarse a una API sin incrustarlos en las plantillas. Al agregar cargas asíncronas, incorporar estados de carga y error.

Cuando se necesite administrar el catálogo sin editar código, sumar un backend y una base de datos para productos, categorías, imágenes, precios y disponibilidad. Para vender desde el sitio, sumar variantes, stock, carrito, pedidos y pagos: el servidor debe validar los precios y el stock al crear cada pedido.

## Publicación

El hosting debe devolver `index.html` al abrir rutas de Angular como `/productos` directamente o al recargar. Configurar el fallback de SPA antes de publicar.

Validar la compilación con `npm run build`.
