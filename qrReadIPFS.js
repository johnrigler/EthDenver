
qrReader = new Object();

qrReader.launch = function(div,func) {
eval(div).innerHTML += `<div id="qr-reader" style="width:500px"></div><div id="qr-reader-results"></div>`

var resultContainer = document.getElementById('qr-reader-results');
var lastResult, countResults = 0;

function onScanSuccess(decodedText, decodedResult) {
    if (decodedText !== lastResult) {
        ++countResults;
        lastResult = decodedText;
        // Handle on success condition with the decoded message.
        console.log(`4 Scan result ${decodedText}`, decodedResult);
        middle.innerHTML += decodedText;
    }
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });

html5QrcodeScanner.render(onScanSuccess);

}
