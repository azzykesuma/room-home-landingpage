
// toggling mobile menu

let hamburger = document.getElementById('hamburger')


hamburger.addEventListener('click', () => {
    let mobileMenu = document.querySelector('.mobileNav')
    mobileMenu.classList.toggle('toggle');
    if(mobileMenu.classList.contains('toggle')) {
        let icon = document.getElementById('icon')
        mobileMenu.style.display = 'block'
        icon.src = './images/icon-close.svg'
    } else {
        mobileMenu.style.display = 'none'
        icon.src = './images/icon-hamburger.svg'
    }
})

// carousel functions

let img = document.querySelectorAll('.carousel__photo')
let content = document.querySelectorAll('.description')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')



const nextSlide = () => {
  console.log(`test`)
  const currentImg = document.querySelector('.active');
  const contentActive = document.querySelector('.content-active')

  contentActive.classList.remove('content-active')
  currentImg.classList.remove('active')
  
  if(currentImg.nextElementSibling && currentImg.nextElementSibling.classList.contains('carousel__photo')) {
    currentImg.nextElementSibling.classList.add('active')
    contentActive.nextElementSibling.classList.add('content-active')
  } else {
    img[0].classList.add('active');
    content[0].classList.add('content-active')
  }
};

const prevSlide = () => {
  const currentImg = document.querySelector('.active');
  const contentActive = document.querySelector('.content-active')

  contentActive.classList.remove('content-active')
  currentImg.classList.remove('active')

  if(currentImg.previousElementSibling && currentImg.previousElementSibling.classList.contains('carousel__photo')) {
    currentImg.previousElementSibling.classList.add('active')
    contentActive.previousElementSibling.classList.add('content-active')
  } else {
    img[img.length - 1].classList.add('active');
    content[content.length - 1].classList.add('content-active')
  }
};

prev.addEventListener('click',prevSlide);
next.addEventListener('click',nextSlide);

// changing images per media querry
const tablet = window.matchMedia('(min-width: 768px)')
const imageOne = document.getElementById('imgOne')
const imageTwo = document.getElementById('imgTwo')
const imageThree = document.getElementById('imgThree')

function changeImage(tablet) {
  if(tablet.matches) {
    imageOne.src = './images/desktop-image-hero-1.jpg'
    imageTwo.src = './images/desktop-image-hero-2.jpg'
    imageThree.src = './images/desktop-image-hero-3.jpg'
  } else {
    imageOne.src = './images/mobile-image-hero-1.jpg'
    imageTwo.src = './images/mobile-image-hero-2.jpg'
    imageThree.src = './images/mobile-image-hero-3.jpg'
  }
}
changeImage(tablet);
tablet.addListener(changeImage);