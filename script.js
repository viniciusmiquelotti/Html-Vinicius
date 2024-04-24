document.addEventListener('DOMContentLoaded', function() {
    var listaNomes = document.getElementById('listaNomes');
    var nomes = [
        "João Silva", "Maria Souza", "Pedro Santos", "Ana Oliveira",
        "Luiz Costa", "Carolina Almeida", "Rafael Rocha", "Fernanda Fernandes",
        "Gustavo Lima", "Juliana Santos", "Marcos Castro", "Sandra Pereira",
        "Lucas Mendes", "Amanda Rodrigues", "Diego Gomes", "Larissa Barbosa",
        "Ricardo Alves", "Camila Sousa", "Gabriel Castro", "Mariana Cardoso",
        "Samuel Faria dos Santos", "Otavio Augusto de Souza Silva", "Vinicius Miquelotti Caldeira"
    ];

    function adicionarNome() {
        var nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
        var div = document.createElement('div');
        div.textContent = nomeAleatorio;
        listaNomes.appendChild(div);

        // Remova o nome após um tempo para evitar sobrecarga da página
        setTimeout(function() {
            listaNomes.removeChild(div);
        }, 5000);
    }

    // Adicione um novo nome a cada segundo
    setInterval(adicionarNome, 1000);

    var musicaFundo = document.getElementById('musicaFundo');
    musicaFundo.volume = 0.5; // Ajuste o volume conforme necessário
});
