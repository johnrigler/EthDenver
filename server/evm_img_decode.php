<?php
list($left,$right) = explode("-",$_GET['blkpos']);

$fbase = "137_" . $left . "_" . $right;
$file = json_decode(file_get_contents("../../evm/" . $fbase . ".json"));

$input = $file->input;
$payload = substr($input,10+32*20);

$array = array();
$final = "";

for($x = 0; $x < strlen($payload) / 2; $x = $x + 1)
   {

   $t1 = $payload[$x * 2];
   $t2 = $payload[$x * 2 + 1];
   $t3 = $payload[$x * 2 + 2];
   $t4 = $payload[$x * 2 + 3];

   $target = $t1 . $t2;
   $next = $t3 . $t4;

   if($target == 'c2')continue;

   if($target == 'c3')
       {
       switch($t3) {
       	case '8':
           $final = $final . "c" . $t4;
           break;
 	case '9':
	   $final = $final . "d" . $t4;
	   break;
        case 'a':
           $final = $final . "e" . $t4;
           break;
        case 'b':
           $final = $final . "f" . $t4;
           break;       
	
//	default:
//	   $final = $final . "|" . $next;
	}
       $x = $x + 1;
       continue;
       }

// $array[$x] = $target;
   $final = $final . $target;
   }

for($x = 0; $x < strlen($final) / 2; $x++)
  {
  $img = $img . hex2bin($final[$x * 2] . $final[$x * 2 + 1]);
  }

file_put_contents($fbase,$img); 

$check=explode(" ",`file $fbase`);

if( $check[1] == 'PNG' )$type = "png";
if( $check[1] == 'JPEG' )$type = "jpeg";

// output image in the browser
if( $check[1] == 'PNG' )
  {
  $img = imagecreatefrompng($fbase);
  header("Content-type: image/png");
  imagepng($img);
  }

if( $check[1] == 'JPEG' )
  {
  $img = imagecreatefromjpeg($fbase);
  header("Content-type: image/jpeg");
  imagejpeg($img);
  }



if( $check[1] == 'JPEG' )header("Content-type: image/jpeg");


// free memory
imagedestroy($img);
?>
