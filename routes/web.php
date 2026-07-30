<?php

use App\Http\Controllers\FrontController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Projeto 1 - Front-end
|--------------------------------------------------------------------------
| Responsabilidade unica: exibir a view (Vue) que envia os 2 arquivos
| (.txt e .csv) + os parametros (nome, email) para o Projeto 2 (Back-end).
*/
Route::get('/', [FrontController::class, 'index'])->name('front.index');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
