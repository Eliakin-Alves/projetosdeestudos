function calcular() {
    sexo = document.getElementById("sexo").value;
    altura = parseFloat(document.getElementById("altura").value);
    if(sexo = "m") {
        pesoIdeal = (72.7*altura) - 58;
    }
    else {
        pesoIdeal = (62.1*altura) - 44.7;
    }
    document.getElementById("result").innerHTML = pesoIdeal + " peso ideal";
}