document.addEventListener('DOMContentLoaded', function () {
  const modeSwitch = document.getElementById('switch');
  const themeLink = document.getElementById('theme');

  // Check if a theme is stored in localStorage
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    // Apply the stored theme
    themeLink.href = `../global/${storedTheme}-theme.css`; // Adjust the path accordingly

    // Update the switch state based on the stored theme
    modeSwitch.checked = storedTheme === 'dark';
  }

  // Toggle theme on switch change
  modeSwitch.addEventListener('change', function () {
    if (modeSwitch.checked) {
      themeLink.href = '../global/dark-theme.css'; // Replace with your dark theme stylesheet
      localStorage.setItem('theme', 'dark');
    } else {
      themeLink.href = '../global/light-theme.css'; // Replace with your light theme stylesheet
      localStorage.setItem('theme', 'light');
    }
  });
});
