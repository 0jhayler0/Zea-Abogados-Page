
const faqMessages = {
    "¿Qué debo hacer si quiero iniciar un proceso de divorcio?": "Debes contar con un abogado; si ambos cónyuges están de acuerdo, el trámite puede hacerse en notaría, y si no hay acuerdo, se adelanta mediante demanda ante un juez de familia.",
    "¿Cómo puedo registrar legalmente un contrato de arrendamiento?": "Debes acudir a una notaría o entidad competente para registrar el contrato y cumplir con los requisitos legales.",
    "¿Qué debo hacer para reclamar una deuda que no me han pagado?": "Puedes iniciar un proceso de cobro prejurídico o jurídico. Te asesoramos en cada paso.",
    "¿Qué indemnización me corresponde si me despiden sin justa causa?": "Tienes derecho a una indemnización según el tiempo laborado y el tipo de contrato. Consulta tu caso específico.",
    "¿Cómo puedo solicitar una cuota alimentaria para mis hijos?": "Puedes presentar una demanda de alimentos ante un juez de familia o acudir a la comisaría de familia.",
    "¿Qué trámites necesito para constituir legalmente una empresa?": "Debes registrar la empresa en la Cámara de Comercio, obtener el NIT y cumplir con los requisitos tributarios.",
    "¿Qué es una tutela y cuándo puedo presentarla?": "La tutela es un mecanismo para proteger derechos fundamentales cuando no existen otros medios judiciales."
};

document.querySelectorAll('.frecuentQuestionsContainer .questions > div').forEach(function(qDiv) {
    qDiv.addEventListener('click', function() {
        let existing = qDiv.querySelector('.faq-text');
        if (existing) {
            existing.remove();
            return;
        }
        const title = qDiv.querySelector('h3').innerText.trim();
        const message = faqMessages[title] || "Respuesta no disponible.";
        const textDiv = document.createElement('div');
        textDiv.className = 'faq-text';
        textDiv.innerText = message;
        textDiv.style.opacity = 0;
        textDiv.style.transition = 'opacity 0.5s';
        qDiv.appendChild(textDiv);
        setTimeout(() => { textDiv.style.opacity = 1; }, 10);
    });
});
document.getElementById("goContactUS").addEventListener("click", function() {
    document.querySelector(".contactUsContainer").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("goAboutUs").addEventListener("click", function() {
    document.querySelector(".infoContainer").scrollIntoView({ behavior: 'smooth' });
});





const infoMessages = {
    "Acciones de tutela": "Te ayudamos a proteger tus derechos fundamentales mediante acciones de tutela efectivas y rápidas.",
    "Asesoria juridica": "Recibe asesoría jurídica profesional y personalizada para resolver tus inquietudes legales.",
    "Derecho penal": "Defendemos tus derechos en procesos penales con experiencia y compromiso.",
    "Derecho laboral": "Asesoría y defensa en temas laborales para empleadores y trabajadores.",
    "Defensa civil": "Protegemos tus intereses en litigios civiles y patrimoniales.",
    "Tramites de transito": "Gestionamos trámites y defensa en procesos de tránsito de manera ágil.",
    "Defensa tecnica y juridica": "Ofrecemos defensa técnica y jurídica integral en diferentes áreas del derecho.",
    "Derechos de peticion": "Redactamos y gestionamos derechos de petición para proteger tus intereses."
};

document.querySelectorAll('.info').forEach(function(infoDiv) {
    infoDiv.addEventListener('click', function() {
        let existing = infoDiv.querySelector('.info-text');
        if (existing) {
            existing.remove();
            return;
        }
        const title = infoDiv.querySelector('h2').innerText.trim();
        const message = infoMessages[title] || "Información no disponible.";
        const textDiv = document.createElement('div');
        textDiv.className = 'info-text';
        textDiv.innerText = message;
        textDiv.style.opacity = 0;
        textDiv.style.transition = 'opacity 0.5s';
        infoDiv.appendChild(textDiv);
        setTimeout(() => { textDiv.style.opacity = 2; }, 10);
    });
});


function showToast(message) {

    let oldToast = document.getElementById('custom-toast');
    if (oldToast) oldToast.remove();

    const toast = document.createElement('div');
    toast.id = 'custom-toast';
    toast.innerText = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#222';
    toast.style.color = '#fff';
    toast.style.padding = '16px 32px';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    toast.style.fontSize = '1rem';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s';

    document.body.appendChild(toast);

    setTimeout(() => { toast.style.opacity = '1'; }, 10);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

document.getElementById("contactUsForm").addEventListener("submit", function(event) {
    event.preventDefault();
    fetch(this.action, {
        method: "POST",
        body: new FormData(this),
    }).then(() => {
        this.reset(); 
        document.querySelector(".headerContainer").scrollIntoView({ behavior: 'smooth' }); // Scroll suave al header
        showToast("¡Formulario enviado correctamente!");
    });
});


document.getElementById("whatsappButton").addEventListener("click", function() {
    const phoneNumber = "573117778502";
    const mensagge = "Hola, me gustaría obtener más información sobre sus servicios.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagge)}`;
    window.open(url, '_blank');
});

