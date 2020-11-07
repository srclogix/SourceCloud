
// wow js
wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();

// header fixed

window.onscroll = function() {fixHeader()};
function fixHeader() {

if (document.body.scrollTop > 100 || document.documentElement.scrollTop >100) {
  var element = document.getElementById("main-header");
  element.classList.add("hide");

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop >300) {
  var element = document.getElementById("main-header");
  element.classList.add("fixed");
  } 
} 



else {
  var element = document.getElementById("main-header");
  element.classList.remove("fixed", "hide" );
}
}

// slider


  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' ).mount();
  } );

 
 // mobile menu
 let container = document.getElementById('nav-menu-list');

document.getElementById('navbar-toggler').addEventListener('click', function (event) {
    event.preventDefault();

    if (!container.classList.contains('active')) {
        container.classList.add('active');
        container.style.height = 'auto';

        let height = container.clientHeight + "px";

        container.style.height = '0px';

        setTimeout(function () {
            container.style.height = height;
        }, 0);
    } else {
        container.style.height = '0px';

        container.addEventListener('transitionend', function () {
            container.classList.remove('active');
        }, {
            once: true
        });
    }
});
CSS
  
