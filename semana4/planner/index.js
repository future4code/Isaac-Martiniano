
function adicionarTarefa() {
    const meuInput = document.getElementById("meu-input")
    const Segunda = document.getElementById("segunda")
    if (meuInput.value === "" || meuInput.value === " "){
        alert("Digite um Item válido")
    } else {
        Segunda.innerHTML += "<li>" + meuInput.value + "</li>";
    }
}