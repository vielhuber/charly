<?php
namespace Api;

class Home
{
    function init()
    {
        $response = ['message' => 'Welcome to the API'];
        Helpers::response($response);
    }
}
