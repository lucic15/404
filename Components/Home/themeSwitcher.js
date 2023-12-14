document.addEventListener('DOMContentLoaded', function () {
  const modeSwitch = document.getElementById('switch');
  const themeLink = document.getElementById('theme');

  const storedTheme = localStorage.getItem('theme');

  if (storedTheme) {
    themeLink.href = `../global/${storedTheme}-theme.css`; 
    modeSwitch.checked = storedTheme === 'dark';
  }

  modeSwitch.addEventListener('change', function () {
    if (modeSwitch.checked) {
      themeLink.href = '../global/dark-theme.css'; 
      localStorage.setItem('theme', 'dark');
    } 
    else {
      themeLink.href = '../global/light-theme.css';
      localStorage.setItem('theme', 'light');
    }
  });
});
