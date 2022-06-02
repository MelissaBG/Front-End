
functioncalcular()
{
    console.timeLog("Calcularodo...")

    
    const input_01_value = Number(document.getElementById("numero_01").value)
    const input_02_value = Number(document.getElementById("numero_02").value)
    const input_03_value = Number(document.getElementById("numero_03").value)

    const resultado = input_01 + input_02 + input_03
    console.log(resultado)

    const inputResultado = document.getElementById("input_resultado")
    inputResultado.innerHTML = resultado
}