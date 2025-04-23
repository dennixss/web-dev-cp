const exibir_hora = document.getElementById("hora")
const exibir_saudacao = document.getElementById("saudacao")

const hora = 20

exibir_hora.textContent = `Horário de Brasília: ${hora}h`
if (hora > 6 && hora < 12) {
    exibir_saudacao.textContent = "Bom dia!!!"
} else if (hora < 18) {
    exibir_saudacao.textContent = "Boa tarde!!!"
} else {
    exibir_saudacao.textContent = "Boa noite!!!"
}