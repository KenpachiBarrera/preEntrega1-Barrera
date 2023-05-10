let NombeClienta = prompt ("Ingresa tu Nombre")
const articulo1 = "Anillo Chapa de Oro"
let articulo2 = "Collare de corzanes"
let articulo3 = "Puelsera con estrellas"
let articulo4 = "Pulsera de luna"

let consultaArticulo = prompt(`Hola ${NombeClienta} 

¿de que articulo te gustaria saber el costo?

1: ${articulo1}
2: ${articulo2}
3: ${articulo3}
4: ${articulo4}

Pulsa aceptar para continuar`)

switch (consultaArticulo) {
    case "1":
        alert(`El ${articulo1} tiene un valor de $20`)
        
        break;//
    case "2":
        alert(`El ${articulo2} tiene un valor de $50`)
        
        break;
    case "3":
        alert(`La ${articulo3} tiene un valor de $30`)
          
            break;
    case "4":
        alert(`La ${articulo4} tiene un valor de $30`)
          
            break;
    default:
        alert("No se encontro ninguna opcion valida")
        break;
}

let consultaStock = Number(prompt(` ${NombeClienta} ingresa la cantida de piezas a agregar a tu carrito`))
const cantidadArticulosStocks = 5;

// Condición: Si la cantidad de artículos es menor o igual al stock disponible, se considera válido
if (consultaStock <= cantidadArticulosStocks) {
  console.log(`${NombeClienta} la cantidad de ${consultaStock} esta disponible para compra`);
} else if (consultaStock >= cantidadArticulosStocks) {
  console.log(`${NombeClienta} la cantidad de ${consultaStock} no esta disponible para compra`);
} else {
    console.log(`${NombeClienta} error en la captura`)
}

//Ciclos For -> Uso de una calculadora sumando el total de precios
const cantidadProductos = 3; // Cantidad de productos en la compra
let total = 0;

for (let i = 0; i < cantidadProductos; i++) {
  let precio = Number(prompt(`Ingrese el precio del producto ${i + 1}:`));
  total += precio;
}

console.log(`Total de la compra: $${total}`);