(function () {
  var root = document.documentElement;
  var button = document.getElementById('themeToggle');
  var menuButton = document.getElementById('mobileMenuToggle');
  var nav = document.getElementById('primaryNav');

  function syncThemeButton() {
    if (!button) return;
    var isLight = root.getAttribute('data-theme') === 'light';
    button.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    button.setAttribute('title', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  }

  if (button) {
    button.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (error) {}
      syncThemeButton();
    });
    syncThemeButton();
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.textContent = isOpen ? 'Close' : 'Menu';
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = 'Menu';
      });
    });
  }
})();
