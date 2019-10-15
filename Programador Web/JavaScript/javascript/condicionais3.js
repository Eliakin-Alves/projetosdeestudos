function calcular() {
    preço = parseFloat(document.getElementById("preço").value);
    quantidade = parseFloat(document.getElementById("quantidade").value);
    total = preço*quantidade;
    if (quantidade>9) {
        desconto = total*0.3;
    }
    else {
        desconto = 0;
    }
    document.getElementById("result").innerHTML = total - desconto;
    document.getElementById("desconto").innerHTML = desconto;
}