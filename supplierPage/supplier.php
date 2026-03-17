<?php
// Allow requests from your Vercel frontend
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Connect to database
require '../db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $supplier_name   = $_POST['supplier_name'];
    $contact_name    = $_POST['contact_name'];
    $contact_number  = $_POST['contact_number'];
    $email           = $_POST['email'];
    $address         = $_POST['address'];

    $stmt = $conn->prepare(
        "INSERT INTO suppliers (supplier_name, contact_name, contact_number, email, address) 
         VALUES (?, ?, ?, ?, ?)"
    );
    $stmt->execute([$supplier_name, $contact_name, $contact_number, $email, $address]);

    echo json_encode(['success' => true, 'message' => 'Supplier added!']);
}
?>