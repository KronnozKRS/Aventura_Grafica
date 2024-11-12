let ramaPos = 0;
let dialogos;
let imagen = [];
let muerte = false;
let decision = false;

function preload() {
  dialogos = loadStrings('assets/dialogos.txt');

  for (let i = 0; i <= 91; i++) {
    imagen[i] = loadImage('assets/imagenes/imagen' + i + '.jpeg');
  }
}

function setup() {
  createCanvas(640, 480);
  textSize(32);
  fill(255);
  stroke(0);
  textAlign(CENTER, TOP);
}

function draw() {
  image(imagen[ramaPos], 0, 0, width, height);
  text(dialogos[ramaPos], 0, 50, width);
  console.log("Esta imagen es la " + ramaPos);

  if (decision) {
    pantallaDecision();
  } else {
    botonSiguiente();
  }
}

function botonSiguiente() {
  if (esPantallaDecision(ramaPos)) { 
    pantallaDecision();
  }

  if (!decision && !muerte) {
    fill(0, 0, 255);
    rect(width - 75, height - 75, 50, 50);
    fill(0);
    triangle(width - 65, height - 65, width - 65, height - 35, width - 35, height - 50);
    fill(255);
    return mouseX > width - 75 && mouseX < width - 25 && mouseY > height - 75 && mouseY < height - 25;
  }
}

function pantallaDecision() {
  decision = true;

  // Botón NO
  fill(255, 0, 0, 150);
  rect(30, 350, 200, 100);
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("NO", 30 + 200 / 2, 350 + 100 / 2);

  // Botón SÍ
  fill(0, 255, 0, 150);
  rect(410, 350, 200, 100);
  fill(0);
  text("SÍ", 410 + 200 / 2, 350 + 100 / 2);

  fill(0, 255, 0);
  textAlign(CENTER, TOP);
}

function botonSi() {
  return mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450;
}

function botonNo() {
  return mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450;
}

function esPantallaDecision(pos) {
  return pos === 6 || pos === 9 || pos === 13 || pos === 17 || pos === 24 || pos === 27 || pos === 34 || pos === 44 || pos === 60 || pos === 75;  // Especificar posiciones de pantallas de decisión
}

function mouseClicked() {
  if (decision) {
    if (botonSi()) {
      continuarDecision("si");
    } else if (botonNo()) {
      continuarDecision("no"); 
    }
  } else if (botonSiguiente()) {
    actualizarRama(1); 
  }
}

function continuarDecision(opcion) {
  if (opcion === "si") {
    if (ramaPos === 17){
      ramaPos = 45;
    } else if (ramaPos === 24) {
      ramaPos = 85; 
    }
    actualizarRama(1); 
  } else if (opcion === "no") {
    if (ramaPos === 6) {
      ramaPos = 31; 
    } else if (ramaPos === 44) {
      ramaPos = 48;
    } else if (ramaPos === 60) {
      ramaPos = 65;  
    } else if (ramaPos === 9) {
      ramaPos = 71; 
    } else if (ramaPos === 34) {
      ramaPos = 41; 
    } else if (ramaPos === 75) {
      ramaPos = 55; 
    } else if (ramaPos === 13) {
      ramaPos = 82; 
    } else if (ramaPos === 17) {
      actualizarRama(1) 
    } else if (ramaPos === 24) {
      actualizarRama(1)
    }else if (ramaPos === 27) {
      ramaPos = 88;
    }
  }
  decision = false; 
}

function actualizarRama(cambio) {
  ramaPos += cambio;
}
