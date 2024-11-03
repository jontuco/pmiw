function fondo(tam, cant){
  push();
  translate(400,0);
  let cuadradoSize = tam;
  let c1 = color(63,240,255);
  let c2 = color(249,86,241);
  let c3 = color(0, 200, 0);
  let c4 = color(200, 200, 0);
  let c5 = color(245,137,3);

  for (let i = 0; i < cant; i++){
    for (let j = 0; j < cant; j++){
      let x = i*cuadradoSize;
      let y = j*cuadradoSize;
      
      for (let px = 0; px< cuadradoSize; px++){
        for (let py = 0; py < cuadradoSize; py++){
          let inter = map(dist(px, py, cuadradoSize/2, cuadradoSize/2), 0, cuadradoSize/2, 0, 1);
          let c;
          if (i == 0 && j == 0) {
            c = lerpColor(c1, c2, inter);
          } else if (i == 0 && j == 1) {
            c = lerpColor(c3, c2, inter);
          } else if (i == 0 && j == 2) {
            c = lerpColor(c1, c5, inter);
          } else if (i == 1 && j == 0){
            c = lerpColor(c2, c4, inter);
          } else if (i == 1 && j == 1) {
            c = lerpColor(c1, c5, inter);
          } else if (i == 1 && j == 2) {
            c = lerpColor(c3, c2, inter);
          } else if (i == 2 && j == 0) {
            c = lerpColor(c1, c5, inter);
          } else if (i == 2 && j == 1){
            c = lerpColor(c2, c4, inter);
          } else if (i == 2 && j == 2) {
            c = lerpColor(c1, c2, inter);
          }
          stroke(c);
          point(x + px, y + py);
        }
      }
    }
  }
  pop();
}
