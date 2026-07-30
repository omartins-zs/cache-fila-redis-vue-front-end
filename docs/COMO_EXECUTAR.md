# Como Executar — Cache & Fila com Redis (Front-end)

Escolha **um** guia conforme seu ambiente:

| Guia | Quando usar | Requisitos no PC |
| --- | --- | --- |
| **[COMO_EXECUTAR_DOCKER.md](COMO_EXECUTAR_DOCKER.md)** | Executar em qualquer máquina com containers | Docker Desktop |
| **[COMO_EXECUTAR_LOCAL.md](COMO_EXECUTAR_LOCAL.md)** | Desenvolver com Laragon, XAMPP ou Artisan | PHP, Composer e Node.js |

Este é o **Projeto 1 (Front-end)** de uma cadeia de 3 microserviços. Exibe um formulário Vue que envia arquivos e parâmetros para o Back-end (Projeto 2). Não usa banco de dados.

---

## Início rápido

### Local — Laragon ou XAMPP

Ative o bloco `LOCAL` no `.env` e execute:

```bash
cp .env.example .env
composer install
npm install
php artisan key:generate
npm run build
php artisan serve --port=8000
```

Aplicação: http://127.0.0.1:8000

### Docker

Ative o bloco `DOCKER` no `.env` e execute:

```bash
cp .env.example .env
docker compose up -d --build
```

Aplicação: http://localhost:8080

---

## Logins demo

Este projeto **não possui tela de login** — é apenas o formulário de envio.

---

## URLs principais

| Área | Local | Docker |
| --- | --- | --- |
| Formulário de envio | http://127.0.0.1:8000 | http://localhost:8080 |

> O formulário envia para o Back-end (Projeto 2). Ajuste a URL de destino em `resources/js/components/FileUpload.vue` conforme o ambiente do Back-end (8001 local / 8081 Docker).

---

## Outros documentos

- [README.md](../README.md) — Visão geral do Front-end e do fluxo dos 3 projetos

- [ACESSOS_TESTES.md](ACESSOS_TESTES.md) — Credenciais, URLs e como testar o fluxo
