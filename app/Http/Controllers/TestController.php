<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index() {
        $array = [
            'Message' => 'You Got It'
        ];
        
        return response()->json($array);
    }
}
