<?php
namespace Api;

use vielhuber\stringhelper\__;

class TasksProviders
{
    function index()
    {
        try {
            $data = Store::$db->fetch_all('SELECT * FROM tasks_providers ORDER BY `order` ASC');
            Helper::response(data: $data);
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function create($data)
    {
        try {
            $order = Store::$db->fetch_var('SELECT `order` FROM tasks_providers ORDER BY `order` DESC LIMIT 1');
            if ($order !== null) {
                $order++;
            } else {
                $order = 1;
            }
            $id = Store::$db->insert('tasks_providers', [
                'id' => __::uuid(version: 7),
                'task_id' => @$data['task_id'],
                'provider_id' => @$data['provider_id'],
                'order' => $order
            ]);
            Helper::response(data: ['id' => $id]);
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function update($id, $data)
    {
        try {
            Store::$db->update(
                'tasks_providers',
                ['task_id' => @$data['task_id'], 'provider_id' => @$data['provider_id'], 'order' => @$data['order']],
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
            Store::$db->delete('tasks_providers', ['id' => $id]);
            Helper::response();
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Fehler beim Löschen!');
        }
    }
}
