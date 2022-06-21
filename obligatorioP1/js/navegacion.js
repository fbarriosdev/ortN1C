let botones = document.querySelectorAll(".btnLi");
let botonesEst = document.querySelectorAll(".btnEst");

for (let i = 0; i < botones.length; i++) {
  ocultarMenu(botones);
  botones[i].addEventListener("click", mostrarSeccion);
}

for (let i = 0; i < botonesEst.length; i++) {
  botonesEst[i].addEventListener("click", mostrarSeccionEst);
}

function ocultarMenu(botones) {
  for (boton of botones) boton.classList.add("hidden");
}

function mostrarSeccion() {
  let idS = "s" + this.getAttribute("id").substring(4);
  switch (idS) {
    case "seccionReservas":
      cargarReservasUsuario();
      cargarAddEvenListenerAccionesReservas();
      recargaVistaDinamica();
      break;
    case "seccionEstadisticas":
      mostrarEstadisticas();
      break;
    case "seccionDisponibilidad":
      actualizarDatosDisponibilidad();
      break;
    case "seccionEstadisticasLocal":
      mostrarEstadisticas();
      break;
      case "seccionControlReservas":
        generarTablaReservasParaLocales();
        cargarAddEvenListenerAccionesReservas();
        actualizarTablaReservasPendientes();
        addEventKeyUpParaBuscador();
        break;
  }
  cambiarSeccion(idS);
}

function mostrarSeccionEst() {
  let idS = "s" + this.getAttribute("id").substring(4);
  cambiarSeccionEst(idS);
}

function mostrarEstadisticas() {
  generarEstadisticas();
}

function cambiarSeccion(idS) {
  ocultarSecciones();
  document.querySelector("#" + idS).classList.remove("hidden");
}

function cambiarSeccionEst(idS) {
  ocultarSeccionesEst();
  document.querySelector("#" + idS).classList.remove("hidden");
}

function ocultarSeccionesEst() {
  let secciones = document.querySelectorAll(".sectEstTables");
  for (let i = 0; i < secciones.length; i++) {
    secciones[i].classList.add("hidden");
  }
}

function ocultarSecciones() {
  let secciones = document.querySelectorAll(".seccion");
  for (let i = 0; i < secciones.length; i++) {
    secciones[i].classList.add("hidden");
  }
}

function mostrarBotones(tipoUsuario) {
  for (let i = 0; i < botones.length; i++) {
    botones[i].classList.add("hidden");
  }

  let botonesMostrar = document.querySelectorAll("." + tipoUsuario);
  for (let i = 0; i < botonesMostrar.length; i++) {
    botonesMostrar[i].classList.remove("hidden");
  }
}