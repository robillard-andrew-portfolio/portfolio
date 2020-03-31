var dropTop = document.querySelector('.masthead').offsetHeight;

// Include Video banner on large screen

function minMediaQuery(minM) {
  if (minM.matches) { // If media query matches
    var vimeoBanner = document.querySelector('.vimeo-banner');
    if (vimeoBanner) {
      var vimeoBannerLink = document.querySelector('.vimeo-banner').getAttribute('data-video-link');
      var vimeoBannerContent = vimeoBanner.innerHTML;
      var vimeoBannerNew = '<iframe id="vimeo_player" src="' + vimeoBannerLink + '?title=0&amp;byline=0&amp;portrait=0&amp;color=d01e2f&amp;autoplay=1&loop=1&player_id=vimeo_player&background=1" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen tabindex="-1  "></iframe>' + vimeoBannerContent;
      vimeoBanner.innerHTML = vimeoBannerNew;
    }
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

function openNav() {
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

function closeNav() {
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
}

menuTog.addEventListener('click', function(e) {
  e.preventDefault();
  if (masthead.classList.contains('open')) {
    closeNav()
  } else {
    openNav();
  }
});

Array.from(navLinks).forEach(function(element) {
  element.addEventListener('click', closeNav);
});

// Sticky Nav

var scrolled = window.pageYOffset;

function sticky() {
  if (window.scrollY >= 200) {
    masthead.classList.add('sticky');
  } else {
    masthead.classList.remove('sticky');
  }
}

window.addEventListener('scroll', sticky);

(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('.scroll a');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop - dropTop - 20.8, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}

// Pop Up Player

var vidLink = document.querySelectorAll('.video-player-link');
const vidWrap = document.querySelector('.video-player-wrap');
const vidPlayer = document.getElementById('video-player');
const vidCloser = document.getElementById('video-closer');
const reelLaunch = document.querySelector('.reel-link');
// vidWrap.style.height = 'calc(100vh - ' + (dropTop - 1) + 'px)';
// vidWrap.style.top = (dropTop - 1) + 'px';

function vidLaunch(e) {
  e.preventDefault();
  var link = this.getAttribute('data-video-link');
  vidPlayer.setAttribute('src', link + '?autoplay=1&color=2c8Bd9&title=0&byline=0&portrait=0');
  vidWrap.style.display = 'block';
  vidWrap.style.opacity = '1';
  vidWrap.focus();
}

function vidClose(e) {
  var vimLink = document.querySelector('.vimeo-banner').getAttribute('data-video-link');
  var vimEmbed = document.getElementById('vimeo_player');
  e.preventDefault();
  vidWrap.style.opacity = '0';
  if (vimEmbed) {
    vimEmbed.setAttribute('src', vimLink + '?title=0&amp;byline=0&amp;portrait=0&amp;color=d01e2f&amp;autoplay=1&loop=1&player_id=vimeo_player&background=1');
    console.log('running');
  }
  setTimeout(function() {
    vidWrap.removeAttribute('style');
    vidPlayer.setAttribute('src', '');
  }, 150);
}

if (reelLaunch) {
  reelLaunch.addEventListener('click', vidLaunch);
}

Array.from(vidLink).forEach(function(element) {
  element.addEventListener('click', vidLaunch);
});

if (vidCloser) {
  vidCloser.addEventListener('click', vidClose);
}

window.addEventListener('keydown', function(e) {
  if (e.keyCode == 27) {
    vidClose(e);
  }
});

//
// vidLink.addEventListener('click', function() {
//   var link = vidLink.getAttribute('data-vimeo-link');
//   popVid.setAttribute('src', link + '?autoplay=1&color=2c8Bd9&title=0&byline=0&portrait=0');
// });

const dropLi = document.querySelector('.has-dropdown');
const dropFocusItem = document.querySelectorAll('.has-dropdown a');
const dropBg = document.querySelector('.nav-focus-bg');

console.log('exists');

function showDrop() {
  dropBg.style.transform = 'none';
  masthead.classList.add('nav-focused');
}

function hideDrop() {
  dropBg.removeAttribute('style');
  masthead.classList.remove('nav-focused');
}

dropLi.addEventListener('mouseover', showDrop);
dropLi.addEventListener('mouseout', hideDrop);

Array.from(dropFocusItem).forEach(function(element) {
  element.addEventListener('focus', showDrop);
});

Array.from(dropFocusItem).forEach(function(element) {
  element.addEventListener('focusout', hideDrop);
});
