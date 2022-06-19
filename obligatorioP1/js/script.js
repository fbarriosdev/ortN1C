
localesList.push(new Local('lamostaza', 'lamostaza', 'La mostaza', localTipo[0], 'Activo', 'Tres Cruces', 10, 'imgLaMostaza'));
localesList.push(new Local('mcdonalds', 'mcdonalds', 'McDonalds', localTipo[0], 'Activo', 'Tres Cruces', 35, 'imgMCDonalds'));
localesList.push(new Local('burgerking', 'burgerking', 'Burger King', localTipo[0], 'Activo', 'Tres Cruces', 20, 'imgBurgerKing'));
localesList.push(new Local('moviecenter', 'moviecenter', 'Movie Center', localTipo[2], 'Activo', 'Tres Cruces', 10, 'imgMovieCenter'));
localesList.push(new Local('kinko', 'kinko', 'Kinko', localTipo[0], 'Activo', 'Tres Cruces', 10, 'imgKinko'));

// generarNuevaReserva('fbarrios', 0, 5);
// generarNuevaReserva('eperez', 2, 6);
// generarNuevaReserva('ragosto', 1, 16);
// generarNuevaReserva('fbarrios', 3, 6);
// generarNuevaReserva('fbarrios', 4, 2);
//reservasList.push(new Reserva('Burger King', 'fbarrios', 'Pendiente', 2, '12/12'));

// reservasList.push(new Reserva('Kinko', 'fbarrios', 'Finalizada', 2, '12/12'));
// reservasList.push(new Reserva('La mostaza', 'eperez', 'Finalizada', 4, '03/011'));
// reservasList.push(new Reserva('Movie Center', 'fbarrios', 'Finalizada', 1, '12/05'));
// reservasList.push(new Reserva('La mostaza', 'fbarrios', 'Finalizada', 3, '26/01'));

personasList.push(new Persona("fbarrios", "Fbarrios123", "Fabricio"));
personasList.push(new Persona("eperez", "Fbarrios123", "Emiliano"));
personasList.push(new Persona("ragosto", "RAgosto123", "Roberto"));

/*----------------------------------------------------------------*/
/*------------------------- RESERVAS INI -------------------------*/
let reservasPendientes = getReservasByEstado(reservasEstados[0]);
let reservasCanceladas = getReservasByEstado(reservasEstados[3]);

//Llevo los listados de reservas a la vista
if (reservasPendientes.length > 0) {
    const tableListPending = getElementDQS("#sectRes-PendingListBody");
    let htmlRes = "";
    for (let i = 0; i < reservasPendientes.length; i++) {
        htmlRes += `<tr>${getHTMLFromReservasPendientes(reservasPendientes[i])}</tr>`;
    }
    if (htmlRes.length > 0) tableListPending.innerHTML = htmlRes;
}

if (reservasCanceladas.length > 0) {
    const tableListClosed = getElementDQS("#sectRes-ClosedListBody");
    let htmlRes = "";
    for (let i = 0; i < reservasCanceladas.length; i++) {
        htmlRes += `<tr>${getHTMLFromReservasCanceladas(reservasCanceladas[i])}</tr>`;
    }
    if (htmlRes.length > 0) tableListClosed.innerHTML += htmlRes;
}
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
//Agrego los eventos según estado de reserva
let btnCancelarReservas = document.querySelectorAll(".btnliResPend");
let btnCalificarReservas = document.querySelectorAll(".slLiResCerr");

for (let i = 0; i < btnCancelarReservas.length; i++) {
    btnCancelarReservas[i].addEventListener("click", cancelarReserva);
}

for (let i = 0; i < btnCalificarReservas.length; i++) {
    btnCalificarReservas[i].addEventListener("change", calificarReserva);
}

function cancelarReserva() {
    const reserva = getReserva("id", Number(this.getAttribute("data-id")));
    if (confirm(`Seguro que quiere cancelar esta reserva en ${reserva.nombreLocal}?`)) {
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

function actualizarTablaReservas() {
    
}

function generarTablaReservasParaLocales() {

    const sectCtrlResTable = getElementDQS("#sectCtrlRes-PendingListBody");
    const reservasPendientes = getReservasByEstado(reservasEstados[0]);

}
/*------------------------- RESERVAS END -------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*---------------------- ESTADISTICAS INI ------------------------*/
let btnEstReservas = document.querySelectorAll('.btnEstReservas');

for (let i = 0; i < btnEstReservas.length; i++) {
    btnEstReservas[i].addEventListener("click", generarEstadisticas);
}

function generarEstadisticas() {
    generarEstadisticasTab1();
    generarEstadisticasTab2();
    generarEstadisticasLocalTab1();
    generarEstadisticasLocalTab2()
}
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

            htmlRes += `<td>${local.nombre}</td>`;
            htmlRes += `<td>${usuarioReservas}</td>`;
            htmlRes += `<td>${totalReservas}</td>`;
            htmlRes += `<td>${porcentajeReservas}</td>`;

            if (htmlRes.length > 0) sectEstUnoTableBody.innerHTML += htmlRes;
            else {
                sectEstUnoTableBody.innerHTML += `<td colspan="4">Sin datos para mostrar</td>`;
            }
        }
    }
}
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
function generarEstadisticasLocalTab1() {
    const sectEstLocUnoTableBody = getElementDQS("#sectEstLocUnoTableBody");
    sectEstDosTableBody.innerHTML = "";
    let porcentajeOcupacion = getPorcentajeOcupacion();
    let htmlRes = "";
    
    htmlRes += `<td>${porcentajeOcupacion === 0 ? 0 : usuarioSesion.cuposDisp}</td>`;
    htmlRes += `<td>${usuarioSesion.maxCupos}</td>`;
    htmlRes += `<td>${porcentajeOcupacion}</td>`;

    if (htmlRes.length > 0) sectEstLocUnoTableBody.innerHTML += htmlRes;
    else {
        sectEstLocUnoTableBody.innerHTML += `<td colspan="3">Sin datos para mostrar</td>`;
    }
}

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

    htmlRes += `<td>${contadorReservas}</td>`;
    htmlRes += `<td>${porcentajeCalificacion}</td>`;

    if (htmlRes.length > 0) sectEstLocDosTableBody.innerHTML += htmlRes;
    else {
        sectEstLocDosTableBody.innerHTML += `<td colspan="3">Sin datos para mostrar</td>`;
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