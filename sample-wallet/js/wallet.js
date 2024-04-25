var mnemonic=bsvMnemonic.fromRandom();
// if (document.querySelector("#mnemonicsPhrase").innerHTML == ""){
//     mnemonic= bsvMnemonic.fromRandom();  
//     // document.querySelector("#mnemonicsPhrase") = mnemonic.toString()
//     console.log(mnemonic.toString())
// }
// else{
//     mnemonic=bsvMnemonic.fromString(document.querySelector("#mnemonicsPhrase").innerHTML)
// }
function generateFromMnemonics(mnemonic){
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
    }) ;

    //generate qrcode
    var addressCode = 'bitcoinsv:' + address;
    var qrCode=document.getElementById("qr");
    console.log(qrCode)
    if (qrCode.hasChildNodes()){
        qrCode.innerHTML="";
    }
    new QRCode(document.getElementById("qr"), addressCode);    
}
var showMnemonics=()=>{
    document.querySelector("#mnemonicsPhrase").innerHTML = mnemonic.toString();

}
var generateMnemonics=()=>{
    mnemonic=bsvMnemonic.fromString(document.querySelector("#mnemonicsPhrase").innerHTML);
    generateFromMnemonics(mnemonic);
}
generateFromMnemonics(mnemonic)
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