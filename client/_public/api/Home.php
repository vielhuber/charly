<?php
namespace Api;

class Home
{
    function index()
    {
        try {
            $response = ['message' => 'Welcome to the API'];
            Helpers::response(data: $response);
        } catch (\Exception $e) {
            Helpers::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }
}
