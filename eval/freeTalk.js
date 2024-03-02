f = new Array();
f.abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"cashout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"map","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"artifact","type":"string"},{"internalType":"string","name":"body","type":"string"}],"name":"mapArtifact","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"message1","type":"string"},{"internalType":"string","name":"message2","type":"string"},{"internalType":"address[]","name":"index","type":"address[]"}],"name":"tell","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]

f.contract = new ethers.Contract("0x0076416C84c7151CaEfA74C3e09d6eBF2f296BA0",f.abi,ethers.getDefaultProvider(137))

setTimeout(() => {
f.contract.map("easyBase.ipfs").then( x => {
     f.ipfs = x;
     console.log(f)
//      footer.innerHTML += `<a href=https://ipfs.io/ipfs/${x}> Latest on IPFS: ${x}</a>`; 
     })

   a.freeTalk = f;
   },"1000");
