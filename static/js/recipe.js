$(document).ready(function() {
	var max_ing      		= 40;
	var wrapper_ing   		= $(".input_ing_wrap");
	var add_ing_button      = $(".add_ing_button");
	
	var ing = 1;
	$(add_ing_button).click(function(e){
		e.preventDefault();
		if(ing < max_ing) { 
			ing++; 
			$(wrapper_ing).append('<div class="col s10"><input id="recipe_ingredients" type="text" name="recipe_ingredients"/><a href="#" class="remove_field">Remove</a></div>');
		}
	});
	
	$(wrapper_ing).on("click",".remove_field", function(e){ 
		e.preventDefault(); $(this).parent('div').remove(); ing--;
	});

	var max_meth      		= 40; 
	var wrapper_meth   		= $(".input_meth_wrap"); 
	var add_meth_button      = $(".add_meth_button");
	
	var meth = 1; 
	$(add_meth_button).click(function(e){ 
		e.preventDefault();
		if(ing < max_meth) {
			ing++; 
			$(wrapper_meth).append('<div><input id="recipe_method" type="text" name="recipe_method"/><a href="#" class="remove_field">Remove</a></div>'); 
		}
	});
	
	$(wrapper_meth).on("click",".remove_field", function(e){
		e.preventDefault(); $(this).parent('div').remove(); ing--;
	});
});