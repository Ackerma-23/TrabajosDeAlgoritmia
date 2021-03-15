function multiplicar(){
    var base = parseInt(document.getElementById("N1").value);
    var altura = parseInt(document.getElementById("N2").value);
    var r = (base * altura) ;
    document.getElementById("resultado").innerHTML = r;

}