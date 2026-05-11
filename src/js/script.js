// guardando os dados do usuarios em variaveis globais para o console.log
let nomeUsuario = "";
let sobrenomeUsuario = "";
let emailUsuario = "";


// Variáveis para contar cadastros
let totalCadastros = 0;
let totalEstoqueBaixo = 0;
let vinhoMaisAntigoSafra = 9999;
let vinhoMaisAntigoNome = "";


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

// funcoes reutilizaveis
function validarEntrada(valor, tipo = "texto") {
    if (valor === null || valor === undefined || valor.trim() === "") {
        return false;
    }
    if (tipo === "numero") {
        return !isNaN(valor) && Number(valor) >= 0;
    }
    return true;
}
function isEstoqueBaixo(quantidade) {
    const LIMITE_MINIMO = 5;
    return Number(quantidade) < LIMITE_MINIMO;
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

function exibirDadosVinho(nome, tipo, safra, quantidade, classificacao, estoqueBaixo) {
    let mensagem = "🍷 RELATÓRIO DO VINHO:\n";
    mensagem += "Nome: " + nome + "\n";
    mensagem += "Tipo: " + tipo + "\n";
    mensagem += "Safra: " + safra + "\n";
    mensagem += "Estoque: " + quantidade + " unidades\n";
    mensagem += "Classificação: " + classificacao + "\n";
    
    if (estoqueBaixo) {
        mensagem += "⚠️ ATENÇÃO: Estoque Baixo!";
    } else {
        mensagem += "✅ Estoque OK";
    }

    console.log(mensagem);
    alert(mensagem);
}


// cadastro de vinho via prompt
const botaoVinho = document.getElementById('abrirCadastroVinho');

botaoVinho.addEventListener('click', function (event) {
    event.preventDefault();

    let continuar = true;

    while (continuar) {
        const nomeProduto = prompt("Digite o nome do rótulo do vinho:");
        const tipoProduto = prompt("Digite o tipo do vinho(Tinto, Branco ou Rosé):");
        const safraOuAno = prompt("Digite a safra ou ano de fabricação:");
        const quantidade = prompt("Digite a quantidade em estoque:");

        if (!nomeProduto || !tipoProduto || !safraOuAno || !quantidade) {
            alert("Todos os campos são obrigatórios!");
            return;
        }

        const anoNum = Number(safraOuAno);
        const quantidadeNum = Number(quantidade);
        const classificacao = classificarVinho(anoNum);
        const estoqueBaixo = isEstoqueBaixo(quantidadeNum);

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
        console.log(`📅 Ano/Safra:   ${anoNum}`);
        console.log(`📦 Estoque:     ${quantidadeNum} unidade(s)`);
        console.log(`🍷 Classificação: ${classificacao}`);
        console.log("==============================");



        // Atualizar contadores
        totalCadastros++;
        if (estoqueBaixo) {
            totalEstoqueBaixo++;
        }
        if (anoNum < vinhoMaisAntigoSafra) {
            vinhoMaisAntigoSafra = anoNum;
            vinhoMaisAntigoNome = nomeProduto;
        }
        // Exibir dados do vinho
        exibirDadosVinho(nomeProduto, tipoProduto, anoNum, quantidadeNum, classificacao, estoqueBaixo);


        // Perguntar se deseja cadastrar outro
        const resposta = prompt("Deseja cadastrar outro vinho? (sim/não):");
        if (resposta !== "sim" && resposta !== "Sim") {
            continuar = false;
        }
    }

    // Exibir relatório final
    let relatorio = "\n════════════════════════════════════════\n";
    relatorio += "       RELATÓRIO FINAL DE CADASTROS    \n";
    relatorio += "═══════════════════════════════════════════\n\n";
    relatorio += "Total de cadastros realizados: " + totalCadastros + "\n";
    relatorio += "Vinhos com estoque baixo: " + totalEstoqueBaixo + "\n";
    relatorio += "Vinho com safra mais antiga: " + vinhoMaisAntigoNome + " (" + vinhoMaisAntigoSafra + ")\n";

    console.log(relatorio);
    alert(relatorio);
});

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
    const anoNum = parseInt(ano);
    const qtdNum = parseInt(qtd);
    const classificacao = classificarVinho(anoNum);
    const estoqueBaixo = isEstoqueBaixo(qtdNum);

    // Saída
    exibirDadosVinho(nome, "Tipo", anoNum, qtdNum, classificacao, estoqueBaixo);
}


// Modal dos devs
var botaoAbrir = document.getElementById('abrirdevs');
var botaoFechar = document.getElementById('fecharDevs');
var janela = document.getElementById('modalDevs');

botaoAbrir.addEventListener('click', function () {
    janela.classList.add('visivel');
});

botaoFechar.addEventListener('click', function () {
    janela.classList.remove('visivel');
});

janela.addEventListener('click', function (event) {
    if (event.target === janela) {
        janela.classList.remove('visivel');
    }
});




