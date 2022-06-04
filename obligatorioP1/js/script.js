/*REGISTRO*/
function registro() {
    let usuario = getElementDQS("#txtRegUsuario");
    let contrasena = getElementDQS("#txtRegContrasena");
    let nombre = getElementDQS("#txtNombre");

    usuario = replaceAccents(charReplaceAllsDefault(usuario));
    password = replaceAccents(charReplaceAllsDefault(contrasena));
    nombre = replaceAccents(charReplaceAllsDefault(nombre));

    // Valido que el username no este usado
}
