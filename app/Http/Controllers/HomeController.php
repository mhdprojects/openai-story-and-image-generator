<?php

namespace App\Http\Controllers;

use App\Helper\Utils;
use App\Models\GenerateLog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use OpenAI\Laravel\Facades\OpenAI;

class HomeController extends Controller{

    public function index(): \Inertia\Response{
        $data['genres'] = [
            Utils::toSelect('Action'),
            Utils::toSelect('Adventure'),
            Utils::toSelect('Comedy'),
            Utils::toSelect('Crime'),
            Utils::toSelect('Fiction'),
            Utils::toSelect('Horror'),
            Utils::toSelect('Romance'),
            Utils::toSelect('Thriller'),
        ];

        return Inertia::render('Dashboard', $data);
    }

    public function generate(Request $request){
        $body = $request->validate([
            'genre' => 'required|array|min:1|max:2',
            'character' => 'required|string|max:50',
            'age' => 'required|string|max:30',
            'time' => 'required|string|max:30',
            'location' => 'required|string|max:50',
            'plot' => 'required|string|max:50',
        ]);

        $genre = '';
        foreach ($body['genre'] as $item) {
            $genre .= $item['value'].' ';
        }

        $jsonFormat = '{"summary":"summary content","title":"title story","chapters":[{"title":"Chapter 1: title","content":"story about chapter 1"}]}';
        $prompt = "Make me a story about an {$genre} in the {$body['time']} about a {$body['age']}-year-old {$body['character']} in a {$body['location']} {$body['plot']}. Make 4 chapters, and make a summary in 255 characters to be used as an illustration for the story cover. Provide in json format valid and following this format: ".$jsonFormat;

        $result = OpenAI::chat()->create([
            'model' => 'gpt-4o',
            'response_format' => ['type' => 'json_object'],
            'messages' => [
                ['role' => 'system', 'content' => 'You are a helpful writing assistant.'],
                ['role' => 'user', 'content' => $prompt],
            ],
        ]);

        $textResult = $result->choices[0]->message->content;

        $json = json_decode($textResult, true);
        $array = json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        $formatedArray = json_decode($array, true);

        $log = new GenerateLog();
        $log->form              = $body;
        $log->prompt            = $prompt;
        $log->response          = $result->toArray();
        $log->result            = $formatedArray;
        $log->text_req_token    = $result->usage->promptTokens;
        $log->text_res_token    = $result->usage->completionTokens;
        $log->save();

        $imageGenerator = OpenAI::images()->create([
            'model' => 'dall-e-3',
            'prompt' => $formatedArray['summary'],
            'n' => 1,
            'size' => '1024x1024',
            'response_format' => 'url',
        ]);

        $log->character = $formatedArray['summary'];
        $log->images    = $imageGenerator->data[0]->toArray();
        $log->save();

        return redirect()->route('detail', $log->id);
    }

    public function resultPrompt($id){
        $log = GenerateLog::query()->findOrFail($id);
        $data['data']   = $log;

        return Inertia::render('ResultGenerate', $data);
    }
}
