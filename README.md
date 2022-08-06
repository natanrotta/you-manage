# YOU MANAGE JAVASCRIPT

Projeto criado com

![HTML Badge](https://img.shields.io/badge/-HTML-orange)
![CSS Badge](https://img.shields.io/badge/-CSS-blue)
![JavaScript Badge](https://img.shields.io/badge/-JavaScript-yellow)
![ReactJS Badge](https://img.shields.io/badge/-ReactJS-blue)
![NodeJS Badge](https://img.shields.io/badge/-Node.js-green)
![Docker](https://img.shields.io/badge/Docker-blue)
![GraphQl](https://img.shields.io/badge/GraphQl-purple)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-blue)

&nbsp;

## Primeira instalação

**Dependências:** É preciso ter algumas dependências instaladas antes de continuar

- Docker e docker-compose;
- Node.js e NPM;
- Yarn.

&nbsp;

## Etapas

### 0. Instale as dependências do projeto

```
yarn install
```

&nbsp;

### 1. Copie o arquivo `.env.example` para um novo arquivo `.env`

**(não renomeie, crie uma cópia)**

&nbsp;

### 2. Coloque estas URLs no arquivo `/etc/hosts` para reverter o proxy

```
# GQL
127.0.0.1   proxy.local.you.manage
127.0.0.1   pg.local.you.manage
127.0.0.1   spa.local.you.manage
127.0.0.1   api.local.you.manage
```

&nbsp;

### 3. Suba o docker com o comando

```
docker-compose up
```

&nbsp;

### 4. Acesse seu navegador: 
- spa: `http://spa.you.manage.com/`
- api: `http://api.you.manage.com/`

---

## Possíveis erros
```
Error: error:0308010C:digital envelope routines::unsupported
```

### 1. Tente desinstalar o Node.js versão 17+ e reinstale o Node.js versão 16+

&nbsp;

### 2. Abra o terminal e cole-os conforme descrito:
#### 2.1. Linux e Mac:
```
export NODE_OPTIONS=--openssl-legacy-provider
```

&nbsp;

#### 2.2. Windows:
```
set NODE_OPTIONS=--openssl-legacy-provider
```

### 3. No seu package.json: altere esta linha
```
"dev": "react-scripts start"

para

"dev": "react-scripts --openssl-legacy-provider start"
```
