document.addEventListener('DOMContentLoaded', function () {
    const modeSwitch = document.getElementById('modeSwitch');
  
    // Check the user's preference
    if (localStorage.getItem('whiteMode') === 'enabled') {
      document.body.classList.add('white-mode');
      modeSwitch.checked = true;
    }
  
    // Toggle dark mode on switch change
    modeSwitch.addEventListener('change', function () {
      if (modeSwitch.checked) {
        document.body.classList.add('white-mode');
        localStorage.setItem('whiteMode', 'enabled');
      } else {
        document.body.classList.remove('white-mode');
        localStorage.setItem('whiteMode', null);
      }
    });
  });
  