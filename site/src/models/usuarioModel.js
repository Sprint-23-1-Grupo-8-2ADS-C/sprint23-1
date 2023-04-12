var database = require("../database/config")


function buscarUsuario(){
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


module.exports = {
    buscarUsuario,
    entrar
};