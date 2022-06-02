let personasList = [];

class Persona {

    constructor(id, nombre, username, password) {
        this.id = id;
        this.nombre = nombre;
        this.username = username;
        this.password = password;
    }

    getId() { return this.id };
    getNombre() { return this.nombre; }
    getUsername() { return this.username; }
    getPassword() { return this.password; }
    
    found(personasList, id) {
        if (!personasList.length > 0) {
            return false;
        }
        else {
            for (let i = 0; i < personasList.length; i++) {
                if (personasList[i].id === id) return true;
            }
        }
    }
}