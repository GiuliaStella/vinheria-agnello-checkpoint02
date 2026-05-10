// 1. Primeiro declaramos o botão que está no HTML
const botao = document.getElementById('cadastroForm');

// 2. Adicionamos um único evento de clique
botao.addEventListener('submit', function (event) {
    event.preventDefault();
    // ETAPA 1: Pegar os dados do formulário HTML
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validações básicas do formulário
    if (!nome || !sobrenome || !email) {
        alert("Preencha todos os campos do formulário!");
        return; // Para o código aqui se faltar algo
    }

    if (!email.includes("@")) {
        alert("E-mail inválido!");
        return; // Para o código aqui se o e-mail estiver errado
    }

    // Alerta de boas-vindas
    alert("Cadastro realizado com sucesso! Bem-vindo, " + nome + "!");


    // ETAPA 2: Solicitar as informações do produto via prompt
    const nomeProduto = prompt("Digite o nome do rótulo do vinho:");
    const tipoProduto = prompt("Digite o tipo do vinho(Tinto, Branco ou Rosé):");
    const safraOuAno = prompt("Digite a safra ou ano de fabricação:");
    const quantidade = prompt("Digite a quantidade em estoque:");

    // Validação dos prompts: impede que continue se algum campo estiver vazio
    if (!nomeProduto || !tipoProduto || !safraOuAno || !quantidade) {
        alert("Todos os campos do produto são obrigatórios! Tente novamente.");
        return;
    }

    // Alerta antes de exibir no console
    alert("A seguir, veja os detalhes do vinho no console.");


    // ETAPA 3: Exibindo tudo no console de forma organizada
    console.log("==============================");
    console.log("      DADOS DO USUÁRIO        ");
    console.log("==============================");
    console.log(`👤 Nome Completo: ${nome} ${sobrenome}`);
    console.log(`📧 E-mail:        ${email}`);
    
    console.log("\n==============================");
    console.log("    DETALHES DO PRODUTO       ");
    console.log("==============================");
    console.log(`📋 Nome:        ${nomeProduto}`);
    console.log(`🎨 Tipo:        ${tipoProduto}`);
    console.log(`📅 Ano/Safra:   ${safraOuAno}`);
    console.log(`📦 Estoque:     ${quantidade} unidade(s)`);
    console.log("==============================");

});