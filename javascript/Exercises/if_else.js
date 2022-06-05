var compararUnMedio = function (a)
{
if( a >= 0.5)
{
    alert( "Greater than 0,5" );
}
else
{
    alert( "Lower than 0,5" );
}
}

var edad = function()
{
    return (Math.random(0,1)*100);
}

var edadRango = function(a)
{
if(a < 2)
{
    alert( "Bebe" );
}
if( a >= 2 & a <= 12 )
{
    alert( "Niño" );
}
if( a >= 13 & a <= 19 )
{
    alert( "Adolescente" );
}
if( a >= 20 & a <= 30 )
{
    alert( "Joven" );
}
if( a >= 31 & a <= 60 )
{
    alert( "Adulto" );
}
if( a >= 61 & a <= 75 )
{
    alert( "Adulto mayor" );
}
if( a >= 75 & a <= 100 )
{
    alert( "Anciano" );
}
}