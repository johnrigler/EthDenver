
updateTarget = function() {
target.innerHTML = `<div id="qr-reader" style="width:500px"></div>
<div id="qr-reader-results"></div>`
}

updateTarget()

const urlParams = new URLSearchParams(window.location.search);


var resultContainer = document.getElementById('qr-reader-results');
var lastResult, countResults = 0;

function onScanSuccess(decodedText, decodedResult) {
    if (decodedText !== lastResult) {
        ++countResults;
        lastResult = decodedText;
        // Handle on success condition with the decoded message.
        console.log(`Scan result ${decodedText}`, decodedResult);
        middle.innerHTML += decodedText;
        fetch("https://rigler.org/qrRef/" + decodedText)
             .then( x => x.text() )
	     .then( x => window.location.href = x )
    }
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);
