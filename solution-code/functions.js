mocha.setup('bdd');
const assert = chai.assert;
const expect = chai.expect;


/** solution code
    NOTE TO INSTRUCTOR: You can test student solution code by entering it here and opening `test.html`.
 */

// Question 1
function maxOfTwoNumbers(x, y) {
  if (x < y) {
    return y;
  } else if (x > y) {
    return x;
  }
}

// Question 1: Extra Challenge
function maxOfTwoNumbers(x, y) {
  return x > y ? x : y;
}


// Question 2
function maxOfThree(x, y, z) {
  if (x > y && x > z) {
    return x;
  }

  if (y > x && y > z) {
    return y;
  }

  if (z > x && z > y) {
    return z;
  }
}


// Question 3
function isCharacterAVowel(c) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(c) !== -1) {
    return true;
  }
  return false;
}


// Question 4: Part 1
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Question 4: Part 2
function multiplyArray(arr) {
  let product = arr[0];
  for (let i = 1; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}


// Question 5
const numberOfArguments = function(...args) {
  return args.length;
}


// Question 6
const reverseString = function(str) {
  return str.split('').reverse().join('');
};

// Question 6: Extra Challenge
const altReverseString = function(str) {
  const arr = str.split('');
  const revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr.join('');
};


// Question 7
function findLongestWord(arr) {
  let longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}


// Question 8
function filterLongWords(arr, num) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Question 8: Exttra Challenge
function filterLongWords(arr, num) {
  return arr.filter(function(word) {
    return word.length > num;
  });
}

// Bonus
function charactersOccurencesCount(stringToCount) {
  const characters = {};
  // replacing all Capitals by Lowercase letters and removing spaces
  stringToCount = stringToCount.toLowerCase().replace(/\s/g, '');
  stringToCount.split("").forEach(function(l) {
    characters[l] = (isNaN(characters[l]) ? 1 : characters[l] + 1);
  });
  return characters;
}


/** unit tests code */

describe("Functions Lab Test Suite", function() {
  it("Max of 123 and 79 is 123", () => {
    expect(maxOfTwoNumbers(123, 79)).to.equal(123);
  });

  it("Max of 23, 135, and 13 is 135", () => {
    expect(maxOfThree(23, 135, 13)).to.equal(135);
  });

  it("a is a vowel", () => {
    expect(isCharacterAVowel('a')).to.be.true;
  });

  it("b is not a vowel", () => {
    expect(isCharacterAVowel('b')).to.be.false;
  });

  it("sumArray([1,2,3,4]) == 10", () => {
    expect(sumArray([1, 2, 3, 4])).to.equal(10);
  });

  it("multiplyArray([1,2,3,4]) == 24", () => {
    expect(multiplyArray([1, 2, 3, 4])).to.equal(24);
  });

  it("numberOfArguments(a,b,c,d) == 4", () => {
    expect(numberOfArguments("a", "b", "c", "d")).to.equal(4);
  });

  it("numberOfArguments(a,b,c,d) != 5", () => {
    expect(numberOfArguments("a", "b", "c", "d")).to.not.equal(5);
  });

  it("reverseString('jag testar') === 'ratset gaj'", () => {
    expect(reverseString('jag testar')).to.equal('ratset gaj');
  });

  it("altReverseString('jag testar') === 'ratset gaj'", () => {
    expect(altReverseString('jag testar')).to.equal('ratset gaj');
  });

  it("findLongestWord(['hello', 'world!']) === 6", () => {
    expect(findLongestWord(['hello', 'world!'])).to.equal(6);
  });

  it("filterLongWords(['hello', 'world!', 'supercalafragalisticexpealidocious'], 5) === ['world!', 'supercalafragalisticexpealidocious']", () => {
    expect(filterLongWords(['hello', 'world!', 'supercalafragalisticexpealidocious'], 5)).to.eql(['world!', 'supercalafragalisticexpealidocious']);
  });

  it("charactersOccurencesCount('General Assembly') === { a: 2, b: 1, e: 3, g: 1, l: 2, m: 1, n: 1, r: 1, s: 2, y: 1 }", () => {
    expect(charactersOccurencesCount('General Assembly')).to.eql({ a: 2, b: 1, e: 3, g: 1, l: 2, m: 1, n: 1, r: 1, s: 2, y: 1 });
  });
});

mocha.run();
