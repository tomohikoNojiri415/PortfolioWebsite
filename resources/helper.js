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

// document.addEventListener('DOMContentLoaded', () => {
//   const certificateIcons = document.querySelectorAll('.certificate-icon');

//   const startBounce = (icon) => {
//       icon.classList.add('bounce2');
//       setTimeout(() => {
//           icon.classList.remove('bounce2');
//       }, 1500);
//   }
//   certificateIcons.forEach((icon, index) => {
//       setTimeout(() => {
//           startBounce(icon);
//       }, index * 500); // Adjust the delay between each icon's bounce as needed
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  const certificateIcons = document.querySelectorAll('.certificate-icon');

  const startBounce = (icon) => {
    icon.classList.add('bounce2');
  }

  certificateIcons.forEach((icon, index) => {
      setTimeout(() => {
          startBounce(icon);
      }, index * 500); // Adjust the delay between each icon's bounce as needed
  });
});


// document.addEventListener('DOMContentLoaded', () => {
//   const certificateIcons = document.querySelectorAll('.certificate-icon');
//   let jumpEffectApplied = false;

//   const jumpUpIcons = () => {
//       console.log('jumpUpIcons');
//       certificateIcons.forEach(icon => {
//           // icon.style.transform = 'translateY(-4px)'; 
//         icon.classList.add('jump');
//       });
//   }

//   const resetIconsPosition = () => {
//       certificateIcons.forEach(icon => {
//           icon.style.transform = 'none';
//       });
//   }
//   window.addEventListener('scroll', () => {
//       // const certificateSection = document.getElementById('certificate-section');
//       // const certificateSectionTop = certificateSection.offsetTop;
//       // const certificateSectionHeight = certificateSection.clientHeight;
//       // const scrollPosition = window.scrollY;
//       // console.log(certificateSectionTop, certificateSectionHeight, scrollPosition);

//       // if (scrollPosition >= certificateSectionTop && scrollPosition < certificateSectionTop + certificateSectionHeight) {
//       //     jumpUpIcons();
//       // } else {
//       //     resetIconsPosition();
//       // }
//     const certificateSection = document.getElementById('certificate-section');  
//     var offsetHeight = certificateSection.offsetHeight;
//     const offsetTop = certificateSection.offsetTop;
//     const scrollPosition = window.scrollY;
//     // console.log(offsetTop, offsetHeight, scrollPosition);
//     if ( scrollPosition < offsetTop + 50 && scrollPosition > offsetTop-offsetHeight - 200){
//       if (jumpEffectApplied) return;
//       jumpEffectApplied = true;
//       jumpUpIcons();
//     }else{
//       if (!jumpEffectApplied) return;
//       // console.log('not in the middle');
//       jumpEffectApplied = false;
//     }
//   });
// });
