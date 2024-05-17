const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const paragrafo = "##########################";
console.log(paragrafo);
console.log("Olá! Bem-vindo a calculadora de partidas rankeadas!");
console.log(paragrafo);

rl.question('Qual é o seu número de vitórias? ', (vitorias) => {
  rl.question('Qual é o seu número de derrotas? ', (derrotas) => {
    const nivel = calculadora(parseInt(vitorias), parseInt(derrotas));
    console.log(nivel);
    rl.close();
  });
});

function calculadora(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;

  if (saldoVitorias < 10) {
    return "O Herói tem um saldo de " + saldoVitorias + " e está no nível Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    return "O Herói tem um saldo de " + saldoVitorias + " e está no nível Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    return "O Herói tem um saldo de " + saldoVitorias + " e está no nível Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    return "O Herói tem um saldo de " + saldoVitorias + " e está no nível Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    return "O Herói tem um saldo de " + saldoVitorias + " e está no nível Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    return "O Herói tem um saldo de " + saldoVitorias + " e está no nível Lendário";
  } else {
    return "O Herói tem um saldo de " + saldoVitorias + " e está no nível Imortal";
  }
}
