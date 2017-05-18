$(document).ready(function() {

	$('.grid').click(function(event){
		event.preventDefault();
	});


	//Highlight nav tabs
	$('.tab').hover(function(){
		$('.tab').removeClass('hover');
		$(this).addClass('hover');
	})
	$('.tab').mouseleave(function(){
		$(this).removeClass('hover');
	})

	//Highlight home button
	$('aside img').hover(function(){
		$(this).addClass('bigger');
	})
	$('aside img').mouseleave(function(){
		$(this).removeClass('bigger');
	})


	//Outline photo in grid
	$('.grid a img').hover(function(){
		$('.grid a img').removeClass('outline');
		$(this).addClass('outline');
	})
	$('.grid a img').mouseleave(function(){
		$(this).removeClass('outline');
	})

});