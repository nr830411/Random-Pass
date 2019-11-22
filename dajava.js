
//generate random pass

function generate(){

    var random = document.getElementById("slider").value;

    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    var password = "";

    for(var i = 0; i <= random; i++){

        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));

    }


    document.getElementById("display").value = password;

}

document.getElementById("length").textContent = "Length: 25";
document.getElementById("slider").oninput = function() {

    if(document.getElementById("slider").value > 8){
        document.getElementById("length").textContent = "Length: " + document.getElementById("slider").value;
    }
     else{
        document.getElementById("length").textContent = "Length: 8";
    }

}
function copypass() {

 document.getElementById("display").select();
    document.getElementById("display");
        alert ("PassWord Copied to Clipboard")

}


