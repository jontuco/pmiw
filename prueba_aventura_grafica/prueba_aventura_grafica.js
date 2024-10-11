let posX = 200;
let pantalla = 1;
let inicio, pantalla1, creditos;
let ancho = 640;
let alto = 480;
let colorBoton = 255;
let colorBotonCreditos, colorBotonReiniciar = 180;

function preload() {
  inicio = loadImage('/data/inicio.jpeg');
  pantalla1 = loadImage('/data/valerie.jpeg');
  creditos = loadImage('/data/creditos.jpeg');
}

function setup() {
  createCanvas(ancho, alto);
  textSize(20);
  textAlign(CENTER);
}

function draw() {
  overBotones()
  if (pantalla == 1) {
    image(inicio, 0, 0, 640, 480); //pasar las imagenes a arreglos
    //inicio boton
    push();
    stroke(colorBoton);
    strokeWeight(2);
    fill(76, 155, 140);
    rectMode(CENTER);
    rect(ancho/2, 350, 120, 50, 20);
    pop();
    //creditos boton
    push();
    stroke(100);
    strokeWeight(2);
    fill(16, 98, 88);
    rectMode(CENTER);
    rect(70, 430, 110, 40, 20);
    pop();
    //inicio texto
    push();
    fill(colorBoton);
    text("INICIO", ancho/2, 357);
    pop();
    //creditos texto
    push();
    textSize(18);
    fill(colorBotonCreditos);
    text("CRÉDITOS", 70, 437);
    pop();
  } else if (pantalla == 2) {
    image(pantalla1, 0, 0, 640, 480);
    fill(100, 200);
    rect(509, 16, 110, 40, 20);
    fill(255);
    text("siguiente", 563, 42);
    fill(0, 150);
    rect(40, 345, 530, 105);
    fill(255);
    textAlign(CENTER);
    text("Valerie es una periodista valiente y curiosa, siempre en busca de aventuras y misterios. Su terquedad la lleva a adentrarse en situaciones arriesgadas, pero su pasión por la verdad la mantiene firme.", 40, 350, 530, 240);
  } else if (pantalla == 3) {  //creditos
    background(0);
    image(creditos, 0, -80, 640, 480);
    fill(255);
    textAlign(CENTER);
    text("Autor: Uwe Boll\n\nFranco Panetta 94806/7\nAra Martino 91595/3", ancho/2, 370);

    push();
    stroke(100);
    strokeWeight(2);
    fill(16, 98, 88);
    rectMode(CENTER);
    rect(570, 430, 110, 40, 20);
    pop();

    push();
    textSize(18);
    fill(colorBotonReiniciar);
    text("REINICIAR", 570, 436);
    pop();
  }
  console.log(mouseX, mouseY, pantalla);
}

function mouseClicked() {

  console.log(mouseX, mouseY);

  if (pantalla == 1) {
    botonInicio();
    botonCreditos();
  }
  
  if (pantalla == 2) {
     botonSiguiente();
  }

  if (pantalla == 3) {
    botonReiniciar();
  }
}
