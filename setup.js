import Main from './Main.js';
import global from './global.js';

global.deviceType = "POINTER";

function start() {
    if(global.deviceType == "POINTER") {
        document.getElementById("pointer-start").classList.remove("display-none");
    }
    new Main(global.deviceType);
}

if('xr' in navigator) {
    navigator.xr.isSessionSupported( 'immersive-vr' )
        .then(function (supported) {
            if (supported) {
                global.deviceType = "XR";
            }
        }).catch(function() {
            //Do nothing for now...
        }).finally( () => {
            start();
        });
} else {
    start();
}
