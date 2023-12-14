document.addEventListener('DOMContentLoaded', function () {
    const modeSwitch = document.getElementById('switch');
    const themeLink = document.getElementById('theme');
  
    // Check if a theme is stored in localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      // Apply the stored theme
      themeLink.href = `${storedTheme}-theme.css`; 
      modeSwitch.checked = storedTheme === 'dark';
    }
  
    // Toggle theme
    modeSwitch.addEventListener('change', function () {
      if (modeSwitch.checked) {
        themeLink.href = 'dark-theme.css';
        localStorage.setItem('theme', 'dark');
      } else {
        themeLink.href = 'light-theme.css';
        localStorage.setItem('theme', 'light');
      }
    });
  });
  