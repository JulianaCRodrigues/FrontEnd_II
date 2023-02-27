function divisao(num1, num2) {
  if (num2 === 0) {
    console.log("Não pode dividir");
  }
  return num1 / num2;
}

export {divisao}; // comando para funcar ser exportada para outro local
//console.log(divisao(1,2))
