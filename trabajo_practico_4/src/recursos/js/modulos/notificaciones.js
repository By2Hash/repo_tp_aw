
let contenedor;

function obtenerContenedor() {
    if (!contenedor) {
        contenedor = document.createElement('div');
        contenedor.className = 'notificaciones';
        document.body.append(contenedor);
    }
    return contenedor;
}

// tipo: 'exito' | 'error' | 'aviso'.
export function mostrarNotificacion(mensaje, { tipo = 'exito', duracion } = {}) {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion--${tipo}`;
    notificacion.setAttribute('role', tipo === 'error' ? 'alert' : 'status');

    const texto = document.createElement('p');
    texto.className = 'notificacion__texto';
    texto.textContent = mensaje; // textContent: el mensaje nunca se interpreta como HTML

    const cerrar = document.createElement('button');
    cerrar.className = 'notificacion__cerrar';
    cerrar.type = 'button';
    cerrar.setAttribute('aria-label', 'Cerrar notificación');
    cerrar.textContent = '\u00d7';
    cerrar.addEventListener('click', () => notificacion.remove());

    notificacion.append(texto, cerrar);
    obtenerContenedor().append(notificacion);

    const tiempo = duracion ?? (tipo === 'error' ? 0 : 6000);
    if (tiempo > 0) setTimeout(() => notificacion.remove(), tiempo);
    return notificacion;
}