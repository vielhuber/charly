<?php
namespace Api;

class Tasks
{
    function index()
    {
        try {
            $tasks = Store::$db->fetch_all('SELECT * FROM tasks');
            $data = $tasks;
            Helpers::response(data: $data);
        } catch (\Exception $e) {
            Helpers::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }
}
