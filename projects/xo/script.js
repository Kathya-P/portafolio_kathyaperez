let turno = "X";
let tablero = ["", "", "", "", "", "", "", "", ""];
let jugando = true;

let puntosX = 0;
let puntosO = 0;

let jugadorX = "";
let jugadorO = "";

let colorX = "#11131a";
let colorO = "#1f1724";

function empezarJuego() {
  const nombre1 = document.getElementById("jugador1").value.trim() || "Jugador 1";
  const ficha = document.getElementById("fichaJugador1").value;
  const color1 = document.getElementById("colorJugador1").value;
  const nombre2 = document.getElementById("jugador2").value.trim() || "Jugador 2";
  const color2 = document.getElementById("colorJugador2").value;

  const colores = {
    negro: "#11131a",
    rojo: "#3b0d14",
    verde: "#0f2c24",
    azul: "#10263f"
  };

  const coloresOscuros = {
    negro: "#09090b",
    rojo: "#24070d",
    verde: "#0a1c17",
    azul: "#0a1728"
  };

  if (ficha === "X") {
    jugadorX = nombre1;
    jugadorO = nombre2;
    colorX = colores[color1];
    colorO = color1 === color2 ? coloresOscuros[color2] : colores[color2];
  } else {
    jugadorX = nombre2;
    jugadorO = nombre1;
    colorO = colores[color1];
    colorX = color1 === color2 ? coloresOscuros[color2] : colores[color2];
  }

  document.getElementById("nombreX").textContent = "☠️ " + jugadorX;
  document.getElementById("nombreO").textContent = "💀 " + jugadorO;

  document.getElementById("inicio").style.display = "none";
  document.getElementById("juego").style.display = "block";

  actualizarColorFondo(turno);
  crearTablero();
  actualizarMensaje();
}

function crearTablero() {
  const contenedor = document.getElementById("tablero");
  contenedor.innerHTML = "";
  tablero = ["", "", "", "", "", "", "", "", ""];

  for (let i = 0; i < 9; i++) {
    const celda = document.createElement("div");
    celda.className = "celda";
    celda.setAttribute("data-index", i);
    celda.onclick = function () {
      const indice = Number(this.getAttribute("data-index"));
      clickCelda(indice, this);
    };
    contenedor.appendChild(celda);
  }
}

function clickCelda(i, celda) {
  if (!jugando || tablero[i] !== "") {
    return;
  }

  tablero[i] = turno;
  celda.textContent = turno === "X" ? "☠️" : "💀";

  if (verificarGanador()) {
    mostrarGanador(turno);
    jugando = false;
    return;
  }

  if (tablero.indexOf("") === -1) {
    document.getElementById("mensaje").textContent = "Empate. Nadie escapó del destino.";
    sacudirPantalla();
    return;
  }

  turno = turno === "X" ? "O" : "X";
  actualizarColorFondo(turno);
  actualizarMensaje();
}

function verificarGanador() {
  const combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return combos.some(([a, b, c]) => tablero[a] !== "" && tablero[a] === tablero[b] && tablero[a] === tablero[c]);
}

function mostrarGanador(fichaGanadora) {
  let nombreGanador = "";
  let nombrePerdedor = "";

  if (fichaGanadora === "X") {
    nombreGanador = jugadorX;
    nombrePerdedor = jugadorO;
    puntosX += 1;
    document.body.style.backgroundColor = colorX;
  } else {
    nombreGanador = jugadorO;
    nombrePerdedor = jugadorX;
    puntosO += 1;
    document.body.style.backgroundColor = colorO;
  }

  document.getElementById("puntosX").textContent = puntosX;
  document.getElementById("puntosO").textContent = puntosO;
  document.getElementById("mensaje").innerHTML =
    `<strong>${nombreGanador}</strong> ganó la partida.<br><span>${nombrePerdedor}, será en la próxima.</span>`;
}

function actualizarMensaje() {
  const nombreTurno = turno === "X" ? jugadorX : jugadorO;
  const icono = turno === "X" ? "☠️" : "💀";
  document.getElementById("mensaje").textContent = `Turno de: ${icono} ${nombreTurno}`;
}

function actualizarColorFondo(turnoActual) {
  document.body.style.backgroundColor = turnoActual === "X" ? colorX : colorO;
}

function reiniciarJuego() {
  jugando = true;
  turno = "X";
  actualizarColorFondo(turno);
  crearTablero();
  actualizarMensaje();
}

function rendirse() {
  puntosX = 0;
  puntosO = 0;

  document.getElementById("puntosX").textContent = "0";
  document.getElementById("puntosO").textContent = "0";

  document.getElementById("juego").style.display = "none";
  document.getElementById("inicio").style.display = "block";
  document.body.style.backgroundColor = "#11131a";
}

function sacudirPantalla() {
  const body = document.body;
  let pos = 0;

  const intervalo = setInterval(() => {
    pos = pos === 0 ? 4 : 0;
    body.style.marginLeft = pos + "px";
  }, 50);

  setTimeout(() => {
    clearInterval(intervalo);
    body.style.marginLeft = "0px";
  }, 400);
}