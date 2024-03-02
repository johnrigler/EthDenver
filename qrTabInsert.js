
heading.innerHTML=""
middle.innerHTML='<canvas id="frontCanvas" width="962" height="680" style="z-index:20 border:1px solid grey"></canvas>'

 middle.innerHTML+='<div style="border:1;height:60px"><a href=home>index.html</a></div>'
/*        300 skips whole page */

middle.innerHTML+='<canvas id="backCanvas" width="962" height="680" style="border:1px solid grey"></canvas>'

frontCanvas = document.getElementById("frontCanvas");
x = frontCanvas.getContext("2d");
y = backCanvas.getContext("2d");

rectanglex = function(left,top) {

x.beginPath();
x.moveTo(left+10, top+10);
x.lineTo(left+470, top+10);
x.lineTo(left+470, top+140);
x.lineTo(left+10, top+140);
x.lineTo(left+10, top+10);

x.moveTo(left+120,top+50);
x.lineTo(left+120,top+100);

x.moveTo(left+240,top+50);
x.lineTo(left+240,top+100);

x.moveTo(left+350,top+50);
x.lineTo(left+350,top+100);

x.strokeStyle = "blue";
x.stroke();
x.font = "70px serif";
x.strokeText("1", left+50, top+100);
x.strokeText("2", left+164, top+100);
x.strokeText("3", left+282, top+100);
x.strokeText("4", left+390, top+100);

x.font = "20px serif";
x.fillText("Attach four included code stickers randomly here.",left+30,top+35);
x.fillText("Visit website on the other side for next steps.",left+30,top+125);

}

rectangley = function(left,top) {

y.beginPath();
y.moveTo(left+10, top+10);
y.lineTo(left+470, top+10);
y.lineTo(left+470, top+140);
y.lineTo(left+10, top+140);
y.font = "32px serif";
y.strokeStyle = "purple";
y.closePath();
y.stroke();

y.font = "15px serif";
y.fillText("This is your Web3 self-serve",left+30,top+35);
y.fillText("login. First, affix four stickers",left+30,top+55);
y.fillText("to back in any order. Next",left+30,top+75);
y.fillText("scan either QR code or visit:",left+30,top+95);
y.font = "20px serif";
y.fillText("https://rigler.org/web3",left+30,top+125);

/*
var qrcode = new QRCode(document.getElementById(qrLayer), {
        text: "https://ipfs.io/ipfs/QmWnxWXCkYdYKf7EV6ug9CG24FBxr8DkFMTqpXozj9pWXY/?evalFile=start.js",
        width: 80,
        height: 80,
        colorDark :  "navy",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
});
*/

web3_gate1 = new Image();
web3_gate1.src = 'QmWnx-WXY.png';

web3_gate2 = new Image();
web3_gate2.src = 'Qmanh.png';

web3_gate1.onload = function(){
  y.drawImage(web3_gate1, left+340, top+15,120,120)
   }

web3_gate2.onload = function(){
   y.drawImage(web3_gate2, left+220, top+15,120,120)
   }



}

rectanglex(0,0)
rectanglex(460,0)
rectanglex(0,130)
rectanglex(460,130)
rectanglex(0,260)
rectanglex(460,260)
rectanglex(0,390)
rectanglex(460,390)
rectanglex(0,520)
rectanglex(460,520)

rectangley(24,0)
rectangley(484,0)
rectangley(24,130)
rectangley(484,130)
rectangley(24,260)
rectangley(484,260)
rectangley(24,390)
rectangley(484,390)
rectangley(24,520)
rectangley(484,520)

//image_width=450;
//image_height=230; 
//scale=80;
