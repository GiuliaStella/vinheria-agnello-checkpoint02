// guardando os dados do usuarios em variaveis globais para o console.log
let nomeUsuario = "";
let sobrenomeUsuario = "";
let emailUsuario = "";


// cadastro do usuario via prompt
const botaoUsuario = document.getElementById('abrirCadastre-se');

botaoUsuario.addEventListener('click', function (event) {
    event.preventDefault();

    // chama as variaveis globais
    nomeUsuario = prompt("Digite seu nome:");
    sobrenomeUsuario = prompt("Digite seu sobrenome:");
    emailUsuario = prompt("Digite seu e-mail:");

    if (!nomeUsuario || !sobrenomeUsuario || !emailUsuario) {
        alert("Preencha todos os campos do formulário!");
        return;
    }

    if (!emailUsuario.includes("@")) {
        alert("E-mail inválido!");
        return;
    }

    alert("Cadastro realizado com sucesso! Bem-vindo, " + nomeUsuario + "!");
});

// cadastro de vinho via prompt
const botaoVinho = document.getElementById('abrirCadastroVinho');

botaoVinho.addEventListener('click', function (event) {
    event.preventDefault();

    const nomeProduto = prompt("Digite o nome do rótulo do vinho:");
    const tipoProduto = prompt("Digite o tipo do vinho(Tinto, Branco ou Rosé):");
    const safraOuAno = prompt("Digite a safra ou ano de fabricação:");
    const quantidade = prompt("Digite a quantidade em estoque:");

    if (!nomeProduto || !tipoProduto || !safraOuAno || !quantidade) {
        alert("Todos os campos são obrigatórios!");
        return;
    }

    alert("Vinho cadastrado com sucesso! Veja os detalhes do vinho no console.");

    // ETAPA 3: Exibindo tudo no console de forma organizada
    console.log("==============================");
    console.log("      DADOS DO USUÁRIO        ");
    console.log("==============================");
    console.log(`👤 Nome Completo: ${nomeUsuario} ${sobrenomeUsuario}`);
    console.log(`📧 E-mail:        ${emailUsuario}`);

    console.log("\n==============================");
    console.log("    DETALHES DO PRODUTO       ");
    console.log("==============================");
    console.log(`📋 Nome:        ${nomeProduto}`);
    console.log(`🎨 Tipo:        ${tipoProduto}`);
    console.log(`📅 Ano/Safra:   ${safraOuAno}`);
    console.log(`📦 Estoque:     ${quantidade} unidade(s)`);
    console.log("==============================");
});

function validarEntrada(valor, tipo = "texto") {
    if (valor === null || valor.trim() === "") {
        return false;
    }
    if (tipo === "numero") {
        return !isNaN(valor) && Number(valor) >= 0;
    }
    return true;
}
function isEstoqueBaixo(quantidade) {
    const LIMITE_MINIMO = 5;
    return quantidade < LIMITE_MINIMO;
}
function classificarVinho(anoFabricacao) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoFabricacao;

    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 10) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}
function exibirDadosVinho(vinho) {
    const mensagem = `
            🍷 RELATÓRIO DO VINHO:
            Nome: ${vinho.nome}
            Classificação: ${vinho.classificacao}
            Estoque: ${vinho.estoque} unidades
            ${vinho.estoqueBaixo ? "⚠️ ATENÇÃO: Estoque Baixo!" : "✅ Estoque OK"}
        `;

    console.log(mensagem);
    alert(mensagem);
}
function processarCadastro() {
    // Captura os valores dos inputs
    const nome = document.getElementById('nomeVinho').value;
    const ano = document.getElementById('anoVinho').value;
    const qtd = document.getElementById('qtdVinho').value;

    // Validação
    if (!validarEntrada(nome) || !validarEntrada(ano, "numero") || !validarEntrada(qtd, "numero")) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Processamento
    const vinhoObjeto = {
        nome: nome,
        classificacao: classificarVinho(parseInt(ano)),
        estoque: parseInt(qtd),
        estoqueBaixo: isEstoqueBaixo(parseInt(qtd))
    };

    // Saída
    exibirDadosVinho(vinhoObjeto);
}





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




