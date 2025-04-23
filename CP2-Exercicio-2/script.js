const peso_input = document.getElementById("peso")
const altura_input = document.getElementById("altura")
const valor_imc = document.getElementById("valor_imc")
const categoria = document.getElementById("categoria")
const botao = document.getElementById("botao")

botao.addEventListener("click", function calcular_imc() {
    peso = parseFloat(peso_input.value)
    altura = parseFloat(altura_input.value)
    let imc = peso / altura * altura
    valor_imc.textContent = imc
    console.log(peso)
    console.log(altura)
    console.log(imc)
    if (imc < 18.5) {
        categoria.textContent = "Abaixo do peso!!!"
    } else if (imc < 24.9) {
        categoria.textContent = "Peso normal!!!"
    } else if (imc < 29.9) {
        categoria.textContent = "Sobrepeso!!!"
    } else if (imc < 34.9) {
        categoria.textContent = "Obesidade Grau 1!!!"
    } else {
        categoria.textContent = "Obesidade Grau 2!!!"
    }
})

