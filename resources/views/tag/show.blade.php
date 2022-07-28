@extends('admin.layouts.main')

@section('content')
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Тэг</h1>
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

    <section class="content">
      <div class="container-fluid">
      <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header ">
              <div class='d-flex p-3'>
                <a href='{{route('tag.edit',$tag->id)}}' class='btn btn-primary'>Редактировать</a>      
                <form action='{{route('tag.delete',$tag->id)}}' method='post'>
                  @csrf
                  @method('delete')
                 <input type='submit' class='btn btn-danger ml-1' value='Удалить'>
                </form>     
                <div>    
               </div>
     
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <tbody>
                   
                    <tr>
                      <td>ID</td>
                      <td>{{$tag->id}}</td>
                    </tr>
                    <tr>
                      <td>Наименование</td>
                      <td>{{$tag->title}}</td>
                    </tr>
                
                  
                  
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
      
    </section>
    <!-- /.content -->
  </div>
@endsection