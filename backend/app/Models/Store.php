<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    public $timestamps = false; //timesatampを利用しない
    protected $fillable = [
        'product_id',
        'product_name',
        'product_description',
        'price',
        'img',
        'type'
    ];

}