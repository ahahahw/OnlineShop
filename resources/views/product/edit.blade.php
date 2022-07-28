@extends('admin.layouts.main')

@section('content')
<div class="content-wrapper">
    <!-- Content Header (Pprice header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Редактирование товара</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard v2</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- Info boxes -->
        <div class="p-1 w-25">
        
         <form enctype='multipart/form-data' action='{{route('product.update',$product->id)}}' method='post' >
          @method('patch')
           @csrf
           <div class='form-group'>
                  <input type='text' name='title' class='form-control' value='{{$product->title ?? old('name')}}' placeholder='Имя'>
             </div>
            <div class='form-group'>
            <div class='form-group'>
            <input type='text' name='description' class='form-control' value='{{$product->description ?? old('description')}}' placeholder='Описание'>
            </div>
            <div class='form-group'>
              <textarea name='content' cols='30' rows='5' class='form-control' placeholder='Контент'>{{ $product->content ?? old('content') }}
             </textarea>
            </div>
            <div class='form-group'>
            <input type='text' name='price' class='form-control' value='{{$product->price ?? old('price')}}' placeholder='Цена'>
            </div>
            <div class='form-group'>
            <input type='text' name='count' class='form-control' value='{{$product->count ?? old('count')}}' placeholder='Количество'>
            </div>
            <div>
              <img src='{{asset('storage/'.$product->preview_image)}}' style='width:30px; height:30px;'>
            </div>
            <div class="form-group">
                    <label for="exampleInputFile">Главное Изображение</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input name='preview_image' type="file" class="custom-file-input" id="exampleInputFile">
                        <label class="custom-file-label" for="exampleInputFile">Выберите изображение</label>
                      </div>
                    </div>
            </div>

            @foreach($product->productImages as $productImage)
            <div>
              <img src='{{asset('storage/'.$productImage->filePath)}}' style='width:30px; height:30px;'>
            </div>
            <div class="form-group">
                    <label for="exampleInputFile">Изображение</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input name='product_images[{{$productImage->id}}]' type="file" class="custom-file-input" id="exampleInputFile">
                        <label class="custom-file-label" for="exampleInputFile">Выберите изображение</label>
                      </div>
                    </div>
             </div>
             @endforeach  
          


            <div class="form-group">
                        <label>Категория</label>
                        <select class="form-control" name='category_id'>
                          <option selected='selected' disabled>Выберите Категорию</option>
                          @foreach($categories as $category)
                          <option value='{{$category->id}}' {{$product->category_id == $category->id ? 'selected' : ''}}>{{$category->title}}</option>
                          @endforeach
                        </select>
             </div>
             <div class="form-group">
                        <label>Группа</label>
                        <select class="form-control" name='group_id'>
                          <option selected='selected' disabled>Выберите Группу</option>
                          @foreach($groups as $group)
                          <option value='{{$group->id}}'>{{$group->title}}</option>
                          @endforeach
                        </select>
            </div>
            <div class="form-group">
                  <label>Тэги</label>
                  <select class="select2" multiple="multiple" name='tags[]' data-placeholder="Выберите тэг" style="width: 100%;">
                  @foreach($tags as $tag)
                          <option value='{{$tag->id}}' 
                          @foreach($product->tags as $productTag)
                          {{$productTag->id == $tag->id ? 'selected':''}}
                          @endforeach
                          
                          >{{$tag->title}}</option>
                  @endforeach
               
                  </select>
                </div>
            <divclass="form-group">
                  <label  >Цвет</label>
                  <select id='colors'  class="select2 select2-purple" multiple="multiple" name='colors[]' data-placeholder="Выберите Цвет" style="width: 100%;">
                  @foreach($colors as $color)
                          <option   value='{{$color->id}}'
                          @foreach($product->colors as $productColor)
                          {{$productColor->id == $color->id ? 'selected':''}}
                          @endforeach
                          
                          >{{$color->title}}</option>
                  @endforeach
                
                  </select>
                </div>


            <input type='submit' class='btn btn-success mt-2' value='Редакировать'>
            </div>
         </form>
 
      </div><!--/. container-fluid -->
    </section>
    <!-- /.content -->
  </div>
@endsection