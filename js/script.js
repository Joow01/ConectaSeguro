function verificarResposta(respostaSegura) {

    const resultado = document.getElementById("resultado");

    if (respostaSegura) {

        resultado.className = "resultado resultado-correto";

        resultado.innerHTML = `
            <h3>✅ Muito bem!</h3>

            <p>
                Essa é a atitude mais segura. Antes de enviar dinheiro,
                entre em contato com seu familiar pelo número que você
                já conhece.
            </p>

            <p>
                <strong>Lembre-se:</strong> um pedido urgente vindo de
                um número novo deve sempre ser confirmado.
            </p>
        `;

    } else {

        resultado.className = "resultado resultado-errado";

        resultado.innerHTML = `
            <h3>⚠️ Cuidado!</h3>

            <p>
                Fazer o PIX imediatamente pode colocar seu dinheiro em risco.
                Esse é um golpe muito comum.
            </p>

            <p>
                <strong>O mais seguro:</strong> não faça a transferência
                antes de confirmar com seu familiar por outro meio.
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

function verificarPrivacidade(respostaSegura) {

    const resultado =
        document.getElementById("resultadoPrivacidade");

    if (!resultado) {
        return;
    }


    if (respostaSegura) {

        resultado.className =
            "resultado resultado-correto";

        resultado.innerHTML = `
            <h3>✅ Boa escolha!</h3>

            <p>
                Evitar essa publicação ajuda a proteger informações
                sobre sua rotina e sua residência.
            </p>

            <p>
                <strong>Uma opção mais segura:</strong>
                se quiser compartilhar fotos da viagem,
                considere publicá-las depois de retornar e evite
                divulgar informações desnecessárias sobre sua casa.
            </p>
        `;

    } else {

        resultado.className =
            "resultado resultado-errado";

        resultado.innerHTML = `
            <h3>⚠️ Pense novamente!</h3>

            <p>
                Essa publicação informa publicamente que a residência
                poderá ficar vazia durante vários dias.
            </p>

            <p>
                <strong>Melhor alternativa:</strong>
                evite divulgar detalhes sobre sua ausência e considere
                compartilhar as fotos somente depois da viagem.
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

    {
        categoria: "Golpes Digitais",

        pergunta:
            "Você recebe uma mensagem de um número novo dizendo ser um familiar e pedindo um PIX urgente. O que deve fazer?",

        alternativas: [
            "Fazer o PIX rapidamente.",
            "Confirmar com o familiar por outro meio.",
            "Enviar seus dados bancários.",
            "Responder pedindo a chave PIX."
        ],

        correta: 1,

        explicacao:
            "Pedidos de dinheiro vindos de números novos devem ser confirmados diretamente com a pessoa por outro meio."
    },


    {
        categoria: "Golpes Digitais",

        pergunta:
            "Uma pessoa liga dizendo ser funcionária do banco e pede sua senha. Qual é a atitude mais segura?",

        alternativas: [
            "Informar a senha para confirmar sua identidade.",
            "Enviar a senha por mensagem.",
            "Encerrar o contato e procurar o banco pelos canais oficiais.",
            "Passar somente parte da senha."
        ],

        correta: 2,

        explicacao:
            "Senhas são pessoais. Diante de um contato suspeito, procure o banco utilizando um canal oficial."
    },


    {
        categoria: "Golpes Digitais",

        pergunta:
            "Você recebe um link dizendo que ganhou um prêmio, mas precisa pagar uma taxa para recebê-lo. O que fazer?",

        alternativas: [
            "Pagar rapidamente para não perder o prêmio.",
            "Enviar o link para outras pessoas.",
            "Informar seus dados para descobrir se é verdadeiro.",
            "Não clicar nem pagar e verificar a informação em canais oficiais."
        ],

        correta: 3,

        explicacao:
            "Prêmios inesperados acompanhados de pedidos de dinheiro ou dados pessoais são um importante sinal de alerta."
    },


    {
        categoria: "Senhas Seguras",

        pergunta:
            "Qual destas opções representa uma prática mais segura para suas contas?",

        alternativas: [
            "Usar a mesma senha em todas as contas.",
            "Usar senhas diferentes para contas diferentes.",
            "Usar apenas seu primeiro nome como senha.",
            "Compartilhar a senha com amigos."
        ],

        correta: 1,

        explicacao:
            "Senhas diferentes reduzem o risco de várias contas serem comprometidas caso uma senha seja descoberta."
    },


    {
        categoria: "Senhas Seguras",

        pergunta:
            "Qual destas senhas seria, em geral, mais difícil de adivinhar?",

        alternativas: [
            "123456",
            "maria2026",
            "senha123",
            "Rio-Cafe-Lua-82!"
        ],

        correta: 3,

        explicacao:
            "Senhas longas e menos previsíveis tendem a ser mais resistentes do que sequências comuns, nomes ou datas."
    },


    {
        categoria: "Senhas Seguras",

        pergunta:
            "Alguém pede o código de confirmação que acabou de chegar por SMS no seu celular. O que você deve fazer?",

        alternativas: [
            "Enviar o código.",
            "Não compartilhar o código.",
            "Publicar o código para pedir ajuda.",
            "Enviar apenas metade do código."
        ],

        correta: 1,

        explicacao:
            "Códigos de confirmação protegem o acesso às suas contas e não devem ser compartilhados."
    },


    {
        categoria: "Privacidade",

        pergunta:
            "Você vai viajar e sua casa ficará vazia. Qual atitude é mais cuidadosa nas redes sociais?",

        alternativas: [
            "Publicar imediatamente que ficará 10 dias fora.",
            "Publicar seu endereço junto com as fotos.",
            "Evitar divulgar publicamente detalhes sobre sua ausência.",
            "Compartilhar sua localização em tempo real."
        ],

        correta: 2,

        explicacao:
            "Evitar divulgar detalhes sobre sua ausência reduz a exposição desnecessária de informações sobre sua rotina e residência."
    },


    {
        categoria: "Privacidade",

        pergunta:
            "Um aplicativo pede acesso à sua câmera, microfone, contatos e localização. O que é mais adequado?",

        alternativas: [
            "Permitir tudo automaticamente.",
            "Verificar quais permissões são realmente necessárias.",
            "Desativar a senha do celular.",
            "Enviar seus documentos para o aplicativo."
        ],

        correta: 1,

        explicacao:
            "É importante avaliar se cada permissão realmente é necessária para a função que você deseja utilizar."
    },


    {
        categoria: "Privacidade",

        pergunta:
            "Qual destas informações exige maior cuidado antes de ser enviada pela internet?",

        alternativas: [
            "Sua cor favorita.",
            "O nome de um filme.",
            "Uma foto do seu documento de identidade.",
            "O nome de uma música."
        ],

        correta: 2,

        explicacao:
            "Documentos contêm dados pessoais que podem ser utilizados indevidamente e devem ser compartilhados somente quando necessário e com destinatários legítimos."
    },


    {
        categoria: "Segurança Digital",

        pergunta:
            "Quando uma mensagem causa medo ou exige uma decisão imediata, qual é uma boa regra?",

        alternativas: [
            "Agir rapidamente sem conferir.",
            "Clicar no primeiro link recebido.",
            "Parar, pensar e verificar a informação.",
            "Enviar seus dados para resolver mais rápido."
        ],

        correta: 2,

        explicacao:
            "Criar urgência é uma técnica comum em golpes. Parar e verificar antes de agir pode evitar muitas fraudes."
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


    document.getElementById("notaFinal").textContent =
        pontosQuiz;


    const titulo =
        document.getElementById("tituloResultado");

    const mensagem =
        document.getElementById("mensagemResultado");

    const icone =
        document.getElementById("iconeResultado");

    const recomendacao =
        document.getElementById("recomendacaoResultado");


    if (pontosQuiz >= 9) {

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
        `;

    } else if (pontosQuiz >= 7) {

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
        `;

    } else if (pontosQuiz >= 5) {

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
        `;

    } else {

        icone.textContent = "🛡️";

        titulo.textContent =
            "Vamos aprender mais!";

        mensagem.textContent =
            "Alguns conceitos importantes ainda precisam ser revisados.";

        recomendacao.innerHTML = `
            <strong>Não tem problema.</strong>
            <p>
                Volte aos módulos de
                <a href="golpes.html">Golpes Digitais</a>,
                <a href="senhas.html">Senhas Seguras</a> e
                <a href="privacidade.html">Privacidade</a>
                e depois tente novamente.
            </p>
        `;

    }


    document.getElementById("quizResultado")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
}


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
