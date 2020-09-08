var vp=document.getElementById("villaplatzi"); //llamar al id creado en .html
var papel = vp.getContext("2d"); //donde se dibujara

//Objeto para crear imagen de fondo
var fondo =  new Image(); //instancia de una clase
//carga la fuente de la imagen
fondo.src= "tile.png";
//evento que permitira dibujar el mapa
fondo.addEventListener("load",dibujarMapa);

function dibujarMapa()
{
	//agregar imagen al papel
	papel.drawImage(fondo,0,0); //objeto, coordenadas donde incia
}