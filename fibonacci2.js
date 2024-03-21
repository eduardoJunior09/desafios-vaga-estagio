/* 
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function fibonacci(n) {
  // Definindo os dois primeiros números da sequência
  let a = 0;
  let b = 1;

  // Loop para gerar a sequência até o n-ésimo número
  for (let i = 0; i < n; i++) {
    // Armazenando o valor anterior de b
    let temp = a;

    // Atualizando a com o valor de b
    a = b;

    // Somando a e b para calcular o próximo número da sequência
    b = temp + a;
  }

  // Retornando o n-ésimo número da sequência
  return a;
}

function verificaFibonacci(numero) {
  // Verificando se o número é menor que 0
  if (numero < 0) {
    return false;
  }

  // Gerando os primeiros n + 2 números da sequência
  let n2 = fibonacci(numero + 2);

  // Verificando se o número está presente na sequência
  for (let i = 0; i <= numero; i++) {
    let fibonacciAtual = fibonacci(i);
    if (numero === fibonacciAtual) {
      return true;
    }
  }

  // Retornando falso se o número não estiver presente na sequência
  return false;
}

// Exemplo de uso
let numero = 13;
let resultado = fibonacci(numero);
console.log(`O ${numero}º número da sequência de Fibonacci é: ${resultado}`);

if (verificaFibonacci(numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
