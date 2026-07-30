# 🔐 Acessos e Dados de Teste

> **Importante:** este projeto (Front-end) **não possui tela de login, painel nem banco de dados**. É apenas o formulário Vue que envia arquivos e parâmetros para o Back-end (Projeto 2).

## 1. Acesso ao Sistema (Usuários de Teste)

O `DatabaseSeeder` cria um usuário padrão (herdado do starter kit do Laravel), mas ele **não é usado**: não há autenticação e o projeto não utiliza banco de dados.

| Perfil | E-mail / Usuário | Senha | Permissão / Detalhes |
| --- | --- | --- | --- |
| Usuário do seeder (não utilizado) | `test@example.com` | `12345678` | Definido no `DatabaseSeeder`; sem login e sem banco em uso |

## 2. URLs Principais

Não há rota `/login`. A única tela é o formulário de envio.

| Ambiente | Aplicação (Formulário) |
| --- | --- |
| **Docker** | `http://localhost:8080` |
| **Local** (`php artisan serve`) | `http://127.0.0.1:8000` |

## 3. Vitrine Pública / Páginas para Clientes

| Item | Link (Exemplo Docker) |
| --- | --- |
| Formulário de envio de arquivos | `http://localhost:8080/` |

Para testar: preencha nome e e-mail, selecione os arquivos de exemplo em [`../arquivos-teste/`](../arquivos-teste) (`exemplo.txt` e `exemplo.csv`) e clique em **Enviar**. O formulário envia para o Back-end (Projeto 2).

## 4. Validação do Acesso

| Verificação | Resultado Esperado |
| --- | --- |
| Containers (`app`, `nginx`) | Saudáveis / Rodando |
| Página inicial (`/`) | HTTP `200` com o formulário renderizado |
| Envio do formulário (Back-end no ar) | Mensagem de sucesso na tela |

## 5. Carregar Dados de Teste

Este projeto **não utiliza banco de dados**, então não há dados a recriar. Caso deseje rodar o seeder padrão do starter kit (opcional, sem efeito no fluxo):

**Com Docker:**

```bash
docker compose exec app php artisan migrate:fresh --seed
```

**Rodando Localmente (Sem Docker):**

```bash
php artisan migrate:fresh --seed
```

---

### 📝 Observações:

- O destino do envio (Back-end) está configurado em `resources/js/components/FileUpload.vue` — ajuste a porta conforme o ambiente (8001 local / 8081 Docker).
- Use estas informações **apenas** em ambiente local ou Docker de desenvolvimento.
