<?php

header("Access-Control-Allow-Origin: *");



if ($_POST) // If form was submitted...
{
    $payload = $_POST["payload"]; // Get it into a variable
    $name = $_POST["name"];
    file_put_contents("../../../notepad/" . $name,$payload);
//    `echo $payload > ../../../notepad/$name`;

echo $payload;
}

?>
<form method="post">
    <textarea name="payload"></textarea>
    <input type="text" name="name"/>
    <input type="submit" value="Go!" />
</form>
