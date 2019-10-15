function calcular() {
    n1 = parseInt(document.getElementById("nota1").value);
    n2 = parseInt(document.getElementById("nota2").value);
    media = (n1+n2)/2
    if (media>50){
        document.getElementById("result").innerHTML ="Aprovado"
        document.getElementById("result").style.color = "blue"
        document.getElementById("result").style.backgroundColor = "orange"
    }
    else{
        document.getElementById("result").innerHTML = "Reprovado"
        document.getElementById("result").style.color = "red"
        document.getElementById("result").style.backgroundColor = "black"
    }
}