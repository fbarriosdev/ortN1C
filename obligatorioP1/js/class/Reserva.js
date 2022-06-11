let reservasList = [];
let puntuacionMaxima = 5;
let reservasEstados = ['Pendiente', 'Rechazada', 'Finalizada', 'Cancelada'];
// let reservasCalificacion = [0, 1, 2, 3, 4, 5];

class Reserva {

    constructor(nombreLocal, usuario, estado, cuposOcupar, fecha) {
        this.id = this.autoIncrementId();
        this.nombreLocal = nombreLocal;
        this.usuario = usuario;
        this.estado = estado;
        this.puntuacion = 0;
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

    /**
     * Automatiza el incremento del id de los objetos.
     */
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
function getReserva(prop, busqueda) {
    return getObjectFromArray(reservasList, prop, busqueda);
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
            if (reservasList[i].estado === estado) {
                retReservas.push(reservasList[i]);
            }
        }
    }
    return retReservas;
}
function getReservasByPuntuacion(puntuacion) {
    let retReservas = [];
    if (reservasList.length > 0) {
        for (let i = 0; i < reservasList.length; i++) {
            if (reservasList[i].puntuacion === puntuacion) {
                retReservas.push(reservasList[i]);
            }
        }
    }
    return retReservas;
}
function getHTMLFromReservasCanceladas(reserva) {
    let htmlRes = "";
    //Voy a buscar el local
    const local = getLocal("nombre", reserva.nombreLocal);
    htmlRes += `<li class="liRes-${reserva.id}">`;
    htmlRes += `<img class="liResPict liResPict-${reserva.id}" src="../images/${local.foto}.jpg" `;
    htmlRes += `alt="Foto ${local.nombre}" style="width: 30px; height: 30px;"> `
    htmlRes += `<span>${local.nombre} - ${reserva.fecha}.</span> `;
    htmlRes += `<select type="button" id="sl${reserva.id}" data-id="${reserva.id}" class="slLiRes slLiResCerr">`;
    htmlRes += `${getHTMLCalificacionOptions()}</select>`
    htmlRes += `</li>`;
    return htmlRes;
}

/**
 * Retorna el hmtl para el li correspondiente a este elemento dentro del listado de reservas pendientes.
 * @param {Object} reserva 
 * @returns string
 */
function getHTMLFromReservasPendientes(reserva) {
    let htmlRes = "";
    //Voy a buscar el local
    const local = getLocal("nombre", reserva.nombreLocal);
    htmlRes += `<li class="liRes-${reserva.id}">`;
    htmlRes += `<img class="liResPict liResPict-${reserva.id}" src="../images/${local.foto}.jpg" `;
    htmlRes += `alt="Foto ${local.nombre}" style="width: 30px; height: 30px;"> `
    htmlRes += `<span>${local.nombre} - Cupos: ${local.cuposDisp}.</span> `;
    htmlRes += `<input type="button" id="rid${reserva.id}" data-id="${reserva.id}" class="btnliRes btnliResPend" value="Cancelar">`;
    htmlRes += `</li>`;
    return htmlRes;
}
/**
 * Retorna el hmtl para los options del select de puntuación.
 * @returns string
 */
function getHTMLCalificacionOptions() {
    return `<option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>`
}
/**
 * Dispara las acciones correspondientes para registrar una nueva reserva.
 * @returns boolean
 */
function generarNuevaReserva(usuarioActivoU, idLocal, cantCupos) {

    const persona = getPersona("usuario", usuarioActivoU);
    let retVal = false;
    if (persona !== undefined) {
        const local = getLocal("id", idLocal);
        if (local !== undefined) {
            let cupos = calcularCuposDisponibles(local);
            console.log(cupos);
            if (!cantCupos <= cupos) {
               cantCupos = cupos;
            }
            const nuevaReserva = new Reserva(local.nombre, persona.nombre, reservasEstados[0], cantCupos, "12/07");
            console.log(nuevaReserva);
            reservasList.push(nuevaReserva);
            console.log(cupos - nuevaReserva.cuposOcupar);
            local.setCuposDisp(cupos - nuevaReserva.cuposOcupar);
            retVal = true;
        }
        else retVal = false;
    }
    else retVal = false;
    return retVal;
}