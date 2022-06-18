let botones = document.querySelectorAll(".btn");
let botonesEst = document.querySelectorAll(".btnEst");

for (let i = 0; i < botones.length; i++) {
  const boton = botones[i];
  boton.addEventListener("click", mostrarSeccion);
}

for (let i = 0; i < botonesEst.length; i++) {
  const boton = botonesEst[i];
  boton.addEventListener("click", mostrarSeccionEst);
}

//cambiarSeccion("seccionPersonas");

function mostrarSeccion() {
  let idS = "s" + this.getAttribute("id").substring(4);
  switch (idS) {
    case "seccionEstadisticas":
      mostrarEstadisticas();
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

//mostrarBotones("admin");

// function mostrarBotones(tipoUsuario) {
//   for (let i = 0; i < botones.length; i++) {
//     botones[i].style.display = "none";
//   }

//   let botonesMostrar = document.querySelectorAll("." + tipoUsuario);
//   for (let i = 0; i < botonesMostrar.length; i++) {
//     botonesMostrar[i].style.display = "block";
//   }
// }

// class Usuario {
//   constructor(nombre, pass) {
//     this.nombre = nombre;
//     this.password = pass;
//   }
// }

// let usuarios = [new Usuario("a", "a"), new Usuario("b", "b")];
// let usuarioLogueado;
// for (let i = 0; i < usuarios.length; i++) {
//   const usuario = usuarios[i];
//   if (usuario.nombre === "a" && usuario.password === "a") {
//     usuarioLogueado = usuario;
//     //cambiarSeccion
//     break;
//   }
// }

//usuarioLogueado.direccion
// usuarioLogueado.edad = 24;

// class Guitarra {
//   constructor(tipo, nombre, precio) {
//     this.tipo = tipo;
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }

// class Venta {
//   constructor(tipoG, cantidadG) {
//     this.tipoGuitarra = tipoG;
//     this.cantidad = cantidadG;
//   }
// }

//let x = new Guitarra(1, "clásica", 2000)

// let ventas = [];

// let guitarras = [
//   new Guitarra(1, "clásica", 2000),
//   new Guitarra(2, "eléctrica", 2500),
//   new Guitarra(3, "electroacústica", 2300),
//   new Guitarra(4, "criolla", 2800)
// ];

// armarCombo();
// function armarCombo() {
//   document.querySelector("#slcGuitarra").innerHTML += `
//     <option value="-1">Seleccione...</option>`;
//   for (let i = 0; i < guitarras.length; i++) {
//     const guitarra = guitarras[i];
//     document.querySelector("#slcGuitarra").innerHTML += `
//     <option value="${guitarra.tipo}">${guitarra.nombre}</option>`;
//   }
// }

//document.querySelector("#btnVender").addEventListener("click", venderGuitarras);

// function venderGuitarras() {
//   let tipoCampo = Number(document.querySelector("#slcGuitarra").value);
//   let cantidadCampo = Number(document.querySelector("#txtCantidad").value);
//   document.querySelector("#txtCantidad").value = "";

//   if (!isNaN(cantidadCampo) && tipoCampo !== -1) {
//     let ventaNueva = new Venta(tipoCampo, cantidadCampo);
//     ventas.push(ventaNueva);
//     //listarVentasPorGuitarra();
//   } else {
//     alert("error");
//   }
// }

// function listarVentasPorGuitarra() {
//   document.querySelector("#tblDatos").innerHTML = "";
//   for (let i = 0; i < guitarras.length; i++) {
//     const guitarra = guitarras[i];
//     let dinero = obtenerTotalDineroVentasGuitarra(guitarra.tipo);
//     document.querySelector("#tblDatos").innerHTML += `<tr>
//         <td>${guitarra.nombre}</td>
//         <td>${dinero}</td>
//         </tr>`;
//   }
// }

// function obtenerTotalDineroVentasGuitarra(tipo) {
//   let dineroGenerado;
//   let precioUnaGuitarra;
//   let cantidadGuitarrasVendidas = 0;

//   for (let i = 0; i < ventas.length; i++) {
//     const unaVenta = ventas[i];
//     if (unaVenta.tipoGuitarra === tipo) {
//       cantidadGuitarrasVendidas += unaVenta.cantidad;
//     }
//   }

//   for (let i = 0; i < guitarras.length; i++) {
//     const unaGuitarra = guitarras[i];
//     if (unaGuitarra.tipo === tipo) {
//       precioUnaGuitarra = unaGuitarra.precio;
//       break;
//     }
//   }

//   dineroGenerado = precioUnaGuitarra * cantidadGuitarrasVendidas;
//   return dineroGenerado;
// }
