/*Array de imagenes, con valores asociativos, es decir nombres en lugar de indices numericos*/
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";



/*Instancias del objeto. Deben tener los parametros enviados al constructor*/
var cauchin =  new Pakiman("Cauchin",100,30);
var pokacho = new Pakiman("Pokacho",80,50);
var tocinauro = new Pakiman("Tocinauro",120,40)

/*Invocar a las funciones del objeto*/
/*pokacho.hablar();*/

pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();