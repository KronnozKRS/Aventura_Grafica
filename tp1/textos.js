/*function preload() {
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
    { image: inicio4, text: 'Decides leer las reglas, "si escribo el nombre de una persona, morira"' },
    { image: inicio5, text: 'Mas tarde ese mismo dia, te quedas solo en tu escuela estudiando, hasta que derrepente escuchas un ruido extraño' },
    { image: inicio6, text: 'Aparece un Shinigami, te incita a que uses la libreta para asesinar a tu bully que está en el patio, ¿lo haras?' },
    { image: inicio7, text: "Quedas sorprendido del poder de la libreta, imaginandote lo que podrias hacer con esta" },
    { image: inicio7, text: "Llegas a tu casa y empiezas a escribir nombres de criminales" },
    { image: inicio7, text: "Han pasado 2 meses, continuas asesinando criminales y decides autonombrarse como Kira para tus seguidores" },
    { image: inicio7, text: "Estas maravillado con esto, es tanta la ilusion, que estas pensando en contarselo a Mia, tu crush de secundaria, ¿Deberias?" },
    { image: inicio7, text: "Se lo cuentas a Mia, despues de una demostracion de lo que hace la libreta, Mia queda enamorada de tu ideologia" },
    { image: inicio7, text: "En la jefatura de policia, tu padre esta discutiendo con un nuevo detective en el caso de Kira, su nombre es L" },
    { image: inicio7, text: "L es el mejor detective del mundo, con solo una jugada, descubrio que Kira es de Seattle, y que puede matar a distancia" },
    { image: inicio7, text: "Hablas con tu padre y este te cuenta sobre L, estas nervioso por la cantidad de informacion que tienen sobre ti" },
    { image: inicio7, text: "Le cuentas a Mia y ella te dice que amenaces a L con asesinarlo, ¿amenazas a L?" },
    { image: inicio7, text: "Decides que es muy arriesgado y piensas no usar mas la Death Note por un tiempo para que no sospechen de ti. Mia se enoja" },
    { image: inicio7, text: "3 semanas despues sin usar la death note, tus seguidores te buscan, crees que ya es el momento de actuar" },
    { image: inicio7, text: "Piensas en que podrias usar el nombre de Watari, el asistente de L, para que te diga su nombre real, pero es una persona inocente ¿lo haras?" },
    { image: inicio7, text: "Decides escribir su nombre teniendo en cuenta la regla de la DN que dice que si quemas la hoja con un nombre, su muerte no sucedera " },
    { image: inicio7, text: "Watari, siendo controlado por la DN, dice no saber el nombre real de L, pero que ira al hogar adoptivo de L para buscarlo y decirtelo" },
    { image: inicio7, text: "Al dia siguiente, L aparece en medio de la noche mientras cenas con tu padre, confiesa que esta seguro que tu eres Kira y secuestraste a Watari" },
    { image: inicio7, text: "¿Confiesas?" },
    { image: inicio7, text: "Decides quedarte callado, L enfurece por la desaparicion de su compañero, intenta atacarte pero tu padre lo detiene" },
    { image: inicio7, text: "L se va escoltado por la policia, empiezas a dudar de tus propias decisiones" },
    { image: inicio7, text: "Vas al baile de graduacion con Mia, pero Watari te llama, esta por descubrir el nombre de L, pero se oyen disparos al otro lado del telefono" },
    { image: inicio7, text: "Te apresuras a buscar la hoja con el nombre de Watari para quemarla, pero esta fue arrancada de la libreta" },
    { image: inicio7, text: "Escuchas el ultimo suspiro de Watari, estas frustado, ¿Encaras a Ryuk por la hoja arrancada misteriosamente?" },
    { image: inicio7, text: "Ryuk te dice que el no fue, eso te deja con una unica sospechosa, Mia, decides ir con ella y enfrentarla por una ultima vez" },
    { image: inicio7, text: "Cuando culpas a mia, ella confiesa que si fue ella, y te muestra que escribio tu nombre tambien, y moriras si no le entregas la libreta en el parque de atracciones" },
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
  ];
}*/
