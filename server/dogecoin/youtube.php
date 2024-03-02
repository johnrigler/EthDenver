<?php

include "lib.php";
include "../lib/core.php";

$f = fopen( 'php://stdin', 'r' );

$r = array();

$burn = "0.01";

$fee = json_decode(`dogecoin-cli estimatesmartfee 12`);

$feerate = $fee->feerate;

$counter = 0;

while( $line = fgets( $f ) ) {
	$counter = $counter + 1;
	$pos = strpos($line,":");
	$left = substr($line,0,$pos);
	$right = substr($line,$pos + 1);
        switch ($left) {
	case "DAx": $r[]= '"' . unspendable("DAx",$right) . '":' . $burn; break;
	case "DBx": $r[]= '"' . unspendable("DBx",$right) . '":' . $burn; break;
	case "DCx": $r[]= '"' . unspendable("DCx",$right) . '":' . $burn; break;
	case "9s": $r[]= '"' . unspendable("9s",$right) . '":' . $burn; break;
        case "9t": $r[]= '"' . unspendable("9t",$right) . '":' . $burn; break;
        case "9u": $r[]= '"' . unspendable("9u",$right) . '":' . $burn; break;
	case "9v": $r[]= '"' . unspendable("9v",$right) . '":' . $burn; break;
	case "data": $r[]= '"data":"' . bin2hex($right) . '"'; break;
	case "*": $r[]='"' . unspendable($left)         . '":' . $burn;
        }

}

print_r($r);

fclose( $f );

$unspent = `$cli listunspent`;
$unspent_ = json_decode($unspent);

$txid0 = $unspent_[0]->txid;
$vout0 = $unspent_[0]->vout;
$amount0 = $unspent_[0]->amount;
$address0 = $unspent_[0]->address;
$amount1 = 0;
/*
$txid1 = $unspent_[1]->txid;
$vout1 = $unspent_[1]->vout;
$amount1 = $unspent_[1]->amount;
$address1 = $unspent_[1]->address;
 */



//print_r($unspent_);

//echo "$feerate\n";

$change = $amount0 + $amount1 - $feerate - ($burn * $counter);
//echo "$change\n";
//
$t = "";

//$v = "'[{\"txid\":\"$txid0\",\"vout\":$vout0},{\"txid\":\"$txid1\",\"vout\":$vout1}]'";
$v = "'[{\"txid\":\"$txid0\",\"vout\":$vout0}]'";


foreach($r as $item)
{
	$t = $t . $item . ",";
}
$t = '{' . $t . '"' . "$address0" . '"' . ":$change}"; 

// echo $t;

$tocreate = $v . " " . json_encode($t);

$crt=`$cli createrawtransaction $tocreate`;
$frt_ = json_decode(`dogecoin-cli fundrawtransaction $crt`);
$frt = $frt_->hex;
$srt_ = json_decode(`dogecoin-cli signrawtransaction $frt`);
$srt = $srt_->hex;
echo `dogecoin-cli sendrawtransaction $srt`;

?>
