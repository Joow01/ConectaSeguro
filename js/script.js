function verificarResposta(resposta, botaoClicado) {

    const resultado = document.getElementById("resultado");

    const botoes =
        document.querySelectorAll(".opcao-golpe");

    if (!resultado) {
        return;
    }


    // Remove o destaque da escolha anterior
    botoes.forEach((botao) => {

        botao.classList.remove(
            "escolha-correta",
            "escolha-errada"
        );

    });


    // C) Confirmar por outro canal
    if (resposta === "confirmar") {

        botaoClicado.classList.add("escolha-correta");

        resultado.className =
            "resultado resultado-correto";

        resultado.innerHTML = `
            <h3>✅ Muito bem!</h3>

            <p>
                Essa é a atitude mais segura. Um número novo pode realmente
                pertencer ao seu familiar, mas também pode ser alguém
                tentando se passar por ele.
            </p>

            <p>
                O ideal é confirmar a identidade por outro canal,
                como ligar para o número que você já conhece ou entrar
                em contato pessoalmente com o familiar.
            </p>

            <p>
                <strong>Lembre-se:</strong>
                confirme a identidade antes de realizar qualquer
                transferência.
            </p>
        `;


    // B) Continuar conversando
    } else if (resposta === "conversa") {

        botaoClicado.classList.add("escolha-errada");

        resultado.className =
            "resultado resultado-errado";

        resultado.innerHTML = `
            <h3>⚠️ Parece uma boa ideia, mas ainda há risco.</h3>

            <p>
                Pedir mais informações pode ajudar, porém um golpista
                pode ter obtido dados sobre você ou seu familiar e
                conseguir responder às perguntas.
            </p>

            <p>
                Continuar apenas pela mesma conversa não confirma
                com segurança quem está do outro lado.
            </p>

            <p>
                <strong>Melhor alternativa:</strong>
                confirme a identidade utilizando outro canal de contato.
            </p>
        `;


    // A) Fazer o PIX
    } else {

        botaoClicado.classList.add("escolha-errada");

        resultado.className =
            "resultado resultado-errado";

        resultado.innerHTML = `
            <h3>⚠️ Cuidado!</h3>

            <p>
                Fazer a transferência imediatamente é arriscado.
                A urgência pode ser utilizada para fazer você agir
                antes de verificar quem está realmente pedindo o dinheiro.
            </p>

            <p>
                <strong>Melhor alternativa:</strong>
                antes de fazer qualquer PIX, confirme a identidade
                do familiar utilizando outro canal.
            </p>
        `;
    }


    resultado.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

function analisarSenha() {

    const campo = document.getElementById("senhaTeste");

    if (!campo) {
        return;
    }

    const senha = campo.value;

    const tamanho = senha.length >= 12;
    const maiuscula = /[A-Z]/.test(senha);
    const minuscula = /[a-z]/.test(senha);
    const numero = /[0-9]/.test(senha);
    const simbolo = /[^A-Za-z0-9]/.test(senha);

    atualizarCriterio(
        "criterioTamanho",
        tamanho,
        "Pelo menos 12 caracteres"
    );

    atualizarCriterio(
        "criterioMaiuscula",
        maiuscula,
        "Pelo menos uma letra maiúscula"
    );

    atualizarCriterio(
        "criterioMinuscula",
        minuscula,
        "Pelo menos uma letra minúscula"
    );

    atualizarCriterio(
        "criterioNumero",
        numero,
        "Pelo menos um número"
    );

    atualizarCriterio(
        "criterioSimbolo",
        simbolo,
        "Pelo menos um símbolo"
    );


    const pontos = [
        tamanho,
        maiuscula,
        minuscula,
        numero,
        simbolo
    ].filter(Boolean).length;


    const barra = document.getElementById("nivelSenha");
    const texto = document.getElementById("textoForca");


    if (senha.length === 0) {

        barra.className = "";
        texto.textContent = "Digite uma senha para começar.";

        return;
    }


    if (pontos <= 2) {

        barra.className = "forca-fraca";
        texto.textContent = "🔴 Senha fraca — tente melhorar os critérios abaixo.";

    } else if (pontos <= 4) {

        barra.className = "forca-media";
        texto.textContent = "🟠 Senha média — está melhor, mas ainda pode ser reforçada.";

    } else {

        barra.className = "forca-forte";
        texto.textContent = "🟢 Senha forte — atende aos critérios básicos deste teste.";

    }
}


function atualizarCriterio(id, valido, texto) {

    const elemento = document.getElementById(id);

    if (!elemento) {
        return;
    }

    if (valido) {

        elemento.textContent = "✓ " + texto;
        elemento.className = "criterio-ok";

    } else {

        elemento.textContent = "○ " + texto;
        elemento.className = "criterio-falta";

    }
}


function alternarSenha() {

    const campo = document.getElementById("senhaTeste");
    const botao = document.getElementById("mostrarSenha");

    if (!campo || !botao) {
        return;
    }

    if (campo.type === "password") {

        campo.type = "text";
        botao.textContent = "🙈 Ocultar";

    } else {

        campo.type = "password";
        botao.textContent = "👁️ Mostrar";

    }
}

function verificarPrivacidade(resposta, botaoClicado) {

    const resultado =
        document.getElementById("resultadoPrivacidade");

    const botoes =
        document.querySelectorAll(".opcao-privacidade");

    if (!resultado) {
        return;
    }

    // Limpa os estilos anteriores
    botoes.forEach((botao) => {
        botao.classList.remove(
            "escolha-correta",
            "escolha-errada",
            "escolha-desativada"
        );
    });


    if (resposta === "verificar") {

        botaoClicado.classList.add("escolha-correta");

        resultado.className =
            "resultado resultado-correto";

        resultado.innerHTML = `
            <h3>✅ Boa escolha!</h3>

            <p>
                Antes de conceder uma permissão, é importante verificar
                se aquele acesso realmente é necessário para a função
                do aplicativo.
            </p>

            <p>
                Um aplicativo de lanterna, por exemplo, normalmente
                não precisa acessar seus contatos, microfone ou arquivos.
            </p>

            <p>
                <strong>Lembre-se:</strong>
                conceda somente as permissões necessárias.
            </p>
        `;

    } else if (resposta === "revisarDepois") {

        botaoClicado.classList.add("escolha-errada");

        resultado.className =
            "resultado resultado-errado";

        resultado.innerHTML = `
            <h3>⚠️ Ainda não é a melhor opção.</h3>

            <p>
                Revisar permissões depois é melhor do que nunca revisá-las,
                mas o ideal é avaliar cada solicitação antes de permitir
                o acesso aos seus dados.
            </p>

            <p>
                <strong>Melhor alternativa:</strong>
                conceda somente as permissões necessárias desde o início.
            </p>
        `;

    } else {

        botaoClicado.classList.add("escolha-errada");

        resultado.className =
            "resultado resultado-errado";

        resultado.innerHTML = `
            <h3>⚠️ Cuidado com seus dados!</h3>

            <p>
                Permitir todos os acessos automaticamente pode dar ao
                aplicativo acesso a informações que não são necessárias
                para seu funcionamento.
            </p>

            <p>
                <strong>Melhor alternativa:</strong>
                analise cada permissão e autorize somente aquilo
                que realmente faz sentido.
            </p>
        `;
    }

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

/* ========================================
   QUIZ CONECTA SEGURO
======================================== */

const perguntasQuiz = [

    // ========================================
    // GOLPES DIGITAIS
    // ========================================

    {
        categoria: "Golpes Digitais",
        pergunta:
            "Você recebe uma mensagem de um número novo dizendo ser um familiar. A pessoa afirma que trocou de celular e pede um PIX urgente. Qual é a atitude mais segura?",
        alternativas: [
            "Pedir que confirme informações pessoais pela própria conversa.",
            "Fazer um PIX de valor menor para verificar a situação.",
            "Confirmar a identidade do familiar por outro canal antes de transferir.",
            "Pedir uma foto pelo mesmo número antes de decidir."
        ],
        correta: 2,
        explicacao:
            "A confirmação deve ser feita por um canal independente, como um número que você já conhece. Fotos e informações pessoais também podem estar disponíveis para um golpista."
    },

    {
        categoria: "Golpes Digitais",
        pergunta:
            "Uma pessoa liga dizendo ser funcionária do seu banco. Ela informa que houve uma compra suspeita e conhece seu nome e alguns dados pessoais. O que fazer?",
        alternativas: [
            "Confirmar somente os dados que ela já conhece.",
            "Encerrar a ligação e procurar o banco pelos canais oficiais.",
            "Continuar a ligação, mas não informar a senha completa.",
            "Pedir que a pessoa envie uma mensagem confirmando que trabalha no banco."
        ],
        correta: 1,
        explicacao:
            "Conhecer alguns dados pessoais não comprova que o contato seja legítimo. Encerre a ligação e procure o banco por um canal oficial obtido de forma independente."
    },

    {
        categoria: "Golpes Digitais",
        pergunta:
            "Você recebe uma promoção muito vantajosa de uma loja conhecida acompanhada de um link. Como verificar a oferta com mais segurança?",
        alternativas: [
            "Abrir o link e verificar se a página possui o logotipo da loja.",
            "Perguntar a quem enviou a mensagem se já realizou uma compra.",
            "Acessar diretamente o aplicativo ou site oficial da loja e procurar a promoção.",
            "Abrir o link somente se a mensagem tiver sido enviada por alguém conhecido."
        ],
        correta: 2,
        explicacao:
            "Links podem levar a páginas falsas muito parecidas com as verdadeiras. É mais seguro acessar o serviço diretamente por seus canais oficiais."
    },

    {
        categoria: "Golpes Digitais",
        pergunta:
            "Durante uma ligação, um suposto funcionário do banco pede que você instale um aplicativo para que ele possa verificar um problema no seu celular. Qual é a atitude mais segura?",
        alternativas: [
            "Instalar, mas fechar os aplicativos do banco antes.",
            "Instalar somente se o aplicativo estiver disponível na loja oficial.",
            "Não instalar e entrar em contato com o banco por um canal oficial.",
            "Instalar e remover o aplicativo assim que o atendimento terminar."
        ],
        correta: 2,
        explicacao:
            "Aplicativos de acesso remoto ou compartilhamento de tela podem permitir que terceiros vejam ou controlem o aparelho. Não siga esse tipo de orientação recebida em um contato inesperado."
    },

    {
        categoria: "Golpes Digitais",
        pergunta:
            "Você recebe um boleto que parece ser de uma empresa conhecida. Antes de pagar, percebe que o nome do beneficiário mostrado pelo banco é diferente do esperado. O que fazer?",
        alternativas: [
            "Pagar se o valor e a data de vencimento estiverem corretos.",
            "Não concluir o pagamento e confirmar a cobrança com a empresa por um canal oficial.",
            "Pagar e guardar o comprovante para contestar posteriormente, se necessário.",
            "Refazer a leitura do código e pagar se o mesmo beneficiário aparecer novamente."
        ],
        correta: 1,
        explicacao:
            "Antes de confirmar um pagamento, confira os dados apresentados pelo banco. Um beneficiário inesperado é motivo para interromper a operação e verificar a cobrança."
    },

    {
        categoria: "Golpes Digitais",
        pergunta:
            "Você recebe uma mensagem dizendo que existe um valor de benefício disponível, mas que precisa atualizar seus dados imediatamente por um link. O que fazer?",
        alternativas: [
            "Preencher apenas os dados que o órgão provavelmente já possui.",
            "Abrir o link apenas para verificar quais informações são solicitadas.",
            "Procurar o serviço diretamente pelos canais oficiais antes de fornecer qualquer dado.",
            "Responder à mensagem pedindo mais informações antes de acessar o link."
        ],
        correta: 2,
        explicacao:
            "Mensagens sobre benefícios ou valores a receber podem ser usadas como isca. Consulte o órgão ou serviço diretamente por seus canais oficiais antes de fornecer informações."
    },

    {
        categoria: "Golpes Digitais",
        pergunta:
            "Em um local público, você encontra um QR Code oferecendo desconto para pagamento de uma conta. Qual é a atitude mais segura?",
        alternativas: [
            "Escanear, pois QR Codes são mais seguros do que links recebidos por mensagem.",
            "Escanear e continuar se a página aberta tiver aparência profissional.",
            "Usar o QR Code somente depois de verificar sua origem e conferir os dados antes do pagamento.",
            "Escanear com a câmera do celular e evitar apenas informar senhas."
        ],
        correta: 2,
        explicacao:
            "Um QR Code também pode direcionar para páginas ou pagamentos fraudulentos. Verifique sua origem e confira destinatário, valor e demais dados antes de confirmar."
    },


    // ========================================
    // SENHAS E CONTAS
    // ========================================

    {
        categoria: "Senhas e Contas",
        pergunta:
            "Você possui várias contas online. Qual estratégia reduz melhor o impacto caso a senha de um serviço seja descoberta?",
        alternativas: [
            "Usar uma senha diferente para cada conta.",
            "Usar a mesma senha alterando apenas os números finais.",
            "Alternar duas senhas fortes entre todos os serviços.",
            "Usar uma única senha longa para facilitar a memorização."
        ],
        correta: 0,
        explicacao:
            "Senhas diferentes evitam que o vazamento da senha de um serviço dê acesso imediato às demais contas."
    },

    {
        categoria: "Senhas e Contas",
        pergunta:
            "Qual destas senhas tende a ser mais resistente a tentativas de adivinhação?",
        alternativas: [
            "Carlos@1998",
            "Seguranca#2026",
            "Rio-Cafe-Lua-82!",
            "ConectaSeguro123!"
        ],
        correta: 2,
        explicacao:
            "Comprimento e imprevisibilidade são importantes. Nomes, datas e expressões diretamente relacionadas à pessoa ou ao serviço podem ser mais previsíveis."
    },

    {
        categoria: "Senhas e Contas",
        pergunta:
            "Você recebe um código de verificação no celular e, logo depois, alguém do suposto suporte solicita esse código. O que fazer?",
        alternativas: [
            "Informar se você mesmo iniciou o atendimento.",
            "Informar somente parte do código.",
            "Não compartilhar o código e verificar a situação diretamente no serviço.",
            "Perguntar primeiro por que o atendente precisa do código."
        ],
        correta: 2,
        explicacao:
            "Códigos de verificação podem permitir a conclusão de um acesso à conta. Não os compartilhe com terceiros."
    },


    // ========================================
    // PRIVACIDADE E DADOS
    // ========================================

    {
        categoria: "Privacidade e Dados",
        pergunta:
            "Ao contratar um serviço pela internet, existe uma opção autorizando o uso dos seus dados para receber ofertas de empresas parceiras. Essa autorização não é necessária para concluir a contratação. O que fazer?",
        alternativas: [
            "Autorizar, pois empresas parceiras podem ser consideradas confiáveis.",
            "Avaliar se deseja esse uso dos dados e não autorizar automaticamente.",
            "Autorizar e cancelar somente se começar a receber muitas ofertas.",
            "Autorizar desde que seja possível cancelar posteriormente."
        ],
        correta: 1,
        explicacao:
            "Quando um uso adicional dos dados não é necessário para o serviço, avalie se realmente deseja autorizá-lo e para qual finalidade seus dados serão utilizados."
    },

    {
        categoria: "Privacidade e Dados",
        pergunta:
            "Ao preencher um cadastro, vários campos de informações pessoais aparecem como opcionais. Qual prática protege melhor seus dados?",
        alternativas: [
            "Preencher tudo para deixar o cadastro completo.",
            "Preencher os campos opcionais que sejam fáceis de lembrar.",
            "Avaliar a finalidade e fornecer somente os dados necessários.",
            "Utilizar as mesmas informações fornecidas em outros serviços."
        ],
        correta: 2,
        explicacao:
            "Evitar o fornecimento desnecessário de informações reduz a quantidade de dados pessoais armazenados e compartilhados."
    },

    {
        categoria: "Privacidade e Dados",
        pergunta:
            "Um site solicita uma foto do seu documento para liberar determinada funcionalidade. Antes de enviar, qual é a atitude mais adequada?",
        alternativas: [
            "Verificar quem solicita o documento, por que ele é necessário e como será utilizado.",
            "Enviar somente um dos lados do documento.",
            "Enviar uma foto com resolução menor.",
            "Enviar se o site tiver aparência profissional."
        ],
        correta: 0,
        explicacao:
            "Documentos contêm dados importantes. Antes do envio, verifique a legitimidade do serviço, a necessidade da solicitação e a finalidade do uso."
    },


    // ========================================
    // COMPORTAMENTO SEGURO
    // ========================================

    {
        categoria: "Comportamento Seguro",
        pergunta:
            "Uma mensagem parece legítima e possui seu nome completo, mas cria urgência para que você faça um pagamento imediatamente. O que é mais seguro?",
        alternativas: [
            "Confiar porque a pessoa conhece seus dados.",
            "Realizar um pagamento menor primeiro.",
            "Parar e verificar a solicitação por um canal confiável antes de agir.",
            "Continuar conversando até o remetente fornecer mais informações."
        ],
        correta: 2,
        explicacao:
            "Ter informações pessoais não prova que o remetente seja legítimo. Golpistas podem obter dados de diferentes fontes. Urgência é um motivo para verificar antes de agir."
    },

    {
        categoria: "Comportamento Seguro",
        pergunta:
            "Você recebe uma mensagem suspeita e não consegue determinar se é verdadeira. Qual atitude representa melhor uma regra geral de segurança digital?",
        alternativas: [
            "Responder para obter mais informações antes de tomar uma decisão.",
            "Seguir as instruções que não envolvam diretamente uma senha.",
            "Parar, conferir a situação por uma fonte confiável e só depois agir.",
            "Encaminhar a mensagem para conhecidos e seguir a opinião da maioria."
        ],
        correta: 2,
        explicacao:
            "Quando houver dúvida, não é necessário decidir imediatamente. Pare, procure uma fonte confiável e independente e só depois tome uma decisão."
    }

];


let perguntaAtual = 0;
let pontosQuiz = 0;
let respostaSelecionada = false;


/* Iniciar */

function iniciarQuiz() {

    perguntaAtual = 0;
    pontosQuiz = 0;
    respostaSelecionada = false;

    document.getElementById("quizInicio")
        .classList.add("quiz-escondido");

    document.getElementById("quizResultado")
        .classList.add("quiz-escondido");

    document.getElementById("quizPergunta")
        .classList.remove("quiz-escondido");

    mostrarPergunta();
}


/* Mostrar pergunta */

function mostrarPergunta() {

    const pergunta = perguntasQuiz[perguntaAtual];

    respostaSelecionada = false;


    document.getElementById("contadorPergunta").textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntasQuiz.length}`;

    document.getElementById("pontuacaoAtual").textContent =
        `Pontos: ${pontosQuiz}`;

    document.getElementById("categoriaQuiz").textContent =
        pergunta.categoria;

    document.getElementById("textoPergunta").textContent =
        pergunta.pergunta;


    const progresso =
        ((perguntaAtual + 1) / perguntasQuiz.length) * 100;

    document.getElementById("progressoQuiz").style.width =
        progresso + "%";


    const alternativas =
        document.getElementById("alternativasQuiz");

    alternativas.innerHTML = "";


    pergunta.alternativas.forEach((texto, indice) => {

        const botao = document.createElement("button");

        botao.type = "button";

        botao.className = "alternativa-quiz";

        botao.textContent =
            `${String.fromCharCode(65 + indice)}) ${texto}`;

        botao.onclick = function () {
            responderQuiz(indice);
        };

        alternativas.appendChild(botao);

    });


    const feedback =
        document.getElementById("feedbackQuiz");

    feedback.className = "feedback-quiz";
    feedback.innerHTML = "";


    document.getElementById("botaoProxima")
        .classList.add("quiz-escondido");
}


/* Responder */

function responderQuiz(indiceEscolhido) {

    if (respostaSelecionada) {
        return;
    }

    respostaSelecionada = true;


    const pergunta = perguntasQuiz[perguntaAtual];

    const botoes =
        document.querySelectorAll(".alternativa-quiz");

    botoes.forEach((botao, indice) => {

        botao.disabled = true;

        if (indice === pergunta.correta) {
            botao.classList.add("alternativa-correta");
        }

    });


    const feedback =
        document.getElementById("feedbackQuiz");


    if (indiceEscolhido === pergunta.correta) {

        pontosQuiz++;

        botoes[indiceEscolhido]
            .classList.add("alternativa-correta");

        feedback.className =
            "feedback-quiz feedback-correto";

        feedback.innerHTML = `
            <h3>✅ Resposta correta!</h3>
            <p>${pergunta.explicacao}</p>
        `;

    } else {

        botoes[indiceEscolhido]
            .classList.add("alternativa-errada");

        feedback.className =
            "feedback-quiz feedback-errado";

        feedback.innerHTML = `
            <h3>❌ Não é a opção mais segura.</h3>
            <p>${pergunta.explicacao}</p>
        `;

    }


    document.getElementById("pontuacaoAtual").textContent =
        `Pontos: ${pontosQuiz}`;


    const botaoProxima =
        document.getElementById("botaoProxima");

    botaoProxima.classList.remove("quiz-escondido");


    if (perguntaAtual === perguntasQuiz.length - 1) {

        botaoProxima.textContent =
            "Ver resultado →";

    } else {

        botaoProxima.textContent =
            "Próxima pergunta →";

    }
}


/* Próxima */

function proximaPergunta() {

    if (!respostaSelecionada) {
        return;
    }


    perguntaAtual++;


    if (perguntaAtual < perguntasQuiz.length) {

        mostrarPergunta();

        document.getElementById("quizPergunta")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    } else {

        mostrarResultado();

    }
}


/* Resultado */

function mostrarResultado() {

    document.getElementById("quizPergunta")
        .classList.add("quiz-escondido");

    document.getElementById("quizResultado")
        .classList.remove("quiz-escondido");


    // Calcula o percentual de acertos
    const percentual =
        (pontosQuiz / perguntasQuiz.length) * 100;


    // Mostra a pontuação final
    document.getElementById("notaFinal").textContent =
        pontosQuiz;


    // Atualiza o total de questões automaticamente
    const totalFinal =
        document.getElementById("totalFinal");

    if (totalFinal) {
      totalFinal.textContent =
        ` / ${perguntasQuiz.length}`;
    }


    const titulo =
        document.getElementById("tituloResultado");

    const mensagem =
        document.getElementById("mensagemResultado");

    const icone =
        document.getElementById("iconeResultado");

    const recomendacao =
        document.getElementById("recomendacaoResultado");


    if (percentual >= 90) {

        icone.textContent = "🏆";

        titulo.textContent =
            "Excelente resultado!";

        mensagem.textContent =
            "Você demonstrou ótimo conhecimento sobre segurança digital.";

        recomendacao.innerHTML = `
            <strong>Continue assim!</strong>

            <p>
                Mantenha esses cuidados no seu dia a dia e
                compartilhe o que aprendeu com familiares e amigos.
            </p>

            <p>
                <strong>🛡️ Pare. Confira. Só depois aja.</strong>
            </p>
        `;


    } else if (percentual >= 70) {

        icone.textContent = "👏";

        titulo.textContent =
            "Muito bom!";

        mensagem.textContent =
            "Você já conhece vários cuidados importantes para navegar com segurança.";

        recomendacao.innerHTML = `
            <strong>Vale revisar:</strong>

            <p>
                Dê mais uma olhada nos conteúdos de
                <a href="golpes.html">Golpes</a>,
                <a href="senhas.html">Senhas</a> e
                <a href="privacidade.html">Privacidade</a>.
            </p>

            <p>
                <strong>🛡️ Pare. Confira. Só depois aja.</strong>
            </p>
        `;


    } else if (percentual >= 50) {

        icone.textContent = "📚";

        titulo.textContent =
            "Bom começo!";

        mensagem.textContent =
            "Você acertou vários pontos, mas ainda há cuidados importantes para revisar.";

        recomendacao.innerHTML = `
            <strong>Recomendação:</strong>

            <p>
                Revise os conteúdos antes de tentar novamente.
                Pequenos cuidados podem fazer uma grande diferença.
            </p>

            <p>
                <strong>🛡️ Pare. Confira. Só depois aja.</strong>
            </p>
        `;


    } else {

        icone.textContent = "🛡️";

        titulo.textContent =
            "Vamos aprender mais!";

        mensagem.textContent =
            "Alguns conceitos importantes ainda precisam ser revisados.";

        recomendacao.innerHTML = `
            <strong>Recomendação:</strong>

            <p>
                Volte aos módulos de
                <a href="golpes.html">Golpes Digitais</a>,
                <a href="senhas.html">Senhas Seguras</a> e
                <a href="privacidade.html">Privacidade</a>
                e depois tente novamente.
            </p>

            <p>
                <strong>🛡️ Pare. Confira. Só depois aja.</strong>
            </p>
        `;
    }


    document.getElementById("quizResultado")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
}


    document.getElementById("quizResultado")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });



/* Reiniciar */

function reiniciarQuiz() {

    perguntaAtual = 0;
    pontosQuiz = 0;
    respostaSelecionada = false;

    document.getElementById("quizResultado")
        .classList.add("quiz-escondido");

    document.getElementById("quizInicio")
        .classList.remove("quiz-escondido");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
