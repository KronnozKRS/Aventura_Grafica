let inicio = [];
let inicioPos = 0;
let fin1; // Definir una variable global para la imagen de fin
let decision = false;
let pantallaMuerte = false;
let rama1 = [];
let rama1Pos = 0;
let rama1_1; // Declarar rama1_1 como variable global
let rama1Activa = false; // Nueva variable para controlar si estamos en rama1
let rama1_2 = [];
let rama1_2Pos = 0;
let rama1_2Activa = false;
let rama1_3 = [];
let rama1_3Pos = 0;
let rama1_3Activa = false;
let rama2 = [];
let rama2Pos = 0;
let rama2Activa = false;
let rama2_1 = [];
let rama2_1Pos = 0;
let rama2_1Activa = false;
let rama2_2 = [];
let rama2_2Pos = 0;
let rama2_2Activa = false;
let rama3 = [];
let rama3Pos = 0;
let rama3Activa = false;
let rama4 = [];
let rama4Pos = 0;
let rama4Activa = false;
let rama5 = [];
let rama5Pos = 0;
let rama5Activa = false;

function preload() {
  let presentacion = loadImage('assets/presentacion.png');
  let inicio1 = loadImage('assets/inicio1.png');
  let inicio2 = loadImage('assets/inicio2.jpg');
  let inicio3 = loadImage('assets/inicio3.png');
  let inicio4 = loadImage('assets/inicio4.png');
  let inicio5 = loadImage('assets/inicio5.png');
  let inicio6 = loadImage('assets/inicio6.png');
  let inicio7 = loadImage('assets/inicio7.png');
  rama1_1 = loadImage('assets/rama1_1.png'); // Cargar la imagen y asignarla a la variable global
  fin1 = loadImage('assets/fin1.png'); // Cargar la imagen del fin

  inicio = [
    { image: presentacion, text: "Death note \nLa libreta mortal" },
    { image: inicio1, text: "Te llamas Light, tienes 17 años,\neres un nerd sin amigos" },
    { image: inicio2, text: "Un día como cualquier otro,\nves una libreta cayendo desde el cielo \n¿la levantas?" },
    { image: inicio3, text: "La levantas y lees que se llama \n'Death Note'" },
    { image: inicio4, text: 'Lees las reglas de la libreta, descubriendo su poder mortal' },
    { image: inicio5, text: 'Mas tarde ese mismo dia, te quedas solo en tu escuela estudiando, hasta que derrepente escuchas un ruido extraño' },
    { image: inicio6, text: 'aaaaaaAparece un Shinigami, te incita a que uses la libreta para asesinar a tu bully que está en el patio, ¿lo haras?' },
    { image: inicio7, text: "Quedas sorprendido del poder de la libreta, imaginandote lo que podrias hacer con esta" },
    { image: inicio7, text: "Llegas a tu casa y empiezas a escribir nombres de criminales, decides autonombrarse como Kira" },
    { image: inicio7, text: "Estas maravillado con esto, es tanta la ilusion, que estas pensando en contarselo a Mia, tu crush de secundaria, ¿Deberias?" },
    { image: inicio7, text: "Se lo cuentas a Mia, despues de una demostracion de lo que hace la libreta, Mia queda enamorada de tu ideologia" },
    { image: inicio7, text: "En la jefatura de policia, tu padre esta discutiendo con un nuevo detective en el caso de Kira, su nombre es L" },
    { image: inicio7, text: "L es el mejor detective del mundo, con solo una jugada, descubrio que Kira es de Seattle, y que puede matar a distancia" },
    { image: inicio7, text: "Le cuentas a Mia y ella te dice que amenaces a L, ¿Lo haces?" },
    { image: inicio7, text: "Piensas en que podrias usar a Watari, el asistente y padre adoptivo de L, para que te diga su nombre real" },
    { image: inicio7, text: "Watari, siendo controlado por la DN, dice no saber el nombre real de L, pero que ira al hogar adoptivo de L para buscarlo y decirtelo" },
    { image: inicio7, text: "Al dia siguiente, L aparece en medio de la noche mientras cenas con tu padre, confiesa que esta seguro que tu eres Kira y secuestraste a Watari" },
    { image: inicio7, text: "¿Confiesas?" },
    { image: inicio7, text: "L se va escoltado por la policia, empiezas a dudar de tus propias decisiones" },
    { image: inicio7, text: "Vas al baile de graduacion con Mia, pero Watari te llama, esta por descubrir el nombre de L, pero se oyen disparos al otro lado del telefono" },
    { image: inicio7, text: "Escuchas el ultimo suspiro de Watari, estas frustado" },
    { image: inicio7, text: "Cuando culpas a Mia, ella te muestra que escribio tu nombre tambien, y moriras si no le entregas la libreta en el parque de atracciones" },
    { image: inicio7, text: "A todo esto, a L ya le informaron de la muerte de Watari, asi que va a buscarte para asesinarte" },
    { image: inicio7, text: "Llega donde estas, exaltado y con un arma, tu lo ves a lo lejos mientras vas a buscar la Death Note" },
    { image: inicio7, text: "¿Te frenas a hablar con el?" },
    { image: inicio7, text: "Empiezas a huir, te encuentras con Mia, ambos suben a la rueda de la fortuna, intentas convencerla de que no la tome,pero no lo hace" },
    { image: inicio7, text: "Se acerca la hora de tu muerte, confiesas haber escrito su nombre, si no te devuelve la DN, ambos moriran, la rueda de la fortuna empieza a desmoronarse" },
    { image: inicio7, text: "Ambos quedan colgados de la rueda de la fortuna, tienes la opcion de soltar a mia, ¿La sueltas?" },
    { image: inicio7, text: "Mia cae en el cemento del parque de atracciones, muriendo instantaneamente mientras que tu caes en el lago, salvando tu vida" },
    { image: inicio7, text: "3 dias despues del coma, tu despiertas junto a tu padre, este te confiesa que L fue esposado por intento de homicidio y que no lo volveras a ver" },
    { image: inicio7, text: "¿Sera este el final de L? \n\nCONTINUARA" },
  ];

  // Definir rama1 aquí, después de haber cargado rama1_1
  rama1 = [
    { image: rama1_1, text: "Light decide no hacerlo, no quiere estar involucrado en una escena del crimen tan rapido" },
    { image: rama1_1, text: "Light confia en la libreta, cuando llega a su casa, empieza a asesinar criminales buscados" },
    { image: rama1_1, text: "decides no contarselo a nadie para no involucrar a algun ser querido, Decides llamarte KIRA, pero 2 meses despues..." },
    { image: rama1_1, text: 'Descubres a L, un detective que trabaja con tu padre para descubrirte, utiliza a tu padre para amenazarte por television, ¿Matas a tu padre?' }, 
    { image: rama1_1, text: 'Decides asesinar a tu padre, L queda sorprendido al verlo en television, el tenia sospechas de tí pero esto lo cambia todo' },
    { image: rama1_1, text: 'NADIE AMENAZA A KIRA, tus seguidores estan impactados pero a la vez contentos de que su Dios verdaderamente existe' },
    { image: rama1_1, text: 'L queda en blanco, todas sus sospechas hacia tí se fueron en ese acto tan atroz, L se quedó sin sospechosos' },
    { image: rama1_1, text: 'Quedas solo, sin ningun familiar o amigo cercano, solo tu y la libreta, tras la muerte de tu padre, la policia te deja en paz por un tiempo' },
    { image: rama1_1, text: 'Tienes la posibilidad de asesinar gente mediante otras personas para que sea mas dificil encontrarte, ¿lo haces?' },
    { image: rama1_1, text: 'Prefieres hacerlo de la forma antigua, asesinando criminales tu mismo, despues de 2 largos años, la policia te descubre' },
    { image: rama1_1, text: 'Tras tantos años de asesinatos a sangre fria, Ryuk decide que no quiere pasar toda una vida en prision atada a ti, y escribe tu nombre' },
    { image: rama1_1, text: "PANTALLA DE MUERTE" },
  ];
  
  rama1_2 = [
    { image: rama1_1, text: "Decides no matar a tu padre, incluso tu tienes un limite" },
    { image: rama1_1, text: "L mira las noticias, observando como la persona mas egoista del mundo, osea Kira, no intentó asesinar a un simple policia" },
    { image: rama1_1, text: "Esto claramente levanta sospechas sobre ti, despues de todo, es tu padre, tiene sentido que no lo mataras" },
    { image: rama1_1, text: 'Tu padre viene esa noche a cenar, te pregunta, el porque Kira puede matar a tantas personas, pero no puede a un simple policia, ¿te confiesas?' }, 
    { image: rama1_1, text: 'Decides contarle, tu padre queda atonito ante tal noticia' },
    { image: rama1_1, text: 'Aun con lagrimas en los ojos, decide esposarte y llevarte a prision, Ryuk no va a querer estar atado a ti, asi que escribe tu nombre y mueres' },
    { image: rama1_1, text: 'PANTALLA DE MUERTE' },
  ]
  
  rama1_3 = [
    { image: rama1_1, text: "Decides quedarte en silencio escuchando a tu padre quejandose" },
    { image: rama1_1, text: "Sabes que esto es una prueba mas que creible para ser el primer candidato a ser Kira" },
    { image: rama1_1, text: "Tienes solo 17 años, empiezas a reflexionar y caes en cuenta de que no eres Dios, no decides quien vive y quien muere" },
    { image: rama1_1, text: 'tratas de olvidar la libreta, no es bueno para tí y lo sabes, intentas dar borron y cuenta nueva' }, 
    { image: rama1_1, text: 'Pasan 13 dias sin escribir, y segun las reglas de la DN, te olvidas de ella, Ryuk te deja y ahora te toca llevar un peso que ni tu recuerdas por que' },
    { image: rama1_1, text: 'PANTALLA DE MUERTE' },
  ]
  
  rama2 = [
    { image: rama1_1, text: "Piensas que nadie debe saber de la libreta, si alguien mas se enterara, tendrias que matarlo" },
    { image: rama1_1, text: "empiezas a escribir en la DN en la escuela para no perder el tiempo en limpiar el mundo" },
    { image: rama1_1, text: "Mia empieza a notar que eres muy extraño y empieza a espiarte, y en un pequeño descuido, ella lee lo que dice en la libreta" },
    { image: rama1_1, text: 'No sabes que decir, ella esta amenazando con decirle a la policia sobre tus fetiches raros de escritor' }, 
    { image: rama1_1, text: 'Entras en panico, ¿Escribes su nombre en la Death Note?' },
    { image: rama1_1, text: 'Lo hiciste. De la nada Mia se calla, se va en silencio, estas horrorizado por lo que hiciste' },
    { image: rama1_1, text: 'horas mas tarde, aparece Mia en las noticias...' },
    { image: rama1_1, text: 'Cuando pusiste "Aleatorio" como forma de muerte, no esperabas que saltara de un 8vo piso' },
    { image: rama1_1, text: 'Sin emitir ruido, sin dejar ningun mensaje, solo silencio. Quedas traumado, decides tirar la libreta, nunca quisiste esto, el poder te cegó' },
    { image: rama1_1, text: 'Ryuk se rie de tí, le suplicas que se lleve la libreta, el acepta con disgusto, 13 dias despues no recuerdas nada, mas que solo el sentimiento de culpa y de un vacio interminable' },
    { image: rama1_1, text: 'PANTALLA DE MUERTE' },
  ]
  
  rama2_1 = [
    { image: rama1_1, text: "NI EN BROMA, no se debe jugar con la Death Note, nisiquiera en casos extremos" },
    { image: rama1_1, text: "Mia te mira con cara de repulsion, ella sabe que ocultas algo pero no sabe el que" },
    { image: rama1_1, text: "Te pregunta por ultima vez que es ese cuaderno, tu te niegas a decirle asi que decide irse no sin antes decirlo lo enfermizo que eres" },
    { image: rama1_1, text: 'Al dia siguiente, todos en la escuela saben sobre tu "Diario enfermizo", la gente incluso te hace bromas sobre si vas a anotar sus nombres si te caen mal, a ti te da igual lo que opinan' }, 
    { image: rama1_1, text: 'Al volver a tu casillero, encuentras la Death Note con hojas arrancadas, ese mismo dia, mientras tu dormias, se reportaron numerosos casos de muertes por ataques al corazon repentinamente, te hueles lo peor' },
    { image: rama1_1, text: '¿Enfrentas a Mia?' },
    { image: rama1_1, text: 'Vas con ella en el receso y le preguntas que sabe sobre los asesinatos, ella sin dar tantas vueltas te dice la verdad, ella los escribio y ahora es consciente del poder de la libreta' },
    { image: rama1_1, text: 'Empiezan a trabajar juntos, no como uno superior al otro, sino como compañeros, cada uno con su parte de la libreta, mientras uno duerme, el otro asesina, haciendole imposible a L encontrar un patron' },
    { image: rama1_1, text: 'Juntos, logran derrotar a L en su propio juego, y tiempo despues, se convierten en los dioses del nuevo mundo que ellos mismos crearon' },
    { image: rama1_1, text: 'PANTALLA DE MUERTE' },
  ]
  
  rama2_2 = [
    { image: rama1_1, text: "Decides no enfrentar a Mia, ella es consciente de lo que esta haciendo, escribe bajo su propia responsabilidad" },
    { image: rama1_1, text: "Cada vez Mia te esta ganando terreno, cada vez que quieres escribir un nombre, ella ya lo escribio" },
    { image: rama1_1, text: "Esto no te molesta para nada, solo quieres un mundo mejor, seas tu quien lo creé o no" },
    { image: rama1_1, text: 'Ryuk habla contigo sobre que casi no escribes y que Mia es mas interesante que tu, asi que decide irse con ella llevandose la libreta' }, 
    { image: rama1_1, text: 'Esto no te altera, es mas, te pone feliz, para ti son como tomarte unas vacaciones, ahora puedes dormir contento porque sabes que se vendra un mundo mejor' },
    { image: rama1_1, text: 'PANTALLA DE MUERTE' },
  ]
  
  rama3 = [
    { image: rama1_1, text: 'Mia esta enojada contigo, "Si no atacamos, somos debiles" decia, pero tu crees que confrontar directamente a L es un mal plan no importa por donde lo veas' },
    { image: rama1_1, text: "Esto basicamente le deja el camino libre a L, sin un digno rival de su inteligencia, pudo llegar hasta el origen de Kira, descubriendo a Light y Mia en poco tiempo" },
    { image: rama1_1, text: "PANTALLA DE MUERTE" },
  ]
  
  rama4 = [
    { image: rama1_1, text: 'Intentas dialogar con L, tratando de hacerlo entrar en razon para que no cometa una locura' },
    { image: rama1_1, text: "L esta furioso, no quiere dialogar, me mira a los ojos por ultima vez y me dispara" },
    { image: rama1_1, text: "PANTALLA DE MUERTE" },
  ]
  
  rama5 = [
    { image: rama1_1, text: 'Sujetas fuerte a Mia, y empiezas a balancearla hacia el lago. Caen y sobreviven pero quedan en coma' },
    { image: rama1_1, text: "Despiertan 3 dias despues, junto al padre de Light, este les dice que L fue arrestado por intento de homicidio y ya no les va a pasar nada" },
    { image: rama1_1, text: "Mia pierde la memoria de los ultimos dias con Light y no recuerda nada de lo sucedido, Light sonrie y se pregunta que pasara ahora" },
    { image: rama1_1, text: "PANTALLA DE MUERTE" },
  ]
  
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (pantallaMuerte) {
    image(fin1, 0, 0, width, height); // Mostrar la imagen de fin
    muerte(); // Dibuja la interfaz de muerte
    return; // Salir para no dibujar más elementos
  }

    if (rama1Activa) {
    // Mostrar la imagen y el texto de la rama 1
    image(rama1[rama1Pos].image, 0, 0, width, height);
    textSize(32);
    fill(255);
    stroke(0);
    textAlign(CENTER, TOP);
    text(rama1[rama1Pos].text, 0, 50, width); // Mostrar texto de la rama
    if (rama1Pos === 3) {
      decision = true;
      pantallaDecision(); // Dibuja la pantalla de decisión
    } else {
      botonSiguiente(); // Usa el mismo botón para avanzar en la rama1
    }
    console.log(rama1Pos);
    return; // Salir para no dibujar más elementos
  }

if (rama1_2Activa) {
    // Mostrar la imagen y el texto de la rama 1_2
    image(rama1_2[rama1_2Pos].image, 0, 0, width, height);
    textSize(32);
    fill(255);
    stroke(0);
    textAlign(CENTER, TOP);
    text(rama1_2[rama1_2Pos].text, 0, 50, width); // Mostrar texto de la rama
    console.log(rama1_2Pos);
    botonSiguiente();
    
    if(rama1_2Pos === 3){
      decision = true;
      pantallaDecision();
    }
    return; // Salir para no dibujar más elementos
  }
if (rama1_3Activa) {
    // Mostrar la imagen y el texto de la rama 1_3
    image(rama1_3[rama1_3Pos].image, 0, 0, width, height);
    textSize(32);
    fill(255);
    stroke(0);
    textAlign(CENTER, TOP);
    text(rama1_3[rama1_3Pos].text, 0, 50, width); // Mostrar texto de la rama
    console.log(rama1_3Pos);
    botonSiguiente();
    return; // Salir para no dibujar más elementos
  }
  if (rama2Activa) {
    // Mostrar la imagen y el texto de la rama 1_3
    image(rama2[rama2Pos].image, 0, 0, width, height);
    textSize(32);
    fill(255);
    stroke(0);
    textAlign(CENTER, TOP);
    text(rama2[rama2Pos].text, 0, 50, width); // Mostrar texto de la rama
    console.log(rama2Pos);
    botonSiguiente();
    
    if(rama2Pos === 4){
      decision = true;
      pantallaDecision();
    }
    return; // Salir para no dibujar más elementos
  }

if (rama2_1Activa) {
    // Mostrar la imagen y el texto de la rama 1
    image(rama2_1[rama2_1Pos].image, 0, 0, width, height);
    textSize(32);
    fill(255);
    stroke(0);
    textAlign(CENTER, TOP);
    text(rama2_1[rama2_1Pos].text, 0, 50, width); // Mostrar texto de la rama
    botonSiguiente(); // Usa el mismo botón para avanzar en la rama1
      if(rama2_1Pos === 5){
      decision = true;
      pantallaDecision();
    }
    return; // Salir para no dibujar más elementos
  }
  if (rama2_2Activa) {
    // Mostrar la imagen y el texto de la rama 1_3
    image(rama2_2[rama2_2Pos].image, 0, 0, width, height);
    textSize(32);
    fill(255);
    stroke(0);
    textAlign(CENTER, TOP);
    text(rama2_2[rama2_2Pos].text, 0, 50, width); // Mostrar texto de la rama
    botonSiguiente();
    return; // Salir para no dibujar más elementos
  }
  if (rama3Activa) {
    // Mostrar la imagen y el texto de la rama 1_3
    image(rama3[rama3Pos].image, 0, 0, width, height);
    textSize(32);
    fill(255);
    stroke(0);
    textAlign(CENTER, TOP);
    text(rama3[rama3Pos].text, 0, 50, width); // Mostrar texto de la rama
    botonSiguiente();
    return; // Salir para no dibujar más elementos
  }
  if (rama4Activa) {
    // Mostrar la imagen y el texto de la rama 1_3
    image(rama4[rama4Pos].image, 0, 0, width, height);
    textSize(32);
    fill(255);
    stroke(0);
    textAlign(CENTER, TOP);
    text(rama4[rama4Pos].text, 0, 50, width); // Mostrar texto de la rama
    botonSiguiente();
    return; // Salir para no dibujar más elementos
  }

 if (rama5Activa) {
    // Mostrar la imagen y el texto de la rama 1_3
    image(rama5[rama5Pos].image, 0, 0, width, height);
    textSize(32);
    fill(255);
    stroke(0);
    textAlign(CENTER, TOP);
    text(rama5[rama5Pos].text, 0, 50, width); // Mostrar texto de la rama
    botonSiguiente();
    return; // Salir para no dibujar más elementos
  }

  image(inicio[inicioPos].image, 0, 0, width, height);
  console.log(inicioPos);
  textSize(32);
  fill(255);
  stroke(0);
  textAlign(CENTER, TOP);
  text(inicio[inicioPos].text, 0, 50, width);


  if (inicioPos === 2 || inicioPos === 6 || inicioPos === 9 || inicioPos === 13 || inicioPos === 17 || inicioPos === 24 || inicioPos === 27) {
    decision = true;
    pantallaDecision(); // Dibuja los rectángulos y botones de decisión
  } else {
    botonSiguiente(); // Dibuja el botón de avance en otras pantallas
  }
}

function botonSiguiente() {
  fill(0, 0, 255); // Color azul
  rect(width - 75, height - 75, 50, 50); // Dibuja el rectángulo en la esquina inferior derecha
}

function mouseClicked() {
  // Si estamos en pantallaMuerte, volver al inicio y resetear variables
  if (pantallaMuerte) {
    // Reiniciar variables a sus valores iniciales
    inicioPos = 0; // Regresar a la primera imagen
    decision = false; // Reiniciar la decisión
    pantallaMuerte = false; // Desactivar la pantalla de muerte
    rama1Activa = false; // Resetear estado de rama1
    rama1_2Activa = false; // Resetear estado de rama1
    return;
  }

  // Verificar si se hizo clic en la pantalla de decisiones
  if (decision && inicioPos === 2) {
    // Verificar si se hizo clic dentro del rectángulo rojo
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      pantallaMuerte = true; // Activar la pantalla de muerte
    }
    // Verificar si se hizo clic dentro del rectángulo verde
    else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      inicioPos = 3;
      decision = false;
    }
  }
  
   if (decision && inicioPos === 27) {
    // Verificar si se hizo clic dentro del rectángulo rojo
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      rama5Activa = true;
      rama5Pos = 0;
      rama4 = false;
      decision = false;
    }
    // Verificar si se hizo clic dentro del rectángulo verde
    else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      inicioPos++;
      decision = false;
    }
  }
  
  if (decision && inicioPos === 24) {
    // Verificar si se hizo clic dentro del rectángulo rojo
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      inicioPos++;
      decision = false;
    }
    // Verificar si se hizo clic dentro del rectángulo verde
    else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      rama4Activa = true;
      rama4Pos = 0;
      rama3 = false;
      decision = false;
    }
  }
  
    if (decision && inicioPos === 9) {
    // Verificar si se hizo clic dentro del rectángulo rojo
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      inicioPos = 0;
      rama2Pos = 0;
      rama2Activa = true
    }
    // Verificar si se hizo clic dentro del rectángulo verde
    else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      inicioPos++;
      decision = false;
    }
  }
  
  if (inicioPos === 17){
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      inicioPos++;
      decision = false;
    }
    else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      decision = false;
      rama1_2Activa = true;
      rama1_2Pos = 3;
      rama2Activa = false;
    }
  }
  
  if(rama1_2Pos === 3){
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      rama1_2Pos = 0;
      rama1_2Activa = false;
      rama1_3Activa = true;
      decision = false;
    }
    // Verificar si se hizo clic dentro del rectángulo verde
    else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      rama1_2Pos++; // Cambiar a inicio3
      decision = false;
    }
  }
  
   if(rama2_1Pos === 5 && decision){
     if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      rama2_1Pos = 0;
      rama2_1Activa = false;
      rama2_2Activa = true;
    }
    // Verificar si se hizo clic dentro del rectángulo verde
    else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      rama2_1Pos++;
    }
   }
  
   if(rama2Pos === 4 && decision){
     if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      rama2Activa = false;
      rama2_1Pos = 0;
      rama2_1Activa = true;
    }
    // Verificar si se hizo clic dentro del rectángulo verde
    else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      rama2Pos++; // Cambiar a inicio3
    }
   }
  
   if (decision && rama1Pos === 3 && rama1Activa) {
    // Verificar si se hizo clic dentro del rectángulo rojo
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      decision = false;
      rama1Activa = false;
      rama1_2Pos = 0;
      rama1_2Activa = true;
    }
    // Verificar si se hizo clic dentro del rectángulo verde
    else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      rama1Pos++; // Cambiar a inicio3
    }
  }
  
    if (decision && inicioPos === 13) {
    // Verificar si se hizo clic dentro del rectángulo rojo
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      rama3Activa = true;
      decision = false;
    }
    // Verificar si se hizo clic dentro del rectángulo verde
    else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      inicioPos++;
      decision = false;
    }
  }
  
  if (decision && inicioPos === 6) {
    // Verificar si se hizo clic dentro del rectángulo rojo
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      // Mostrar la primera imagen de rama1 y activar el estado de rama1
      decision = false;
      rama1Pos = 0; // Resetear la posición de la rama
      rama1Activa = true; // Activar el estado de rama1
    }
    // Verificar si se hizo clic dentro del rectángulo verde
    else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      inicioPos = inicioPos + 1;
    }
  }
  
  // Verificar si se hizo clic dentro del botón azul
  if (mouseX > width - 75 && mouseX < width - 25 && mouseY > height - 75 && mouseY < height - 25) {
    if (rama1Activa) {
      rama1Pos++; 
    } else if (rama1_2Activa){
      rama1_2Pos++;
    } else if (rama1_3Activa){
      rama1_3Pos++;
    } else if (rama2Activa){
      rama2Pos++;
    } else if (rama2_1Activa){
      rama2_1Pos++;
    } else if (rama2_2Activa){
      rama2_2Pos++;
    } else if (rama3Activa){
      rama3Pos++;
    } else if (rama4Activa){
      rama4Pos++;
    } else if(rama5Activa){
      rama5Pos++;
    }
    else {
      inicioPos++;
    }
  }
}

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
