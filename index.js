const fs = require("fs");

// primeiro arquivo JSON, leio e converto em JS
let rawData1 = fs.readFileSync("broken_database_1.json", "utf-8");
let database1 = JSON.parse(rawData1);

// segundo arquivo JSON, leio e converto em JS
let rawData2 = fs.readFileSync("broken_database_2.json", "utf-8");
let database2 = JSON.parse(rawData2);

// Corrigindo o primeiro
for (let i = 0; i < database1.length; i++) {
  // faço um for para percorrer todo o banco de dados
  if (database1[i].nome) {
    database1[i].nome = database1[i].nome.replace(/æ/g, "a").replace(/ø/g, "o"); // Percorro o campo "nome", caso tenha erro, os corrijo
  }
  if (typeof database1[i].vendas === "string") {
    database1[i].vendas = parseFloat(database1[i].vendas); // Percorro o campo "vendas", os corrijo
  }
}

// Corrigindo o segundo
for (let i = 0; i < database2.length; i++) {
  if (database2[i].marca) {
    database2[i].marca = database2[i].marca
      .replace(/æ/g, "a")
      .replace(/ø/g, "o"); // Percorro o campo "marcas", caso tenha erro, os corrijo
  }
}

// Salvando os arquivos corrigidos, colocando novamente em JSON
fs.writeFileSync("fixed_database_1.json", JSON.stringify(database1, null, 2));
fs.writeFileSync("fixed_database_2.json", JSON.stringify(database2, null, 2));

console.log("Arquivos corrigidos e salvos!");
