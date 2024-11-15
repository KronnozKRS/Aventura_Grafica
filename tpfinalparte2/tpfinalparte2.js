let juegoPacman; // Única variable global
let imagenPared;  // Variable global para la imagen de la pared

// Clase principal del juego
class Juego {
  constructor() {
    this.nivel = new Nivel(); // Inicializa el laberinto
    this.pacman = new Pacman(55, 55); // Inicializa Pac-Man en una posición específica
    this.fantasmas = [
      new Fantasma(140, 100), // Fantasma en la posición (150, 100)
      new Fantasma(540, 100), // Fantasma en la posición (550, 100)
      new Fantasma(100, 420), // Fantasma en la posición (100, 420)
      new Fantasma(550, 420)  // Fantasma en la posición (550, 410)
    ]; // Inicializa los fantasmas sin color
    this.estadoJuego = "inicio";  // Estado inicial del juego
    this.botonJugar = { x: 220, y: 320, ancho: 200, alto: 50 }; // Definición del botón Jugar
}

dibujar() {
  background(0);

  if (this.estadoJuego === "inicio") {
    this.dibujarMenuInicio();
  } else {
    this.nivel.dibujar();
    this.pacman.mover();
    this.pacman.dibujar();

    // Mover y dibujar los fantasmas
    for (let fantasma of this.fantasmas) {
      fantasma.mover();
      fantasma.dibujar();
    }
  }
}

dibujarMenuInicio() {
  // Dibuja el rectángulo semitransparente para el menú
  fill(0, 0, 0, 150); // Color negro con algo de transparencia
  rect(0, 0, width, height);

  // Título del menú
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Pac-Man Game", width / 2, height / 3);

  // Instrucciones
  textSize(16);
  text("Usa las flechas del teclado para mover a Pac-Man", width / 2, height / 2);

  // Botón "Jugar"
  fill(255, 0, 0); // Color del botón
  rect(this.botonJugar.x, this.botonJugar.y, this.botonJugar.ancho, this.botonJugar.alto);
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Jugar", this.botonJugar.x + this.botonJugar.ancho / 2, this.botonJugar.y + this.botonJugar.alto / 2);
}

// Método para manejar la tecla presionada
teclaPresionada() {
  if (this.estadoJuego === "juego") {
    if (keyCode === UP_ARROW) {
      this.pacman.setDireccion(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      this.pacman.setDireccion(0, 1);
    } else if (keyCode === LEFT_ARROW) {
      this.pacman.setDireccion(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
      this.pacman.setDireccion(1, 0);
    }
  }
}

// Cambiar el estado del juego al hacer clic en el botón
mousePressed() {
  if (this.estadoJuego === "inicio") {
    let distanciaX = mouseX - this.botonJugar.x;
    let distanciaY = mouseY - this.botonJugar.y;
    if (distanciaX > 0 && distanciaX < this.botonJugar.ancho && distanciaY > 0 && distanciaY < this.botonJugar.alto) {
      this.estadoJuego = "juego"; // Cambiar al estado del juego
    }
  }
}
}

// Clase Nivel (dibuja el laberinto o el mapa)
class Nivel {
  constructor() {
    // Mapa del laberinto donde 1 es una pared y 0 es un espacio vacío
    this.mapa = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    this.tamanoCelda = 40; // Tamaño de cada celda (40x40 píxeles)
  }

  // Método para cargar la imagen de la pared
  cargarImagen() {
    imagenPared = loadImage('assets/pared.jpg'); // Cargar la imagen de la pared
  }

  dibujar() {
    for (let fila = 0; fila < this.mapa.length; fila++) {
      for (let columna = 0; columna < this.mapa[fila].length; columna++) {
        let valorCelda = this.mapa[fila][columna];

        if (valorCelda === 1) {
          // Dibuja la imagen de la pared
          image(imagenPared, columna * this.tamanoCelda, fila * this.tamanoCelda, this.tamanoCelda, this.tamanoCelda);
        } else {
          fill(0); // Espacio vacío en color negro
          rect(columna * this.tamanoCelda, fila * this.tamanoCelda, this.tamanoCelda, this.tamanoCelda);
        }
      }
    }
  }

  // Verifica si Pac-Man colisiona con una pared teniendo en cuenta su radio
  colision(x, y, tamano) {
    let radio = tamano / 2;
    let filaInicio = Math.floor((y - radio) / this.tamanoCelda); // Fila superior
    let filaFin = Math.floor((y + radio) / this.tamanoCelda); // Fila inferior
    let columnaInicio = Math.floor((x - radio) / this.tamanoCelda); // Columna izquierda
    let columnaFin = Math.floor((x + radio) / this.tamanoCelda); // Columna derecha

    // Verifica si alguna celda en el rango de Pac-Man tiene una pared (valor 1)
    for (let fila = filaInicio; fila <= filaFin; fila++) {
      for (let columna = columnaInicio; columna <= columnaFin; columna++) {
        if (this.mapa[fila] && this.mapa[fila][columna] === 1) {
          return true; // Hay una pared
        }
      }
    }
    return false; // No hay pared
  }

  // Verifica si un fantasma colisiona con una pared teniendo en cuenta su radio
  colisionFantasma(x, y, tamano) {
    let radio = tamano / 2;
    let filaInicio = Math.floor((y - radio) / this.tamanoCelda); // Fila superior
    let filaFin = Math.floor((y + radio) / this.tamanoCelda); // Fila inferior
    let columnaInicio = Math.floor((x - radio) / this.tamanoCelda); // Columna izquierda
    let columnaFin = Math.floor((x + radio) / this.tamanoCelda); // Columna derecha

    // Verifica si alguna celda en el rango de la colisión tiene una pared
    for (let fila = filaInicio; fila <= filaFin; fila++) {
      for (let columna = columnaInicio; columna <= columnaFin; columna++) {
        if (this.mapa[fila] && this.mapa[fila][columna] === 1) {
          return true; // Hay una pared
        }
      }
    }
    return false; // No hay pared
  }
}

// Clase Pacman
class Pacman {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direccionX = 0;
    this.direccionY = 0;
    this.tamano = 30;
    this.velocidad = 2;
  }

  mover() {
    // Movimiento de Pac-Man
    let nuevaX = this.x + this.direccionX * this.velocidad;
    let nuevaY = this.y + this.direccionY * this.velocidad;

    // Verifica si el nuevo movimiento colisiona con una pared
    if (!juegoPacman.nivel.colision(nuevaX, nuevaY, this.tamano)) {
      this.x = nuevaX;
      this.y = nuevaY;
    }
  }

  dibujar() {
    fill(255, 255, 0); // Color amarillo para Pac-Man
    noStroke();
    ellipse(this.x, this.y, this.tamano, this.tamano); // Dibuja Pac-Man
  }

  setDireccion(dx, dy) {
    this.direccionX = dx;
    this.direccionY = dy;
  }
}

// Clase Fantasma
class Fantasma {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidad = 1;
    this.direccionX = 0;
    this.direccionY = 0;
  }

  mover() {
    // Mover aleatoriamente en la dirección X o Y
    let direccion = int(random(15));

    if (direccion === 0) { // Arriba
      this.direccionX = 0;
      this.direccionY = -3;
    } else if (direccion === 1) { // Abajo
      this.direccionX = 0;
      this.direccionY = 3;
    } else if (direccion === 2) { // Izquierda
      this.direccionX = -3;
      this.direccionY = 0;
    } else if (direccion === 3) { // Derecha
      this.direccionX = 3;
      this.direccionY = 0;
    }

    let nuevaX = this.x + this.direccionX * this.velocidad;
    let nuevaY = this.y + this.direccionY * this.velocidad;

    // Verificar si no hay colisión
    if (!juegoPacman.nivel.colisionFantasma(nuevaX, nuevaY, 30)) {
      this.x = nuevaX;
      this.y = nuevaY;
    } else {
      // Si hay colisión, detenerse o cambiar dirección
      this.direccionX = 0;
      this.direccionY = 0;
    }
  }

  dibujar() {
    fill(255, 0, 0); // Color predeterminado para los fantasmas (puedes cambiarlo si quieres)
    noStroke();
    ellipse(this.x, this.y, 30, 30); // Dibuja al fantasma
  }
}


function setup() {
  createCanvas(640, 480);
  juegoPacman = new Juego();
  juegoPacman.nivel.cargarImagen();
}

function draw() {
  juegoPacman.dibujar();
}

function keyPressed() {
  juegoPacman.teclaPresionada();
}

function mousePressed() {
  juegoPacman.mousePressed();
}
