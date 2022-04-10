//Abstraccion
//Cuadrado
const perimetroCuadrado = (lado) => 4 * lado;
const areaCuadrado = (lado) => lado * lado;
// Triangulo

const perimetroTriangulo = (ladoUno, ladoDos, base) => ladoUno + ladoDos + base;
const areaTriangulo = (altura, base) => (base * altura) / 2;

// Circulo

const diameter = (radio) => radio * 2;
const perimetroCirculo = (radio) => diameter(radio) * Math.PI;
const areaCirculo = (radio) => radio * radio * Math.PI;

//----------------------------------------------------------------
/*

// Cuadrado
console.group("Grupo cuadrado");
 const ladoCuadrado = 5;
const perimetroCuadrado = 4 * ladoCuadrado;
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(ladoCuadrado + " " + perimetroCuadrado + " " + areaCuadrado);


//console.log( perimetroCuadrado + " " + areaCuadrado);

console.groupEnd();
//Triangulo
console.group("Grupo Triangulo");
 const ladoTriangulo = 6;
const ladoTrianguloDos = 6;
const base = 4;
const altura = 5.5;
console.log(ladoTriangulo + " " + ladoTrianguloDos + " " + base);
const perimetroTriangulo = ladoTriangulo + ladoTrianguloDos + base;
console.log("Perimetro" + " " + perimetroTriangulo);
const areaTriangulo = (base * altura) / 2;
console.log("Area" + " " + areaTriangulo); 

console.groupEnd();
//Circulo
console.group("Grupo circulo");

const radio = 4;
const diameter = radio * 2;
const pi = Math.PI;

const permetroCirculo = diameter * pi;
const areaCirculo = radio * radio * pi;

console.log(
  radio + " " + diameter + " " + pi + " " + permetroCirculo + " " + areaCirculo
); 

console.groupEnd();
 */
