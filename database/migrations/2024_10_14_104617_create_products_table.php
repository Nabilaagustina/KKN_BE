<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();

            // Foreign key to categories table
            $table->foreignId('category_id')
                ->constrained('categories') // Automatically infers the 'id' column
                ->cascadeOnDelete();

            $table->foreignId('store_id')
                ->constrained('stores') // Mengaitkan dengan tabel stores
                ->cascadeOnDelete(); // Hapus produk jika toko dihapus
            $table->string('title');
            $table->string('slug');
            $table->text('description');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
