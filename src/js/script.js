// 1. Primeiro declaramos o botão que está no HTML
const botao = document.getElementById('btn-testar');

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




