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
## ABOUT JOHNNY-FIVE

We will be working with the [Johnny-Five](https://npmjs.org/package/johnny-five) library for node.js to program our nodebots. Johnny-Five uses a protocol called [Firmata](http://firmata.org/wiki/Main_Page) to communicate with the microcontroller over USB (Universal Serial Bus).

<a id="firmata"></a>
### Setting Up Firmata

Before you can start programming your NodeBots, you will need to load Firmata onto your Arduino-compatible microcontroller:

* Download [Arduino IDE](http://arduino.cc/en/main/software)
* Connect your Arduino-compatible microcontroller via USB
* Launch Arduino IDE and open the Firmata sketch via the menu: `File > Examples > Firmata > StandardFirmata`
* Select your Arduino board type (e.g. Arduino Uno) via `Tools > Board`
* Select the port for your board via `Tools > Serial Port > (the comm port of your Arduino)`
* Upload the program by selecting `File > Upload`

If you are having trouble uploading, a full trouble shooting guide can be found here: [http://ardx.org/TRBL](http://ardx.org/TRBL)

<a id="running"></a>
### Running a Johnny-Five program

The Johnny-Five module has already been installed when you installed this guide, so any code examples you create within the node-ardx directory will run. If you are creating code in a different location, you will need to install the Johnny-Five module, e.g:

`npm install johnny-five`

Run code examples from the terminal e.g.

`node code/CIRC01-code-led-a-strobe.js`

<a id="repl"></a>
### Using the REPL

Johnny-Five provides a Read-Eval-Print-Loop (REPL) that allows you type commands to control hardware interactively while your program is running. See the exercises for examples.

## License

The source code is available from https://github.com/AnnaGerber/node-ardx

Code examples are issued under an MIT license

This work is licensed under the Creative Commons Attribution-Share Alike 3.0 Unported License

To view a copy of this license visit http://creativecommons.org/licenses/by-sa/3.0/

Or send a letter to: Creative Commons<COMMA> 171 Second Street<COMMA> Suite 300<COMMA> San Francisco<COMMA> California 94105<COMMA> USA.
