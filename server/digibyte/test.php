<?php

include "lib.php";
include "../lib/core.php";

$r = array( "cli" => $cli);

print_r($r);

print_r(json_decode(getVin($r)));
