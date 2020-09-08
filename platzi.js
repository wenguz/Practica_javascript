var vp=document.getElementById("villaplatzi"); //llamar al id creado en .html
var papel = vp.getContext("2d"); //donde se dibujara

//objeto con varios atributos
var fondo= {
	url: "tile.png",
	cargaOK: false  //para verificar el cargado de imagen y que no se sobrepongan
};

var vaca = {
	url: "vaca.png",
	cargaOK: false
};

var cerdo = {
	url: "cerdo.png",
	cargaOK: false
};
//origen de coordenadas imagen cerdo para mever por teclado
var x_c=100;
var y_c=100;

var pollo = {
	url: "pollo.png",
	cargaOK: false
};


//controla la cantidad de imagenes que cargara de un mismo tipo
var cantidad = aleatorio(0,10);
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
document.addEventListener("keydown",dibujarTeclado); //evento para detectar que se clickea boton


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

//funcion para dibujar todo y mostrar por pantalla
function dibujar()
{
	if (fondo.cargaOK) //se quito == true porque igual funciona
	{
		papel.drawImage(fondo.imagen,0,0);
	}
	if (vaca.cargaOK) //se quito == true porque igual funciona
	{
		//dibujar v vacas
		for(v=0 ; v<cantidad ;v ++)
		{
			//coordenadas para dibujar en diferentes lugares
			var x = aleatorio(0,6);// el segundo numero de rango deberia ser menor del resultado de restar tamaños: 500(total_fondo) - 80(total_vaca)
			var y = aleatorio(0,6);
			x= x * 60; //para que la imagen no se sobreponga con otra del mismo tipo
			y= y* 60;
			//dibuja una imagene en las coordenadas indicadas
			papel.drawImage(vaca.imagen,x,y);
		}
	}
	if (pollo.cargaOK) 
	{
		papel.drawImage(pollo.imagen,300,300);
	}

	if (cerdo.cargaOK)
	{
		papel.drawImage(cerdo.imagen,x_c,y_c);
	}
}

function aleatorio(min,max)
{
	//funcion que genera numeros aleatorios entre dos valores.
	var resultado;
	resultado = Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}

function dibujarTeclado(evento)
{
	//keyCode: obtine el codigo ascci de la tecla presionada
		var movimiento = 50; //cantidad de pixeles que se agregara

		//objeto  creado con el keycode para detectar teclas
		var teclas = {
			LEFT: 37,
			UP: 38,
			RIGHT: 39,
			DOWN: 40
		}
		switch(evento.keyCode){
			case teclas.LEFT:
				console.log("Izquierda");
				x_c = x_c - movimiento;
				dibujar(x_c,y_c);

			break;
			case teclas.UP:
				console.log("arriba");
				 y_c = y_c - movimiento;
				 dibujar(x_c,y_c);
			break;
			case teclas.RIGHT:
				console.log("derecha");
				x_c=x_c + movimiento;
				dibujar(x_c,y_c);
			break;
			case teclas.DOWN:
				console.log("abajo");
				y_c = y_c + movimiento;
				dibujar(x_c,y_c);
			break;
			default:
				console.log("Otra tecla");
		}
}