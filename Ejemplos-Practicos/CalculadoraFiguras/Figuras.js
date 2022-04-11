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

//funciones de llamada cuadrado

function calcularPerimeterCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  window.alert(perimetroCuadrado(value));
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  window.alert(areaCuadrado(value));
}
//funciones de llamada triangulo
function calcularAreaTriangulo() {
  const input1 = document.getElementById("inputTriangulo").value;
  const base = document.getElementById("inputTriangulo2").value;

  const h = Math.sqrt(
    (Number(base) / 2) * (Number(base) / 2) - Number(input1) * Number(input1)
  );

  window.alert(Number(h));
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("inputTriangulo").value;
  const input2 = document.getElementById("inputTriangulo1").value;
  const base = document.getElementById("inputTriangulo2").value;

  window.alert(
    perimetroTriangulo(Number(input1), Number(input2), Number(base))
  );
}
