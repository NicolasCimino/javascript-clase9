var todoMayuscula = function(a)
{
let resultado = a.toUpperCase();
document.getElementById("resultado").value = resultado;
}

var primerosCinco = function(a)
{
let resultado = a.substring(0,5);
document.getElementById("resultado").value = resultado;
}

var ultimosTres = function(a)
{
    let largo = a.length;
    let resultado = a.substring(largo-3,largo);
    document.getElementById("resultado").value =resultado;
}

var primeraMayuscula = function(a)
{
    let resultado = a.substring(0,1).toUpperCase() + a.substring(1).toLowerCase();
    document.getElementById("resultado").value = resultado;
}

var primerEspacio = function(a)
{
    let resultado = a.indexOf(" ");
    document.getElementById("resultado").value = resultado;
}

var separar = function(a)
{
    let indice = a.indexOf(" ");
    let palabra1 = a.substring(0,1).toUpperCase() + a.substring(1,indice).toLowerCase(); 
    let palabra2 = a.substring(indice+1,indice+2).toUpperCase() + a.substring(indice+2).toLowerCase();
    document.getElementById("resultado").value = palabra1 + " " + palabra2;
}
