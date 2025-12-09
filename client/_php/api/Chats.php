<?php
namespace Api;

class Chats
{
    function init()
    {
        $chats = [];
        for ($i = 0; $i < 100; $i++) {
            $chats[] = [
                'id' => $i,
                'name' => 'Chat ' . ($i + 1),
                'last_message' => 'This is the last message of chat ' . ($i + 1),
                'timestamp' => date('Y-m-d H:i:s', strtotime("-$i days"))
            ];
        }
        Helpers::response($chats);
    }
}
