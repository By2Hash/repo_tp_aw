// Vista del paso 3: muestra el pedido guardado (JSON) y permite confirmarlo por WhatsApp.
import '../modulos/comun.js';
import { obtenerPedido, guardarPedido } from '../modulos/almacen.js';
import { pintarProductosResumen, pintarTotales } from '../modulos/render.js';
import { escaparHTML } from '../modulos/util.js';
import { crearEnlaceWhatsApp, mensajePedido } from '../modulos/whatsapp.js';
import { mostrarNotificacion } from '../modulos/notificaciones.js';

const pedido = obtenerPedido();
const texto = document.querySelector('#pedido-texto');
const botonWhatsApp = document.querySelector('#enviar-whatsapp');

// Arma el texto principal según si ya se abrió WhatsApp o no.
function pintarTexto() {
    const estadoWhatsApp = pedido.whatsappAbierto
        ? 'Abrimos WhatsApp con el detalle de tu pedido: enviá el mensaje en el chat para confirmarlo.'
        : 'Tu pedido quedó registrado. Enviá el detalle por WhatsApp para confirmarlo.';
    texto.innerHTML =
        `${estadoWhatsApp} ` +
        `Vas a recibir tu pedido en ${escaparHTML(pedido.cliente.direccion)}, ${escaparHTML(pedido.cliente.ciudad)}, en los próximos días hábiles.`;
}

// Click en "Enviar pedido por WhatsApp": el enlace se abre solo; acá avisamos en pantalla.
function avisarWhatsApp() {
    pedido.whatsappAbierto = true;
    guardarPedido(pedido);
    pintarTexto();
    mostrarNotificacion(
        'Abrimos WhatsApp con el detalle de tu pedido. Enviá el mensaje en el chat para confirmarlo.',
        { tipo: 'exito' }
    );
}

if (!pedido) {
    location.replace('index.html'); // no hay pedido que mostrar
} else {
    document.querySelector('#pedido-numero').textContent = `Pedido Nº ${pedido.numero}`;
    pintarProductosResumen(document.querySelector('#resumen-productos'), pedido.items);
    pintarTotales(document.querySelector('#resumen-totales'), pedido);
    pintarTexto();

    // Envío del pedido por WhatsApp: el mensaje ya viene armado.
    botonWhatsApp.href = crearEnlaceWhatsApp(mensajePedido(pedido));
    botonWhatsApp.hidden = false;
    botonWhatsApp.addEventListener('click', avisarWhatsApp);

    // Aviso de pedido registrado (una sola vez por pedido, no cada vez que se recarga).
    if (!pedido.avisado) {
        pedido.avisado = true;
        guardarPedido(pedido);
        mostrarNotificacion(`Pedido ${pedido.numero} registrado correctamente.`, { tipo: 'exito' });
    }
}