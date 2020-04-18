$("ul").on("click", "li", function(){
	$(this).toggleClass("done")
})

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	})
	event.stopPropagation()
})

$("input[type='text']").on("keypress", function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>")
	}
})

$("h1 i").click(function(){
	$("input[type='text']").fadeToggle();
})