let juegos = [];

function agregarJuego() {
  let titulo = prompt("Ingrese el nombre del videojuego a vender:");
  let consola = prompt("Ingrese la plataforma del videojuego (Nintendo, Playstation, Xbox, Sega, etc):");
  let valor = parseFloat(prompt("Ingrese el valor del videojuego:"));

  if (!titulo || !consola || isNaN(valor) || valor <= 0) {
    console.log("Entrada inválida. Por favor, intente de nuevo.");
    return agregarJuego();
  }

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
  juegos.forEach(juego => {
    console.log(`- ${juego.titulo} (${juego.consola}): ${juego.valor}`);
  });
}

function calcularTotal() {
  return juegos.reduce((total, juego) => total + juego.valor, 0);
}

function mostrarTotal() {
  console.log(`El valor total de tus videojuegos en venta es: ${calcularTotal()}`);
}

agregarJuego();