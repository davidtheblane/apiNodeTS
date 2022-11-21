**Configurando o frontend usando VITE**

- Iniciar o projeto e selecionar padrões
  `yarn create vite`

dentro da pasta criada rodar o comando `yarn` para instalar as dependencias

- iniciar servidor frontend
  `yarn dev`


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
  . identation spaces(4)
  . quotes(single)
  . line endings(unix)
  . semicolons(yes)
  . install(yes)
  . yarn

**Instalar o styled componentes**
`yarn add styled-components`

- importar os tipos do styled-components para TS
  `npm i --save-dev @types/styled-components`

**Dentro de componentes react**
Ao usar {} dentro de uma tag como <img src=""> ele interpreta como codigo javascript e não strings.
assim podemos usar variaveis no lugar <img src={logo}

