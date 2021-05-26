// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count1 = str.match(/[aA]/gi).length;
    const count2= str.match(/[eE]/gi).length;
    const count3= str.match(/[iI]/gi).length;
    const count4= str.match(/[oO]/gi).length;
    const count5= str.match(/[uU]/gi).length;

    document.write("A :"+count1+"<br>");
    document.write("E :"+count2+"<br>");
    document.write("I :"+count3+"<br>");
    document.write("O :"+count4+"<br>");
    document.write("U :"+count5+"<br>");

    // return number of vowels
}

// take input
const string = prompt('Enter a string: ');

countVowel(string);
