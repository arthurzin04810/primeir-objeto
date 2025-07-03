function chama_aluno(){

    let aluno = {
        nome: 'Arthur T.',
        idade: 14,
        altura: 1.70,
        nota: 6.00
    };
    //alert(aluno.nome);
    document.getElementById('nome_aluno').textContent = 'Nome:' + aluno.nome
}