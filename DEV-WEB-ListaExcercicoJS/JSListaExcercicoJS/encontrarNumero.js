
function encontrarNumero(){
    console.log("Executando...")

    const input_01_value = Number(document.getElementById("input_01").value)
    const input_02_value = Number(document.getElementById("input_02").value)
    const input_03_value = Number(document.getElementById("input_03").value)
    const input_04_value = Number(document.getElementById("input_04").value)
    const input_05_value = Number(document.getElementById("input_05").value)
    const input_06_value = Number(document.getElementById("input_06").value)
    const input_07_value = Number(document.getElementById("input_07").value)
    const input_08_value = Number(document.getElementById("input_08").value)
    const input_09_value = Number(document.getElementById("input_09").value)
    const input_10_value = Number(document.getElementById("input_10").value)


    const input = [input_01_value, input_02_value, input_03_value, input_04_value, input_05_value, input_06_value, input_07_value, input_08_value, input_09_value, input_10_value ];


    const resultado = input.includes(input);

    console.log(resultado)
}