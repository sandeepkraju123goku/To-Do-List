$("ul").on("click","li",function(){
	$(this).toggleClass("completed")
		
});

//click on x to delete

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove;
	})
	event.stopPropagation();
}); 

$("input[type='text']").keypress(function(letter){
	//comapre enetr val ==13
	if(letter.which=== 13){
	//grab the data
	var todotext=$(this).val();
	$(this).val("");
	//create new li and add to ul
	$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todotext + "</li>");
	}

})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});