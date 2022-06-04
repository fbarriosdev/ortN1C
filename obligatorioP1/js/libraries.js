function charReplaceAllsDefault(toReplace) {
    return charReplaceAlls(toReplace, "");
}
function charReplaceAlls(toReplace, replaceWith) {
    const chars = [".", ",", "-", "_", " ", ";", ":", "?", "¿", "!", "¡", "@", "{", "}", "[", "]"];
    return charReplaceAll(toReplace, chars, replaceWith);
}
function charReplaceAll(toReplace, chars, replaceWith) {
    let retVal = toReplace;
    chars.forEach((e) => {
        retVal = charReplace(retVal, e, replaceWith);
    })
    return retVal;
}
function charReplace(toReplace, char, replaceWith) {
    let retVal = "";
    for(let i = 0; i < toReplace.length; i++) {
            retVal += (toReplace.charAt(i) === char) ? replaceWith : toReplace.charAt(i);
    }
    return retVal;
}
function replaceAccents(toReplace) {
    let tildes = "áéíóúÁÉÍÓÚ";
    let sinTildes = "aeiouAEIOU";
    for (let i = 0; i < tildes.length; i++) {
        toReplace = charReplace(toReplace, tildes.charAt(i), sinTildes.charAt(i));
    }
    return toReplace;
}
function splitString(ci, ini, end) {
    return ci.substring(ini, end);
}
function getElementDQS(el) {
    return document.querySelector(el);
}
function showAlert(msg) {
    const alert = getElementDQS("#sectAlert");
    alert.innerHTML = `${msg}`;
    setTimeout(() => alert.innerHTML = "", 5000);
}
function cleanFields() {
    getElementDQS("#txtRegUsuario").innerHTML = "";
    getElementDQS("#txtRegContrasena").innerHTML = "";
    getElementDQS("#txtRegNombre").innerHTML = "";
}

function validatePassword(password) {
    let retVal = false;
    if (password.length > 5) {
        //Si getUnicode() retorna 0 o 1, tiene al menos una letra o un número
        for (let i = 0; i < password.length; i++) {
            let hasLetter = false;
            let hasNumber = false;
            if (!hasLetter) {
                hasLetter = hasLetter(password[i]);
            }
            if (!hasNumber) {
                hasNumber = hasNumber(password[i]);
            }
        }
        retVal = hasLetter && hasNumber;
    }
    return retVal;
}
//65-90 <-- A-Z, 97-122 <-- a-z
function hasLetter(strVal) {
    let retVal = false;  
    let unicodeValue = getUnicodeValue(strVal);
    if ((unicodeValue >= 65 && unicodeValue <= 90) 
        || (unicodeValue >= 97 && unicodeValue <= 122)) {
        retVal = true;
    }
    return retVal;
}
function getUnicodeValue(strVal) {
    return strVal.charCodeAt(0);
}