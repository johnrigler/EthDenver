<?php

$file = "xx.xxd";

$out = file_get_contents($file);

$target = "";

for($x = 0; $x < strlen($out) / 2; $x++)
  {
  $target = $target .  hex2bin($out[$x * 2] . $out[$x * 2 + 1]);
  }

echo $target;

?>
