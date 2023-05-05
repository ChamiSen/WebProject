<?php
require_once 'PHP/upload.php'; //this is how to import/include another php file
require_once 'PHP/write.php';
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Easter Basket</title>
        <link rel="stylesheet" href="style.css">
        <script src="scripts/files.js"></script>
        <script src="scripts/events.js"></script>
        <script src="scripts/index.js"></script>
    </head>
    <header>
        <h1 class="easterBasketLogo">Easter Basket </h1>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="files.php">File Management</a></li>
                <li><a href="help.html">Help</a></li>
            </ul>
        </nav>
    </header>
    <body class="content-index">
        <div style="padding-top: 70px;">
            <h3 style="color: white"> Egg Options </h3>
            <select name="eggOption" id="eggOption">
                <option value="whiteEgg"> White Egg </option>
                <option value="blueEgg"> Blue Egg </option>
                <option value="stripedEgg"> Striped Egg </option>
                <option value="chocoBunny"> Chocolate Bunny </option>
                <option value="orangeEgg"> Orange Egg </option>
                <option value="pinkEgg"> Pink Egg </option>
                <option value="greenEgg"> Green Egg </option>
            </select>
            <br>
            <button id="addEgg"> Add Egg </button>
            <button id="removeEgg"> Remove Egg </button>
            <button id="confirmEgg"> Confirm Egg </button>

            <h3 style="color: white"> Basket Option </h3>
            <button onclick="getWhiteBasket()" id="whiteBasket"> White Basket </button>
            <button id="brownBasket"> Brown Basket </button>

            <h3 style="color: white"> Undo-Redo </h3>
            <button id="undo"> Undo </button>
            <button id="redo"> Redo </button>

            <h3 style="color: white"> Preconfigured Goodies </h3>
            <button onclick="getBasePreconfig()"> Base </button>
            <button onclick="getAllPreconfig()"> All </button>
            <button onclick="getMixedPreconfig()"> Mixed </button>

            <h3 style="color: white">State Save</h3>
            <label style="color: white;">Filename:</label> <input type="text" value="test" id="filename">
            <?php
            if(isset($_GET['write']))
            {
                write();
            }
            if(isset($_GET['read']))
            {
                setPreconfig($_GET['data']);
            }
            ?>
            <button onclick="writeFile()"> Save </button>
            <div class="basket-container" id="basket">
                <img class="basket brown" src="Images/brown_basket.png">
            </div>
        </div>
    </body>
</html>