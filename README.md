# 🖥️ Cache & Fila com Redis — Projeto 1 (Front-end · Laravel + Vue)

Projeto de **estudo** de **Cache com Redis** e **Fila (Queue) com Redis** dividido em 3 microserviços. Este é o **Front-end**.

> Fluxo geral: **Front-end (este)** → [Back-end (fila/Redis)](https://github.com/omartins-zs/cache-fila-redis-back-end) → [API (cache/Redis)](https://github.com/omartins-zs/cache-fila-redis-api)

## Responsabilidade
Exibir um formulário Vue que envia **2 parâmetros** (nome, e-mail) e **2 arquivos** (`.txt` e `.csv`) via `multipart/form-data` para o Projeto 2 (Back-end).

Tem apenas o essencial: **1 Route**, **1 Controller** e **1 View**.

| Peça | Arquivo |
|------|---------|
| Route | `routes/web.php` → `GET /` |
| Controller | `app/Http/Controllers/FrontController.php` |
| View | `resources/views/front.blade.php` |
| Componente Vue | `resources/js/components/FileUpload.vue` |

## Como rodar
```bash
composer install
npm install
php artisan serve --port=8000
npm run dev
```
Acesse `http://localhost:8000`. O Back-end (Projeto 2) precisa estar rodando na porta **8001**.

## Arquivos de teste
Na pasta [`arquivos-teste/`](arquivos-teste) há um `exemplo.txt` e um `exemplo.csv` (com acentos e maiúsculas) para testar a formatação feita pelo Back-end.
