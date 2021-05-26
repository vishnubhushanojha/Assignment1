var firstNumber,secondNumber,thirdNumber;


firstNumber = window.prompt("Enter first integer");


secondNumber = window.prompt("Enter second integer");

thirdNumber = window.prompt("Enter third integer");

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
thirdNumber = parseInt(thirdNumber);
findLargNum(firstNumber,secondNumber,thirdNumber);

function findLargNum(firstNumber,secondNumber,thirdNumber){
if (firstNumber > secondNumber && firstNumber>thirdNumber) {
     document.write(firstNumber + " is largest");
}
else if(secondNumber > thirdNumber && secondNumber>firstNumber)
 document.write(secondNumber + " is largest");
else 
   document.write(thirdNumber + " is largest");

}