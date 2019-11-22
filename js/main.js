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
