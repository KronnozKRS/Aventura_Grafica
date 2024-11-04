let decision = false;
let muerte = false;
let siguiente = false;
let musicaIniciada = false;
let sound;

let rama = 0;
let ramaPos = 0;

let inicio = [];
let textosInicio;

let rama1 = [];
let textosRama1;

let rama1_2 = [];
let textosRama1_2;

let rama1_3 = [];
let textosRama1_3;

let rama2a = [];
let textos2a;

let rama2_1 = [];
let textosRama2_1;

let rama2_2 = [];
let textosRama2_2;

let rama3 = [];
let textosRama3;

let rama4 = [];
let textosRama4;

let rama5 = [];
let textosRama5;

function setup() {
  createCanvas(640, 480);
  textSize(32);
  fill(255);
  stroke(0);
  textAlign(CENTER, TOP);
}

function draw() {
  
  if (rama === 0) {
  image(inicio[ramaPos], 0, 0, width, height);
  text(textosInicio[ramaPos], 0, 50, width);
  siguiente = true;

  if (ramaPos === 2 || ramaPos === 6 || ramaPos === 9 || ramaPos === 13 || ramaPos === 17 || ramaPos === 24 || ramaPos === 27) {
    decision = true;
    pantallaDecision();
  } else if (ramaPos === 30) {
    muerte = true;
    pantallaMuerte();
  } else {
    botonSiguiente();
  }
}
  
 if (rama === 1) {
    image(rama1[ramaPos], 0, 0, width, height);
    text(textosRama1[ramaPos + 1], 0, 50, width);
    if (ramaPos === 3) {
        decision = true;
        pantallaDecision();
    } else {
        botonSiguiente();
    }
    if (ramaPos === 9) {
        muerte = true;
        pantallaMuerte();
        siguiente = false;
    }
    return;
}

  if (rama === 2) {
    image(rama1_2[ramaPos], 0, 0, width, height);
    text(textosRama1_2[ramaPos], 0, 50, width);
    botonSiguiente();

    if (ramaPos === 3) {
      decision = true;
      pantallaDecision();
    }
    if (ramaPos === 6) {
      muerte = true;
      pantallaMuerte();
    }
    return;
  }
  if (rama === 3) {
    image(rama1_3[ramaPos], 0, 0, width, height);
    text(textosRama1_3[ramaPos], 0, 50, width);
    botonSiguiente();
    if (ramaPos === 5 && rama === 3) {
      muerte = true;
      pantallaMuerte();
    } if (ramaPos === 6){
      pantallaMuerte();
    }
    return;
  }
  
  if (rama === 4) {
    image(rama2a[ramaPos], 0, 0, width, height);
    text(textosRama2a[ramaPos], 0, 50, width);
    botonSiguiente();

    if (ramaPos === 4) {
      decision = true;
      pantallaDecision();
      siguiente = true;
    }
    if (ramaPos === 10) {
      muerte = true;
      pantallaMuerte();
    }
    return;
  }

  if (rama === 5) {
    image([ramaPos], 0, 0, width, height);
    text(textosRama2_1[ramaPos], 0, 50, width);
    botonSiguiente();
    if (ramaPos !== 5 && ramaPos !== 9) {
      siguiente = true;
      botonSiguiente();
    } else {
      siguiente = false;
    }
    if (ramaPos === 5) {
      decision = true;
      pantallaDecision();
    }
    if (ramaPos === 9) {
      muerte = true;
      pantallaMuerte();
    }
    return;
  }
  if (rama === 6) {
    image(rama2_2[ramaPos], 0, 0, width, height);
    text(textosRama2_2[ramaPos], 0, 50, width);
    botonSiguiente();
    if (ramaPos === 5) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }
  if (rama === 7) {
    image(rama3[ramaPos], 0, 0, width, height);
    text(textosRama3[ramaPos], 0, 50, width);
    botonSiguiente();
    if (ramaPos === 2) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }
  if (rama === 8) {
    image(rama4[ramaPos], 0, 0, width, height);
    text(textosRama4[ramaPos], 0, 50, width);
    botonSiguiente();
    if (ramaPos === 2) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }

if (rama === 9) {
    image(rama5[ramaPos], 0, 0, width, height);
    text(textosRama5[ramaPos], 0, 50, width);
    botonSiguiente();
    if (ramaPos === 3 && rama === 9) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }

  if (muerte && ramaPos > 1 && ramaPos < 5 && rama === 0) {
    image(fin1, 0, 0, width, height);
    pantallaMuerte();
    return;
  }
}
function mouseClicked() {
  
  if (muerte) {
    if (mouseX > 160 && mouseX < 560 && mouseY > 405 && mouseY < 455) {
      decision = false;
      muerte = false;
      ramaPos = 6;
      rama = 3;

    } else if (mouseX > 160 && mouseX < 560 && mouseY > 330 && mouseY < 380) {
      rama = 0;
      ramaPos = 0;
      decision = false;
      muerte = false;
      siguiente = true;
      return;
    }
  }

  if (decision && ramaPos === 2 && rama === 0) {
    if (botonNo()) {
      muerte = true;
    } if (botonSi()) {
      ramaPos = 3;
      decision = false;
    }
  }

  if (decision && ramaPos === 27 && rama === 0) {
    if (botonNo()) {
      rama = 9 ;
      ramaPos = 0;
      decision = false;
    } else if (botonSi()) {
      ramaPos++;
      decision = false;
    }
  }

  if (decision && ramaPos === 24 && rama === 0) {
    if (botonNo()) {
      ramaPos++;
      decision = false;
    } else if (botonSi()) {
      rama = 8;
      ramaPos = 0;
      decision = false;
    }
  }

  if (decision && ramaPos === 9 && rama === 0) {
    if (botonNo()) {
      ramaPos = 0;
      rama = 4;
    } else if (botonSi()) {
      ramaPos++;
      decision = false;
    }
  }

  if (ramaPos === 17 && rama === 0) {
    if (botonNo()) {
      ramaPos++;
      decision = false;
    } else if (botonSi()) {
      decision = false;
      rama = 2;
      ramaPos = 3;
    }
  }

  if (ramaPos === 3 && rama === 2) {
    if (botonNo()) {
      ramaPos = 0;
      rama= 3;
      decision = false;
    } else if (botonSi()) {
      ramaPos++;
      decision = false;
    }
  }

  if (ramaPos === 5 && decision && rama === 5) {
    if (botonNo()) {
      ramaPos = 0;
      rama = 6;
      siguiente = true;
    } else if (botonSi()) {
      ramaPos = 6;
      siguiente = true;
    }
  }

  if (ramaPos === 4 && decision && rama === 4) {
    if (botonNo()) {
      ramaPos = 0;
      rama = 5;
    } else if (botonSi()) {
      ramaPos++;
    }
  }

  if (decision && ramaPos === 3 && rama === 1) {
    if (botonNo()) {
      decision = false;
      ramaPos = 0;
      rama= 2;
    } else if (botonSi()) {
      ramaPos++;
    }
  }
  
  if (decision && ramaPos === 13 && rama === 0) {
    if (botonNo()) {
      rama = 7;
      ramaPos = 0;
      decision = false;
    } else if (botonSi()) {
      ramaPos++;
      decision = false;
    }
  }

  if (decision && ramaPos === 6 && rama === 0) {
    if (botonNo()) {
      decision = false;
      ramaPos = 0;
      rama = 1;
    } else if (botonSi()) {
      ramaPos++;
    }
  }

  if (mouseX > width - 75 && mouseX < width - 25 && mouseY > height - 75 && mouseY < height - 25 && siguiente) {
  ramaPos++;
}
}

function mousePressed() {
  
  if (!musicaIniciada) {
    sound.loop();  
    musicaIniciada = true;  
  }
}


 
