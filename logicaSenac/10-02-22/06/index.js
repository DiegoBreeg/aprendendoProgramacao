var m;
var h;
var d;
var s=parseInt(prompt("Insira a quantidade de segundos!"));

if((s>=60)&&(s<3600)){
    m=s/60;
    document.write( s+" segundos equivalem a: "+m+" minutos");
} else
if((s>=3600)&&(s<86400)){
    h=s/3600;
    document.write( s+" segundos equivalem a: "+h+" horas");
} else
if(s>=86400){
    d=s/86400;
    document.write(s+" segundos equivalem a: "+d+" dias");
}