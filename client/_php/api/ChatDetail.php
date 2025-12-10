<?php
namespace Api;

class ChatDetail
{
    function index($id)
    {
        $chat = Store::$db->fetch_row('SELECT * FROM chats WHERE id = ?', $id);

        $data = $chat;
        Helpers::response(data: $data);
    }
}
