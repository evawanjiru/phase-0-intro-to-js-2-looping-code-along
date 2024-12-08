// writeCards function
function writeCards(names, event) {
    let messages = []; // Create an empty array to store messages
    
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
    
    return messages;
  }
  
  // countDown function
  function countDown(n) {
    while (n >= 0) {
      console.log(n); // Log the current value of n
      n--; // Decrease n by 1
    }
  }
  
