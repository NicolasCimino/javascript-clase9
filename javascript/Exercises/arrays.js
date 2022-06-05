var mostrarMeses = function()
{
    let meses =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
    let resultado = meses[4] + " " + meses[10];
    console.log(resultado);  

}

var ordenarMeses = function()
{
    let meses =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    meses.sort();
    console.log(meses);
}

var agregar = function(a,b)
{
    let meses =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    console.log("original: " + meses);
    meses.unshift(a);
    meses.push(b);
    console.log( "Resultado: " + meses);
}

var quitar = function()
{
    let meses =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    console.log("original: " + meses);
    meses.pop();
    meses.shift();
    console.log( "Resultado: " + meses);
}

var alreves = function()
{
    let meses =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    meses.reverse();
    console.log(meses);
}

var unir = function()
{
    let meses =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    let resultado = meses.join("-");
    console.log(resultado);
}

var cortarArray = function()
{
    let meses =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    let resultado = meses.slice(4,12);
    console.log(resultado);
}