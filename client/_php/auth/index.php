<?php
require_once __DIR__ . '/../../vendor/autoload.php';
use vielhuber\simpleauth\simpleauth;
$auth = new simpleauth(config: __DIR__ . '/../../.env', table: 'users', login: 'email', ttl: 30, uuid: true);
$auth->init();
