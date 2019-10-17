loginSistema = "admin";
senhaSistema = "1234";
function logar() {
    loginForm = document.getElementById("login").value;
    senhaForm = document.getElementById("senha").value;
    if(loginForm == loginSistema && senhaForm == senhaSistema) {
        alert("Login Correto");
        window.location.href = "https://www.google.com";
    }
    else {
        alert ("Login Inválido")
    }
}