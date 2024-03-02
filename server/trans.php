<?php

$blob = json_decode(file_get_contents("trans.json"));

foreach($blob->result as $res)
    {
       $name = "137_" . $res->blockNumber . "_" . $res->transactionIndex . ".json";
        print_r($res);
       file_put_contents("../evm/" . $name, json_encode($res));
    }
?>
