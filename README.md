# Iniciando os projetos Node
Este repositório contém dois projetos Node, um na porta 8000 e outro na porta 8080. O projeto na porta 8000 é uma API REST e o projeto na porta 8080 é um site que consome essa API.

Para iniciar cada projeto, você deve seguir os seguintes passos:

# Iniciando a API REST (Porta 8000)
Abra o terminal e navegue até a pasta api-rest do projeto usando o comando ```cd api-rest ```.

Execute o comando ```npm install``` para instalar as dependências necessárias.

Execute o comando ```npm run dev``` para iniciar o servidor da API REST na porta 8000.

A API REST agora está pronta para ser usada. Você pode fazer chamadas para os endpoints da API REST usando o seu aplicativo ou ferramenta de teste de API favorita.

# Iniciando o site (Porta 8080)
Abra um novo terminal e navegue até a pasta site do projeto usando o comando ```cd site```

Execute o comando ```npm install``` para instalar as dependências necessárias.

Execute o comando ```npm run dev``` para iniciar o servidor do site na porta 8080.

O site agora está pronto para ser usado. Abra o seu navegador e navegue até http://localhost:8080 para ver o site em ação.

Se você precisar fazer alguma modificação no código fonte, você pode editá-lo em cada pasta do projeto e os servidores serão reiniciados automaticamente para que as alterações tenham efeito imediato.

Agora você está pronto para começar a trabalhar com esses projetos Node!


# Uma breve explicação do que foi pensado 

Quando você está desenvolvendo um projeto que envolve tanto o backend quanto o frontend, é recomendável separá-los em projetos diferentes. Uma forma comum de fazer isso é criar uma API REST separada que gerencia a lógica do backend e oferece uma interface para o frontend consumir os dados.

Separar o backend e o frontend em projetos distintos tem diversas vantagens, incluindo a separação de responsabilidades, reutilização de código, melhorias de segurança, facilidade de manutenção e escalabilidade. Ao usar uma API REST separada, você pode se concentrar em desenvolver uma API eficiente e escalável, enquanto o frontend pode se concentrar em criar uma interface do usuário elegante e fácil de usar.

A separação de frontend e backend em projetos diferentes, usando uma API REST para gerenciar a lógica do backend, é uma prática recomendada em desenvolvimento de software que oferece diversas vantagens. Por isso, é importante considerar essa abordagem ao desenvolver um projeto que envolva tanto o backend quanto o frontend.
#
### Em resumo
"Foi separado a estrutura do web-data-viz para dois projetos, um de front que é quando fazemos a requisição da rotas e a parte que de web do nosso site, e o outro é a parte da lógica com a conexão e a nossa regra de negócio, que no caso é o back. Isso vai ajudar a gente a dividir as tarefas e não ficar quebrando a cabeça."
