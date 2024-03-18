document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los elementos con la clase "miEnlace"
  var enlaces = document.querySelectorAll(".errorEnlace");

  // Agregar un evento de clic a cada enlace
  enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
      alert("La página no está disponible");
    });
  });
});
