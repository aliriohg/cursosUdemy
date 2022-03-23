'use strict'

//BOM browser object model
function getBOM() {
    console.log('window.innerHeight', window.innerHeight);
    console.log('screen.height', screen.height);
}

function redirect(url) {
    window.location.href(url);
}