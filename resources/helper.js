function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.toggle('show');
}

const closeMobileMenu = () => {
  const mobileNav = document.getElementById('mobileNav');
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

//close modal
const closeModal = () => {
  const modal = document.getElementById("certificateModal");
  modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const certificateIcons = document.querySelectorAll('.certificate-icon');
  const modal = document.getElementById("certificateModal");
  //certificate icon bounce effect
  const startBounce = (icon) => {
    icon.classList.add('bounce2');
  }

  certificateIcons.forEach((icon, index) => {
    setTimeout(() => {
        startBounce(icon);
    }, index * 500); 
  });
  //modal open
  certificateIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const img = modal.querySelector('img'); 
      const imageName = icon.getAttribute('data-image-name');
      img.src = `./resources/media/${imageName}.png`; 

      // Display the corresponding modal
      modal.style.display = 'block';
    });
  });
});

