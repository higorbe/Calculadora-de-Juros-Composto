function calcular_juros() {
    // Declaração de variáveis
    var capital, taxa, meses, montante, nome;

    // Entrada de dados
    nome = ($("#name").val())
    capital = Number ($("#capital").val())
    taxa = Number ($("#taxa").val())
    anos = Number ($("#anos").val())
    meses = anos * 12;

    // Processamento de Dados
    montante = (capital * (1 + taxa) * ((Math.pow(1 + taxa, meses) -1)/taxa)).toFixed(2)
    $(".result-materia1").html('Olá, ' + nome + ', juntando R$' + capital + ' todo mês, você terá: R$' + montante + ' em ' + anos + ' ano(s)');

    $(".form-juros").addClass("d-none");
    $(".show-result").removeClass("d-none");
}

function voltar() {
    $(".show-result").addClass("d-none");
    $(".form-juros").removeClass("d-none");
    $("input").val("");
}