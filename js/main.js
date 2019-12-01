var dropTop = document.querySelector('.masthead').offsetHeight;

var vidLink = document.querySelectorAll('.pop-up-link')
var popVid = document.querySelector('.vimeo-pop-up')

var popVidLaunch = function() {
  var link = this.getAttribute('data-vimeo-link');
  popVid.setAttribute('src', link + '?autoplay=1&color=2c8Bd9&title=0&byline=0&portrait=0');
}

Array.from(vidLink).forEach(function(element) {
  element.addEventListener('click', popVidLaunch);
});

// vidLink.addEventListener('click', function() {
//   var link = vidLink.getAttribute('data-vimeo-link');
//   popVid.setAttribute('src', link + '?autoplay=1&color=2c8Bd9&title=0&byline=0&portrait=0');
// });
//
// var scrolled = window.pageYOffset;
//
// window.addEventListener('scroll', function() {
//   console.log(scrolled);
// });


// Include Video banner on large screen

function minMediaQuery(minM) {
  if (minM.matches) { // If media query matches
    var vimeoBanner = document.querySelector('.vimeo-banner');
    var vimeoBannerContent = vimeoBanner.innerHTML;
    var vimeoBannerNew = '<iframe id="vimeo_player" src="https://player.vimeo.com/video/185239002?title=0&amp;byline=0&amp;portrait=0&amp;color=d01e2f&amp;autoplay=1&loop=1&player_id=vimeo_player" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' + vimeoBannerContent;
    vimeoBanner.innerHTML = vimeoBannerNew;
  }
}

var minM = window.matchMedia("(min-width: 38em)")
minMediaQuery(minM) // Call listener function at run time


// Menu Toggle

const masthead = document.querySelector('.masthead');
const menuTog = document.querySelector('.menu-tog');
const togTop = document.querySelector('.tog-top');
const togMiddle = document.querySelector('.tog-middle');
const togBottom = document.querySelector('.tog-bottom');
var navLinks = document.querySelectorAll('.nav a');

menuTog.addEventListener('click', function() {
  if (masthead.classList.contains('open')) {
    Array.from(navLinks).forEach(function(element) {
      element.removeAttribute('style');
    });
    setTimeout(function() {
      togTop.style.transform = 'translateY(-50%)';
      togBottom.style.transform = 'translateY(50%)';
    }, 200);
    setTimeout(function() {
      togTop.removeAttribute('style');
      togMiddle.removeAttribute('style');
      togBottom.removeAttribute('style');
      masthead.classList.remove('open');
    }, 350);
  } else {
    togTop.style.top = '50%';
    togTop.style.transform = 'translateY(-50%)';
    togBottom.style.bottom = '50%';
    togBottom.style.transform = 'translateY(50%)';

    setTimeout(function() {
      togMiddle.style.display = 'none';
      togTop.style.transform = 'translateY(-50%) rotate(-45deg)';
      togBottom.style.transform = 'translateY(50%) rotate(45deg)';
    }, 150);

    masthead.classList.add('open');
    setTimeout(function() {
      Array.from(navLinks).forEach(function(element) {
        element.style.opacity = '1';
        element.style.transform = 'none';
      });
    }, 350);

  }
});
