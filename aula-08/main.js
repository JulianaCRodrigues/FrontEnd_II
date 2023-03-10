// Eventos

// detecção de quando a página carrega

window.addEventListener ("load", () => console.log ("Carregou"))
// só vai aparecer quanto tudo que está associado ao site for carregado
// todos os elementos

//-----------------------------------------------------------------

const userEmailREf = document.querySelector("#userEmail");
const userPasswordRef = document.querySelector("#userPassword");
const loginButtonREf = document.querySelector("#loginButton");

var userDate = {
  email: "",
  password: "",
};

function validarSenha(senha) {

  userDate.password = senha;
}

function validarEmail(email) {

  if(email===""){
 loginButtonREf.ariaDisabled = true;
   
  } else {
    userDate.email = email
    loginButtonREf.ariaDisabled = false;
  }
  
  userDate.email = email;
  //console.log(email); 
  // console.log(userEmailRef.value)
}

function login(event) {
  event.preventDeFault();
  console.log(userDate);
}

userEmailREf.addEventListener("keyup", (event) =>
  validarEmail(event.target.value)
);
// ou userEmailREf.addEventListener("keyup", (event) => userDate.email(event.target.value));
// contudo não é usado pois nas funções é onde se coloca as validações
// além de colocar as regras para realizar cada evento
// isso também deve-se ao fato que os dados de formulários erão armazenados
// e reutilizados em outro lugar ou enviado para um API


userPasswordRef.addEventListener("keyup", (event) =>
  validarSenha(event.target.value)
);
loginButtonREf.addEventListener("click", (event) => login(event));


//---------------------------------------------------------------------------

// nova forma de ccaptar ações realizadas no html
//exeplo click de buttun

const testeButtunRef = document.querySelector("#testeButtun");

function clickBotao() {
  console.log("O botão foi clicado");
}
testeButtunRef.addEventListener("click", clickBotao);

/* Nao se pode colocar parentes quando se está colocando 
uma função como callback ou parâmtro para outra função
isso pq se colocar os parenteses clickBotao o JS entende 
que está chamando/pedindo para executar a função*/

/* Agora se é necessário que a função sejá necessária executada, 
eu passo um callback para que ela seja somente executada quando 
for chamada pelo html se usa arrow function 



exemplo:


function clickBotao(mensagem){
  console.log `Essa é a sua ${mensagem}`)
}
testeButtunRef.addEventListener("click", (event) => clickBotao("Bem-Vindo!"))


Desta forma eu consigo descobrir que tipod e vento está ocorrendo

function clickBotao(event){
  console.log(event)
}
testeButtunRef.addEventListener("click", (event) => clickBotao(event))


*/
