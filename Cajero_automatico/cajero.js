class Billete
{
	constructor(v,c)
	{
		this.valor = v;
		this.cantidad = c;
	}
}

//funcion al ejecutar el boton
function entregarDinero()
{
	//lee la cantidad de billetes en caja
	for(var bi of caja)
	{
		if (dinero >0)
		{
			//se divide el monto solicitado entre el monto del cajero
			div = Math.floor(dinero / bi.valor);
			if (div > bi.cantidad) 
			{
				papeles = bi.cantidad;
			}
			else{
				papeles=div;
			}

			entregado.push(new Billete(bi.valor,papeles));
			dinero = dinero - (bi.valor * papeles); 
		}
	}
	if (dinero > 0)
	{
		console.log("No tengo mas");
	}
	console.log(entregado);
}

var caja = [];
caja.push(new Billete(50,20));
caja.push(new Billete(20,30));
caja.push(new Billete(20,30));

//valor que sera sustituido por caja de html
var dinero = 1000;

var entregado = [];
var div = 0;
var papeles = 0;

//llamar al boton de html
var b = document.getElementById("extraer");
b.addEventListener("click",entregarDinero);

