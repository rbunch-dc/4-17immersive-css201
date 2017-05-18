$(document).ready(function(){
	// console.log("Test");
	// $('#parent').click(function(){
	// 	$(this).css({
	// 		'perspective': '500px'
	// 	})
	// })
	$('#change-perspective').change(function(event){
		// console.log(event)
		// console.log($(this).val())
		var newVal =  $(this).val();
		$('#parent').css({
			'perspective': newVal
		})
	});

	$('#change-loc').change(function(event){
		// console.log(event)
		// console.log($(this).val())
		var newVal =  $(this).val();
		$('#parent').css({
			'perspective-origin': newVal
		})
	});

	$('.card-holder').click(function(){
		$(this).toggleClass('flip')
	});

})