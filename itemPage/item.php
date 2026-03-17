<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require '../db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $product  = $_POST['product'];
    $category = $_POST['category'];
    $price    = $_POST['price'];

    $stmt = $conn->prepare(
        "INSERT INTO items (product, category, price) 
         VALUES (?, ?, ?)"
    );
    $stmt->execute([$product, $category, $price]);

    echo json_encode(['success' => true, 'message' => 'Item added!']);
}
?>