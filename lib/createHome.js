function createHome( ) {

document.getElementById("top").innerHTML = "";
document.getElementById("header").innerHTML = ""; /// kkkkkkkkk
document.getElementById("next").innerHTML = "";

// const queryString = window.location.search.substr(9);
        const urlParams = new URLSearchParams(queryString);

address = "0xF4726Df247b5b149Cdc1487BDb0BaFB94B7104f8"
addr = "0xD4143Cf62546D1f6Cbcebe0F63406b0068ac2ac2"

createHomeButton('header');
createButton('header','searchPrompt()','Index Search');
createButton('header','userPrompt()','Browse Accounts');
// createButton('header','createDigibyte("top")','Digibyte Hash');
createButton('top','createURLTable("top")','Add URL');
createButton('top','createURLImageTable("top")','Add URL with Image Link');
createButton('top','createFreeForm("top")','Free form');
createButton('top','createFileUploader("top")','Upload File (about 60K max.)');

api="https://api.polygonscan.com/"
explorer="https://polygonscan.com/"
startblock="01211972"
endblock="99999999"

apikey="P2VD4Q197F12TVGTQT8982EAQI254DNJ4Z"

url="https://api.polygonscan.com/" + 'api?module=account&action=txlist&address='
url = url + addr + '&sort=desc&apikey=' + apikey + '&startblock='
url = url + startblock + '&endblock=' + endblock

console.log(url)

message_index = [];
address_index = [];
a = [];
v = []; 

reader = new FileReader();

counter = 0;

txResult = "";

 //       txList("0x5a2220d56f56db9C9F5B0cb83ff35b42746503a2",chatShow)
 //                txList(queryString,chatShow) /// kkkkkkkkkk
 //


}

function createHomeButton(id) {

var Menu = document.getElementById(id);

var Button = document.createElement("button");

Button.innerHTML = "Home";
Menu.appendChild(Button);
        Button.onclick = function () { createHome(id); };

}

