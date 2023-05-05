<?php
require_once "PHP/upload.php";

if (isset($_GET["up"])) {
    upload();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Easter Basket</title>
    <link rel="stylesheet" href="style.css">
    <script src="scripts/events.js"></script>
    <script src="scripts/files.js"></script>
</head>
<header>
    <h1 class="easterBasketLogo"> Easter Basket </h1>
    <nav>
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="files.php">File Management</a></li>
            <li><a href="help.html">Help</a></li>
        </ul>
    </nav>
</header>
<div style="position: relative; top: 70px;" class="content-file-management">
    <div class="droparea" id="droparea">
        <p>
            Drop your files over here!
        </p>
    </div>
    <?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    ?>
    <form action="files.php?up=1" method="post" enctype="multipart/form-data">
        <label style="color: white;"> Select file to upload: </label>

        <!--name and id are used as identifiers of the file on the php side-->
        <input type="file" name="fileToUpload" id="fileToUpload">
        <input type="submit" value="Upload" name="submit">
    </form>
    <?php
    $myFiles = scandir("uploads/");
    $myFiles = array_diff($myFiles, array('.', '..'));
    echo "<ul>";
    foreach ($myFiles as $f) {
        $file = "uploads/" . $f;
        if (file_exists($file) && is_readable($file)) {
            $contents = file_get_contents($file);
            if ($contents !== false) {
                // do something with $contents
                echo "<li style='color: white;'><p>" . $f . "</p><button onclick='getLoad(\"".$contents."\")'> Load </button><button onclick='downloadTxtFile(\"".$contents."\", \"".$f."\")'>Download</button></li>";
            } else {
                // handle file read error
                echo "Error reading file";
            }
        } else {
            // handle file not found or unreadable error
            echo "File not found or unreadable";
        }
    }
    echo "</ul>";

    ?>
</div>
</html>