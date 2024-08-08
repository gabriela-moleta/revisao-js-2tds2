let metaLivros = 5;
let livrosLidos = ["Harry Potter", "Trono de Vidro", "Para Todos os Garotos que eu já amei", "É Assim que Acaba"];

let livro = [];


for (let i = 0; i < livro.length; i++) {
    console.log(livro[i]);
}

if (livrosLidos.length >= metaLivros) {
    console.log("Parabéns! Você atingiu sua meta de leitura!");
} else {
    let faltam = metaLivros - livrosLidos.length;
    console.log("Você está progredindo! Faltam " + faltam + " livros para atingir sua meta.");
}