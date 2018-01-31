$(document).ready(function () {
	getData();
});


function getData() {
	$('#pobierz-dane').click(function() {
		
	$.getJSON(
		"https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",

		function (data) {
		  $("body").append($('<div id="dane-programisty">')); 
		  $('div#dane-programisty').append($('<p>').text(data.imie));
			$('div#dane-programisty').append($('<p>').text(data.nazwisko));
			$('div#dane-programisty').append($('<p>').text(data.zawod));
			$('div#dane-programisty').append($('<p>').text(data.firma));
		});
	});


}