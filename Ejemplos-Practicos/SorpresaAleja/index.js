function listaFrases() {
  var frases = [
    "Me enncantan tus ojos",
    "Me encanta tu compania",
    "No quiero a nadie que no seas tu",
    "Eres muy especial para mi",
    "Ya quiero abrasarte",
    "Te quiero comer a besitos",
    "Abashooooooo",
    "Te extranio no importa cuando lo leas",
    "No hay nadie mas que tu en este momento",
    "Le das brillo a mi vida",
    "Aunque todo sea curioso, me encata que seas tu",
    "Me encantas",
    "Eres mi bebe",
    "Eres mi consentida",
    "Eres mi ninia",
    "Mi consentida",
    "Mi bebe hermosa",
    "Mi amor",
    "Con esos ojos como no enamorarse",
    "No hay nadie como tu",
    "Tu me das paz",
    "Ya quiero abrazarte",
    "Y si nos escapamos un ratito al parque",
    "No quiero a naddie que no seas tu",
    "Amor amo amo amo estr a tu lado",
    "Que seamos uno para el otro es perfecto",
    "Mi casi novia <3",
    "Si no es contigo no es con nadie",
    "La chica que me robo el corazon",
    "La chica que me robo el suspiro",
  ];
  return frases[Math.floor(Math.random() * frases.length)];
}

function fraseAleatoria() {
  document.getElementById("pPrecio").innerHTML = listaFrases();
}
