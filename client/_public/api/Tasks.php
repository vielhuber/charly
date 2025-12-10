<?php
namespace Api;

class Tasks
{
    function index()
    {
        $tasks = Store::$db->fetch_all('SELECT * FROM tasks');

        $data = $tasks;
        Helpers::response(data: $data);
    }
}
