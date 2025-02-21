// Function to separate numbers and alphabets
const separateNumbersAndAlphabets = (data) => {
    const numbers = [];
    const alphabets = [];
  
    data.forEach(item => {
      // Check if the item is a number
      if (!isNaN(item)) {
        numbers.push(item);
      } 
      // Check if the item is a single alphabet character
      else if (/^[a-zA-Z]$/.test(item)) {
        alphabets.push(item.toUpperCase());  // Store as uppercase for easy comparison
      }
    });
  
    return { numbers, alphabets };
  };
  
  // Function to find the highest alphabet
  const findHighestAlphabet = (alphabets) => {
    if (alphabets.length === 0) return [];
  
    // Sort alphabets in descending order and pick the first (highest)
    alphabets.sort((a, b) => b.localeCompare(a));
    return [alphabets[0]];
  };
  
  module.exports = { separateNumbersAndAlphabets, findHighestAlphabet };
  