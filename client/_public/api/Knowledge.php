<?php
namespace Api;

class Knowledge
{
    function index()
    {
        $knowledge = Store::$db->fetch_all('SELECT * FROM knowledge');

        $data = $knowledge;
        Helpers::response(data: $data);
    }
}
