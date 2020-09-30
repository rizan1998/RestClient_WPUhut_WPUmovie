<?php

$mahasiswa = [
    [
        "nama" => "Muhamad Rijan Alpalah",
        "npm" => "5520116027",
        "email" => "rizanalfalah@gmail.com"
    ],
    [
        "nama" => "Ahmad Hamdi",
        "npm" => "5520116027",
        "email" => "rizanalfalah@gmail.com"
    ],

];

//var_dump($mahasiswa);

$data = json_encode($mahasiswa); //jadi ini untuk mengubah array assosiative menjadi object ini jika satu data
// tapi jika banyak data mahasiswanya maka json akan langusng menambah sebuah array pada awalan codenya
echo  $data;
