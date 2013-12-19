/**
* ABRIR AVISO
*
* Función principal para abrir el aviso de privacidad
* @author Fernando Magrosoto V.
*/
function abrirAviso()
{
	// Primero, creamos el div de la cortinilla
	var cortinilla = document.createElement('div');
	cortinilla.setAttribute("id", "aviso-cortinilla");

	// Luego, lo añadimos al body de la página
	document.body.appendChild(cortinilla);

	// Creamos el contenido de la cortinilla
	var contenido = '';
	contenido += "<div class='aviso-caja'>";
	contenido += "<a onclick='cerrarAviso();' class='bot-cerrar-aviso' href='javascript:void(0);'>X</a>";
	contenido += "<iframe src='aviso/aviso.html'></iframe>"; // OJO con el URL del aviso
	contenido += "</div>";

	// Añadimos el contenido al nuevo elemento
	var contenedor = document.getElementById('aviso-cortinilla');
	contenedor.innerHTML = contenido;

	// Hacemos aparecer la cortinilla
	contenedor.style.display = 'block';
	window.setTimeout(function(){
		contenedor.style.opacity = 1;
	},50)
}

/**
* CERRAR AVISO
*
* Función para cerra el aviso de privacidad
* @author Fernando Magrosoto V.
*/
function cerrarAviso()
{
	var contenedor = document.getElementById('aviso-cortinilla');
	contenedor.style.opacity = 0;
	window.setTimeout(function(){
		contenedor.parentNode.removeChild(contenedor);
	},1000)
	// Hemos eliminado el elemento del DOM
}