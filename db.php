<?php
$db_url = getenv('DATABASE_URL');
$db = parse_url($db_url);

$conn = new PDO(
    "pgsql:host={$db['host']};port={$db['port']};dbname=" . ltrim($db['path'], '/') . ";sslmode=require",
    $db['user'],
    $db['pass']
);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>