<?php
namespace Api;

use vielhuber\stringhelper\__;

class Chats
{
    function index()
    {
        try {
            $data = Store::$db->fetch_all('
                SELECT c.*, MAX(cm.timestamp) as last_message_timestamp
                FROM chats c
                LEFT JOIN chats_messages cm ON c.id = cm.chat_id
                GROUP BY c.id
                ORDER BY last_message_timestamp DESC, c.id DESC
            ');
            Helper::response(data: $data);
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function create($data)
    {
        try {
            $id = Store::$db->insert('chats', [
                'id' => __::uuid(version: 7),
                'name' => $data['name'],
                'provider_id' => $data['provider_id']
            ]);
            if (isset($data['message']) && !empty($data['message'])) {
                Store::$db->insert('chats_messages', [
                    'id' => __::uuid(version: 7),
                    'content' => $data['message'],
                    'timestamp' => round(microtime(true) * 1000),
                    'user_id' => Helper::getCurrentUserId(),
                    'chat_id' => $id
                ]);
            }
            Helper::response(data: ['id' => $id]);
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function read($id)
    {
        try {
            $chat = Store::$db->fetch_row('SELECT * FROM chats WHERE id = ?', $id);
            $chat['messages'] = Store::$db->fetch_all(
                'SELECT * FROM chats_messages WHERE chat_id = ? ORDER BY timestamp ASC',
                $id
            );
            $data = $chat;
            Helper::response(data: $data);
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function update($id, $data)
    {
        try {
            Store::$db->update(
                'chats',
                ['name' => @$data['name'], 'provider_id' => @$data['provider_id']],
                ['id' => $id]
            );
            Helper::response();
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Fehler beim Editieren!');
        }
    }

    function delete($id)
    {
        try {
            Store::$db->delete('chats', ['id' => $id]);
            Helper::response();
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Fehler beim Löschen!');
        }
    }
}
