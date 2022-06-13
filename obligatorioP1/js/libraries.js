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
function showAlert(id, msg) {
    const alert = getElementDQS(id);
    alert.innerHTML = `${msg}`;
    setTimeout(() => alert.innerHTML = "", 5000);
}
function cleanFields() {
    getElementDQS("#txtRegUsuario").innerHTML = "";
    getElementDQS("#txtRegContrasena").innerHTML = "";
    getElementDQS("#txtRegNombre").innerHTML = "";
}

/*----------------------------------------------------------------*/
/*----------------------- VALIDAR DATOS INI ----------------------*/
function validatePassword(password) {
    let retVal = false;
    if (password.length > 5) {
        let isUppercaseLetter = false;
        let isNumber = false;
        //Si getUnicode() retorna 0 o 1, tiene al menos una letra o un número
        for (let i = 0; i < password.length; i++) {
            if (!isUppercaseLetter) {
                isUppercaseLetter = hasUppercaseLetter(password[i]);
            }
            if (!isNumber) {
                isNumber = hasNumber(password[i]);
            }
        }
        retVal = isUppercaseLetter && isNumber;
    }
    return retVal;
}
//65-90 <-- A-Z
function hasUppercaseLetter(strVal) {
    let retVal = false;  
    let unicodeValue = getUnicodeValue(strVal);
    if (unicodeValue >= 65 && unicodeValue <= 90) {
        retVal = true;
    }
    return retVal;
}
//97-122 <-- a-z
function hasLowercaseLetter(strVal) {
    let retVal = false;  
    let unicodeValue = getUnicodeValue(strVal);
    if (unicodeValue >= 97 && unicodeValue <= 122) {
        retVal = true;
    }
    return retVal;
}
//48-57 <-- 0-9
function hasNumber(strVal) {
    let retVal = false;  
    let unicodeValue = getUnicodeValue(strVal);
    if (unicodeValue >= 48 && unicodeValue <= 57) {
        retVal = true;
    }
    return retVal;
}
function getUnicodeValue(strVal) {
    return strVal.charCodeAt(0);
}
/*----------------------- VALIDAR DATOS END ----------------------*/
/*----------------------------------------------------------------*/
/**
 * Retorna el objeto de dentro del array, filtrando por la propiedad 
 * especificada, si no lo encuentra, retorna undefined
 * @param {array} arr 
 * @param {string} prop 
 * @param {string} busqueda 
 * @returns
 */
function getObjectFromArray(arr, prop, busqueda) {
    let obj;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][prop] === busqueda) obj = arr[i];
    }
    return obj;
}