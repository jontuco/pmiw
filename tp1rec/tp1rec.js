//Martino Saravi Ara - 91595/3
//Video nuevo: https://www.youtube.com/watch?v=5k_MRTf-rLE
//Video antiguo: https://www.youtube.com/watch?v=HttPgi2pYeo
//Corrección anterior: Ausencia de funciones con parámetros

//mueve el mouse de izquierda a derecha para alterar el color de los bordes
//presione "a" o "d" para cambiar el color de los bordes inicialmentes rojos
//presione "w" para ampliar la grilla tanto del frente como del fondo (cambia las variables que asignan valor a los parametros)
//presione "r" para resetear tanto el color como el tamaño de la grilla

let referencia; //imagen
let a = 200;  //variable asignada al tamaño del rect(sin color) en la funcion frente 
let g = 8;  //variable asignada al color del stroke del rect en la funcion frente
let b = 2;  //variable asignada al color del stroke del rect en la funcion frente
let tamCasilla = 400/2; //variable que asigna valor al parametro tam en las funciones fondo y frente
let cantFilas = 2;  
let posXFrente = 600;  //variable que asigna valor al parametro posX de la funcion frente
let posYFrente = 200;  //variable que asigna valor al parametro posY de la funcion frente
let completar = true;  //variabble que activa y desactiva el dibujo de un rect de 1px

function preload(){
  referencia = loadImage('/subcarpeta/referencia.jpg');
}

function setup() {
  createCanvas(800,400);
  image(referencia,0,0,400,400);
  
}

function draw() {
  console.log(mouseX, mouseY, completar);
  fondo(tamCasilla, cantFilas);
  frente(posXFrente, posYFrente, tamCasilla);
}

function keyPressed(){
  if (key === 'a'){
    g = random(0,255);
    b = random(0,255);
    console.log("g="+g, "b="+b);
  }else 
  if (key === 'd'){
    g = random(0,255);
    b = random(0,255);
    console.log("g="+g, "b="+b);
  }else 
  if (key === "w") {
    tamCasilla = 400/3;
    cantFilas = 3;
    posXFrente = 800;
    posYFrente = 400;
    completar = false;
    console.log("w");
  }else 
  if (key === 'r'){
    g = 8;
    b = 2;
    tamCasilla = 400/2;
    cantFilas = 2;
    posXFrente = 600;
    posYFrente = 200;
    completar = true;
  }
}
