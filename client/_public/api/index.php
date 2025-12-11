<?php
namespace Api;

require_once __DIR__ . '/../../vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use vielhuber\dbhelper\dbhelper;
use vielhuber\stringhelper\__;

class Api
{
    private $debug = false;

    function init()
    {
        $this->cors();
        $this->authenticate();
        $this->initDatabase();
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

    function initDatabase()
    {
        Store::$db = new dbhelper();

        Store::$db->connect_with_create(
            'pdo',
            @$_SERVER['DB_CONNECTION'],
            @$_SERVER['DB_HOST'],
            @$_SERVER['DB_USERNAME'],
            @$_SERVER['DB_PASSWORD'],
            @$_SERVER['DB_DATABASE'],
            @$_SERVER['DB_PORT']
        );

        if ($this->debug === true) {
            foreach (Store::$db->get_tables() as $tables__value) {
                if ($tables__value === 'users') {
                    continue;
                }
                Store::$db->query('SET FOREIGN_KEY_CHECKS = 0');
                Store::$db->delete_table($tables__value);
                Store::$db->query('SET FOREIGN_KEY_CHECKS = 1');
            }
        }

        if (!Store::$db->has_table('knowledge')) {
            Store::$db->create_table('knowledge', [
                'id' => 'VARCHAR(36) PRIMARY KEY',
                'name' => 'VARCHAR(255)',
                'content' => 'TEXT',
                'order' => 'INT'
            ]);
        }

        if (!Store::$db->has_table('providers')) {
            Store::$db->create_table('providers', [
                'id' => 'VARCHAR(36) PRIMARY KEY',
                'type' => 'VARCHAR(100)',
                'api_key' => 'VARCHAR(255)'
            ]);
        }

        if (!Store::$db->has_table('tasks')) {
            Store::$db->create_table('tasks', [
                'id' => 'VARCHAR(36) PRIMARY KEY',
                'name' => 'VARCHAR(255)'
            ]);
        }

        if (!Store::$db->has_table('chats')) {
            Store::$db->create_table('chats', [
                'id' => 'VARCHAR(36) PRIMARY KEY',
                'name' => 'VARCHAR(255)',
                'provider_id' => 'VARCHAR(36) NULL',
                'task_id' => 'VARCHAR(36) NULL',
                'FOREIGN KEY (provider_id)' => 'REFERENCES providers(id) ON DELETE SET NULL',
                'FOREIGN KEY (task_id)' => 'REFERENCES tasks(id) ON DELETE SET NULL'
            ]);
        }

        if (!Store::$db->has_table('chats_entries')) {
            Store::$db->create_table('chats_entries', [
                'id' => 'VARCHAR(36) PRIMARY KEY',
                'content' => 'TEXT',
                'chat_id' => 'VARCHAR(36)',
                'FOREIGN KEY (chat_id)' => 'REFERENCES chats(id) ON DELETE RESTRICT'
            ]);
        }

        if (!Store::$db->has_table('tasks_knowledge')) {
            Store::$db->create_table('tasks_knowledge', [
                'id' => 'VARCHAR(36) PRIMARY KEY',
                'task_id' => 'VARCHAR(36)',
                'knowledge_id' => 'VARCHAR(36)',
                'order' => 'INT',
                'FOREIGN KEY (task_id)' => 'REFERENCES tasks(id) ON DELETE RESTRICT',
                'FOREIGN KEY (knowledge_id)' => 'REFERENCES knowledge(id) ON DELETE RESTRICT'
            ]);
        }

        if (!Store::$db->has_table('tasks_providers')) {
            Store::$db->create_table('tasks_providers', [
                'id' => 'VARCHAR(36) PRIMARY KEY',
                'task_id' => 'VARCHAR(36)',
                'provider_id' => 'VARCHAR(36)',
                'order' => 'INT',
                'FOREIGN KEY (task_id)' => 'REFERENCES tasks(id) ON DELETE RESTRICT',
                'FOREIGN KEY (provider_id)' => 'REFERENCES providers(id) ON DELETE RESTRICT'
            ]);
        }

        if (!Store::$db->has_table('tasks_skills')) {
            Store::$db->create_table('tasks_skills', [
                'id' => 'VARCHAR(36) PRIMARY KEY',
                'task_id' => 'VARCHAR(36)',
                'name' => 'VARCHAR(255)',
                'order' => 'INT',
                'FOREIGN KEY (task_id)' => 'REFERENCES tasks(id) ON DELETE RESTRICT'
            ]);
        }

        if ($this->debug === true) {
            $task_id = Store::$db->insert('tasks', [
                'id' => __::uuid(version: 7),
                'name' => 'Beispiel-Task #1'
            ]);
            $knowledge_id = Store::$db->insert('knowledge', [
                'id' => __::uuid(version: 7),
                'name' => 'Beispiel-Wissen #1',
                'content' => 'Dies ist ein Beispiel-Eintrag im Wissensbereich.',
                'order' => 1
            ]);
            $provider_id = Store::$db->insert('providers', [
                'id' => __::uuid(version: 7),
                'type' => 'chatgpt',
                'api_key' =>
                    'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            ]);
            $chat_id = Store::$db->insert('chats', [
                'id' => __::uuid(version: 7),
                'name' => 'Beispiel-Chat #1',
                'provider_id' => null,
                'task_id' => null
            ]);
            Store::$db->insert('chats_entries', [
                'id' => __::uuid(version: 7),
                'content' =>
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
                'chat_id' => $chat_id
            ]);
            Store::$db->insert('tasks_knowledge', [
                'id' => __::uuid(version: 7),
                'task_id' => $task_id,
                'knowledge_id' => $knowledge_id,
                'order' => 1
            ]);
            Store::$db->insert('tasks_skills', [
                'id' => __::uuid(version: 7),
                'task_id' => $task_id,
                'name' => 'whatsapp',
                'order' => 1
            ]);
            Store::$db->insert('tasks_providers', [
                'id' => __::uuid(version: 7),
                'task_id' => $task_id,
                'provider_id' => $provider_id,
                'order' => 1
            ]);
        }
    }

    function getRoute()
    {
        $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $path = str_replace('/api', '', $path);

        $method = $_SERVER['REQUEST_METHOD'];

        if ($method === 'GET' && preg_match('/^\/home$/', $path, $matches)) {
            $c = new Home();
            $c->index();
        } elseif ($method === 'GET' && preg_match('/^\/chats$/', $path, $matches)) {
            $c = new Chats();
            $c->index();
        } elseif ($method === 'POST' && preg_match('/^\/chats\/create$/', $path, $matches)) {
            $c = new Chats();
            $c->create(@$_POST['name']);
        } elseif ($method === 'GET' && preg_match('/^\/chats\/(.+)?$/', $path, $matches)) {
            $c = new Chats();
            $c->read($matches[1]);
        } elseif ($method === 'POST' && preg_match('/^\/chats\/delete$/', $path, $matches)) {
            $c = new Chats();
            $c->delete(@$_POST['id']);
        } elseif ($method === 'GET' && preg_match('/^\/skills$/', $path, $matches)) {
            $c = new Skills();
            $c->index();
        } elseif ($method === 'GET' && preg_match('/^\/knowledge$/', $path, $matches)) {
            $c = new Knowledge();
            $c->index();
        } elseif ($method === 'POST' && preg_match('/^\/knowledge\/create$/', $path, $matches)) {
            $c = new Knowledge();
            $c->create(@$_POST['name'], @$_POST['content']);
        } elseif ($method === 'POST' && preg_match('/^\/knowledge\/update$/', $path, $matches)) {
            $c = new Knowledge();
            $c->update(@$_POST['id'], @$_POST['name'], @$_POST['content'], @$_POST['order']);
        } elseif ($method === 'POST' && preg_match('/^\/knowledge\/delete$/', $path, $matches)) {
            $c = new Knowledge();
            $c->delete(@$_POST['id']);
        } elseif ($method === 'GET' && preg_match('/^\/providers$/', $path, $matches)) {
            $c = new Providers();
            $c->index();
        } elseif ($method === 'POST' && preg_match('/^\/providers\/create$/', $path, $matches)) {
            $c = new Providers();
            $c->create(@$_POST['type'], @$_POST['api_key']);
        } elseif ($method === 'POST' && preg_match('/^\/providers\/update$/', $path, $matches)) {
            $c = new Providers();
            $c->update(@$_POST['id'], @$_POST['type'], @$_POST['api_key']);
        } elseif ($method === 'POST' && preg_match('/^\/providers\/delete$/', $path, $matches)) {
            $c = new Providers();
            $c->delete(@$_POST['id']);
        } elseif ($method === 'GET' && preg_match('/^\/tasks$/', $path, $matches)) {
            $c = new Tasks();
            $c->index();
        }

        die();
    }
}

$api = new Api();
$api->init();
