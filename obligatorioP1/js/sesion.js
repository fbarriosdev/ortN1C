//Usuario de la sesión
let usuarioSesionU = "";
let usuarioSesionC = "";
let usuarioSesion = {};

function cleanSessionUser() {
    usuarioSesion = {};
    usuarioSesionU = "";
    usuarioSesionC = "";
}

function setSessionUser(objUsuario) {
    console.log(objUsuario);
    if (objUsuario !== undefined) usuarioSesion = objUsuario;
    else {
        usuarioSesion = getPersona("usuario", user);
        if (usuarioSesion === undefined) usuarioSesion = getLocal("usuario", user);
    }
    //Muestro las ventanas correspondientes según perfil de usuario
    if (usuarioSesion instanceof Local) {
        mostrarBotones("btnLocal");
    } else
    if (usuarioSesion instanceof Persona) {
        mostrarBotones("btnPersona");
    }
}

function cargarDatosInicio() {
    getElementDQS("#sectIniTitleNombre").innerHTML = usuarioSesion.getNombre();
    getElementDQS("#headerUserTag").innerHTML = `${
        (usuarioSesion.toString().length > 0) ? "Login" : usuarioSesion.getNombre()
    }`;
    if (usuarioSesion instanceof Local) actualizarCampoCuposCantActual(usuarioSesion.getMaxCupos());
}

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
    let usuario = String(getElementDQS("#txtLoginUsuario").value).trim().toLowerCase();
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
        setSessionUser(objUsuario, objUsuario.nombre);
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

        usuario = replaceAccents(charReplaceAllsDefault(usuario)).toLowerCase();
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
        setSessionUser(nuevoUsuario, nuevoUsuario.nombre);
        cargarDatosInicio();
        setTimeout(() => {
            alert = `El usuario se creó con exito!`;
        }, 5000);
        getElementDQS("#seccionRegistro").classList.add("hidden");
        getElementDQS("#seccionInicio").classList.remove("hidden");
    }
}
/*------------------------- REGISTRO END -------------------------*/
/*----------------------------------------------------------------*/

getElementDQS("#btnSeccionLogin").addEventListener("click", () => {
    cleanSessionUser();
    ocultarSecciones();
    ocultarMenu(botones);
});