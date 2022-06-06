var suma = function(a,b)
{
    return parseInt(a) + parseInt(b);
}

var sumaValidada = function(a,b)
{
    if(!isNaN(parseFloat(a)) & !isNaN(parseFloat(b)))
    {
        return parseFloat(a) + parseFloat(b);
    }
    else
    {
        alert("NaN");
        return NaN;
    }
}

var validarInt = function(a)
{
    if(Number.isInteger(parseFloat(a)))
    {
        return parseInt(a);
    }
    else
    {
        alert("NaN");
        return NaN;
    }
}

var validarSumaInt = function(a,b)
{
    if (!isNaN(parseFloat(a)) & !isNaN(parseFloat(b))) 
    {
        if(Number.isInteger(parseFloat(a)) & Number.isInteger(parseFloat(b)))
        {
            return parseInt(a) + parseInt(b);
        }else
        {   
            alert("Hay un float");
            return parseInt(a) + parseInt(b);
        }
    }
    else
    {
        alert("NaN");
        return NaN;
    }
}

var validarSumaInt2 = function(a,b)
{
    if (sonNumericos(a,b)) 
    {
        if(sonEnteros(a,b))
        {
            return parseInt(a) + parseInt(b);
        }else
        {   
            alert("Hay un float");
            return parseInt(a) + parseInt(b);
        }
    }
    else
    {
        alert("NaN");
        return NaN;
    }
}

var sonNumericos = function(a,b)
{
    if (!isNaN(parseFloat(a)) & !isNaN(parseFloat(b))) 
    {
            return true; 
    }
    else
    {
        return false;
    }
}

var sonEnteros= function(a,b)
{
    if(Number.isInteger(parseFloat(a)) & Number.isInteger(parseFloat(b)))
    {
        return true;
    }else
    {   
        return false;
    }
}