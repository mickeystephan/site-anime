// Função para realizar a pesquisa de filmes
function searchFilms() {
    // Obtém o valor digitado no campo de pesquisa
    var input = document.getElementById('searchInput').value.toLowerCase();
    // Obtém todos os contêineres de filmes
    var filmes = document.querySelectorAll('.film_container');

    // Itera sobre cada contêiner de filme
    filmes.forEach(function(filme) {
        // Obtém o texto do título do filme dentro do contêiner
        var titulo = filme.getElementsByTagName('p')[0].innerText.toLowerCase();
        
        // Verifica se o título do filme contém o texto de pesquisa
        if (titulo.includes(input)) {
            // Se corresponder, exibe o contêiner de filme
            filme.style.display = 'block';
        } else {
            // Se não corresponder, oculta o contêiner de filme
            filme.style.display = 'none';
        }
    });
}
