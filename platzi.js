var vp=document.getElementById("villaplatzi"); //llamar al id creado en .html
var papel = vp.getContext("2d"); //donde se dibujara

//objeto con varios atributos
var fondo= {
	url: "tile.png",
	cargaOK: false
};

var vaca = {
	url: "vaca.png",
	cargaOK: false
};

var cerdo = {
	url: "cerdo.png",
	cargaOK: false
};

var pollo = {
	url: "pollo.png",
	cargaOK: false
};

//llamar al Objeto para crear imagen de fondo
fondo.imagen =  new Image(); //instancia de una clase
//carga la fuente de la imagen fondo
fondo.imagen.src= fondo.url;
//evento que permitira dibujar el mapa/fondo
fondo.imagen.addEventListener("load",cargarMapa);

vaca.imagen = new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);


//funciones para cargar las imagenes antes de dibujar
function cargarMapa()
{
	fondo.cargaOK = true;
	dibujar(); //para dibujar despues de cargar
}

function cargarVaca()
{
	vaca.cargaOK = true;
	dibujar(); //para dibujar despues de cargar
}

function cargarCerdo()
{
	cerdo.cargaOK = true;
	dibujar(); //para dibujar despues de cargar
}

function cargarPollo()
{
	pollo.cargaOK = true;
	dibujar(); //para dibujar despues de cargar
}

function dibujar()
{
	if (fondo.cargaOK) //se quito == true porque igual funciona
	{
		papel.drawImage(fondo.imagen,0,0);
	}
	if (vaca.cargaOK) //se quito == true porque igual funciona
	{
		papel.drawImage(vaca.imagen,50,50);
	}
	if (cerdo.cargaOK) //se quito == true porque igual funciona
	{
		papel.drawImage(cerdo.imagen,100,100);
	}
	if (pollo.cargaOK) //se quito == true porque igual funciona
	{
		papel.drawImage(pollo.imagen,300,300);
	}
}