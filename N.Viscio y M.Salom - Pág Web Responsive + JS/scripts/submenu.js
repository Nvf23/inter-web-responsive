document.addEventListener("DOMContentLoaded", function () {
  var botonMenu = document.getElementById("boton-menu");
  var menuLateral = document.getElementById("menuLateral");

  botonMenu.addEventListener("mouseenter", function () {
    menuLateral.style.display = "block";
  });

  menuLateral.addEventListener("mouseleave", function () {
    menuLateral.style.display = "none";
  });
});
