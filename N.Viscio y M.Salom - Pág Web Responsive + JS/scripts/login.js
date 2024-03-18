document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Validar el formulario
    var usuarioInput = document.getElementById("usuario");
    var usuario =
      usuarioInput.value.charAt(0).toUpperCase() + usuarioInput.value.slice(1); // Convertir la primera letra a mayúscula
    var contraseña = document.getElementById("contraseña").value;
    var errorMensaje = document.getElementById("error-msg");
    var regexContraseña = /^(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d]{5,}$/;

    if (usuario.length < 4) {
      errorMensaje.textContent =
        "El nombre de usuario debe tener al menos 4 caracteres.";
      return false;
    }

    if (!regexContraseña.test(contraseña)) {
      errorMensaje.textContent =
        "La contraseña debe tener al menos 5 caracteres, 1 mayúscula y 2 números.";
      return false;
    }

    // Si el formulario es válido, mostrar un mensaje de alerta y redirigir a main.html
    alert("Inicio de sesión exitoso");
    window.location.href = "main.html";
  });
