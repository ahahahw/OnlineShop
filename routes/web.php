<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::group(['prefix'=>'admin'],function(){
Route::get('/','App\Http\Controllers\Main\IndexController');

Route::group(['namespace'=>'App\Http\Controllers\Category','prefix'=>'categories'],function(){
    Route::get('/','IndexController')->name('category.index');
    Route::get('/create','CreateController')->name('category.create');
    Route::post('/store','StoreController')->name('category.store');
    Route::get('/{category}','ShowController')->name('category.show');
    Route::get('/{category}/edit','EditController')->name('category.edit');
    Route::patch('/{category}','UpdateController')->name('category.update');
    Route::delete('/{category}','DeleteController')->name('category.delete');
});

Route::group(['namespace'=>'App\Http\Controllers\group','prefix'=>'groups'],function(){
    Route::get('/','IndexController')->name('group.index');
    Route::get('/create','CreateController')->name('group.create');
    Route::post('/store','StoreController')->name('group.store');
    Route::get('/{group}','ShowController')->name('group.show');
    Route::get('/{group}/edit','EditController')->name('group.edit');
    Route::patch('/{group}','UpdateController')->name('group.update');
    Route::delete('/{group}','DeleteController')->name('group.delete');
});

Route::group(['namespace'=>'App\Http\Controllers\Color','prefix'=>'colors'],function(){
    Route::get('/','IndexController')->name('color.index');
    Route::get('/create','CreateController')->name('color.create');
    Route::post('/store','StoreController')->name('color.store');
    Route::get('/{color}','ShowController')->name('color.show');
    Route::get('/{color}/edit','EditController')->name('color.edit');
    Route::patch('/{color}','UpdateController')->name('color.update');
    Route::delete('/{color}','DeleteController')->name('color.delete');
});

Route::group(['namespace'=>'App\Http\Controllers\Tag','prefix'=>'tags'],function(){
    Route::get('/','IndexController')->name('tag.index');
    Route::get('/create','CreateController')->name('tag.create');
    Route::post('/store','StoreController')->name('tag.store');
    Route::get('/{tag}','ShowController')->name('tag.show');
    Route::get('/{tag}/edit','EditController')->name('tag.edit');
    Route::patch('/{tag}','UpdateController')->name('tag.update');
    Route::delete('/{tag}','DeleteController')->name('tag.delete');
});

Route::group(['namespace'=>'App\Http\Controllers\User','prefix'=>'users'],function(){
    Route::get('/','IndexController')->name('user.index');
    Route::get('/create','CreateController')->name('user.create');
    Route::post('/store','StoreController')->name('user.store');
    Route::get('/{user}','ShowController')->name('user.show');
    Route::get('/{user}/edit','EditController')->name('user.edit');
    Route::patch('/{user}','UpdateController')->name('user.update');
    Route::delete('/{user}','DeleteController')->name('user.delete');
});

Route::group(['namespace'=>'App\Http\Controllers\Product','prefix'=>'products'],function(){
      Route::get('/','IndexController')->name('product.index');
      Route::get('/create','CreateController')->name('product.create');
      Route::post('/store','StoreController')->name('product.store');
      Route::get('/{product}','ShowController')->name('product.show');
      Route::get('/{product}/edit','EditController')->name('product.edit');
      Route::patch('/{product}','UpdateController')->name('product.update');
      Route::delete('/{product}','DeleteController')->name('product.delete');
});
});
Route::get('/{page}','App\Http\Controllers\Client\IndexController')->where('page','.*');


