function verificarSenha(usuario, senha){
  if(usuario === "Pedro" && senha === 1234){
     return true;
}else{
    return false;
}
}

let usuario = "Pedro";
let senha = 1234;
let verificacao = verificarSenha(usuario, senha);
if(verificacao){
  console.log("usuário entrou!");
}else{
  console.log("usuário ou senha incorretos!");
}
