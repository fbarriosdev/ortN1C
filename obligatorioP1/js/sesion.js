//Usuario de la sesión
let usuarioSesionU = "";
let usuarioSesionC = "";

function cleanSessionUser() {
    usuarioSessionU = "";
    usuarioSessionC = "";
}

function setSessionUser(user, pass) {
    usuarioSessionU = user;
    usuarioSessionC = pass;
}

function cargarDatosInicio() {
    let usuario;
    usuario = getPersona("usuario", usuarioSesionC);
    if (usuario === undefined) usuario = getLocal("usuario", usuario);
    if (usuario !== undefined) {
        getElementDQS("#sectIniTitleNombre").innerHTML = usuario.getNombre();
    }
}