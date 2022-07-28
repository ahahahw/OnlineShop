@extends('admin.layouts.main')

@section('content')
<div class="content-wrapper">
    <!-- description Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Добавить Товар </h1>
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
    <!-- /.description-header -->

    <!-- Main description -->
    <section class="content">
      <div class="container-fluid">
        <!-- Info boxes -->
        <div class="p-1 w-25">
         <form action='{{route('product.store')}}' method='post' enctype='multipart/form-data'>
           @csrf


          
            <div class='form-group'>
            <input type='text' name='title' class='form-control' value='{{old('title')}}' placeholder='Наименование '>
            </div>
            <div class='form-group'>
            <input type='text' name='description' class='form-control' value='{{old('description')}}' placeholder='Описание'>
            </div>
            <div class='form-group'>
              <textarea name='content' cols='30' rows='5' class='form-control' placeholder='Контент'>{{old('content')}}
             </textarea>
            </div>
            <div class='form-group'>
            <!-- <div class='form-group'>
            <input type='text' name='preview_image' class='form-control' value='{{old('preview_image')}}' placeholder='Картинка'>
            </div> -->
            <div class='form-group'>
            <input type='number' name='price' class='form-control' value='{{old('price')}}' placeholder='Цена'>
            </div>
            <div class='form-group'>
            <input type='number' name='count' class='form-control' value='{{old('price')}}' placeholder='Количество'>
            </div>
            <div class="form-group">
                    <label for="exampleInputFile">Изображение</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input name='preview_image' type="file" class="custom-file-input" id="exampleInputFile">
                        <label class="custom-file-label" for="exampleInputFile">Выберите изображение</label>
                      </div>
                    </div>
             </div>
            <div class="form-group">
                    <label for="exampleInputFile">Изображение</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input name='product_images[]' type="file" class="custom-file-input" id="exampleInputFile">
                        <label class="custom-file-label" for="exampleInputFile">Выберите изображение</label>
                      </div>
                    </div>
             </div>
            <div class="form-group">
                    <label for="exampleInputFile">Изображение</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input name='product_images[]' type="file" class="custom-file-input" id="exampleInputFile">
                        <label class="custom-file-label" for="exampleInputFile">Выберите изображение</label>
                      </div>
                    </div>
             </div>
            <div class="form-group">
                    <label for="exampleInputFile">Изображение</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input name='product_images[]' type="file" class="custom-file-input" id="exampleInputFile">
                        <label class="custom-file-label" for="exampleInputFile">Выберите изображение</label>
                      </div>
                    </div>
             </div>
            <div class="form-group">
                        <label>Категория</label>
                        <select class="form-control" name='category_id'>
                          <option selected='selected' disabled>Выберите Категорию</option>
                          @foreach($categories as $category)
                          <option value='{{$category->id}}'>{{$category->title}}</option>
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
                          <option value='{{$tag->id}}'>{{$tag->title}}</option>
                  @endforeach
               
                  </select>
                </div>
            <div class="form-group">
                  <label  >Цвет</label>
                  <select id='colors'  class="select2 select2-purple" multiple="multiple" name='colors[]' data-placeholder="Выберите Цвет" style="width: 100%;">
                  @foreach($colors as $color)
                          <option   value='{{$color->id}}'><div class='text-danger'>{{$color->title}}</div></option>
                  @endforeach
                
                  </select>
                </div>

            <input type='submit' class='btn btn-success mt-2' value='Добавить'>

         </form>
   
      </div><!--/. container-fluid -->
    </section>
    <!-- /.description -->
  </div>
  <style>
.select2-container--default .select2-selection--multiple .select2-selection__choice {
    background-color: #28a745 !important;
    border-color: #3d9970 !important;
}

  </style>
  <script>
    

  </script>
@endsection