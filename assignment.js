// Find Feet to Miles

function feetToMile(feetValue) {
    var totalMile = feetValue / 5280;

    if (feetValue == 0 || feetValue < 0) {
        return "Mile can not be negative or Zero";
    }
    else {
        return totalMile;
    }

}
// var mileResult = feetToMile(15000);
// console.log("Total Mile is:", mileResult);

//Find wood calculation

function woodCalculator(chair, table, bed) {
    var chairWoodCount = chair * 1;
    var tableWoodCount = table * 3;
    var bedWoodCount = bed * 5;
    var totalWood = chairWoodCount + tableWoodCount + bedWoodCount;
    return totalWood;
}
// var woodResult = woodCalculator(5, 7, 10);
// console.log("Total Wood is:", woodResult);

//find brick calculation 

function brickCalculator(brick) {
    var tenFloorbrick = 15 * 1000 * brick;
    var twentyFloorbrick = 12 * 1000 * brick;
    var thirtyFloorbrick = 10 * 1000 * brick;
    if (brick <= 10) {
        return tenFloorbrick;
    }
    if (brick <= 20) {
        return twentyFloorbrick + 150000;
    }
    if (brick < 30) {
        return thirtyFloorbrick + 150000 + 132000;
    }
    else {
        return "Your Total Number Bricks didn't match with floor No";
    }
}
// var totalBrick = brickCalculator(21);
// console.log("Your Total Brics Is:", totalBrick);

//find tiny smallest friend

function tinyFriend(friendList) {
    var smallestTinyFriend = friendList[0];
    for (var i = 0; i < friendList.length; i++) {
        var currentTinyFriend = friendList[i];

        if (currentTinyFriend < smallestTinyFriend) {
            smallestTinyFriend = currentTinyFriend;
        }
        else if (friendList[i] == " ") {
            return "Friend list can not be Empty";
        }
    }
    return smallestTinyFriend;
}
