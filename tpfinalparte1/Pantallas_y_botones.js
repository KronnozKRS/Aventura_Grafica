// Pantalla de muerte

function pantallaMuerte() {
  muerte = true;
  if (rama != 3 && ramaPos != 6){
  fill(0);
  rect(height / 4, height - 75, 400, 50);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Ver creditos", height / 4 + 200, height - 50);
  }

  fill(0, 255, 0);
  rect(height / 4, height - 150, 400, 50);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Volver al inicio", height / 4 + 200, height - 125);
}

// Pantalla de Decision

function pantallaDecision() {
  decision = true;
  fill(255, 0, 0, 150);
  rect(30, 350, 200, 100);
  
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("NO", 30 + 200 / 2, 350 + 100 / 2);

  fill(0, 255, 0, 150);
  rect(410, 350, 200, 100);

  fill(0);
  text("SÍ", 410 + 200 / 2, 350 + 100 / 2);
  
  textAlign(LEFT, TOP);
  fill(0,255,0);
}

function botonSi(){
   return mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450
}

function botonNo(){
   return mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450
}

// Boton Siguiente

function botonSiguiente() {
  if (siguiente) {
    fill(0, 0, 255);
    rect(width - 75, height - 75, 50, 50);
    fill(0);
    triangle(width - 65, height - 65, width - 65, height - 35, width - 35, height - 50);
    fill(255);
  }
}
