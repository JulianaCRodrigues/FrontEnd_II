

// Aqui é feito a melhora do codigo em uma só função

function manipularVisibilidademenu() {
  let menu = document.querySelector("#menuPrincipal");

  menu.classList.toggle("opened");

 // menu.style.XXXX (raramente usado)
}



/*
Forma para entender a funcionalidade 


function abrirMenu() {
  let menu = document.querySelector("#menuPrincipal");

  menu.classList.add("opened");
}

function fecharMenu() {
 

  menu.classList.remove("opened");
}
*/
