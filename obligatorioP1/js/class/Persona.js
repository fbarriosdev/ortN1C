/*Variable utilizada como respaldo por si el auto incremento falla*/
let id = 0;
let personasList = [];

class Persona {

    constructor(usuario, contrasena, nombre) {
        this.id = this.autoIncrementId();
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.name = nombre;
    }

    getId() { return this.id; };
    getNombre() { return this.nombre; }
    getUsuario() { return this.usuario; }
    getContrasena() { return this.contrasena; }

    /**
     * Automatiza el incremento del id de los objetos.
     */
    autoIncrementId() {
        return personasList.length;
    }
}

function findPersonaById(id) {
    if (personasList.length > 0) {
        for (let i = 0; i < personasList.length; i++) {
            if (personasList[i].id === id) return true;
        }
    }
    return false;
}
    
function findPersonaByUser(usuario) {
    if (personasList.length > 0) {
        for (let i = 0; i < personasList.length; i++) {
            if (personasList[i].usuario === usuario) return true;
        }
    }
    return false;
}