//Abstraccion de objetos

var Auto = {
  marca: "BMW",
  modelo: "z4",
  year: "2018",
  detalle: function () {
    return `El auto es modelo .... ${this.model} ${this.year}`;
  },
};
Auto.marca;
Auto.detalle();



//-----------------------CLASE---------------------------------------
class Auto {
    constructor(marca, modelo, year, detalle) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.detalle = detalle;
    }
}

var automovil = [];

function addAuto(marca, modelo, year, detalle) {
    var auto=new Auto(marca, modelo, year, detalle);
    automovil.push(auto);
   return automovil;
 }

 addAuto("automovil", "modelo", 2012, "detalle")