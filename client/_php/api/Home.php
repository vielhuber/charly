<?php
namespace Api;

class Home
{
    function index()
    {
        $response = ['message' => 'Welcome to the API'];
        Helpers::response(data: $response);
    }
}
