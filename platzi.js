var vp=document.getElementById("villaplatzi"); //llamar al id creado en .html
var papel = vp.getContext("2d"); //donde se dibujara

//Objeto para crear imagen de fondo
var fondo =  new Image(); //instancia de una clase
//carga la fuente de la imagen fondo
fondo.src= "tile.png";
//evento que permitira dibujar el mapa/fondo
fondo.addEventListener("load",dibujarMapa);

var vaca = new Image();
vaca.src="vaca.png";
vaca.addEventListener("load",dibujarVaca);

var cerdo =new Image();
cerdo.src="cerdo.png";
cerdo.addEventListener("load",dibujarCerdo);

var pollo= new Image();
pollo.src="pollo.png";
pollo.addEventListener("load",dibujarPollo);


function dibujarMapa()
{
	//agregar imagen al papel
	papel.drawImage(fondo,0,0); //objeto, coordenadas donde incia
}

function dibujarVaca()
{
	papel.drawImage(vaca,10,10);
}

function dibujarCerdo()
{
	papel.drawImage(cerdo,20,20);
}

function dibujarPollo()
{
	papel.drawImage(pollo,30,30);
}