function verificar() {
    nota = parseFloat(document.getElementById("nota").value);
    percentual = parseFloat(document.getElementById("percentual").value);
    if(nota>=60 && percentual>75) {
        document.getElementById("result").innerHTML = "APROVADO";
    }
    else {
        document.getElementById("result").innerHTML = "REPROVADO";
    }
}