const botao = document.querySelector("button")
botao.addEventListener("click", multiplicacao)

const num1 = Number(document.querySelector(".1").value)
const num2 = Number(document.querySelector(".2").value)
const num3 = Number(document.querySelector(".3").value)

function multiplicacao (num1,num2,num3) {
    console.log(num1)
    const p = document.querySelector(".paragrafo")
    p.innerHTML = `Resultado = ${num1*num2*num3}`
}