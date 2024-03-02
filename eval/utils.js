f = Array();

f.utils.searchPrompt =  function() {
        var text;
        let term = prompt("Enter one search word:", "banana");
        if (term == null || term == "") {
                text = "User cancelled the prompt.";
        } else {
                return term;
        }
}

f.utils.hex2a = function (hexx) {

        var hex = hexx.toString(); //force conversion
        var str = '';
        for (var i = 0; i < hex.length; i += 2)
        {
                str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        return str;
}

f.utils.word2address = function word2address( string )
{

addr = "0x"

for ( var x = 0 ; x < string.length ; x = x + 1 )
   {
   ascii = string.charCodeAt(x)
   addr += ascii.toString(16)
   };

for ( x = string.length ; x < 20 ; x = x + 1 )
   {
   addr += "00"
   };

return addr
}

f.utils.str2hex = function str2hex( string )
{

var hex = "0x";
var t = "";

for ( var x = 0 ; x < string.length ; x = x + 1 )
   {
   ascii = string.charCodeAt(x);
   t = ascii.toString(16);
   if(t.length === 1)hex += "0";
   hex += t;
   };

return hex 
}

f.utils.hex2str = function (hexx) {

        var hex = hexx.toString();//force conversion
        var str = '';
        for (var i = 2; i < hex.length; i += 2)
        {
                str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        return str;
}


f.utils.randomBase64 = function() {

y = new Uint8Array(8)

for( x = 0; x < 8; x++ ){ y[x] = Math.ceil(Math.random(256)*256) }

return base64js.fromByteArray(y)

}

f.utils.base64ToHex = function( val ) {
finalNum = ""
  for(x = 0; x < 8; x++){
    finalNum += val[x].toString(16).padStart(2,"0")
  }
return finalNum
}

//console.log(a.utils.base64ToHex(val))




f.utils.polygon = new Array();
f.utils.polygon.api = "https://api.polygonscan.com/api"
f.utils.polygon.apikey = "P2VD4Q197F12TVGTQT8982EAQI254DNJ4Z"

f.utils.searchIterate = function(address,blockNumber,api,apikey) { 


    module="?module=account"
    action="&action=txlist"
    address="&address=" + address 
    sort="&sort=desc"
    apikey=""
 //   &apikey=P2VD4Q197F12TVGTQT8982EAQI254DNJ4Z
    startblock="&startblock=" + blockNumber
    endblock="&endblock=" + blockNumber
        
            return api + module + action + address + sort + startblock + endblock
 
}

f.utils.procTx = function procTx(x) {

len = parseInt(x.input.substr(10 + 32*19,32),16) * 2
t = x.input.substr(10 + 32*20,len)
console.log(t)
}
 

f.utils.searchInternal = function(term,api,apikey) { 


    module="?module=account"
    action="&action=txlistinternal"
    address="&address=" + a.utils.word2address(term)
    sort="&sort=desc"
    apikey=""
 //   &apikey=P2VD4Q197F12TVGTQT8982EAQI254DNJ4Z
/*    &startblock=01211972
    &endblock=99999999
*/
    return api + module + action + address + sort 

}


f.utils.searchShow = function(term) {

url="https://api.polygonscan.com/api?module=account&action=txlist"

f.searchResult = new Array()

fetch(a.utils.searchInternal(term
,a.utils.polygon.api,a.utils.polygon.apikey))
.then( x => x.json())
.then( x => 

{ 

x.result.forEach( x => 
  { 
   search = url + "&startblock=" + x.blockNumber 
   search +=      "&endblock=" + x.blockNumber 
   search +=      "&address=" + x.from
   search +=      "&apikey=" + a.utils.polygon.apikey

   fetch(search)
      .then( x=> x.json() )
      .then( x=> a.searchResult.push(x.result[0]) )
 
  })

setTimeout( function() { 

//a.searchResult.forEach(x => console.log(x.input))
a.searchResult.forEach(a.utils.procTx)

}, 1000)

})

}

// a.searchResult.forEach(procTx)
//
a.utils.eth_sendTransaction = function( to, data ) {

a.myTx ={
      method: 'eth_sendTransaction',
      params: [
        {
          from: ethereum.selectedAddress, 
          to: to,
          value: '1',
          gasLimit: '0x1024',
          maxPriorityFeePerGas: '0x1000000',
          maxFeePerGas: '0x20000000',
          data: '0xdeadbeef0000000000000000' + data.substr(2)
      },
      ]
   }

ethereum.request(a.myTx)
}

a.utils.objToString = function objToString (obj) {
    var str = '';
    for (var p in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, p)) {
            str += '<br>' + p + '::' + obj[p] + '\n';
        }
    }
    return str;
}
