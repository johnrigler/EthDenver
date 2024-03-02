
scanStickers = function() {

var wallet = 5;

target = document.getElementById('target');

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
        console.log(`4 Scan result ${decodedText}`, decodedResult);
        middle.innerHTML += decodedText;
    //    if(countResults == 4) 
    //
    //
    //
        f.contract.map(decodedText).then( x =>
           {
           console.log(x);
           console.log(a.utils.str2hex(decodedText))
           }
           )


        if(middle.innerHTML.length == 28)
        {  
        console.log(middle.innerHTML)
//        f.contract.map(decodedText).then( x => console.log(x) )

        alert("Kitt Kanto, Mayhem Diva");
             document.getElementById("html5-qrcode-button-camera-stop").click()
        middle.innerHTML = `<iframe
src=https://gatherer.wizards.com/Pages/Card/Details.aspx?printed=false&multiverseid=559656 height=800 width=500>
 ></iframe>`; 
        }
        if(middle.innerHTML.length >= 64)
             {
	     document.getElementById("html5-qrcode-button-camera-stop").click()
             findAddress(middle.innerHTML.substr(0,64))
             }
    }
}


qrAddress = function qrAddress( u ) {

// v = u.padStart(8,"6");

$black = "#00000";

var qrcode = new QRCode(document.getElementById("middle"), {
        text: u,
        width: 200,
        height: 200,
        colorDark :  "navy",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
});

document.getElementById("qr-reader-results").innerHTML = "This is your secret private key:"
// qr-reader-result.style="border:8px solid #" + u.substr(0,6);
//
//
// middle.innerHTML += "This is your public key:"
};


function findAddress(privateKey) {
let wallet = new ethers.Wallet(privateKey);
a.scannedWallet = wallet
heading.innerHTML += a.scannedWallet.address
// qr-reader.innerHTML = ""
middle.innerHTML += "<hr>This is your public Web3 address: " + wallet.address
middle.innerHTML += `<hr><a href="https://polygonscan.com/address/${wallet.address}">View on Polygonscan</a><br>Share this Web3 address.`

qrAddress(wallet.address)

// Connect a wallet to mainnet
let provider = ethers.getDefaultProvider(137);
let walletWithProvider = new ethers.Wallet(privateKey, provider);
console.log(walletWithProvider)
provider.getBalance(wallet.address).then((balance) => {
 // convert a currency unit from wei to ether
   const balanceInEth = ethers.utils.formatEther(balance)
    console.log(`balance: ${balanceInEth} ETH`)
    })
}    

var html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });

middle.innerHTML = ""
footer.innerHTML = ""

html5QrcodeScanner.render(onScanSuccess);

}
