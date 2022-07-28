<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => 'nullable|string',
            'description' => 'nullable|string',
            'content' => 'nullable|string',
            'price' => 'nullable|integer',
            'count' => 'nullable|integer',
            'preview_image' => 'nullable|file',
            'product_images' => 'nullable|array',
            'category_id' => 'nullable|integer',
            'group_id' => 'nullable|integer',
            'tags' => 'nullable|array',
            'colors' => 'nullable|array',
        ];
    }
}
