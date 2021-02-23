$(document).ready(function(){
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav({edge: "right"});
    $('select').formSelect();
    $('#recipe_method').val('New Text');
    M.textareaAutoResize($('#textarea1'));
});