var numeros = [1, 2, 3, 4, 5];

//Muestra el array en el log
function contar(numeros) {
  console.log(`Hola, ${numeros}`);
}

for (var i = 0; i < numeros.length; i++) {
  console.log(contar(numeros[i]));
}

for (var numero of numeros) {
  console.log(contar(numero));
}

var i = 0;
while (i < 0) {

    contar(numeros[i]);
    i++;
}
