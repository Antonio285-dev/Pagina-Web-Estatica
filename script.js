document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Mapeamos los datos del formulario
    // Nota: Las propiedades ('nombre', 'email', 'mensaje') deben llamarse IGUAL 
    // a como las nombres en los códigos de tu plantilla de EmailJS {{nombre}}, etc.
    const templateParams = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        mensaje: document.getElementById('mensaje').value,
        telefono: document.getElementById('telefono').value
    };

    try {
        // Enviamos el correo directamente usando la API de EmailJS
        // Reemplaza "TU_SERVICE_ID" y "TU_TEMPLATE_ID" con tus datos de EmailJS
        await emailjs.send('service_r20endl', 'template_4016ekk', templateParams);

        alert('Mensaje enviado con éxito');
        
        // Limpiamos los campos del formulario
        document.getElementById('contactForm').reset();

    } catch (error) {
        console.error('Error al enviar el correo con EmailJS:', error);
        alert('Hubo un error al enviar el mensaje.');
    }
});