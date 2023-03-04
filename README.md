# Sprint23-1

## Como se preparar para fazer alguma mudança em nosso Back-End (NodeJS):

Nosso Back-End está estruturado em NodeJS com uma API Restful (CRUD) onde usamos requisições HTTP para utilizar dados para ter a possibilidade de login, cadastro, gerenciamento, monitoramento, etc.

### Primeiro passo:
Na pasta server, abra o terminal e digite:
```{
npm i
```
Esse comando irá instalar todas as depencias do projeto Back-End, dependências de produção, essas que são Prisma e o Fastify até o momento. Após terminar de instalar todas as dependências confira no arquivo tsconfig.json se o "target" está: "es2020"

### Segundo passo:
Agora você pode iniciar a aplicação local até o momento com o comando:
```{
npm run dev
```
se tiver utilizando o yarn:
```{
yarn dev
```
se for usar o PNPM:
```{
pnpm run dev
```
Com isso a aplicação vai ser iniciada exibindo a mensagem:
> Server running in: http://localhost: 3333/

## Coisas a mais:
#### Prisma Studio
Para abrir o prisma studio execute o seguinte comando no terminal:
``` 
npx prisma studio
```
se tudo der certo irá aparecer a seguinte mensagem:
> Environment variables loaded from .env
  Prisma schema loaded from prisma/schema.prisma
  Prisma Studio is up on http://localhost:5555

e irá abrir no seu navegador padrão a tela do Prisma Studio onde poderá ver todas as informações da tabela sem precisar de alguma IDE ou até mesmo outros aplicativos.

#### Prisma Migrate
O comando migrate do prisma faz uma migração das alterações feitas para um arquivo .SQL, com comandos SQL, para fazer essa migração usamos:
```
npx prisma migrate dev
```
Após esse comando irá exibir a seguinte mensagem:
> Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": SQLite database "dev.db" at "file:./dev.db"
? Enter a name for the new migration: › 

Insira o nome da mudança que você fez, por exemplo: "create_companhia_aereas". O arquivo de migração estará na pasta /prisma/migrations/<data_que_foi_criado_nome_da_mudanca>.SQL
