<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Projeto 1 - Front-end (Vue)</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    {{-- O componente Vue (FileUpload.vue) e montado aqui via resources/js/app.js --}}
    <div id="app"></div>
</body>
</html>
