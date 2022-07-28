@extends('admin.layouts.main')

@section('content')
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Добавить тэг</h1>
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
        <div class="row p-1">
         <form action='{{route('tag.store')}}' method='post'>
           @csrf
            <div class='form-group'>
            <input type='text' name='title' class='form-control' placeholder='Наименование'>
            <input type='submit' class='btn btn-success mt-2' value='Добавить'>
            </div>
         </form>
 
      </div><!--/. container-fluid -->
    </section>
    <!-- /.content -->
  </div>
@endsection