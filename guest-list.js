var guestList = ["Angela", "John", "Pam", "James", "Lara", "Jason"];

var  givenName = prompt("Gimme your name");
var rightFormat = formatName(givenName);
var response = checkGuest(rightFormat);
alert(response + rightFormat + "!");


function formatName(name){
    var firstLetter = name.slice(0,1);
    var restName = name.slice(1,name.length);
    firstLetter = firstLetter.toUpperCase();
    restName = restName.toLowerCase();
    var final = firstLetter + restName;
    return final;
}


function checkGuest(name) {
   if (guestList.includes(name)) {
    var response = "Welcome ";
} else {
    var response = "Get outta here ";
} 
    return response;
}
