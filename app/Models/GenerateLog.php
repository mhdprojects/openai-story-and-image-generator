<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasVersion4Uuids;
use Illuminate\Database\Eloquent\Model;

class GenerateLog extends Model{
    use HasVersion4Uuids;

    protected $casts = [
        'form' => 'array',
        'response' => 'array',
        'result' => 'array',
        'images' => 'array',
    ];
}
