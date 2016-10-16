<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function __construct()
    {

    }

    /**
     * Get all posts.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $posts = Post::limit($request->get('limit'))->get();
        return response()->json(['data' => $posts]);
    }

    /**
     * Return resource from storage.
     *
     * @param  Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return response()->json(['data' => $post]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Post  $post
     * @return \Illuminate\Http\Response
     */
    public function store(CreatePostRequest $request)
    {
        $post = new Post($request->all());
        auth()->user()->posts()->save($post);
        return response()->json(['data' => $post]);
    }

    /**
     * Update the specified resource from storage.
     *
     * @param  Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(CreatePostRequest $request, Post $post)
    {
        $post->update($request);
        $post->save();
        return response()->json([
            'success' => true,
            'data' => $post
        ]);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json(['message' => 'success'], 200);
    }
}