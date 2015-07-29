$(function(){

	var loadCountries = function(data){
		data.forEach(function(country){
			$('#country-list').append('<li>' + country.name + '</li>');
			$('.load').addClass('hidden');
			$('.search').removeClass('hidden');
		});
	};

	var loadResult = function(data){
		$('#country-list').empty();
		data.forEach(function(country){
			$('#country-list').append('<li>Country - ' + country.name + ', Location - '+ country.region + '</li>');
		});
	};

	$('a.load').on('click', function(){
		$.ajax({
            method : 'GET',
            url    : '/countries',
            success: loadCountries
        })
	});

	$('.searchForm').on('submit', function(event){
		event.preventDefault();
		$.ajax({
			method 	: 'POST',
			url		: '/search',
			data	: $('.searchForm').serialize(),
			success : loadResult
		})
	});
});