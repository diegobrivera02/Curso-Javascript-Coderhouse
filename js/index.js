let juegos = [];

function agregarJuego() {
  let titulo = prompt("Ingrese el nombre del videojuego a vender:");
  let consola = prompt("Ingrese la plataforma del videojuego (Nintendo, Playstation, Xbox, Sega, etc):");
  let valor = parseFloat(prompt("Ingrese el valor del videojuego:"));

  let juego = {
    titulo,
    consola,
    valor
  };

  juegos.push(juego);
  console.log(`Se agregó el videojuego ${titulo} (${consola}) con un valor de ${valor}`);

  let respuesta = prompt("¿Desea agregar otro videojuego? (si/no):");
  if (respuesta.toLowerCase() === "si") {
    agregarJuego();
  } else {
    mostrarJuegos();
    mostrarTotal();
  }
}

function mostrarJuegos() {
  console.log("Tus videojuegos en venta:");
  for (let i = 0; i < juegos.length; i++) {
    console.log(`- ${juegos[i].titulo} (${juegos[i].consola}): ${juegos[i].valor}`);
  }
}

function calcularTotal() {
  let total = 0;
  for (let i = 0; i < juegos.length; i++) {
    total += juegos[i].valor;
  }
  return total;
}

function mostrarTotal() {
  console.log(`El valor total de tus videojuegos en venta es: ${calcularTotal()}`);
}
agregarJuego();