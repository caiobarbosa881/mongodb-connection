# Conexão ao Banco de Dados MongoDB

O objetivo do projeto é conectar uma aplicação nodeJS com um banco de dados não relacional sendo o MongoDB o escolhido. Além disso também adiciona um Usuário quando se conecta.

## Rest

É um estilo de arquitetura de software muito comum, se chama originalmente Representational State Transfer.

## ODM
 O projeto utiliza o Moongose que é um Object Data Manager (ODM), ele é utilizado pelo fato que o MongoDB é um banco de dados não relacional orientado a documentos.

 Se estivessemos em um banco de dados relacional(Mysql, Postgresql e etc) então nós utilizaríamos um ORM.

## .env-example

Você pode setar variáveis de ambiente que vão ir de acordo com seus interesses, é apenas necessário renomear o .env-example para .env e passar os valores que você quer.

## Banco de dados não relacional

É um banco de dados que não usa o esquema de tabela de linhas e colunas encontrado na maioria dos sistemas de banco de dados tradicionais. O mongoDB seria um desses banco de dados não relacionais.

No mongoDB nós podemos utilizar JSON por exemplo diferente de um banco de dados relacional padrão.

## TypeScript

É um superset utilizado para adicionar tipagem estática ao javascript, são os arquivos com final .ts
evitando possíveis erros de tipos ao longo do desenvolvimento.

## Dependências de Desenvolvimento

    @types/mongoose
    dotenv
    typescript
    moongose

## Yarn

Estamos utilizando o yarn um gerenciador de pacotes Javascript/Nodejs, assim como o npm e o PNPM

## tsconfig.json

Responsável por configurar o nosso typescript no projeto.
Assim você pode definir regras bem definidas no typescript e como você vai programar o projeto.

## Autores
- [@Caio Barbosa](https://github.com/caiobarbosa881)