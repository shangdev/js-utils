/**
 * Set a cookie.
 * 
 * @param {string} name Cookie name.
 * @param {string} value Cookie value.
 * @param {number} days Expires.
 */
function setCookie(name, value, days) {
    let expires = '';

    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

/**
 * Get a cookie.
 * 
 * @param {string} name Cookie name.
 */
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }

        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }

    return null;
}

/**
 * Delete a cookie.
 * 
 * @param {string} name Cookie name.
 */
function eraseCookie(name) {   
    document.cookie = name + '=; Max-Age=-99999999;';  
}