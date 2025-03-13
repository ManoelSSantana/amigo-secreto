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

//atualizar a lista de amigos
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


//função para sortear um dos nomes
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
