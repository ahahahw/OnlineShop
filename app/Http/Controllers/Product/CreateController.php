<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tag;
use App\Models\Category;
use App\Models\Color;
use App\Models\Group;

class CreateController extends Controller
{
    public function __invoke(){
        $tags = Tag::all();
        $colors = Color::all();
        $categories = Category::all();
        $groups = Group::all();
        return view('product.create',compact('tags','colors','categories','groups'));
    }
}
