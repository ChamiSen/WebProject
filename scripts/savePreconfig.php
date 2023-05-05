<?php
$name = $_POST["name"];
$file = fopen("../server/" . $name . ".basket", "w");
$data = $_POST["preconfig"];
fwrite($file, $data);
