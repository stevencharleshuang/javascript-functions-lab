// Question 1
/**
 * Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. You can use the if-else conditional statement available in Javascript.
 * Extra Challenge: Try solving this function in a single line of code with a ternary operator.
 */
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}

// Question 2
/**
 * Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
 */
function maxOfThree(...args) {
  return Math.max(...args);
}

// Question 3
/**
 * Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.
 */
function isCharacterAVowel(char) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.indexOf(char) > -1 ? true : false;
}

// Question 4: Part 1
/**
 * Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
 */
function sumArray(arr) {
  return arr.reduce((acc, cur) => acc + cur);
}

// Question 4: Part 2
function multiplyArray(arr) {
  return arr.reduce((acc, cur) => acc * cur);
}

// Question 5
/**
 * Write a function called numberOfArguments that returns the number of arguments passed to the function when called.
 */
const numberOfArguments = function(...args) {
  return args.length
}

// Question 6
/**
 * Define a function reverseString that reverses a string. For example, reverseString("happy birthday") should return the string "yadhtrib yppah".
 */
const reverseString = function(str) {
  return str.split(' ').reverse().join(' ');
}

/**
 * Extra Challenge: do not use the built-in reverse() function. Try solving this one with loops! Call this one altReverseString.
 */
const altReverseString = (str) => {

}

// Question 7
/**
 * Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.
 */
function findLongestWord(arr) {
  let longest = '';
  let temp = 0
  arr.forEach(word => word.length > temp ? longest = word : null); 
  return longest;
}

// Question 8
/**
 * Write a function filterLongWords that takes an array of words and a number i and returns a new array of words that are longer than i characters long.
* Extra Challenge: Try using the built-in array method filter() for this one.
 */
function filterLongWords(arr, i) {
  return arr.filter(word => word.length > i);
}

// Bonus 1
/**
 * Bonus
 * Write a function called charactersOccurencesCount that takes a string as an argument and returns an object where:
    the keys are the characters that occur in the string
    the values are the number of occurrences for each letter, regardless of the case
 * Hint: use the toLowerCase() string function
 * For example, calling the function with the string "General Assembly" will return:

  {
    "a": 2,
    "b": 1,
    "e": 3,
    "g": 1,
    "l": 2,
    "m": 1,
    "n": 1,
    "r": 1,
    "s": 2,
    "y": 1
  }
  * Note: JavaScript objects don't have dependable order, so your results may vary in the ordering, but should contain all the same values!
 */
function charactersOccurencesCount(str) {
  let charHash = {};
  str.toLowerCase().split('').forEach(char => !!charHash[char] && char.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122 ? charHash[char] += 1 : charHash[char] = 1);
  return charHash;
}


console.log(maxOfTwoNumbers(1, 2));
console.log(maxOfThree(1, 2, 3));
console.log(isCharacterAVowel('c'));
console.log(sumArray([1,2,3,4]));
console.log(multiplyArray([1,2,3,4]));
console.log(numberOfArguments(1, 2, 3, 4, 5));
console.log(reverseString('please reverse me, I am a very nice string for you to reverse'));
console.log(altReverseString('please reverse me, I am a very nice string for you to reverse'));
console.log(findLongestWord(['one', 'two', 'three', 'four', 'five', 'six', 'seven']));
console.log(filterLongWords(['one', 'two', 'three', 'four', 'five', 'six', 'seven'], 4));
console.log(charactersOccurencesCount('please count my characters, I am a very nice string with characters for you to count'));