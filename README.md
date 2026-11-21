# Correciones para revisar

1 - Ojo con la navegación, no está del todo claro. Si voy a hombre y de allí quiero saltar a mujer, tengo que volver. Verificar que el menú sea siempre igual, salvo que sean ventanas emergentes bien definidas.

2 - Los productos destacados en index.html deben tener un marcado semántico <article>, como en catálogo. <div> es genérico y me sirve para estructurar, agrupar elementos. Cambiarlo.
 
3 - El formulario debe tener los atributos correspondientes action y method. <label> no está conectado a nada, revisar.

4 - Consulta, vuelvo para atrás y pregunto cómo van a resolver los pasos del pago? me refiero a las vistas, ya que para pagar no hay nada más. También la vista del producto individual.

5 - Dar más contexto a los selectores de las reglas. Tienen, por ejemplo, .menu, pero no se sabe qué menú es; salvo que sea algon genérico, pero en este caso no lo es. Puede haber mas de un menú. La idea es buscar alguna estrategia o nomenclatura como BEM y/o selectores combinados. Es cierto que puede haber sectores genéricos de uso común, como .boton, .tarjeta, pero en los casos específicos, mejor utilizar nombres con más contexto. Y recordar siempre ubicar de los más genérico a lo más específico.

6 - Obs.
Bien por el desarrollo y la organización del código.
Sí me gustaría que hayan entendido bien la lógica, sobre todo si se ayudaron con IA.
 
7 - Con respecto a la separación de los módulos, al ser tantos, buscar una manera o nomenclatura para que se entienda que hace cada archivo. Por ejemplo, si va a renderizar vista, utilizar:
vista.[seccion o modulo].js, de esta manera se puede encontrar rápido lo que se busca.

