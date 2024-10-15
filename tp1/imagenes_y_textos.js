function preload() {
  
  let presentacion = loadImage('assets/presentacion.png');
  let inicio1 = loadImage('assets/inicio1.png');
  let inicio2 = loadImage('assets/inicio2.jpg');
  let inicio3 = loadImage('assets/inicio3.png');
  let inicio4 = loadImage('assets/inicio4.png');
  let inicio5 = loadImage('assets/inicio5.png');
  let inicio6 = loadImage('assets/inicio6.png');
  let inicio7 = loadImage('assets/inicio7.png');
  let inicio8 = loadImage('assets/inicio8.jpeg');
  let inicio9 = loadImage('assets/inicio9.jpeg');
  let inicio10 = loadImage('assets/inicio10.jpeg');
  let inicio11 = loadImage('assets/inicio11.jpeg');
  let inicio12 = loadImage('assets/inicio12.jpeg');
  let inicio13 = loadImage('assets/inicio13.jpeg');
  let inicio14 = loadImage('assets/inicio14.jpeg');
  let inicio15 = loadImage('assets/inicio15.jpeg');
  let inicio16 = loadImage('assets/inicio16.jpeg');
  let inicio17 = loadImage('assets/inicio17.jpeg');
  let inicio18 = loadImage('assets/inicio18.jpeg');
  let inicio19 = loadImage('assets/inicio19.jpeg');
  let inicio20 = loadImage('assets/inicio20.jpeg');
  let inicio21 = loadImage('assets/inicio21.jpeg');
  let inicio22 = loadImage('assets/inicio22.jpeg');
  let inicio23 = loadImage('assets/inicio23.jpeg');
  let inicio24 = loadImage('assets/inicio24.jpeg');
  let inicio25 = loadImage('assets/inicio25.jpeg');
  let inicio26 = loadImage('assets/inicio26.jpeg');
  let inicio27 = loadImage('assets/rama1_1.png');
  let inicio28 = loadImage('assets/inicio28.jpeg');
  let inicio29 = loadImage('assets/inicio29.jpeg');
  let inicio30 = loadImage('assets/inicio30.jpeg');
  
  let rama1_2_1 = loadImage('assets/rama1_2_1.jpeg');
  let rama1_2_2 = loadImage('assets/rama1_2_2.jpeg');
  let rama1_2_3 = loadImage('assets/rama1_2_3.jpeg');
  let rama1_2_4 = loadImage('assets/rama1_2_4.jpeg');
  let rama1_2_5 = loadImage('assets/rama1_2_5.jpeg');
  let rama1_2_6 = loadImage('assets/rama1_2_6.jpeg');
  
  let rama1_3_1 = loadImage('assets/rama1_3_1.jpeg');
  let rama1_3_2 = loadImage('assets/rama1_3_2.jpeg');
  let rama1_3_3 = loadImage('assets/rama1_3_3.jpeg');
  let rama1_3_4 = loadImage('assets/rama1_3_4.jpeg');
  let rama1_3_5 = loadImage('assets/rama1_3_5.jpeg');

  rama1_1 = loadImage('assets/rama1_1.png');
  fin1 = loadImage('assets/fin1.png');
  
  inicio = [
    { image: presentacion, text: "Death note \nLa libreta mortal" },
    { image: inicio1, text: "Te llamas Light, tienes 17 años,\neres un nerd sin amigos" },
    { image: inicio2, text: "Un día como cualquier otro,\nves una libreta cayendo desde el cielo \n¿la levantas?" },
    { image: inicio3, text: "La levantas y lees que se llama \n'Death Note'" },
    { image: inicio4, text: 'Lees las reglas de la libreta, descubriendo su poder mortal' },
    { image: inicio5, text: 'Mas tarde ese mismo dia, te quedas solo en tu escuela estudiando, hasta que derrepente escuchas un ruido extraño' },
    { image: inicio6, text: 'aaaaaaAparece un Shinigami, te incita a que uses la libreta para asesinar a tu bully que está en el patio, ¿lo haras?' },
    { image: inicio7, text: "Quedas sorprendido del poder de la libreta, imaginandote lo que podrias hacer con esta" },
    { image: inicio8, text: "Llegas a tu casa y empiezas a escribir nombres de criminales, decides autonombrarse como Kira" },
    { image: inicio9, text: "Estas maravillado con esto, es tanta la ilusion, que estas pensando en contarselo a Mia, tu crush de secundaria, ¿Deberias?" },
    { image: inicio10, text: "Se lo cuentas a Mia, despues de una demostracion de lo que hace la libreta, Mia queda enamorada de tu ideologia" },
    { image: inicio11, text: "En la jefatura de policia, tu padre esta discutiendo con un nuevo detective en el caso de Kira, su nombre es L" },
    { image: inicio12, text: "L es el mejor detective del mundo, con solo una jugada, descubrio que Kira es de Seattle, y que puede matar a distancia" },
    { image: inicio13, text: "Le cuentas a Mia y ella te dice que amenaces a L, ¿Lo haces?" },
    { image: inicio14, text: "Piensas en que podrias usar a Watari, el asistente y padre adoptivo de L, para que te diga su nombre real" },
    { image: inicio15, text: "Watari, siendo controlado por la DN, dice no saber el nombre real de L, pero que ira al hogar adoptivo de L para buscarlo y decirtelo" },
    { image: inicio16, text: "Al dia siguiente, L aparece en medio de la noche mientras cenas con tu padre, confiesa que esta seguro que tu eres Kira y secuestraste a Watari" },
    { image: inicio17, text: "¿Confiesas?" },
    { image: inicio18, text: "L se va escoltado por la policia, empiezas a dudar de tus propias decisiones" },
    { image: inicio19, text: "Vas al baile de graduacion con Mia, pero Watari te llama, esta por descubrir el nombre de L, pero se oyen disparos al otro lado del telefono" },
    { image: inicio20, text: "Escuchas el ultimo suspiro de Watari, estas frustado" },
    { image: inicio21, text: "Cuando culpas a Mia, ella te muestra que escribio tu nombre tambien, y moriras si no le entregas la libreta en el parque de atracciones" },
    { image: inicio22, text: "A todo esto, a L ya le informaron de la muerte de Watari, asi que va a buscarte para asesinarte" },
    { image: inicio23, text: "Llega donde estas, exaltado y con un arma, tu lo ves a lo lejos mientras vas a buscar la Death Note" },
    { image: inicio24, text: "¿Te frenas a hablar con el?" },
    { image: inicio25, text: "Empiezas a huir, te encuentras con Mia, ambos suben a la rueda de la fortuna, intentas convencerla de que no la tome,pero no lo hace" },
    { image: inicio26, text: "Se acerca la hora de tu muerte, confiesas haber escrito su nombre, si no te devuelve la DN, ambos moriran, la rueda de la fortuna empieza a desmoronarse" },
    { image: inicio27, text: "Ambos quedan colgados de la rueda de la fortuna, tienes la opcion de soltar a mia, ¿La sueltas?" },
    { image: inicio28, text: "Mia cae en el cemento del parque de atracciones, muriendo instantaneamente mientras que tu caes en el lago, salvando tu vida" },
    { image: inicio29, text: "3 dias despues del coma, tu despiertas junto a tu padre, este te confiesa que L fue esposado por intento de homicidio y que no lo volveras a ver" },
    { image: inicio30, text: "¿Sera este el final de L? \n\nCONTINUARA" },
  ];

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
    { image: rama1_2_1, text: "Decides no matar a tu padre, incluso tu tienes un limite" },
    { image: rama1_2_2, text: "L mira las noticias, observando como la persona mas egoista del mundo, osea Kira, no intentó asesinar a un simple policia" },
    { image: rama1_2_3, text: "Esto claramente levanta sospechas sobre ti, despues de todo, es tu padre, tiene sentido que no lo mataras" },
    { image: rama1_2_4, text: 'Tu padre viene esa noche a cenar, te pregunta, el porque Kira puede matar a tantas personas, pero no puede a un simple policia, ¿te confiesas?' }, 
    { image: rama1_2_5, text: 'Decides contarle, tu padre queda atonito ante tal noticia' },
    { image: rama1_2_6, text: 'Aun con lagrimas en los ojos, decide esposarte y llevarte a prision, Ryuk no va a querer estar atado a ti, asi que escribe tu nombre y mueres' },
    { image: rama1_1, text: 'PANTALLA DE MUERTE' },
  ]
  
  rama1_3 = [
    { image: rama1_3_1, text: "Decides quedarte en silencio escuchando a tu padre quejandose" },
    { image: rama1_3_2, text: "Sabes que esto es una prueba mas que creible para ser el primer candidato a ser Kira" },
    { image: rama1_3_3, text: "Tienes solo 17 años, empiezas a reflexionar y caes en cuenta de que no eres Dios, no decides quien vive y quien muere" },
    { image: rama1_3_4, text: 'tratas de olvidar la libreta, no es bueno para tí y lo sabes, intentas dar borron y cuenta nueva' }, 
    { image: rama1_3_5, text: 'Pasan 13 dias sin escribir, y segun las reglas de la DN, te olvidas de ella, Ryuk te deja y ahora te toca llevar un peso que ni tu recuerdas por que' },
    { image: rama1_1, text: 'PANTALLA DE MUERTE' },
  ]
  
  rama1_4 = [
    { image: rama1_1, text: 'Empiezas a utilizar a Ryuk para que entierre partes de la DN por todo el mundo con la excusa de que esto lo va a entretener mas, y una dotacion mas grande de manzanas' },
    { image: rama1_1, text: "Antes de asesinar a los criminales, los obligas a que ellos escriban nombres de criminales y que se la vayan pasando en un constante bucle de dar la DN, matarse, y que el siguiente haga lo mismo" },
    { image: rama1_1, text: "Esto sin duda fue una de tus mas grandes estrategias, la policia de todo el mundo esta confundida sobre como lidiar con Kira ahora, los asesinatos no paran de subir" },
    { image: rama1_1, text: "Ryuk te mira sorprendido por tu plan, opina que eres el perfecto usuario de la DN" },
    { image: rama1_1, text: "PANTALLA DE MUERTE" },
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
    { image: rama1_1, text: 'Esto no te altera, es mas, te pone feliz, para ti son como tomarte unas vacaciones, ahora puedes dormir contento porque sabes que se vendra un mundo mejor gracias a Mia' },
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
