document.addEventListener("DOMContentLoaded", function () {
  const carruselOverlay = document.querySelector(".texto-carrusel");
  const carruselImagen = document.querySelector(".carrusel-imagen");
  const flechaIzquierda = document.querySelector(".flecha-izquierda");
  const flechaDerecha = document.querySelector(".flecha-derecha");

  // Define el contenido del carrusel
  const contenidoCarrusel = [
    {
      titulo: "Redmi Note 13 Pro 5G",
      texto: "Experimenta la velocidad",
      imagen: "fotos/carrusel1.jpg",
    },
    {
      titulo: "Xiaomi 12 Pro",
      texto: "La mejor camara del mercado",
      imagen: "fotos/carrusel2.jpg",
    },
    {
      titulo: "Limpieza del hogar",
      texto: "El mejor amigo de una casa limpia",
      imagen: "fotos/carrusel4.jpg",
    },
  ];

  let indiceActual = 0;

  function actualizarCarrusel() {
    const contenidoActual = contenidoCarrusel[indiceActual];
    carruselOverlay.innerHTML = `
        <h3>${contenidoActual.titulo}</h3>
        <br />
        <p>${contenidoActual.texto}</p>
        <br />
        <p id="pequeño">Mas información en el apartado Tienda</p>
      `;
    carruselImagen.src = contenidoActual.imagen;
  }

  actualizarCarrusel();

  // Función para avanzar en el carrusel
  function avanzarCarrusel() {
    indiceActual = (indiceActual + 1) % contenidoCarrusel.length;
    actualizarCarrusel();
  }

  // Función para retroceder en el carrusel
  function retrocederCarrusel() {
    indiceActual =
      (indiceActual - 1 + contenidoCarrusel.length) % contenidoCarrusel.length;
    actualizarCarrusel();
  }

  // Eventos para las flechas de navegación
  flechaIzquierda.addEventListener("click", retrocederCarrusel);
  flechaDerecha.addEventListener("click", avanzarCarrusel);
});
