/* Ejercicio 1
a) Crear la interfaz y la funcionalidad para almacenar datos de personas (nombre, edad, nacionalidad).
b) Crear un botón que al ser presionado arme una tabla con todos los datos de personas disponibles.
c) Crear otro botón que arme una nueva tabla con todos los datos de las personas mayores de edad.
*/
let personsList = [];
document.querySelector("#btnEx1").addEventListener('click', () => {
    let name = String(document.querySelector('#txtVal1_1').value).trim();
    let age = Number(document.querySelector('#txtVal1_2').value);
    let nacionality = String(document.querySelector('#txtVal1_3').value).trim();

    age = isNaN(age) ? 0 : age;

    let person = new Person(name, age, nacionality);
    
    personsList.push(person);

    document.querySelector('#alertMsg').innerHTML = `${person.found() ? "Se creó el perfil!" : "No se pudo crear el perfil!"}`;
    
    setTimeout(() =>{
        document.querySelector('#alertMsg').innerHTML = ``;
    }, 5000);
});
document.querySelector("#btnEx2").addEventListener('click', () => {
    document.querySelector('#pResult1').innerHTML = "";
    document.querySelector('#tableBox').innerHTML = "";
    let justAdults = Boolean(document.querySelector('#txtVal1_4').checked);
    
    let strTable = `<table id="tableResults" border="1" cellspacing="1" cellpadding="1">`;
    strTable += `<thead><tr><th>Nombe</th><th>Edad</th><th>Nacionalidad</th></tr></thead>`;
    strTable += `<tbody>`;

    if (!personsList.length > 0) {
        document.querySelector('#pResult1').innerHTML = "No hay personas para mostrar!";
    }
    else {
        for (let i = 0; i < personsList.length; i++) {
            const person = personsList[i];
            if (!justAdults) {
                strTable += `<tr><td>${person.name}</td><td>${person.age}</td><td>${person.nacionality}</td></tr>`;
            }
            else {
                if (person.isAdult()) {
                    strTable += `<tr><td>${person.name}</td><td>${person.age}</td><td>${person.nacionality}</td></tr>`;
                }
            }
        }
        strTable += `</tbody></table>`;
        document.querySelector('#tableBox').innerHTML = strTable;
    }
});