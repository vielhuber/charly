<?php
namespace Api;

class Skills
{
    function index()
    {
        try {
            // read config.json to get MCP servers
            if (!file_exists('../../../server/config.json')) {
                Helper::response(
                    success: false,
                    public_message: 'Konfigurations-Datei nicht gefunden!',
                    status_code: 500
                );
            }
            $config = json_decode(file_get_contents('../../../server/config.json'));
            $data = $config;
            Helper::response(data: $data);
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }
}
