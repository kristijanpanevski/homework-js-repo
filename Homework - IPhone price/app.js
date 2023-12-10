console.log("Script is working");

let PhonePrice = 119.95;

let phonesQuanity = 30;

let phoneTaxPercent = 5;

let PhonePriceTaxed = (PhonePrice * phoneTaxPercent) / 100 + PhonePrice;

let phonesTotal = phonesQuanity * PhonePriceTaxed;

console.log(phonesTotal);
