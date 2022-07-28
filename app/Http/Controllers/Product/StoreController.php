<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Product\StoreRequest;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Support\Facades\Storage;


class StoreController extends Controller
{
    public function __invoke(StoreRequest $request){
        $data=$request->validated();
       
        $productImages = $data['product_images'];
        $data['preview_image'] = Storage::disk('public')->put('/images',$data['preview_image']);
        $tagsIds = $data['tags'];
        $colorsIds = $data['colors'];

        unset($data['tags']);
        unset($data['colors']);
        unset($data['product_images']);

        $product = Product::firstOrCreate(['title'=>$data['title']],$data); 
        $product->tags()->attach($tagsIds);
        $product->colors()->attach($colorsIds);
        foreach($productImages as $productImage){
         if($product->productImages()->count()<3){
           $imagePath= Storage::disk('public')->put('/images',$productImage);
           ProductImage::create([
            'filePath'=>$imagePath,
            'product_id'=>$product->id
           ]);
        }
        }
   
        return redirect()->route('product.index');
        
    }
}
