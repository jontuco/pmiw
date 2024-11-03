function frente(posX, posY, tam) {
  strokeWeight(5);
  for (let i = 400; i<=posX; i+=tam){
    for (let f = 0; f<=posY; f+=tam){
      noFill();
      stroke(rojo(),g,b);
      a = tam;
      for (let l = 0; l<=100; l+=10){
        if(a<=0){
          a=0;
        }
        rect(i+l,f+l,a,a);
        a-=20;
      }
    }
  }
  push();
  if (completar === true) {
    rectMode(CENTER);
    for(let i = 500; i<=700; i+=200){
      for (let f = 100; f<=300; f+=200){
    rect(i,f,1,1);
      }
    }
  } else if (completar === false) {
  }
  pop();
}
