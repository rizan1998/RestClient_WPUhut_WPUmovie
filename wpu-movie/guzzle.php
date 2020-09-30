<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client();

$response = $client->request('GET', 'http://omdbapi.com', [
    'query' => [ //query adalah params kalo di postman kalo lewat body beda lagi
        //menggunakan array
        'apikey' => 'dca61bcc',
        's' => 'avengers'
    ]
]);

//var_dump($response)
//echo $response->getBody()->getContents(); //mengeluarkan response biar datanya keluar dan masuk ke contents
$result = json_decode($response->getBody()->getContents(), true); //dari json ubah menjadi object tapi karena ditambah true dia jadi array
var_dump($result);
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>wpu-movie</title>
</head>

<body>
    <?php foreach ($result['Search'] as $movie) : ?>
        <ul>
            <li>
                Title : <?= $movie['Title']; ?>
            </li>
            <li>
                Year : <?= $movie['Year']; ?>
            </li>
            <li>
                <img src="<?= $movie['Poster']; ?>" width="80" alt="">
            </li>
        </ul>
    <?php endforeach; ?>

</body>

</html>