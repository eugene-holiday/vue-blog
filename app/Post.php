<?php

namespace App;

use App\Filters\PostFilter;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Post extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'content',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
