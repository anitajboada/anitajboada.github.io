$(document).ready(function() { 
    /*-----------BURGUER MENU---------*/
    
    $('.js--nav-icon').click(function() {
        console.log("abc")
        var nav = $('.js--main-nav');      
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200); 
        if (icon.hasClass('fas fa-bars fa-3x')){
            icon.removeClass('fas fa-bars fa-3x');
            icon.addClass('fas fa-times fa-3x');
        } else {
            icon.removeClass('fas fa-times fa-3x');
            icon.addClass('fas fa-bars fa-3x');
        }     
    });
})
 
function menu() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*---------Smoth Scroll---------*/
const navbar = document.getElementById('navbar');
 let scrolled = false; 

 window.onscroll = function() {
    if(window.pageYOffset > 100) {
       navbar.classList.remove('top');
    if (!scrolled) {
        navbar.style.transform = 'translateY(-70px)';
       }
    setTimeout(function(){
        navbar.style.transform = 'translateY(0)';
           scrolled = true;
        }, 200);
        } else {
          navbar.classList.add('top');
          scrolled = false;
          }
     }

$('#navbar a').on('click', function (e) {
    if (this.hash !== '') {
     e.preventDefault();

    const hash = this.hash;
    $('html, body').animate(
     {   
      scrollTop: $(hash).offset().top -100,
      },
     800
      );
    }
});
