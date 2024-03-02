<?php
$f = fopen( 'php://stdin', 'r' );

$r = array();

while( $line = fgets( $f ) ) {
	list($left,$right) = explode(":",$line);
	switch ($left) { 
	case "DAx": $r[]= "Xxxx"; break;
        case "DBx": $r[]= "Xxxx"; break;
        case "DCx": $r[]= "Xxxx"; break;

	} 

	if ($left == "data")
		$r[]= '"data":' . '"' . bin2hex($right) . '"';
	else
		echo "$left $right";
}

print_r($r);

fclose( $f );
?>
