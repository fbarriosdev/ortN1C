let reservasList = [];

class Reserva {

    constructor(id, nombreLocal, usuario, estado, puntuacion) {
        this.id = this.autoIncrementId();
        this.nombreLocal = nombreLocal;
        this.usuario = usuario;
        this.estado = estado;
        this.puntuacion = puntuacion;
    }

    getId() { return this.id; }
    getNombreLocal() { return this.nombreLocal; }
    getUsuario() { return this.usuario; }
    getEstado() { return this.estado; }
    getPuntuacion() { return this.puntuacion; }

    autoIncrementId() {
        let retId = 0;
        if (personasList.length > 0) retId = personasList.length + 1;
        else retId++;
        return retId;
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
    
function getReservasByUser(usuario) {
    if (reservasList.length > 0) {
        for (let i = 0; i < reservasList.length; i++) {
            if (reservasList[i].usuario === usuario) return true;
        }
    }
    return false;
}