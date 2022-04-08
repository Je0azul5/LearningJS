var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "laptop", costo: 20000 },
  { nombre: "teclado", costo: 500 },
  { nombre: "audifonos", costo: 1700 },
];

//longitud
numeros.length;

//posision especifica --> 3
numeros[2];

//inster last in an array
numeros.push(12);

// eliminar el ultimo elemento
numeros.pop();

//agregar un elemento al medio
numeros.unshift(23);

// eliminar elemento del inicio del inicio

numeros.shift();

// saber posision del array

numeros.indexOf();

// filter funciona con funciones filtra
var numeroPares = numeros.filter(function (numero) {
  return numero % 2 == 0;
});

// map mapea los articulso

var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

// find encuentra un elemento del

var encontrarBici = articulos.find(function (articulo) {
  return articulo.nombre === "Bici";
});

//for each hace un for,
articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

// some valida si hay alguno con esa validacion
var losbaratos = articulos.some(function (articulo) {
  return articulo.costo <= 500;
});
