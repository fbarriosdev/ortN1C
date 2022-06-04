/*REGISTRO*/
getElementDQS("#btnRegistrarse").addEventListener("click", registrarse);

function registrarse() {
    let username = String(getElementDQS("#txtRegUsuario").value).trim();
    let password = String(getElementDQS("#txtRegContrasena").value).trim();
    let nombre = String(getElementDQS("#txtRegNombre").value).trim();
    let isValid = false;

    //console.log(`u: ${username}, p: ${password}, nombre: ${nombre}`);

    username = replaceAccents(charReplaceAllsDefault(username));
    password = replaceAccents(charReplaceAllsDefault(password));
    nombre = replaceAccents(charReplaceAllsDefault(nombre));

    //Valido que el username no este usado.
    console.log(findPersonByUser(username));
    console.log(findLocalByUser(username));
    isValid = findPersonByUser(username) && findLocalByUser(username);
    console.log(isValid);
    console.log(`u: ${username}, p: ${password}, n: ${nombre}, valid: ${isValid}`);

    //Si username es valido, valido contraseña...
    isValid = isValid ? validatePassword(password) : isValid;
    console.log(`u: ${username}, p: ${password}, n: ${nombre}, valid: ${isValid}`);
    //Si se encuentra utilizado, muestro alert y limpio los campos
    if (!isValid) {
        showAlert(`El nombre de usuario ya se encuentra utilizado.<br>Intente nuevamente`);
        cleanFields();
    }
    else {
        console.log(`El usuario se creó con exito!`);
    }
}
