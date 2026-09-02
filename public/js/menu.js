(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  var dropdowns = document.querySelectorAll('.nav-dropdown');
  var year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (toggle && menu) {
    function isMenuOpen() {
      return menu.classList.contains('open');
    }

    function setMenu(open) {
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('nav-locked', open);
    }

    toggle.addEventListener('click', function () {
      setMenu(!isMenuOpen());
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isMenuOpen()) {
        setMenu(false);
        toggle.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (isMenuOpen() && !e.target.closest('.nav')) {
        setMenu(false);
      }
    });

    menu.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (link && !link.classList.contains('dd-label')) {
        setMenu(false);
      }
    });
  }

  dropdowns.forEach(function (dd) {
    var label = dd.querySelector('.dd-label');
    if (label) {
      label.addEventListener('click', function (e) {
        e.preventDefault();
        dd.classList.toggle('open');
      });
    }
  });

  document.addEventListener('click', function (e) {
    dropdowns.forEach(function (dd) {
      if (!dd.contains(e.target)) {
        dd.classList.remove('open');
      }
    });
  });
})();
