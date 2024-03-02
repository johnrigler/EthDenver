a.utils.randomBase64 = function() {

y = new Uint8Array(8)

for( x = 0; x < 8; x++ ){ y[x] = Math.ceil(Math.random(256)*256) }

return base64js.fromByteArray(y)

}

val = a.utils.randomBase64()

console.log(val)
val = base64js.toByteArray(val)

a.utils.base64ToHex = function( val ) {
finalNum = ""
  for(x = 0; x < 8; x++){
    finalNum += val[x].toString(16).padStart(2,"0")
  }
return finalNum
}

console.log(a.utils.base64ToHex(val))

