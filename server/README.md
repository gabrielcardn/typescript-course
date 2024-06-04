- Iniciar o projeto
  > npm init -y
- Iniciar configuração 'Typescript'
  > tsc --init
- Instalar pacotes iniciais
  > npm install concurrently nodemon
- Criar pastas 'source' (código) e 'build' (compilado)
- Configurar o 'tsconfig.ts'
  > "outDir": "./build"
  > "rootDir": "./src"
- Instalar o express, body-parser e cookie-session para lógica do servidor + login:
  > npm install express body-parser cookie-session
- Instalar os tipos:
  > npm install @types/express @types/body-parser @types/cookie-session
  
- O body-parse é um middleware responsável por criar o objeto 'body' que será acessado nas rotas do express
