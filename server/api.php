<?php

## 

$num = 0.001132;
$amt = 20.00039692;
$fee = 0.000415;
$fee = 0.00042267;
//      0.00000767
//  0.00238767
//  0.00278494
// $amt = 79.73959567;
// $amt = 79.74619592;
// $change = $amt - $num * 3;
echo "$amt\n";
echo "$fee\n";
$change = $amt - $fee;
$change = $change + 0.00042662;
echo $change;
echo "\n";

include 'lib.php';
echo $account . "\n";

echo $cli . "\n";
include '/var/www/html/easyBase/lib/core.php';

function pr($r) { print_r($r); }

function youtube($change) {

$DAx=unspendable('DAx','big audio dynamite');
$DBx=unspendable('DBx','youtube.com');
$DCx=unspendable('DCx','e=mc2');
$data='"' . strToHex("https://www.youtube.com/watch?v=cHTDkJ-bQqM&list=RDcHTDkJ-bQqM&start_radio=1") . '"';
return array( 
	$DAx => 0.001132 , 
	$DBx => 0.001132 , 
	$DCx => 0.001132 , 
	"data" => $data , 
	"$account" => $change
);
};

$t = youtube($change);

if(isset($_SERVER['HTTP_HOST']))
{
	// only html 
//	echo "<pre>";
	// end of only html
}
else
{
	// only shell
	// End of only shell

}

$r = array("cli" => $cli , "cmd" => $cmd , "output" => "json");
pr($t);
// $vout = json_encode($t);
// $vout ='"[{\"data\":\"deadbeefdeadbeefdeadbeef\"}]"';
// print_r(json_decode($vout));
//

$cnt = 0;
$total_val = count($t) -1;

estimateSmartFee($r);

$j = "{";
foreach($t as $id => $value)
{
	$j = $j . "\"$id\":$value";
	if($cnt < $total_val)
		$j = $j . ",";
	else
		$j = $j . "}";
	$cnt++;
}

$vout = $j;

/* There is a bug with json_encode, so I had to use a kludge */
/* The second json_encode seems to work fine ($change not altered) */

$r['data'] = createRawTransaction($r,json_encode($vout));
$r['cmd'] = 'createrawtransaction';
$r['output'] = 'hex';
// echo decodeRawTransaction($r);
$funded = fundRawTransaction($r);
echo "----------------------- funded ---------------------------------\n";
pr($funded);
exit;
$r['data'] = $funded->hex;
$r['cmd'] = 'fundrawtransaction';
$r['fee'] = $funded->fee;
echo decodeRawTransaction($r);
$signed = json_decode(signRawTransaction($r));
// print_r($r);
pr($signed);
exit;
$r->data = $signed->hex;
pr($r);

sendRawTransaction($r);

// https://www.youtube.com/watch?v=y4YF46B9e6c Patti Smith - Smells Like Teen Spirit
// https://www.youtube.com/watch?v=KSDYBxFUN-g Twin Peaks without Context
// https://www.youtube.com/watch?v=C4a40FjB_sM <- Fire on the Mountain - Marshall Tucker Band

?>
