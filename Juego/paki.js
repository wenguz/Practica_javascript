/*Array de imagenes, con valores asociativos, es decir nombres en lugar de indices numericos*/
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

/*Instancias del objeto. Deben tener los parametros enviados al constructor*/
/*Coleccion de pakimanes, push:agrega un nuevo objeto al final dela rray*/
 var coleccion = []; 
 coleccion.push(new Pakiman("Cauchin",100,30));
 coleccion.push(new Pakiman("Pokacho",80,50));
 coleccion.push(new Pakiman("Tocinauro",120,40));

/*Mostrar todas las instancias, al poner of considera el objeto. Si quisiera el indice debo usar in*/
for(var pakimanes of coleccion)
{
	pakimanes.mostrar();
}