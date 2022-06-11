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

function getPersona(prop, busqueda) {
    return getObjectFromArray(personasList, prop, busqueda);
}