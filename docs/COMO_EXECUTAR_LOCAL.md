# Como Executar Localmente — Cache & Fila com Redis (Front-end)

Guia para rodar **sem Docker**, no **Laragon**, **XAMPP** ou com `php artisan serve`.

> **Não quer instalar PHP, Composer ou Node?** Use [COMO_EXECUTAR_DOCKER.md](COMO_EXECUTAR_DOCKER.md) — basta Docker Desktop.

---

## Requisitos

O framework entra no projeto com `composer install`. Laragon, XAMPP ou `php artisan serve` são apenas formas de subir o ambiente.

| Ferramenta | Obrigatório? | Versão mínima |
| --- | --- | --- |
| **Composer** | Sim | 2.x |
| **PHP** | Sim | 8.3+ |
| **Node.js** | Sim (assets Vue) | 18+ |
| **NPM** | Sim (assets Vue) | 9+ |

Este projeto **não usa banco de dados nem Redis**.

Extensões PHP necessárias: `mbstring`, `openssl`, `tokenizer`, `xml`, `ctype`, `json`, `bcmath`.

### Ambiente de referência (máquina de desenvolvimento)

Stack usada na elaboração deste projeto — **não é requisito fixo**, só referência do que já foi testado:

| Ferramenta | Versão |
| --- | --- |
| **Laragon** | **6.0.0** |
| PHP (via Laragon) | 8.4.6 |
| Composer | 2.8.12 |
| Laravel (no projeto) | 12.3.0 |
| **Node.js** | **22.14.0** |
| **NPM** | **11.4.2** |

Para conferir no seu computador:

```bash
php -v
php artisan --version
composer --version
node -v
npm -v
```

---

## 1) Preparar ambiente

### 1.1 Acessar o projeto

```bash
cd c:/laragon/www/cache-fila-redis-vue-front-end
```

### 1.2 Copiar variáveis de ambiente

```bash
cp .env.example .env
```

No PowerShell:

```powershell
Copy-Item .env.example .env
```

### 1.3 Ativar o ambiente local

Deixe o bloco `LOCAL` ativo e o bloco `DOCKER` comentado no `.env`:

```env
# LOCAL
APP_URL=http://127.0.0.1:8000

# DOCKER
# APP_URL=http://localhost:8080
```

---

## 2) Instalar dependências

```bash
composer install
npm install
```

---

## 3) Inicialização e assets

```bash
php artisan key:generate
npm run build
```

Este projeto **não possui migrations relevantes** — não usa banco de dados.

---

## 4) Rodar aplicação

```bash
php artisan serve --port=8000
```

Aplicação: http://127.0.0.1:8000

Para desenvolvimento dos assets (hot reload):

```bash
npm run dev
```

---

## 5) Filas e workers

Este projeto **não usa fila** — nenhum worker é necessário.

---

## 6) Acessos

| Recurso | URL |
| --- | --- |
| Formulário de envio | http://127.0.0.1:8000 |

### Credenciais de teste

Este projeto **não possui tela de login** — é apenas o formulário de envio.

---

## 7) Comandos úteis

```bash
php artisan optimize:clear
php artisan route:list
npm run build
php artisan test
```

---

## 8) Problemas comuns

### Assets não encontrados

```bash
npm install
npm run build
```

### Alterações do `.env` não foram aplicadas

```bash
php artisan optimize:clear
```

### Chave não configurada

```bash
php artisan key:generate
```

### Erro de conexão ao enviar o formulário

Confirme que o Back-end (Projeto 2) está no ar na porta `8001` (local).

---

## Próximo passo

Para ambiente containerizado, consulte [COMO_EXECUTAR_DOCKER.md](COMO_EXECUTAR_DOCKER.md).
