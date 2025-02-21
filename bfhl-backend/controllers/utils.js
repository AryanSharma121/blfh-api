// Function to separate numbers and alphabets
const separateNumbersAndAlphabets = (data) => {
    const numbers = [];
    const alphabets = [];
  
    data.forEach(item => {
      // Check if item is a number (regex to check digits)
      if (/^\d+$/.test(item)) {
        numbers.push(item);
      }
      // Check if item is an alphabet (single character)
      else if (/^[a-zA-Z]$/.test(item)) {
        alphabets.push(item.toUpperCase());  // Convert to uppercase for consistency
      }
    });
  
    return { numbers, alphabets };
  };
  
  // Function to find the highest alphabet (case insensitive)
  const findHighestAlphabet = (alphabets) => {
    if (alphabets.length === 0) return [];
    const highest = alphabets.sort().pop();  // Sort and get the last (highest) alphabet
    return [highest];
  };
  
  module.exports = {
    separateNumbersAndAlphabets,
    findHighestAlphabet
  };
  