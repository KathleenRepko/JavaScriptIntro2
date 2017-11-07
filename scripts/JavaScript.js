//console.log("Hello");
//var name = "Kathleen";

//console.log("Hello, " + name);

////write a for loop to count from 0 - 10
//for (var i = 0; i < 11; i++)
//{
//  console.log(i);
//}

function helloWorld() {
    var greeting = "Hello World!";
    alert(greeting);
}
//helloWorld();


function add(a, b) {
    return a + b;
}
console.log(add(2, 0.4));

////or...
////anonymous function
//var otherFunction = function (a, b) {
//    return a + b;
//}
//console.log(otherFunction(2, 0.4));


//write a function that takes in a name and prints "Hello [name]"

function printHello(name) {
    //console.log("Hello, " + name);
    //or
    return "Hello, " + name
}
//printHello("Kathleen");
//or
console.log(printHello("Bob"));


function updateDiv() {
    var outputString = "Hello and welcome to my webpage.";
    document.getElementById("sectionOne").innerHTML = "<p>" + outputString + "</p>";
}

function swap() {
    var imageSrc = document.getElementById("swapImage").src;

    if (imageSrc.includes("ARKELLS-HEADER")) {
        document.getElementById("swapImage").src ="images/Beachland.jpeg";
    }
    else {
        document.getElementById("swapImage").src = "images/ARKELLS-HEADER.jpg";
    }
    console.log(document.getElementById("swapImage").src)
}


function printArray()
{
    var favFoods = ["Pizza", "Shrimp", "Cereal", "Ice Cream"];
    var outputText = "<ul>";

    for (i = 0; i < favFoods.length; i++) {
        outputText += "<li>" + favFoods[i] + "</li>";
    }
    outputText += "</ul>";
    document.getElementById("sectionTwo").innerHTML += outputText;
}
