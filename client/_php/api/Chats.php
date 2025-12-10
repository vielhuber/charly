<?php
namespace Api;

use vielhuber\stringhelper\__;

class Chats
{
    function index()
    {
        $chats = Store::$db->fetch_all('SELECT * FROM chats ORDER BY id DESC');

        $data = $chats;
        Helpers::response(data: $data);
    }

    function create($name)
    {
        $chat_id = Store::$db->insert('chats', ['id' => __::uuid(version: 7), 'name' => $name]);
        Helpers::response(data: ['chat_id' => $chat_id]);
    }
}
