
localesList.push(new Local('lamostaza', 'lamostaza', 'La mostaza', localTipo[0], 'Activo', 'Tres Cruces', 10, 'imgLaMostaza'));
localesList.push(new Local('mcdonalds', 'mcdonalds', 'McDonalds', localTipo[0], 'Activo', 'Tres Cruces', 35, 'imgMCDonalds'));
localesList.push(new Local('burgerking', 'burgerking', 'Burger King', localTipo[0], 'Activo', 'Tres Cruces', 20, 'imgBurgerKing'));
localesList.push(new Local('moviecenter', 'moviecenter', 'Movie Center', localTipo[2], 'Activo', 'Tres Cruces', 10, 'imgMovieCenter'));
localesList.push(new Local('kinko', 'kinko', 'Kinko', localTipo[0], 'Activo', 'Tres Cruces', 10, 'imgKinko'));

reservasList.push(new Reserva('La mostaza', 'fbarrios', 'Pendiente', 5, '11/07'));
reservasList.push(new Reserva('McDonalds', 'ragosto', 'Cancelada', 10, '11/03'));
reservasList.push(new Reserva('Burger King', 'eperez', 'Pendiente', 6, '31/12'));
reservasList.push(new Reserva('Movie Center', 'eperez', 'Cancelada', 2, '12/01'));
reservasList.push(new Reserva('La mostaza', 'fbarrios', 'Pendiente', 2, '26/011'));

personasList.push(new Persona("fbarrios", "Fbarrios123", "Fabricio"));
personasList.push(new Persona("eperez", "Fbarrios123", "Emiliano"));
personasList.push(new Persona("ragosto", "RAgosto123", "Roberto"));



/*----------------------------------------------------------------*/
/*-------------------------- LOGIN INI ---------------------------*/
getElementDQS("#btnLogin").addEventListener("click", iniciarSesion);

/**
 * F01 - Iniciar sesión.
 * @returns boolean
 */
function iniciarSesion() {
    cleanSessionUser();
    let login = false;
    let alert = `Debe completar los campos Usuario y contraseña.`;
    let usuario = String(getElementDQS("#txtLoginUsuario").value).trim();
    let contrasena = String(getElementDQS("#txtLoginContrasena").value).trim();

    //Valido que los datos no coincidan con usuarios tipo Persona o Local.
    let objUsuario = getPersona("usuario", usuario);

    if (objUsuario === undefined) objUsuario = getLocal("usuario", usuario);

    if (objUsuario !== undefined) {
        if (objUsuario.contrasena === contrasena) login = true;
        else alert = `La contraseña ingresada no es correcta. Intente nuevamente.`;
    }
    else alert = `El usuario no existe. Intente nuevamente.`

    if (!login) showAlert("#sectLoginAlertMsg", alert);
    else {
        setSessionUser(objUsuario.usuario, objUsuario.contrasena);
        cargarDatosInicio();
        getElementDQS("#seccionLogin").classList.add("hidden");
        getElementDQS("#seccionInicio").classList.remove("hidden");
    }
}

getElementDQS("#btnLoginRegistrarse").addEventListener("click", () => {
    getElementDQS("#seccionLogin").classList.add("hidden");
    getElementDQS("#seccionRegistro").classList.remove("hidden");
});
/*-------------------------- LOGIN END ---------------------------*/
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
/*------------------------- REGISTRO INI -------------------------*/
getElementDQS("#btnRegistrarse").addEventListener("click", registrarse);

function registrarse() {
    cleanSessionUser();
    let registrarse = false;
    let usuario = String(getElementDQS("#txtRegUsuario").value).trim();
    let contrasena = String(getElementDQS("#txtRegContrasena").value).trim();
    let nombre = String(getElementDQS("#txtRegNombre").value).trim();
    let alert = `Debe completar los campos Usuario y contraseña.`;
    let nuevoUsuario;

    if (usuario.length > 0 && contrasena.length > 0) {

        usuario = replaceAccents(charReplaceAllsDefault(usuario));
        contrasena = replaceAccents(charReplaceAllsDefault(contrasena));
        nombre = replaceAccents(charReplaceAllsDefault(nombre));

        //Valido que el usuario no este usado.
        if (getPersona("usuario", usuario) || getLocal("usuario", usuario)) {
            alert = `El nombre ${usuario} ya se encuentra utilizado.`;
        }
        else { //Si usuario es valido, valido contraseña...
            if (!validatePassword(contrasena)) {
                alert = `La contraseña no es valida.`;
            }
            else //Si se encuentra utilizado, muestro alert y limpio los campos
            if (validatePassword(contrasena)) {
                nuevoUsuario = new Persona(usuario, contrasena, nombre);
                registrarse = true;
            }
            else {
                alert = `No se pudo crear el usuario. Intente nuevamente!`;
            }
        }
    }
    if (!registrarse) {
        showAlert(`#sectRegAlertMsg`, alert);
        cleanFields();
    } 
    else {
        personasList.push(nuevoUsuario);
        setSessionUser(nuevoUsuario.usuario, nuevoUsuario.contrasena);
        setTimeout(() => {
            alert = `El usuario se creó con exito!`;
        }, 5000);
        getElementDQS("#seccionRegistro").classList.add("hidden");
        getElementDQS("#seccionInicio").classList.remove("hidden");
    }
}
/*------------------------- REGISTRO END -------------------------*/
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
/*------------------------- RESERVAS INI -------------------------*/
let reservasPendientes = getReservasByEstado(reservasEstados[0]);
let reservasCanceladas = getReservasByEstado(reservasEstados[3]);

//Llevo los listados de reservas a la vista
if (reservasPendientes.length > 0) {
    const ulListPending = getElementDQS("#sectRes-PendingList");
    let htmlRes = "";
    for (let i = 0; i < reservasPendientes.length; i++) {
        htmlRes += getHTMLFromReservasPendientes(reservasPendientes[i]);
    }
    if (htmlRes.length > 0) ulListPending.innerHTML = htmlRes;
}

if (reservasCanceladas.length > 0) {
    const ulListClosed = getElementDQS("#sectRes-ClosedList");
    let htmlRes = "";
    for (let i = 0; i < reservasCanceladas.length; i++) {
        htmlRes += getHTMLFromReservasCanceladas(reservasCanceladas[i]);
    }
    if (htmlRes.length > 0) ulListClosed.innerHTML = htmlRes;
}
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
//Agrego los eventos según estado de reserva
let btnCancelarReservas = document.querySelectorAll(".btnliResPend");
let btnCalificarReservas = document.querySelectorAll(".slLiResCerr");

for (let i = 0; i < btnCancelarReservas.length; i++) {
    btnCancelarReservas[i].addEventListener("click", cancelarReserva);
}

for (let i = 0; i < btnCalificarReservas.length; i++) {
    btnCalificarReservas[i].addEventListener("change", calificarReserva);
}

function cancelarReserva() {
    const reserva = getReserva("id", Number(this.getAttribute("data-id")));
    if (confirm(`Seguro que quiere cancelar esta reserva en ${reserva.nombreLocal}?`)) {
        reserva.cancelarReserva();
    }
}

function calificarReserva() {
    const reserva = getReserva("id", Number(this.getAttribute("data-id")));
    let calificacion = Number(getElementDQS(`#sl${reserva.id}`).value);
    if (confirm(`Seguro que quiere calificar con ${reserva.nombreLocal}/5 esta reserva en ${reserva.nombreLocal}?`)) {
        reserva.calificarReserva(calificacion);
    }
}
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
//Agrego listado de locales a selector de nueva solicitud de reserva
const slResSolLocales = getElementDQS("#slResSolLocales");
const slResSolCupos = getElementDQS("#slResSolCupos");

slResSolLocales.innerHTML += cargarSelectLocalesEnHTML();
slResSolLocales.addEventListener("change", actualizarSelCupos);

getElementDQS("#slResSolSolicitar").addEventListener("click", () => {
    let idLocal = Number(slResSolLocales.value);
    let cantCupos = Number(slResSolCupos.value);
    if (confirm("¿Confirmar nueva reserva?")) {
        generarNuevaReserva(usuarioActivoU, idLocal, cantCupos);
    }
});



/*------------------------- RESERVAS END -------------------------*/
/*----------------------------------------------------------------*/