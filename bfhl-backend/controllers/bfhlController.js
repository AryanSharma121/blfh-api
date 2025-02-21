const { separateNumbersAndAlphabets, findHighestAlphabet } = require('./utils');


const handlePost = (req, res) => {
    try {
      const { data } = req.body;
  
      
      if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Invalid input format. "data" should be an array.' });
      }
  
      if (data.length === 0) {
        return res.status(400).json({ is_success: false, message: 'Input array is empty. Please provide valid data.' });
      }
  
      const { numbers, alphabets } = separateNumbersAndAlphabets(data);
  
    
      const highestAlphabet = findHighestAlphabet(alphabets);
  
      
      const response = {
        is_success: true,
        user_id: "aryan_sharma_18022004",  
        email: "22bcs14006@cuchd.in", 
        roll_number: "22BCS14006",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
      };
  
      res.status(200).json(response);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ is_success: false, message: 'Server error. Please try again later.' });
    }
  };
  
  
  const handleGet = (req, res) => {
    res.status(200).json({ operation_code: 1 });
  };
  
  module.exports = { handlePost, handleGet };
  