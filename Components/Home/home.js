document.addEventListener('DOMContentLoaded', function () {
  const modeSwitch = document.getElementById('switch');
  const themeLink = document.getElementById('theme');

  // Check the user's preference
  if (localStorage.getItem('theme') === 'dark') {
    themeLink.href = '../global/dark-theme.css'; // Replace with your dark theme stylesheet
    modeSwitch.checked = true;
  }
  if (localStorage.getItem('theme') === 'light') {
    themeLink.href = '../global/light-theme.css'; // Replace with your dark theme stylesheet
    modeSwitch.checked = false``;
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
``