/*creamos el objeto*/
class Pakiman
{
	/* funcion que se dispara cuando se crea el objeto*/
	constructor(n,v,a)
	{
		/*Atributos: this es una referencia a la instancia que se crea*/
		this.nombre = n;
		this.vida=v;
		this.aataque=a;
	}

	/*Fjuncion hablar*/
	hablar()
	{
		alert(this.nombre);
	}
}

/*Instancias del objeto. Deben tener los parametros enviados al constructor*/
var cauchin =  new Pakiman("Cauchin",100,30);
var pokacho = new Pakiman("Pokacho",80,50);
var tocinauro = new Pakiman("Tocinauro",120,40)
console.log(cauchin);
console.log(pokacho, tocinauro);

pokacho.hablar();