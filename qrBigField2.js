
/* include in HTML:
 *         <script src='lib/davidshimjs-qrcodejs-04f46c6/qrcode.min.js'></script>
 *         https://github.com/davidshimjs/qrcodejs
 *         */

msg1 = "";
msg2 = "";
u = "";

const urlSearchParams = new URLSearchParams(window.location.search);

middle.innerHTML='<canvas id="frontCanvas" width="300" height="60" style="border:1px solid grey"></canvas>';

target.innerHTML = `<center><table style='border:2px solid blue'><tr> 
   <td id=an0_><div id='an0'></div>
   <td id=a0_ ><div id='a0'></div> 
   <td id=a1_ ><div id='a1'></div>
   <td id=a2_ ><div id='a2'></div>
   <td id=a3_ ><div id='a3'></div>
   <td id=a4_ ><div id='a4'></div>
   <td id=a5_ ><div id='a5'></div>
   <td id=a6_ ><div id='a6'></div>
   <td id=a7_ ><div id='a7'></div>
   <td id=a8_ ><div id='a8'></div>
   <td id=an1_><div id='an1'></div>
   <tr>
   <td>
   <td id=a9_ ><div id='a9'></div>
   <td id=a10_ ><div id='a10'></div>
   <td id=a11_ ><div id='a11'></div>
   <td id=a12_ ><div id='a12'></div>
   <td id=a13_ ><div id='a13'></div>
   <td id=a14_ ><div id='a14'></div>
   <td id=a15_ ><div id='a15'></div>
   <td id=a16_ ><div id='a16'></div>
   <td id=a17_ ><div id='a17'></div>
   <tr>
   <td>
   <td id=a18_ ><div id='a18'></div>
   <td id=a19_ ><div id='a19'></div>
   <td id=a20_ ><div id='a20'></div>
   <td id=a21_ ><div id='a21'></div>
   <td id=a22_ ><div id='a22'></div>
   <td id=a23_ ><div id='a23'></div>
   <td id=a24_ ><div id='a24'></div>
   <td id=a25_ ><div id='a25'></div>
   <td id=a26_ ><div id='a26'></div>
   <tr>
   <td>
   <td id=a27_ ><div id='a27'></div>
   <td id=a28_ ><div id='a28'></div>
   <td id=a29_ ><div id='a29'></div>
   <td id=a30_ ><div id='a30'></div>
   <td id=a31_ ><div id='a31'></div>
   <td id=a32_ ><div id='a32'></div>
   <td id=a33_ ><div id='a33'></div>
   <td id=a34_ ><div id='a34'></div>
   <td id=a35_ ><div id='a35'></div>
   <tr>
   <td>
   <td id=a36_ ><div id='a36'></div>
   <td id=a37_ ><div id='a37'></div>
   <td id=a38_ ><div id='a38'></div>
   <td id=a39_ ><div id='a39'></div>
   <td id=a40_ ><div id='a40'></div>
   <td id=a41_ ><div id='a41'></div>
   <td id=a42_ ><div id='a42'></div>
   <td id=a43_ ><div id='a43'></div>
   <td id=a44_ ><div id='a44'></div>
   <tr>
   <td id=an2_><div id='an2'></div>
   <td id=a45_ ><div id='a45'></div>
   <td id=a46_ ><div id='a46'></div>
   <td id=a47_ ><div id='a47'></div>
   <td id=a48_ ><div id='a48'></div>
   <td id=a49_ ><div id='a49'></div>
   <td id=a50_ ><div id='a50'></div>
   <td id=a51_ ><div id='a51'></div>
   <td id=a52_ ><div id='a52'></div>
   <td id=a53_ ><div id='a53'></div>
   <td id=an3_ ><div id='an3'></div>


</div>

   </tr></center>
   <hr><hr>`;


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
        width: 60,
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

eval(thisDiv).style="border:6px solid pink";

};

for (y = 0 ; y < 54; y++){
   if(urlSearchParams.get("option") === 'blank') {
   qrBlank("a" + y);
   }
   else
   {
   msg1 = Math.random().toString(16).split(".")[1];
   msg2 = Math.random().toString(16).split(".")[1]; 
   u  = msg1 + msg2;
   u = u.substr(0,16);

  qr80(u,"a" + y);
  }
};

for (y = 0; y < 4; y++) {
   qrAlign('an' + y);

};

