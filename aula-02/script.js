
var numeroVezesUsuarioVenceu = 0
var numeroVezesOponenteVenceu = 0


for ( numeroVezesUsuarioVenceu = 0; jogadaUsuario > jogadaOponente; numeroVezesUsuarioVenceu++) {
  if (numeroVezesUsuarioVenceu ===3)
  break;
  console.log (numeroVezesUsuarioVenceu )
}


for (numeroVezesOponenteVenceu=0 ;jogadaOponente > jogadaUsuario; numeroVezesOponenteVenceu++) {
  if (numeroVezesOponenteVenceu ===3)
  break;
  console.log(numeroVezesOponenteVenceu)
}


function verificarganhador (jogadaUsuario,jogadaOponente){
  if(   jogadaUsuario === 1 && jogadaOponente=== 2){
    console.log('Você perdeu! ')
  } else if (jogadaUsuario === 1 && jogadaOponente === 3) {
      console.log ('Você Perdeu!')
    }
  else if (jogadaUsuario === 2 && jogadaOponente === 3){
    console.log('Você perdeu!')

  } else if (jogadaUsuario === jogadaOponente){
    console.log('Deu empate!')
  } else {
    console.log('Você venceu!!')
  }
 
}



function comecarJogo(){
  
  let jogadaUsuario = Number(prompt ('O que você deseja jogar? 1 = predra, 2 = papel, 3 = tesoura'))
  let jogadaOponente =Math.floor(Math.random() * 3) + 1

  verificarganhador (jogadaUsuario, jogadaOponente)
  console.log(jogadaUsuario) // ou parseInt
  console.log (jogadaOponente)


}

function perguntaUsuarioDesejaJogar() {
  let usuarioDesejaJogar = confirm ('Você gostaria de jogar?')
  if (usuarioDesejaJogar === true){
    comecarJogo()

  }
  else {
    alert ('Obrigado por visitar a página!')
  }
}


perguntaUsuarioDesejaJogar()









