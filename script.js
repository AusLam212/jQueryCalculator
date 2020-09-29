// Variables
var firstValue = document.querySelector("#first-number")
var secondValue = document.querySelector("#second-number")
var operatorSelected = document.querySelector("#operators")
var result = document.querySelector("#result")
var count = 0

// event.target.value

// When number is clicked, store that to the first value variable that displays in the window
// // When another number is clicked, add that to the first value as a string element
$(".btn").on("click", function(){
   firstValue.text($(this).attr("value"))
})


// When an operator is clicked, display that operator in the window

// The next time a number is clicked, it should be added to the second window

// When equal is clicked, parse the two strings into numbers
// // Depending on the operator clicked, math

//Maybe use a counter to decide which window to produce to, 
// If operator is clicked, count++. If count is > 0 produce results to second window