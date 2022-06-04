let listaNumeros = [0];

const pedirLista = (lista) => (listaNumeros = lista);

const reducer = (acumulate, current) => current + acumulate;

function suma() {
  return listaNumeros.reduce(reducer);
}

function promedioLista() {
  return suma() / listaNumeros.length;
}
