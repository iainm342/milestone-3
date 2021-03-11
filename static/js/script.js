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
    // $("form[id]").prop('id', (i, id) => id.replace(/\W/g, '_'));
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

// remove whitespace from ID's being created by jinja in cookbooks.html
// https://stackoverflow.com/questions/54658907/remove-white-spaces-from-all-li-tag-ids/#answer-54659021
document.querySelectorAll('form').forEach(form => {
    form.id = form.id.replace(/\s*/g, '');
  });
  
  console.log('ids:');
  document.querySelectorAll('form').forEach(form => {
    console.log(form.id);
  });