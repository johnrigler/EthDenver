<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html lang="en">
  <head>
        <script src='lib/ethers-6.6.0.umd.min.js'></script>
        <script src='lib/davidshimjs-qrcodejs-04f46c6/qrcode.min.js'></script>
        <script src='lib/html5-qrcode/minified/html5-qrcode.min.js'></script>

  </head>

<script>

// var easyBase;

var files;
var dirs;

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)

/* evaluate local file as javaScript */
if(evalFile = urlParams.get('evalFile'))
   fetch(evalFile).then(x => x.text()).then
        (x => eval(x))
else
setTimeout(() => {
  showFileButtons();
}, "1000");

      
   console.log(evalFile)

/* Add mock IPFS filesystem, files written previously with php  */

Promise.all([
  fetch('files.txt?1698683072').then(x => x.text()),
  fetch('dirs.txt?1698683072').then(x => x.text()),
  fetch('eval.txt?1698683072').then(x => x.text())
]).then(([files,dirs,evals]) => {
  lsFiles = files.split("\n");
  lsDirs = dirs.split("\n");
  lsEvals = evals.split("\n");
/*
  middle.innerHTML += '<img src="icons/dir.gif" alt="[DIR]">'
*/

arrayWithElements = new Array();
buttonPush = "";
buttonTags = "";

myClickedElement = ""

clickListener = function(e) 
{   
    var clickedElement=(window.event)
                        ? window.event.srcElement
                        : e.target,
        tags=document.getElementsByTagName(clickedElement.tagName);
    buttonTags = tags;
    console.log(clickedElement.name)
    if(clickedElement.id.split(".").length == 1)
      eval(clickedElement.id)(clickedElement.name);
        else
      {
    console.log(clickedElement.id + clickedElement.id.split(".").length + ' ' + clickedElement.name);
 //   if(clickedElement.id == 'showTract')
   //   eval(clickedElement.id)(clickedElement.name);
    for(var i=0;i<tags.length;++i)
      if(tags[i]==clickedElement)
        fetch( tags[i].name + "?" + Math.random(3) * 100 ).then(
          x => x.text()).then(
          x => eval(x))
       }
}

document.onclick = clickListener;

showFileButtons = function() {

  lsFiles.forEach( x => {  
      if(x.split('.')[1] == "js")
         middle.innerHTML += `<br><button tag=${x} id=${x} name=${x} >${x}</button>`;
      else
         middle.innerHTML += "<br><a href=" +  x + ">" + x + "</a>";
      });
  middle.innerHTML += "<hr>";
  lsEvals.forEach( x => {
     if(x.length != 0)
     {
     file = `eval/${x}`;
     console.log(file);
     fetch(file).then
        ( y => y.text()).then
             ( z => eval(z))
     }
 //   console.log(x);
      });

}


});

a = new Array();
a.help = function() {
alert("(heading (body target middle footer))")

}

function evalText() { eval(toEval.value) }

</script>
<html>
 <head>
  <title>Index of /</title>
 </head>
<div id=heading><button id=home onclick='home()' name=home ><h1>home</h1></button></div>
<div id=body>
<div id=target></div>
<div id=middle></div>
<script>
function myFunction() {
  
  document.getElementById("demo").style.color = "red";
}

home = function(home) {
 body.innerHTML = "<div id=target></div><div id=middle></div><div id=footer></div>"
 showFileButtons(); 
}

// document.onclick = clickListener;


</script>

<hr>
<div id="footer">
</div>
</div>
<script>
/*
setTimeout(() => {
  showFileButtons();
}, "1000");

*/
</script>
