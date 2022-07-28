<?php

namespace App\Http\Controllers\Color;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Color;
use App\Models\ColorProduct;

class DeleteController extends Controller
{
    public function __invoke(Color $color){
      ColorProduct::where('color_id',$color->id)->delete();
         $color->delete();
        return redirect()->route('color.index');
    }
}
