// Se importa desde todas las páginas: mantiene actualizado el contador del menú.
// El botón flotante de WhatsApp se agrega solo en las vistas de ropa (inicio,
// catálogos y producto) llamando a agregarBotonWhatsApp().
import { contarUnidades } from './almacen.js';
import { crearBotonWhatsApp } from './componentes.js';
import { crearEnlaceWhatsApp, WHATSAPP_CONSULTA } from './whatsapp.js';

function actualizarContador() {
    const unidades = contarUnidades();
    document.querySelectorAll('[data-carrito-contador]').forEach((contador) => {
        contador.textContent = unidades;
        contador.hidden = unidades === 0;
    });
}

actualizarContador();
document.addEventListener('carrito:cambio', actualizarContador);
window.addEventListener('storage', actualizarContador); // cambios desde otra pestaña

// Botón de consulta general por WhatsApp, fijo en la esquina inferior derecha.
export function agregarBotonWhatsApp() {
    document.body.insertAdjacentHTML('beforeend', crearBotonWhatsApp(crearEnlaceWhatsApp(WHATSAPP_CONSULTA)));
}
