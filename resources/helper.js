function toggleMobileMenu() {
  var mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.toggle('show');
}

const closeMobileMenu = () => {
  var mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.remove('show');
}

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const mobileScrollToSection = (sectionId) => {
  closeMobileMenu();
  scrollToSection(sectionId);
}