
var app = {
    // Application Constructor
    initialize: function() {
                 console.log("inicial...");
               document.addEventListener('deviceready', this.onDeviceReady, false);
         console.log("inicializada");
    },
    onDeviceReady: function() {
            console.log("el disp esta listo");

    }
};

app.initialize();