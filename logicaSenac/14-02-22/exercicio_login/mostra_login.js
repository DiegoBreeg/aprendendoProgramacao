//usuário tem 03 tentativas para logar;
//alerta para informar boas vindas + nome de login;

var loginCadastro  = "senac";
var senhaCadastrada = "123";
var tentativa = 3;


while(tentativa > 0){
    var loginInformado = prompt("Informe login ");
    var senhaInformada = prompt("Informe senha ");
    
    if((loginInformado==loginCadastro)&&(senhaInformada==senhaCadastrada)){
        document.write("<h3>Loguin efetuado com sucesso!</h3>");
        tentativa=0;
    } else{
        alert("Login ou senha incorretos! Tente novamente!");
        tentativa--;
        alert("Você tem direito a mais " + tentativa);
    }    
}

