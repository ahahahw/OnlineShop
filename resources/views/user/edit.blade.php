@extends('admin.layouts.main')

@section('content')
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Редактирование пользователя</h1>
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
        
         <form action='{{route('user.update',$user->id)}}' method='post'>
          @method('patch')
           @csrf
           <div class='form-group'>
                  <input type='text' name='name' class='form-control' value='{{$user->name ?? old('name')}}' placeholder='Имя'>
             </div>
            <div class='form-group'>
            <div class='form-group'>
            <input type='text' name='surname' class='form-control' value='{{$user->surname ?? old('surnname')}}' placeholder='Фамилия'>
            </div>
            <div class='form-group'>
            <input type='text' name='patronymic' class='form-control' value='{{$user->patronymic ?? old('patronymic')}}' placeholder='Отчество'>
            </div>
            <div class='form-group'>
            <input type='text' name='age' class='form-control' value='{{$user->age ?? old('age')}}' placeholder='Возраст'>
            </div>
            <div class='form-group'>
            <input type='text' name='adress' class='form-control' value='{{$user->adress ?? old('adress')}}' placeholder='Адресс'>
            </div>
            <div class='form-group'>
            <select class="custom-select form-control-border" name='gender' id="exampleSelectBorder">
                        <option {{$user->gender ==1 ? 'selected' : ''}} value='1'>Мужской</option>
                        <option {{$user->gender ==2 ? 'selected' : ''}} value='2'>Женский</option>
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