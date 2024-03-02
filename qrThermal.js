
/* include in HTML:
 *         <script src='lib/davidshimjs-qrcodejs-04f46c6/qrcode.min.js'></script>
 *         https://github.com/davidshimjs/qrcodejs
 *         */

msg1 = "";
msg2 = "";
u = "";

const urlSearchParams = new URLSearchParams(window.location.search);

// middle.innerHTML='<canvas id="frontCanvas" width="300" height="60" style="border:1px solid grey"></canvas>';

target.innerHTML="<div id=target1></div><div id=target2></div>"

function buildRow(n,page) {

if( n === 0 )
  {
  left = 0;
  right = 1;
  }

if ( n === 5 )
  {
  left = 2;
  right = 3;
  }

start = n * 9;

row = "<tr>";

if( n === 0 | n === 5 ) 
  row += `<td id=${page}_align_${left}_><div id=${page}_align_${left}></div>`;
  else
  row += `<td>`;

for (x = start; x < start + 2; x++)
  {
  row += `<td id=${page}${x}_ ><div id=${page}${x}></div>`;
  }

if( n === 0 | n === 5 )
  row += `<td id=${page}_align_${right}_><div id=${page}_align_${right}></div>`;
return row;

}

t = `<center><table style='border:2px solid blue'>`;

for ( y = 0; y < 6; y++)
  t += buildRow(y,"a");

target1.innerHTML += t + `</tr></table></center><hr><hr>`;

target1.innerHTML += "<hr><br><br><br><br><br><br><hr>";

svg=`<svg xmlns="http://www.w3.org/2000/svg"
             width="40" height="70" >
</svg>`;

target2.innerHTML += svg;
//

t = `<center><table style='border:2px solid green'>`;

for ( y = 0; y < 6; y++)
  t += buildRow(y,"b");

target2.innerHTML += t + `</tr></table></center><hr><hr>`;




qr80 = function ( u,pos ) {

v = u.padStart(8,"6"); 
thisDiv = pos + "_";

$black = "#00000";

var qrcode = new QRCode(document.getElementById(pos), {
	text: u,
	width: 80,
	height: 80,
	colorDark :  "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});

eval(thisDiv).style="border:6px solid #" + u.substr(0,6);  

};

qrAlign = function ( pos ) { 

thisDiv = pos + "_";

var qrcode = new QRCode(document.getElementById(pos), {
        text: "abcd",
        width: 40,
        height: 80,
        colorDark :  "#ffffff",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
        });


eval(thisDiv).style="border:6px solid green";


};

qrBlank = function ( pos ) {

// console.log(pos);
thisDiv = pos + "_";

var qrcode = new QRCode(document.getElementById(pos), {
        text: "abcd",
        width: 80,
        height: 80,
        colorDark :  "#ffffff",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
});

eval(thisDiv).style="border:6px solid white";

};

function printPage(page) {
for (y = 0 ; y < 54; y++){
    if(urlSearchParams.get("option") === 'blank') {
    qrBlank(page + y);
    }
    else
    {
    msg1 = Math.random().toString(16).split(".")[1];
    msg2 = Math.random().toString(16).split(".")[1]; 
    u  = msg1 + msg2;
    u = u.substr(0,16);

    qr80(u,page + y);
    }
  };

  for (y = 0; y < 4; y++) {
    qrAlign(page + '_align_' + y);
  };

}

printPage("a");

printPage("b");
