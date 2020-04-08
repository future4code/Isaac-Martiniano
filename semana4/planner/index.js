
function adicionarTarefa() {
    const meuInput = document.getElementById("novaTarefa")
    const diaSemana = document.getElementById("dia-da-semana")
    
    const Domingo = document.getElementById("domingo")
    const Segunda = document.getElementById("segunda")
    const Terca = document.getElementById("terca")
    const Quarta = document.getElementById("quarta")
    const Quinta = document.getElementById("quinta")
    const Sexta = document.getElementById("sexta")
    const Sabado = document.getElementById("sabado")
    

    if (diaSemana.value === "domingo"){
        Domingo.innerHTML += "<li>" + meuInput.value + "</li>"
    }else if (diaSemana.value === "segunda"){
        Segunda.innerHTML += "<li>" + meuInput.value + "</li>"
    }else if (diaSemana.value === "terca") {
        Terca.innerHTML += "<li>" + meuInput.value + "</li>"
    }else if (diaSemana.value === "quarta") {
        Quarta.innerHTML += "<li>" + meuInput.value + "</li>"
    }else if (diaSemana.value === "quinta") {
        Quinta.innerHTML += "<li>" + meuInput.value + "</li>"    
    }else if (diaSemana.value === "sexta") {
        Sexta.innerHTML += "<li>" + meuInput.value + "</li>"    
    }else if (diaSemana.value === "sabado") {
        Sabado.innerHTML += "<li>" + meuInput.value + "</li>"
    }        
}