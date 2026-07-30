<template>
    <div class="container">
        <h1>Projeto 1 — Envio de Arquivos</h1>
        <p class="hint">
            Preencha os parâmetros, selecione os arquivos <strong>.txt</strong> e
            <strong>.csv</strong> e envie para o Projeto 2 (Back-end).
        </p>

        <form @submit.prevent="submitForm">
            <div class="field">
                <label>Nome:</label>
                <input type="text" v-model="nome" required />
            </div>

            <div class="field">
                <label>E-mail:</label>
                <input type="email" v-model="email" required />
            </div>

            <div class="field">
                <label>Arquivo .txt:</label>
                <input type="file" accept=".txt" @change="onTxtChange" required />
            </div>

            <div class="field">
                <label>Arquivo .csv:</label>
                <input type="file" accept=".csv" @change="onCsvChange" required />
            </div>

            <button type="submit" :disabled="loading">
                {{ loading ? 'Enviando...' : 'Enviar' }}
            </button>
        </form>

        <div v-if="response" class="response success">
            <h2>Resposta do servidor</h2>
            <pre>{{ response }}</pre>
        </div>

        <div v-if="errorMessage" class="response error">
            <strong>Erro:</strong> {{ errorMessage }}
        </div>
    </div>
</template>

<script>
import axios from 'axios';

// URL do Projeto 2 (Back-end). Ajuste a porta caso rode em outra.
const BACKEND_URL = 'http://localhost:8001/api/process-files';

export default {
    name: 'FileUpload',
    data() {
        return {
            nome: '',
            email: '',
            txtFile: null,
            csvFile: null,
            response: null,
            errorMessage: null,
            loading: false,
        };
    },
    methods: {
        onTxtChange(event) {
            this.txtFile = event.target.files[0] ?? null;
        },
        onCsvChange(event) {
            this.csvFile = event.target.files[0] ?? null;
        },
        async submitForm() {
            this.response = null;
            this.errorMessage = null;
            this.loading = true;

            const formData = new FormData();
            formData.append('nome', this.nome);
            formData.append('email', this.email);
            formData.append('txt_file', this.txtFile);
            formData.append('csv_file', this.csvFile);

            try {
                const { data } = await axios.post(BACKEND_URL, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                this.response = data;
            } catch (error) {
                this.errorMessage =
                    error.response?.data?.message ??
                    'Não foi possível conectar ao Back-end (Projeto 2). Ele está rodando na porta 8001?';
                console.error('Erro ao enviar os arquivos:', error);
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 560px;
    margin: 40px auto;
    font-family: system-ui, sans-serif;
    color: #2c3e50;
}
.hint {
    color: #6b7280;
    font-size: 0.9rem;
}
form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
}
.field {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
label {
    font-weight: 600;
}
input {
    padding: 8px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
}
button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 14px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
}
button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
.response {
    margin-top: 20px;
    padding: 12px;
    border-radius: 6px;
}
.response.success {
    background: #ecfdf5;
    border: 1px solid #a7f3d0;
}
.response.error {
    background: #fef2f2;
    border: 1px solid #fecaca;
    color: #b91c1c;
}
pre {
    white-space: pre-wrap;
    word-break: break-word;
}
</style>
