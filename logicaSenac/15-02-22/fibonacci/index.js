var termo=parseInt(prompt("digite o termo que você que saber no fibonacci"));

var primeiro=0; var segundo=1; var x=3; var fibonacci; var terceiro;

document.write("1 termo é: "+primeiro);
document.write("<br>");
document.write("2 termo é: "+segundo);
document.write("<br>");

while(x<=termo){
    fibonacci=primeiro+segundo;
    primeiro=segundo;
    segundo=fibonacci;
    document.write(x+" termo é: "+fibonacci);
    document.write("<br>");
    x++;
}
// 0    1   1   2   3   5   8   13
   