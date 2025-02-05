// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');  // Obtém o campo de texto
    const amigoNome = amigoInput.value.trim();           // Obtém o valor do campo e remove espaços extras

    // Valida se o campo está vazio
    if (amigoNome === '') {
        alert('Por favor, insira um nome válido!');  // Exibe um alerta caso o campo esteja vazio
        return;
    }

    // Cria um novo item de lista
    const li = document.createElement('li');
    li.textContent = amigoNome;

    // Adiciona o nome à lista exibida
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.appendChild(li);

    // Limpa o campo de texto após adicionar
    amigoInput.value = '';
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    const listaAmigos = document.querySelectorAll('#listaAmigos li');  
    const resultado = document.getElementById('resultado');          
    const botaoNovoSorteio = document.getElementById('botaoNovoSorteio');  // 

    // Verifica se há itens na lista
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    // Gera um índice baseado no número de itens na lista
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio].textContent; // Obtém o nome sorteado

    // Exibe o resultado
    resultado.innerHTML = `<li>Amigo secreto sorteado: ${amigoSorteado}</li>`;

    // Exibe o botão de novo sorteio
    botaoNovoSorteio.style.display = 'block';
}

// Função para fazer um novo sorteio
function novoSorteio() {
    // Limpa o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Oculta o botão de novo sorteio
    const botaoNovoSorteio = document.getElementById('botaoNovoSorteio');
    botaoNovoSorteio.style.display = 'none';
}

// Adiciona evento de "Enter" no campo de texto para adicionar o amigo
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {  // Verifica se a tecla pressionada foi 'Enter'
        adicionarAmigo();  // Chama a função de adicionar amigo
    }
});
