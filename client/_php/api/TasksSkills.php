<?php
namespace Api;

use vielhuber\stringhelper\__;

class TasksSkills
{
    function index()
    {
        try {
            $data = Store::$db->fetch_all('SELECT * FROM tasks_skills ORDER BY `order` ASC');
            Helper::response(data: $data);
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function create($data)
    {
        try {
            $order = Store::$db->fetch_var('SELECT `order` FROM tasks_skills ORDER BY `order` DESC LIMIT 1');
            if ($order !== null) {
                $order++;
            } else {
                $order = 1;
            }
            $id = Store::$db->insert('tasks_skills', [
                'id' => __::uuid(version: 7),
                'task_id' => @$data['task_id'],
                'skill_id' => @$data['skill_id'],
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
                'tasks_skills',
                ['task_id' => @$data['task_id'], 'skill_id' => @$data['skill_id'], 'order' => @$data['order']],
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
            Store::$db->delete('tasks_skills', ['id' => $id]);
            Helper::response();
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Fehler beim Löschen!');
        }
    }
}
