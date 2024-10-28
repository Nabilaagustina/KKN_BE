<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'product_id',
        'product_image',
        'variation',
        'price',
        'qty',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
