let localesList = [];
let localTipo = ['Restaurante', 'Teatro', 'Museo'];

class Local {

    constructor(usuario, contrasena, nombre, tipo, estado, direccion, cupos, maxCupos, foto) {
        this.id = this.autoIncrementId();
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.tipo = tipo;
        this.estado = estado;
        this.direccion = direccion;
        this.cupos = cupos;
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
    getCupos() { return this.cupos; }
    getMaxCupos() { return this.maxCupos; }
    getFoto() { return this.foto; }

    autoIncrementId() {
        return localesList.length;
    }

    /*F04 – Habilitado de reservas*/
    habilitarReservas() {
        this.state = true;
    }
    /*F05 – Deshabilitado de reservas*/
    deshabilitarReservas() {
        this.state = false;
    }
}

function findLocalById(id) {
    if (localesList.length > 0) {
        for (let i = 0; i < localesList.length; i++) {
            if (localesList[i].id === id) return true;
        }
    }
    return false;
}

function findLocalByUser(usuario) {
    if (localesList.length > 0) {
        for (let i = 0; i < localesList.length; i++) {
            if (localesList[i].usuario === usuario) return true;
        }
    }
    return false;
}

function getLocalByNombre(nombre) {
    let retObj = {};
    if (localesList.length > 0) {
        for (let i = 0; i < localesList.length; i++) {
            if (localesList[i].nombre === nombre) retObj = localesList[i];
        }
    }
    return retObj;
}


function cargarReservasEnHTML() {
    let htmlRes = `<option value="-1">Seleccione una opción</option>`;
    // htmlRes += 
    if (localesList.length > 0) {
        for (let i = 0; i < localesList.length; i++) {
            htmlRes += `<option value="${localesList[i].id}">${localesList[i].nombre}</option>`;
        }
    }
    return htmlRes;
}