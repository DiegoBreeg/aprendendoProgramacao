var n=parseInt(prompt("Digite o primeiro número inteiro positivo"));
var m=parseInt(prompt("Digite o segundo número inteiro positivo"));
var auxiliar=0;
var soma=0;

if((n>0)&&(m>0)){
    while((n>0)&&(m>0)){    
        if (n<m){
            while(n<=m){
                soma=soma+n;
                document.write(n+" ");
                n++;
            }
        document.write("soma="+soma);
        n=0;
        } else
        if(n==m){
            soma=n+m;
            document.write("soma="+soma);
            n=0;
        } else{
            auxiliar=n;
            n=m;
            m=auxiliar;
        }
    }
} else{
    document.write(n+" "+m);
}