// Resúmenes propios del temario (no es texto literal de los libros).
window.LIBROS = [
  { id: 'A', titulo: 'Libro 1 · Aprovisionamiento y organización del office (UF0038)' },
  { id: 'B', titulo: 'Libro 2 · Mobiliario, decoración y limpieza de pisos' }
];

window.TEMAS = [
  {
    id: 'a1', libro: 'A', num: 1,
    titulo: 'La camarera de pisos y su departamento',
    secciones: [
      { h: 'Qué hace la camarera de pisos', p: 'p. 3', html: `
<p>Trabaja en el <b>departamento de regiduría de pisos</b>. Se encarga del orden y la limpieza de las <b>unidades alojativas</b> y, según el establecimiento y la normativa, también de zonas comunes. Depende de la <b>subgobernanta</b> y de la <b>gobernanta</b>, que dirige el departamento.</p>
<p>La oferta de alojamiento incluye tanto los establecimientos turísticos como los no turísticos: residencias, hospitales, geriátricos, etc.</p>` },
      { h: 'Normativa básica', p: 'p. 3-5', html: `
<ul>
<li><b>Directiva 2006/123/CE</b> («Directiva de servicios»), traspuesta por la <b>Ley 17/2009</b>: régimen menos intervencionista.</li>
<li>El turismo es competencia de las <b>comunidades autónomas</b>, no de los ayuntamientos. Por eso cada comunidad tiene sus propias normas.</li>
<li><b>Andalucía</b>: Ley 13/2011 de Turismo; Decreto 28/2016 (viviendas con fines turísticos).</li>
<li><b>Canarias</b>: Decreto 142/2010 (actividad turística de alojamiento) y Decreto 113/2015 (viviendas vacacionales).</li>
</ul>
<p><b>Vivienda vacacional</b>: vivienda amueblada y lista para usar, comercializada en canales turísticos y cedida <b>entera</b>, de forma temporal y habitual, a cambio de un precio.</p>
<p><b>Establecimiento turístico de alojamiento</b>: inmueble con sus muebles que forma una unidad de explotación de <b>una sola empresa</b> y ofrece alojamiento turístico, con o sin servicios complementarios.</p>` },
      { h: 'Tipos de establecimientos (Canarias)', p: 'p. 5-6', html: `
<table><tr><th>Hoteleros</th><th>Extrahoteleros</th></tr>
<tr><td>Hotel<br>Hotel urbano<br>Hotel emblemático<br>Hotel rural</td><td>Apartamento<br>Villa<br>Casa emblemática<br>Casa rural<br>Vivienda vacacional</td></tr></table>
<ul>
<li><b>Hotelero</b>: ofrece alojamiento y además alimentación.</li>
<li><b>Hotel urbano</b>: está en suelo urbano consolidado no turístico.</li>
<li><b>Emblemático</b>: es un edificio del patrimonio histórico. <b>Rural</b>: está en suelo rústico y también es patrimonio histórico.</li>
<li><b>Apartamento</b>: tiene equipamiento para guardar, preparar y consumir alimentos. <b>Villa</b>: es una edificación aislada con zona verde propia.</li>
</ul>
<p>Andalucía (Ley 13/2011, art. 40): hoteles, apartamentos turísticos, campings, casas rurales y otros.</p>` },
      { h: 'Organigramas', p: 'p. 7-12', html: `
<p>Un <b>organigrama</b> representa gráficamente la estructura de una organización: sus áreas, sus niveles jerárquicos y quién manda sobre quién.</p>
<ul>
<li><b>Por finalidad</b>: <i>informativo</i> (para el público en general), <i>analítico</i> (para especialistas; sirve para analizar la organización), <i>formal</i> (aprobado por escrito) e <i>informal</i> (sin aprobación escrita).</li>
<li><b>Por ámbito</b>: <i>general</i> (toda la organización hasta cierto nivel) y <i>específico</i> (una sola área).</li>
<li><b>Por contenido</b>: <i>integral</i> (todas las unidades y su jerarquía) y <i>funcional</i> (incluye las funciones; útil para formar al personal).</li>
<li><b>Por presentación</b>: <i>vertical</i> (de arriba abajo; el más usado), <i>horizontal</i> (de izquierda a derecha), <i>mixto</i>, <i>de bloque</i> (muchas unidades en poco espacio) y <i>circular</i> (el mando está en el <b>centro</b> y la autoridad disminuye hacia fuera).</li>
</ul>
<p>El departamento de pisos depende del <b>Director de Alojamientos</b>, junto con recepción y reservas. Dentro del departamento, la cadena es: <b>Gobernanta → Subgobernanta →</b> encargada de limpieza (limpiadoras), camareras de pisos (valets) y encargada de lavandería/lencería (lenceras, lavanderas, costureras y planchadoras).</p>` },
      { h: 'Tipos de limpieza en el hotel', p: 'p. 14-19', html: `
<ul>
<li><b>Limpieza de clientes</b> (habitación ocupada): se hace a diario. Incluye las camas, el polvo, el suelo, el baño con desinfección, las amenities, la ropa de baño, la terraza y el minibar si así se ha establecido.</li>
<li><b>Limpieza de salida</b>: cuando el cliente se va. Es más profunda y se revisa todo (objetos olvidados, desperfectos). El cambio de <b>toda</b> la ropa es <b>obligatorio</b>.</li>
<li><b>Limpieza de desbloqueo</b>: para una habitación que estaba <b>bloqueada</b>, es decir, que no se podía usar por averías, mantenimiento o limpiezas periódicas profundas.</li>
<li><b>Cobertura</b>: un repaso nocturno para preparar el descanso; no es una limpieza profunda. Es propia de hoteles de <b>4 y 5 estrellas</b>. Incluye abrir la cama, cambiar las toallas usadas y dejar una tarjeta de buenas noches con un detalle dulce.</li>
</ul>
<p><b>Amenities</b>: los productos de aseo que el hotel deja en el baño para el huésped.</p>` },
      { h: 'Zonas comunes y de servicio', p: 'p. 19-22', html: `
<ul>
<li><b>Hall y recepción</b>: se limpian a <b>primera hora</b>, antes de las 7:30, con un turno que entra hacia las 6:30.</li>
<li><b>Aseos públicos</b>: limpieza profunda a primera hora y repasos a lo largo del día.</li>
<li><b>Restaurante</b>: es lo primero que usa el cliente, así que se limpia muy temprano, antes del desayuno. El <b>bar</b> abre más tarde, lo que deja más margen.</li>
<li><b>Piscinas</b>: a primera hora se encarga pisos, con ayuda de mantenimiento. Durante el día, los piscineros.</li>
<li><b>Zonas de servicio</b> (solo para el personal): oficinas, economato, despacho de la gobernanta, vestuarios (placares) y comedor del personal. La <b>cocina</b> la limpia el propio personal de cocina.</li>
</ul>
<p><b>Polivalencia</b>: las camareras pueden limpiar zonas comunes dentro del área funcional cuarta del <b>ALEH</b> (pisos y limpieza), si así se pacta con la empresa. <b>Valet</b> (mozo de habitaciones o steward): reparte el material, hace de enlace con la gobernanta y se ocupa de las tareas de fuerza.</p>` },
      { h: 'El departamento de pisos', p: 'p. 22-26', html: `
<p><b>Objetivo</b>: que todas las dependencias estén limpias, higienizadas y en perfecto estado de uso. Su mayor coste es el <b>personal</b>. Cada vez se <b>externalizan</b> más servicios (lavandería, zonas comunes, trabajos en altura).</p>
<p><b>Cuatro subdepartamentos</b>:</p>
<ul>
<li><b>Pisos</b>: es el que más personal tiene y el que más trata con el cliente. Limpia habitaciones y pasillos.</li>
<li><b>Limpieza</b>: zonas nobles (salones, bar, recepción) y áreas de servicio.</li>
<li><b>Lencería</b>: <b>suministra</b> la ropa a todo el hotel, gestiona los uniformes, hace inventarios y registra las bajas.</li>
<li><b>Lavandería</b>: <b>lava y plancha</b> la ropa del hotel y la de los clientes. A menudo está externalizada (outsourcing).</li>
</ul>` },
      { h: 'Documentación del departamento', p: 'p. 26-28', html: `
<ol>
<li><b>Ficha de control de tareas</b>: registra que se han hecho las tareas programadas.</li>
<li><b>Ficha de control de consumo</b>: sirve para detectar desviaciones y evitar la <b>rotura de stock</b>, que es quedarse sin existencias.</li>
<li><b>Hoja de control de minibares</b>: la camarera la entrega a la gobernanta, esta la pasa a recepción y recepción lo carga en la cuenta del cliente.</li>
<li><b>Impreso de envío de ropa a lavandería</b>: lo rellena y firma el cliente. Si la ropa no coincide con lo anotado, la bolsa se deja sobre la cama y se avisa a recepción.</li>
<li><b>Vales de pedido de materiales</b>: siempre por escrito. Van a la gobernanta, que pide al economato o a su almacén propio.</li>
<li><b>Parte de trabajo de la camarera</b>.</li>
</ol>` },
      { h: 'La habitación: superficies y equipamiento (Canarias)', p: 'p. 28-36', html: `
<p><b>Superficie mínima</b> de una habitación de hotel para 2 plazas: 1★ 16 m², 2★ 18, 3★ 21, 4★ 25 y 5★ 28. En el <b>5★ Gran Lujo</b>: doble 35 m², individual 29, suite junior 44 y suite superior 70.</p>
<ul>
<li>Las <b>camas</b> deben medir como mínimo 90×200 cm (individual) y 150×200 cm (doble). En el 5★GL, la doble mide 200×200 cm.</li>
<li>Hace falta un <b>secador</b> de al menos 1800 W. Las suites deben tener ducha y bañera independientes.</li>
<li>Debe haber al menos <b>2 enchufes</b> libres (uno en el aseo). En el 5★GL, 2 en el aseo y 2 en el resto.</li>
<li>Si la limpieza no es diaria, hay que dejar un juego de ropa por plaza, más otro por cada semana adicional.</li>
<li>En el 5★GL, la recepción debe atender en español, <b>alemán e inglés</b>. La ropa del cliente se lava y plancha en menos de 24 h. Debe haber un <b>oficio (office) en cada planta</b>.</li>
</ul>
<p><b>Viviendas vacacionales</b>: la cama individual mide 0,90×1,90 m y la doble 1,35×1,90 m. Tienen botiquín, cierre de seguridad, secador, plancha, y un juego de ropa más por semana si la estancia pasa de 7 días.</p>` },
      { h: 'Hospitales y clínicas', p: 'p. 37-46', html: `
<ul>
<li><b>Limpieza</b>: quitar la suciedad sin dañar la superficie. <b>Desinfección</b>: destruir los microorganismos, <b>salvo las esporas</b>.</li>
<li>Tipos de limpieza: <b>de rutina</b>, <b>general</b> (en profundidad, incluidas paredes y techos), <b>terminal</b> (al acabar un proceso, como un alta o el fin de las operaciones) y <b>especial</b> (situaciones excepcionales, como un quirófano).</li>
<li>Zonas por riesgo de infección: <b>alto</b> (quirófanos, UCI, neonatos, hemodiálisis, trasplantes), <b>medio</b> (hospitalización, urgencias, laboratorios, lavandería) y <b>bajo</b> (oficinas, cafetería, pasillos, capilla).</li>
<li><b>Barrido húmedo</b>: con mopa húmeda, en <b>zigzag</b> y sin pasar dos veces por el mismo sitio.</li>
<li><b>Doble cubo</b>: el <b>azul</b> lleva la solución limpia (9 L) y el <b>rojo</b> el agua de aclarado (4 L). Se friega de la zona limpia hacia la sucia.</li>
<li><b>Paños por colores</b>: <b>azul</b> para todo salvo los sanitarios; <b>amarillo</b> para sanitarios que no sean el retrete; <b>rojo</b> solo para el retrete.</li>
<li>Las soluciones las aprueba la <b>Unidad de Medicina Preventiva</b>. Al terminar, el material se deja <b>15 minutos en lejía</b>.</li>
<li>Las máquinas de <b>ozono</b> son la mejor opción para controlar infecciones.</li>
</ul>` },
      { h: 'Residencias de mayores', p: 'p. 46-50', html: `
<ul>
<li>Los residentes enferman con más facilidad y tienen más riesgo de caídas. Por eso se evitan los suelos mojados (o se acota la zona) y se controlan los productos.</li>
<li>Los <b>guantes de látex</b> son obligatorios. Se necesita paciencia, tolerancia, vocación y orden.</li>
<li><b>Microfibra por colores</b>: azul para el mobiliario y las oficinas; <b>verde</b> para quirófanos, curas y cocinas; amarillo para sanitarios y baños; rojo para inodoros y urinarios.</li>
<li>La microfibra absorbe el <b>doble que el algodón</b> y necesita menos producto.</li>
<li><b>Frecuencias</b>: a diario, airear y limpiar dormitorios y zonas comunes; cada semana, las ventanas por turnos; cada mes, la cocina y su maquinaria; cada trimestre, el interior de los armarios; de forma periódica, las plagas y la <b>legionela</b> (filtros y alcachofas de ducha).</li>
</ul>` },
      { h: 'Funciones de la camarera y del valet', p: 'p. 50-53', html: `
<ul>
<li>Limpia las habitaciones que la gobernanta le asigna cada mañana en su <b>control</b>, y también los pasillos. Mantiene en orden el office y el <b>carro</b>.</li>
<li>Comunica las averías con el <b>parte de averías</b>, que va a la gobernanta y de ahí a mantenimiento.</li>
<li>Atiende al cliente (con un <b>inglés básico</b>) y ayuda en lencería y lavandería.</li>
<li>Prepara los salones para reuniones y los repasa en las pausas (coffee-break).</li>
<li>Repone el <b>minibar</b> a diario, cuando no hay room service. Revisa los precintos y apunta lo consumido.</li>
<li>Rellena su <b>control diario</b>, anotando el número de personas en la habitación y las incidencias en la columna de observaciones.</li>
</ul>
<p><b>Valet</b>: mueve muebles, monta camas supletorias y cunas, da la vuelta a los colchones, cuelga y descuelga cortinas, y lleva la ropa a lavandería.</p>` },
      { h: 'Uniformidad e imagen', p: 'p. 53-55', html: `
<ul>
<li>El uniforme clásico es una <b>bata negra con delantal blanco</b>, calzado antideslizante y cofia o diadema blanca.</li>
<li>No se llevan pulseras, anillos, pendientes, piercings ni ningún otro accesorio. El maquillaje es discreto (sin labios rojos) y las uñas sin pintar, como mucho con brillo.</li>
<li>El pelo va recogido. Los hombres van afeitados a diario. No se usan colonias intensas.</li>
<li>El <b>móvil está prohibido</b>. El uniforme se usa solo en el establecimiento.</li>
<li><b>EPI</b>: es el equipo que protege al trabajador de un riesgo. La ropa de trabajo normal no se considera EPI.</li>
</ul>` },
      { h: 'Deontología, planificación e integración', p: 'p. 56-60', html: `
<p><b>Deontología</b>: la parte de la ética que trata de los deberes profesionales. Las cualidades son <b>confidencialidad</b>, puntualidad, compañerismo, uniformidad, disciplina, organización, limpieza, aseo, vocación y creatividad. Si un huésped hace una sugerencia, se comunica a la responsable.</p>
<p><b>Planificación</b>: la hace la <b>gobernanta</b>, a partir del <b>listado de llegadas</b> (régimen, observaciones, VIP, PAX = número de personas, hora de llegada) y del <b>listado de salidas</b>.</p>
<p><b>Integración</b>: es el periodo en que el nuevo trabajador se adapta, con ayuda de <b>mentores o tutores</b>. Tiene dos funciones: <b>información</b> (la herramienta más habitual es el <b>manual de acogida</b>) e <b>integración</b>, cuyo objetivo es la <b>fusión</b> entre la empresa y el trabajador.</p>` }
    ]
  },
  {
    id: 'a2', libro: 'A', num: 2,
    titulo: 'Aprovisionamiento, control e inventario',
    secciones: [
      { h: 'Objetivo y ficha de artículo', p: 'p. 75-76', html: `
<p>El objetivo es <b>evitar la rotura de stocks</b>, es decir, quedarse sin un producto por no haberlo previsto. Para ello se usa la <b>ficha de artículo</b>, que registra la existencia inicial, las entradas y las salidas.</p>
<div class="formula">Stock final = Stock inicial + Entradas − Salidas</div>
<p>Cada <b>mes</b> se hace un <b>inventario físico</b> (contar lo que hay) y se compara con lo que dice la ficha. Si no coinciden, puede ser por un movimiento sin anotar, por algo extraviado o por un consumo mayor del registrado. El recuento se hace en <b>todos</b> los almacenes.</p>` },
      { h: 'Mercancías y principios del almacén', p: 'p. 76-79', html: `
<p><b>Género</b> y <b>mercancía</b> significan lo mismo. Hay dos tipos:</p>
<ul>
<li><b>De larga duración (inmovilizado)</b>: maquinaria y mobiliario. Contablemente son <b>activo fijo</b>.</li>
<li><b>De corta duración (existencias o consumibles)</b>: químicos, alimentos, papel, etc.</li>
</ul>
<p><b>Cuatro principios</b>:</p>
<ol>
<li><b>Orden y clasificación</b>: cada producto tiene un código único, una ubicación marcada y una sola persona responsable.</li>
<li><b>Rotación de stocks</b>: el almacén es un espacio <b>improductivo</b>, así que conviene una rotación rápida con stocks mínimos y máximos.</li>
<li><b>Seguridad e higiene</b>: revisar la instalación eléctrica, las estanterías y los extintores, y tener los pasillos despejados.</li>
<li><b>Supervisión y control</b>: todo movimiento va documentado, el acceso es restringido y hay un responsable por almacén. Conviene que el inventario lo haga una persona <b>ajena</b> al almacén.</li>
</ol>` },
      { h: 'Productos químicos', p: 'p. 79-80', html: `
<ul>
<li>No acumular demasiados inflamables, y <b>nunca</b> guardarlos junto a otros productos. Mantenerlos siempre cerrados.</li>
<li>No llenar los envases del todo. Ventilar el local. Está prohibido fumar o usar llamas.</li>
<li>Junto al almacén debe haber <b>duchas y lavaojos</b>, además de equipos de extinción.</li>
<li>Los envases pesados y los ácidos van en la <b>parte baja</b>. Los bidones de 15-20 L se colocan sobre <b>bandejas de retención</b>.</li>
</ul>` },
      { h: 'Recepción, almacenamiento, distribución y expedición', p: 'p. 80-82', html: `
<ul>
<li><b>Recepción</b>: se compara lo recibido con el <b>pedido</b> mediante una inspección visual (productos, cantidades y características). Si no coincide, se avisa al proveedor o al responsable del <b>economato</b>, que es el almacén central del hotel.</li>
<li><b>Almacenamiento</b>: según la naturaleza de cada producto. Los líquidos van abajo y no se sobrecargan las estanterías.</li>
<li><b>Distribución interna</b>: se hace con el impreso de <b>movimiento de artículo</b>. Lo rellena el departamento que pide (pisos) y lo firma el que entrega (economato).</li>
<li><b>Expedición</b>: se anota la <b>salida</b> en el departamento que envía y la <b>entrada</b> en el que recibe.</li>
</ul>` },
      { h: 'Clasificación, ubicación y tipos de almacén', p: 'p. 83-85', html: `
<ul>
<li>Los químicos se separan de las herramientas, los alimentos y las bebidas. Lo que más se usa va más a mano.</li>
<li>Sistema <b>FIFO</b> (First In, First Out): lo primero que entra es lo primero que sale.</li>
<li>Nunca se pone nada directamente en el <b>suelo</b>. Las etiquetas miran hacia delante. Las cajas de cartón se vacían y el cartón va al contenedor <b>azul</b>.</li>
<li>Los almacenes pueden ser <b>centralizados</b> o <b>descentralizados</b> (también llamados periféricos).</li>
<li>Según lo que guardan: general, de materia prima, auxiliares o indirectos, en proceso, terminados, de herramientas, de desperdicio, de <b>obsoletos</b> (caducados o descatalogados) y de devoluciones.</li>
</ul>` },
      { h: 'Tipos de inventario', p: 'p. 85-87', html: `
<ul>
<li><b>Inicial</b>: al empezar la actividad. <b>Final</b>: al cerrar el ejercicio o el mes.</li>
<li><b>Perpetuo</b>: un registro continuo de las existencias.</li>
<li><b>Físico</b>: el real. Se cuenta, pesa o mide todo y se hace una lista detallada y valorada.</li>
<li><b>Máximo</b>: el tope para no tener sobrecostes. <b>Mínimo</b>: lo necesario para no quedarse sin existencias.</li>
<li><b>Disponible</b>: lo que se puede usar o vender en ese momento.</li>
</ul>` },
      { h: 'Mantenimiento y reposición', p: 'p. 87-88', html: `
<ul>
<li>El almacén se barre <b>a diario</b>. No se cuelga nada de las paredes y la basura va fuera de la zona de almacenaje. Se fumiga de forma periódica.</li>
<li>Para dar de baja material deteriorado hace falta una <b>inspección técnica</b> y avisar a <b>administración</b>.</li>
<li>Cuando un artículo llega al <b>stock mínimo</b>, se pide en ese momento.</li>
<li>La gobernanta y la subgobernanta controlan el consumo según el <b>nivel de ocupación</b>.</li>
</ul>` },
      { h: 'El carro de la camarera y el de limpieza', p: 'p. 88-91', html: `
<ul>
<li>El carro se monta al <b>terminar</b> la jornada, para dejarlo listo, o al <b>empezar</b> el turno, según el hotel. Debe estar siempre ordenado.</li>
<li>Lleva <b>tres bayetas</b> (muebles lavables, muebles no lavables y ceniceros), mopa, guantes, productos, ropa de cama, toallas, amenities, impresos, escobillón y aspiradora (esta solo si hay moqueta).</li>
<li>La ropa va en los estantes <b>de abajo y del medio</b>. En la <b>bandeja de arriba</b> van las amenities, la papelería y el control. Los dos <b>sacos laterales de loneta</b> son para la basura y la ropa sucia.</li>
<li>El <b>carro de limpieza</b> (zonas comunes) es más pequeño y no lleva ropa. Tiene dos cubos de colores, uno de ellos con prensa.</li>
</ul>` },
      { h: 'El office', p: 'p. 91-92', html: `
<p>Es el <b>lugar más importante</b> para preparar las habitaciones. Hay al menos <b>uno por planta</b>, junto a la escalera de servicio y el montacargas.</p>
<ul>
<li>Tiene un aseo para las camareras (el de los clientes está <b>prohibido</b>), una taquilla, una mesa y una silla.</li>
<li>Estantes separados para limpieza, minibar y lencería; vertedero y pila; cubos de residuos.</li>
<li>Carro de ropa sucia o <b>tolva</b>, botiquín, teléfono interior, camas supletorias, cunas y almohadas.</li>
<li>La ropa se coloca con los <b>lomos hacia fuera</b>. Los envases sin abrir van en los estantes de arriba. Los inflamables se guardan lejos de enchufes y de fuentes de calor.</li>
<li>Al terminar el turno se rellena el <b>impreso de cambio de ropa</b>.</li>
</ul>` }
    ]
  },
  {
    id: 'a3', libro: 'A', num: 3,
    titulo: 'Participación en la mejora de la calidad',
    secciones: [
      { h: 'La calidad es cosa de todos', p: 'p. 104-106', html: `
<p>Aunque haya un departamento de calidad, la calidad es responsabilidad de <b>cada empleado</b>. La dirección debe implicarse y transmitirlo con una buena comunicación interna. El objetivo es un cliente satisfecho y <b>fidelizado</b>.</p>
<p>Ideas clave: el cliente es el <b>único juez</b> de la calidad y siempre quiere más. Hay que reducir la distancia entre lo que espera y lo que recibe, sin exagerar en la publicidad. La meta es <b>«cero defectos»</b> y cuidar los detalles.</p>` },
      { h: 'Sistema de aseguramiento', p: 'p. 106', html: `
<ul>
<li><b>Manual de calidad</b>: dice <b>qué</b> hacer.</li>
<li><b>Manual de procedimientos</b>: dice <b>cómo</b> hacerlo. Incluye los procedimientos generales, las instrucciones técnicas (que se cumplen <b>sin excepción</b>) y los registros.</li>
</ul>
<p><b>8 principios</b>: orientación a los resultados, orientación al cliente, liderazgo, gestión por procesos, implicación de las personas, mejora continua, alianzas y responsabilidad social.</p>` },
      { h: 'Costes de la calidad', p: 'p. 106-108', html: `
<table><tr><th>Calidad / conformidad</th><th>No calidad / no conformidad</th></tr>
<tr><td><b>Prevención</b>: formación, evaluación de proveedores, mantenimiento preventivo.<br><b>Evaluación</b>: encuestas a clientes, comparación con la competencia, informes externos.</td>
<td><b>Fallos internos</b>: se detectan <b>antes</b> de que el producto llegue al cliente (devoluciones a proveedores, errores de diseño).<br><b>Fallos externos</b>: aparecen <b>después</b> (devoluciones de clientes, penalizaciones, pérdida de imagen).</td></tr></table>
<p>El coste total es la suma de ambos grupos.</p>` },
      { h: 'Calidad, productividad y rendimiento', p: 'p. 108-109', html: `
<p><b>Productividad</b> = lo que se produce ÷ los recursos empleados. Cuanto menos tiempo se tarda, más productivo es el trabajo. Mejorar la calidad mejora la productividad y reduce los costes.</p>
<p><b>Nueve pasos para mejorar el rendimiento</b>: 1 análisis, 2 descripción de puestos y estándares, 3 selección, 4 acogida, 5 formación continua, 6 promoción interna, 7 retribuciones, 8 evaluaciones y 9 motivación.</p>
<p>Sostenibilidad: hay certificaciones como <b>B-Corp</b>.</p>` }
    ]
  },
  {
    id: 'b1', libro: 'B', num: 1,
    titulo: 'Mobiliario y decoración',
    secciones: [
      { h: 'Mobiliario básico y complementario', p: 'p. 3-7', html: `
<p>El mobiliario debe ser seguro, duradero y fácil de mantener. Hoy se buscan diseños <b>ergonómicos y sostenibles</b>. Los materiales fáciles de limpiar reducen hasta un <b>20 %</b> el tiempo de limpieza.</p>
<p><b>Básico</b> (imprescindible): cama, mesita, escritorio y silla (importantes en los hoteles <b>urbanos</b>), armario (en el altillo se guardan almohadas y ropa extra), maletero y banqueta.</p>
<p><b>Complementario</b> (mejora el servicio): minibar (a partir de 3★, de <b>40 a 60 L</b>), caja fuerte (<b>anclada</b>), sofá (a menudo convertible en cama) y <b>galán</b> (una percha de pie para que la ropa no se arrugue).</p>
<table><tr><th>Cama</th><th>Ancho</th></tr>
<tr><td>Individual</td><td>90-110 cm</td></tr><tr><td>Matrimonio</td><td>135 cm</td></tr>
<tr><td>Queen Size</td><td>150 cm</td></tr><tr><td>King Size</td><td>2 × 2 m (4-5★)</td></tr></table>
<p>Se recomiendan muebles con <b>patas altas o ruedas</b> para poder limpiar debajo sin moverlos.</p>` },
      { h: 'Ubicación y zonas (¡ojo a la terminología!)', p: 'p. 8', html: `
<p>Este libro llama <b>zonas nobles</b> a las de uso de los clientes (recepción, hall, salones) y <b>zonas comunes</b> a las del personal (pasillos internos, escaleras de servicio, vestuarios).</p>
<p class="aviso">El libro 1 lo dice al revés: allí «zonas comunes» son las de los clientes y «áreas de servicio» las del personal. Fíjate en qué libro te preguntan.</p>
<p>Los pasillos principales deben medir <b>al menos 1,20 m</b> de ancho. Ningún mueble puede tapar las rutas de evacuación.</p>` },
      { h: 'Revestimientos, alfombras y cortinas', p: 'p. 8-10', html: `
<ul>
<li><b>Revestir</b> es cubrir una superficie con un material: pintura, piedra, mármol, azulejo, alfombra o moqueta.</li>
<li>Las alfombras y las moquetas aíslan del frío y del ruido. Se mantienen con aspiración con filtro <b>HEPA</b> y limpieza por <b>inyección-extracción</b>.</li>
<li>Muchas moquetas se están cambiando por suelos <b>vinílicos</b> o laminados antibacterianos.</li>
<li>Las <b>cortinas</b> controlan la luz y la intimidad. Los textiles deben ser <b>ignífugos</b> (obligatorio) y lavables.</li>
</ul>` },
      { h: 'Otros elementos decorativos y el color', p: 'p. 10-11', html: `
<ul>
<li><b>Cuadros</b>: mejor con marcos lisos y traseras selladas. Se limpian con microfibra ligeramente húmeda.</li>
<li><b>Flores</b>: hay que cambiar el agua a menudo, usar recipientes estables y protegerlos para que no dejen cercos. Si los clientes son sensibles, se eligen flores con poco polen.</li>
<li><b>Espejos</b>: dan sensación de amplitud. El limpiacristales se aplica <b>sobre el paño</b>, nunca sobre el espejo.</li>
<li>Los objetos decorativos conviene que sean de superficies lisas, sin recovecos.</li>
<li><b>Colores cálidos</b>: rojos, amarillos, naranjas, marrones y dorados. <b>Fríos</b>: azules, verdes y morados. Se usan pinturas lavables con poco <b>COV</b>.</li>
</ul>` },
      { h: 'Productos de limpieza del mobiliario', p: 'p. 11-13', html: `
<p>Se prefiere el <b>pH neutro (6-8)</b> y se respetan las diluciones que indica el fabricante.</p>
<ul>
<li>Productos habituales: detergente neutro o friegasuelos, limpiacristales, limpiamuebles, amoniaco, abrillantador de metales, desengrasantes y desincrustantes.</li>
<li>Siempre en el <b>envase original</b>, nunca en botellas de bebida. <b>Nunca se mezcla lejía con amoniaco ni con ácidos.</b></li>
<li>EPI: guantes, gafas y calzado antideslizante. Hay que tener a mano la ficha técnica y la de seguridad.</li>
<li>El pH neutro va bien en el <b>mármol</b> y las superficies con brillo. El limpiamuebles se usa en la madera, probando antes en una zona oculta.</li>
</ul>` },
      { h: 'Técnicas por material', p: 'p. 13-17', html: `
<ul>
<li><b>Madera</b>: a diario, en seco con un paño de algodón. El aerosol se aplica <b>sobre el paño</b>. Las manchas de tinta se quitan con <b>alcohol</b>; las de grasa, con <b>agua oxigenada o amoniaco</b> (y un secador si hace falta).</li>
<li><b>Carcoma</b>: lo primero es <b>retirar y aislar</b> el mueble. Después se decapa y se aplica producto con brocha y <b>jeringuilla</b>.</li>
<li><b>Melamina, formica y plástico</b>: paño con agua y jabón neutro, sin abrasivos. Los de exterior necesitan protección UV.</li>
<li><b>Cuero</b>: fuera del sol. La tinta se quita con alcohol y la grasa con <b>talco</b>. <b>No se aclara con agua.</b></li>
<li><b>Bronce</b> (cobre + estaño): pasta de <b>limón y bicarbonato</b> con un paño de lana. <b>Latón</b> (cobre + zinc): agua y jabón, y limón para devolverle el brillo. <b>Cobre</b>: igual que el bronce. <b>Cromo</b>: agua y jabón, o <b>vinagre</b>. <b>Acero inoxidable</b>: agua tibia y detergente, secando bien después.</li>
<li><b>Textiles</b>: se aspiran en las salidas. Antes de lavarlos se mira la etiqueta y se prueba con una muestra.</li>
</ul>
<div class="formula">De arriba abajo · de dentro afuera · de seco a húmedo</div>` },
      { h: 'Iluminación y temperatura', p: 'p. 17-18', html: `
<ul>
<li><b>Iluminación general</b>: viene del techo, es homogénea y cálida, sin rincones en sombra. Debe poder apagarse desde la <b>cama</b> y desde la <b>salida</b>.</li>
<li><b>Puntos de luz</b>: escritorio, mesita y armarios. Las lámparas de lectura son <b>direccionables</b> para no molestar a quien duerme al lado.</li>
<li>Las bombillas <b>LED</b> o de bajo consumo dan menos calor y gastan menos.</li>
<li>El aire acondicionado suele ser individual. Hay que ventilar para evitar <b>condensaciones</b>.</li>
</ul>` },
      { h: 'Decoración floral', p: 'p. 18-21', html: `
<ul>
<li>Tres aspectos a cuidar: la <b>ubicación</b>, las <b>dimensiones del recipiente</b> y la <b>armonía de colores</b>.</li>
<li>Proporción: las flores ocupan <b>2/3</b> del conjunto y el florero <b>1/3</b>. Los floreros altos dan elegancia. Si el florero es transparente, hay que cambiar el agua a menudo.</li>
<li><b>Corte</b>: en <b>bisel</b>, limpio y transversal. Se quitan las hojas del tercio inferior del tallo.</li>
<li><b>Secado</b>: se recogen las flores después del <b>mediodía</b> en un día soleado y se cuelgan <b>boca abajo</b> 3-4 semanas en un lugar oscuro, seco y ventilado.</li>
<li><b>Abanico</b>: jarrón de boca ancha, con las flores de los extremos a <b>45º</b>. <b>Circular</b>: a <b>90º</b>. <b>Vertical</b>: jarrón alto de boca estrecha.</li>
<li>En una mesa <b>redonda</b> se pone un centro. En una <b>rectangular</b>, un centro principal y otros más pequeños a lo largo.</li>
<li>Flores más usadas: margaritas, hortensias, claveles, violetas y begonias. Verdes: eucalipto, musgo, retama y mimosa.</li>
</ul>` }
    ]
  },
  {
    id: 'b2', libro: 'B', num: 2,
    titulo: 'Limpieza y puesta a punto de habitaciones y zonas',
    secciones: [
      { h: 'Útiles y maquinaria', p: 'p. 31-36', html: `
<p>Se eligen según dos factores: el <b>resultado esperado</b> y la <b>idoneidad para el material</b>.</p>
<ul>
<li><b>Aspirador</b>: puede ser de bolsa, sin bolsa o de vapor (vaporeta, unos <b>90 ºC</b>). La boquilla de cerdas sirve para superficies duras y la <b>plana</b> para moquetas. El filtro HEPA retiene las partículas finas.</li>
<li><b>Cepillo, recogedor (de mango largo), fregona y cubo</b>. En limpieza profesional se usa el doble cubo o mopas preimpregnadas.</li>
<li><b>Mopa</b>: barre sin levantar polvo. <b>Abrillantadora</b>: un disco con lana de acero; conviene probarla antes.</li>
<li><b>Rascavidrios</b> (cuchilla) y <b>espátula</b>: para restos incrustados.</li>
<li><b>Estropajo verde</b>: dureza media; <b>no</b> se usa en baños ni cristales porque raya. <b>Estropajo azul</b>: para superficies delicadas como el cristal o el mármol.</li>
<li><b>Bayetas</b> (las de microfibra arrastran más), <b>gamuzas</b> (más absorbentes), <b>plumero</b>, <b>mango telescópico</b>, <b>rasqueta</b> con goma y <b>escobilla</b>.</li>
<li>Código de colores de este libro: rojo para sanitarios, azul para mobiliario, verde para cocinas y amarillo para zonas generales.</li>
</ul>
<p>Los útiles y los químicos son la <b>partida que más se consume</b> en pisos.</p>` },
      { h: 'Mantenimiento y seguridad de los útiles', p: 'p. 37-38', html: `
<ul>
<li><b>Mantenimiento</b> (los servicios técnicos) repara la maquinaria. <b>Pisos</b> la limpia a diario y avisa de las incidencias.</li>
<li><b>Aspirador</b>: se vacía la bolsa y se limpian los filtros después de cada uso. Se desenchufa tirando de la <b>clavija</b>, nunca del cable.</li>
<li>El cepillo se seca <b>boca abajo</b>. La fregona se deja en remojo con desinfectante. Las mopas y bayetas se lavan <b>sin suavizante</b>.</li>
<li>Seguridad: <b>guantes</b> siempre, más gafas y mascarilla con químicos. Cartel de <b>«suelo mojado»</b>. Desconectar los aparatos antes de limpiarlos.</li>
<li>Postura: espalda recta y pies separados a la anchura de los hombros.</li>
</ul>` },
      { h: 'El pH y los productos', p: 'p. 38-41', html: `
<table><tr><th>Tipo</th><th>pH</th><th>Sirve para</th><th>Ejemplos</th></tr>
<tr><td>Ácido</td><td>0-5</td><td><b>Desincrustar</b>: cal, óxido, orina</td><td>Salfumán, cítricos</td></tr>
<tr><td>Neutro</td><td>6-8</td><td>Limpieza diaria y superficies con brillo</td><td>Jabón neutro, champú de moqueta</td></tr>
<tr><td>Alcalino</td><td>9+</td><td><b>Desengrasar</b> y desatascar</td><td>Lejía, amoniaco</td></tr></table>
<ul>
<li>La <b>lejía</b> es <b>hipoclorito sódico</b>: desinfecta, pero es corrosiva. El <b>salfumán</b> es un ácido de uso muy limitado.</li>
<li>El <b>alcohol de quemar</b> es <b>metanol</b> y es tóxico. Se prefiere el etílico o el isopropílico.</li>
<li>Los <b>concentrados</b> con dosificador y los envases recargables generan menos residuos.</li>
<li>Las superficies se dividen en <b>duras</b> (gres, mármol, granito), <b>blandas</b> (madera, plástico) y <b>textiles</b>.</li>
</ul>` },
      { h: 'Suelos, aseos, cristales y paredes', p: 'p. 41-43', html: `
<ul>
<li><b>Gres</b>: jabón neutro, y un chorrito de amoniaco si hay grasa. Sin abrasivos.</li>
<li><b>Mármol</b>: es poroso. <b>Nada de ácidos</b> (tampoco vinagre) ni abrasivos. Se limpia con jabón neutro y se seca con mopa.</li>
<li><b>Granito</b>: igual que el mármol. <b>Terrazo</b>: si está tratado, friegasuelos específico; si no, jabón con un chorro de lejía <b>o</b> de amoniaco, nunca los dos juntos.</li>
<li><b>Madera</b>: jabón neutro con la fregona bien escurrida.</li>
<li><b>Aseos</b>: azulejos con amoniaco diluido, y secar con bayeta de hilo. El inodoro, con <b>desinfectante-desincrustante</b> y escobilla.</li>
<li><b>Cristales</b>: empapador con jabón y <b>raqueta</b> de goma.</li>
<li><b>Paredes</b>: las telarañas se quitan con una barra extensible envuelta en un trapo. Las manchas solo se limpian si la pintura es <b>plástica lavable</b>; si no, goma de borrar. Si la pintura está descolgada, se avisa a servicios técnicos.</li>
<li>Usar <b>más producto no limpia mejor</b>: deja velos y residuos.</li>
</ul>` },
      { h: 'Riesgos y etiquetado (CLP)', p: 'p. 43-45', html: `
<p>La <b>etiqueta</b> lleva el nombre del producto, los datos del fabricante, los <b>pictogramas</b>, las indicaciones de peligro y los consejos de prudencia. El <b>Reglamento CLP</b> (Clasificación, Etiquetado y Envasado) unifica estos símbolos.</p>
<ul>
<li><b>Peligros físicos</b>: explosivo, inflamable, gas a presión, <b>comburente</b> (provoca o agrava un incendio) y corrosivo para metales.</li>
<li><b>Peligros para la salud</b>: corrosivo para piel y ojos, toxicidad aguda (la calavera), exclamación (irritación o somnolencia) y peligro grave (cáncer, asma, fertilidad).</li>
<li><b>Medio ambiente</b>: peligro para el medio acuático.</li>
<li>Hay que tener accesibles las <b>FDS</b> (fichas de datos de seguridad). Si hay un derrame, se contiene, se ventila y se gestiona según la FDS.</li>
</ul>` },
      { h: 'Prioridades y proceso de limpieza de habitaciones', p: 'p. 45-46', html: `
<p>El <b>turno de mañana</b> soporta la mayor carga. A primera hora se limpian las <b>zonas nobles</b> y después los pasillos. Si el pasillo tiene moqueta, no se aspira temprano. El orden de las habitaciones se cambia cada día.</p>
<ol class="prio">
<li>Repaso de habitaciones libres que se ocupan a primera hora</li>
<li>Salidas tempranas</li>
<li>Solicitud personal del cliente</li>
<li>Habitaciones con niños</li>
<li>Ocupadas</li>
<li>Salidas que no se van a ocupar</li>
</ol>
<p>Orden: <b>terraza → habitación → baño</b>. Si el baño es lo más alejado de la puerta, se empieza por él.</p>
<p><b>Proceso</b>: airear → comprobar desperfectos → retirar basura y ropa → terraza → dormitorio → hacer la cama → baño → reponer → puerta → cerrar ventanas → perfumar y cerrar.</p>` },
      { h: 'Planes de limpieza y habitaciones ocupadas', p: 'p. 46-48', html: `
<ul>
<li><b>Ocupadas</b>: <b>no</b> se limpia el interior de cajones ni armarios, <b>no</b> se tocan los documentos del cliente y sus objetos se dejan en la misma posición.</li>
<li>En las salidas, las lámparas se limpian por dentro y por fuera con bayeta húmeda. En las ocupadas, con bayeta seca o plumero.</li>
<li><b>Baño</b>: basura → comprobar → barrer → sanitarios y espejos → <b>inodoro</b> → reponer → fregar y ventilar.</li>
<li>Las toallas se colocan alineadas, con el <b>anagrama hacia fuera</b>. El papel higiénico se deja con la punta doblada.</li>
<li>No se pulveriza producto sobre los aparatos eléctricos.</li>
<li>Al final, la <b>gobernanta o subgobernanta revisa</b> la habitación y comunica a recepción que está lista.</li>
</ul>` },
      { h: 'Zonas nobles y comunes', p: 'p. 49-50', html: `
<p><b>Zonas nobles</b> (clientes): hall, recepción, salones, ascensores, aseos comunes, escaleras, gimnasio y spa. <b>Zonas comunes</b> (las «tripas» del hotel): vestuarios, aseos del personal, lencería, almacenes, offices y oficinas.</p>
<p>Los suelos se limpian a diario y según el tránsito. Las alfombras se levantan, se sacuden y se barren. Los aseos de las zonas nobles se repasan <b>varias veces al día</b>.</p>` },
      { h: 'Manchas', p: 'p. 50-51', html: `
<p>Cuanto antes se trate una mancha, mejor. El <b>agua caliente</b> puede fijarla.</p>
<table><tr><th>Mancha</th><th>Producto</th><th>Ojo</th></tr>
<tr><td>Sangre</td><td>Agua <b>fría</b>, amoniaco diluido o agua oxigenada</td><td>Sin agua caliente; sin amoniaco en seda o lana</td></tr>
<tr><td>Café</td><td>Agua fría y jabón; si está seca, agua oxigenada o vinagre blanco</td><td>Mejor antes de que se seque</td></tr>
<tr><td>Grasa</td><td><b>Talco</b> y después lavavajillas</td><td>El calor ayuda</td></tr>
<tr><td>Tinta</td><td><b>Alcohol o acetona</b></td><td><b>No frotar</b></td></tr>
<tr><td>Óxido</td><td>Jabón y agua tibia, o amoniaco</td><td>Nunca sobre mármol ni piedra caliza</td></tr></table>` },
      { h: 'Control de resultados', p: 'p. 51-52', html: `
<ul>
<li><b>Eficacia</b>: conseguir el resultado buscado.</li>
<li><b>Eficiencia</b>: conseguirlo con el <b>mínimo de recursos</b> (producto y tiempo).</li>
<li><b>Tiempo</b>: lo que se tarda en la tarea.</li>
<li><b>Duración</b>: cuánto tiempo se mantiene limpia la superficie.</li>
</ul>` },
      { h: 'Equipajes, bloqueos y salones', p: 'p. 52-57', html: `
<ul>
<li><b>Equipaje</b>: lo hace pisos o el mayordomo (butler). Primero se comprueba si el cliente tiene ropa en la <b>lavandería</b>. Lo grande va al fondo y lo pequeño a los lados. Los objetos de valor van aparte.</li>
<li><b>Bloqueo</b>: la habitación no se puede vender. Si es cuestión de horas, está «fuera de servicio»; si son días, está «bloqueada».</li>
<li>Para preparar una obra se mueven los muebles <b>sin arrastrarlos</b>, se cubren, se quitan las cortinas, se protegen el suelo y las lámparas, y se guarda la decoración.</li>
<li>Al <b>desbloquear</b>, la habitación se limpia como una salida, la gobernanta la revisa y se avisa a recepción.</li>
<li><b>Salones</b>: el montaje lo hacen eventos o pisos, pero la <b>limpieza es siempre de pisos</b>. Mesas: cuadrada, rectangular (en T o en U), redonda y ovalada (no se puede unir a otras). Montajes: T, peine, U y herradura.</li>
<li><b>Mesa</b>: el cuchillo y la cuchara van a la derecha y los tenedores a la izquierda. El postre va encima del plato. Las copas, arriba a la derecha: <b>agua, tinto, blanco y cava</b>. El pan, a la izquierda.</li>
</ul>` }
    ]
  }
];
