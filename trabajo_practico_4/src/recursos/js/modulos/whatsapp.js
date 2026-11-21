// Enlaces de WhatsApp: consulta general (botón flotante) y envío del pedido
// desde la pantalla de confirmación. No usa backend: abre WhatsApp Web o la app
// con el mensaje ya escrito.
import { formatearPrecio } from './util.js';

// Número en formato internacional, sin "+", espacios ni guiones.
// Argentina: 54 + 9 + 351 + 5999008
export const WHATSAPP_NUMERO = '5493515999008';

export const WHATSAPP_CONSULTA = 'Hola, quiero hacer una consulta sobre la tienda Élite.';

export function crearEnlaceWhatsApp(mensaje = '', numero = WHATSAPP_NUMERO) {
    const texto = mensaje ? `?text=${encodeURIComponent(mensaje)}` : '';
    return `https://wa.me/${numero}${texto}`;
}

// Arma el texto del pedido para enviarlo por WhatsApp.
export function mensajePedido(pedido) {
    const productos = pedido.items.map(
        (item) => `- ${item.nombre} (talle ${item.talle}) x${item.cantidad}: ${formatearPrecio(item.subtotal)}`
    );

    return [
        `Hola, quiero confirmar el pedido ${pedido.numero}.`,
        '',
        'Productos:',
        ...productos,
        '',
        `Subtotal: ${formatearPrecio(pedido.subtotal)}`,
        `Envío: ${formatearPrecio(pedido.envio)}`,
        `Total: ${formatearPrecio(pedido.total)}`,
        '',
        `Enviar a: ${pedido.cliente.nombre} ${pedido.cliente.apellido}`,
        `${pedido.cliente.direccion}, ${pedido.cliente.ciudad}, ${pedido.cliente.provincia} (${pedido.cliente['codigo-postal']})`,
        `Contacto: ${pedido.cliente.email}${pedido.cliente.telefono ? ` / ${pedido.cliente.telefono}` : ''}`,
    ].join('\n');
}
