// Función para validar la encuesta
function validarEncuesta() {
  // Selecciona el elemento HTML correspondiente a las opciones de calidad de productos que estén marcadas
  var calidadSeleccionada = document.querySelector(
    'input[name="calidad"]:checked'
  );
  // Verifica si se ha seleccionado alguna opción de calidad de productos
  if (!calidadSeleccionada) {
    // Si no se ha seleccionado ninguna opción, muestra un mensaje de alerta
    alert(
      "Por favor, selecciona una opción para la calidad de nuestros productos."
    );
    // Devuelve false para indicar que la validación ha fallado
    return false;
  }

  // Selecciona el elemento HTML correspondiente a las opciones de atención al cliente que estén marcadas
  var atencionSeleccionada = document.querySelector(
    'input[name="atencion"]:checked'
  );
  // Verifica si se ha seleccionado alguna opción de atención al cliente
  if (!atencionSeleccionada) {
    // Si no se ha seleccionado ninguna opción, muestra un mensaje de alerta
    alert("Por favor, selecciona una opción para la atención al cliente.");
    // Devuelve false para indicar que la validación ha fallado
    return false;
  }

  // Si se han seleccionado opciones en ambos grupos de preguntas, devuelve true para indicar que la validación ha sido exitosa
  return true;
}

// Función para enviar la encuesta
function enviarEncuesta() {
  // Verifica si la validación de la encuesta es exitosa llamando a la función validarEncuesta()
  if (validarEncuesta()) {
    // Si la validación es exitosa, muestra un mensaje de agradecimiento
    alert(
      "¡Gracias por tu valoración! Tu opinión es muy importante para nosotros."
    );
    // Redirige al usuario a otra página (main.html)
    window.location.href = "main.html";
  }
}
