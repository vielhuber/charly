<?php
namespace Api;

require_once __DIR__ . '/../../vendor/autoload.php';
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
        try {
            $user_id = Helper::getCurrentUserId();
        } catch (\Throwable $e) {
            http_response_code(401);
            echo json_encode([
                'success' => false,
                'message' => 'unauthorized'
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
                'name' => 'VARCHAR(100)',
                'service' => 'VARCHAR(100)',
                'api_key' => 'VARCHAR(255)'
            ]);
        }

        if (!Store::$db->has_table('tasks')) {
            Store::$db->create_table('tasks', [
                'id' => 'VARCHAR(36) PRIMARY KEY',
                'name' => 'VARCHAR(255)',
                'schedule' => 'VARCHAR(100)',
                'order' => 'INT'
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

        if (!Store::$db->has_table('chats_messages')) {
            Store::$db->create_table('chats_messages', [
                'id' => 'VARCHAR(36) PRIMARY KEY',
                'content' => 'TEXT',
                'timestamp' => 'BIGINT NULL',
                'user_id' => 'VARCHAR(36) NULL',
                'chat_id' => 'VARCHAR(36)',
                'FOREIGN KEY (user_id)' => 'REFERENCES users(id) ON DELETE RESTRICT',
                'FOREIGN KEY (chat_id)' => 'REFERENCES chats(id) ON DELETE CASCADE'
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
                'skill_id' => 'VARCHAR(255)',
                'order' => 'INT',
                'FOREIGN KEY (task_id)' => 'REFERENCES tasks(id) ON DELETE RESTRICT'
            ]);
        }

        if ($this->debug === true) {
            for ($i = 1; $i < mt_rand(15, 20); $i++) {
                $task_id = Store::$db->insert('tasks', [
                    'id' => __::uuid(version: 7),
                    'name' => 'Beispiel-Task #' . $i,
                    'schedule' => '5 4 * * *',
                    'order' => $i
                ]);
                $knowledge_id = Store::$db->insert('knowledge', [
                    'id' => __::uuid(version: 7),
                    'name' => 'Beispiel-Wissen #' . $i,
                    'content' => 'Dies ist ein Beispiel-Eintrag im Wissensbereich.',
                    'order' => $i
                ]);
                $provider_id = Store::$db->insert('providers', [
                    'id' => __::uuid(version: 7),
                    'name' => 'ChatGPT Anbindung #' . $i,
                    'service' => 'chatgpt',
                    'api_key' =>
                        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                ]);
                $chat_id = Store::$db->insert('chats', [
                    'id' => __::uuid(version: 7),
                    'name' => 'Beispiel-Chat #' . $i,
                    'provider_id' => $provider_id,
                    'task_id' => $task_id
                ]);
                $user_id = Store::$db->fetch_var('SELECT id FROM users LIMIT 1');
                for ($j = 1; $j <= mt_rand(30, 40); $j++) {
                    Store::$db->insert('chats_messages', [
                        'id' => __::uuid(version: 7),
                        'content' =>
                            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
                        'timestamp' => round(microtime(true) * 1000),
                        'user_id' => $user_id,
                        'chat_id' => $chat_id
                    ]);
                }
                Store::$db->insert('tasks_knowledge', [
                    'id' => __::uuid(version: 7),
                    'task_id' => $task_id,
                    'knowledge_id' => $knowledge_id,
                    'order' => 1
                ]);
                Store::$db->insert('tasks_skills', [
                    'id' => __::uuid(version: 7),
                    'task_id' => $task_id,
                    'skill_id' => 'whatsapp',
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
    }

    function abort()
    {
        Helper::response(
            success: false,
            message: 'Route not found',
            public_message: 'Route nicht gefunden',
            status_code: 404
        );
    }

    function getRoute()
    {
        $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $path = str_replace('/api', '', $path);

        $method = $_SERVER['REQUEST_METHOD'];

        preg_match('/^\/(.+?)(\/|$)/', $path, $matches);
        $className = 'Api\\' . __::pascal_case($matches[1] ?? null);
        $c = new $className();

        if ($method === 'GET' && preg_match('/^\/([^\/]+)$/', $path, $matches)) {
            if (!method_exists($c, 'index')) {
                $this->abort();
            }
            $c->index();
        } elseif ($method === 'POST' && preg_match('/^\/([^\/]+)\/create$/', $path, $matches)) {
            if (!method_exists($c, 'create')) {
                $this->abort();
            }
            $c->create(@$_POST);
        } elseif ($method === 'GET' && preg_match('/^\/([^\/]+)\/(.+)?$/', $path, $matches)) {
            if (!method_exists($c, 'read')) {
                $this->abort();
            }
            $c->read($matches[2]);
        } elseif ($method === 'POST' && preg_match('/^\/([^\/]+)\/update$/', $path, $matches)) {
            if (!method_exists($c, 'update')) {
                $this->abort();
            }
            $c->update(@$_POST['id'], @$_POST);
        } elseif ($method === 'POST' && preg_match('/^\/([^\/]+)\/delete$/', $path, $matches)) {
            if (!method_exists($c, 'delete')) {
                $this->abort();
            }
            $c->delete(@$_POST['id']);
        }
    }
}

$api = new Api();
$api->init();
