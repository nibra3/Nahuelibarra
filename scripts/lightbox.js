// Lightbox simple: amplía cualquier imagen con clase "zoomable" al hacer click.
document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML =
    '<button type="button" class="lightbox__cerrar" aria-label="Cerrar imagen ampliada">&times;</button>' +
    '<img class="lightbox__img" alt="">';
  document.body.appendChild(overlay);

  var imgAmpliada = overlay.querySelector('.lightbox__img');
  var botonCerrar = overlay.querySelector('.lightbox__cerrar');
  var disparador = null;

  function abrirLightbox(origen) {
    disparador = origen;
    imgAmpliada.src = origen.currentSrc || origen.src;
    imgAmpliada.alt = origen.alt || '';
    overlay.classList.add('lightbox--abierto');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('sin-scroll');
    botonCerrar.focus();
  }

  function cerrarLightbox() {
    overlay.classList.remove('lightbox--abierto');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('sin-scroll');
    imgAmpliada.src = '';
    if (disparador) {
      disparador.focus();
    }
  }

  document.querySelectorAll('img.zoomable').forEach(function (elemento) {
    elemento.setAttribute('tabindex', '0');
    elemento.setAttribute('role', 'button');
    if (!elemento.hasAttribute('aria-label')) {
      elemento.setAttribute('aria-label', 'Ampliar imagen');
    }
    elemento.addEventListener('click', function () {
      abrirLightbox(elemento);
    });
    elemento.addEventListener('keydown', function (evento) {
      if (evento.key === 'Enter' || evento.key === ' ') {
        evento.preventDefault();
        abrirLightbox(elemento);
      }
    });
  });

  botonCerrar.addEventListener('click', cerrarLightbox);

  overlay.addEventListener('click', function (evento) {
    if (evento.target === overlay) {
      cerrarLightbox();
    }
  });

  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && overlay.classList.contains('lightbox--abierto')) {
      cerrarLightbox();
    }
  });
});
