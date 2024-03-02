
middle.innerHTML = `<table style='border:2px solid blue'><tr>
   <td style='border:8px solid white'><div id='a0'></div>
   <td style='border:8px solid white'><div id='a1'></div>
   <td style='border:8px solid white'><div id='a2'></div>
   <td style='border:8px solid white'><div id='a3'></div>
   <tr>
   <td style='border:8px solid white'><div id='a4'></div>
   <td style='border:8px solid white'><div id='a5'></div>
   <td style='border:8px solid white'><div id='a6'></div>
   <td style='border:8px solid white'><div id='a7'></div>

</div>

   </tr></table>`




qr48 = function qr48( message,pos ) {


var qrcode = new QRCode(document.getElementById(pos), {
        text: message,
        width: 90,
        height: 90,
        colorDark :  "navy",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
        });
   }
/**/
qrBlank = function qrBlank (pos) {

var qrblank = new QRCode(document.getElementById(pos), {
        text: "",
        width:90,
        height: 90,
        colorDark : "white",
        colorLight : "white",
        correctLevel : QRCode.CorrectLevel.H
});

}

/* */
