var  evalTransaction = function (r) {

var url=r.url + r.module + r.action + r.address
url = url + r.apikey + '&startblock=' + r.block + '&endblock=' + r.block

fetch(url)
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
}
