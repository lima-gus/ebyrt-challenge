# ebyrt-challenge [60%]

## Descrição

Esse projeto foi desenvolvido individualmente para o teste técnico da Ebyrt. O objetivo era fazer um CRUD (Create, Read, Update, Delete) de uma lista de tarefas com Node.js, Express e MySQL no back-end e integrar com o front-end desenvolvido em React.

## Funcionalidades
 - [x]  Visualizar a lista de tarefas;
 - [x] Inserir uma tarefa na lista;
 - [x] Remover uma tarefa da lista;
 - [ ] Atualizar uma tarefa da lista;
 - [ ] A tarefa deve ter um status atualizável: Pendente, Em Andamento ou Concluído;

## Instalação e execução

⚠️ Certifique-se que o [MySQL](https://www.mysql.com/downloads/) esteja instalado e rodando na sua máquina;

 1.   Clone esse repositório `git clone git@github.com:lima-gus/ebyrt-challenge.git`;
 2. Dentro das pastas `ebyrt-frontend` e `ebyrt-backend` execute  `npm
    install`  para baixar as dependências ;

 3.  Na raíz da pasta `ebyrt-backend` crie um arquivo chamado `.env` e ajuste as seguintes variáveis de ambiente:
```
MYSQL_USER=seu_usuario 
MYSQL_PASSWORD=sua_senha 
MYSQL_DATABASE=ebyrt
MYSQL_HOST=localhost
```

 4.   Execute  `npm start` dentro das pastas `ebyrt-frontend` e `ebyrt-backend` para iniciar a aplicação;
 
 *O front-end está configurado para rodar na porta 3000 e o back-end na porta 3001, certifique-se que essas portas estão livres;*

##
### ⚠️ Observação 
* O front-end está hard coded e ainda não há integração com o back-end;
* Utilizando o [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/downloads/) é possível fazer a requisição para as rotas `post` e `get` na URL `http://localhost:3001/task`;
* É possível fazer a requisição para a rota `delete` na URL `http://localhost:3001/task/:id` onde `:id` deve ser substituído pelo id da tarefa;
