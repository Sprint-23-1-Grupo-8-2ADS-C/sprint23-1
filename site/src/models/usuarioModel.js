var database = require("../database/config")


function buscarUsuario() {
    var instrucao = `
        SELECT * FROM funcionario
        WHERE idFuncionario = ${id}
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    var instrucao = `
        SELECT * FROM funcionario WHERE emailFunc = '${email}' AND senha = '${senha}';
    `;
    return database.executar(instrucao);
}

function salvarCodigo(email, codigo) {

   
        var instrucao = `
    update funcionario set  codigoVerificacao =  '${codigo}' 
	where emailFunc = '${email}';
`;


    return database.executar(instrucao);
}

function verificacaoCodigo(email, codigo){

    var instrucao = `

    select funcionario.codigoVerificacao from funcionario where emailFunc = '${email}' and codigoVerificacao = '${codigo}';

`;

    return database.executar(instrucao);
}

function updateSenha(senha, email){
var instrucao = `
    update funcionario set senha = '${senha}'
    where emailFunc = '${email}';
`;

}

module.exports = {
    buscarUsuario,
    entrar,
    salvarCodigo,
    verificacaoCodigo,
    updateSenha
};