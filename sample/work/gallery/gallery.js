$(function(){
	$('#gallery .thumb img').on('click',function(){
		var alt = $(this).attr('alt');
		var src= $(this).attr('src');
		$('#gallery .main p').text(alt);
		$('#gallery .main img').attr('src',src);
	});
});