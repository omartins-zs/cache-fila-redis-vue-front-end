# Como Executar com Docker — Cache & Fila com Redis (Front-end)

Guia para executar o sistema utilizando Docker Desktop.

---

## Stack e containers

| Container | Função | Porta |
| --- | --- | --- |
| nginx | Servidor web | 8080 |
| app | Laravel com PHP-FPM (compila os assets Vue) | Interna |

Este projeto **não usa banco de dados, Redis nem fila**, então não há outros containers.

---

## 1) Preparar ambiente

```bash
cp .env.example .env
```

Deixe o bloco `DOCKER` ativo e o bloco `LOCAL` comentado:

```env
# LOCAL
# APP_URL=http://127.0.0.1:8000

# DOCKER
APP_URL=http://localhost:8080
```

---

## 2) Subir containers

```bash
docker compose up -d --build
docker compose ps
```

Os assets do Vue (Vite) são compilados automaticamente durante o build da imagem.

---

## 3) Inicialização

A chave da aplicação já vem no `.env`. Caso precise gerar uma nova:

```bash
docker compose exec app php artisan key:generate
```

---

## 4) Desenvolvimento e cache

```bash
docker compose exec app php artisan optimize:clear
```

---

## 5) Acessos

| Recurso | URL |
| --- | --- |
| Formulário de envio | http://localhost:8080 |

### Credenciais de teste

Este projeto **não possui tela de login** — é apenas o formulário de envio.

---

## 6) Logs e diagnóstico

```bash
docker compose logs -f
docker compose logs -f app
docker compose exec app php artisan about
```

---

## 7) Parar ou reconstruir

```bash
docker compose down
docker compose up -d --build
```
