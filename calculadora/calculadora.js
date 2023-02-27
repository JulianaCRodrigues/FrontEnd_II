// import comando para importar a funcao para este arquivo
import {soma} from './somar.js';
import {subtracao} from "./subtrair.js";
import {multiplicacao} from "./multiplicar.js";
import {divisao} from "./dividir.js";

soma();
console.log (soma(2,3))

subtracao();
console.log(subtracao(5,3))

multiplicacao();
console.log(multiplicacao(2,2))

divisao();
console.log(divisao(1,2))


/*
No entanto, nos coloca para pensar…

1 - O que teria acontecido se, em vez de gerar um arquivo para cada operação matemática, tivéssemos programado tudo no mesmo arquivo?
 
    Neste caso simplificaria o codigo tornando mais eficiente e organizado.
    Contudo este é uma atividade simples, dependendo do que está sendo feito separar determinadas partes do código em diferentes arquivos
    vai facilitar no momento que for necessário fazer alguma alteração ou ajuste.


2 - Por que o melhor caminho é gerar diferentes arquivos e depois requerê-los em um único arquivo?
  Justamente pois facilita a manutenção e acesso de forma mais rápida e eficaz nos arquivos.


3 - Esta metodologia de trabalho será uma constante a partir de agora?
  Sim


*/