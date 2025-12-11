<?php
namespace Api;

class Home
{
    function index()
    {
        try {
            $data = ['message' => 'Welcome to the API'];
            Helper::response(data: $data);
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }
}
