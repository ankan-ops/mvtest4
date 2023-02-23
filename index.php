<?php

$date  = $_POST['date'];
$time  = $_POST['time'];
$subject = $_POST['subject'];
$paket = $_POST['paket'];
$school = $_POST['school'];
$klass = $_POST['klass'];
$county = $_POST['county'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$quantity = $_POST['quantity'];
$email  = $_POST['email'];
$phone = $_POST['phone'];
$other = $_POST['other'];
$database = new MySQL('database.');
$query = "CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    time TEXT,
    subject TEXT,
    paket TEXT,
    school TEXT,
    klass TEXT,
    county TEXT,
    fname TEXT,
    lname TEXT,
    quantity INTEGER,
    email TEXT,
    phone_number TEXT,
    other TEXT
)";

$database->exec($query);
$result = $database->exec($query);

$stmt = $database->prepare($query);

// Bind the parameters
$stmt->bindParam(':date', $date);
$stmt->bindParam(':time', $time);
$stmt->bindParam(':subject', $subject);

// Execute the query
$result = $stmt->execute();

if ($result === FALSE) {
    echo "Error executing query: " . $database->lastErrorMsg();
} else {
    echo "Query executed successfully.";
}

var_dump($_POST);


?>

