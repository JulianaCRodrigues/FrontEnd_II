const userTitleRef = document.querySelector(".userTitle");
const userUrlRef = document.querySelector(".userUrlImage");
const userDescriptionRef = document.querySelector(".userDescription");
const registerButtonRef = document.querySelector("#registerButton");


var userCurso = {
  title: "",
  password: "",
  url: "",
};

const urlRegex = /^(http|https):\/\/([\w]+\.)+[\w]{2,63}(\/[\w\/]*)*$/;

function validarTitulo(senha) {

  userDate.password = senha;
}

function validarDescricao(text) {

  //if(){
  // console.log("certo")
 // } else {
 //   console.log("deu ruim")
 // }
  // } else if (){
  //   registerButtonRef.disabled = true;
    
  // } else{
  //   registerButtonRef.disabled = false;
  // }
  
  // userCurso.title = text;
  //console.log(email); 
  //console.log(userEmailRef.value)
}

function validarUrl(url) {
  if (!urlRegex.test(userUrlRef.value)) {
    console.log("erro")
  } else {
    console.log("foi")
  }
}

function register(event) {
  event.preventDeFault();
}

userTitleRef.addEventListener("keyup", (event) =>
   validarTitulo(event.target.value)
);

userUrlRef.addEventListener("blur", (event) => 
  validarUrl(event.target.value)
);


userDescriptionRef.addEventListener("input", (event) => 
  validarDescricao(event.target.value)
  // console.log(userDescriptionRef.value)
);


 registerButtonRef.addEventListener("click", (event) => register(event));




// for (let felino of felinos) {
//   containertRef.innerHTML += `
//       <div class="item">
//           <img src="${felino.imagem}"/>
//           <h2>${felino.titulo}</h2>
//           <p>${felino.descricao}
//           </p>
//       </div>`;
// }
