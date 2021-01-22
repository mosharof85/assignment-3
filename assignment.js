/*
PROBLEM 01
 */

function kilometerToMiter(kilometer) {

    if(kilometer < 0){
        return "Invalid value";
    }

    var meter = kilometer * 1000;
    return meter;
}

/*
PROBLEM 02
 */

function budgetCalculator(nosOfWatch, nosOfMobile, nosOfLatop){
    var priceOfWatch = 50;
    var priceofMobile = 100;
    var priceOfLaptop = 500;

    var total = 0;

    if(nosOfWatch > 0){
        total = total + (priceOfWatch * nosOfWatch);
    }

    if(nosOfMobile > 0){
        total = total + (priceofMobile * nosOfMobile);
    }

    if(nosOfLatop > 0){
        total = total + (priceOfLaptop * nosOfLatop);
    }

    return total;
}


/*
PROBLEM 03
 */

function hotelCost(nosOfDays) {

    var hotelExpense = 0;

    if(nosOfDays <0){
        return "Invalid Value";
    }
    else
    {
        //Calculation of first phase
        if(nosOfDays <= 10){
            hotelExpense = nosOfDays * 100;
        }

        //Calculation of second phase
        else if (nosOfDays <= 20){

            var expenseOfFirstTenDays = 10 * 100;

            var nosOfRemainingDays = nosOfDays - 10;

            var expenseOfSecondTenDays = nosOfRemainingDays * 80;

            hotelExprese = expenseOfFirstTenDays + expenseOfSecondTenDays;
        }

        //Calculation of third phase
        else{
            var expenseOfFirstTenDays = 10 * 100;

            var expenseOfSecondTenDays = 10 * 80;

            var nosOfRemainingDays = nosOfDays - 20;

            var expenseOfRemainingDays = nosOfRemainingDays * 50;


            hotelExpense = expenseOfFirstTenDays + expenseOfSecondTenDays + expenseOfRemainingDays;
        }

        return hotelExpense
    }
}


/*
PROBLEM 04
 */

function megaFriend(friends){
    var maxLength = 0;

    for (var i=0; i<friends.length; i++){
        var currentNameLength = friends[i].length;

        if(currentNameLength > maxLength){
            maxLength = currentNameLength;
        }
    }

    return maxLength;

}
