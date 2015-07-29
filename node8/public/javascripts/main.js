$(function(){
	
	$('a').on('click', function(event){
		event.preventDefault();		
		console.log('click');
		$.ajax({
            method : 'DELETE',
            url    : '/applicants',
            data   : {name : $(this).siblings('h4').text()}
        })
	});
});