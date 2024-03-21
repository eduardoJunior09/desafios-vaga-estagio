/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function strInvert(inputString) {
  //a função é responsavel por receber a string e transformar em um array, depois esse array é invertido e transformado em string
  const caracteres = [],
    caracteresInvert = [];
  for (let i = 0; i < inputString.length; i++) {
    caracteres[i] = inputString.charAt(i);
  }

  for (let i = caracteres.length; i >= 0; i--) {
    caracteresInvert.push(caracteres[i]);
  }

  return caracteresInvert.join("");
}

const inputString = "bolo"; // informada a string
const stringInvertida = strInvert(inputString); //chamada da função para inverter a string
console.log(stringInvertida);
