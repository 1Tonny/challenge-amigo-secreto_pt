function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');  // Obtém o campo de texto
    const amigoNome = amigoInput.value.trim();           // Obtém o valor do campo e remove espaços extras

    if (amigoNome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = amigoNome;

    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.appendChild(li);
    amigoInput.value = '';
}

function sortearAmigo() {
    const listaAmigos = document.querySelectorAll('#listaAmigos li');  
    const resultado = document.getElementById('resultado');          
    const botaoNovoSorteio = document.getElementById('botaoNovoSorteio');  

    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio].textContent;

    resultado.innerHTML = `<li>Amigo secreto sorteado: ${amigoSorteado}</li>`;

    botaoNovoSorteio.style.display = 'block';
}

function novoSorteio() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    const botaoNovoSorteio = document.getElementById('botaoNovoSorteio');
    botaoNovoSorteio.style.display = 'none';
}
  
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {  
        adicionarAmigo();  
    }
});
