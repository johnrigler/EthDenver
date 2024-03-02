<?php

function strToHex($string){
    $hex='';
    for ($i=0; $i < strlen($string); $i++){
        $hex .= dechex(ord($string[$i]));
    }
    return $hex;
}


function hexToStr($hex){
    $string='';
    for ($i=0; $i < strlen($hex)-1; $i+=2){
        $string .= chr(hexdec($hex[$i].$hex[$i+1]));
    }
    return $string;
}

function evalCmd($r) {

	$cli = $r['cli'];
	$cmd = $r['cmd'];
	$out = $r['output'];

	$eval = "$cli $cmd";
	echo $eval;
	echo "\n";

	if($out == "json") return `$eval`;
	if($out == "array") return json_decode(`$eval`);

}


function unspendable($first,$rest) {
     return rtrim(`/var/www/html/easyBase/lib/un.bash $first $rest`);
}

function colorAddy($addy) {

	$t = $addy;
	return $t;
}

function getVin($r) {

	$r1['cli'] = $r['cli'];
	$r1['cmd'] = "listunspent";
	$r1['output'] = "array";
	$r1['function'] = "getVin";
	$r1['result'] = array();

	foreach(evalCmd($r1) as $id => $t)
	{
	$r1['result'][$id] = array( "txid" => $t->txid , "vout" => $t->vout , "amount" => $t->amount );
	}

//	if ($r['output'] == "array")return $r1;  

	return json_encode($r1);	
}

function createRawTransaction($r,$vout ='"[{\"data\":\"deadbeefcafe\"}]"') {
	$r1['vin'] = getVin($r);
	$r1['cli'] = $r['cli'];
	$r1['cmd'] = "createrawtransaction";
	$r1['output'] = "json";
	// echo "\n";
	$cli = $r['cli'];
	$vin = json_decode(getVin($r));
	$vin_result = json_encode($vin->result);
	// $torun = "$cli createrawtransaction '$vin_result' '[{\"data\":\"00010203\"}]'";
	$torun = "$cli createrawtransaction '$vin_result' $vout";
//	echo $torun;
	return `$torun`;
}

function signRawTransaction($r) {
	$cli = $r['cli'];
	$cmd = $r['cmd'];
//	$cmd = "signrawtransactionwithwallet";
	$torun = "$cli $cmd $r[data]";
//	echo $torun;
	$result = `$torun`;
	return $result;
};

function fundRawTransaction($r) {
	$cli = $r['cli'];
//	decodeRawTransaction($r);
//	$vin = json_decode(getVin($r));
//	pr($vin->result);
//	$total = 0;
//	foreach($vin->result as $input)
//		$total = $total + $input->amount;
//	echo $total . "\n";
	$cmd = "fundrawtransaction";	
	$torun = "$cli $cmd $r[data]";
//	echo $torun;
	$result = `$torun 2>&1`;
//	echo $result;
	$funded = json_decode($result);
//	pr($funded);
//	decodeRawTransaction($funded['data']);
	return $funded;
};

function decodeRawTransaction($r) {
	$cli = $r['cli']; 
	$cmd = 'decoderawtransaction';
	$torun = "$cli $cmd $r[data]";
	return `$torun`;
};

function sendRawTransaction($r) {

	$cli = $r['cli'];
	$cmd = 'sendrawtransaction';
	pr($r);
	$torun = "$cli $cmd $r[data]";
//	echo $torun;
	$result = `$torun 2>&1`;
	print_r($result);
};

function estimateSmartFee($r) {

	$cli = $r['cli'];
	$cmd = 'estimatesmartfee';
	$torun = "$cli $cmd 6";
	return `$torun`;
};
