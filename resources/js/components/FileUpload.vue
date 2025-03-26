<template>
    <div>
        <h1>Enviar Arquivos</h1>
        <form @submit.prevent="submitForm">
            <!-- Arquivo 1 -->
            <div>
                <label>Arquivo 1:</label>
                <input type="file" @change="handleFile1" required />
            </div>
            <!-- Arquivo 2 -->
            <div>
                <label>Arquivo 2:</label>
                <input type="file" @change="handleFile2" required />
            </div>
            <!-- Parâmetro 1 -->
            <div>
                <label>Parâmetro 1:</label>
                <input type="text" v-model="param1" required />
            </div>
            <!-- Parâmetro 2 -->
            <div>
                <label>Parâmetro 2:</label>
                <input type="text" v-model="param2" required />
            </div>
            <!-- Botão de Enviar -->
            <button type="submit">Enviar</button>
        </form>
        <div v-if="response">
            <h2>Resposta do Servidor:</h2>
            <pre>{{ response }}</pre>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            file1: null,
            file2: null,
            param1: '',
            param2: '',
            response: null,
        };
    },
    methods: {
        handleFile1(event) {
            this.file1 = event.target.files[0];
        },
        handleFile2(event) {
            this.file2 = event.target.files[0];
        },
        async submitForm() {
            const formData = new FormData();
            formData.append('file1', this.file1);
            formData.append('file2', this.file2);
            formData.append('param1', this.param1);
            formData.append('param2', this.param2);

            // Neste projeto, a requisição será enviada para o endpoint do Projeto 2 que fará
            // as validações e o salvamento dos arquivos.
            try {
                const { data } = await axios.post('http://localhost:8001/process-files', formData);
                this.response = data;
                alert('Arquivos enviados com sucesso!');
            } catch (error) {
                console.error('Erro ao enviar os arquivos:', error);
                alert('Erro ao enviar os arquivos.');
            }
        },
    },
};
</script>

<style scoped>
h1 {
    color: #2c3e50;
}
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
}
</style>
