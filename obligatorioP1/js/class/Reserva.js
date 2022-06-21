let reservasList = [];
let puntuacionMaxima = 5;
let reservasEstados = ['Pendiente', 'Rechazada', 'Finalizada'];
// let reservasCalificacion = [0, 1, 2, 3, 4, 5];

class Reserva {

    constructor(nombreLocal, usuario, estado, cuposOcupar) {
        this.id = this.autoIncrementId();
        this.nombreLocal = nombreLocal;
        this.usuario = usuario;
        this.estado = estado;
        this.puntuacion = 0;
        this.cuposOcupar = cuposOcupar;
        this.autoCtrlDisponibilidad();
    }

    getId() { return this.id; }
    getNombreLocal() { return this.nombreLocal; }
    getUsuario() { return this.usuario; }
    getEstado() { return this.estado; }
    getPuntuacion() { return this.puntuacion; }
    getCuposOcupar() { return this.cuposOcupar; }

    /**
     * Automatiza el incremento del id de los objetos.
     */
    autoIncrementId() {
        return reservasList.length;
    }

    cancelarReserva() {
        this.estado = reservasEstados[2];
    }

    calificarReserva(puntuacion) {
        if (puntuacion >= 0 && puntuacion <= 5) {
            this.puntuacion = puntuacion;
        }
    }

    autoCtrlDisponibilidad() {
        let local = getLocal("nombre", this.nombreLocal);
        if (local !== undefined) {
            let cuposDisp = local.cuposDisp;
            if (cuposDisp === 0) {
                local.deshabilitarReservas();
            }
        }
    }
}
function getReserva(prop, busqueda) {
    return getObjectFromArray(reservasList, prop, busqueda);
}

/**
 * Recibe dos array vacíos.
 * Retorna el listado de reservas por local 
 * y el listado de reservas por local y usuario, respectivamente.
 * El tercer parámetro, es el array a filtrar.
 * @param {Array} localReservas
 * @param {Array} localReservasUsuario
 * @param {Array} localesActivos
 * @param {Object} personaSesion
 * @return {boolean} retVal
 */
function getReservasByLocalUsuario(localReservas, localReservasUsuario, nombreLocal) {
    let retVal = false;
    //Busco reservas finalizadas para este locales
    for (let j = 0; j < reservasList.length; j++) {
        if (reservasList[j].nombreLocal === nombreLocal) {
            //Si corresponde, la guardo
            localReservas.push(reservasList[j]);
            if (reservasList[j].usuario === usuarioSesion.usuario) {
                //Si corresponde al local y al usuario activo, la guardo
                localReservasUsuario.push(reservasList[j]);
            }
        }
    }
    if (localReservas.length > 0 && localReservasUsuario.length > 0) retVal = true;
    
    return retVal;
}
function getReservasFinalizadas() {
    return getReservasByEstado(reservasEstados[2]);
}
function getReservasByUsuario(usuario) {
    let retReservas = [];
    for(let reservaAux of reservasList) {
        if (reservaAux.usuario === usuario) retReservas.push(reservaAux);
    }
    return retReservas;
}
function getReservasByLocal(nombreLocal) {
    let retReservas = [];
    for(let reservaAux of reservasList) {
        if (reservaAux.nombreLocal === nombreLocal) retReservas.push(reservaAux);
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
function getPorcentajeReservasPorUsuario(totalReservas, usuarioReservas) {
    let porcentajeReservas = 0;
    if (totalReservas > 0 && usuarioReservas > 0) {
        porcentajeReservas = ((usuarioReservas * 100) / totalReservas).toFixed(2);
    }
    return porcentajeReservas;
}

function getHTMLFromReservasCanceladas(reserva) {
    let htmlRes = "";
    //Voy a buscar el local
    const local = getLocal("nombre", reserva.nombreLocal);
    htmlRes += `<td><span>${local.nombre}</span></td> `;
    htmlRes += `<td><span>${reserva.cuposOcupar}</span></td> `;
    htmlRes += `<td><img class="liResPict" src="../images/${local.foto}.jpg" alt="Foto ${local.nombre}" style="width: 50px; height: 50px;"/></td> `;
    htmlRes += `<td><select type="button" id="sl${reserva.id}" data-id="${reserva.id}" class="slLiRes slLiResCerr"> `;
    htmlRes += `${getHTMLCalificacionOptions()}</select></td> `;
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
    htmlRes += `<td><span>${local.nombre}</span></td> `;
    htmlRes += `<td><span>${reserva.cuposOcupar}</span></td> `;
    htmlRes += `<td><img class="liResPict" src="../images/${local.foto}.jpg" alt="Foto ${local.nombre}" style="width: 50px; height: 50px;"/></td> `;
    htmlRes += `<td><button id="rid${reserva.id}" data-id="${reserva.id}" class="btnliRes btnliResPend"> `;
    htmlRes += `<img alt="Cancelar Png" src="../images/cerrar.png"/></button></td> `;
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
function generarNuevaReserva(idLocal, cantCupos) {
    let alert = "";
    let retVal = false;
    let reservasUsuario = getReservasByUsuario(usuarioSesion.usuario);
    let hasReservasPendientes = false;
    const local = getLocal("id", idLocal);
    
    for (reservas of reservasUsuario) {
        if (reservas.nombreLocal === local.nombre) {
            hasReservasPendientes = true;
        }
    }
    if (!hasReservasPendientes) {
        if (local !== undefined) {
            local.setCuposDisp(local.cuposDisp - cantCupos);
            reservasList.push(
                new Reserva(local.nombre, usuarioSesion.usuario, reservasEstados[0], cantCupos)
            );
            retVal = true;
            alert = "Solicitud de reserva procesada con exito."
        }
        else {
            retVal = false;
            alert = "No pudimos procesar la solicitud."
        }
    }
    else {
        alert = "Ya cuentas con reservas pendientes para este local."
    }

    showAlert("#sectResSolAlertMsg", alert);
    return retVal;
}