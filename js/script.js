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

    {
        categoria: "Golpes Digitais",

        pergunta:
            "Você recebe uma mensagem de um número novo dizendo ser um familiar. A pessoa afirma que trocou de celular e pede um PIX urgente. Qual é a atitude mais segura?",

        alternativas: [
            "Pedir que a pessoa confirme seu nome completo pela própria conversa.",
            "Fazer um PIX de valor menor primeiro para verificar a situação.",
            "Confirmar a identidade do familiar por outro canal antes de transferir.",
            "Pedir uma foto da pessoa pelo mesmo número antes de decidir."
        ],

        correta: 2,

        explicacao:
            "A confirmação deve ser feita por um canal independente, como o número antigo ou outro contato conhecido. Continuar apenas na mesma conversa pode não confirmar quem realmente está do outro lado."
    },


    {
        categoria: "Golpes Digitais",

        pergunta:
            "Você recebe uma ligação aparentemente do seu banco informando uma compra suspeita. A pessoa conhece seu nome e alguns dados e pede que você confirme informações da conta. O que fazer?",

        alternativas: [
            "Confirmar somente os dados que a pessoa já mencionou.",
            "Encerrar a ligação e procurar o banco pelos canais oficiais.",
            "Continuar a ligação, mas não informar a senha completa.",
            "Pedir que a pessoa envie uma mensagem para confirmar que trabalha no banco."
        ],

        correta: 1,

        explicacao:
            "Conhecer alguns dados pessoais não comprova que o contato seja legítimo. O mais seguro é encerrar o contato e procurar a instituição diretamente por um canal oficial."
    },


    {
        categoria: "Golpes Digitais",

        pergunta:
            "Você recebe por mensagem uma promoção muito vantajosa de uma loja conhecida, acompanhada de um link. Como verificar a oferta com mais segurança?",

        alternativas: [
            "Abrir o link e conferir se a página possui o logotipo da loja.",
            "Encaminhar o link para alguém conhecido e perguntar se parece verdadeiro.",
            "Acessar a loja por seu aplicativo ou endereço oficial e procurar a promoção.",
            "Abrir o link, desde que ele tenha sido enviado por alguém conhecido."
        ],

        correta: 2,

        explicacao:
            "Em vez de confiar no link recebido, procure a promoção diretamente nos canais oficiais da empresa. Aparência, logotipos ou o remetente da mensagem não garantem que um link seja legítimo."
    },


    {
        categoria: "Senhas Seguras",

        pergunta:
            "Você possui várias contas online. Qual estratégia reduz melhor o impacto caso a senha de um serviço seja descoberta?",

        alternativas: [
            "Usar uma senha diferente para cada conta.",
            "Usar a mesma senha e alterar apenas os últimos números.",
            "Usar duas senhas fortes e alterná-las entre os serviços.",
            "Manter uma única senha longa para facilitar a memorização."
        ],

        correta: 0,

        explicacao:
            "Usar senhas diferentes evita que o vazamento da credencial de um serviço dê acesso imediato às suas outras contas."
    },


    {
        categoria: "Senhas Seguras",

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
            "Uma senha longa e menos previsível tende a ser mais resistente. Nomes, datas e expressões diretamente relacionadas ao usuário ou ao serviço podem ser mais previsíveis."
    },


    {
        categoria: "Senhas Seguras",

        pergunta:
            "Você recebe um código de verificação para entrar em uma conta e, logo depois, alguém do suposto suporte solicita esse código. O que fazer?",

        alternativas: [
            "Informar o código se a pessoa souber seu nome e e-mail.",
            "Informar o código somente se o atendimento tiver sido solicitado por você.",
            "Não compartilhar o código e verificar o acesso diretamente pelo serviço.",
            "Enviar apenas parte do código e pedir que o suporte confirme o restante."
        ],

        correta: 2,

        explicacao:
            "Códigos de verificação funcionam como uma credencial temporária. Compartilhá-los pode permitir que outra pessoa conclua uma tentativa de acesso à conta."
    },


    {
        categoria: "Privacidade e Dados",

        pergunta:
            "Um aplicativo de lanterna solicita acesso aos contatos, microfone, localização e arquivos. Qual é a melhor atitude?",

        alternativas: [
            "Autorizar os acessos porque eles podem ser necessários em futuras atualizações.",
            "Verificar quais permissões têm relação com a função do aplicativo e recusar as desnecessárias.",
            "Autorizar inicialmente e remover as permissões apenas se o aplicativo apresentar comportamento estranho.",
            "Autorizar apenas enquanto o aplicativo estiver aberto, independentemente da finalidade de cada permissão."
        ],

        correta: 1,

        explicacao:
            "As permissões devem ter relação com as funções utilizadas. Mesmo um acesso temporário pode ser desnecessário se o aplicativo não precisa daquele dado para funcionar."
    },


    {
        categoria: "Privacidade e Dados",

        pergunta:
            "Ao criar uma conta em um serviço, alguns campos são opcionais e solicitam informações adicionais. Qual prática protege melhor seus dados?",

        alternativas: [
            "Preencher todos os campos para deixar o cadastro mais completo.",
            "Fornecer os dados opcionais quando forem informações fáceis de lembrar.",
            "Avaliar a finalidade e fornecer somente os dados necessários para utilizar o serviço.",
            "Preencher os campos opcionais com os mesmos dados usados em outros serviços."
        ],

        correta: 2,

        explicacao:
            "Reduzir o fornecimento desnecessário de dados diminui a quantidade de informações associadas ao cadastro. Campos opcionais devem ser avaliados de acordo com sua finalidade."
    },


    {
        categoria: "Privacidade e Dados",

        pergunta:
            "Um site solicita uma foto do seu documento para liberar determinada funcionalidade. Antes de enviar, qual é a atitude mais adequada?",

        alternativas: [
            "Verificar quem solicita o documento, por que ele é necessário e como será utilizado.",
            "Enviar apenas um dos lados do documento para reduzir o risco.",
            "Enviar a imagem com resolução menor para impedir o uso indevido.",
            "Enviar o documento se o site apresentar uma aparência profissional."
        ],

        correta: 0,

        explicacao:
            "Antes de fornecer um documento, é importante avaliar a legitimidade do serviço, a necessidade da coleta e a finalidade do uso. Aparência do site ou alterações na imagem não substituem essa verificação."
    },


    {
        categoria: "Segurança Digital",

        pergunta:
            "Uma mensagem parece legítima, mas cria urgência e pede que você tome uma decisão envolvendo dinheiro ou dados. Qual princípio é mais seguro?",

        alternativas: [
            "Responder rapidamente, mas fornecer apenas parte das informações solicitadas.",
            "Seguir as instruções se a mensagem apresentar dados pessoais corretos.",
            "Parar, verificar a solicitação por um canal confiável e só então decidir.",
            "Continuar a conversa até reunir informações suficientes sobre o remetente."
        ],

        correta: 2,

        explicacao:
            "Urgência pode ser usada para reduzir o tempo de reflexão. Verificar a solicitação por um canal confiável antes de agir ajuda a evitar decisões baseadas apenas na mensagem recebida."
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
