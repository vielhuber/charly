<?php
namespace Api;

use vielhuber\stringhelper\__;

class Providers
{
    function index()
    {
        try {
            $data = Store::$db->fetch_all('SELECT * FROM providers ORDER BY name ASC, ID ASC');
            Helper::response(data: $data);
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function create($data)
    {
        try {
            $id = Store::$db->insert('providers', [
                'id' => __::uuid(version: 7),
                'name' => @$data['name'],
                'service' => @$data['service'],
                'api_key' => @$data['api_key']
            ]);
            Helper::response(data: ['id' => $id]);
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Unbekannter Fehler!');
        }
    }

    function update($id, $data)
    {
        try {
            Store::$db->update(
                'providers',
                ['name' => @$data['name'], 'service' => @$data['service'], 'api_key' => @$data['api_key']],
                ['id' => $id]
            );
            Helper::response();
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Fehler beim Editieren!');
        }
    }

    function delete($id)
    {
        try {
            Store::$db->delete('providers', ['id' => $id]);
            Helper::response();
        } catch (\Exception $e) {
            Helper::response(success: false, message: $e->getMessage(), public_message: 'Fehler beim Löschen!');
        }
    }
}
