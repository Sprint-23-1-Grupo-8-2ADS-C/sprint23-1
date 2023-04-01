create database airplane;
use airplane;

create table funcionario(
idFuncionacio int primary key auto_increment,
nomeFunc varchar(45),
emailFunc varchar(45),
numeroFunc char(11),
senha varchar(45),
fkCompanhia int
);

create table companhiaAerea(
idCompanhia int primary key  auto_increment,
nomeCompanhia varchar(45),
cnpj char(15),
emailCompanhia varchar(45)
)auto_increment = 100;

ALTER TABLE funcionario 
ADD foreign key (fkCompanhia) references companhiaAerea(idCompanhia);

select * from funcionario;

