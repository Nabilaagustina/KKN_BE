<?php

namespace App\Models;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'telp',
        'address',
        'slug',
        'image',
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
