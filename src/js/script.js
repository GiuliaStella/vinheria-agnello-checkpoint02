// guardando os dados do usuarios em variaveis globais
let nomeUsuario = "";
let sobrenomeUsuario = "";
let emailUsuario = "";
 
 
// Variáveis para contar cadastros
let totalCadastros = 0;
let totalEstoqueBaixo = 0;
let vinhoMaisAntigoSafra = 9999;
let vinhoMaisAntigoNome = "";
 
// variáveis numeradas dos vinhos
let nome1 = "", nome2 = "", nome3 = "", nome4 = "", nome5 = "";
let tipo1 = "", tipo2 = "", tipo3 = "", tipo4 = "", tipo5 = "";
let safra1 = 0,  safra2 = 0,  safra3 = 0,  safra4 = 0,  safra5 = 0;
let quant1 = 0,  quant2 = 0,  quant3 = 0,  quant4 = 0,  quant5 = 0;
 
 
// cadastro do usuario via prompt
const botaoUsuario = document.getElementById('abrirCadastre-se');
 
botaoUsuario.addEventListener('click', function (event) {
    event.preventDefault();
 
    // chama as variaveis globais
    nomeUsuario = prompt("Digite seu nome:");
    sobrenomeUsuario = prompt("Digite seu sobrenome:");
    emailUsuario = prompt("Digite seu e-mail:");
 
    // usando validarEntrada() no lugar do if manual
    if (!validarEntrada(nomeUsuario) || !validarEntrada(sobrenomeUsuario) || !validarEntrada(emailUsuario)) {
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
 
//função para salvar nas variáveis numeradas
function salvarVinhoNumerado(numero, nome, tipo, safra, quantidade) {
    if (numero === 1) { nome1 = nome; tipo1 = tipo; safra1 = safra; quant1 = quantidade; }
    else if (numero === 2) { nome2 = nome; tipo2 = tipo; safra2 = safra; quant2 = quantidade; }
    else if (numero === 3) { nome3 = nome; tipo3 = tipo; safra3 = safra; quant3 = quantidade; }
    else if (numero === 4) { nome4 = nome; tipo4 = tipo; safra4 = safra; quant4 = quantidade; }
    else if (numero === 5) { nome5 = nome; tipo5 = tipo; safra5 = safra; quant5 = quantidade; }
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
 
        // usando validarEntrada() no lugar do if manual
        if (!validarEntrada(nomeProduto) || !validarEntrada(tipoProduto) || !validarEntrada(safraOuAno, "numero") || !validarEntrada(quantidade, "numero")) {
            alert("Todos os campos são obrigatórios!");
            return;
        }
 
        const anoNum = Number(safraOuAno);
        const quantidadeNum = Number(quantidade);
        const classificacao = classificarVinho(anoNum);
        const estoqueBaixo = isEstoqueBaixo(quantidadeNum);
 
        alert("Vinho cadastrado com sucesso! Veja os detalhes do vinho no console.");
 
 
        // Exibindo tudo no console de forma organizada
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
 
        // salvar nas variáveis numeradas
        salvarVinhoNumerado(totalCadastros, nomeProduto, tipoProduto, anoNum, quantidadeNum);
 
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




