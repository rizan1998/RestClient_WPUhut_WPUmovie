<?php
$data = file_get_contents('coba.json'); //bisa diambil dari tempat lain https://
$mahasiswa = json_decode($data, true);
//var_dump[$mahasiswa];

echo $mahasiswa[0]['pembimbing']['Pembimbing1'];
