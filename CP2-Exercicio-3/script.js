const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Digite um numero...\n--> ", (numero) => {
    if (numero > 0) {
        console.log("Seu numero é positivo!");
    } else if (numero == 0) {
        console.log("Seu numero é igual a 0!");
    } else {
        console.log("Seu numero é negativo!");
    }
    readline.close();
})