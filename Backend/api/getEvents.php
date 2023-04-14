<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

include_once '../config/Database.php';
include_once '../model/ClientReservation.php';

$database = new Database;
$conn = $database->connect();

$reservation = new ClientReservation($conn);

$result = $reservation->get_all_reservations();

$dates = $result->fetchAll(PDO::FETCH_ASSOC);

if(count($dates) > 0){

    $events = array_map(function($date) {
        return [
            'title' => $date['time'],
            'start' => $date['date'],
            'end' => $date['date'],
        ];
    }, $dates);

    echo json_encode([
        'dates' => $events
    ]);
} else {
    echo json_encode(
        array(
            'message' => 'No reservation dates Found'   
        )
    );
}
