<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return Post::all();  
    }

    public function show($id)
    {
        $post = Post::find($id);  

        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        return $post;
    }
}
