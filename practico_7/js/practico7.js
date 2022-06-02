/*
Ejercicio 1
a) Crear la interfaz y la funcionalidad para almacenar datos de personas (nombre, edad, nacionalidad).
b) Crear un botón que al ser presionado arme una tabla con todos los datos de personas disponibles.
c) Crear otro botón que arme una nueva tabla con todos los datos de las personas mayores de edad.
*/
let personsList = [];
document.querySelector("#btnEx1_1").addEventListener('click', () => {
    let name = String(document.querySelector('#txtVal1_1').value).trim();
    let age = Number(document.querySelector('#txtVal1_2').value);
    let nacionality = String(document.querySelector('#txtVal1_3').value).trim();

    age = isNaN(age) ? 0 : age;

    let person = new Person(name, age, nacionality);
    
    personsList.push(person);

    document.querySelector('#alertMsg').innerHTML = `${person.found(personsList, person.name) ? "Se creó el perfil!" : "No se pudo crear el perfil!"}`;
    
    setTimeout(() =>{
        document.querySelector('#alertMsg').innerHTML = ``;
    }, 5000);
});
document.querySelector("#btnEx1_2").addEventListener('click', () => {
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
/*
Ejercicio 2
a) Crear la interfaz HTML que permita el ingreso de los datos solicitados. El dato correspondiente al género se debe capturar a través de un combo desplegable.
b) Crear la funcionalidad javascript que permita almacenar películas, teniendo en cuenta que se debe validar que el año sea numérico y que el nombre sea único (que no exista otra película con ese nombre).
c) Agregar a la interfaz HTML un botón y una tabla de datos y listar en ella todas las películas que tengan un promedio mayor o igual a 4. El promedio se obtendrá de la división del total de puntos recibidos entre la cantidad de votantes. Al hacer click en el botón se cargará la tabla.
d) Crear un nuevo campo de texto en el que se pueda ingresar el nombre de una película y un botón que al ser presionado busque en el array de las películas esa película ingresada en el campo de texto y muestre en un párrafo en el HTML toda la información disponible de la película (nombre, año, género, cantidad de votantes y total de puntos). En caso que la película no esté en el array informar al usuario que esa película no se encuentra en el listado.
*/
let moviesList = [];
document.querySelector("#btnEx2_1").addEventListener('click', () => {
    let name = String(document.querySelector('#txtVal2_1').value).trim();
    let year = Number(document.querySelector('#txtVal2_2').value);
    let gender = String(document.querySelector('#txtVal2_3').value).trim();
    let votesNumber = Number(document.querySelector('#txtVal2_4').value);
    let score = Number(document.querySelector('#txtVal2_4').value);

    year = isNaN(year) ? 0 : year;
    votesNumber = isNaN(votesNumber) ? 0 : votesNumber;
    score = isNaN(score) ? 0 : score;

    let movie = new Movie(name, year, gender, votesNumber, score);
    
    if (!movie.found(moviesList, movie.name)) {
        moviesList.push(movie);
    }
    document.querySelector('#alertMsg').innerHTML = `${movie.found() ? "Se creó el perfil!" : "No se pudo crear el perfil!"}`;
    
    setTimeout(() =>{
        document.querySelector('#alertMsg').innerHTML = ``;
    }, 5000);
});