function showProduct(productId) {
  var selectElement = document
    .getElementById(`product-${productId}-form`)
    .querySelector("select");
  var selectedOption = selectElement.options[selectElement.selectedIndex];
  var imageUrl = selectedOption.value;

  if (imageUrl) {
    var imageElement = document.getElementById(`product-${productId}-image`);
    imageElement.src = imageUrl;

    var characteristicsElement = document.getElementById(
      `product-${productId}-characteristics`
    );
    characteristicsElement.innerHTML = "";

    // Obtener características del producto seleccionado
    var characteristics = getProductCharacteristics(selectedOption.text);

    // Mostrar características
    characteristics.forEach(function (characteristic) {
      characteristicsElement.innerHTML += `<p>${characteristic.name}: ${characteristic.value}</p>`;
    });

    // Mostrar el producto seleccionado
    document.getElementById(`product-${productId}-info`).style.display =
      "block";
  }
}

// Objetos para los diferentes dispositivios a comprar
function getProductCharacteristics(productName) {
  var characteristics = [];

  if (productName === "Producto 1") {
    characteristics = [
      { name: "Pantalla", value: "6.5 pulgadas" },
      { name: "Procesador", value: "Snapdragon 865" },
      { name: "Memoria RAM", value: "8 GB" },
      { name: "Almacenamiento", value: "128 GB" },
      { name: "Batería", value: "4500 mAh" },
      { name: "Cámara principal", value: "48 MP" },
      { name: "Cámara frontal", value: "20 MP" },
      { name: "Sistema operativo", value: "Android 11" },
    ];
  } else if (productName === "Producto 2") {
    characteristics = [
      { name: "Pantalla", value: "6.7 pulgadas" },
      { name: "Procesador", value: "Apple A14 Bionic" },
      { name: "Memoria RAM", value: "6 GB" },
      { name: "Almacenamiento", value: "256 GB" },
      { name: "Batería", value: "4000 mAh" },
      { name: "Cámara principal", value: "64 MP" },
      { name: "Cámara frontal", value: "12 MP" },
      { name: "Sistema operativo", value: "iOS 14" },
    ];
  } else if (productName === "Producto 3") {
    characteristics = [
      { name: "Pantalla", value: "6.4 pulgadas" },
      { name: "Procesador", value: "Exynos 2100" },
      { name: "Memoria RAM", value: "12 GB" },
      { name: "Almacenamiento", value: "512 GB" },
      { name: "Batería", value: "5000 mAh" },
      { name: "Cámara principal", value: "108 MP" },
      { name: "Cámara frontal", value: "32 MP" },
      { name: "Sistema operativo", value: "Android 12" },
    ];
  } else if (productName === "Producto 4") {
    characteristics = [
      { name: "Pantalla", value: "6.6 pulgadas" },
      { name: "Procesador", value: "Kirin 9000" },
      { name: "Memoria RAM", value: "16 GB" },
      { name: "Almacenamiento", value: "1 TB" },
      { name: "Batería", value: "6000 mAh" },
      { name: "Cámara principal", value: "50 MP" },
      { name: "Cámara frontal", value: "24 MP" },
      { name: "Sistema operativo", value: "EMUI 12" },
    ];
  }

  return characteristics;
}
