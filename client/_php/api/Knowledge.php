<?php
namespace Api;

use vielhuber\stringhelper\__;

class Knowledge
{
    function index()
    {
        try {
            $knowledge = Store::$db->fetch_all('SELECT * FROM knowledge ORDER BY `order` ASC');
            $data = $knowledge;
            Helpers::response(data: $data);
        } catch (\Exception $e) {
            Helpers::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function create($name, $content)
    {
        try {
            $order = Store::$db->fetch_var('SELECT `order` FROM knowledge ORDER BY `order` DESC LIMIT 1');
            if ($order !== null) {
                $order++;
            } else {
                $order = 1;
            }
            $knowledge_id = Store::$db->insert('knowledge', [
                'id' => __::uuid(version: 7),
                'name' => $name,
                'content' => $content,
                'order' => $order
            ]);
            Helpers::response(data: ['id' => $knowledge_id]);
        } catch (\Exception $e) {
            Helpers::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function update($id, $name, $content, $order)
    {
        try {
            Store::$db->update('knowledge', ['name' => $name, 'content' => $content, 'order' => $order], ['id' => $id]);
            Helpers::response();
        } catch (\Exception $e) {
            Helpers::response(success: false, message: $e->getMessage(), public_message: 'Fehler beim Editieren!');
        }
    }

    function delete($id)
    {
        try {
            Store::$db->delete('knowledge', ['id' => $id]);
            Helpers::response();
        } catch (\Exception $e) {
            Helpers::response(success: false, message: $e->getMessage(), public_message: 'Fehler beim Löschen!');
        }
    }
}
