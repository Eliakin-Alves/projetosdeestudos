function calcular() {
    idade = parseInt(document.getElementById("idade").value);
    
    if (idade<=7){
        result = "infantil A ";
    }
    else if (idade<=10){
        result = "infantil B ";
    }
    else if (idade<=17) {
        result = "juvenil ";
    }
    else{
        result = "adulto";
    }
    document.getElementById("result").innerHTML = result;
    
}