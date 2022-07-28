<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;
    protected $table = 'product_images';
    protected $guarded = false;
    public function getProductImageUrlAttribute(){
        return url('storage/'.$this->filePath);
    }
}