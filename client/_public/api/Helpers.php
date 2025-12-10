<?php
namespace Api;

class Helpers
{
    static function response($success = true, $message = null, $public_message = null, $data = null, $status_code = 200)
    {
        http_response_code($status_code);
        header('Content-Type: application/json');
        echo json_encode([
            'success' => $success,
            'message' => $message,
            'public_message' => $public_message,
            'data' => $data
        ]);
        die();
    }
}
