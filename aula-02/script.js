// Função que irá captar as contagens de partidas ganhas de cada jogador e denominaro ganhador, perdedor ou empate do jogo
function defineVencedorJogo(pontosUsuario, pontosOponente) {
  if (pontosUsuario > pontosOponente) {
    alert("Você ganhou o jogo!");
  } else if (pontosOponente > pontosUsuario) {
    alert("Você perdeu!");
  } else {
    alert("Deu empate!");
  }
}

//Função para determinar os vencedores em cada possivél jogada e atribuir
function defineVencedorPartida(JogadaUsuario, jogadaOponente) {
  if (JogadaUsuario === 1 && jogadaOponente === 2) {
    console.log("Você perdeu! ");
    return 1;
  } else if (JogadaUsuario === 1 && jogadaOponente === 3) {
    console.log("Você venceu!");
    return 2;
  } else if (JogadaUsuario === 2 && jogadaOponente === 3) {
    console.log("Você perdeu!");
    return 1;
  } else if (JogadaUsuario === jogadaOponente) {
    console.log("Deu empate!");
    return 0;
  } else {
    console.log("Você venceu!!");
    return 2;
  }
}

// funcao principal que inicia cada rodada do jogo
function comecarJogo() {
  let iniciarPartida = confirm("Você gostaria de jogar?");
  if (!iniciarPartida) {
    alert("Partida cancelada! Obrigado por visitar a página!");
    return;
  }
  let pontosUsuario = 0; // variavel para incrementar a ponuaçao de cada rodada ganha
  let pontosOponente = 0; // variavel para incrementar a ponuaçao de cada rodada ganha

  // Executo um laço for 5 vezes
  // Este laço é feito para determinhar a quantidade de vezes que deseja que seja executada a ação
  for (let qtdPartidas = 0; qtdPartidas < 5; qtdPartidas++) {
    let jogadaUsuario = Number(
      prompt("O que você deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura")
    );

    // executa enquanto a jogada do usuario for diferente de 1 , 2 e 3
    while (jogadaUsuario !== 1 && jogadaUsuario !== 2 && jogadaUsuario !== 3) {
      alert("Jogada inválida. Tente novamente!");
      jogadaUsuario = Number(
        prompt("O que você deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura")
      );
    }

    // math.random retorna um numero entre 0 e 0.99.
    // ao multiplicarmos por 3 teremos no maximo o numero 2.97
    // o math.floor corta a parte decimal do numero, entao sempre teremos um numero entre 0 e 2
    // como nossa opcaos sao de 1 a 3, somamos 1 ao resultado

    const jogadaOponente = Math.floor(Math.random() * 3) + 1;

    const resultadoPartida = defineVencedorPartida(
      jogadaUsuario,
      jogadaOponente
    );

    //incrementa a pontuacao para o vencedor de cada rodada
    if (resultadoPartida === 2) {
      pontosUsuario += 1;
    } else if (resultadoPartida === 1) {
      pontosOponente = +1;
    }

    alert(
      `O usuário jogou ${jogadaUsuario} e o oponente jogou ${jogadaOponente}.`
    );
    console.log(jogadaUsuario);
    console.log(jogadaOponente);
  }

  defineVencedorJogo(pontosUsuario, pontosOponente);
}
comecarJogo();
