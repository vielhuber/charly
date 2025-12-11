<?php
namespace Api;

use vielhuber\stringhelper\__;

class Chats
{
    function index()
    {
        try {
            $chats = Store::$db->fetch_all('SELECT * FROM chats ORDER BY id DESC');
            $data = $chats;
            Helpers::response(data: $data);
        } catch (\Exception $e) {
            Helpers::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function create($name)
    {
        try {
            $chat_id = Store::$db->insert('chats', ['id' => __::uuid(version: 7), 'name' => $name]);
            Helpers::response(data: ['id' => $chat_id]);
        } catch (\Exception $e) {
            Helpers::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function read($id)
    {
        try {
            $chat = Store::$db->fetch_row('SELECT * FROM chats WHERE id = ?', $id);
            $data = $chat;
            Helpers::response(data: $data);
        } catch (\Exception $e) {
            Helpers::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function delete($id)
    {
        try {
            Store::$db->delete('chats', ['id' => $id]);
            Helpers::response();
        } catch (\Exception $e) {
            Helpers::response(success: false, message: $e->getMessage(), public_message: 'Fehler beim Löschen!');
        }
    }
}
