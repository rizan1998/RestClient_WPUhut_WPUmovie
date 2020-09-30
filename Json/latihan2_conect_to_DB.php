<?php

// $mahasiswa = [
//     [
//         "nama" => "Muhamad Rijan Alpalah",
//         "npm" => "5520116027",
//         "email" => "rizanalfalah@gmail.com"
//     ],
//     [
//         "nama" => "Ahmad Hamdi",
//         "npm" => "5520116027",
//         "email" => "rizanalfalah@gmail.com"
//     ],

// ];

$dbh = new PDO('mysql:host=localhost;dbname=latihanloginci;', 'root', '');
$db = $dbh->prepare('SELECT * FROM user');
$db->execute();
$user = $db->fetchAll(PDO::FETCH_ASSOC); //ambil semua datanya lalu pdo:fetch bentuk datanya dengan array
//assosiative
//var_dump($mahasiswa);

$data = json_encode($user); //jadi ini untuk mengubah array assosiative menjadi object ini jika satu data
// tapi jika banyak data mahasiswanya maka json akan langusng menambah sebuah array pada awalan codenya
echo  $data;
