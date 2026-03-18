// Variables del juego
let turno = "X"; // Jugador que empieza
let tablero = ["", "", "", "", "", "", "", "", ""]; // Espacios vacíos
let jugando = true; // Indica si el juego está activo

let puntosX = 0; // Puntos jugador X
let puntosO = 0; // Puntos jugador O

let jugadorX = ""; // Nombre del jugador que es X
let jugadorO = ""; // Nombre del jugador que es O

let colorX = "#000"; // Color del jugador X
let colorO = "#111"; // Color del jugador O

// Iniciar el juego después de llenar los datos
function empezarJuego() {
  const nombre1 = document.getElementById("jugador1").value;
  const ficha = document.getElementById("fichaJugador1").value;
  const color1 = document.getElementById("colorJugador1").value;
  const nombre2 = document.getElementById("jugador2").value;
  const color2 = document.getElementById("colorJugador2").value;

  // Colores normales
  const colores = {
    negro: "#000000",
    rojo: "darkred",
    verde: "darkgreen",
    azul: "darkblue"
  };

  // Colores más oscuros por si los dos eligen igual
  const coloresOscuros = {
    negro: "#111111",
    rojo: "#330000",
    verde: "#003300",
    azul: "#000033"
  };

  // Asignar nombres y colores según ficha elegida
  if (ficha === "X") {
    jugadorX = nombre1;
    jugadorO = nombre2;
    colorX = colores[color1];
    colorO = (color1 === color2) ? coloresOscuros[color2] : colores[color2];
  } else {
    jugadorX = nombre2;
    jugadorO = nombre1;
    colorO = colores[color1];
    colorX = (color1 === color2) ? coloresOscuros[color2] : colores[color2];
  }

  // Mostrar nombres en la pantalla del juego
  document.getElementById("nombreX").textContent = "☠️ " + jugadorX;
  document.getElementById("nombreO").textContent = "💀 " + jugadorO;

  // Cambiar pantalla y comenzar
  document.getElementById("inicio").style.display = "none";
  document.getElementById("juego").style.display = "block";

  actualizarColorFondo(turno);
  crearTablero();
  actualizarMensaje();
}

// Crear las casillas del tablero
function crearTablero() {
  const contenedor = document.getElementById("tablero");
  contenedor.innerHTML = "";
  tablero = ["", "", "", "", "", "", "", "", ""];

  for (let i = 0; i < 9; i++) {
    const celda = document.createElement("div");
    celda.className = "celda";
    celda.setAttribute("data-index", i);
    celda.onclick = function () {
      const indice = parseInt(this.getAttribute("data-index"));
      clickCelda(indice, this);
    };
    contenedor.appendChild(celda);
  }
}

// Acción al hacer clic en una casilla
function clickCelda(i, celda) {
  if (!jugando || tablero[i] !== "") {
    return;
  }

  tablero[i] = turno;

  if (turno === "X") {
    celda.innerHTML = "☠️";
  } else {
    celda.innerHTML = "💀";
  }

  if (verificarGanador()) {
    mostrarGanador(turno);
    jugando = false;
    return;
  }

  if (tablero.indexOf("") === -1) {
    document.getElementById("mensaje").textContent = "Nadie escapó del destino...";
    sacudirPantalla();
    return;
  }

  turno = (turno === "X") ? "O" : "X";
  actualizarColorFondo(turno);
  actualizarMensaje();
}

// Revisar si hay un ganador en el tablero
function verificarGanador() {
  const combos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let i = 0; i < combos.length; i++) {
    const a = combos[i][0];
    const b = combos[i][1];
    const c = combos[i][2];

    if (tablero[a] !== "" && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      return true;
    }
  }

  return false;
}

// Mostrar quién ganó y actualizar puntajes y colores
function mostrarGanador(fichaGanadora) {
  let nombreGanador = "";
  let nombrePerdedor = "";

  if (fichaGanadora === "X") {
    nombreGanador = jugadorX;
    nombrePerdedor = jugadorO;
    puntosX = puntosX + 1;
    document.body.style.backgroundColor = colorX;
  } else {
    nombreGanador = jugadorO;
    nombrePerdedor = jugadorX;
    puntosO = puntosO + 1;
    document.body.style.backgroundColor = colorO;
  }

  document.getElementById("puntosX").textContent = puntosX;
  document.getElementById("puntosO").textContent = puntosO;

  document.getElementById("mensaje").innerHTML =
    "<div style='font-size: 55px;'> " + nombreGanador + ", GANASTE AL DESTINO </div>" +
    "<div style='font-size: 20px;'>" + nombrePerdedor + ", es hora de tu final...</div>";
}

// Mostrar a quién le toca
function actualizarMensaje() {
  let nombreTurno = "";
  let icono = "";

  if (turno === "X") {
    nombreTurno = jugadorX;
    icono = "☠️";
  } else {
    nombreTurno = jugadorO;
    icono = "💀";
  }

  document.getElementById("mensaje").textContent = "Turno de: " + icono + " " + nombreTurno;
}

// Cambiar el color del fondo según quién juega
function actualizarColorFondo(turnoActual) {
  if (turnoActual === "X") {
    document.body.style.backgroundColor = colorX;
  } else {
    document.body.style.backgroundColor = colorO;
  }
}

// Reinicia tablero pero no nombres ni puntos
function reiniciarJuego() {
  jugando = true;
  turno = "X";
  actualizarColorFondo(turno);
  crearTablero();
  actualizarMensaje();
}

// Vuelve al inicio y borra puntos
function rendirse() {
  puntosX = 0;
  puntosO = 0;

  document.getElementById("puntosX").textContent = "0";
  document.getElementById("puntosO").textContent = "0";

  document.getElementById("juego").style.display = "none";
  document.getElementById("inicio").style.display = "block";
  document.body.style.backgroundColor = "#000";
}

// Hace que la pantalla se sacuda (efecto spooky)
function sacudirPantalla() {
  const body = document.body;
  let pos = 0;

  const intervalo = setInterval(function () {
    pos = (pos === 0) ? 5 : 0;
    body.style.marginLeft = pos + "px";
  }, 50);

  setTimeout(function () {
    clearInterval(intervalo);
    body.style.marginLeft = "0px";
  }, 500);
}
