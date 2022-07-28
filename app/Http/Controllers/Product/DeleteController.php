<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Color;
use App\Models\Tag;
use App\Models\ProductImage;

class DeleteController extends Controller
{
    public function __invoke(Product $product){
      $product->productImages()->delete();
        $product->tags()->sync(null);
        $product->colors()->sync(null);
       
        $product->delete();
               return redirect()->route('product.index');
    }
}
