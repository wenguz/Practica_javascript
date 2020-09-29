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
	//extraer el valor de caja de html
	var t = document.getElementById("dinero");
	//convierte el texto a entero
	dinero = parseInt(t.value);
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
	//si el monto solicitado es mayor al que se tiene en caja
	if (dinero > 0)
	{
		//document.write("No tengo mas");
		resultado.innerHTML = "No tengo mas";
	}
	else{
		for (var e of entregado){
			//solo mostrara los billetes entregados
			if (e.cantidad > 0) {
				resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $ " + e.valor + "</br>";
			}
		}
	}
	
}

var caja = [];
caja.push(new Billete(50,20));
caja.push(new Billete(20,30));
caja.push(new Billete(20,30));

//valor que sera sustituido por caja de html
var dinero = 0;

var entregado = [];
var div = 0;
var papeles = 0;

//variable para obtener el resultado que se muestra en pantall
var resultado = document.getElementById("resultado");
//llamar al boton de html
var b = document.getElementById("extraer");
b.addEventListener("click",entregarDinero);

