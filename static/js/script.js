$(document).ready(function(){
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav({edge: "right"});
    $('select').formSelect();
    $('.modal').modal();
    $('.collapsible').collapsible({
        accordion: true,
        onOpen: function(el) { },
        onClose: function(el) { }
    });
});

// Sroll to top script
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
                mybutton.style.display = "none";
        }
    }

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
