var database = require("../database/config");

function listarUsuario(idUsuario){
    var query = `
        select * from usuario
        where idUsuario = ${idUsuario}
    `;

    return database.executar(query);
}

function login(email, senha){
    var query = `
        SELECT * FROM usuario 
        WHERE email = '${email}' AND senha = '${senha}'
    `;

    return database.executar(query);
}


module.exports = {
    listarUsuario,
    login
}