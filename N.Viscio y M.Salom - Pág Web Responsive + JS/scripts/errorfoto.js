document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todas las imágenes con la clase "imagen-producto"
  var imagenes = document.querySelectorAll(".imagen-producto");

  // Agregar un evento de clic a cada imagen
  imagenes.forEach(function (imagen) {
    imagen.addEventListener("click", function (event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
      // Aquí puedes agregar el código que deseas ejecutar cuando se hace clic en la imagen
      alert(
        "¡Disculpa! Los productos no estan disponibles en este momento. Intentalo mas tarde."
      );
    });
  });
});
