**Configurando Typescript**
- start new project
` yarn init -y`

- install typescript
`yarn add -D typescript`

- create a new tsconfig file
`yarn tsc --init`

- build javascript file
`yarn tsc`

- escolher a saida dos arquivos .js convertidos(pasta de build)
em tsconfig.json, no parametro "outDir", escolher o nome de uma pasta.
exemplo: "outDir": "dist"

**Iniciar um repositorio GIT**
`git init`

- mudar nome da branch atual
`git branch -m <name>`

- configurar o nome padrao para novas branches
`git config --global init.defaultBranch <name>`

- criar o arquivo .gitignore e adicionar "node_modules" e "dist"
`npx gitignore node`

**Configurar um linter para manter o padrão**
- instalar a extensão editorconfig e modificar
  . trim_trailing_whitespace = true
  . insert_final_newline = true

- instalar o eslint usando o comando:
`npm init @eslint/config`
  . to check syntax, find problems, and enforce code style.
  . Javascript modules (import/export)
  . None of these
  . Typescript(Yes)
  . node
  . style(i'll choose)
  . config file(JSON)
  . identation(4)
  . quotes(single)
  . line endings(unix)
  . semicolons(yes)
  . install(yes)
  . yarn

**Criar um servidor**
instalar o express
`yarn add express`

instalar a tipagem de typescript para o express
`yarn add -D @types/express`

rodar um arquivo typescript sem precisar buildar a aplicação
`yarn add -D ts-node` já consegue rodar com `yarn ts-node src/index.js`

porém a melhor opção é instalar o nodemon
`yarn add -D nodemon`


**Banco de dados mongodb usando docker e mongoose**
- download imagem mongodb
`docker pull mongo`

- criar um container com a imagem do mongo sem senha
`docker run --name mongo -p 27017:27017 -d mongo`
. com senha
`docker run --name mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin mongo`

- instalar o mongoose para fazer a conexão e manipulação de dados
`yarn add -D mongoose`

- criar os schemas

**Criando as rotas**
- definir os casos de uso(ações que o usuário poderá realizar)
  . List categories
  . Create category
  . List products
  . Create products
  . Get products by category
  . List orders
  . Create order
  . Change order status
  . Delete/cancel order

**Enviando arquivos de imagem usando multer**
- instalar o multer
  `yarn add multer`

instalar a tipagem de typescript para o multer
- yarn add -D @types/multer

