
var app = {
    // Application Constructor
    initialize: function() {
                 console.log("inicial...");
               document.addEventListener('deviceready', this.onDeviceReady, false);
         console.log("inicializada");
    $("#btnfoto").click(function(event){

                console.log("echando foto");
                alert("Echando foto");


            })
 
    },
    onDeviceReady: function() {
            console.log("el disp esta listo");
               }
};

app.initialize();