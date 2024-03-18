# Página web responsive + Java Script.
Realizado por Luciano Nicolas Viscio Frank y Marti Salom Ponseti

* Organización
Luciano Nicolas Viscio Frank ha realizado las páginas "Main" y "Comparativa".
Marti Salóm Ponseti ha realizado las páginas "Tienda" y "Encuesta" 

La página "Login" y los diferentes Scrips los hemos realizado en conjunto.

* Organización de los documentos.
* La carpeta principal contiene en su raíz solo los diferentes HTML que componen la página y las carpetas de imagenes, scripts y estilos.
* La carpeta "fotos" contiene todas las imágenes utilizadas.
* La carpeta "scripts" contiene los archivos .js con los scripts para el correcto funcionamiento de la página.
* La carpeta "estilos" contiene los archivos .css con los estilos para la correcta visualización de la página.
* La pagina web es de estilo tienda, basandonos en la pagina web de la marca de dispositivos electronicos Xiaomi, sieguiendo un poco su estilo estético.

# Página 1 - Login
La primera página es la de "Login", siendo un inicio de sesión.

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto22.png) 

Esta página es una simulación de página de inicio de sesión, ya que no recive ni manda información a ningún servidor.
En esta página, las secciones estan ligadas a un script el cual realiza su validación.
En este caso, el nombre de usuario tendrá que tener como mínimo 4 caracteres y la contraseña 4 caracteres, 1 mayuscula y 2 números.
Si no se cumplen estos requisitos la página devuelve una serie de errores dentro del mismo contenedor. 

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto23.png) 
![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto24.png) 

Una vez se cumplan las condiciones aparecerá un mensaje en formato Alert para confirmar un inicio de sesión exitoso.

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto25.png) 

* La validación se lleva a cabo con un script llamado validarEncuesta()

La función validarEncuesta() verifica si el usuario ha seleccionado opciones para evaluar la calidad de productos y la atención al cliente. Si no ha seleccionado ninguna opción, muestra el alert. La función enviarEncuesta() se activa al enviar la encuesta, verifica que se hayan rellenado todos los campos de la encuesta y muestra un mensaje de agradecimiento si todo está bien, redirigiendo al usuario a otra página. Si algo está mal, no hace nada hasta que se completen las selecciones necesarias.

# Página 2 - Página principal (Main) 
Una vez se haya aceptado el alert un script te redirigirá a la página princiapl, la cual mostrará las diferntes secciones de la misma.

En la parte superior nos encontramos una barra de navegación de tipo menú, la cual contiene enlaces a las diferentes secciones de la página.

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto2.png) 

Al pasar el ratón por encima de los enlaces aparece una barra de color naranja para indicar al usuario donde se encuentra su ratón.

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto5.png) 

Este menú se oculta en dispositivos de pantalla pequeña. El menú se esconde y aparece un menú lateral, aparte de un boton el cual abre este menú al pasar el ratón por encima. 

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto6.png) 
![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto7.png) 

Justo debajo de esta barra de navegación nos encontramos con un carrusel de imagenes, las cuales cambian con las flechas laterales. 

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto1.png) 

Bajando un poco mas podemos ver un menú con diferentes enlaces, los cuales nos llevarán a las diferentes partes de la página. 

El contenedor donde estan estos enlaces contiene una imagen lateral principal y 4 imagenes en formato fila, las cuales se amplian al pasar el ratón por encima. Estas imágenes redirigen al apartado "Tienda". 

Mas abajo encontramos otro contenedor con las mismas características y un footer estilo "Disclaimer"

Al pulsar los links de "Smart Home" y "Wereables" nos saldrá un error de que estas páginas no están disponibles.

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto10.png) 

* El carrusel se lleva a cabo con el script del archivo "carrusel.js"

Al cargar la página, se preparan los elementos del carrusel y se define el contenido que se mostrará, incluyendo títulos, textos e imágenes. Se proporcionan funciones para avanzar y retroceder en el carrusel, y se configuran eventos de clic en las flechas de navegación para activar estas funciones. Cuando hacemos clic en las flechas, el carrusel cambia al siguiente o al anterior elemento dependiendo de la flecha que se clique, actualizando el contenido mostrado en consecuencia.

* El submenu se lleva a cabo con el script del archivo "submenu.js"

Cuando el cursor entra en el botón del menú, el menú lateral se muestra, y cuando el cursor sale del menú lateral, este se oculta. Esto permite mostrar u ocultar el menú lateral según la interacción del usuario con el botón del menú.

# Página 3 - Tienda 
Los diferentes links de la página principal redirigen, entre otros, a la página tienda, la cual simula una serie de productos los cuales tendrían que funcionar y acceder a sus características. 

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto19.png) 

Las diferentes imágenes se amplian al pasar el ratón por encima y nos solta un error de "Producto no disponible" al intentar acceder a las características de los porductos. 

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto9.png) 

El menú superior, a diferencia de los menús de las otras secciones de la página es que se encuentra un simbolo de sol, el cual cambia de modo claro a modo oscuro.

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto11.png) 

Al pulsar en este sol, la página web cambiará a modo oscuro, solo cambiando el fondo y los textos, dejando las imágenes y logos sin cambiar.

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto13.png) 

El menú para pantallas pequeñas tambien cambia.

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto14.png) 

* El modo oscuro se realiza con el script dentro del archivo "modo.js"

Inicialmente, oculta el ícono de Sol que se visualiza al cargar la página. Luego, busca el botón con el ID "modo-oscuro" y añade un evento de clic a este botón. Cuando se hace clic en el botón, cambia el modo de la página web alternando la clase "dark-mode" en el elemento <body>, lo que alterna entre el modo oscuro y el modo claro de la página. Además, cambia la visibilidad de los iconos de la luna y el sol dependiendo del modo de la página, mostrando uno u otro según corresponda para proporcionar una indicación visual sobre el estado del modo de la página.

# Página 4 - Comparativa
Esta página contiene dos contenedores, los cuales tienen 4 prodcutos, pudiendose seleccionar y comparar las características de los dispositivios elegidos. 

Al elegir los diferentes dispositivios cambiará tanto la imagen como las caracteristicas de cada uno.

* La comparación se realiza con el script del archivo "comparar.js"

Este script en JavaScript compara dos productos de nustra página web. Cuando se selecciona un producto, la función showProduct(productId) obtiene su información, incluida la URL de la imagen y las características específicas del producto. Luego, muestra la imagen y las características en la página. La función getProductCharacteristics(productName) devuelve las características del producto basadas por su nombre. Las características incluyen detalles como el tamaño de la pantalla, el procesador, la memoria RAM, el almacenamiento, la capacidad de la batería, las cámaras y el sistema operativo.

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto8.png) 

# Página 5 - Encuesta de satisfacción
En esta página simplemente es una encuesta de satisfacción, la cual nos pedirá pulsar 1 de 4 opciones tanto para la calidad de los productos como para la atención al cliente.

Estas opciones se pondrán mas oscuras al pulsarlas.

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto16.png) 

Para que la página pueda enviar de manera exitosa la encuesta tendrá que tener seleccionada una opcón en las dos encuestas (Excelente, Bueno, Regular, Malo) , no haciendo falta escribir nada en el recuadro de texto.

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto17.png) 

Una vez realizada de manera exitosa la encueta aparecerá un recuadro en formato alert el cual, al confirmarlo, redirige a la página principal. 

![](https://github.com/Nvf23/inter-web-responsive/blob/main/capturas/foto100.png) 

* La encuesta se valida con el script del archivo "alert.js"

Este script en JavaScript para validar y procesar nuestra encuesta en una página web. La función validarEncuesta() verifica si el usuario ha seleccionado opciones para evaluar la calidad de productos y la atención al cliente. Si no ha seleccionado ninguna opción, muestra un alert. La función enviarEncuesta() se activa al enviar la encuesta, verifica que se hayan rellenado todos los campos de la encuesta y muestra un mensaje de agradecimiento si todo está bien, redirigiendo al usuario a otra página. Si algo está mal, no hace nada hasta que se completen las selecciones necesarias.
