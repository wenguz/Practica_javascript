/*creamos el objeto*/
class Pakiman
{
	/* funcion que se dispara cuando se crea el objeto*/
	constructor(n,v,a)
	{
		/*Atributos: this es una referencia a la instancia que se crea*/
		this.nombre = n;
		this.vida=v;
		this.ataque=a;

		/*Para cargar la imagen en funcion del nombre de la instnacia*/
		this.imagen = new Image();
		this.imagen.src = imagenes[this.nombre];
	}

	/*Funcion hablar*/
	hablar()
	{
		alert(this.nombre);
	}
	/*Funcion mostrar informacion de la instancia*/
	mostrar()
	{
		document.body.appendChild(this.imagen); /*esta funion agrega la imagen en pantalla*/
		document.write("<p>");
		document.write("<br><strong>"+this.nombre+"</strong><br>");
		document.write("Vida: "+this.vida + "<br>");
		document.write("Ataque : "+this.ataque);
		document.write("</p> <hr>");
	}
}