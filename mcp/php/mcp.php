<?php
require_once __DIR__ . '/../../vendor/autoload.php';

use Monolog\Logger;
use Monolog\Level;
use Monolog\Handler\StreamHandler;

use PhpMcp\Server\Server;
use PhpMcp\Server\Transports\StdioServerTransport;
use PhpMcp\Server\Transports\StreamableHttpServerTransport;

try {
    // parse command line arguments
    $options = getopt('', ['require:', 'basepath:', 'scandirs:']);

    if (!isset($options['require']) || !isset($options['basepath']) || !isset($options['scandirs'])) {
        throw new \InvalidArgumentException('Missing required arguments.');
    }

    // logging
    $logger = (new Logger('mcp'))->pushHandler(new StreamHandler(__DIR__ . '/mcp.log', Level::Debug));

    // init server
    $server = Server::make()->withServerInfo('MCP Server', '1.0.0')->withLogger($logger)->build();

    // code discovery
    require_once $options['require']; // load wordpress, this also autoloads the class MCP
    $server->discover(basePath: $options['basepath'], scanDirs: explode(',', $options['scandirs']));

    // basic stdin/out transport
    if (1 === 1) {
        $transport = new StdioServerTransport();
    }

    // http transport
    if (1 === 0) {
        $transport = new StreamableHttpServerTransport(host: '0.0.0.0', port: 8080);
    }

    $server->listen($transport);
} catch (\Throwable $e) {
    fwrite(STDERR, '[CRITICAL ERROR] ' . $e->getMessage() . "\n");
    exit(1);
}
