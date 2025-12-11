<?php
namespace Api;

use vielhuber\stringhelper\__;

class ChatsMessages
{
    function create($data)
    {
        try {
            $id = Store::$db->insert('chats_messages', [
                'id' => __::uuid(version: 7),
                'content' => @$data['content'],
                'timestamp' => round(microtime(true) * 1000),
                'user_id' => Helper::getCurrentUserId(),
                'chat_id' => @$data['chat_id']
            ]);
            Helper::response(data: ['id' => $id]);
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function delete($id)
    {
        try {
            Store::$db->delete('chats_messages', ['id' => $id]);
            Helper::response();
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Fehler beim Löschen!');
        }
    }
}
