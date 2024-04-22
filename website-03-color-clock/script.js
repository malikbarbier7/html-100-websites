function updateClock() {
    // Get current time
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Format time string
    var timeString = hours + ':' + minutes + ':' + seconds;
    
    // Generate color based on time
    var colorString = '#' + hours + minutes + seconds;
    
    // Update background color
    document.body.style.backgroundColor = colorString;
    
    // Display current time and color
    document.getElementById('clock').textContent = timeString;
    document.getElementById('colorName').textContent = colorString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the clock immediately
  updateClock();
  