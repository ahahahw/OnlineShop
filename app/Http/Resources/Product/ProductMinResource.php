<?php

namespace App\Http\Resources\Product;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Category\CategoryResource;
use App\Http\Resources\Image\ImageResource;
use App\Http\Resources\Color\ColorResource;
use App\Http\Resources\Product\ProductImageResource;
class ProductMinResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
           'id'=>$this->id,
           'title'=>$this->title,
           'description'=>$this->description,
           'content'=>$this->content,
           'image_url'=>$this->imageUrl,
           'imagesUrl'=>ProductImageResource::collection($this->productImages),
           'price'=>$this->price,
           'count'=>$this->count,
           'is_published'=>$this->is_published,
           'created_at'=>$this->created_at,
           'tags'=>$this->tags,
           'colors'=> ColorResource::collection($this->colors),
           'category'=>new CategoryResource($this->category),
           
           
        ];
    }
}
