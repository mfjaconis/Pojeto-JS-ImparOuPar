// Escreva um programa que verifique se um número é par ou ímpar e exiba a mensagem no console.

function verificar() {
    let numero = parseInt(document.getElementById("numero").value)

    if (numero % 2 == 0) {
        document.getElementById("resultado").innerHTML = " digitado é par."
    } else {
        document.getElementById("resultado").innerHTML = "digitado é impar."
    }
}
