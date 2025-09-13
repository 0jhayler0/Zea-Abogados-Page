
const faqMessages = {
    "¿Qué debo hacer si quiero iniciar un proceso de divorcio?": "Para iniciar un proceso de divorcio en Colombia primero debes definir si será de mutuo acuerdo o contencioso. El divorcio de mutuo acuerdo se realiza ante notaría con la asesoría de un abogado y suele ser más rápido y económico, siempre que ambos cónyuges estén de acuerdo en temas como hijos, bienes y alimentos. El divorcio contencioso, en cambio, se adelanta ante un juez de familia cuando no hay consenso y requiere una demanda que alargará el trámite. En cualquiera de las dos opciones, necesitarás contar con un abogado, el registro civil de matrimonio, los documentos de los hijos si los hay y tu cédula de ciudadanía. Es recomendable asesorarse previamente para elegir la vía más conveniente.",
    "¿Cómo puedo registrar legalmente un contrato de arrendamiento?": "En Colombia no es obligatorio registrar un contrato de arrendamiento ante una entidad pública, pero sí es fundamental que se firme por escrito entre arrendador y arrendatario para que tenga validez legal. El contrato debe incluir datos de las partes, descripción del inmueble, canon de arrendamiento, plazo, condiciones de pago y obligaciones. Aunque no se registra en la Cámara de Comercio ni en una notaría de forma automática, sí se puede autenticar ante notaría para darle mayor seguridad jurídica. También es recomendable anexar copias de cédulas, certificado de tradición del inmueble y un inventario de entrega. Con estos pasos el contrato queda respaldado legalmente en caso de incumplimiento.",
    "¿Qué debo hacer para reclamar una deuda que no me han pagado?": "Si una persona no te ha pagado una deuda, lo primero es intentar un acuerdo directo y documentar todos los mensajes o soportes que demuestren la obligación. Si no hay respuesta, puedes enviar una carta de cobro formal o acudir a un centro de conciliación para buscar una solución extrajudicial. En caso de no lograr un acuerdo, la vía legal es presentar una demanda ejecutiva ante un juez, siempre que tengas un título valor o contrato que respalde la deuda. Para ello necesitarás la asesoría de un abogado, quien presentará el proceso y pedirá medidas como embargos. Es importante actuar dentro de los plazos de prescripción y guardar todas las pruebas que sustenten tu reclamo.",
    "¿Qué indemnización me corresponde si me despiden sin justa causa?": "En Colombia, cuando un trabajador es despedido sin justa causa, la ley establece el derecho a recibir una indemnización económica. El valor depende del tipo de contrato y del tiempo laborado en la empresa. Si el contrato es a término indefinido, se paga un número de días de salario que varía según los años de servicio: 30 días por el primer año y entre 20 y 40 días por cada año adicional, dependiendo del salario. En contratos a término fijo, la indemnización corresponde al tiempo que falte para terminar el contrato pactado. Además, el empleador debe cancelar las prestaciones sociales, vacaciones y demás conceptos pendientes. Siempre es recomendable asesorarse legalmente para calcular el monto exacto.",
    "¿Cómo puedo solicitar una cuota alimentaria para mis hijos?": "Para solicitar una cuota alimentaria en Colombia puedes acudir inicialmente a un centro de conciliación, la Defensoría de Familia o una comisaría de familia, donde se cita al padre o madre obligado a aportar y se busca un acuerdo formal. Si no se llega a un arreglo, es posible presentar una demanda de alimentos ante un juez de familia, quien fijará el monto según las necesidades del menor y la capacidad económica del padre o madre. La cuota puede cubrir alimentación, educación, vivienda, salud, recreación y vestuario. Es importante presentar registros civiles de nacimiento, documentos que prueben los gastos del menor y la identificación de las partes. Una vez fijada, la obligación queda amparada legalmente y su incumplimiento puede generar sanciones.",
    "¿Qué trámites necesito para constituir legalmente una empresa?": "Para constituir legalmente una empresa en Colombia debes primero definir el tipo de sociedad (persona natural, SAS, limitada, etc.) y luego registrar el nombre en la Cámara de Comercio. Después se elabora el acta de constitución o estatutos según el tipo de empresa y se presenta la inscripción formal en el Registro Mercantil. Una vez inscrita, debes obtener el RUT en la DIAN para efectos tributarios y, si corresponde, el registro como responsable de IVA o retención en la fuente. También puede requerirse la apertura de una cuenta bancaria empresarial y permisos adicionales según la actividad económica. Cumplir con estos trámites garantiza que la empresa opere de manera legal y con respaldo jurídico.",
    "¿Qué es una tutela y cuándo puedo presentarla?": "La acción de tutela en Colombia es un mecanismo constitucional que permite a cualquier persona solicitar la protección inmediata de sus derechos fundamentales cuando son vulnerados o amenazados por una autoridad pública o, en algunos casos, por particulares. Se caracteriza por ser un trámite rápido, sencillo y gratuito, que no requiere abogado aunque es recomendable contar con asesoría. La tutela se presenta ante cualquier juez y debe demostrarse que no existen otros mecanismos judiciales efectivos para proteger el derecho o que estos no resultan idóneos en la situación concreta. Se puede interponer en temas como salud, educación, vida, igualdad, debido proceso, entre otros. Una vez admitida, el juez debe dar respuesta en un plazo muy corto, generalmente de 10 días."
};

document.querySelectorAll('.frecuentQuestionsContainer .questions > div').forEach(function(qDiv) {
    qDiv.addEventListener('click', function() {
        let existing = qDiv.querySelector('.faq-text');
        if (existing) {
            existing.classList.remove('faq-open');
            setTimeout(() => existing.remove(), 500);
            return;
        }
        const title = qDiv.querySelector('h3').innerText.trim();
        const message = faqMessages[title] || "Respuesta no disponible.";
        const textDiv = document.createElement('div');
        textDiv.className = 'faq-text';
        textDiv.innerText = message;
        qDiv.appendChild(textDiv);
        void textDiv.offsetWidth;
        textDiv.classList.add('faq-open');
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
        document.querySelector(".headerContainer").scrollIntoView({ behavior: 'smooth' }); 
        showToast("¡Formulario enviado correctamente!");
    });
});


document.getElementById("whatsappButton").addEventListener("click", function() {
    const phoneNumber = "573202480808";
    const mensagge = "Hola, me gustaría obtener más información sobre sus servicios.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagge)}`;
    window.open(url, '_blank');
});

