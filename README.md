# Iniciando os projetos Node
Este repositório contém dois projetos Node, um na porta 8000 e outro na porta 8080. 
- O projeto na porta 8000 representa a API REST 
- O projeto na porta 8080 representa o site que consome essa API REST.

## Para iniciar o projeto, você deve seguir os seguintes passos:

Abra o terminal na pasta raiz do projeto.
Execute o comando ```npm i``` para instalar as dependências necessárias.
Execute o comando ```npm start``` para iniciar a aplicação.

Foi desenvolvido um algoritmo com que iniciará os servidores da API REST na ```http://localhost:8000``` e do site na ```http://localhost:8080``` automaticamente.

Agora você está pronto para começar a trabalhar com esses projetos Airplane Solutions S2!

# Uma breve explicação do que foi pensado
Quando você está desenvolvendo um projeto que envolve tanto o backend quanto o frontend, é recomendável separá-los em projetos diferentes. Uma forma comum de fazer isso é criar uma API REST separada que gerencia a lógica do backend e oferece uma interface para o frontend consumir os dados.

Separar o backend e o frontend em projetos distintos tem diversas vantagens, incluindo a separação de responsabilidades, reutilização de código, melhorias de segurança, facilidade de manutenção e escalabilidade. Ao usar uma API REST separada, você pode se concentrar em desenvolver uma API eficiente e escalável, enquanto o frontend pode se concentrar em criar uma interface do usuário elegante e fácil de usar.

A separação de frontend e backend em projetos diferentes, usando uma API REST para gerenciar a lógica do backend, é uma prática recomendada em desenvolvimento de software que oferece diversas vantagens. Por isso, é importante considerar essa abordagem ao desenvolver um projeto que envolva tanto o backend quanto o frontend.

### Em resumo
"Foi separado a estrutura do web-data-viz para dois projetos, um de front que é quando fazemos a requisição da rotas e a parte que de web do nosso site, e o outro é a parte da lógica com a conexão e a nossa regra de negócio, que no caso é o back. Isso vai ajudar a gente a dividir as tarefas e não ficar quebrando a cabeça."
