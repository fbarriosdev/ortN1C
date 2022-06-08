let reservasList = [];
let puntuacionMaxima = 5;
let reservasEstados = ['Pendiente', 'Rechazada', 'Finalizada', 'Cancelada'];
// let reservasCalificacion = [0, 1, 2, 3, 4, 5];

class Reserva {

    constructor(nombreLocal, usuario, estado, puntuacion, cuposOcupar, fecha) {
        this.id = this.autoIncrementId();
        this.nombreLocal = nombreLocal;
        this.usuario = usuario;
        this.estado = estado;
        this.puntuacion = puntuacion;
        this.cuposOcupar = cuposOcupar;
        this.fecha = fecha;
    }

    getId() { return this.id; }
    getNombreLocal() { return this.nombreLocal; }
    getUsuario() { return this.usuario; }
    getEstado() { return this.estado; }
    getPuntuacion() { return this.puntuacion; }
    getCuposOcupar() { return this.cuposOcupar; }
    getFecha() { return this.fecha; }

    autoIncrementId() {
        return reservasList.length;
    }

    cancelarReserva() {
        this.estado = reservasEstados[3];
    }

    calificarReserva(puntuacion) {
        if (puntuacion >= 0 && puntuacion <= 5) {
            this.puntuacion = puntuacion;
        }
    }
}

function findReservaById(id) {
    if (reservasList.length > 0) {
        for (let i = 0; i < reservasList.length; i++) {
            if (reservasList[i].id === id) return true;
        }
    }
    return false;
}

function getReservaById(id) {
    let retReserva = {};
    if (reservasList.length > 0) {
        if (findReservaById(id)) return reservasList[id];
    }
    return retReserva;
}
    
function getReservasByUser(usuario) {
    let retReservas = [];
    if (reservasList.length > 0) {
        for (let i = 0; i < reservasList.length; i++) {
            if (reservasList[i].usuario === usuario) retReservas.push(reservasList[i]);
        }
    }
    return retReservas;
}

function getReservasByLocal(nombreLocal) {
    let retReservas = [];
    if (reservasList.length > 0) {
        for (let i = 0; i < reservasList.length; i++) {
            if (reservasList[i].nombreLocal === nombreLocal) retReservas.push(reservasList[i]);
        }
    }
    return retReservas;
}

function getReservasByEstadoAll() {
    let retReservas = [];
    if (reservasList.length > 0) {
        reservasEstados.forEach((estado) => {
        retReservas.push(getReservasByEstado(estado));
        });
    }
    return retReservas;
}
function getReservasByEstado(estado) {
    let retReservas = [];
    if (reservasList.length > 0) {
        for (let i = 0; i < reservasList.length; i++) {
            if (reservasList[i].estado === estado) retReservas.push(reservasList[i]);
        }
    }
    return retReservas;
}
function getReservasByPuntuacion(puntuacion) {
    let retReservas = [];
    if (reservasList.length > 0) {
        for (let i = 0; i < reservasList.length; i++) {
            if (reservasList[i].puntuacion === puntuacion) retReservas.push(reservasList[i]);
        }
    }
    return retReservas;
}

function getHTMLFromReservasCanceladas(reserva) {
    let htmlRes = "";
    //Voy a buscar el local
    const local = getLocalByNombre(reserva.nombreLocal);
    htmlRes += `<li class="liRes-${reserva.id}">`;
    htmlRes += `<img class="liResPict liResPict-${reserva.id}" src="../images/${local.foto}.jpg" `;
    htmlRes += `alt="Foto ${local.nombre}" style="width: 30px; height: 30px;"> `
    htmlRes += `${local.nombre} - ${reserva.fecha}. `;
    htmlRes += `<select type="button" id="sl${reserva.id}" data-id="${reserva.id}" class="slLiRes slLiResCerr">`;
    htmlRes += `${getHTMLCalificacionOptions()}</select>`
    htmlRes += `</li>`;
    return htmlRes;
}

function getHTMLFromReservasPendientes(reserva) {
    let htmlRes = "";
    //Voy a buscar el local
    const local = getLocalByNombre(reserva.nombreLocal);
    htmlRes += `<li class="liRes-${reserva.id}">`;
    htmlRes += `<img class="liResPict liResPict-${reserva.id}" src="../images/${local.foto}.jpg" `;
    htmlRes += `alt="Foto ${local.nombre}" style="width: 30px; height: 30px;"> `
    htmlRes += `${local.nombre} - Cupos: ${local.cupos}. `;
    htmlRes += `<input type="button" id="rid${reserva.id}" data-id="${reserva.id}" class="btnliRes btnliResPend" value="Cancelar">`;
    htmlRes += `</li>`;
    return htmlRes;
}

function getHTMLCalificacionOptions() {
    return `<option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>`
}
