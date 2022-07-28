<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Product\UpdateRequest;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Support\Facades\Storage;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Product $product){
        $data=$request->validated();
        

        if(isset($data['preview_image'])){ 
        $data['preview_image'] = Storage::disk('public')->put('/images',$data['preview_image']);
        }
        if(isset($data['product_images'])){ 
            foreach($data['product_images'] as $k=>$productImage){
                $productImage = Storage::disk('public')->put('/images',$productImage);
                ProductImage::where('id',$k)->update([
                    'filePath'=>$productImage
                ]);
            }

        }

        unset($data['product_images']);
         $tagsIds=null;
         $colorsIds=null;
        if(isset($data['tags'])){
            $tagsIds = $data['tags'];
           
        }
        unset($data['tags']);
        if(isset($data['colors'])){
            $colorsIds = $data['colors'];
            
        }
        unset($data['colors']);
      
        $product->update($data);    
        $product->tags()->sync($tagsIds);
        $product->colors()->sync($colorsIds);

        return redirect()->route('product.index');
        
    }
}
