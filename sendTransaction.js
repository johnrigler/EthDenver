a.utils.eth_sendTransaction = function( to, data ) {

a.myTx ={
      method: 'eth_sendTransaction',
      params: [
        {
          from: ethereum.selectedAddress, 
          to: to,
          value: '1',
          gasLimit: '0x5028', 
          maxPriorityFeePerGas: '0x3b9aca00', 
          maxFeePerGas: '0x2540be400', 
          data: '0xdeadbeef0000000000000000' + data 

      },
      ]
   }
}

console.log("ethereum.request(a.myTx)")
