var express = require("express");  // funcion que busca las librerias instaldas en el proyecto
var aplicacion = express();  //esta funcion es la variable declarada anteriormente


//url's de la pagina q se crea
aplicacion.get("/",inicio); //tiene como parametro la url, en este caso / (home) y la funcion que se ejecutara:inicio
aplicacion.get("/cursos",cursos);


function inicio(peticion,resultado)
{
	resultado.send("Este es el <strong>home</strong>");
}


function cursos(peticion,resultado)
{
	resultado.send("Estos son cursos");
}

//hacer correr el servidor en el puerto 8080
aplicacion.listen(8989);