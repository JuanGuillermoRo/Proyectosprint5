let btn = document.getElementById('btn');
let output = document.getElementById('output');

let quotes = [
  '"The best preparation for tomorrow is doing your best today."',
  '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."',
  '"No hay que ir para atrás ni para darse impulso (Lao Tsé)"',
  '"La vida es una serie de momentos que se acercan y se alejan, y cada momento es una oportunidad para crear un nuevo sentimiento."',
  "' Cada día sabemos más y entendemos menos (Albert Einstein)'",
  "'Lo que importa verdaderamente en la vida no son los objetivos que nos marcamos, sino los caminos que seguimos para lograrlo (Peter Bamm)'",
  "' De todos los animales de la creación el hombre es el único que bebe sin tener sed, come sin tener hambre y habla sin tener nada que decir (John Steinbeck)',",
  "' Ninguna persona merece tus lágrimas, y quien se las merezca no te hará llorar (Gabriel García Márquez)'",
  "'Hace falta toda una vida para aprender a vivir (Séneca)'",
  "'Estos son mis principios y si no te gustan, tengo otros (Groucho Marx)'",
  "'Es mejor permanecer callado y parecer tonto que hablar y despejar las dudas definitivamente (Groucho Marx)'"];


let quotes_inspiration = [
    "El único modo de hacer un gran trabajo es amar lo que haces - Steve Jobs",
    "Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo - Michael Jordan",
    "El éxito es el resultado de la esperanza - Albert Einstein",
    "El dinero no es la clave del éxito; la libertad para poder crear lo es - Nelson Mandela",
    "El éxito no es el resultado de la esperanza, sino de la perseverancia - Groucho Marx",
    "Cuanto más duramente trabajo, más suerte tengo - Gary Player",
    "La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica - Aristóteles",
    "El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu - Helena Rubinstein",
    "Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan - Elon Musk",
    "Cuando pierdas, no pierdas la lección - Dalai Lama",
    "No importa lo que te diga la gente, las palabras y las ideas pueden cambiar el mundo - Robin Williams"
];

let inspiration_english = [  
~"The best preparation for tomorrow is doing your best today.",
~"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
~"The man who does not read books has no advantage over the one who cannot read them.",
 "Teachers can open the door, but you must enter it yourself.” — Chinese Proverb",
 "The beautiful thing about learning is that no one can take it away from you.” — B.B. King",
 "Education is the most powerful weapon you can use to change the world.” — BB King",
 "The mind is not a vessel to be filled but a fire to be ignited.” – Plutarch",
 "Don’t let what you cannot do interfere with what you can do.",
 "A person who never made a mistake never tried anything new. — Albert Einstein",
 "Learning is never done without errors and defeat.” – Vladimir Lenin",
 "You don’t have to be great to start, but you have to start to be great.” – Zig Ziglar",
 "I find that the harder I work, the more luck I seem to have.” – Thomas Jefferson"

]


function generate_quotes() {  // Función que genera una cita aleatoria
  var randomQ = quotes[Math.floor(Math.random() * quotes.length)];  // Selecciona una cita aleatoria de la lista
  output.innerHTML = randomQ;  // Imprime la cita 
}

function generate_inspiration() {  // Función que genera una cita aleatoria
  var randomQ = quotes_inspiration[Math.floor(Math.random() * quotes_inspiration.length)];  // Selecciona una cita aleatoria de la lista
  output.innerHTML = randomQ;  // Imprime la cita 
}

function generate_inspiration_eng() {  // Función que genera una cita aleatoria
  var randomQ = inspiration_english[Math.floor(Math.random() * inspiration_english.length)];  // Selecciona una cita aleatoria de la lista
  output.innerHTML = randomQ;  // Imprime la cita 
}


/*function screen_size(x){
  if (x.matches) { // If media query matches
    document.body.style.backgroundImage = "url(tealights-ga82b1337e_640.jpg)";
  }
  else if (x.matches){
    document.body.style.backgroundImage = "url(sunset-g9566f0403_1280.jpg)";
  }

  else{
    document.body.style.backgroundImage = "url(tree-g69857a74a_1280.jpg)";
  }
}

var x = window.matchMedia("(max-width: 700px)")
screen_size(x) // Call listener function at run time
x.addListener(screen_size) // Attach listener function on state changes*/