
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


