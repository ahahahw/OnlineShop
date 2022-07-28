@extends('admin.layouts.main')

@section('content')
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Пользователи</h1>
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
      <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <a href='{{route('user.create')}}' class='btn btn-primary'>Добавить</a>                 
     
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Имя</th>
                      <th>Почта</th>
                      <th>Фамилия</th> 
                      <th>Отчество</th>
                      <th>Возраст</th>
                      <th>Адресс</th>
                      <th>Пол</th>

                    
                    </tr>
                  </thead>
                  <tbody>
                    @foreach($users as $user)
                    <tr>
                      <td>{{$user->id}}</td>
                      <td><a href='{{route('user.show',$user->id)}}'>{{$user->name}}</a></td>
                      <td>{{$user->email}}</td>
                      <td>{{$user->surname}}</td>
                      <td>{{$user->patronymic}}</td>
                      <td>{{$user->age}}</td>
                      <td>{{$user->adress}}</td>
                      <td>{{$user->genderTitle}}</td>
                    </tr>
                    @endforeach
                  
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