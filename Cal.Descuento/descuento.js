// !Escribe un programa que pregunte el precio, el tanto por ciento de descuento, y te diga
// !el precio con descuento. Por ejemplo, si el precio que introduce el usuario es 300 y el
// !descuento 20, el programa dirá que el precio final con descuento es de 240.


function calcularPrecioConDescuento() {
    const precio = parseFloat(document.getElementById('precio').value);
     const descuento = parseFloat(document.getElementById('descuento').value);
  
     const precioConDescuento = precio * (1 - (descuento / 100));

     document.getElementById('resultadocondescuento').innerText = `El precio final con descuento es: $${precioConDescuento.toFixed(2)}`;
   }