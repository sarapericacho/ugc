/* ==========================================================================
   APP.JS — la lógica de la web.
   NO hace falta que toques este archivo. Todo se edita en contenido.js
   ========================================================================== */
(function () {
  'use strict';

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ── De dónde salen los datos ─────────────────────────────────────────
     Normalmente, del archivo contenido.js.
     Pero si has dejado cambios a medias en el panel (admin.html), se ven
     esos, para que puedas previsualizarlos antes de publicar.
     Ese borrador vive SOLO en tu navegador: los visitantes de la web
     siempre ven el archivo de verdad. */
  let CONT = typeof CONTENIDO !== 'undefined' ? CONTENIDO : null;
  let esBorrador = false;
  try {
    const guardado = localStorage.getItem('ugc_borrador');
    if (guardado) { CONT = JSON.parse(guardado); esBorrador = true; }
  } catch (e) { /* el navegador no deja usar el almacenamiento: seguimos igual */ }

  /* ── Iconos ──────────────────────────────────────────────────────────── */
  const ICONOS = {
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 9.2L4.4 8.3v9.6h15.2V8.3L12 13.2zM19.3 6H4.7L12 10.7 19.3 6z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1 0-5.2c.27 0 .52.04.76.12v-3.1a5.7 5.7 0 0 0-.76-.05A5.69 5.69 0 1 0 15.54 15.4V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.29 4.29 0 0 1-3.24-1.48z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.98c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17-.22-.55-.47-.94-.88-1.35-.41-.41-.8-.66-1.35-.88-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07zm0 3.37a4.45 4.45 0 1 1 0 8.9 4.45 4.45 0 0 1 0-8.9zm0 7.34a2.89 2.89 0 1 0 0-5.78 2.89 2.89 0 0 0 0 5.78zm5.66-7.53a1.04 1.04 0 1 1-2.08 0 1.04 1.04 0 0 1 2.08 0z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5A9.42 9.42 0 0 1 18.7 5.5a9.35 9.35 0 0 1 2.76 6.65 9.42 9.42 0 0 1-9.41 9.35z"/></svg>',
    lugar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  };

  /* ── Utilidades ──────────────────────────────────────────────────────── */
  const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const valor = (ruta) => ruta.split('.').reduce((o, k) => (o == null ? o : o[k]), CONT);

  /* Hueco decorativo para cuando todavía no has subido una foto.
     Se adapta a la forma que necesite: vertical, cuadrada o apaisada. */
  function relleno(texto = '', an = 400, al = 500) {
    const cx = an / 2;
    const cy = al * 0.44;
    const u = Math.min(an, al) / 100;        // unidad para que el dibujo escale
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${an} ${al}">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#EFE8DE"/><stop offset="1" stop-color="#E2D8CB"/>
      </linearGradient></defs>
      <rect width="${an}" height="${al}" fill="url(#g)"/>
      <rect x="${cx - 14.4 * u}" y="${cy - 9.8 * u}" width="${28.8 * u}" height="${19.6 * u}" rx="${2 * u}" fill="none" stroke="#C9BCAB" stroke-width="${0.6 * u}"/>
      <circle cx="${cx}" cy="${cy}" r="${8.4 * u}" fill="none" stroke="#C9BCAB" stroke-width="${0.6 * u}"/>
      <circle cx="${cx}" cy="${cy}" r="${3.2 * u}" fill="none" stroke="#C9BCAB" stroke-width="${0.6 * u}"/>
      <text x="${cx}" y="${cy + 19 * u}" text-anchor="middle" font-family="Georgia,serif" font-size="${3.4 * u}" fill="#A99A87" letter-spacing="2">${esc(texto).slice(0, 34)}</text>
    </svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.replace(/\s+/g, ' '));
  }

  const rellenoDe = (img) => relleno(
    img.dataset.relleno || img.alt || '',
    +img.dataset.rellenoW || 400,
    +img.dataset.rellenoH || 500
  );

  /* Si una imagen no existe, la sustituye por el relleno en vez de romperse */
  function protegerImagenes(contenedor) {
    $$('img', contenedor).forEach((img) => {
      if (img.dataset.protegida) return;
      img.dataset.protegida = '1';
      img.addEventListener('error', () => {
        if (img.dataset.falla) return;
        img.dataset.falla = '1';
        img.src = rellenoDe(img);
      });
      if (!img.getAttribute('src')) img.src = rellenoDe(img);
    });
  }

  /* ══════════════════════════════════════════════════════════════════════
     TEXTOS SUELTOS  (todo lo que lleva data-c="ruta.del.contenido")
     ══════════════════════════════════════════════════════════════════════ */
  function pintarTextos() {
    document.title = CONT.general.tituloWeb;
    const meta = $('meta[name="description"]');
    if (meta) meta.setAttribute('content', CONT.general.descripcionWeb);

    $$('[data-c]').forEach((el) => {
      const v = valor(el.dataset.c);
      if (v != null && v !== '') el.textContent = v;
    });
    $('#anio').textContent = new Date().getFullYear();
  }

  /* ── Tamaños de texto que has cambiado desde el editor ─────────────────
     Se guarda un multiplicador (1.2 = un 20% más grande), no un tamaño fijo.
     Así el texto sigue encogiendo solo en el móvil como debe. */
  function aplicarTamanos() {
    const est = CONT.estilos || {};
    $$('[data-ed], [data-c]').forEach((el) => {
      const ruta = el.dataset.ed || el.dataset.c;
      const f = +est[ruta];
      if (!f || f === 1) {
        if (el.style.fontSize) el.style.fontSize = '';
        return;
      }
      /* En los contactos del banner el tamaño se aplica a toda la fila,
         para que el icono redondo crezca junto al texto y no se descuadren. */
      const donde = el.closest('.social__item') || el;

      donde.style.fontSize = '';                                // medir el de origen
      const base = parseFloat(getComputedStyle(donde).fontSize);
      if (base) donde.style.fontSize = (base * f).toFixed(2) + 'px';
      if (donde !== el) el.style.fontSize = '';
    });
  }

  // Al cambiar el ancho de la ventana hay que volver a calcularlos
  let tiempoTamanos = null;
  window.addEventListener('resize', () => {
    clearTimeout(tiempoTamanos);
    tiempoTamanos = setTimeout(aplicarTamanos, 200);
  });

  /* ══════════════════════════════════════════════════════════════════════
     BANNER
     ══════════════════════════════════════════════════════════════════════ */
  function pintarBanner() {
    if (!$('#bannerFoto')) return;
    const b = CONT.banner;
    const L = CONT.links;

    // Foto de fondo (si no existe, se queda el fondo decorativo)
    const fondo = $('#bannerFoto');
    fondo.dataset.edImg = 'banner.foto';
    fondo.classList.remove('sin-foto');
    fondo.style.backgroundImage = '';
    if (b.foto) {
      const test = new Image();
      test.onload = () => { fondo.style.backgroundImage = `url("${b.foto}")`; };
      test.onerror = () => fondo.classList.add('sin-foto');
      test.src = b.foto;
    } else {
      fondo.classList.add('sin-foto');
    }

    // Iconos de contacto
    const social = [];
    if (L.email)     social.push({ i: 'email',     href: 'mailto:' + L.email, txt: L.email, ruta: 'links.email' });
    if (L.tiktok)    social.push({ i: 'tiktok',    href: L.tiktok,    txt: L.tiktokUsuario || 'TikTok', ruta: 'links.tiktokUsuario' });
    if (L.instagram) social.push({ i: 'instagram', href: L.instagram, txt: L.instagramUsuario || 'Instagram', ruta: 'links.instagramUsuario' });
    if (L.whatsapp)  social.push({ i: 'whatsapp',  href: L.whatsapp,  txt: 'WhatsApp' });

    $('#social').innerHTML = social.map((s) => `
      <li>
        <a class="social__item" href="${esc(s.href)}"${s.href.startsWith('mailto:') ? '' : ' target="_blank" rel="noopener"'}>
          <span class="social__icono">${ICONOS[s.i]}</span>
          <span class="social__texto"${s.ruta ? ` data-ed="${s.ruta}"` : ''}>${esc(s.txt)}</span>
        </a>
      </li>`).join('');

    // Botones
    const claves = ['banner.botonPrincipal', 'banner.botonSecundario'];
    const botones = [b.botonPrincipal, b.botonSecundario];
    $('#bannerBotones').innerHTML = botones.map((x, i) => {
      if (!x || !x.texto) return '';
      const href = resolverDestino(x.destino);
      return `<a href="${esc(href)}" class="btn ${i === 0 ? 'btn--negro' : 'btn--linea'}" data-ed="${claves[i]}.texto"${abreFuera(href) ? ' target="_blank" rel="noopener"' : ''}>${esc(x.texto)}</a>`;
    }).join('');

    // Datos destacados (se pueden apagar con mostrarDatos: false)
    const datos = b.mostrarDatos === false ? [] : (b.datos || []);
    const cajaDatos = $('#bannerDatos');
    cajaDatos.hidden = !datos.length;
    cajaDatos.innerHTML = datos.map((d, i) =>
      `<li class="banner__dato" data-ed-item="banner.datos.${i}">
         <b data-ed="banner.datos.${i}.numero">${esc(d.numero)}</b>
         <span data-ed="banner.datos.${i}.texto">${esc(d.texto)}</span>
       </li>`
    ).join('');

    // Pie: iconos redondos
    $('#pieSocial').innerHTML = social.map((s) =>
      `<li><a href="${esc(s.href)}" aria-label="${esc(s.txt)}"${s.href.startsWith('mailto:') ? '' : ' target="_blank" rel="noopener"'}>${ICONOS[s.i]}</a></li>`
    ).join('');
  }

  /* ══════════════════════════════════════════════════════════════════════
     EL ENLACE DE ESCRIBIRTE
     --------------------------------------------------------------------
     Abre el programa de correo del visitante con tu dirección puesta, el
     asunto escrito y la plantilla rellenada. Se usa en el botón TRABAJA
     CONMIGO, en ENVIAR MENSAJE y en el icono del sobre.

     Cualquier botón cuyo destino sea 'email' acaba aquí.
     ══════════════════════════════════════════════════════════════════════ */
  function enlaceCorreo() {
    const c = CONT.contacto || {};
    const email = (CONT.links.email || '').trim();
    if (!email) return '#contacto';
    return 'mailto:' + email
      + '?subject=' + encodeURIComponent(c.asunto || '')
      + '&body=' + encodeURIComponent(c.plantilla || '');
  }

  /* ¿Estamos en la portada o en la página de portfolio? */
  const EN_PORTADA = !!document.getElementById('inicio');

  const ES_EMAIL = new Set(['email', 'correo', 'mailto', 'e-mail']);

  function resolverDestino(d) {
    const t = String(d || '').trim();
    if (ES_EMAIL.has(t.toLowerCase())) return enlaceCorreo();

    /* En la portada, el portfolio es solo un adelanto: cualquier enlace que
       apunte ahí lleva a la página del portfolio entero, que es lo que se
       espera al pulsar PORTFOLIO o VER MI TRABAJO. */
    if (t === '#portfolio' && EN_PORTADA) return 'portfolio.html';

    // Desde la página de portfolio, los enlaces a secciones vuelven a la portada
    if (t.startsWith('#') && !EN_PORTADA) return 'index.html' + t;
    return t || '#';
  }

  /* Solo se abre en otra pestaña lo que es una web de fuera */
  const abreFuera = (href) => /^https?:\/\//i.test(href);

  /* ══════════════════════════════════════════════════════════════════════
     MENÚ DE ARRIBA
     ══════════════════════════════════════════════════════════════════════ */

  /* Por si vienes de una versión antigua de contenido.js que aún no tenía menú */
  const MENU_POR_DEFECTO = {
    enlaces: [
      { texto: 'INICIO', destino: '#inicio' },
      { texto: 'PORTFOLIO', destino: '#portfolio' },
      { texto: 'SERVICIOS', destino: '#servicios' },
      { texto: 'MI MATERIAL', destino: '#material' },
      { texto: 'SOBRE MÍ', destino: '#sobre-mi' },
    ],
    boton: { texto: 'TRABAJA CONMIGO', destino: '#contacto' },
  };

  function pintarMenu() {
    if (!CONT.menu) CONT.menu = JSON.parse(JSON.stringify(MENU_POR_DEFECTO));
    const m = CONT.menu;

    // Una pestaña que apunta a una sección apagada no se enseña
    const apagadas = {
      '#servicios': CONT.servicios && CONT.servicios.mostrar === false,
      '#testimonios': CONT.testimonios && CONT.testimonios.mostrar === false,
      '#faq': CONT.faq && CONT.faq.mostrar === false,
    };

    const enlaces = (m.enlaces || []).map((x, i) => {
      if (!x.texto) return '';
      if (apagadas[x.destino] && !window.MODO_EDICION) return '';
      const href = resolverDestino(x.destino);
      return `<a href="${esc(href)}" class="nav__link" data-cerrar-menu data-ed="menu.enlaces.${i}.texto"${abreFuera(href) ? ' target="_blank" rel="noopener"' : ''}>${esc(x.texto)}</a>`;
    }).join('');

    const hrefBoton = resolverDestino((m.boton || {}).destino);
    const boton = (m.boton && m.boton.texto)
      ? `<a href="${esc(hrefBoton)}" class="btn btn--negro nav__cta" data-cerrar-menu data-ed="menu.boton.texto"${abreFuera(hrefBoton) ? ' target="_blank" rel="noopener"' : ''}>${esc(m.boton.texto)}</a>`
      : '';

    $('#nav').innerHTML = enlaces + boton;
  }

  /* ══════════════════════════════════════════════════════════════════════
     MARCAS
     ══════════════════════════════════════════════════════════════════════ */
  /* Este carrusel es SOLO de logos: nunca sale texto.
     Una marca sin logo no se enseña al público; en edición sale su hueco
     con un botón para ponérselo. */
  /* Cada vez que se repinta se cambia esta señal. El carrusel, que se monta
     en segundo plano esperando a que carguen los logos, comprueba la señal
     antes de escribir: si ha habido otro repintado por medio, se retira.
     Sin esto, un montaje que terminaba tarde borraba la fila y se llevaba
     por delante el botón de añadir logos del editor. */
  let senalMarcas = 0;

  function pintarMarcas() {
    if (!$('#marcasPista')) return;
    senalMarcas++;
    const lista = CONT.marcas.lista || [];
    const conLogo = lista.filter((m) => m.logo);

    $('#marcas').hidden = !conLogo.length && !window.MODO_EDICION;
    if ($('#marcas').hidden) return;

    const trozo = (m, i) => m.logo
      ? `<span class="marca" data-ed-item="marcas.lista.${i}">
           <img src="${esc(m.logo)}" alt="${esc(m.nombre || 'Marca')}" data-ed-img="marcas.lista.${i}.logo" loading="lazy">
         </span>`
      : `<span class="marca marca--vacia" data-ed-item="marcas.lista.${i}">
           <button type="button" class="marca__mas" data-ed-img="marcas.lista.${i}.logo" title="Poner el logo de esta marca">+ LOGO</button>
         </span>`;

    const pista = $('#marcasPista');

    // En edición se ven todas (para poder rellenarlas) y quietas
    if (window.MODO_EDICION) {
      pista.style.animation = 'none';
      pista.innerHTML = lista.map(trozo).join('');
      vigilarLogos(pista);
      return;
    }

    // Publicada: solo las que tienen logo, girando sin parar
    montarCarrusel(pista, lista.map((m, i) => (m.logo ? trozo(m, i) : '')).join(''));
  }

  /* Repite los logos las veces que hagan falta para que la cinta sea más
     ancha que la pantalla. Así gira siempre, tengas dos logos o veinte,
     y sin que se vea el hueco al dar la vuelta. */
  async function montarCarrusel(pista, uno) {
    const mia = senalMarcas;
    pista.style.animation = 'none';
    pista.innerHTML = uno;
    await esperarImagenes(pista);
    if (mia !== senalMarcas) return;           // ha habido otro repintado: me retiro

    const anchoUno = pista.scrollWidth;
    if (!anchoUno) { vigilarLogos(pista); return; }

    const visible = (pista.parentElement && pista.parentElement.clientWidth) || window.innerWidth;
    const mitad = Math.max(1, Math.ceil((visible * 1.5) / anchoUno));

    pista.innerHTML = uno.repeat(mitad * 2);   // par, para que las dos mitades sean iguales
    await esperarImagenes(pista);
    if (mia !== senalMarcas) return;

    // La velocidad se ajusta al ancho, para que siempre vaya igual de rápido
    const recorrido = pista.scrollWidth / 2;
    pista.style.animation = '';
    pista.style.animationDuration = Math.max(20, Math.round(recorrido / 45)) + 's';

    vigilarLogos(pista);
  }

  const esperarImagenes = (contenedor) => Promise.all(
    $$('img', contenedor).map((img) => img.complete ? Promise.resolve() : new Promise((ok) => {
      img.addEventListener('load', ok, { once: true });
      img.addEventListener('error', ok, { once: true });
    }))
  );

  /* Si falta el archivo del logo: en edición vuelve el botón, y si no, se quita */
  function vigilarLogos(pista) {
    $$('.marca img', pista).forEach((img) => {
      img.addEventListener('error', () => {
        const span = img.closest('.marca');
        if (!span) return;
        if (!window.MODO_EDICION) { span.remove(); return; }
        const ruta = span.dataset.edItem;
        span.classList.add('marca--vacia');
        span.innerHTML =
          `<button type="button" class="marca__mas" data-ed-img="${esc(ruta)}.logo" title="Poner el logo de esta marca">+ LOGO</button>`;
      });
    });
  }

  /* ══════════════════════════════════════════════════════════════════════
     PORTFOLIO
     ══════════════════════════════════════════════════════════════════════ */
  // El formato siempre es vídeo o foto: no hay opción de ver los dos juntos.
  // Se arranca en vídeo, que es el grueso del trabajo UGC.
  const filtro = { categoria: 'TODAS', formato: 'video' };

  /* Las categorías salen solas de los trabajos, pero SU ORDEN se guarda
     aparte (portfolio.categorias) para que puedas colocarlas como quieras.
     Aquí se mantiene esa lista al día: se añaden las nuevas al final y se
     quitan las que se han quedado sin ningún trabajo. */
  function categoriasDe(items) {
    const p = CONT.portfolio || {};
    const enTrabajos = [];
    (items || []).forEach((it) => {
      const c = (it.categoria || '').trim();
      if (c && !enTrabajos.includes(c)) enTrabajos.push(c);
    });

    if (!Array.isArray(p.categorias)) p.categorias = [];
    enTrabajos.forEach((c) => { if (!p.categorias.includes(c)) p.categorias.push(c); });
    p.categorias = p.categorias.filter((c) => enTrabajos.includes(c));

    return p.categorias.slice();
  }

  function pintarFiltrosCategoria() {
    if (!$('#filtrosCategoria')) return;          // la portada no lleva filtros
    const cats = categoriasDe(CONT.portfolio.items);
    const activa = (c) => (filtro.categoria === c ? ' activo' : '');

    const mas = window.MODO_EDICION
      ? `<button class="chip chip--mas ed-ui" data-ed-nueva-cat title="Crear una categoría nueva">+ CATEGORÍA</button>`
      : '';

    // En edición las categorías se pueden arrastrar para colocarlas
    const arrastre = window.MODO_EDICION ? ' draggable="true" class="chip chip--mover' : ' class="chip';

    $('#filtrosCategoria').innerHTML =
      `<button class="chip${activa('TODAS')}" data-cat="TODAS">TODAS</button>`
      + cats.map((c) => `<button${arrastre}${activa(c)}" data-cat="${esc(c)}">${esc(c)}</button>`).join('')
      + mas;

    $$('#filtrosCategoria .chip[data-cat]').forEach((btn) => {
      btn.addEventListener('click', () => {
        filtro.categoria = btn.dataset.cat;
        pintarFiltrosCategoria();
        pintarPortfolio();
      });
    });
  }

  /* El portfolio va por bloques: un título de categoría y debajo sus
     trabajos. Al final, si estás viendo vídeos y sin filtrar, se añade
     un bloque con las fotos. */
  function pintarPortfolio() {
    // En la portada solo salen los que hayas destacado a mano
    if ($('#portfolioDestacados')) return pintarDestacados();
    if ($('#portfolioLista')) return pintarPortfolioEntero();
  }

  /* PORTADA: unos pocos trabajos elegidos por ti, y un botón para ver todo.
     Arriba los vídeos destacados, y debajo las fotos destacadas. */
  function pintarDestacados() {
    const todos = CONT.portfolio.items || [];
    const p = CONT.portfolio;

    /* La portada SIEMPRE enseña el mismo número: primero los que hayas
       marcado con la estrella y, si no llegan, se completa con el resto
       por orden. Así nunca se queda coja. */
    const elegir = (tipo, cuantos) => {
      const suyos = todos.filter((it) => (it.tipo || 'video') === tipo);
      const marcados = suyos.filter((it) => it.destacado);
      const relleno = suyos.filter((it) => !it.destacado);
      return marcados.concat(relleno).slice(0, cuantos);
    };

    const videos = elegir('video', p.cuantosEnPortada || 4);
    const fotos = elegir('foto', p.cuantasFotosEnPortada || 3);

    const cajaV = $('#portfolioDestacados');
    cajaV.innerHTML = videos.map((it) => tarjetaDe(it, todos)).join('');
    rematarTarjetas(cajaV, todos);

    const cajaF = $('#fotosDestacadas');
    if (cajaF) {
      cajaF.hidden = !fotos.length;
      cajaF.innerHTML = fotos.map((it) => fotoDe(it, todos)).join('');
      protegerImagenes(cajaF);
    }

    // En edición, avisar si no hay material suficiente para llenar la portada
    const vacio = $('#portfolioVacio');
    if (!vacio) return;

    const faltanV = (p.cuantosEnPortada || 4) - videos.length;
    const faltanF = (p.cuantasFotosEnPortada || 3) - fotos.length;

    if (window.MODO_EDICION && (faltanV > 0 || faltanF > 0)) {
      const trozos = [];
      if (faltanV > 0) trozos.push(`${faltanV} vídeo${faltanV > 1 ? 's' : ''}`);
      if (faltanF > 0) trozos.push(`${faltanF} foto${faltanF > 1 ? 's' : ''}`);
      vacio.textContent = `La portada enseña 4 vídeos y 3 fotos. Te falta añadir ${trozos.join(' y ')} en el portfolio.`;
      vacio.hidden = false;
    } else {
      vacio.hidden = true;
    }
  }

  function pintarPortfolioEntero() {
    const todos = CONT.portfolio.items || [];
    const cats = categoriasDe(todos);
    const lista = $('#portfolioLista');

    const deCategoria = (cat) => todos.filter((it) =>
      (it.categoria || '').trim() === cat && (it.tipo || 'video') === filtro.formato);

    const bloques = [];

    const sonFotos = filtro.formato === 'foto';

    (filtro.categoria === 'TODAS' ? cats : [filtro.categoria]).forEach((cat) => {
      const suyos = deCategoria(cat);
      if (suyos.length || window.MODO_EDICION) {
        bloques.push({ titulo: cat, categoria: cat, items: suyos, fotos: sonFotos });
      }
    });

    // Los trabajos a los que aún no les has puesto categoría
    const sueltos = todos.filter((it) =>
      !(it.categoria || '').trim() && (it.tipo || 'video') === filtro.formato);
    if (sueltos.length && filtro.categoria === 'TODAS') {
      bloques.push({ titulo: 'Otros', categoria: '', items: sueltos, fotos: sonFotos });
    }

    // Y abajo del todo, las fotos
    if (filtro.formato === 'video' && filtro.categoria === 'TODAS') {
      const fotos = todos.filter((it) => it.tipo === 'foto');
      if (fotos.length) bloques.push({ titulo: 'Foto', categoria: null, items: fotos, fotos: true });
    }

    const hayAlgo = bloques.some((b) => b.items.length);
    $('#portfolioVacio').hidden = hayAlgo || window.MODO_EDICION;

    /* En edición, cada fila termina con un "+" del mismo tamaño que sus
       trabajos: uno para seguir añadiendo vídeos en su categoría, y otro
       al final de las fotos. Lleva escrito de qué es, porque el "+" de las
       fotos tiene que crear una foto aunque estés viendo los vídeos. */
    const masDe = (categoria, fotos) => {
      if (!window.MODO_EDICION) return '';
      const tipo = fotos ? 'foto' : 'video';
      return `<button type="button" class="ed-anadir ed-anadir--teja ed-ui"
        data-ed-anadir-cat="${esc(categoria || '')}" data-ed-anadir-tipo="${tipo}"
        ><b>+</b><span>AÑADIR ${fotos ? 'FOTO' : 'VÍDEO'}</span></button>`;
    };

    lista.innerHTML = bloques.map((b) => `
      <section class="bloque-cat">
        <h3 class="bloque-cat__titulo"><span>${esc(b.titulo)}</span></h3>
        <div class="${b.fotos ? 'grid-fotos' : 'grid-portfolio'}">${
          b.items.map((it) => (b.fotos ? fotoDe(it, todos) : tarjetaDe(it, todos))).join('')
          + masDe(b.categoria, b.fotos)
        }</div>
      </section>`).join('');

    rematarTarjetas(lista, todos);
  }

  /* Cada trabajo, con su marco de móvil */
  function tarjetaDe(it, todos) {
      const i = todos.indexOf(it);
      const esVideo = (it.tipo || 'video') === 'video';
      const n = i;
      const archivo = archivoDe(it);
      const reproducible = esVideoArchivo(archivo);
      const soloEnlace = !reproducible && !!it.enlace;

      let boton = '';
      if (reproducible) {
        boton = `<button class="tarjeta__play" type="button" aria-label="Reproducir ${esc(it.titulo)}">${ICONOS.play}</button>`;
      } else if (soloEnlace) {
        boton = `<button class="tarjeta__play tarjeta__play--fuera" type="button" aria-label="Ver ${esc(it.titulo)}">↗</button>`;
      } else if (esVideo) {
        boton = `<span class="tarjeta__play tarjeta__play--vacio" aria-hidden="true">${ICONOS.play}</span>`;
      }

      /* La firma del trabajo: el logo a la izquierda, una raya, y el texto.
         El logo puede ser el suyo propio o el de la sección de marcas. */
      const logo = it.marcaLogo || logoDeMarca(it.marca);
      let izquierda = '';
      if (logo) {
        izquierda = `<img class="tarjeta__logo" src="${esc(logo)}" alt="${esc(it.marca)}" data-ed-img="portfolio.items.${n}.marcaLogo" loading="lazy">`;
      } else if (window.MODO_EDICION) {
        izquierda = `<button type="button" class="marca__mas" data-ed-img="portfolio.items.${n}.marcaLogo" title="Poner el logo de esta marca">+ LOGO</button>`;
      } else if (it.marca) {
        izquierda = `<span class="tarjeta__marca-txt" data-ed="portfolio.items.${n}.marca">${esc(it.marca)}</span>`;
      }

      return `
      <article class="tarjeta" data-i="${n}" data-ed-item="portfolio.items.${n}" style="animation-delay:${Math.min(i * 45, 400)}ms">
        <div class="tarjeta__info">
          <div class="tarjeta__credito">
            ${izquierda}
            ${izquierda ? '<span class="tarjeta__raya"></span>' : ''}
            <div class="tarjeta__lineas">
              <p class="tarjeta__titulo" data-ed="portfolio.items.${n}.titulo">${esc(it.titulo)}</p>
              ${(it.detalle || window.MODO_EDICION)
                ? `<p class="tarjeta__detalle" data-ed="portfolio.items.${n}.detalle">${esc(it.detalle || '')}</p>`
                : ''}
            </div>
          </div>
        </div>
        <div class="tarjeta__movil">
          <div class="tarjeta__media">
            <img src="${esc(it.portada || '')}" alt="${esc(it.titulo)}" data-relleno="${esc(it.titulo)}" data-ed-img="portfolio.items.${n}.portada" loading="lazy">
            <span class="tarjeta__etiqueta">${esVideo ? 'VÍDEO' : 'FOTO'}</span>
            ${boton}
          </div>
        </div>
      </article>`;
  }

  /* Las fotos van sin marco de móvil: una cuadrícula limpia.
     Una foto marcada como 'ancha' ocupa la fila entera. */
  function fotoDe(it, todos) {
    const n = todos.indexOf(it);
    return `
      <article class="foto${it.ancha ? ' foto--ancha' : ''}" data-i="${n}" data-ed-item="portfolio.items.${n}">
        <img src="${esc(it.portada || '')}" alt="${esc(it.titulo || '')}"
             data-relleno="${esc(it.titulo || '')}"
             data-relleno-w="${it.ancha ? 1600 : 800}" data-relleno-h="${it.ancha ? 900 : 1000}"
             data-ed-img="portfolio.items.${n}.portada" loading="lazy">
      </article>`;
  }

  /* Lo que hay que hacer con las tarjetas una vez pintadas */
  function rematarTarjetas(grid, todos) {
    // Si falta el archivo del logo se enseña el nombre, no un hueco roto
    $$('.tarjeta__logo', grid).forEach((img) => {
      img.dataset.protegida = '1';
      img.addEventListener('error', () => {
        const caja = img.closest('.tarjeta__credito');
        const n = img.closest('.tarjeta').dataset.i;
        const nombre = img.alt || '';
        img.remove();
        if (caja) caja.insertAdjacentHTML('afterbegin',
          `<span class="tarjeta__marca-txt" data-ed="portfolio.items.${n}.marca">${esc(nombre)}</span>`);
      });
    });

    protegerImagenes(grid);

    $$('.tarjeta', grid).forEach((t) => {
      const item = todos[+t.dataset.i];
      const media = $('.tarjeta__media', t);
      const boton = $('button.tarjeta__play', t);
      if (!boton) return;
      // Se puede dar al botón o a cualquier parte de la pantalla del móvil
      [boton, media].forEach((z) => z.addEventListener('click', (e) => {
        if (e.target.closest('video')) return;   // los controles del vídeo, a lo suyo
        reproducir(t, item);
      }));
    });
  }

  const archivoDe = (it) => it.archivo || (it.tipo === 'foto' ? it.portada : '');
  const esVideoArchivo = (a) => /\.(mp4|webm|mov|m4v)$/i.test(a || '');

  /* Busca el logo en la sección "Han confiado en mí": así, si subes el logo
     de una marca una vez, sale solo en todos sus trabajos. */
  function logoDeMarca(nombre) {
    if (!nombre) return '';
    const buscado = nombre.trim().toLowerCase();
    const m = (CONT.marcas.lista || []).find((x) => (x.nombre || '').trim().toLowerCase() === buscado);
    return (m && m.logo) || '';
  }

  /* El vídeo se reproduce donde está, sin abrir ninguna ventana */
  function reproducir(tarjeta, item) {
    const n = +tarjeta.dataset.i;
    const ruta = archivoDe(item);

    if (!esVideoArchivo(ruta)) {
      if (item.enlace) window.open(item.enlace, '_blank', 'noopener');
      return;
    }
    if ($('video', tarjeta)) return;   // ya está puesto

    /* Si acabas de elegir el vídeo desde el editor, el archivo todavía no
       está en la carpeta de la web: se reproduce el de tu ordenador. */
    const locales = window.VISTAS_LOCALES || {};
    const fuente = locales[`portfolio.items.${n}.archivo`] || ruta;

    // Solo suena uno a la vez
    $$('.tarjeta.reproduciendo').forEach((otra) => { if (otra !== tarjeta) pararTarjeta(otra); });

    const media = $('.tarjeta__media', tarjeta);
    const portada = $('img', media);
    const video = document.createElement('video');
    video.src = fuente;
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    if (portada) video.poster = portada.currentSrc || portada.src;

    video.addEventListener('ended', () => pararTarjeta(tarjeta));
    video.addEventListener('error', () => avisarVideo(tarjeta, item, ruta));

    media.appendChild(video);
    tarjeta.classList.add('reproduciendo');
    const promesa = video.play();
    if (promesa && promesa.catch) promesa.catch(() => {});
  }

  /* El archivo no está donde dice la ruta */
  function avisarVideo(tarjeta, item, ruta) {
    pararTarjeta(tarjeta);

    // En la web publicada no se marea al visitante: si hay link, se abre
    if (!window.MODO_EDICION) {
      if (item.enlace) window.open(item.enlace, '_blank', 'noopener');
      return;
    }

    const media = $('.tarjeta__media', tarjeta);
    if ($('.tarjeta__aviso', media)) return;
    const aviso = document.createElement('div');
    aviso.className = 'tarjeta__aviso';
    aviso.innerHTML =
      `<b>No encuentro el vídeo</b>
       <span>Comprueba que el archivo está en tu carpeta con este nombre exacto:</span>
       <code>${esc(ruta)}</code>`;
    aviso.addEventListener('click', (e) => { e.stopPropagation(); aviso.remove(); });
    media.appendChild(aviso);
  }

  function pararTarjeta(tarjeta) {
    const v = $('video', tarjeta);
    if (v) { v.pause(); v.removeAttribute('src'); v.load(); v.remove(); }
    tarjeta.classList.remove('reproduciendo');
  }

  function initFiltrosFormato() {
    if (!$('#filtrosFormato')) return;
    $$('#filtrosFormato .chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        filtro.formato = btn.dataset.formato;
        $$('#filtrosFormato .chip').forEach((b) => b.classList.toggle('activo', b === btn));
        pintarPortfolio();
      });
    });
  }

  /* Esc para el vídeo que esté sonando */
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    $$('.tarjeta.reproduciendo').forEach(pararTarjeta);
  });

  /* ══════════════════════════════════════════════════════════════════════
     SERVICIOS
     ══════════════════════════════════════════════════════════════════════ */
  function pintarServicios() {
    if (!$('#servicios')) return;
    const s = CONT.servicios;
    const visible = !!(s && s.mostrar && (s.lista || []).length) || !!window.MODO_EDICION;
    $('#servicios').hidden = !visible;
    if (!visible) return;

    const cont = $('#listaServicios');
    cont.innerHTML = (s.lista || []).map((x, i) => `
      <article class="servicio reveal" data-ed-item="servicios.lista.${i}">
        <div class="servicio__img"><img src="${esc(x.imagen || '')}" alt="${esc(x.nombre)}" data-relleno="${esc(x.nombre)}" data-ed-img="servicios.lista.${i}.imagen" loading="lazy"></div>
        <div>
          <h3 class="servicio__nombre" data-ed="servicios.lista.${i}.nombre">${esc(x.nombre)}</h3>
          <p class="servicio__texto" data-ed="servicios.lista.${i}.descripcion">${esc(x.descripcion)}</p>
        </div>
      </article>`).join('');
    protegerImagenes(cont);
  }

  /* ══════════════════════════════════════════════════════════════════════
     MI MATERIAL
     ══════════════════════════════════════════════════════════════════════ */
  function pintarMaterial() {
    if (!$('#material')) return;
    const m = CONT.material || {};
    const visible = !!m.imagen || !!window.MODO_EDICION;
    $('#material').hidden = !visible;
    if (!visible) return;

    const img = $('#fotoMaterial');
    img.dataset.edImg = 'material.imagen';
    img.dataset.relleno = 'Aquí va tu foto del material';
    img.dataset.rellenoW = '1600';
    img.dataset.rellenoH = '900';
    delete img.dataset.falla;

    if (m.imagen) {
      img.src = m.imagen;
      protegerImagenes($('#material'));
    } else {
      img.src = relleno(img.dataset.relleno, 1600, 900);
    }
  }

  /* ══════════════════════════════════════════════════════════════════════
     SOBRE MÍ
     ══════════════════════════════════════════════════════════════════════ */
  function pintarSobreMi() {
    if (!$('#fotoSobreMi')) return;
    const s = CONT.sobreMi;
    const foto = $('#fotoSobreMi');
    foto.dataset.relleno = CONT.general.nombre;
    if (s.foto) foto.src = s.foto;
    protegerImagenes($('#sobre-mi'));

    foto.dataset.edImg = 'sobreMi.foto';

    $('#sobreParrafos').innerHTML = (s.parrafos || []).map((p, i) =>
      `<p data-ed-item="sobreMi.parrafos.${i}" data-ed="sobreMi.parrafos.${i}">${esc(p)}</p>`).join('');
    $('#sobreDatos').innerHTML = (s.datos || []).map((d, i) =>
      `<li class="sobre__dato" data-ed-item="sobreMi.datos.${i}">
         <b data-ed="sobreMi.datos.${i}.numero">${esc(d.numero)}</b>
         <span data-ed="sobreMi.datos.${i}.texto">${esc(d.texto)}</span>
       </li>`).join('');

    // El TRABAJA CONMIGO de aquí también abre el correo
    $('#btnTrabaja').href = enlaceCorreo();
  }

  /* ══════════════════════════════════════════════════════════════════════
     TESTIMONIOS
     ══════════════════════════════════════════════════════════════════════ */
  function pintarTestimonios() {
    if (!$('#testimonios')) return;
    const t = CONT.testimonios;
    const visible = !!(t && t.mostrar && (t.lista || []).length) || !!window.MODO_EDICION;
    $('#testimonios').hidden = !visible;
    if (!visible) return;
    $('#listaTestimonios').innerHTML = (t.lista || []).map((x, i) => `
      <blockquote class="testimonio reveal" data-ed-item="testimonios.lista.${i}">
        <p class="testimonio__texto" data-ed="testimonios.lista.${i}.texto">${esc(x.texto)}</p>
        <footer>
          <p class="testimonio__autor" data-ed="testimonios.lista.${i}.autor">${esc(x.autor)}</p>
          <p class="testimonio__cargo" data-ed="testimonios.lista.${i}.cargo">${esc(x.cargo)}</p>
        </footer>
      </blockquote>`).join('');
  }

  /* ══════════════════════════════════════════════════════════════════════
     FAQ
     ══════════════════════════════════════════════════════════════════════ */
  function pintarFaq() {
    if (!$('#faq')) return;
    const f = CONT.faq;
    const visible = !!(f && f.mostrar && (f.lista || []).length) || !!window.MODO_EDICION;
    $('#faq').hidden = !visible;
    if (!visible) return;

    const cont = $('#listaFaq');
    cont.innerHTML = (f.lista || []).map((x, i) => `
      <div class="faq__item reveal" data-ed-item="faq.lista.${i}">
        <button class="faq__boton" aria-expanded="false" aria-controls="faq-r${i}" data-ed="faq.lista.${i}.pregunta">${esc(x.pregunta)}</button>
        <div class="faq__respuesta" id="faq-r${i}"><p data-ed="faq.lista.${i}.respuesta">${esc(x.respuesta)}</p></div>
      </div>`).join('');

    $$('.faq__boton', cont).forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const resp = btn.nextElementSibling;
        const abierto = item.classList.toggle('abierto');
        btn.setAttribute('aria-expanded', abierto);
        resp.style.maxHeight = abierto ? resp.scrollHeight + 'px' : '';
      });
    });
  }

  /* ══════════════════════════════════════════════════════════════════════
     CONTACTO
     ══════════════════════════════════════════════════════════════════════ */
  function pintarContacto() {
    if (!$('#contactoDatos')) return;
    const L = CONT.links;
    const filas = [];
    if (L.email)     filas.push(`${ICONOS.email}<a href="mailto:${esc(L.email)}">${esc(L.email)}</a>`);
    if (L.instagram) filas.push(`${ICONOS.instagram}<a href="${esc(L.instagram)}" target="_blank" rel="noopener">${esc(L.instagramUsuario || 'Instagram')}</a>`);
    if (L.tiktok)    filas.push(`${ICONOS.tiktok}<a href="${esc(L.tiktok)}" target="_blank" rel="noopener">${esc(L.tiktokUsuario || 'TikTok')}</a>`);
    if (L.whatsapp)  filas.push(`${ICONOS.whatsapp}<a href="${esc(L.whatsapp)}" target="_blank" rel="noopener">WhatsApp</a>`);
    // La ciudad se edita haciendo click encima. Si la dejas vacía, desaparece
    // de la web (en modo edición sigue saliendo el hueco para recuperarla).
    if (CONT.contacto.ciudad || window.MODO_EDICION) {
      filas.push(`${ICONOS.lugar}<span data-ed="contacto.ciudad">${esc(CONT.contacto.ciudad)}</span>`);
    }

    $('#contactoDatos').innerHTML = filas.map((f) => `<li class="contacto__dato">${f}</li>`).join('');

    /* El botón abre el correo del visitante con tu dirección, el asunto
       y la plantilla ya escritos. */
    const boton = $('#btnEscribir');
    boton.textContent = CONT.contacto.textoBoton || 'ENVIAR MENSAJE';
    boton.hidden = !L.email && !window.MODO_EDICION;
    boton.href = enlaceCorreo();
  }

  /* ══════════════════════════════════════════════════════════════════════
     INTERFAZ: menú, scroll, animaciones
     ══════════════════════════════════════════════════════════════════════ */
  function initMenu() {
    const btn = $('#hamburguesa');
    const nav = $('#nav');
    btn.addEventListener('click', () => {
      const abierto = nav.classList.toggle('abierto');
      btn.classList.toggle('abierta', abierto);
      btn.setAttribute('aria-expanded', abierto);
    });
    // Delegado, porque el menú se vuelve a pintar cuando cambias las pestañas
    document.addEventListener('click', (e) => {
      if (!e.target.closest('[data-cerrar-menu]')) return;
      nav.classList.remove('abierto');
      btn.classList.remove('abierta');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  function initScroll() {
    const barra = $('#barra');
    const arriba = $('#arriba');
    const alScroll = () => {
      const y = window.scrollY;
      barra.classList.toggle('solida', y > 40);
      arriba.classList.toggle('visible', y > 700);

      // Se consultan cada vez: las secciones se ocultan y el menú se repinta
      let actual = '';
      $$('main section[id]').forEach((s) => {
        if (!s.hidden && y >= s.offsetTop - 140) actual = s.id;
      });
      $$('.nav__link').forEach((a) => a.classList.toggle('activo', a.getAttribute('href') === '#' + actual));
    };

    window.addEventListener('scroll', alScroll, { passive: true });
    alScroll();
  }

  function initReveal() {
    const elems = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
      elems.forEach((e) => e.classList.add('visible'));
      return;
    }
    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    elems.forEach((e) => obs.observe(e));
  }

  /* ══════════════════════════════════════════════════════════════════════
     ARRANQUE
     ══════════════════════════════════════════════════════════════════════ */
  /* Aviso cuando estás viendo un borrador del panel y no la web publicada */
  function avisarBorrador() {
    if (!esBorrador) return;
    const barra = document.createElement('div');
    barra.className = 'aviso-borrador';
    barra.innerHTML =
      '<span>Estás viendo un <b>borrador</b> del panel. Los visitantes siguen viendo la web publicada.</span>' +
      '<button type="button">VER LA WEB PUBLICADA</button>';
    barra.querySelector('button').addEventListener('click', () => {
      try { localStorage.removeItem('ugc_borrador'); } catch (e) {}
      location.reload();
    });
    document.body.appendChild(barra);
    document.documentElement.style.setProperty('--alto-aviso', '44px');
  }

  function iniciar() {
    if (!CONT) {
      console.error('No se ha encontrado contenido.js');
      return;
    }
    /* Si algo se rompe pintando, se apunta el motivo y se sigue: así el
       editor puede arrancar igualmente y enseñarte qué ha pasado, en vez
       de quedarse a medias sin decir nada. */
    try {
      avisarBorrador();
      repintarTodo();
      initFiltrosFormato();
      initMenu();
      initScroll();
      initReveal();
    } catch (err) {
      console.error('Fallo al pintar la web:', err);
      window.WEB_ERROR = (err && err.message) || String(err);
    }

    /* Puerta de entrada para el editor visual (js/editor.js).
       Solo se usa cuando entras con ?editar en la dirección. */
    window.WEB = {
      datos: () => CONT,
      cambiarDatos(nuevos) { CONT = nuevos; },
      repintar: repintarTodo,
      relleno,
    };
  }

  /* Vuelve a pintar la web entera desde los datos actuales */
  function repintarTodo() {
    if (!CONT.estilos) CONT.estilos = {};
    pintarTextos();
    pintarMenu();
    pintarBanner();
    pintarMarcas();
    pintarFiltrosCategoria();
    pintarPortfolio();
    pintarServicios();
    pintarMaterial();
    pintarSobreMi();
    pintarTestimonios();
    pintarFaq();
    pintarContacto();
    aplicarTamanos();
    if (window.MODO_EDICION) $$('.reveal').forEach((e) => e.classList.add('visible'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
