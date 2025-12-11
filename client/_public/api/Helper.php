<?php
namespace Api;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Helper
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

    static function getCurrentUserId()
    {
        $dotenv = \Dotenv\Dotenv::createImmutable(__DIR__ . '/../../'); // .env must be in current dir, otherwise use \Dotenv\Dotenv::createImmutable(dirname(__DIR__)) or \Dotenv\Dotenv::createImmutable('/foo/bar') etc.
        $dotenv->load();
        $user_id = JWT::decode(
            str_replace('Bearer ', '', @$_SERVER['HTTP_AUTHORIZATION']), // access token
            new Key(@$_SERVER['JWT_SECRET'], 'HS256') // secret key
        )->sub;
        return $user_id;
    }
}
