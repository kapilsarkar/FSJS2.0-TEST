function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const data = 'Some data';
        if (data) {
          resolve(data); // Resolve the promise with the data
        } else {
   reject('Error: Data not found'); // Reject the promise with an error message
        }
      }, 2000);
    });
  }
  
  // Using the custom promise
  fetchData()
    .then((data) => {
      console.log('Data:', data);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  