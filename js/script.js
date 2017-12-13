var btnElement = document.getElementById('submit');
btnElement.onclick = function () {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var fullName = firstName+' '+lastName;
    document.getElementById('fullName').value = fullName;

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var firstName1 = document.getElementById("firstName1");
var lastName1 = document.getElementById("lastName1");

firstName1.onkeyup= function (){
    var x = document.getElementById("firstName1").value;
    document.getElementById("first").innerHTML=x;
}
lastName1.onkeyup= function (){
    var y = document.getElementById("lastName1").value;
    document.getElementById("last").innerHTML=y;
}

lastName1.onblur = function () {
    var x = document.getElementById("firstName1").value;
    var y = document.getElementById("lastName1").value;
    var z = x+" "+y;
    document.getElementById("full").innerHTML=z;
}

/////////////////////////////////////////////////////////////////////////////////////////////

var lastName2 = document.getElementById('lastName2');
lastName2.onblur = function () {
    var p = document.getElementById("firstName2").value;
    var q = document.getElementById("lastName2").value;
    var r = p+" "+q;
    document.getElementById("fullName2").value=r;
}

















// var btnElement = document.getElementById('fullName1');
// btnElement.keyup = function () {
//     var firstName1 = document.getElementById('firstName1').value;
//     var lastName1 = document.getElementById('lastName1').value;
//     var fullName1 = firstName1+' '+lastName1;
//     document.getElementById('fullName1').value = fullName1;
//
// }
