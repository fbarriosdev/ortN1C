let localesList = [];

class Local {

    constructor(id, nombre, username, password, tipo, estado, direccion, maxCupos, foto) {
        this.id = id;
        this.nombre = nombre;
        this.username = username;
        this.password = password;
        this.tipo = tipo;
        this.estado = estado;
        this.direccion = direccion;
        this.maxCupos = maxCupos;
        this.foto = foto;
    }

    getId() { return this.id };
    getNombre() { return this.nombre; }
    getUsername() { return this.username; }
    getPassword() { return this.password; }
    getTipo() { return this.tipo; }
    getEstado() { return this.estado; }
    getDireccion() { return this.direccion; }
    getMaxCupos() { return this.maxCupos; }
    getFoto() { return this.foto; }

    found(localesList, id) {
        if (!localesList.length > 0) {
            return false;
        }
        else {
            for (let i = 0; i < localesList.length; i++) {
                if (localesList[i].id === id) return true;
            }
        }
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