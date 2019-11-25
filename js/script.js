var regex = document.getElementById("regex");
var display = document.getElementsByClassName("display");
var phoneNumberArray = ["1234567890","123-456-7890","(123)4567890","(123)456 7890",
"123 456 7890","(123) 456 7890","(123)-456-7890"];
var phonePattern = /^(|\()(\d{3})(|\)|\-)(|\s|\-)(\d{3})(|\s|\-)(\d{4})$/;
regex.firstChild.nodeValue = phonePattern;
for(i=0;i<phoneNumberArray.length;i++){
    if (phonePattern.test(phoneNumberArray[i]) == true){
        console.log(phoneNumberArray[i]+" exists in the array");
        display[i].firstChild.nodeValue = phoneNumberArray[i]+" exists in the array";
    }else{
        console.log(phoneNumberArray[i]+" does not exist in the array");
        display[i].firstChild.nodeValue = phoneNumberArray[i]+" does not exist in the array";
    }
}