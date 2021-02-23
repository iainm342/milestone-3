$(document).ready(function(){
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav({edge: "right"});
    $('select').formSelect();
    $('#recipe_method').val();
    M.textareaAutoResize($('#textarea1'));
});