let localesList = [];

class Local {

    constructor(id, usuario, contrasena, nombre, tipo, estado, direccion, maxCupos, foto) {
        this.id = id;
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.tipo = tipo;
        this.estado = estado;
        this.direccion = direccion;
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
    getMaxCupos() { return this.maxCupos; }
    getFoto() { return this.foto; }

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