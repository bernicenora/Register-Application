//Validating a US Phone number
var regexphone = document.getElementById("regexphone");
var displayphone = document.getElementsByClassName("displayphone");
var displayPhoneNumberArray = document.getElementById("displayPhoneNumberArray");
var phoneNumberArray = ["1234567890","123-456-7890","(123)4567890","(123)456 7890",
"123 456 7890","(123) 456 7890","(123)-456-7890"];

displayPhoneNumberArray.firstChild.nodeValue=phoneNumberArray;

var phonePattern = /^(|\()(\d{3})(|\)|\-)(|\s|\-)(\d{3})(|\s|\-)(\d{4})$/;
regexphone.firstChild.nodeValue = phonePattern;
for(i=0;i<phoneNumberArray.length;i++){
    if (phonePattern.test(phoneNumberArray[i]) == true){
        console.log(phoneNumberArray[i]+" exists in the array");
        displayphone[i].firstChild.nodeValue = phoneNumberArray[i]+" exists in the array";
    }else{
        console.log(phoneNumberArray[i]+" does not exist in the array");
        displayphone[i].firstChild.nodeValue = phoneNumberArray[i]+" does not exist in the array";
    }
}

//Validating a US zip code
var regexzip = document.getElementById("regexzip");
var displayzip = document.getElementsByClassName("displayzip");
var displayZipCodeArray = document.getElementById("displayZipCodeArray");
var zipCodeArray=["85282","85222","85233-6001","9601","93030-4005","4444-5555"];
displayZipCodeArray.firstChild.nodeValue = zipCodeArray;
var zipPattern=/^(\d{5}-)|(\d{5})(|\d{4})$/;

regexzip.firstChild.nodeValue = zipPattern;
for(i=0;i<zipCodeArray.length;i++){
    if (zipPattern.test(zipCodeArray[i]) == true){
        console.log(zipCodeArray[i]+" exists in the array");
        displayzip[i].firstChild.nodeValue = zipCodeArray[i]+" exists in the array";
    }else{
        console.log(zipCodeArray[i]+" does not exist in the array");
        displayzip[i].firstChild.nodeValue = zipCodeArray[i]+" does not exist in the array";
    }
}
