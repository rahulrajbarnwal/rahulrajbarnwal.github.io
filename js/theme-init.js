(function () {
  var theme = null;
  try { theme = localStorage.getItem('theme'); } catch (error) {}
  if (!theme) {
    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.setAttribute('data-theme', theme);
})();
