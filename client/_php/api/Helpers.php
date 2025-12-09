<?php
namespace Api;

class Helpers
{
    static function response($data, $code = 200)
    {
        http_response_code($code);
        header('Content-Type: application/json');
        echo json_encode([
            'success' => true,
            'data' => $data
        ]);
        die();
    }
}
