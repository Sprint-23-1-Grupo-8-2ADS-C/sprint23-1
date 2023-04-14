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
        SELECT * FROM funcionario WHERE email = '${email}' AND senha = '${senha}';
    `;
    return database.executar(instrucao);
}

function salvarCodigo(email, codigo, idFuncao) {

    if (idFuncao == enviarCodigo) {
        var instrucao = `
    update funcionario set  codigoVerificacao =  '${codigo}' 
	where emailFunc = '${email}'; ;
`;

    }else {
        var instrucao = `
        select funcionario.codigoVerificacao from funcionario where emailFunc = '${email}'; ;
`;

    }

    return database.executar(instrucao);
}


module.exports = {
    buscarUsuario,
    entrar,
    salvarCodigo
};