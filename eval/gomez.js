t = new Array()
a = new Array()
gomez = new Array()
gomez.polygon = new Array()
polygon = new Array()

gomez.abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"cashout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"message","type":"string"},{"internalType":"address payable","name":"receiver1","type":"address"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"address payable","name":"receiver2","type":"address"},{"internalType":"uint256","name":"amount2","type":"uint256"},{"internalType":"address payable","name":"receiver3","type":"address"},{"internalType":"uint256","name":"amount3","type":"uint256"},{"internalType":"address payable","name":"receiver4","type":"address"},{"internalType":"uint256","name":"amount4","type":"uint256"}],"name":"tell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

polygon.address = '0x5a2220d56f56db9C9F5B0cb83ff35b42746503a2'
polygon.contract = new ethers.Contract(polygon.address,gomez.abi,a.metamaskSigner)
polygon.search = ""
polygon.searchResults = new Array(); 
polygon.api="https://api.polygonscan.com/"
polygon.explorer="https://polygonscan.com/"
polygon.startblock="01211972"
polygon.endblock="99999999"
polygon.apikey="P2VD4Q197F12TVGTQT8982EAQI254DNJ4Z"

polygon.url = polygon.api + 'api?module=account&action=txlist&address='
polygon.url += `${polygon.address}&sort=desc&apikey=${polygon.apikey}&startblock=`;
polygon.url += polygon.url + polygon.startblock + '&endblock=' + polygon.endblock

// console.log(polygon.url)

// https://api.polygonscan.com/api?module=account&action=txlist&address=0x62616e616e610000000000000000000000000000&sort=desc
//
polygon.url="https://api.polygonscan.com/api?module=account&action=txlist&address=0x5a2220d56f56db9C9F5B0cb83ff35b42746503a2&sort=desc&apikey=P2VD4Q197F12TVGTQT8982EAQI254DNJ4Z"

        
fetch(polygon.url).then( x =>  x.json() ).then(
       data => {
               gomez.polygon.fullQuery = data;
               })
// t.url = url 

gomez.polygon = t 

gomez.foreverWall = function() {

alert(gomez.polygon.fullQuery.length);

}
