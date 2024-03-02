<?php

include "lib.php";
include "../lib/core.php";

$r = array( "cli" => $cli);

print_r(json_decode($argv[1]($r)));
