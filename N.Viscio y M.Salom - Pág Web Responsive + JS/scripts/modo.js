document.addEventListener("DOMContentLoaded", function () {
  // Obtén el elemento del ícono de sol
  let sol = document.querySelector(".ri-moon-line");
  // Oculta el ícono de sol al cargar la página
  sol.style.display = "none";
});

// Obtén el elemento del botón
let boton = document.getElementById("modo-oscuro");

// Añade un evento de clic al botón
boton.addEventListener("click", function () {
  // Cambia el modo de la página web
  document.body.classList.toggle("dark-mode");

  // Obtén el elemento del ícono de sol
  let sol = document.querySelector(".ri-moon-line");
  // Obtén el elemento del ícono de luna
  let luna = document.querySelector(".ri-sun-line");

  // Verifica si la clase dark-mode está presente en el body
  if (document.body.classList.contains("dark-mode")) {
    // Si está presente, muestra el ícono de sol y oculta el ícono de luna
    sol.style.display = "inline";
    luna.style.display = "none";
  } else {
    // Si no está presente, muestra el ícono de luna y oculta el ícono de sol
    sol.style.display = "none";
    luna.style.display = "inline";
  }
});
