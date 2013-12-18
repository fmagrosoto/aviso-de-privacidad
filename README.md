# PROYECTO AVISO DE PRIVACIDAD

***

Módulo especial para poder agregar de manera
simple y fácil un **Aviso de Privacidad** en
cualquier sitio web.

## ¿En qué está hecho?

El módulo está escrito en javascript y tiene
estilos en un archivo CSS separado.

## ¿Cómo funciona?

Solo se agrega un vínculo en cualquier parte
del sitio web, con la llamada a la función
principal de JavaScript para poder generar,
en tiempo real, un `div` con un `z-index` 
elevado, que funcionará como una cortinilla.

Encima de esa cortinilla estará un `div` que
servirá como contenedor del `iframe` que
acomodaremos dentro del contenedor y que
tendrá todo el texto del **Aviso de Privacidad**.

El efecto será de un contendor en medio de la página
con un fondo transparente y con el aviso al que se podrá
leer usando el *scroll bar* de arriba hacia abajo.

## Requisitos

Todos los archivos necesarios están en una carpeta
llamada **AVISO**. Es necesario que en cada página HTML
donde se quiera agregar un link hacia el **Aviso de
Privacidad** se vincule el archivo CSS y el archivo
JS por medio de las etiquetas `link` y `script`, 
respectivamente.

Ej.

* `<link rel="stylesheet" type="text/css" href="aviso/aviso.css" />`
* `<script src="aviso/aviso.js"></script>`

En el HTML será necesario agregar un vínculo con 
la llamada a la función principal:

`<a onclick="abrirAviso();" href="javascript:void(0);">Aviso de privacidad</a>`

## ARCHIVOS

Lista de archivos de la carpeta **AVISO**.

* aviso.css
* aviso.js
* aviso.html
* index.html

***

* Escrito por: Fernando Magrosoto V.
* Correo: <info@fmagrosoto.com>
* Twitter: [@fmagrosoto.com](http://www.twitter.com/fmagrosoto)
* Historia: Diciembre 2013

***