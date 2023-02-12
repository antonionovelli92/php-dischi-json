<?php

$source_path = __DIR__ . '/../../data.json';

$json_data = file_get_contents($source_path);

header('Content-Type: application/json');
echo $json_data;
