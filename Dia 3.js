const futuro = prompt("Seguir para área de Front-End ou Back-End");

if (futuro == "Front-End") {
  const front = prompt("Quer aprender React ou Vue");
}

if (futuro == "Back-End") {
  const back = prompt("Quer aprender Java ou C#");
}

const especialização = prompt("Você quer se especializar na area escolhida ou se desenvolver para se tornar Fullstack? [Digite 1 ou 2]");

if (especialização == 1) {
  alert(`Bom, você escolheu se especializer em ${futuro}`);
}

if (especialização == 2) {
  alert("Você escoheu ser um desenvolvedor Fullstack");
}

let fim = 0

while (fim < 1) {
  const aprenderMais = prompt("Tem mais alguma tecnologia que você gostaria de aprender? [S/N]");
  if (aprenderMais == 'S') {
    const aprender = prompt("[python | php | c++ | html | css | javascript] ");
    if (aprender == 'python') {
      alert("Python é uma linguagem de uso geral, que pode ser utilizada para diversas aplicações. Apresenta uma sintaxe simples, tornando os programas mais legíveis, o que também facilita o aprendizado da linguagem. Possui listas, dicionários e tuplas como estruturas de dados pré-definidas.");
    }
    if (aprender == 'php') {
      alert("PHP é uma linguagem de programação voltada para o desenvolvimento de aplicações para a web e para criar sites, favorecendo a conexão entre os servidores e a interface do usuário.");
    }
    if (aprender == 'c++') {
      alert("O C++ é uma linguagem de programação de nível médio, baseada na linguagem C. O desenvolvimento da linguagem começou na década de 80, por Bjarne Stroustrup. O objetivo do desenvolvimento desta linguagem era melhorar uma versão do núcleo Unix.");
    }
    if (aprender == 'html') {
      alert("HTML abreviação para a expressão inglesa HyperText Markup Language, que significa: Linguagem de Marcação de Hipertexto é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.");
    }
    if (aprender == 'css') {
      alert("CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML, por exemplo. De forma prática, ela funciona como uma camada de personalização ao conteúdo visível.");
    }
    if (aprender == 'javascript') {
      alert("JavaScript é uma linguagem de script orientada a objetos, multiplataforma. É uma linguagem pequena e leve. Dentro de um ambiente de host (por exemplo, um navegador web) o JavaScript pode ser ligado aos objetos deste ambiente para prover um controle programático sobre eles.");
    }
  }
  if (aprenderMais == 'N'){
    fim = 1
  }
}

