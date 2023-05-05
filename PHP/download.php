<?php

$target_dir = "uploads/";
$target_file = $target_dir . "again.txt";

if (file_exists($target_file)) {
    header('Content-disposition: attachment; filename=someName.txt');
    readfile($target_file);
}

