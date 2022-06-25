//Restoranes
localesList.push(new Local('mcdonalds', 'Mcdonalds123', 'McDonalds', localTipo[0], 'Activo', '18 Julio 1458', 35, 'imgMCDonalds'));
localesList.push(new Local('burgerking', 'Burgerking123', 'Burger King', localTipo[0], 'Activo', '18 Julio 1845', 20, 'imgBurgerKing'));
localesList.push(new Local('lamostaza', 'Lamostaza123', 'La Mostaza', localTipo[0], 'Activo', '18 Julio 1485', 20, 'imgLaMostaza'));
//Teatros
localesList.push(new Local('elgalpon', 'Elgalpon123', 'El Galpon', localTipo[1], 'Activo', '18 de Julio 1618', 10, 'imgElGalpon'));
localesList.push(new Local('victoria', 'Victoria123', 'Victoria', localTipo[1], 'Activo', 'Río Negro 1477', 10, 'imgVictoria'));
//Museos
localesList.push(new Local('figari', 'Figari123', 'Figari', localTipo[2], 'Activo', 'Juan Carlos Gómez 1427', 10, 'imgFigari'));
localesList.push(new Local('gurvich', 'Gurvich123', 'Gurvich', localTipo[2], 'Activo', 'Av Italia 1127', 10, 'imgGurvich'));
//Usuarios con reservas pendientes y finalizadas
personasList.push(new Persona("fperez", "Fperez123", "Fabricio"));
personasList.push(new Persona("fpirez", "Fpirez123", "Federico"));
personasList.push(new Persona("fpiriz", "Fpiriz123", "Franco"));
//Usuarios con reservas pendientes
personasList.push(new Persona("eperez", "Eperez123", "Esteban"));
personasList.push(new Persona("epirez", "Epirez123", "Emiliano"));
personasList.push(new Persona("epiriz", "Epiriz123", "Erick"));
//Usuarios sin reservas
personasList.push(new Persona("mperez", "Mperez123", "Miguel"));
personasList.push(new Persona("mpirez", "Mpirez123", "Martin"));
personasList.push(new Persona("mpiriz", "Mpiriz123", "Mario"));

reservasList.push(new Reserva('McDonalds', 'fperez', 'Pendiente', 5));
reservasList.push(new Reserva('McDonalds', 'fperez', 'Finalizada', 2));
reservasList.push(new Reserva('Burger King', 'epirez', 'Finalizada', 4));
reservasList.push(new Reserva('McDonalds', 'fpirez', 'Pendiente', 1));
reservasList.push(new Reserva('El Galpon', 'fpirez', 'Finalizada', 2));
reservasList.push(new Reserva('Gurvich', 'fpirez', 'Finalizada', 8));
reservasList.push(new Reserva('McDonalds', 'fpiriz', 'Pendiente', 1));
reservasList.push(new Reserva('El Galpon', 'fpiriz', 'Finalizada', 2));
reservasList.push(new Reserva('Gurvich', 'fpiriz', 'Finalizada', 8));

reservasList.push(new Reserva('McDonalds', 'fperez', 'Pendiente', 1));
reservasList.push(new Reserva('El Galpon', 'fperez', 'Finalizada', 2));
reservasList.push(new Reserva('Gurvich', 'fperez', 'Finalizada', 8));
reservasList.push(new Reserva('McDonalds', 'fperez', 'Pendiente', 1));

reservasList.push(new Reserva('McDonalds', 'eperez', 'Pendiente', 5));
reservasList.push(new Reserva('Burger King', 'eperez', 'Pendiente', 5));
reservasList.push(new Reserva('El Galpon', 'epirez', 'Pendiente', 5));
reservasList.push(new Reserva('Gurvich', 'epiriz', 'Pendiente', 5));

/*
    El sistema no contempla precarga de reservas, por lo que, a efectos de funcionalidad no se cumplen
    ciertos aspectos, como lo son:
    1 - Calcular cupos disponibles para un Local según cantidad de reservas pendientes.
    2 - No tener más de una reserva en estado pendiente para un mismo local.
*/

/*----------------------------------------------------------------*/
/*------------------------- RESERVAS INI -------------------------*/

/**
 * Carga las tablas de reservas pendientes y finalizadas para el perfil Persona
 */
function cargarReservasUsuario() {
    let reservasPendientes = getReservasByEstado(reservasEstados[0]);
    let reservasCanceladas = getReservasByEstado(reservasEstados[2]);
    
    //Llevo los listados de reservas a la vista
    if (reservasPendientes.length > 0) {
        const tableListPending = getElementDQS("#sectRes-PendingListBody");
        tableListPending.innerHTML = "";
        let htmlRes = "";
        for (let i = 0; i < reservasPendientes.length; i++) {
            if (reservasPendientes[i].usuario === usuarioSesion.usuario) {
                htmlRes += `<tr>${getHTMLFromReservasPendientes(reservasPendientes[i])}</tr>`;
            }
        }
        if (htmlRes.length > 0) tableListPending.innerHTML = htmlRes;
    }
    
    if (reservasCanceladas.length > 0) {
        const tableListClosed = getElementDQS("#sectRes-ClosedListBody");
        tableListClosed.innerHTML = "";
        let htmlRes = "";
        for (let i = 0; i < reservasCanceladas.length; i++) {
            if (reservasCanceladas[i].usuario === usuarioSesion.usuario) {
                htmlRes += `<tr>${getHTMLFromReservasCanceladas(reservasCanceladas[i])}</tr>`;
            }
        }
        if (htmlRes.length > 0) tableListClosed.innerHTML += htmlRes;
    }
}
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
//Agrego los eventos según estado de reserva
function cargarAddEvenListenerAccionesReservas() {
    let btnCancelarReservas = document.querySelectorAll(".btnliResPend");
    let btnCalificarReservas = document.querySelectorAll(".slLiResCerr");
    if (btnCancelarReservas.length > 0) {
        for (let i = 0; i < btnCancelarReservas.length; i++) {
            btnCancelarReservas[i].addEventListener("click", cancelarReserva);
        }
    }
    if (btnCalificarReservas.length > 0) {
        for (let i = 0; i < btnCalificarReservas.length; i++) {
            btnCalificarReservas[i].addEventListener("change", calificarReserva);
        }
    }
}

function cancelarReserva() {
    const reserva = getReserva("id", Number(this.getAttribute("data-id")));
    if (confirm(`Seguro que quiere finalizar esta reserva en ${reserva.nombreLocal}?`)) {
        reserva.cancelarReserva();
    }
}

function calificarReserva() {
    const reserva = getReserva("id", Number(this.getAttribute("data-id")));
    let calificacion = Number(getElementDQS(`#sl${reserva.id}`).value);
    if (confirm(`Seguro que quiere calificar con ${reserva.nombreLocal}/5 esta reserva en ${reserva.nombreLocal}?`)) {
        reserva.calificarReserva(calificacion);
    }
}

/**
 * Función que engloba diferentes acciones para la actualización de datos de forma dinámica en diversas secciones de la aplicación
 */
function recargaVistaDinamica() {
    cargarReservasUsuario();
    cargarAddEvenListenerAccionesReservas();
}
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
//Agrego listado de locales a selector de nueva solicitud de reserva
const slResSolLocales = getElementDQS("#slResSolLocales");
const slResSolCupos = getElementDQS("#slResSolCupos");

slResSolLocales.innerHTML += cargarSelectLocalesEnHTML();
slResSolLocales.addEventListener("change", actualizarSelCupos);

getElementDQS("#slResSolSolicitar").addEventListener("click", () => {
    let idLocal = Number(slResSolLocales.value);
    let cantCupos = Number(slResSolCupos.value);
    if (confirm("¿Confirmar nueva reserva?")) {
        generarNuevaReserva(idLocal, cantCupos);
    }
});

getElementDQS("#sectctrlResSearch").addEventListener("change", actualizarTablaReservas);
/**
 * sin terminar
 */
function actualizarTablaReservas() {
    
}

/**
 * Genera la tabla utilizada por la pestaña Reservas, para usuarios tipo Local.
 * Permite filtrar datos a partir de un string recibido por parámetros.
 * El mismo es utilizado principalmente por el buscador, de esta forma, la misma función
 * puede ser utlizada tanto por el buscador, como para generar la tabla en su totalidad
 * @param {String} nombreUsuario 
 */
function generarTablaReservasParaLocales(nombreUsuario) {
    if (nombreUsuario == undefined) nombreUsuario = "";
    let htmlRes = "";
    const sectCtrlResTable = getElementDQS("#sectCtrlRes-PendingListBody");
    sectCtrlResTable.innerHTML = "";
    const reservasPendientes = getReservasByLocal(usuarioSesion.nombre);
    for (reserva of reservasPendientes) {
        if (reserva.estado === reservasEstados[0]) {
            const cliente = getPersona("usuario", reserva.usuario);
            //el parametro nombreUsuario es el filtro opcional, si llega vacio, no se filtra la tabla,
            //caso contrario, filtramos por nombre de usuario
            if (nombreUsuario === "") {
                htmlRes = generarHTML(reserva.id, cliente.nombre, reserva.cuposOcupar, reserva.estado);
            } else
            if (cliente.nombre.indexOf(nombreUsuario) > -1) {
                htmlRes = generarHTML(reserva.id, cliente.nombre, reserva.cuposOcupar, reserva.estado);
            }
            if (htmlRes.length > 0) sectCtrlResTable.innerHTML += htmlRes;
            else {
                sectCtrlResTable.innerHTML += `<td colspan="4">Sin datos para mostrar</td> `;
            }
            
        }
    }
    //Cargo dinamicamente los eventos para las reservas de la tabla
    cargarAddEvenListenerAccionesReservas();
}
/**
 * Retorna el html para la tabla utilizada por la pestaña Reservas, para usuarios tipo Local
 * @returns string
 */
function generarHTML(id, nombre, cupos, estado) {
    let htmlRes = "";
    htmlRes += `<td>${nombre}</td> `;
    htmlRes += `<td>${cupos}</td> `;
    htmlRes += `<td>${estado}</td> `;
    htmlRes += `<td><input type="button" id="rid${id}" data-id="${id}" class="btnliRes btnliResPend" value="Finalizar"> `;
    return htmlRes;
}

function actualizarTablaReservasPendientes() {
    generarTablaReservasParaLocales("");
}

function addEventKeyUpParaBuscador() {
    getElementDQS("#sectctrlResSearch").addEventListener("keyup", filtrarTablaReservas);
}

function filtrarTablaReservas() {
    let usuarioParaFiltrar = String(this.value).trim();
    generarTablaReservasParaLocales(usuarioParaFiltrar);
}
/*------------------------- RESERVAS END -------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*---------------------- ESTADISTICAS INI ------------------------*/
let btnEstReservas = document.querySelectorAll('.btnEstReservas');

for (let i = 0; i < btnEstReservas.length; i++) {
    btnEstReservas[i].addEventListener("click", generarEstadisticas);
}

/**
 * Disparador de las funciones correspondientes a la creación de tablas
 */
function generarEstadisticas() {
    generarEstadisticasTab1();
    generarEstadisticasTab2();
    generarEstadisticasLocalTab1();
    generarEstadisticasLocalTab2()
}
/**
 * Genera la tabla para Estadisticas por local
 */
function generarEstadisticasTab1() {
    const sectEstUnoTableBody = getElementDQS("#sectEstUnoTableBody");
    sectEstUnoTableBody.innerHTML = "";
    for (local of localesList) {
        //Array de reservas por locales
        let localReservas = [];
        let localReservasUsuario = [];

        let hasReservasUsuario = getReservasByLocalUsuario(localReservas, localReservasUsuario, local.nombre);

        if (hasReservasUsuario) {
            let htmlRes = "";
            let totalReservas = localReservas.length; //Total de reservas realizadas
            let usuarioReservas = localReservasUsuario.length; //Reservas realizadas por el usuario
            let porcentajeReservas = getPorcentajeReservasPorUsuario(totalReservas, usuarioReservas);

            htmlRes += `<td>${local.nombre}</td> `;
            htmlRes += `<td>${usuarioReservas}</td> `;
            htmlRes += `<td>${totalReservas}</td> `;
            htmlRes += `<td>${porcentajeReservas}</td> `;

            if (htmlRes.length > 0) sectEstUnoTableBody.innerHTML += htmlRes;
            else {
                sectEstUnoTableBody.innerHTML += `<td colspan="4">Sin datos para mostrar</td>`;
            }
        }
    }
}
/**
 * Genera la tabla para Reservas por persona
 */
function generarEstadisticasTab2() {
    const sectEstDosTableBody = getElementDQS("#sectEstDosTableBody");
    sectEstDosTableBody.innerHTML = "";
    let localNroReservas = Number.NEGATIVE_INFINITY;

    for (local of localesList) {
        //Array de reservas por locales
        let localReservas = [];
        let localReservasUsuario = [];

        let hasReservasUsuario = getReservasByLocalUsuario(localReservas, localReservasUsuario, local.nombre);
    
        if (hasReservasUsuario) {
            let htmlRes = "";
            let usuarioReservas = localReservasUsuario.length; //Reservas realizadas por el usuario
    
            if (usuarioReservas >= localNroReservas) {
                localNroReservas = usuarioReservas;
                htmlRes += `<td>${local.nombre}</td>`;
                htmlRes += `<td>${usuarioReservas}</td>`;
        
                if (htmlRes.length > 0) sectEstDosTableBody.innerHTML += htmlRes;
                else {
                    sectEstDosTableBody.innerHTML += `<td colspan="2">Sin datos para mostrar</td>`;
                }
            }
        }
    }
}
/**
 * Genera la tabla para Porcentaje de ocupación
 */
function generarEstadisticasLocalTab1() {
    const sectEstLocUnoTableBody = getElementDQS("#sectEstLocUnoTableBody");
    sectEstDosTableBody.innerHTML = "";
    let porcentajeOcupacion = getPorcentajeOcupacion();
    let htmlRes = "";
    
    htmlRes += `<td>${porcentajeOcupacion === 0 ? 0 : usuarioSesion.cuposDisp}</td> `;
    htmlRes += `<td>${usuarioSesion.maxCupos}</td> `;
    htmlRes += `<td>${porcentajeOcupacion}</td> `;

    if (htmlRes.length > 0) sectEstLocUnoTableBody.innerHTML += htmlRes;
    else {
        sectEstLocUnoTableBody.innerHTML += `<td colspan="3">Sin datos para mostrar</td> `;
    }
}
/**
 * Genera la tabla para Porcentaje de calificación
 */
function generarEstadisticasLocalTab2() {
    const sectEstLocDosTableBody = getElementDQS("#sectEstLocDosTableBody");
    sectEstLocDosTableBody.innerHTML = "";
    let porcentajeCalificacion = 0;
    let contadorReservas = 0;
    let totalCalificacion = 0;
    let htmlRes = "";

    let localReservas = getReservasByLocal(usuarioSesion.nombre);

    if (localReservas.length > 0) {
        for (localReserva of localReservas) {
            contadorReservas++;
            totalCalificacion += localReserva.puntuacion;
        }
    }
    if (totalCalificacion > 0) {
        porcentajeCalificacion = totalCalificacion / contadorReservas;
    }
    else {
        porcentajeCalificacion = porcentajeCalificacion;
    }
    htmlRes += `<td>${contadorReservas}</td> `;
    htmlRes += `<td>${porcentajeCalificacion}</td> `;

    if (htmlRes.length > 0) sectEstLocDosTableBody.innerHTML += htmlRes;
    else {
        sectEstLocDosTableBody.innerHTML += `<td colspan="3">Sin datos para mostrar</td> `;
    }
}
/*---------------------- ESTADISTICAS END ------------------------*/
/*----------------------------------------------------------------*/
function actualizarDatosDisponibilidad() {
    if (usuarioSesion !== undefined) {
        if (usuarioSesion instanceof Local) {
            const sectDispEstado = getElementDQS("#sectDispEstado");
            let estado = usuarioSesion.estado;

            sectDispEstado.innerHTML = `${estado === localEstado[0] ? "habilitar" : "deshabilitar"}`;
        }
    }
}

/**
 * Funcion utilizada para el cambio de estado del perfil Local
 */
getElementDQS("#bntSectDispConfirmar").addEventListener("click", () => {
    let alert = "";
    if (confirm(`Seguro que quiere confirmar los cambios sobre ${usuarioSesion.nombre}?`)) {
        if (usuarioSesion.estado === localEstado[0]) usuarioSesion.habilitarReservas();
        else {
            let hasReservasPendientes = getReservasByLocal(usuarioSesion.nombre).length > 0 ? true : false;
            if (hasReservasPendientes) alert = `${usuarioSesion.nombre} tiene reservas pendientes, no se puede realizar el cambio.`;
            else {
                usuarioSesion.deshabilitarReservas();
                actualizarDatosDisponibilidad();
                alert = `${usuarioSesion.nombre} pasó a estado deshabilitado.`;
            }
        }
    }
    else alert = "No se realizaron modificaciones.";
    if (alert.length > 0) showAlert("#sectDispAlertMsg", alert);
});


getElementDQS("#bntsectCuposConfirmar").addEventListener("click", modificarMaxCuposDisp);

/**
 * Actualiza el maximo de cupos disponibles para el local de la sesión.
 */
function modificarMaxCuposDisp() {
    let alert = "";
    let nuevaCantMaxCupos = Number(getElementDQS("#sectCuposNuevaCantidad").value);
    if (confirm(`Seguro que quiere confirmar los cambios sobre ${usuarioSesion.nombre}?`)) {
        if (nuevaCantMaxCupos > 0) {
            const localReservas = getReservasByLocal(usuarioSesion.nombre);
            let hasReservasPendientes = false;
            for (localReserva of localReservas) {
                if (!hasReservasPendientes) {
                    if (localReserva.estado === reservasEstados[0]) hasReservasPendientes = true;
                }
            }
            if (hasReservasPendientes) alert = `${usuarioSesion.nombre} tiene reservas pendientes, no se puede realizar el cambio.`;
            else {
                usuarioSesion.setMaxCupos(nuevaCantMaxCupos);
                actualizarCampoCuposCantActual(usuarioSesion.getMaxCupos());
                alert = `Se modificó el maximo de cupos disponible para ${usuarioSesion.nombre}`;
            }
        }
        else alert = "No pudimos procesar la solicitud.";
    }
    else alert = "No se realizaron modificaciones.";
    if (alert.length > 0) showAlert("#sectCuposAlertMsg", alert);
}

function actualizarCampoCuposCantActual(cantActual) {
    getElementDQS("#sectCuposCantActual").innerHTML = cantActual;
}