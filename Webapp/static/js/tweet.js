// script for tweet.html

$(document).ready(function() {

	// fade-in form field and buttons
	// $('.form-box').hide().fadeIn(2000);

	// upon submission, rate the input tweet and prepend result to <div class='reults'>
	$('#submit').click(function(event) {
		$('.results').empty();
		$('.results').show();
		$('.results').show();

		// get raw tweet text from input field
		var new_tweet = $('input[name=tweet]').val();

		/* pass tweet to predict() function in main.py and get back JSON
		with prediction string and numerical rating */
		let json = $.getJSON('/tweet/predict/', {tweet: new_tweet}, function(data) {

			var prediction = data.prediction;
			var probabilities = data.probabilities;


			// panel color determined by rating
			if (probabilities == 0) {
				result = "<div class='panel-transparent panel-success'>";
			}
			else if (probabilities == 1) {
				result = "<div class='panel-transparent panel-warning'>";
			}
			else if (probabilities == 2) {
				result = "<div class='panel-transparent panel-warning'>";
			}
			else if (probabilities == 3) {
				result = "<div class='panel-transparent panel-warning'>";
			}
			else if (probabilities == 4) {
				result = "<div class='panel-transparent panel-warning'>";
			}
			else {
				result = "<div class='panel-transparent panel-danger'>";
			}

			// within panel, add raw input text and model's prediction
			// result = result +

			result =
				"<div class='panel-body'>" + new_tweet +
				"</div><div class='panel-footer'>" + prediction +
				"</div>"

			$('.progress1')[0].value = probabilities[0][0];
			$('.progress2')[0].value = probabilities[0][1];
			$('.progress3')[0].value = probabilities[0][2];
			$('.progress4')[0].value = probabilities[0][3];
			$('.progress5')[0].value = probabilities[0][4];
			$('.progress6')[0].value = probabilities[0][5];
// ['anger', 'fear', 'joy', 'love', 'sadness', 'surprise']
				// "<div class='panel-body'>"+new_tweet+"</div>" +
				// "<div class='panel-footer'>"+prediction+"</div>" +
				// // "<div class='panel-footer'><progress max="100" value="70"></progress></div>" +
				// "</div>"

			/* prepend panel to <div class='results'> so most recent
			submissions appear first */
			$(result).prependTo('.results'); //.hide().slideToggle(1000);

		});

		//empty form after submission and prevent page reload
		$('form')[0].reset();
		event.preventDefault();
	});

	// clear <div class='results'>
	$('#clear').click(function(event) {
		$('.results').hide('drop', {direction: 'down'}, 1000, function(event) {
			$('.results').empty();
		});
		event.preventDefault();
	});
});


