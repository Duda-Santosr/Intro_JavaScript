const clicou=()=>{
    let num1 = parseFloat(document.getElementById("resul1").value)
    let num2 = parseFloat(document.getElementById("resul2").value)

    let soma= num1+num2


    document.getElementById("resultado").innerText = soma
}