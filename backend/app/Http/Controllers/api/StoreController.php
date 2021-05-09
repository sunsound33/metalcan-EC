<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StoreController extends Controller
{

    public function getStore()
    {
        return StoreResource::collection(Store::all());
    }

}
