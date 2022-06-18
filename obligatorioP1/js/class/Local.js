let localesList = [];
let localTipo = ['Restaurante', 'Teatro', 'Museo'];
let localEstado = ['Inactivo', 'Activo'];

class Local {

    constructor(usuario, contrasena, nombre, tipo, estado, direccion, maxCupos, foto) {
        this.id = this.autoIncrementId();
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.tipo = tipo;
        this.estado = estado;
        this.direccion = direccion;
        this.cuposDisp = maxCupos;
        this.maxCupos = maxCupos;
        this.foto = foto;
    }

    getId() { return this.id; };
    getNombre() { return this.nombre; }
    getusuario() { return this.usuario; }
    getcontrasena() { return this.contrasena; }
    getTipo() { return this.tipo; }
    getEstado() { return this.estado; }
    getDireccion() { return this.direccion; }
    getCuposDisp() { return this.cuposDisp; }
    getMaxCupos() { return this.maxCupos; }
    getFoto() { return this.foto; }

    setCuposDisp(value) { this.cuposDisp = value;}
    setMaxCupos(value) { this.maxCupos = value; }
    setFoto(value) { this.foto = value; }

    /**
     * Automatiza el incremento del id de los objetos.
     */
    autoIncrementId() {
        return localesList.length;
    }

    /**
     * F04 – Habilita la reserva.
     */
    habilitarReservas() {
        this.state = true;
    }
    /**
     * F05 – Deshabilita la reserva.
     */
    deshabilitarReservas() {
        this.state = false;
    }
}

function getLocal(prop, busqueda) {
    return getObjectFromArray(localesList, prop, busqueda);
}
/**
 * Carga en el array vacío recibido por parámetros el listado de locales activos.
 * Retorna TRUE si se modificó el array en cuestión.  
 * @param {Array} localesActivos 
 * @returns {boolean} retVal
 */
function getLocalesActivos(localesActivos) {
    let retVal = false;
    if (localesList.length > 0) {
        for (let i = 0; i < localesList.length; i++) {
            const local = localesList[i];
            if (local.estado === localEstado[1]) localesActivos.push(local);
        }
        if (localesActivos.length > 0) retVal = true;
    }
    return retVal;
}
/**
 * Carga el listado de locales utilizado en el apartado de solicitar nueva reserva.
 */
function cargarSelectLocalesEnHTML() {
    const slResSolLocales = getElementDQS("#slResSolLocales");
    let localesActivos = [];
    let isEmpty = !getLocalesActivos(localesActivos);
    let htmlRes = ``;
    if (Number(slResSolLocales.value) !== -1) actualizarSelCupos();
    else 
    if (!isEmpty) {
        for (let i = 0; i < localesActivos.length; i++) {
            htmlRes += `<option value="${localesActivos[i].id}">${localesActivos[i].nombre}</option>`;
        }
    }
    return htmlRes;
}
/**
 * Cuando se percibe un cambio en la seleccion del local, en el apartado de
 * solicitar nueva reserva, actualiza los datos del listado de cupos, dado 
 * que el mismo se asocia al objeto local.
 */
function actualizarSelCupos() {
    const slResSolCupos = getElementDQS("#slResSolCupos");
    let slValue = Number(this.value);
    if (slValue !== -1) {
        const local = getLocal("id", slValue);
        slResSolCupos.innerHTML = cargarSelectCuposEnHTML(local);
    }
    else {
        slResSolCupos.innerHTML = `<option value="-1">Sin cupos disponibles</option>`;
    }
}
/**
 * Retorna el valor actual de cupos disponibles para un local.
 */
 function calcularCuposDisponibles(local) {
    let cupos = 0;
    let cuposAux = 0;
    if (reservasList.length > 0) {
        for (let i = 0; i < reservasList.length; i++) {
            const reservaAux = reservasList[i];
            if (local.nombre === reservaAux.nombreLocal) {
                cuposAux += Number(reservasList[i].cuposOcupar);
            }
        }
        cupos = cuposAux;
        console.log(`cuposAux: ${cuposAux}`);
    }
    else {
        cupos = local.cuposDisp;
    }
    if (cupos <= local.maxCupos) {
        cupos = local.maxCupos - cupos;
    }
    return cupos;
}
/**
 * Carga los options del select usado en la acción de solicitar nueva reserva.
 */
function cargarSelectCuposEnHTML(local) {
    let htmlRes = `<option value="-1">Sin cupos disponibles</option>`;
    let cuposDisponiblesACtuales = calcularCuposDisponibles(local);
    if (cuposDisponiblesACtuales > 0) {
        for (let i = 1; i <= cuposDisponiblesACtuales; i++) {
            htmlRes += `<option value="${i}">${i}</option>`;
        }
    }
    else {
        htmlRes = `<option value="-1">Sin cupos disponibles</option>`;
    }
    return htmlRes;
}
