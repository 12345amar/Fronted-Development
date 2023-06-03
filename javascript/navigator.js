function checkInternetConnection() {
    if (navigator.onLine) {
      console.log('Internet is connected!');
    } else {
      console.log('Internet is not connected.');
    }
  }
  
  // Check the initial internet connection status
  checkInternetConnection();
  
  // Add event listeners for online and offline events
  window.addEventListener('online', checkInternetConnection);
  window.addEventListener('offline', checkInternetConnection);