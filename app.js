/* ===================== Data ===================== */
const infoMessages = {
  "Acciones de tutela":
    "Protegemos tus derechos fundamentales con acciones de tutela efectivas y oportunas.",
  "Asesoría jurídica":
    "Asesoría profesional y personalizada para resolver tus inquietudes con rutas claras.",
  "Derecho penal":
    "Defensa estratégica en procesos penales con enfoque técnico y humano.",
  "Derecho laboral":
    "Acompañamiento a empleadores y trabajadores en reclamos, conciliaciones y prevención.",
  "Defensa civil":
    "Protegemos tu patrimonio en litigios civiles, contratos y responsabilidad.",
  "Trámites de tránsito":
    "Gestión de comparendos, acuerdos de pago y representación en procesos de tránsito.",
  "Defensa técnica y jurídica":
    "Defensa integral, técnica y jurídica, en todas las fases del proceso.",
  "Derechos de petición":
    "Redacción y gestión de derechos de petición para exigir respuestas oportunas."
};

const faqMessages = {
  "¿Qué debo hacer si quiero iniciar un proceso de divorcio?":
    "Debes contar con un abogado; si ambos cónyuges están de acuerdo, el trámite puede hacerse en notaría. Si no hay acuerdo, se adelanta demanda ante juez de familia.",
  "¿Cómo puedo registrar legalmente un contrato de arrendamiento?":
    "Autentícalo en notaría y verifica los requisitos legales aplicables. Te guiamos en la redacción y formalización.",
  "¿Qué debo hacer para reclamar una deuda que no me han pagado?":
    "Puedes iniciar cobro prejurídico (requerimientos) o un proceso ejecutivo. Analizamos tu evidencia y ejecutamos la estrategia.",
  "¿Qué indemnización me corresponde si me despiden sin justa causa?":
    "Depende de tu tipo de contrato y antigüedad. Calculamos tu caso y gestionamos la reclamación.",
  "¿Cómo puedo solicitar una cuota alimentaria para mis hijos?":
    "Presenta demanda de alimentos ante juez de familia o acude a la comisaría de familia. Te acompañamos en el trámite.",
  "¿Qué trámites necesito para constituir legalmente una empresa?":
    "Registro en Cámara de Comercio, NIT y responsabilidades tributarias. Preparamos actas, estatutos y más.",
  "¿Qué es una tutela y cuándo puedo presentarla?":
    "Es un mecanismo para proteger derechos fundamentales cuando no hay otro medio idóneo o existe riesgo inminente."
};

/* ===================== Utils ===================== */
const $  = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

function showToast(msg){
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('toast--show');
  setTimeout(() => t.classList.remove('toast--show'), 2800);
}

/* ===================== Smooth scroll ===================== */
(function smoothScroll(){
  $$('.nav a[href^="#"], a[href="#contacto"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

/* ===================== Servicios — Título + ícono; reveal interno ===================== */
(function services(){
  $$('.service').forEach(card => {
    const head   = $('.service__head', card);
    const reveal = $('.service__reveal', card);
    const textEl = $('.reveal__text', reveal);
    const key    = card.getAttribute('data-key');

    // texto del reveal
    textEl.textContent = infoMessages[key] || 'Información no disponible.';

    // toggle (una a la vez)
    head.addEventListener('click', () => {
      const open = card.classList.contains('is-open');
      $$('.service.is-open').forEach(c => {
        c.classList.remove('is-open');
        const b = $('.service__head', c);
        const r = $('.service__reveal', c);
        b.setAttribute('aria-expanded', 'false');
        r.setAttribute('aria-hidden', 'true');
      });
      if (!open){
        card.classList.add('is-open');
        head.setAttribute('aria-expanded', 'true');
        reveal.setAttribute('aria-hidden', 'false');
      }
    });

    // botón cerrar
    $('.reveal__close', card).addEventListener('click', () => {
      card.classList.remove('is-open');
      head.setAttribute('aria-expanded', 'false');
      reveal.setAttribute('aria-hidden', 'true');
    });
  });

  // cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape'){
      $$('.service.is-open').forEach(c => {
        c.classList.remove('is-open');
        $('.service__head', c).setAttribute('aria-expanded','false');
        $('.service__reveal', c).setAttribute('aria-hidden','true');
      });
    }
  });
})();

/* ===================== FAQ accordion ===================== */
(function faq(){
  $$('.faq__item').forEach(item => {
    const qBtn = $('.faq__q', item);
    const ans  = $('.faq__a', item);
    const key  = qBtn.textContent.trim();

    ans.textContent = faqMessages[key] || 'Respuesta no disponible.';

    qBtn.addEventListener('click', () => {
      const isOpen = qBtn.getAttribute('aria-expanded') === 'true';
      $$('.faq__q').forEach(b => b.setAttribute('aria-expanded', 'false'));
      $$('.faq__a').forEach(a => a.setAttribute('hidden', ''));
      if (!isOpen){
        qBtn.setAttribute('aria-expanded', 'true');
        ans.removeAttribute('hidden');
      }
    });
  });
})();

/* ===================== Contact form ===================== */
(function form(){
  const form = $('#contactUsForm');
  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try{
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form) });
      if (!res.ok) throw new Error('No se pudo enviar el formulario');
      form.reset();
      document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
      showToast('¡Formulario enviado correctamente!');
    }catch(err){
      console.error(err);
      showToast('Ocurrió un error al enviar. Intenta nuevamente.');
    }
  });
})();

/* ===================== WhatsApp ===================== */
(function whatsapp(){
  const phoneNumber = '573117778502';
  const message = 'Hola, me gustaría obtener más información sobre sus servicios.';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  ['#whatsappButton', '#ctaWhatsApp', '#ctaWhatsApp2']
    .map(sel => $(sel))
    .filter(Boolean)
    .forEach(btn => btn.addEventListener('click', () => window.open(url, '_blank')));
})();
