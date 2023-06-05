// Higher-order function
function repeat(func, numTimes) {
    for (let i = 0; i < numTimes; i++) {
      func(i);
    }
  }
  
  // Regular function
  function greet(index) {
    console.log(`Hello, user ${index + 1}!`);
  }
  
  // Call the higher-order function
  repeat(greet, 5);

  
  
  
  