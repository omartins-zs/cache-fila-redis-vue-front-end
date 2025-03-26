<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Exibe a view com o componente Vue para envio dos arquivos.
     */
    public function index()
    {
        return view('welcome');
    }
}
