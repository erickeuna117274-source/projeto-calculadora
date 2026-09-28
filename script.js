function entrar() {

    let professor = document.getElementById("professor").value;

    // Verifica se o professor digitou o nome
    if (professor == "") {

        alert("Digite o nome do professor para continuar.");

        return;
    }


    // Mostra o nome do professor
    document.getElementById("nomeProfessor").innerText = professor;


    // Esconde a tela inicial
    document.getElementById("telaProfessor").style.display = "none";


    // Mostra a calculadora
    document.getElementById("calculadora").style.display = "block";
}


function calcular() {

    let nome = document.getElementById("nomeAluno").value;

    let nota1 = Number(document.getElementById("nota1").value);

    let nota2 = Number(document.getElementById("nota2").value);

    let nota3 = Number(document.getElementById("nota3").value);

    let faltas = Number(document.getElementById("faltas").value);


    // Verifica se todas as notas foram preenchidas
    if (
        nome == "" ||
        document.getElementById("nota1").value == "" ||
        document.getElementById("nota2").value == "" ||
        document.getElementById("nota3").value == "" ||
        document.getElementById("faltas").value == ""
    ) {

        alert("Preencha todos os campos.");

        return;
    }


    // Verifica se as notas estão entre 0 e 10
    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {

        alert("As notas devem estar entre 0 e 10.");

        return;
    }


    // Calcula a média dos 3 trimestres
    let media = (nota1 + nota2 + nota3) / 3;


    let situacao = "";

    let classe = "";

    let mensagem = "";


    // Primeiro verifica as faltas
    if (faltas >= 10) {

        situacao = "REPROVADO POR FALTA";

        classe = "reprovado";

        mensagem = "O aluno ultrapassou o limite de faltas.";

    }

    // Depois verifica a média
    else if (media >= 7) {

        situacao = "APROVADO";

        classe = "aprovado";

        mensagem = "Parabéns! O aluno foi aprovado.";

    }

    else {

        situacao = "RECUPERAÇÃO";

        classe = "recuperacao";

        // Quanto falta para chegar a média 7
        let pontos = 7 - media;

        mensagem =
            "O aluno precisa melhorar a média. " +
            "Faltam " + pontos.toFixed(2) + " pontos para chegar a 7.";
    }


    // Mostra o resultado
    let resultado = document.getElementById("resultado");

    resultado.style.display = "block";


    resultado.innerHTML = `
        <h2>Resultado do Aluno</h2>

        <p>
            <strong>Aluno:</strong>
            ${nome}
        </p>

        <p>
            <strong>1º Trimestre:</strong>
            ${nota1.toFixed(1)}
        </p>

        <p>
            <strong>2º Trimestre:</strong>
            ${nota2.toFixed(1)}
        </p>

        <p>
            <strong>3º Trimestre:</strong>
            ${nota3.toFixed(1)}
        </p>

        <p>
            <strong>Média Final:</strong>
            ${media.toFixed(2)}
        </p>

        <p>
            <strong>Faltas:</strong>
            ${faltas}
        </p>

        <p class="${classe}">
            ${situacao}
        </p>

        <p>
            ${mensagem}
        </p>
    `;
}


function limpar() {

    document.getElementById("nomeAluno").value = "";

    document.getElementById("nota1").value = "";

    document.getElementById("nota2").value = "";

    document.getElementById("nota3").value = "";

    document.getElementById("faltas").value = "";

    document.getElementById("resultado").style.display = "none";

    document.getElementById("resultado").innerHTML = "";
}