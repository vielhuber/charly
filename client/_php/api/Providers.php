<?php
namespace Api;

use vielhuber\stringhelper\__;

class Providers
{
    function index()
    {
        try {
            $providers = Store::$db->fetch_all('SELECT * FROM providers ORDER BY type ASC, ID ASC');
            $data = $providers;
            Helpers::response(data: $data);
        } catch (\Exception $e) {
            Helpers::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function create($type, $api_key)
    {
        try {
            $provider_id = Store::$db->insert('providers', [
                'id' => __::uuid(version: 7),
                'type' => $type,
                'api_key' => $api_key
            ]);
            Helpers::response(data: ['id' => $provider_id]);
        } catch (\Exception $e) {
            Helpers::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function update($id, $type, $api_key)
    {
        try {
            Store::$db->update('providers', ['type' => $type, 'api_key' => $api_key], ['id' => $id]);
            Helpers::response();
        } catch (\Exception $e) {
            Helpers::response(success: false, message: $e->getMessage(), public_message: 'Fehler beim Editieren!');
        }
    }

    function delete($id)
    {
        try {
            Store::$db->delete('providers', ['id' => $id]);
            Helpers::response();
        } catch (\Exception $e) {
            Helpers::response(success: false, message: $e->getMessage(), public_message: 'Fehler beim Löschen!');
        }
    }
}
