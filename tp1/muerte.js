
function muerte() {
  fill(0);
  rect(height / 4, height - 75, 400, 50);
  fill(255); // Texto de color blanco
  textSize(32); // Tamaño del texto
  textAlign(CENTER, CENTER); // Centrar el texto
  text("Ver creditos", height / 4 + 200, height - 50);

  fill(0, 255, 0);
  rect(height / 4, height - 150, 400, 50);
  fill(255); // Texto de color blanco
  textSize(32); // Tamaño del texto
  textAlign(CENTER, CENTER); // Centrar el texto
  text("Volver al inicio", height / 4 + 200, height - 125);
}
