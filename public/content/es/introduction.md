<a id="intro"></a>
## ACERCA DE ESTA GUÍA

NodeBots son robots basados en Arduino que son controlados através de [node.js](http://nodejs.org/). 

Esta guía te ayudará en el montaje y programación de una serie de proyectos utilizando microcrontroladores compatibles con Arduino y node.js, para ayudarte a construir tu propio NodeBots. Esta guía ha sido diseñada para ser usada con el Kit de Experimentación de Arduino, el cual está disponible por varios proveedores, incluyendo SparkFun, Adafruit y Freetronics.

El objetivo general de esta guía es divertirse. Más allá de esto, el objetivo es que usted se sienta cómodo utilizando node.js para controral un amplio rango de componentes electrónicos a través de pequeños, simples y sencillos circuitos. El proposito es conseguir que cada circuito funcione y luego darte las herramientas para que averigues como funciona y como extenderlo.

![ARDX](/images/ARDX-cover.jpg "ARDX")

<a id="installing"></a>
### Instalación

Tu puedes instalar esta guía en tu computador. Asegurate de tener node.js y npm instalado antes de empezar.

Para instalar esta guía debes ejecutar los siguientes comandos:

`git clone https://github.com/AnnaGerber/node-ardx.git && cd node-ardx`

`npm install`


Ejecuta la aplicación web node-ardx web desde el directorio node-ardx:

`node app.js`

Visita [http://localhost:3000](http://localhost:3000) en tu navegador para ver la guía.

<a id="openhardware"></a>
## ACERCA DE HARDWARE OPEN SOURCE

Esta guía ha sido adaptada por [Anna Gerber](https://github.com/AnnaGerber) de la versión de SparkFun por .:oomlout:. ARDX (Arduino Experimenter's) Guide.

Todos los proyectos de .:oomlout:. son open source. ¿Esto que significa? Significa que todo el material que compone el kit ARDX, incluyendo esta guía, los diagramas de circuitos y el código están disponibles gratuitamente para descargar. Pero va mas allá: también eres libre de reproducir y modificar cualquiera de estos materiales, y también distribuirlos. Esto es posible porque esta guía está publicada bajo una licencia Creative Commons (CC-BY-SA). Si usted reproduce o modifica esta guía deberá dar crédito a SparkFun y .:oomlout:. en su diseño y compartir sus desarrollos de una forma similar. ¿Por qué? Nosotros crecimos jugando con software open source y la experiencia ha sido muy divertida. Nosotros pensamos que esta experiencia puede ser similar y posible con cosas físicas.

Más detalles sobre la licencia Creative Commons CC (By Share Alike) puede encontrarse en http://ardx.org/CCLI](http://ardx.org/CCLI).

<a id="j5"></a>
## ACERCA DE JOHNNY-FIVE

Trabajaremos con la librería [Johnny-Five](https://npmjs.org/package/johnny-five) para node.js para programar nuestros nodebots. Johnny-Five usa un protocolo llamado [Firmata](http://firmata.org/wiki/Main_Page) para comunicarse con el microcontrolador a través del puerto USB (Universal Serial Bus).

<a id="firmata"></a>
### Configurando Firmata

Antes de que puedas comenzar a programar tu NodeBots, necesitaras cargar Firmata en tu microcontrolador compatible con Arduino:

* Descargar [Arduino IDE](http://arduino.cc/en/main/software)
* Conectar tu microcontrolador compatible con Arduino via USB
* Iniciar Arduino IDE y abrir el esquema Firmata usando el menú: `File > Examples > Firmata > StandardFirmata`
* Seleccionar el tipo de tu placa Arduino (por ej. Arduino Uno) en `Tools > Board`
* Seleccionar el puerto de tu placa en `Tools > Serial Port > (el puerto comm de tu Arduino)`
* Cargar tu programa seleccionando `File > Upload`

Si tienes algún programa cargando el programa, puedes encontrar una guía completa de ayuda (en Inglés) aquí: [http://ardx.org/TRBL](http://ardx.org/TRBL)

<a id="running"></a>
### Ejecutando un programa Johnny-Five

El módulo Johnny-Five ya ha sido instalado cuando instalaste esta guía, así que cualquier ejemplo de código que creas dentro del directorio node-ardx podrán ejecutarse. Si generas código en una ubicación diferente, necesitaras instalar el módulo Johnny-Five, por ejemplo:

`npm install johnny-five`

Ejecutar los ejemplos de código desde la terminal por ej.:

`node code/CIRC01-code-led-a-strobe.js`

<a id="repl"></a>
### Usando el REPL

Johnny-Five provee un Read-Eval-Print-Loop (REPL, en Español sería Leer-Evaluar-Imprimir-Repetir) que te permite escribir comandos para controlar el hardware de manera interactiva mientras tu programa esta siendo ejecutado. Ver los ejercicios para ejemplos.

## Licencia

El código fuente esta disponible en https://github.com/AnnaGerber/node-ardx

Los ejemplos de código son creados bajo licencia MIT

Este trabajo esta licenciado bajo la licencia Creative Commons Attribution-Share Alike 3.0 Unported License

Para ver ver una copia de esta licencia visitar http://creativecommons.org/licenses/by-sa/3.0/

O enviar un correo a: Creative Commons<COMMA> 171 Second Street<COMMA> Suite 300<COMMA> San Francisco<COMMA> California 94105<COMMA> USA.
