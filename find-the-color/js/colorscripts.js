$(function () {
    console.log("ready!");

    //the color randomizer : creates the color to be found

    //returns an integer between 0 and max
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    //round the number to the next 10 
    function precisionRound(number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    }

    //defining the variables for the random color
    var green, blue, red, mycolor, thecolor;


    //defining and setting at 0 the variable for my color

    var mygreen = 0;
    var myblue = 0;
    var myred = 0;


    $("#randomizer").click(function () {
        red = precisionRound(getRandomInt(255), -1);
        green = precisionRound(getRandomInt(255), -1);
        blue = precisionRound(getRandomInt(255), -1);
        thecolor = red + ", " + green + ", " + blue;

        $("#the-color").css("background", "rgb(" + thecolor + ")");

        console.log(red);
        console.log(green);
        console.log(blue);
        console.log(thecolor);

        //reset the mycolor variables to white
        mygreen = 0;
        myblue = 0;
        myred = 0;

        //reset the mycolor square 
        $("#my-color").css("background", "white");

    });



    // button green actions 

    $("#buttongreen").click(function () {
        if (mygreen < 250) {
            mygreen += 10;
            console.log(mygreen);
            mycolor = myred + ", " + mygreen + ", " + myblue;
            $("#my-color").css("background", "rgb(" + mycolor + ")");
        } else {
            $("#buttongreen").html("Green is full");
            $("#buttongreen").css("font-size", "2rem");

        }
    });

    // button red action 

    $("#buttonred").click(function () {
        if (myred < 250) {
            myred += 10;
            console.log(myred);
            mycolor = myred + ", " + mygreen + ", " + myblue;
            $("#my-color").css("background", "rgb(" + mycolor + ")");
        } else {
            $("#buttonred").html("Red is full");
            $("#buttonred").css("font-size", "2rem");

        }
    });

    // button blue action 

    $("#buttonblue").click(function () {
        if (myblue < 250) {
            myblue += 10;
            console.log(myblue);
            mycolor = myred + ", " + mygreen + ", " + myblue;
            $("#my-color").css("background", "rgb(" + mycolor + ")");
        } else {
            $("#buttonblue").html("Blue is full");
            $("#buttonblue").css("font-size", "2rem");

        }
    });


    //remove green action

    $("#removegreen").click(function () {
        if (mygreen > 0) {
            mygreen -= 10;
            console.log(mygreen);
            mycolor = myred + ", " + mygreen + ", " + myblue;
            $("#my-color").css("background", "rgb(" + mycolor + ")");
        } else {
            $("#removegreen").html("Green is empty");
            $("#removegreen").css("font-size", "2rem");

        }
    });

    //remove blue action

    $("#removeblue").click(function () {
        if (myblue > 0) {
            myblue -= 10;
            console.log(myblue);
            mycolor = myred + ", " + mygreen + ", " + myblue;
            $("#my-color").css("background", "rgb(" + mycolor + ")");
        } else {
            $("#removeblue").html("Blue is empty");
            $("#removeblue").css("font-size", "2rem");

        }
    });

    //remove red action

    $("#removered").click(function () {
        if (myred >= 0) {
            myred -= 10;
            console.log(myred);
            mycolor = myred + ", " + mygreen + ", " + myblue;
            $("#my-color").css("background", "rgb(" + mycolor + ")");
        } else {
            $("#removered").html("Red is empty");
            $("#removered").css("font-size", "2rem");

        }
    });


    //the check button
    //myblue == blue && myred == red && mygreen == green
    //.delay(800).html("Check")

    $("#check").click(function () {
        if ((myblue == blue) && (mygreen == green) && (myred == red)) {
            $("#result").css("display", "flex");
        } else {
            alert("no good, keep trying");
        }
    });


});
