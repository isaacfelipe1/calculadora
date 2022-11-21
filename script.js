 //Eventos em JavaScript
 function adiconarCaracter(num) {
    const ValorDisplay= document.querySelector(".display").value
    document.querySelector(".display").value=ValorDisplay+num
    ValorDisplay=ValorDisplay+num
}
function limparTela() {
    document.querySelector(".display").value=""  
}
function calcular() {
    const ValorDisplay= document.querySelector(".display").value
    document.querySelector(".display").value=eval(ValorDisplay)
}
function inverterNumero(params) {
    const ValorDisplay= document.querySelector(".display").value
    document.querySelector(".display").value=ValorDisplay*-1
}