<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;

class FrontController extends Controller
{
    /**
     * Projeto 1 - Exibe a view com o componente Vue de upload.
     * A view e a unica responsabilidade deste projeto: enviar os
     * arquivos e parametros para o Projeto 2 (Back-end).
     */
    public function index()
    {
        Log::info('🟢 [FrontController@index] Exibindo formulario de upload');

        return view('front');
    }
}
