$(document).ready(function() {
	var max_ing      		= 40; //maximum input boxes allowed
	var wrapper_ing   		= $(".input_ing_wrap"); //Fields wrapper
	var add_ing_button      = $(".add_ing_button"); //Add button ID
	
	var ing = 1; //initlal text box count
	$(add_ing_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(ing < max_ing) { //max input box allowed
			ing++; //text box increment
			$(wrapper_ing).append('<div><input id="recipe_ingredients" type="text" name="recipe_ingredients"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
		}
	});
	
	$(wrapper_ing).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove(); ing--;
	});

	var max_meth      		= 40; //maximum input boxes allowed
	var wrapper_meth   		= $(".input_meth_wrap"); //Fields wrapper
	var add_meth_button      = $(".add_meth_button"); //Add button ID
	
	var meth = 1; //initlal text box count
	$(add_meth_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(ing < max_meth) { //max input box allowed
			ing++; //text box increment
			$(wrapper_meth).append('<div><input id="recipe_method" type="text" name="recipe_method"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
		}
	});
	
	$(wrapper_meth).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove(); ing--;
	});
});