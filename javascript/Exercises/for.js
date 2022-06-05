var recorrer = function()
{
    let palabras = ["plabra 1","palabra 2","palabra 3","palabra 4","palabra 5"]
    for(i=0;i<5;i++)
    {
    alert(palabras[i]);
    }
}
var recorrerPrimeraMayus = function()
{
    let palabras = ["plabra 1","palabra 2","palabra 3","palabra 4","palabra 5"]
    let aux;
    for(i=0;i<5;i++)
    {
        aux = palabras[i].substring(0,1).toUpperCase() + palabras[i].substring(1).toLowerCase(); 
        alert(aux);
    }
}

var sentence = function()
{
    let palabras = ["plabra 1","palabra 2","palabra 3","palabra 4","palabra 5"]
    let sentence ="";
    for(i=0;i<5;i++)
    {
        sentence+=palabras[i];
    }
    alert(sentence);
}

var recorrerArray = function()
{
    let palabras = new Array();
    for(i=0;i<10;i++)
    {
       palabras[i] =i;
    }
    console.log(palabras);
}