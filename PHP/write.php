<?php
function write()
{
    $target_dir = "uploads/";
    $target_file = $target_dir . $_GET['name'];

    $file = fopen( $target_file, 'a');
    fwrite($file, $_GET['data']);
    fclose($file);
}
