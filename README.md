# express-sequelize-sucrase
express with sucrase using sequelize for sql

## Install packages

> yarn add express sequelize pg pg-hstore

> yarn add -D sequelize-cli

### Comandos sequelize

help:

> sequelize --help

create database:

> yarn sequelize db:create

O comando migration serve para manipular a database, seja para criar tabela, colunas, campos, altera, deletar e etc.

Criando uma tabela:

> yarn sequelize migration:create --name=create-users

Após criar a migration e modificar o arquivo gerado, para executar a migration:

> yarn sequelize db:migrate

Para desfazer a última migration(modo dev apenas):

> yarn sequelize db:migrate:undo

Adicionar um novo campo na tabela users:

> yarn sequelize migration:create --name=add-age-field-to-users
