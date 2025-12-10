<?php
namespace Api;

class MCP
{
    function init()
    {
        // read config.json to get MCP servers
        if (!file_exists('../../../server/config.json')) {
            Helpers::response(success: false, public_message: 'Konfigurations-Datei nicht gefunden!', status_code: 500);
        }

        $config = json_decode(file_get_contents('../../../server/config.json'));

        $response = $config;
        Helpers::response(data: $response);
    }
}
