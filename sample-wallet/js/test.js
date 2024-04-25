const bsv = require('bsv');

// Generate a new mnemonic phrase
const mnemonic = new bsv.Mnemonic();
console.log('Mnemonic Phrase:', mnemonic.toString());

// Convert the mnemonic to a seed
const seed = mnemonic.toSeed();