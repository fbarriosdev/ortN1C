let localesList = [];
let localTipo = ['Restaurante', 'Teatro', 'Museo'];

class Local {

    constructor(usuario, contrasena, nombre, tipo, estado, direccion, cuposDisp, maxCupos, foto) {
        this.id = this.autoIncrementId();
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.tipo = tipo;
        this.estado = estado;
        this.direccion = direccion;
        this.cuposDisp = cuposDisp;
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
/**
 * Retorna el TRUE si el local correspondiente al id recibido existe.
 */
function findLocalById(id) {
    if (localesList.length > 0) {
        for (let i = 0; i < localesList.length; i++) {
            if (localesList[i].id === id) return true;
        }
    }
    return false;
}
/**
 * Retorna el TRUE si el local correspondiente al usuario recibido existe.
 */
function findLocalByUser(usuario) {
    if (localesList.length > 0) {
        for (let i = 0; i < localesList.length; i++) {
            if (localesList[i].usuario === usuario) return true;
        }
    }
    return false;
}
/**
 * Retorna el objeto local correspondiente al id recibido.
 */
function getLocalById(id) {
    let retObj = {};
    if (localesList.length > 0) {
        for (let i = 0; i < localesList.length; i++) {
            if (localesList[i].id === id) retObj = localesList[i];;
        }
    }
    return retObj;
}
/**
 * Retorna el objeto local correspondiente al nombre recibido.
 */
function getLocalByNombre(nombre) {
    let retObj = {};
    if (localesList.length > 0) {
        for (let i = 0; i < localesList.length; i++) {
            if (localesList[i].nombre === nombre) retObj = localesList[i];
        }
    }
    return retObj;
}
//TODO: Esto debería filtrar los locales activos (por estado).
/**
 * Carga el listado de locales utilizado en el apartado de solicitar nueva reserva.
 */
function cargarSelectLocalesEnHTML() {
    let htmlRes = `<option value="-1">Seleccione una opción</option>`;
    actualizarSelCupos();
    if (localesList.length > 0) {
        for (let i = 0; i < localesList.length; i++) {
            htmlRes += `<option value="${localesList[i].id}">${localesList[i].nombre}</option>`;
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
    const local = getLocalById(Number(this.value));
    slResSolCupos.innerHTML = cargarSelectCuposEnHTML(local);
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
/**
 * Retorna el valor actual de cupos disponibles.
 */
function calcularCuposDisponibles(local) {
    let cupos = 0;
    if (local.cuposDisp < local.maxCupos) {
        cupos = local.maxCupos - local.cuposDisp;
    }
    return cupos;
}