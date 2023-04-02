var database = require("../database/config");

function listar(){
    var lista = {
        payload:{
            nome:"Nilton", 
            idade:19
        }
    };

    return lista;
}

function listarUsuarios(idUsuario){
    var instrucao = `
        select * from usuario
        where idUsuario = ${idUsuario}
    `;

    return database.executar(instrucao);
}

module.exports = {
    listar,
    listarUsuarios
}