
localesList.push(new Local('lamostaza', 'lamostaza', 'La mostaza', localTipo[0], 'Activo', 'Tres Cruces', 10, 'imgLaMostaza'));
localesList.push(new Local('mcdonalds', 'mcdonalds', 'McDonalds', localTipo[0], 'Activo', 'Tres Cruces', 35, 'imgMCDonalds'));
localesList.push(new Local('burgerking', 'burgerking', 'Burger King', localTipo[0], 'Activo', 'Tres Cruces', 20, 'imgBurgerKing'));
localesList.push(new Local('moviecenter', 'moviecenter', 'Movie Center', localTipo[2], 'Activo', 'Tres Cruces', 10, 'imgMovieCenter'));
localesList.push(new Local('kinko', 'kinko', 'Kinko', localTipo[0], 'Activo', 'Tres Cruces', 10, 'imgKinko'));

reservasList.push(new Reserva('La mostaza', 'fbarrios', 'Pendiente', 5, '11/07'));
reservasList.push(new Reserva('McDonalds', 'ragosto', 'Cancelada', 10, '11/03'));
reservasList.push(new Reserva('Burger King', 'eperez', 'Pendiente', 6, '31/12'));
reservasList.push(new Reserva('Movie Center', 'fbarrios', 'Cancelada', 2, '12/01'));
reservasList.push(new Reserva('Kinko', 'eperez', 'Pendiente', 2, '26/11'));

reservasList.push(new Reserva('Kinko', 'fbarrios', 'Finalizada', 2, '12/12'));
reservasList.push(new Reserva('La mostaza', 'eperez', 'Finalizada', 4, '03/011'));
reservasList.push(new Reserva('Movie Center', 'fbarrios', 'Finalizada', 1, '12/05'));
reservasList.push(new Reserva('La mostaza', 'fbarrios', 'Finalizada', 3, '26/01'));

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
        generarNuevaReserva(usuarioSesionU, idLocal, cantCupos);
    }
});
/*------------------------- RESERVAS END -------------------------*/
/*----------------------------------------------------------------*/
let btnEstReservas = document.querySelectorAll('.btnEstReservas');

for (let i = 0; i < btnEstReservas.length; i++) {
    btnEstReservas[i].addEventListener("click", generarEstadisticas);
}

function generarEstadisticas() {
    let personaSesion = getPersona("usuario", usuarioSesionU);
    if (personaSesion === undefined) personaSesion = getLocal("usuario", usuarioSesionU);
    
    if (personaSesion !== undefined) {
        generarEstadisticasTab1(personaSesion);
        generarEstadisticasTab2(personaSesion);
    }
}
function generarEstadisticasTab1(personaSesion) {
    const sectEstUnoTableBody = getElementDQS("#sectEstUnoTableBody");
    sectEstUnoTableBody.innerHTML = "";
    for (local of localesList) {
        //Array de reservas por locales
        let localReservas = [];
        let localReservasUsuario = [];

        let hasReservasUsuario = getReservasByLocalUsuario(localReservas, localReservasUsuario, local.nombre, personaSesion);

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
function generarEstadisticasTab2(personaSesion) {
    const sectEstDosTableBody = getElementDQS("#sectEstDosTableBody");
    sectEstDosTableBody.innerHTML = "";
    let localNroReservas = Number.NEGATIVE_INFINITY;

    for (local of localesList) {
        //Array de reservas por locales
        let localReservas = [];
        let localReservasUsuario = [];

        let hasReservasUsuario = getReservasByLocalUsuario(localReservas, localReservasUsuario, local.nombre, personaSesion);
    
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