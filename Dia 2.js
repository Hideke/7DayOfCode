const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const lang = prompt("Qual linguagem de programação você está estudando?");
const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${lang}!"!`;

alert(msg);

const novo = prompt(`Você gosta de estudar ${lang}? [S/N]`);
if (novo == "s"){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (novo == "n"){
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
