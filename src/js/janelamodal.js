// Modal dos devs
var botaoAbrir = document.getElementById('abrirdevs');
var botaoFechar = document.getElementById('fecharDevs');
var janela = document.getElementById('modalDevs');

botaoAbrir.addEventListener('click', function() {
    janela.classList.add('visivel');
});

botaoFechar.addEventListener('click', function() {
    janela.classList.remove('visivel');
});

janela.addEventListener('click', function(event) {
    if (event.target === janela) {
        janela.classList.remove('visivel');
    }
});