/* ==========================================================================
   CONTENIDO.JS  —  el contenido de tu web
   --------------------------------------------------------------------------
   Generado desde el editor el 1/9/2026, 14:42:30

   Puedes editarlo aquí a mano o volver a usar el editor, como prefieras.
   Si lo tocas a mano: los textos van entre comillas ' ' y no borres las comas.
   ========================================================================== */

const CONTENIDO = {

  /* 1. DATOS GENERALES Y LINKS ============================================ */
  general: {
    nombre: 'Sara Pericacho',
    logoLinea1: 'SARA',
    logoLinea2: 'PERICACHO',
    tituloWeb: 'Sara Pericacho — Creadora UGC & Content Creator',
    descripcionWeb: 'Creadora de contenido UGC. Vídeos y fotografía de producto que conectan con tu audiencia y venden.',
  },

  links: {
    email: 'info@sarapericacho.com',
    tiktok: 'https://www.tiktok.com/@sarapericacho',
    tiktokUsuario: '@sarapericacho',
    instagram: 'https://www.instagram.com/sarapericacho2',
    instagramUsuario: '@sarapericacho2',
    whatsapp: '',
  },

  /* 2. PESTAÑAS DEL MENÚ ==================================================
     'destino' empieza por # y es la sección a la que salta:
     #inicio · #portfolio · #servicios · #material · #sobre-mi
     #testimonios · #faq · #contacto   (o una dirección completa https://...)
     ====================================================================== */
  menu: {
    enlaces: [
      { texto: 'INICIO', destino: '#inicio' },
      { texto: 'PORTFOLIO', destino: 'portfolio.html' },
      { texto: 'MI MATERIAL', destino: '#material' },
      { texto: 'SOBRE MÍ', destino: '#sobre-mi' },
    ],
    boton: { texto: 'TRABAJA CONMIGO', destino: 'email' },
  },

  /* 3. BANNER PRINCIPAL =================================================== */
  banner: {
    foto: 'imagenes/portada-banner-ugc.jpg',
    encimaDelNombre: 'Creadora UGC  |  Content Creator',
    nombreGrande: 'Sara',
    nombreFirma: 'Pericacho',
    frase: 'Microinfluencer y Modelo',

    botonPrincipal: { texto: 'VER MI TRABAJO', destino: 'portfolio.html' },
    botonSecundario: { texto: 'TRABAJA CONMIGO', destino: 'email' },

    // Ponlo en false y desaparecen los datos en negro del banner
    mostrarDatos: true,
    datos: [
      { numero: '+200k Followers', texto: 'Tiktok' },
      { numero: '+82k Followers', texto: 'Instagram' },
      { numero: '+3 años', texto: 'creando' },
    ],
  },

  /* 4. MARCAS ============================================================= */
  marcas: {
    titulo: 'HAN CONFIADO EN MÍ',
    lista: [
      { nombre: 'SHEIN', logo: 'imagenes/marcas/logo-shein.webp' },
      { nombre: 'L\'ORÉAL PARIS', logo: 'imagenes/marcas/logo-l-oreal-paris.webp' },
      { nombre: 'CAUDALIE', logo: 'imagenes/marcas/logo-caudalie.png' },
      { nombre: 'NESPRESSO', logo: 'imagenes/marcas/logo-nespresso.png' },
      { nombre: 'ALO YOGA', logo: 'imagenes/marcas/logo-alo-yoga.png' },
      { nombre: 'ZARA', logo: 'imagenes/marcas/logo-zara.webp' },
      { nombre: 'YSL BEAUTY', logo: 'imagenes/marcas/logo-ysl-beauty.webp' },
      { nombre: 'RITUALS', logo: 'imagenes/marcas/logo-rituals.webp' },
      { nombre: '', logo: 'imagenes/marcas/logo-marca.webp' },
      { nombre: '', logo: 'imagenes/marcas/logo-marca-8ayki.webp' },
      { nombre: '', logo: 'imagenes/marcas/logo-marca-fyc2d.webp' },
      { nombre: '', logo: 'imagenes/marcas/logo-marca-g61gn.webp' },
      { nombre: '', logo: 'imagenes/marcas/logo-marca-g77c9.webp' },
      { nombre: '', logo: 'imagenes/marcas/logo-marca-ia9d8.webp' },
      { nombre: '', logo: 'imagenes/marcas/logo-marca-ibx7r.webp' },
    ],
  },

  /* 5. PORTFOLIO ==========================================================
     Las categorías se crean solas: escribe una nueva en 'categoria' y
     aparecerá su botón en la página de portfolio.
     tipo:      'video' o 'foto'  ->  decide en qué filtro aparece.
     destacado: true  ->  ese trabajo sale en la PORTADA.
     ancha:     true  ->  solo para fotos: ocupa la fila entera.
     ====================================================================== */
  portfolio: {
    titulo: 'PORTFOLIO',
    subtitulo: 'Una selección de mi contenido más reciente.',

    // Cuántos destacados salen en la portada
    cuantosEnPortada: 4,
    cuantasFotosEnPortada: 3,

    // El orden en que salen las categorías, arriba y abajo
    categorias: ['Belleza', 'Lifestyle', 'Tech'],

    items: [
      {
        titulo: 'Rutina de skincare',
        detalle: '',
        marca: 'CAUDALIE',
        marcaLogo: '',
        categoria: 'Belleza',
        tipo: 'video',
        portada: 'imagenes/portfolio/hf_20260830_172725_78923123-26d7-45f0-bd71-6ca9ea8ec7b8.png',
        archivo: 'imagenes/portfolio/1.mp4',
        enlace: '',
        destacado: false,
        ancha: false,
      },
      {
        titulo: 'Demo de producto',
        detalle: '',
        marca: 'L\'ORÉAL PARIS',
        marcaLogo: '',
        categoria: 'Belleza',
        tipo: 'video',
        portada: 'imagenes/portfolio/2.jpg',
        archivo: '',
        enlace: '',
        destacado: false,
        ancha: false,
      },
      {
        titulo: 'Unboxing',
        detalle: '',
        marca: 'NESPRESSO',
        marcaLogo: '',
        categoria: 'Lifestyle',
        tipo: 'video',
        portada: 'imagenes/portfolio/3.jpg',
        archivo: '',
        enlace: '',
        destacado: false,
        ancha: false,
      },
      {
        titulo: 'Fotografía de producto',
        detalle: '',
        marca: 'RITUALS',
        marcaLogo: '',
        categoria: '',
        tipo: 'foto',
        portada: 'imagenes/portfolio/imagen-1788209903346.webp',
        archivo: 'imagenes/portfolio/4.jpg',
        enlace: '',
        destacado: false,
        ancha: false,
      },
      {
        titulo: 'Look de entrenamiento',
        detalle: '',
        marca: 'ALO YOGA',
        marcaLogo: '',
        categoria: 'Moda',
        tipo: 'foto',
        portada: 'imagenes/portfolio/imagen-1788209911313.webp',
        archivo: 'imagenes/portfolio/5.jpg',
        enlace: '',
        destacado: false,
        ancha: false,
      },
      {
        titulo: 'Review de perfume',
        detalle: '',
        marca: 'YSL BEAUTY',
        marcaLogo: '',
        categoria: 'Belleza',
        tipo: 'video',
        portada: 'imagenes/portfolio/6.jpg',
        archivo: '',
        enlace: '',
        destacado: false,
        ancha: false,
      },
      {
        titulo: 'Outfit inspo',
        detalle: '',
        marca: 'ZARA',
        marcaLogo: '',
        categoria: 'Moda',
        tipo: 'foto',
        portada: 'imagenes/portfolio/imagen-1788209878746.webp',
        archivo: 'imagenes/portfolio/7.jpg',
        enlace: '',
        destacado: false,
        ancha: false,
      },
      {
        titulo: 'Café de mañana',
        detalle: '',
        marca: 'NESPRESSO',
        marcaLogo: '',
        categoria: 'Lifestyle',
        tipo: 'foto',
        portada: 'imagenes/portfolio/imagen-1788209890223.webp',
        archivo: 'imagenes/portfolio/8.jpg',
        enlace: '',
        destacado: false,
        ancha: false,
      },
      {
        titulo: 'Setup de grabación',
        detalle: '',
        marca: 'PROYECTO PROPIO',
        marcaLogo: '',
        categoria: 'Tech',
        tipo: 'video',
        portada: 'imagenes/portfolio/9.jpg',
        archivo: '',
        enlace: '',
        destacado: false,
        ancha: false,
      },
      {
        titulo: 'Foto nueva',
        detalle: '',
        marca: '',
        marcaLogo: '',
        categoria: '',
        tipo: 'foto',
        portada: 'imagenes/portfolio/imagen-1788221493500.webp',
        archivo: '',
        enlace: '',
        destacado: false,
        ancha: false,
      },
      {
        titulo: 'Foto nueva',
        detalle: '',
        marca: '',
        marcaLogo: '',
        categoria: '',
        tipo: 'foto',
        portada: 'imagenes/portfolio/imagen-1788221499992.webp',
        archivo: '',
        enlace: '',
        destacado: false,
        ancha: false,
      },
      {
        titulo: 'Foto nueva',
        detalle: '',
        marca: '',
        marcaLogo: '',
        categoria: '',
        tipo: 'foto',
        portada: 'imagenes/portfolio/imagen-1788221515307.webp',
        archivo: '',
        enlace: '',
        destacado: false,
        ancha: false,
      },
      {
        titulo: 'Foto nueva',
        detalle: '',
        marca: '',
        marcaLogo: '',
        categoria: '',
        tipo: 'foto',
        portada: 'imagenes/portfolio/imagen-1788265984530.webp',
        archivo: '',
        enlace: '',
        destacado: false,
        ancha: false,
      },
      {
        titulo: 'Foto nueva',
        detalle: '',
        marca: '',
        marcaLogo: '',
        categoria: '',
        tipo: 'foto',
        portada: 'imagenes/portfolio/imagen-1788266546972.webp',
        archivo: '',
        enlace: '',
        destacado: false,
        ancha: false,
      },
    ],
  },

  /* 6. SERVICIOS ========================================================== */
  servicios: {
    mostrar: false,
    titulo: 'SERVICIOS',
    subtitulo: 'Cómo puedo ayudar a tu marca.',
    lista: [
      {
        nombre: 'VÍDEOS UGC',
        descripcion: 'Vídeos auténticos que enseñan tu producto de forma natural y cercana, listos para TikTok, Reels y anuncios.',
        imagen: 'imagenes/servicios/1.jpg',
      },
      {
        nombre: 'FOTOGRAFÍA DE PRODUCTO',
        descripcion: 'Imágenes cuidadas que ponen tu producto en valor y elevan la estética de tu marca.',
        imagen: 'imagenes/servicios/2.jpg',
      },
      {
        nombre: 'CONTENIDO PARA REDES',
        descripcion: 'TikTok, Reels y contenido de Instagram pensado para conectar con tu audiencia y generar resultados.',
        imagen: 'imagenes/servicios/3.jpg',
      },
      {
        nombre: 'GUION Y VOZ EN OFF',
        descripcion: 'Guiones creativos y locución que cuentan la historia de tu marca y generan confianza.',
        imagen: 'imagenes/servicios/4.jpg',
      },
    ],
  },

  /* 7. MI MATERIAL ========================================================
     Una sola foto apaisada con todo tu equipo (mínimo 1600px de ancho).
     ====================================================================== */
  material: {
    titulo: 'MI MATERIAL',
    subtitulo: 'El equipo con el que grabo y edito todo mi contenido.',
    imagen: 'imagenes/chatgpt-image-31-ago-2026-02_24_05.png',
  },

  /* 8. SOBRE MÍ =========================================================== */
  sobreMi: {
    titulo: 'HOLA, SOY',
    tituloNombre: 'SARA PERICACHO',
    subtitulo: 'CREADORA UGC & CONTENT CREATOR',
    foto: 'imagenes/sobre-mi.png',
    parrafos: [
      'Ayudo a las marcas a conectar con su audiencia a través de contenido auténtico, estético y cercano, que se siente real y genera resultados.',
      'Llevo más de 3 años creando contenido para marcas de belleza, moda y lifestyle. Me encargo de todo el proceso: idea, guion, grabación, edición y entrega lista para publicar.',
      'Trabajo con marcas de todo el mundo. Si tienes un proyecto en mente, escríbeme y lo hablamos.',
    ],
    datos: [
      { numero: '50+', texto: 'VÍDEOS' },
      { numero: '280K+', texto: 'SEGUIDORES' },
    ],
  },

  /* 9. TESTIMONIOS ======================================================== */
  testimonios: {
    mostrar: false,
    titulo: 'LO QUE DICEN DE MÍ',
    lista: [
      {
        texto: 'Sara entendió nuestra marca a la primera. El vídeo fue el anuncio con mejor rendimiento del trimestre.',
        autor: 'Marta G.',
        cargo: 'Marketing Manager, Marca de belleza',
      },
      {
        texto: 'Súper profesional y rapidísima. Entregó todo antes de plazo y con una calidad altísima.',
        autor: 'Javier L.',
        cargo: 'Fundador, Marca de moda',
      },
      {
        texto: 'Contenido natural, bonito y que vende. Ya hemos repetido con ella tres campañas.',
        autor: 'Lucía R.',
        cargo: 'Social Media, Marca de lifestyle',
      },
    ],
  },

  /* 10. PREGUNTAS FRECUENTES =============================================== */
  faq: {
    mostrar: false,
    titulo: 'PREGUNTAS FRECUENTES',
    lista: [
      {
        pregunta: '¿Qué incluye un pack de contenido UGC?',
        respuesta: 'Incluye la idea y el guion, la grabación, la edición completa con música y subtítulos, y la entrega en formato vertical listo para publicar. También te doy el material en bruto si lo necesitas.',
      },
      {
        pregunta: '¿Cuánto tardas en entregar?',
        respuesta: 'El plazo habitual es de 7 a 10 días desde que recibo el producto. Si necesitas algo urgente, escríbeme y lo miramos.',
      },
      {
        pregunta: '¿Publicas el contenido en tus redes?',
        respuesta: 'Puedo hacerlo, pero no está incluido por defecto. El contenido UGC es tuyo para que lo uses en tus canales y en publicidad de pago. Si quieres que además lo publique yo, se cotiza aparte.',
      },
      {
        pregunta: '¿Trabajas con marcas de fuera de España?',
        respuesta: 'Sí, trabajo con marcas de todo el mundo. Solo hay que tener en cuenta el envío del producto.',
      },
    ],
  },

  /* 11. CONTACTO ==========================================================
     Al pulsar el botón se abre el correo del visitante con tu dirección
     (la de links.email), el asunto y la plantilla ya escritos.
     ====================================================================== */
  contacto: {
    titulo: 'CREEMOS ALGO',
    tituloFirma: 'juntas',
    texto: '¿Tienes un proyecto en mente? Cuéntame qué necesitas y te respondo en menos de 24 horas.',
    ciudad: '',
    textoBoton: 'ENVIAR MENSAJE',
    asunto: 'Propuesta de colaboración UGC',
    plantilla: 'Hola Sara,\n\nMarca o empresa:\nInfo:\n\n\n',
  },

  /* 12. TAMAÑOS DE TEXTO ==================================================
     Lo rellena el editor cuando agrandas o achicas un texto.
     1 = original · 1.2 = un 20% más grande · 0.8 = un 20% más pequeño
     Para devolver todo a su tamaño normal:  estilos: {},
     ====================================================================== */
  estilos: {
    'banner.frase': 1.40,
    'general.logoLinea1': 1.30,
    'general.logoLinea2': 1.30,
    'links.email': 1.30,
    'links.instagramUsuario': 1.30,
    'links.tiktokUsuario': 1.30,
    'marcas.titulo': 1.20,
  },
};
