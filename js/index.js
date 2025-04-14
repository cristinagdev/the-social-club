const menuButton = document.querySelectorAll('.header__btn');
const menuMobile =  document.querySelector('.header__nav--mobile')
const testimonialsWrapper = document.querySelector('.testimonials__wrapper');
const testimonialsCard = testimonialsWrapper.querySelectorAll('.testimonial__card')
const testimonialsButtons = document.querySelectorAll('.testimonial__btn')

// Mobile menu animation
menuButton.forEach(button => {
  button.addEventListener('click', () => {
      document.querySelector('body').classList.toggle('no-scroll')
      menuMobile.classList.toggle('open__menu')
  })
});



// Metodo para mover el scroll con cada click en el botón
testimonialsButtons.forEach((button)=> {

  button.addEventListener('click', () => {
    const direction = button.dataset.direction === 'prev' ? -1 : 1;
    // ancho de la card visible en pantalla mas el gap
    const cardWidth = testimonialsCard[0].clientWidth + 24

    const scrollMovement = cardWidth * direction;
    testimonialsWrapper.scrollBy({left: scrollMovement, behavior: 'smooth'})
  })
})

