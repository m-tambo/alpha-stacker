// Create an array that contains the letters of the alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
       /*
         Write a `for` loop that iterates over the array argument and
         outputs the letters.
        */
   let alpha2 = [];
   for (let i = 0; i < theAlphabetArray.length; i++) {
      alpha2.push(theAlphabetArray[i])
      console.log(alpha2.join(''))
   }
}

// Invoke the function and pass in the array
stackLetters(alphabet)
