//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//aqui fornecemos o função para armazenar os nomes
let amigos = []

//função para adicionar os nomes
function adicionarAmigo(){
    const inputAmigo = document.getElementById ("amigo");
    const nome = inputAmigo.value.trim(); 

    if (nome === ""){
        alert("por favor, insira um nome.");
        return;
    }
    amigos.push(nome);
    atualizarListaAmigos();
    inputAmigo.value = "";

}

function atualizarListaAmigos() {
    const lista = document.getElementById ("listaAmigos");
    lista.innerHTML = "" ;

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}