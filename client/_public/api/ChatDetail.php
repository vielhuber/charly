<?php
namespace Api;

class ChatDetail
{
    function init($id)
    {
        $chat = ['id' => $id];
        Helpers::response($chat);
    }
}
