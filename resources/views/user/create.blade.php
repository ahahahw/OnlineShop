@extends('admin.layouts.main')

@section('content')
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Добавить </h1>
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
         <form action='{{route('user.store')}}' method='post'>
           @csrf
            <div class='form-group'>
                  <input type='text' name='name' class='form-control' value='{{old('name')}}' placeholder='Имя'>
             </div>
             <div class='form-group'>
                <input type='email' name='email' class='form-control' value='{{old('email')}}' placeholder='Почта'>
            </div>
            <div class='form-group'>
            <input type='text' name='password' class='form-control'  placeholder='Пароль'>
            </div>
            <div class='form-group'>
            <input type='text' name='password_confirmation' class='form-control'  placeholder='Подтвердите Пароль'>
            </div>
            <div class='form-group'>
            <input type='text' name='surname' class='form-control' value='{{old('surname')}}' placeholder='Фамилия'>
            </div>
            <div class='form-group'>
            <input type='text' name='patronymic' class='form-control' value='{{old('patronymic')}}' placeholder='Отчество'>
            </div>
            <div class='form-group'>
            <input type='text' name='age' class='form-control' value='{{old('age')}}' placeholder='Возраст'>
            </div>
            <div class='form-group'>
            <input type='text' name='adress' class='form-control' value='{{old('adress')}}' placeholder='Адресс'>
            </div>
            <div class='form-group'>
              
            <select class="custom-select form-control-border" name='gender' id="exampleSelectBorder">
                        <option {{old('gender')==1 ? 'selected' : ''}} value='1'>Мужской</option>
                        <option {{old('gender')==2 ? 'selected' : ''}} value='2'>Женский</option>
                  </select>
            </div>
           
           
   
            <input type='submit' class='btn btn-success mt-2' value='Добавить'>

         </form>
   
      </div><!--/. container-fluid -->
    </section>
    <!-- /.content -->
  </div>
@endsection