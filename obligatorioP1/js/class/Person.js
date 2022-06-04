/*Variable utilizada como respaldo por si el auto incremento falla*/
let id = 0;
let personasList = [];

class Persona {

    constructor(id, nombre, username, password) {
        this.id = autoIncrementId() > 0 ? autoIncrementId(): id;
        this.nombre = nombre;
        this.username = username;
        this.password = password;
        incrementId();
    }

    getId() { return this.id };
    getNombre() { return this.nombre; }
    getUsername() { return this.username; }
    getPassword() { return this.password; }
    
    foundById(personasList, id) {
        if (!personasList.length > 0) return false;
        else {
            for (let i = 0; i < personasList.length; i++) {
                if (personasList[i].id === id) return true;
            }
        }
    }
        
    foundByUser(personasList, username) {
        if (!personasList.length > 0) return false;
        else {
            for (let i = 0; i < personasList.length; i++) {
                if (personasList[i].username === username) return true;
            }
        }
    }

    autoIncrementId(usuariosList) {
        let retId = 0;
        if (usuariosList.length > 0) {
            retId = usuariosList.length;
            incrementId();
        }
        return retId;
    }
}

/*En caso de que el auto incremento falle, actualizo id*/
function incrementId() {
    //Asumo que si parte de cero, el programa recien comienza y no cargue los usuarios precargados
    if (id === 0) {
        //Acá debería contemplar los usuarios precargados.
        //Si existen, los cargo.
    }
    else {
        id++;
    }
}