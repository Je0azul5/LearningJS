function precioDescuento(precio, descueto) {
  return (precioFinals = precio * ((100 - descueto) / 100));
}

function calcularDescuento() {
  const precio = document.getElementById("inprice").value;
  const descueto = document.getElementById("inpercentage").value;

  document.getElementById("pPrecio").innerHTML =
    "El valor es " + precioDescuento(precio, descueto);
}
