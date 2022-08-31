const frase = (`Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`)
console.log(frase);

const fraseNova = (frase.replaceAll ("verde", "rosa"))
const fraseNova2 = (fraseNova.replaceAll("azul", "laranja"))
console.log(fraseNova2);

console.log(fraseNova2.includes("verde"));
console.log(fraseNova2.includes("laranja"));

const fraseNova3 = (frase.replaceAll ("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR"))
console.log(fraseNova3);