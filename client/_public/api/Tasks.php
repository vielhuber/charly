<?php
namespace Api;

use vielhuber\stringhelper\__;

class Tasks
{
    function index()
    {
        try {
            $tasks = Store::$db->fetch_all('SELECT * FROM tasks ORDER BY `order` ASC');

            foreach ($tasks as $tasks__key => $tasks__value) {
                $tasks[$tasks__key]['tasks_skills'] = Store::$db->fetch_all(
                    'SELECT * FROM tasks_skills WHERE task_id = ? ORDER BY `order` ASC',
                    $tasks__value['id']
                );
                $tasks[$tasks__key]['tasks_knowledge'] = Store::$db->fetch_all(
                    'SELECT * FROM tasks_knowledge WHERE task_id = ? ORDER BY `order` ASC',
                    $tasks__value['id']
                );
                $tasks[$tasks__key]['tasks_providers'] = Store::$db->fetch_all(
                    'SELECT * FROM tasks_providers WHERE task_id = ? ORDER BY `order` ASC',
                    $tasks__value['id']
                );
            }

            $data = $tasks;
            Helper::response(data: $data);
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function create($data)
    {
        try {
            $order = Store::$db->fetch_var('SELECT `order` FROM tasks ORDER BY `order` DESC LIMIT 1');
            if ($order !== null) {
                $order++;
            } else {
                $order = 1;
            }
            $id = Store::$db->insert('tasks', [
                'id' => __::uuid(version: 7),
                'name' => @$data['name'],
                'schedule' => @$data['schedule'],
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
                'tasks',
                ['name' => @$data['name'], 'schedule' => @$data['schedule'], 'order' => @$data['order']],
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
            Store::$db->delete('tasks', ['id' => $id]);
            Helper::response();
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Fehler beim Löschen!');
        }
    }
}
