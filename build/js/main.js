const initApp = () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const lightBtn = document.getElementById('light-mode-on');
  const darkBtn = document.getElementById('dark-mode-on');
  const page = document.documentElement;

  const toggleDarkMode = () => {
    lightBtn.classList.toggle('hidden');
    lightBtn.classList.toggle('flex');
    darkBtn.classList.toggle('hidden');
    darkBtn.classList.toggle('flex');

    page.classList.toggle('dark');
    const isDarkMode = page.classList.contains('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

  };

  lightBtn.addEventListener('click', toggleDarkMode);
  darkBtn.addEventListener('click', toggleDarkMode);

  //

  const hamburgerBtn = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    hamburgerBtn.classList.toggle('toggle-btn');
  };

  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
};

document.addEventListener('DOMContentLoaded', initApp);