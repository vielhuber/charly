<?php
namespace Api;

require_once __DIR__ . '/../../vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Api
{
    function init()
    {
        $this->cors();
        $this->authenticate();
        $this->getRoute();
    }

    function cors()
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        if (@$_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            die();
        }
    }

    function authenticate()
    {
        $dotenv = \Dotenv\Dotenv::createImmutable(__DIR__ . '/../../'); // .env must be in current dir, otherwise use \Dotenv\Dotenv::createImmutable(dirname(__DIR__)) or \Dotenv\Dotenv::createImmutable('/foo/bar') etc.
        $dotenv->load();

        try {
            $user_id = JWT::decode(
                str_replace('Bearer ', '', @$_SERVER['HTTP_AUTHORIZATION']), // access token
                new Key(@$_SERVER['JWT_SECRET'], 'HS256') // secret key
            )->sub;
        } catch (\Throwable $e) {
            http_response_code(401);
            echo json_encode([
                'success' => false,
                'message' => 'unauthorized',
                'public_message' => '...'
            ]);
            die();
        }
    }

    function getRoute()
    {
        $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $path = str_replace('/api', '', $path);

        if (preg_match('/^\/home$/', $path, $matches)) {
            $c = new Home();
            $c->init();
        }
        if (preg_match('/^\/chats$/', $path, $matches)) {
            $c = new Chats();
            $c->init();
        } elseif (preg_match('/^\/chats\/(\d+)?$/', $path, $matches)) {
            $c = new ChatDetail();
            $c->init($matches[1]);
        }

        die();
    }
}

$api = new Api();
$api->init();
