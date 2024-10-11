function overBotones() {
  //botonInicio
  if (mouseX>260 && mouseX<380 && mouseY>323 && mouseY<373) {
    colorBoton = 0;
  } else {
    colorBoton = 255;
  }
  //botonCreditos
  if (mouseX>15 && mouseX<125 && mouseY>408 && mouseY<448) {
    colorBotonCreditos = 255;
  } else {
    colorBotonCreditos = 180;
  }
  //botonReiniciar
  if (mouseX>515 && mouseX<625 && mouseY>408 && mouseY<448) {
    colorBotonReiniciar = 255;
  } else {
    colorBotonReiniciar = 180;
  }
}
