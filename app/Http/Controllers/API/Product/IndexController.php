<?php

namespace App\Http\Controllers\API\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Filters\ProductFilter;
use App\Http\Resources\Product\IndexProductResource;
use App\Http\Requests\API\Product\IndexRequest;

class IndexController extends Controller
{
    public function __invoke(IndexRequest $request){
        $data = $request->validated();

        $filter = app()->make(ProductFilter::class,['queryParams'=>array_filter($data)]);
        $products = Product::filter($filter)->paginate(10,['*'], 'page', $data['page']);
        if(isset($data['title'])){
            if($data['title']==3){
                $products = Product::filter($filter)->orderBy('title','desc')->paginate(10,['*'], 'page', $data['page']);
         }
            if($data['title']==2){
                $products = Product::filter($filter)->orderBy('title','asc')->paginate(10,['*'], 'page', $data['page']);
         }
            if($data['title']==5){
                $products = Product::filter($filter)->orderBy('price','desc')->paginate(10,['*'], 'page', $data['page']);
         }
            if($data['title']==4){
                $products = Product::filter($filter)->orderBy('price','asc')->paginate(10,['*'], 'page', $data['page']);
         }
        }
        
       
     

        return IndexProductResource::collection($products);
    }
}
