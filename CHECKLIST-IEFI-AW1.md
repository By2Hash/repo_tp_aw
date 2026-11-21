# Checklist — Examen IEFI · Aplicaciones Web 1

**Materia:** Aplicaciones Web 1
**Docente:** Andrés Senn
**Modalidad:** Presencial
**Fecha:** 25/11/2026
**Carrera:** Analista de Sistemas y Desarrollo de Software


> El desarrollo es **individual**. Se deben completar todas las consignas de la aplicación propuesta, finalizando con el **TP4 en su totalidad y su despliegue a producción**, más un **video** exponiendo el tema designado.

---

## 1. Integración con JavaScript (SP4 y SP5) — contenidos obligatorios

- [x] **1.1** Todas las correcciones realizadas en los TP1/2/3/4. — TP4: corregidos los 7 puntos del README (TP1/2/3 no revisados en esta sesión).
- [x] **1.2** Sección de filtros del contenido del catálogo. — `vistas/vista.catalogo.js`: búsqueda, categoría, talle, color, orden y precio.
- [x] **1.3** Proceso completo propuesto en carro de compras / reservas / pedidos, etc. (envío real por WhatsApp o email + notificación en la interfaz; hay plataformas gratis para el envío de correos). — Pedido completo (envío → pago → confirmación) con envío real por WhatsApp desde la confirmación (`modulos/whatsapp.js`, nº 5493515999008) y botón flotante de consulta en inicio, catálogos y producto.
- [x] **1.4** Trabajo con eventos JavaScript para filtros, envío de formularios, etc. — filtros, alta al carrito, submit y validación en vivo.
- [x] **1.5** Uso de módulos ESModules (`import`/`export`). — todo `modulos/` y `vistas/`.
- [x] **1.6** Modularización del código. — `modulos/` (lógica reutilizable) + `vistas/` (una por página), sin módulos duplicados.
- [x] **1.7** Construcción de JSON con los datos a renderizar en la interfaz. — `datos/productos.json`, `datos/provincias.json` y el pedido JSON del checkout.
- [x] **1.8** Uso de la función global `fetch`. — `modulos/datos.js`.
- [x] **1.9** Gestión de errores con `try`/`catch`. — carga de datos, almacenamiento y vistas.
- [x] **1.10** Uso de persistencia de datos con `localStorage`. — `modulos/almacen.js` (carrito, envío y pedido).
- [x] **1.11** Obtener datos desde JSON y renderizar la vista. — inicio, catálogos, producto y resumen de compra.
- [x] **1.12** Validaciones del formulario vía HTML y vía JavaScript. — `required`/`type="email"` en envío + reglas en `modulos/formularios.js`.
- [x] **1.13** Organizar recursos en distintos directorios. — `src/recursos/{estilo,imagenes,js/{modulos,vistas}}` y `src/datos/`.
- [ ] **1.14** Publicar la web en Vercel u otra plataforma que se pueda integrar con GitHub. — Pendiente de despliegue.

---

## 2. Video — desarrollo del tema: CI/CD y testing en front-end e implementación con GitHub Workflows

- [ ] **2.1** Investigación individual del tema a exponer.
- [ ] **2.2** Definición de los conceptos:
  - [ ] **2.2.1** CI (Integración Continua).
  - [ ] **2.2.2** CD (Entrega/Despliegue Continuo).
  - [ ] **2.2.3** Testing y sus tipos: unitarios, de integración y E2E.
  - [ ] **2.2.4** Herramientas utilizadas para los distintos tipos de testing.
- [ ] **2.3** Importancia de la adopción del flujo y su automatización en la práctica profesional.
- [ ] **2.4** Ejemplo gráfico del flujo.
- [ ] **2.5** Respaldo de fuentes documentales.

### Formato y estructura del video

- [ ] Duración **entre 8 y 12 minutos**.
- [ ] Cada integrante habla sobre el video, capturando su imagen en un **recuadro sobre la presentación** (cámara web).
- [ ] **Presentación de la situación o problema:** contar una problemática buscando fuentes y casos reales.
- [ ] **Presentación de la herramienta/estrategia/práctica** que lo soluciona (desarrollo del concepto como estrategia de solución).
- [ ] **Demostración en un ejemplo de código genérico y/o diagrama de flujo del sistema:** mostrar cómo se implementa en un sistema, explicando el código o flujo implementado.
- [ ] **Herramientas utilizadas y fuentes consultadas.**

---

## 3. Entregas

- [ ] **Proyecto completo en PDF (1 solo)** que incluya la propuesta y **todos los informes**. Incluir **índice**.
- [ ] **Código completo y funcional** del proyecto publicado.
- [ ] **Enlace de la web publicada** dentro del PDF del proyecto.
  - Link del sitio web publicado: ____________________________________________
- [ ] **Enlace al repositorio** vinculado a la web publicada (dentro del PDF).
  - Link del repositorio: ____________________________________________________
- [ ] **Video y PDF de las diapositivas.**
- [ ] **Link al video en Drive** accesible para la cuenta `asenn@ies21.edu.ar`.
  - Link del video: __________________________________________________________
- [ ] **PDF de las diapositivas** utilizadas.
- [ ] **Este documento** con los datos completos por alumno en formato **DOCX (NO PDF)**.

---

## 4. Criterios de evaluación (rúbrica)

- Aplicación de las herramientas y fundamentos de la materia.
- Uso de la documentación y TID.
- Uso apropiado del lenguaje técnico.
- Coherencia en los contenidos de las explicaciones y ejemplos, tanto para el video como en la redacción de los documentos.
- Conocimiento del contexto en el uso de los lenguajes.
- Documentos bien estructurados, con todos los datos y con un mínimo diseño.
- Funcionamiento óptimo del proyecto en la web.

---

## 5. Asignación de notas

### No aprobado — 1 a 3
- No entrega del desarrollo o del video.
- Errores graves de funcionamiento de la aplicación.
- Tema incompleto o desarrollo incoherente de lo expuesto.

### Regular — entre 4 y 6
- Hay errores u omisiones, contenido insuficiente en el desarrollo de las consignas, pero el trabajo está realizado (no online).

### Promoción — 7 y 8
- [ ] Consignas y entregas completas.
- [ ] Web funcional sin errores.
- [ ] Web publicada y accesible desde internet.
- [ ] Video completo y presentación completas.

### Promoción — 9 y 10
- [ ] Todo lo anterior.
- [ ] Implementación de un **workflow de despliegue CI/CD** con **testing unitario nativo de Node** sobre **por lo menos dos funciones**.

---

*FIN DEL EXAMEN*
