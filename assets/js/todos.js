// Check off specific todos by clicking
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});

// Click on X to delete Todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){ //runs first
		$(this).remove();                     //runs after fadeout
	});
	event.stopPropagation();  //excludes CSS functionality
});

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){          //which finds 13 = enter keypress
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");  //removes text from input
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});