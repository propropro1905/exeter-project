var mnemonic;
if (document.querySelector("#mnemonicsPhrase").innerHTML == ""){
    mnemonic= bsvMnemonic.fromRandom();  
    document.querySelector("#mnemonicsPhrase").innerHTML = mnemonic.toString()
    console.log(mnemonic.toString())
}
else{
    mnemonic=bsvMnemonic.fromString(document.querySelector("#mnemonicsPhrase").innerHTML)
}
// mnemonic=bsvMnemonic.fromString("guide produce great will anchor absorb slab bone ghost reduce fiction salt")
// console.log(mnemonic.toString());
var hdPrivateKey = mnemonic.toHDPrivateKey();
var privKey = hdPrivateKey.privateKey;
var pubKey = bsv.PublicKey.fromPrivateKey(privKey);
var address = bsv.Address.fromPrivateKey(privKey);
document.querySelector("#pubText").innerHTML = pubKey.toString();
document.querySelector("#address").innerHTML = address.toString();
var confirmedBalance = document.querySelector("#confirmedBalance");
var unconfirmedBalance = document.querySelector("#unconfirmedBalance");
fetch("https://api.whatsonchain.com/v1/bsv/main/address/"+ address +"/balance")
.then(response => response.json())
.then(data => {
    confirmedBalance.innerHTML = data.confirmed;
    unconfirmedBalance.innerHTML = data.unconfirmed;
    // console.log(data.toString())
}) ;


var addressCode = 'bitcoinsv:' + address;
// console.log(addressCode)
new QRCode(document.getElementById("qr"), addressCode);

var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

});