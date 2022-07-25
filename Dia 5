let frutas = [];
let latinicios = [];
let congelados = [];
let doces = [];
let carnes = [];
let fim = 1;


while (fim > 0) {
  const quest = prompt("Deseja adicionar comina na sua lista de compras? [S/N]");
  
  if (quest == "S") {
    const comida = prompt("Qual comida deseja adicionar? ");
    const categoria = prompt("Qual a categoria dessa comida? [frutas / latinicios / congelados / doces / carnes]");
    
    if (categoria == "frutas") {
      frutas.push(`${comida}`);
    }
    if (categoria == "latiinios") {
      latiinios.push(`${comida}`);
    }
    if (categoria == "congelados") {
      congelados.push(comida);
    }
    if (categoria == "doces") {
      doces.push(comida);
    }
    if (categoria == "carnes") {
      carnes.push(comida);
    }
  }
  if (quest == "N") {
    alert(`Frutas: ${frutas} \nCarnes: ${carnes} \nCongelados:${congelados} \nDoces: ${doces} \nlatinicios: ${latinicios}`);
    fim = 0;
  }
}
