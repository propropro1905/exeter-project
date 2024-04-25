// const wallet = new BsvWallet({ key: 'your-private-key' });

async function getBalance(privateKey) {
    try {
        const wallet = new BsvWallet({ key: privateKey });
        const address = await wallet.getAddress();
        const balance = await wallet.getBalance();
        console.log(`Address: ${address}`);
        console.log(`Balance: ${balance}`);
    } catch (error) {
        console.error('Error fetching balance:', error);
    }
}






// var mnemonic;
const bsv = require("bsv");
const mnemonic = new bsv.Mnemonic()
// if (document.querySelector("#mnemonicsPhrase").innerHTML == ""){
//     mnemonic = new bsv.Mnemonic();
//     document.querySelector("#mnemonicsPhrase").innerHTML = mnemonic.toString()
// }
// else{
//     mnemonic=document.querySelector("#mnemonicsPhrase").innerHTML
// }
hdPrivateKey = mnemonic.toHDPrivateKey();
privKey = hdPrivateKey.privateKey;

var pubKey = bsv.PublicKey.fromPrivateKey(privKey);
var address = bsv.Address.fromPrivateKey(privKey);

getBalance(privateKey);



var y = document.querySelector("#pubText");
y.innerHTML = pubKey.toString();
var z = document.querySelector("#address");
z.innerHTML = address.toString();


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