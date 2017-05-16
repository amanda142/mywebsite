$(document).ready(function() {

	$('.grid').click(function(event){
		event.preventDefault();
	});


	$('.tab').hover(function(){
		$('.tab').removeClass('hover');
		$(this).addClass('hover');
	})

	$('.tab').mouseleave(function(){
		$(this).removeClass('hover');
	})


	$('aside img').hover(function(){
		$(this).addClass('bigger')
	})
	$('aside img').mouseleave(function(){
		$(this).removeClass('bigger')
	})
});