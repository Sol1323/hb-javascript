// Create a function that reverses a word
function reverseWord(word) {

  let outstring = '';

  for (let i = word.length; i > 0; i = i - 1) {
    outstring = word[word.length - i] + outstring;
  }

  return outstring;
}



// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

function reverseArr(arr) {
  const result = [];
  for (let word of arr) {
    result.push(reverseWord(word));
  }
  return result;
}



// Create a function that returns a random word from an array
function returnRandomWord(arr) {
  const randomWord = arr[Math.floor(Math.random() * arr.length)];
  return randomWord;
}



// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

const arrWords = ['sol', 'olivia', 'ash', 'cat'];

const arrWords2 = reverseArr(arrWords);

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?




// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.
function mapReverse(arr) {
  let map = new Map();

  for (let word of arr) {
    map[reverseWord(word)] = word;
  }

  return map;
}



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.

















// Write a function that takes a color and the candy map. It should return 
// the flavor or if it’s not in the map, console log “Sorry, that color 
// doesn’t have a flavor” and return nothing.

// function fruitGetter(color, map) {
//   if (!(color in map)) {
//     console.log('Sorry, that color doesn’t have a flavor.')
//   }
//   else {
//     return map[color];

//   }
// }

// // Write a function that takes an array of colors and returns an array of 
// // the corresponding flavors. If the map doesn’t have the color, add null 
// // to the array.

// function flavorGetter(arrColors, map) {
//   let result = [];
//   for (let color of arrColors) {
//     if (color in map) {
//       result.push(map[color]);
//     } else {
//       result.push(null);
//     }
//   }
//   return result;
// }