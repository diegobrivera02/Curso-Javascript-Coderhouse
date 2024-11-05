let juegos = JSON.parse(localStorage.getItem("juegos")) || [];

function agregarJuego() {
  const titulo = document.getElementById("tituloInput").value.trim();
  const consola = document.getElementById("consolaInput").value.trim();
  const valor = parseFloat(document.getElementById("valorInput").value);

  
  if (!titulo || !consola || isNaN(valor) || valor <= 0) {
    alert(
      "Entrada inválida. Por favor, complete todos los campos correctamente."
    );
    return;
  }

  const juego = { titulo, consola, valor };
  juegos.push(juego);
  localStorage.setItem("juegos", JSON.stringify(juegos));

  document.getElementById("tituloInput").value = "";
  document.getElementById("consolaInput").value = "";
  document.getElementById("valorInput").value = "";

  mostrarJuegos();
  mostrarTotal();
}

function mostrarJuegos() {
  const gameList = document.getElementById("gameList");
  gameList.innerHTML = "";

  juegos.forEach((juego, index) => {
    const li = document.createElement("li");
    li.textContent = `${juego.titulo} (${
      juego.consola
    }): $${juego.valor.toFixed(2)}`;
    li.appendChild(createDeleteButton(index));
    gameList.appendChild(li);
  });
}

function createDeleteButton(index) {
  const button = document.createElement("button");
  button.textContent = "Eliminar";
  button.addEventListener("click", () => {
    deleteGame(index);
  });
  return button;
}

function deleteGame(index) {
  juegos.splice(index, 1); 
  localStorage.setItem("juegos", JSON.stringify(juegos));
  mostrarJuegos();
  mostrarTotal();
}

function calcularTotal() {
  return juegos.reduce((total, juego) => total + juego.valor, 0);
}

function mostrarTotal() {
  document.getElementById(
    "totalValue"
  ).textContent = `El valor total de tus videojuegos en venta es: $${calcularTotal().toFixed(
    2
  )}`;
}

document
  .getElementById("addGameButton")
  .addEventListener("click", agregarJuego);

mostrarJuegos();
mostrarTotal();