/*----------------------------------------------------------------*/
/*------------------------- REGISTRO INI -------------------------*/
getElementDQS("#btnRegistrarse").addEventListener("click", registrarse);

function registrarse() {
    let usuario = String(getElementDQS("#txtRegUsuario").value).trim();
    let contrasena = String(getElementDQS("#txtRegContrasena").value).trim();
    let nombre = String(getElementDQS("#txtRegNombre").value).trim();
    let alert = `Debe completar los campos Usuario y contraseña.`;

    if (usuario.length > 0 && contrasena.length > 0) {

        usuario = replaceAccents(charReplaceAllsDefault(usuario));
        contrasena = replaceAccents(charReplaceAllsDefault(contrasena));
        nombre = replaceAccents(charReplaceAllsDefault(nombre));

        //Valido que el usuario no este usado.
        if (findPersonaByUser(usuario) || findLocalByUser(usuario)) {
            alert = `El nombre ${usuario} ya se encuentra utilizado.`;
        }
        else { //Si usuario es valido, valido contraseña...
            if (!validatePassword(contrasena)) {
                alert = `La contraseña no es valida.`;
            }
            else //Si se encuentra utilizado, muestro alert y limpio los campos
            if (validatePassword(contrasena)) {
                let nuevoUsuario = new Persona(usuario, contrasena, nombre);
                personasList.push(nuevoUsuario);
                alert = `El usuario se creó con exito!`;
            }
            else {
                alert = `No se pudo crear el usuario. Intente nuevamente!`;
            }
        }
    }
    showAlert(`#sectRegAlertMsg`, alert);
    cleanFields();
}
/*------------------------- REGISTRO END -------------------------*/
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
/*------------------------- RESERVAS INI -------------------------*/

localesList.push(new Local('lamostaza', 'lamostaza', 'La mostaza', localTipo[0], 'Activo', 'Tres Cruces', 5, 10, 'imgLaMostaza'));
localesList.push(new Local('mcdonalds', 'mcdonalds', 'McDonalds', localTipo[0], 'Activo', 'Tres Cruces', 15, 35, 'imgMCDonalds'));
localesList.push(new Local('burgerking', 'burgerking', 'Burger King', localTipo[0], 'Activo', 'Tres Cruces', 18, 20, 'imgLaMostaza'));
localesList.push(new Local('moviecenter', 'moviecenter', 'Movie Center', localTipo[2], 'Activo', 'Tres Cruces', 5, 10, 'imgMovieCenter'));
localesList.push(new Local('kinko', 'kinko', 'Kinko', localTipo[0], 'Activo', 'Tres Cruces', 5, 10, 'imgKinko'));

reservasList.push(new Reserva('La mostaza', 'Natalie', 'Pendiente', '5/5', '11/07'));
reservasList.push(new Reserva('McDonalds', 'Leonardo', 'Cerrada', '3/5', '11/03'));
reservasList.push(new Reserva('Burger King', 'Rossana', 'Pendiente', '2/5', '31/12'));
reservasList.push(new Reserva('Movie Center', 'Andres', 'Cerrada', '5/5', '12/01'));
reservasList.push(new Reserva('Kinko', 'Fabricio', 'Cerrada', '4/5', '11/07'));

let reservasPendientes = getReservasByEstado(reservasEstados[0]);
let reservasCanceladas = getReservasByEstado(reservasEstados[3]);
const ulListPending = getElementDQS("#sectRes-PendingList");
const ulListClosed = getElementDQS("#sectRes-ClosedList");

if (reservasPendientes.length > 0) {
    let htmlRes = "";
    for (let i = 0; i < reservasPendientes.length; i++) {
        const reserva = reservasPendientes[i];

        //Voy a buscar el local
        const local = getLocalByNombre(reserva.nombreLocal);

        htmlRes += `<li class="liRes-${reserva.id}">`;
        htmlRes += `<img class="liResPict liResPict-${reserva.id}" src="../images/${local.foto}.jpg" `;
        htmlRes += `alt="Foto ${local.nombre}" style="width: 30px; height: 30px;"> `
        htmlRes += `${local.nombre} - Cupos: ${local.cupos}. `;
        htmlRes += `<input type="button" id="rid${reserva.id}" class="btnliRes btnliResPen btnliRes-${reserva.id}" value="Cancelar">`;
        htmlRes += `</li>`;
    }
    ulListPending.innerHTML = htmlRes;
}

if (reservasCanceladas.length > 0) {
    let htmlRes = "";
    for (let i = 0; i < reservasCanceladas.length; i++) {
        const reserva = reservasCanceladas[i];

        //Voy a buscar el local
        const local = getLocalByNombre(reserva.nombreLocal);

        htmlRes += `<li class="liRes-${reserva.id}">`;
        htmlRes += `<img class="liResPict liResPict-${reserva.id}" src="../images/${local.foto}.jpg" `;
        htmlRes += `alt="Foto ${local.nombre}" style="width: 30px; height: 30px;"> `
        htmlRes += `${local.nombre} - ${reserva.fecha}. `;
        htmlRes += `<input type="button" id="rid${reserva.id}" class="btnliRes btnliResCerr btnliRes-${reserva.id}" value="Calificar">`;
        htmlRes += `</li>`;
        ulListClosed.innerHTML += htmlRes;
    }
}

let btnCancelarReservas = document.querySelectorAll(".btnliResPend");
let btnCancelarReservas = document.querySelectorAll(".btnliResCerr");

for (let i = 0; i < btnCancelarReservas.length; i++) {
    btnCancelarReservas[i].addEventListener("click", cancelarReserva);
}

for (let i = 0; i < btnCancelarReservas.length; i++) {
    btnCancelarReservas[i].addEventListener("click", calificarReserva);
}

function cancelarReserva() {
    let rid = Number(this.getAttribute("id").substring(3));
    const reserva = getReservaById(rid);
    if (reserva.getId() === rid) {
        reserva.cancelarReserva();
    }
}

function calificarReserva() {
    let rid = Number(this.getAttribute("id").substring(3));
    const reserva = getReservaById(rid);
    if (reserva.getId() === rid) {
        reserva.calificarReserva()
    }
}

function getPuntuacionFromSelect() {

}
/*------------------------- RESERVAS END -------------------------*/
/*----------------------------------------------------------------*/