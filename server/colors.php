<?php

function color($s,$a,$b) { 
	$cmd = "echo -n ";
	$x = "\033[01";
	$y = "\033[0m";
	$t = `$cmd "$x;$b$s\033[0m";`;  
	return $t;
}

function red($s)      { return color($s,01,"31m"); }
function green($s)    { return color($s,01,"32m"); }
function yellow($s)   { return color($s,01,"33m"); }
function blue($s)     { return color($s,01,"34m"); } 
function pink($s)     { return color($s,04,"35m"); }
function aqua($s)     { return color($s,01,"36m"); }
function black($s)     { return color($s,01,"30m"); }
function xaqua($s)     { return color($s,01,"38m"); }


function p($s) {
	echo $s . "\n";
}

function dimecash($t) {
	$middle = substr($t,0,22);
	$firstZ = strpos($t,"z");
// 	$body = substr($t,0,$firstZ);
	$firstX = strpos($t,"x") + 1;
	$header = substr($t,0,$firstX);
	$body = substr($t,$firstX,$firstZ - $firstX);
	$body1 = str_replace("x",aqua("x"),$body);
	$zzz = substr($t,$firstZ,-6);
	return  
	        aqua($header) 	
		. $body1
		. pink($zzz)
		. blue(substr($t,28)) 
		. " | "
		. decodeBody($body);
}

function decodeBody($b) {
	$b = str_replace("x"," ",$b);
        $b = str_replace("y","-",$b);
	$b = str_replace("v",".",$b);
        $b = str_replace("a","!",$b);
        $b = str_replace("w",":",$b);
        $b = str_replace("c","0",$b);
	$b = str_replace("e","=",$b);
        $b = str_replace("i","I",$b);
        $b = str_replace("o","O",$b);


	return $b;
}

if(isset($argv) {
$addy = array( $argv[1] );
echo dimecash($addy[0]);
echo "\n";
}

