# Élite — Tienda de Ropa · Aplicaciones Web 1

Trabajos prácticos de **Aplicaciones Web 1** (Analista de Sistemas y Desarrollo de Software).
El proyecto final es **Élite**, una tienda de ropa hecha íntegramente con **HTML, CSS y JavaScript**, sin frameworks ni backend.

---

## Estructura del repositorio

```
REPO--TPs--AW/
├── Trabajo_Practico_1/       # Informes en PDF
├── trabajo_practico_2/       # Maquetado HTML del sitio
├── trabajo_practico_3/       # Estilos CSS del sitio
└── trabajo_practico_4/       # Sitio funcional con JavaScript
    ├── src/
    │   ├── datos/            # JSON: productos y provincias
    │   ├── recursos/
    │   │   ├── estilo/       # Hoja de estilos principal
    │   │   ├── imagenes/     # Logo, productos e iconos
    │   │   └── js/
    │   │       ├── modulos/  # Lógica reutilizable
    │   │       └── vistas/   # Una vista por página (vista.*.js)
    │   ├── index.html
    │   ├── catalogo_hombre.html
    │   ├── catalogo_mujer.html
    │   ├── producto.html
    │   ├── carrito.html
    │   ├── checkout_envio.html
    │   ├── checkout_pago.html
    │   └── checkout_confirmacion.html
    └── package.json
```

---

## TP4 — Élite (tienda funcional)

### Cómo ejecutarlo

Requiere **Node.js** y **pnpm**.

```bash
cd trabajo_practico_4
pnpm install
pnpm dev
```

Abrí la URL que muestra la consola (five-server, por defecto `http://localhost:5500`).
No abras los `.html` con doble clic: los módulos ES y `fetch` necesitan un servidor local.

### Páginas

| Página | Descripción |
|---|---|
| `index.html` | Portada y productos destacados |
| `catalogo_hombre.html` / `catalogo_mujer.html` | Catálogo con filtros y ordenamiento |
| `producto.html?id=…` | Detalle del producto con galería y talles |
| `carrito.html` | Carrito persistente con cantidades y totales |
| `checkout_envio.html` | Paso 1: datos personales y de entrega |
| `checkout_pago.html` | Paso 2: método de pago y resumen |
| `checkout_confirmacion.html` | Paso 3: pedido confirmado |

### Funcionalidades

- **Catálogo dinámico** desde `datos/productos.json`: búsqueda, filtros por categoría, talle, color y precio, y orden alfabético / por novedad / por destacados.
- **Producto individual** con miniaturas, selector de talle y cantidad.
- **Carrito** guardado en `localStorage`, con alta, cambio de cantidad y eliminación.
- **Checkout en tres pasos** con barra de progreso, resumen del pedido y cálculo de subtotal, envío y total.
- **Validaciones** en HTML (`required`, `type="email"`) y en JavaScript (`modulos/formularios.js`), con mensajes propios y foco en el primer error.
- **Envío del pedido por WhatsApp** desde la confirmación, con el detalle ya armado (`modulos/whatsapp.js`). Número de la tienda: `+54 9 351 599-9008`.
- **Botón flotante de WhatsApp** de consulta, fijo abajo a la derecha, en inicio, catálogos y producto.
- **Accesibilidad**: HTML semántico, `aria-label`, `aria-current`, estados de error y foco visible.
- **Manejo de errores** de carga con `try`/`catch` y mensajes en pantalla.

### Organización del código

- `modulos/` — piezas reutilizables:
  - `datos.js` (fetch de JSON), `almacen.js` (localStorage), `calculos.js`, `cantidad.js`
  - `componentes.js` (arma el HTML), `render.js` (escribe en el DOM)
  - `formularios.js` (validación), `whatsapp.js` (enlaces y mensaje del pedido)
  - `comun.js` (contador del carrito y botón de WhatsApp), `util.js` (helpers)
- `vistas/` — una por página: `vista.inicio.js`, `vista.catalogo.js`, `vista.producto.js`, `vista.carrito.js`, `vista.checkout-envio.js`, `vista.checkout-pago.js`, `vista.confirmacion.js`.
- **CSS** con convención **BEM** (`bloque__elemento--modificador`), ordenado de lo genérico a lo específico y con una sección responsive.
- Los productos se marcan con `<article>` dentro de la grilla y el menú principal se repite igual en todas las páginas.

### Datos y persistencia

- `datos/productos.json`: configuración de la tienda y listado de productos (precio, talle, color, imágenes, destacado, fecha).
- `datos/provincias.json`: provincias para el formulario de envío.
- Claves de `localStorage`: `elite_carrito`, `elite_envio` y `elite_pedido`.

---

## TP1, TP2 y TP3

- **TP1**: informes en PDF sobre el sitio propuesto.
- **TP2**: maquetado HTML de las páginas del sitio.
- **TP3**: hoja de estilos CSS del maquetado.
- **TP4**: versión final con JavaScript, datos JSON, carrito, checkout y WhatsApp.

---

## Tecnologías

HTML5 semántico · CSS3 (BEM y responsive) · JavaScript (ES Modules, `async/await`, `fetch`, eventos) · JSON · `localStorage` · five-server para desarrollo local.
