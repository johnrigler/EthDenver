vin='[{"txid":"eae83654a91eff71f57cad13b20fdfcbd03fd343f87a471d766320ac0fee0744","vout":1}]'

echo $vin | jq .
DAx="DAxBiGxAUDioxDYNAMiTEzzzzzzzVuLtXe"
DBx="DBxYoUTUBEvCoMzzzzzzzzzzzzzzZ31xMU"
DCx="DCxEeMC2zzzzzzzzzzzzzzzzzzzzXHTAbL"
change="D9bGJpAFcNQfqU63kbyWjn6JKithoZM4Xw"
data="68747470733a2f2f7777772e796f75747562652e636f6d2f77617463683f763d634854446b4a2d6251714d266c6973743d5244634854446b4a2d6251714d2673746172745f726164696f3d31"
vout="{\"$DAx\":0.01132,\"$DBx\":0.01132,\"$DCx\":0.01132,\"data\":\"$data\",\"$change\":19}"

echo $vout | jq .

echo $data | xxd -p -r
echo

crt=$(dogecoin-cli createrawtransaction $vin $vout)

frt=$(dogecoin-cli fundrawtransaction $crt)

echo $frt
# dogecoin-cli decoderawtransaction $crt
