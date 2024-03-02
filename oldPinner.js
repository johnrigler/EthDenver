function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

createPinnerHome = function () {

document.getElementById("middle")

middle.innerHTML = "<div id=top></div><div id=header></div><div id=next></div><div id=result></div>"

document.getElementById("top").innerHTML = "";
document.getElementById("header").innerHTML = "";
document.getElementById("next").innerHTML = "";

createHomeButton('header');
a.button('header','testTest','Test test');
a.button('header','searchPrompt','Index Search');
a.button('header','userPrompt','Browse Accounts');
a.button('header','load2','Login to Private Ledger');
// a.button('header','createDigibyte','Digibyte Hash');
a.button('top','createURLTable','Add URL');
a.button('top','createURLImageTable','Add URL with Image Link');
a.button('top','createFreeForm','Free form');
a.button('top','createFileUploader','Upload File (about 60K max.)');


api="https://api.polygonscan.com/"
explorer="https://polygonscan.com/"
startblock="01211972"
endblock="99999999"

polygon_apikey="P2VD4Q197F12TVGTQT8982EAQI254DNJ4Z"
message_index = [];
address_index = [];
a = [];
v = [];	

reader = new FileReader();

counter = 0;

txResult = "";

chatRun();


}

testTest = function () { alert("adf") };

function createHomeButton(id) {

var Menu = document.getElementById(id);

var Button = document.createElement("button");

Button.innerHTML = "Home";
Menu.appendChild(Button);
        Button.onclick = function () { createHome(id); };

}

//// Chat System;


async function chatLoad() {
//        checkNetwork("polygon")
        dA="0x0000000000000000000000000000000000000086"

        console.log("chatLoad()")
        window.chatContract = await chatLoadContract();
               }

async function chatLoadContract() {
                return await new window.web3.eth.Contract(

[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"cashout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"message","type":"string"},{"internalType":"address payable","name":"receiver1","type":"address"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"address payable","name":"receiver2","type":"address"},{"internalType":"uint256","name":"amount2","type":"uint256"},{"internalType":"address payable","name":"receiver3","type":"address"},{"internalType":"uint256","name":"amount3","type":"uint256"},{"internalType":"address payable","name":"receiver4","type":"address"},{"internalType":"uint256","name":"amount4","type":"uint256"}],"name":"tell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

                         , '0x5a2220d56f56db9C9F5B0cb83ff35b42746503a2');
                }

// Chat URL;

createURLExample = function createURLExample() {

        document.getElementById('sendURL').value = "https://looksrare.org/collections/0x118aed2606d02c2545c6d7d2d1021e567cc08922/910138533665814484216286597450905548120769684040"
        document.getElementById('sendURLTitle').value = "Orthoverse: Olwabarbia Token on LOOKSRARE"
        document.getElementById('a0').value = "orthoverse"
        document.getElementById('a1').value = "doom"
        document.getElementById('a2').value = "olwabarbia"
        document.getElementById('a3').value = "0x9F6C05f9F9803f614CbAFEAAbbb1ec0ed867E248"
}

createURLTable = function createURLTable() {

	var T = `<table>`; 
	T += `<tr><td>Title:<td colspan="4"><input type="text" size="88" value="" id="sendURLTitle"</tr>`;
	T += `<tr><td>URL:<td colspan="4"><input type="text" size="88" value="" id="sendURL"</tr>`;
        T += `<tr><td>Search Words:`;
        T += `<td><input type="text" size="20" value="" id="a0"</td>`;
        T += `<td><input type="text" size="20" value="" id="a1"</td>`;
        T += `<td><input type="text" size="20" value="" id="a2"</td>`;
        T += `<td><input type="text" size="20" value="" id="a3"</td>`;
	T += `</table>`;
        T += `<button onclick='checkNext("URL")'>Next</button>`;
        T += `<button onclick='createClear()'>Clear Options</button>`;
        T += `<button onclick='createURLExample()'>Example</button>`;
        T += `<div id=next></div>`;
	document.getElementById("middle").innerHTML = T;
}

// Chat URLImage;

function createURLImageTable(id) {

        var T = `<table>`; 
        T += `<tr><td>Link to Image:<td colspan="4"><input type="text" size="88" value="" id="sendURLTitle"</tr>`;
        T += `<tr><td>URL:<td colspan="4"><input type="text" size="88" value="" id="sendURL"</tr>`;
        T += `<tr><td>Search Words:`;
        T += `<td><input type="text" size="20" value="" id="a0"</td>`;
        T += `<td><input type="text" size="20" value="" id="a1"</td>`;
        T += `<td><input type="text" size="20" value="" id="a2"</td>`;
        T += `<td><input type="text" size="20" value="" id="a3"</td>`;
        T += `</table>`;
        T += `<button onclick='checkNext("URLImage")'>Next</button>`;
        T += `<button onclick="createClear()">Clear Options</button>`;
        T += `<button onclick="createURLImageExample()">Example</button>`;
        document.getElementById(id).innerHTML = T;
}

function createURLImageExample() {

        document.getElementById('sendURL').value = "https://rigler.org"
        document.getElementById('sendURLTitle').value = "https://rigler.org/images/27757198-47.png"
        document.getElementById('a0').value = "free image"
        document.getElementById('a1').value = "image"
        document.getElementById('a2').value = "abstract"
        document.getElementById('a3').value = ""
}

// Chat File Uploader;
//
function createFreeForm(id) {

	var T = `<table>`;
	T += `<tr>`;
        T += `<textarea cols=60 rows=10 id="message"></textarea>`;
        T += `<tr><td>Search Words:`;
        T += `<td><input type="text" size="20" value="" id="a0"</td>`;
        T += `<td><input type="text" size="20" value="" id="a1"</td>`;
        T += `<td><input type="text" size="20" value="" id="a2"</td>`;
        T += `<td><input type="text" size="20" value="" id="a3"</td>`;
        T += `</table>`;
        T += `<button onclick='checkFreeFormNext("Message")'>Next</button>`;
        T += `<button onclick="createFreeClear()">Clear Options</button>`;
        document.getElementById(id).innerHTML = T;
}


function createFileUploader(id) {

        var T = `<table>`;
	T += `<input type="file" id="file" /> <button onclick='uploadFile()'>Load File</button>`
        T += `<tr><td>Search Words:`;
        T += `<td><input type="text" size="20" value="" id="a0"</td>`;
        T += `<td><input type="text" size="20" value="" id="a1"</td>`;
        T += `<td><input type="text" size="20" value="" id="a2"</td>`;
        T += `<td><input type="text" size="20" value="" id="a3"</td>`;
        T += `</table>`;
        T += `<button onclick='checkFileNext("File")'>Next</button>`;
        T += `<button onclick="createClear()">Clear Options</button>`;
        document.getElementById(id).innerHTML = T;
}

function uploadFile() {

        if(document.querySelector("#file").value == '') {
               alert('No file selected');
         return;
        }

        var file = document.querySelector("#file").files[0];
	console.log(file)

        // reader = new FileReader();
        reader.readAsBinaryString(file);

}

// Chat  Iframe;

function createIframe(id,frame) {

var Menu = document.getElementById(id);

Menu.innerHTML = "";

var Frame = document.createElement("iframe");

Frame.setAttribute('src',frame);
Frame.setAttribute('width',900);
Frame.setAttribute('height',232);

Menu.appendChild(Frame);

	}

function createIframeButton(id,frame,title) {

var Menu = document.getElementById(id);

var Button = document.createElement("button");

Button.innerHTML = title;
Menu.appendChild(Button);
	Button.onclick = function () { createIframe(id,frame) };

}

function tempShow(data) {
	console.log(data)
}

chatShow = showPolygon  = function chatShow(data) {

	clearSpan("result")
        message = "<td><td><table border=1><th>Date<th>Polygon Ref.<th>User/Indexes</th>"

	console.log(data)

        for( x = 0 ; x < data.result.length ; x++ )
        {

        // calculate

        const milliseconds = data.result[x].timeStamp * 1000 // 1575909015000
        const dateObject = new Date(milliseconds)
        const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15

        methodId = data.result[x].input.substr(0,10);

        from = data.result[x].from;
	fromShow = from.substr(0,6) + '...' + from.substr(34);
	fromShow = `<button onclick="txList('${from}',chatShow)">${fromShow}</button>`;


        to = data.result[x].to;
        toShow = to.substr(0,6) + '...' + to.substr(34);
        toShow = `<button onclick="txList('${to}',chatShow)">${toShow}</button>`;


        blockNumber = data.result[x].blockNumber;
        blockHash = data.result[x].blockHash;
        txHash = data.result[x].hash;
        txIndex = data.result[x].transactionIndex.toString();

        rest=data.result[x].input.substr(32*0+10)

        if(blockNumber == "29691730")continue;
        if(blockNumber == "29688768")continue;


        // render
		message += `<tr><td> ${humanDateFormat}`;
		message += `<td><a href=${explorer}tx/${data.result[x].hash.toString()}>`;
	        message += `${data.result[x].blockNumber.toString()}`;
		message += `</a><td>${fromShow}`;
			message += `<br>${toShow}<hr>`;

		try { message += eval(`MethodId_${methodId}`)( rest ) }
			catch(err) { 
		console.log(err.message)
   // 		Text = "[default]"
     //   	for(x = 0; x < rest.length; x = x + 32)
    //			Text = Text + "<br>" + rest.substr(x,32)
		message += "<td>" + methodId 
//    		message += Text + "<td>" + hex2a(rest)
		}

                message += "</tr>";
        }
        message += "</table>"
        updateSpan("middle",message)
}

function chatRun() {

        apikey = polygon_apikey					    
        txList("0x5a2220d56f56db9C9F5B0cb83ff35b42746503a2",chatShow)

}

MethodId_0x3740071f = function ( Rest )
      {

       addresses = Rest.substr(32*2+24);

        addr = [];
        for ( var y = 0; y < 4; y++)
          {
          addr[y] = address2word("0x" + addresses.substr(128*y,40))
          if(addr[y].substr(0,8) == 'tinyurl:')

          addr[y] = `<a href=https://tinyurl.com/${addr[y].substr(8)}>${addr[y]}</a>`;
          }

	    var indx = "";

            for ( var y = 0; y < 4; y++)
                    indx += "<br>" + addr[y];

	     indx += "<td>";

             imageDecode="https://rigler.org/a/server/evm_img_decode.php?address="

              Text = Rest.substr(640);
              fnal = "";

               if(hex2a(Text.substr(0,10)) == '<?php')
              {
              console.log(hex2a(Text))
                      return indx + "PHP code sent to console.log()"
              }

                if(hex2a(Text.substr(0,2)) == '(')
                        {
                        lisp = hex2a(Text)
                      //  console.log(lisp)
                        lisp_ = lisp.length + 2
                return indx + evalLISP(hex2a(Text.substr(2,lisp_)))
                        }

                if(Rest.substr(640,1) == 'c')
                 {
                         return indx + "<br><img width=400px src=" + imageDecode + from + "&blkpos=" + blockNumber + "-" + txIndex + ">"
                //       return indx + from  + "|" + blockNumber + "|" + txindex + "|"
                 }
                else
              {
                      return indx + hex2a(Text)
              }
      }

function MethodId_0x095ea7b3 ( Rest ) { return "<td>SKIP" };
function MethodId_0x6132ccca ( Rest ) { return "<td>old globaltalk" }; 
function MethodId_0x5c0ef2f1 ( Rest ) { return "<td>Orthoverse Data: wrong chain" }; 
function MethodId_0x18160ddd ( Rest ) { return "<td>Raremints" }; 
function MethodId_0x4bafb4a1 ( Rest ) { return "<td>transferMaticBulk(address[] addresses)" };

function MethodId_0x470bb62b (Rest)
{
        Rest = Rest.substr(32*5)
        length = parseInt(Rest.substr(0,32),16) * 2
        Rest = Rest.substr(32)
        readURL = hex2a(Rest.substr(0,length))
        count = Math.ceil(length/32)
        Rest = Rest.substr(32*count)
        while(parseInt(Rest.substr(32,32),16) == 0)
            Rest = Rest.substr(32)
            Rest = Rest.substr(32)

        length2=parseInt(Rest.substr(0,32),16) * 2
        Rest = Rest.substr(32)
        readTitleH=Rest.substr(0,length2)
//      readTitle=decodeStr(readTitleH)
        readTitle=hex2a(readTitleH)

     return "<td><a href=" + readURL + ">" + readTitle + "</a>"
}


function MethodId_0x8965356f ( Rest ) {

        payload = Rest.substr(32*4)
        if(payload.substr(0,2) == "20")payload = payload.substr(2)
        checkLISP = payload.substr(0,2)

        getLen = parseInt(Rest.substr(32*3,32),16) * 2
        payload = Rest.substr(32*4+2,getLen - 2)
           if(checkLISP == "28")
          {
          if(payload.substr(0,2) == "20")payload = payload.substr(2)
             if(hex2a(payload.substr(0,14)) == "random ")
                if(hex2a(payload.substr(-2)) == ")")
                  {
                  payload = payload.substr(14,payload.length - 16)
                  if(hex2a(payload.substr(-2)) == " ")payload = payload.substr(0,payload.length -2)
                  payload_s = hex2a(payload)

                  Command_arr = payload_s.split(" ")
            //      console.log(Command_arr)
                  result = random(Command_arr)

	     return "<td>" + result;
		  }}}

////// End of Chat Systen;


// Search 


function searchShow(internalTx) {
 //       clearSpan("searchresult")
        clearSpan("body")
        message = ""
        var toDisplay = "";
        console.log(internalTx.result)
        searchResult = Array();

        for( x = 0 ; x < internalTx.length ; x++ )
        {
        counter = counter + 1;
        blockNumber = internalTx[x].blockNumber.toString();
        fromAddress = internalTx[x].from.toString();
        // txSingle(fromAddress,blockNumber);

        url2=api + 'api?module=account&action=txlist&address='
        url2 = url2 + fromAddress + '&sort=desc&apikey=' + apikey + '&startblock='
        url2 = url2 + blockNumber + '&endblock=' + blockNumber
		console.log(fetch(url2))

   /*     fetch(url,
          function(externalTx)
            {
            t = externalTx.result[0]
            toSend = "<br>" + t.timeStamp + " " + t.blockNumber + " " + t.from + "<br>"

	     
            methodId = t.input.substr(0,10)
            toSend = toSend  + "MethodID: " + methodId + "<br>"
            Rest = t.input.substr(32*2+10)
            toSend = toSend + address2word("0x" + Rest.substr(24,40)) + "<br>"
            console.log(Rest)
            Rest = Rest.substr(32*4)
            toSend = toSend + address2word("0x" + Rest.substr(24,40)) + "<br>"
            Rest = Rest.substr(32*4)
            toSend = toSend + address2word("0x" + Rest.substr(24,40)) + "<hr>"
            textLength = parseInt(Rest.substr(32*9,32),16) * 2

            toSend = toSend + hex2a("0x" + Rest.substr(32*10,textLength))
            updateSpan("body",toSend + "<hr><hr>")
            })
*/          }
}

searchPrompt =  function() {
        var text;
        let term = prompt("Enter one search word:", "banana");
        if (term == null || term == "") {
                text = "User cancelled the prompt.";
        } else {
                txListInternal(term)
        }
}

userPrompt = function() {
        var text;
        let term = prompt("Enter any user address", "0xA03A374ef96D0aCe8Ca6293d7371FC7Fa1D8edB1");
        if (term == null || term == "") {
                text = "User cancelled the prompt.";
        } else {
                txList(term,"chatShow")
        }
}


var  evalTransaction = function (address,block,startline) {


	polygon_apikey="P2VD4Q197F12TVGTQT8982EAQI254DNJ4Z"
	apikey = polygon_apikey;


        var url="https://api.polygonscan.com/" + 'api?module=account&action=txlist&address='
        url = url + address + '&sort=desc&apikey=' + apikey + '&startblock='
        url = url + block + '&endblock=' + block

        $.getJSON(url,
        function(data)
                {
                var payload = data.result[0].input.substr(startline * 32 + 10)
                eval(hex2a(payload.substr(32, parseInt(payload.substr(0,32),16) * 2 )))
                })
        }

var readSingleTransaction = function (address,block) {

        polygon_apikey="P2VD4Q197F12TVGTQT8982EAQI254DNJ4Z"
        apikey = polygon_apikey;


        var url="https://api.polygonscan.com/" + 'api?module=account&action=txlist&address='
        url = url + address + '&sort=desc&apikey=' + apikey + '&startblock='
        url = url + block + '&endblock=' + block

        $.getJSON(url,
        function(data)
                {
		txResult = data;
     //           var payload = data.result[0].input.substr(startline * 32 + 10)
       //         eval(hex2a(payload.substr(32, parseInt(payload.substr(0,32),16) * 2 )))
                })

}

// evalTransaction("0xe46e46bc205df560874c18f2430c18a604253120","29778671",19)




// Metamask Tools;

async function loadWeb3() {
                        if(window.ethereum) {
                                window.web3 = new Web3(window.ethereum);
                                window.ethereum.enable();
                                }
                        }

async function getCurrentAccount() {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        console.log(accounts);
        return accounts[0];
}

async function load() {
        await loadWeb3();
	window.chatContract = await chatLoadContract();
//	await getCurrentAccount().then(function (x){signMessage("Carolyn Royce",web3.utils.toChecksumAddress(x));})

               }

async function load2(message) {
//        await loadWeb3();
  //      window.chatContract = await chatLoadContract();
	console.log(message)
        await getCurrentAccount().then(function (x){
               var thisName = "New User";
               switch(web3.utils.toChecksumAddress(x)){
                        case "0xE46E46Bc205DF560874C18F2430C18a604253120": thisName = "Admin."; 
                        break;
                        case "0xd2373E0088838aE7Dd3b0bD909daEEA9fC87156e": thisName = "Carolyn Royce";
                        break;
                        case "0x6fA5DD7FdbB934897860b770b76A35A0Deb12146": thisName = "Gerald Claymore";
                        break;
                        case "0x71dac33bA48c4066F8A5605a708C090C7f32C6A0": thisName = "John Smith (QHIN)";
                        break;
                                }


             console.log("thisName");
             signMessage(thisName,web3.utils.toChecksumAddress(x),message);


	       })
};




async function executeContract() {

       console.log("executeContract")

	dA="0x0000000000000000000000000000000000000086"

	for (x = 0; x < 4; x ++)
{
if(a[x] == "0x0000000000000000000000000000000000000000")v[x] = 0;
console.log(a[x] + " " + v[x]);
}

 

        const account = await getCurrentAccount();
	console.log(account);
  //      var getMessage = document.getElementById('message').value;
        //
       await a.oldPinner.contract.tell(fullMessage,a[0],v[0],a[1],v[1],a[2],v[2],a[3],v[3]).send({ from: account })
        .then(function (tempResult) {

        for(x = 0; x < 4; x ++)
        {
                a[x] = dA
                v[x] = 0
        }

     updateSpan("next",tempResult.blockNumber + "<br><h1>" + tempResult.transactionHash  + "</h1>")

                    }).catch(error => {
                    console.log(error);
                 });
        }


// Other Tools;

txListInternal = function(address) {

url=api + 'api?module=account&action=txlistinternal&address='
url = url + word2address(address) + '&sort=desc&apikey=' + apikey + '&startblock='
url = url + startblock + '&endblock=' + endblock

resultArray = new Array();

middle.innerHTML = "<h2>Results</h2>"

fetch(url).then( x =>  x.json() ).then(
        data => {
		a.search = data;
                txListInternalIterate(0)

         })
}

txListInternalIterate = function(pos) {

//middle.innerHTML = "<td><td><table border=1><th>Date<th>Polygon Ref.<th>User/Indexes</th>"
footer.innerHTML = ""


if(pos < a.search.result.length)
   {
   a.polygonProvider.getTransaction(a.search.result[pos].hash)
     .then( x => { 
     a.searchResults.push(x)
     console.log(a.searchResults.data)
 
   result = a.searchResults[pos];
   methodId = result.data.substr(0,10)   

   method_3740071f(result.data.substr(10))

   middle.innerHTML 
       += "<br><div style='float:left'>" + result.chainId + " | </div>"
       + "<div style='float:left'>" + result.blockNumber + " | </div>"
       + "<div style='flat:left'>" +  method_3740071f(result.data.substr(10))  + " | </div>"
       + "</div>"
   setTimeout(() => txListInternalIterate(pos + 1),1000)
   }) 
   }
   else
   middle.innerHTML += "<br><hr>"
 
}

method_3740071f = function(rest) {


return hex2a(rest.substr(32*20))

}


showResultArray = function(resultArray) {

       console.log(resultArray[0].data);

}


function txList(addy,display) {

        // address is the search account
        // display is the name of the function that renders the results

        url = api + 'api?module=account&action=txlist&address='
	url += `${addy}&sort=desc&apikey=${apikey}&startblock=`;
        url = url + startblock + '&endblock=' + endblock

fetch(url).then( x =>  x.json() ).then(
	data => {  
		  a.oldPinner.fullQuery = data;
		  chatShow(data); 
		  console.log(data); 
	        })

}

function updateSpan(span,target) {
  const resultEl = document.getElementById(span);
  resultEl.innerHTML = resultEl.innerHTML + target;
}

function clearSpan(span) {
  const resultEl = document.getElementById(span);
  resultEl.innerHTML = "";
}

function readSpan(span) {
  const resultEl = document.getElementById(span);
  return resultEl.innerHTML
}

/*
a.button = function (id,tag,title) {

  /*Tag is always the name of the function that you call.*/

  var Button = document.createElement("button");
  Button.innerHTML = title;
  Button.id = tag;
  document.getElementById(id).appendChild(Button);
}
*/
function createClear() {

        document.getElementById('sendURL').value = "";
        document.getElementById('sendURLTitle').value = "";
	
	message_index[0] = "";
		
	for( x = 0; x < 4; x++)
	{
	      document.getElementById(`a${x}`).value = "";
	      address_index[x] = "";
	}
}


function createFreeClear() {

        document.getElementById('message').value = "";

        message_index[0] = "";

        for( x = 0; x < 4; x++)
        {
              document.getElementById(`a${x}`).value = "";
              address_index[x] = "";
        }
}


function checkFreeFormNext(type) {

        var Message = document.getElementById('message').value;

        if(type == 'Message')message_index[0] = Message;

        for(x = 0; x < 4; x++)
        {
                address_index[x] = document.getElementById(`a${x}`).value;
        }

       document.getElementById('next').innerHTML = `<br> ${message_index[0]} <br><br>`;

       a.button('next','sendMessage','Send');

}


function checkNext(type) {
        alert("checkNext")
        var URL = document.getElementById('sendURL').value;
        var Title = document.getElementById('sendURLTitle').value;

	if(type == 'URL')message_index[0] = `<a href=${URL}>${Title}</a>`; 
	if(type == 'URLImage')message_index[0] = `<a href=${URL}><img src=${Title} width=200px></a>`;

        for(x = 0; x < 4; x++)
        {
                address_index[x] = document.getElementById(`a${x}`).value;
        }

       document.getElementById('next').innerHTML = `<br> ${message_index[0]} <br><br>`; 

       a.button('next','sendMessage','Send');

}

function checkFileNext() {


        if(document.querySelector("#file").value == '') {
               alert('No file selected');
         return;
        }

        var file = document.querySelector("#file").files[0];
        console.log(file)

        reader = new FileReader();
        reader.readAsBinaryString(file);

        for(x = 0; x < 4; x++)
        {
                address_index[x] = document.getElementById(`a${x}`).value;
        };

//        message_index[0] = reader.result;

       document.getElementById('next').innerHTML = ""
       a.button('next','sendMessage','Send');

}

function checkDigibyte() {


        if(document.querySelector("#file").value == '') {
               alert('No file selected');
         return;
        }

        var file = document.querySelector("#file").files[0];
        console.log(file)

        reader = new FileReader();
        reader.readAsBinaryString(file);

        for(x = 0; x < 4; x++)
        {
                address_index[x] = document.getElementById(`a${x}`).value;
        };

//        message_index[0] = reader.result;

       document.getElementById('next').innerHTML = ""
       a.button('next','sendMessage','Send');

}

sendMessage = function sendMessage() {

	var convert = [];
	const addr = "0x";
	console.log(address_index);

	if(message_index != null)
		fullMessage = message_index[0];

	if(reader.result != null )fullMessage = reader.result;

	for( var x = 0 ; x < 4 ; x = x + 1 )
	{
						     console.log(x)
	    if(address_index[x].substr(0,2) != addr)
              {
	      a[x] = word2address(address_index[x]);
	      v[x] = 1;
	      }
	    else 
	      {
	      a[x] = address_index[x];
	      v[x] = 2;
              }
	}
	executeContract()
}

var hex2a = function (hexx) {

        var hex = hexx.toString();//force conversion
        var str = '';
        for (var i = 0; i < hex.length; i += 2)
        {
                str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        return str;
}

function address2word( addy )
{
var hex=""

if(addy == "0x0000000000000000000000000000000000000086")return ""
if(addy.substr(38) != "0000")
        {
        return addy
        }
for ( y = 2 ; y < addy.length - 2 ; y = y + 2 )
   {
   byte = addy[y] + addy[y+1]
   if(byte != "00")
        hex = hex + byte
   }

   return hex2a(hex)

}


function word2address( string )
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

var  evalTransaction = function (address,block,startline) {

        var url="https://api.polygonscan.com/" + 'api?module=account&action=txlist&address='
        url = url + address + '&sort=desc&apikey=' + polygon_apikey + '&startblock='
        url = url + block + '&endblock=' + block

        $.getJSON(url,
        function(data)
                {
                var payload = data.result[0].input.substr(startline * 32 + 10)
                eval(hex2a(payload.substr(32, parseInt(payload.substr(0,32),16) * 2 )))
                })
        }

function random(Array)
{

        // This iterates through 

        Text = ""
        total = 0
        position = parseInt(blockHash.substr(2,1),16) + 2
        offset = 0

  //      console.log(Array.length)

        for(y = 0 ; y < Array.length; y = y + 1)
        {
//                console.log(Array[y])
        Text = Text + " " + random2(parseInt(Array[y],10),position + offset)
        }

        return Text
}

function random2(x,position) {

        // This figures out how many bytes to use to get a 
        // good source of randomness.  This can probably
        // be implemented as bit logic or in a cleaner
        // way. But the idea is that if you want 16
        // possible integers, then you can use one
        // byte of the blockHash and one byte of the txHash
        // divided by two. If you want 17, then you would have 
        // to use two bytes, but since 17 isn't divisible evenly
        // by two, this would cause problems. I guess a math
        // nerd can tell me if this is a wrong assumption.
        //
        // For the dice game, this is overkill because you never
        // have a 17 sided dice anyway.

        // I don't think magic is used.
magic=16 % x
magic2=0

switch(x) {
        case 2: magic2=1; break;
        case 3: magic2=3; break;
        case 4: magic2=1; break;
        case 5: magic2=5; break;
        case 6: magic2=3; break;
        case 7: magic2=7; break;
        case 8: magic2=1; break;
        case 9: magic2=3; break;
        case 10: magic2=5; break;
        case 11: magic2=11; break;
        case 12: magic2=3; break;
        case 13: magic2=13; break;
        case 14: magic2=7; break;
        case 15: magic2=5; break;
        case 16: magic2=1; break;
        case 17: magic2=17; break;
        case 18: magic2=6; break;
        case 19: magic2=19; break;
        case 20: magic2=5; break;
        case 21: magic2=7; break;
        case 22: magic2=11; break;
        case 23: magic2=23; break;
        case 24: magic2=3; break;
        case 25: magic2=5; break;
        case 26: magic2=13; break;
        case 27: magic2=3; break;
        case 28: magic2=7; break;
        case 29: magic2=29; break;
        case 30: magic2=30; break;
        case 31: magic2=31; break;
        case 32: magic2=2; break;
        case 40: magic2=5; break;
        case 50: magic2=5; break;
        case 75: magic2=5; break;
        case 100: magic2=5; break;
}

old = position
base = parseInt(txHash.substr(position,magic2),16)
base2 = parseInt(blockHash.substr(position,magic2),16) + base
position = position + magic2
offset = offset + magic2
val = base2 % x
val = val + 1
total = total + val
return x + ":" + val

}


function evalLISP(Code)
                {
                        fCommand = Code
                        fCommand = fCommand.replace(/\).*/,'');
                        fCommand = fCommand.trim()
                   //   console.log(">" + fCommand + "<")
                        Command_arr = fCommand.split(" ")
                        var Command = Command_arr.shift()
                        console.log(Command_arr)

           //                     switch(Command){
             //                     case "random": return random(Command_arr)
               //                 break;
                 //                 case "hide": return hide(Command_arr)
                   //             break;
                     //           }
                        return "||" + Command + "|" + Code
                }


/// Sign Message

/*
async function signMessage( name , address ) {

// await getCurrentAccount().then(console.log()) 

//addy = web3.utils.toChecksumAddress(address)
await web3.eth.personal.sign(word2address(`Sign in system as ${name}`),address).then(function (x){console.log(x)})

}
*/
async function signMessage( name , address , message ) {

// await getCurrentAccount().then(console.log()) 

	//addy = web3.utils.toChecksumAddress(address)

let ms = Date.now();
console.log(ms);

await web3.eth.personal.sign(word2address(`${ms}`),address).then(function (x){processCode(x,name,address,ms)})

}

function processCode(x,name,address,message) {
	console.log(x)

//	var url = `https://rigler.org/src/create_dgb.php?data=${ms}&signature=${x}&name=${name}&address=${address}`;
	var url = `https://rigler.org/dgb/index.php?data=${message}&signature=${x}&name=${name}&address=${address}`;
        window.open(url, "sendDigibyte", "height=400,width=800");

var form = $('<form action="' + url + '" method="post">' +
        '<input type="text" name="signature" value="' + x + '" />' +
        '<input type="text" name="name" value="' + name + '" />' +
        '<input type="text" name="address" value="' + address + '" />' +

  '</form>');
// $('body').append(form);
// form.submit();


}

// await getCurrentAccount().then(function (x){signMessage("Carolyn Royce",web3.utils.toChecksumAddress(x));})



// Begin;

load();
	
createPinnerHome();

