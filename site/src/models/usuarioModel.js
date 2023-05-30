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
    let instrucao = `
        update funcionario set senha = '${senha}'
        where emailFunc = '${email}';
    `;
    return database.executar(instrucao);
}

function getUsersByCompany(fk) {
    let query = `
        SELECT f.nome as nome, 
        f.email as email, 
        c.descricao as cargo
        FROM funcionario as f 
        JOIN cargo as c ON f.fkCargo = c.idCargo 
        WHERE f.fkCompanhia = ${fk};
    `
    return database.executar(query);
}

function cadastrarUsuario(fk, infosUser) {
    let subQuery = `(SELECT TOP 1 idFuncionario + 1 FROM funcionario WHERE fkCompanhia = ${fk} ORDER BY idFuncionario DESC)`
    let query = `
        INSERT INTO funcionario(
            idFuncionario, fkCompanhia, nome, email, senha, fkCargo
        ) VALUES (
            ${subQuery},
            ${fk},
            '${infosUser.nome}',
            '${infosUser.email}',
            '${infosUser.senha}',
            ${infosUser.cargo}
        );
    `
    return database.executar(query)
}

module.exports = {
    buscarUsuario,
    entrar,
    salvarCodigo,
    verificacaoCodigo,
    updateSenha,
    getUsersByCompany,
    cadastrarUsuario
};