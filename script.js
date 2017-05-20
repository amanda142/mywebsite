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

	//Show hamburger menu items
	$('div .dropbtn').click(function(){
		$('.dropmenu').toggleClass('show');
	})

});