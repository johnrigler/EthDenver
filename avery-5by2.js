heading.innerHTML = ""

middle.innerHTML = `<table style='border:2px solid green'><tr>
   <td style='border:8px solid white'><div id='a0'></div>
   <td style='border:8px solid white'><div id='a1'></div>
   <td style='border:8px solid white'><div id='a2'></div>
   <td style='border:8px solid white'><div id='a3'></div></tr>
   <tr>
   <td style='border:8px solid green'><div id='s0'></div>
   </tr>
   <tr>
   <td style='border:8px solid aqua'><div id='a4'></div>
   <td style='border:8px solid white'><div id='a5'></div>
   <td style='border:8px solid white'><div id='a6'></div>
   <td style='border:8px solid white'><div id='a7'></div>
   <td style='border:8px solid white'><div id='a8'></div>
   </tr>
   <tr>
   <td style='border:8px solid pink'><div id='a9'></div>
   <td style='border:8px solid white'><div id='a10'></div>
   <td style='border:8px solid white'><div id='a11'></div>
   <td style='border:8px solid white'><div id='a12'></div>
   <td style='border:8px solid white'><div id='a13'></div>
   </tr>
   <tr>
   <td style='border:8px solid salmon'><div id='a14'></div>
   <td style='border:8px solid white'><div id='a15'></div>
   <td style='border:8px solid white'><div id='a16'></div>
   <td style='border:8px solid white'><div id='a17'></div>
   <td style='border:8px solid white'><div id='a18'></div>
   </tr>



</div>

   </tr></table>`




qr120 = function qr120( message,pos ) {


var qrcode = new QRCode(document.getElementById(pos), {
        text: message,
        width: 120,
        height: 120,
        colorDark :  "brown",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
        });
   }
/**/
qrBlank = function qrBlank (pos) {

var qrblank = new QRCode(document.getElementById(pos), {
        text: "",
        width:120,
        height: 120,
        colorDark : "white",
        colorLight : "white",
        correctLevel : QRCode.CorrectLevel.H
});

}

qrLeft = function ( message ) {
  qrBlank("a0")
  qr120(message,"a1")
/*  qrBlank("a2")
  qrBlank("a3")
  qr90("afafsafssd","a4") */
}

qrRight = function ( message ) {
  qrBlank("a0")
  qrBlank("a1")
  qrBlank("a2")
  qr120(message,"a3")
}

qr2l = function ( message ) {
  qrBlank("a0")
  qrBlank("a1")
  qrBlank("a2")
  qrBlank("a3")
  qrBlank("a5")
  qrBlank("a9")
  qr120(message,"a10")
}

qr2r = function ( message ) {
  qrBlank("a0")
  qrBlank("a1")
  qrBlank("a2")
  qr120("cdcdcdd","s0")
  qrBlank("a9")
  qrBlank("a10")
  qrBlank("a11")
  qr120(message,"a12")
}


a.print = function () { 
  alert('qrLeft $message')
}

bigPrint = function () {
// for(x = 0; x < 20; x++)
  //   qr120(x,"a" + x)

 qr120("a0","a0")
 qr120("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxs0","s0")
 qr120("a4","a4")
 qr120("a9","a9")
 qr120("a14","a14")
}


  /* */
