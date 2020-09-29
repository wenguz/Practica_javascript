class Billete
{
	constructor(v,c)
	{
		this.valor = v;
		this.camtidad = c;
	}
}

var caja = [];
caja.push(new Billete(50,3));
caja.push(new Billete(20,2));
caja.push(new Billete(20,2));

//valor que sera sustituido por caja de html
var dinero = 210;

var entregado = [];
var div = 0;
var papeles = 0;