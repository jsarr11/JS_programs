function whosPaying(names) {
    var nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    
    var luckyOne = Math.floor((Math.random()) * nameList.length);
    var output = nameList[luckyOne] + " is going to buy lunch today!";
    return output;
}
