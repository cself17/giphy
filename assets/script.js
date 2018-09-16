var topic = ["Love", "Happiness", "Freedom", "Values", "Virtues"];
//array of topics

function renderButtons() {
	//deletes topic buttons prior to adding new movie buttons

	$("#topic-view").empty();

	for (var i = 0; i < topic.length; i++) {
		//looping through array of topics

		var a = $("<button>");
		//makes a button
		a.addClass("topic");
		//adds a class	
		a.attr("data-name", topic[i]);
		//gives button's text with a vlue of the topic at index i
		a.text(topic[i]);
		//adding the button to html
		$("#topic-view").append(a);
	}
}

$("#add-topic").on("click", function (event) {
	//runs a function when this button is clicked
	event.preventDefault();
	//prevents the form from trying to submit itself
	var topicc = $("#topic-input").val().trim();
	//grab text from the input box
	topic.push(topicc);
	//the topic from the textbox is then added to our array

	renderButtons();
});
//calling the renderButtons function at least once to display the initial list of topics
renderButtons();

//adding click event listen listener to all buttons
$("button").on("click", function () {
	var clickTopic = $(this).attr("data-name");
	//grabbing and storing the data-name property value from the button

	var queryURL = "https://api.giphy.com/v1/gifs/searchq=" + clickTopic + "&api_key=dvYP7etkUUDkLBtsdXYJlKoIM2jYw0It";

	//performing an ajax request with the queryURL
	$.ajax({
		url: queryURL,
		method: "GET"
	})
	//after data comes back from the request
	.then(function(response) {
		console.log(queryURL);

		console.log(response);
		//storing the data from the AJAX request in the results variable
		var results = response.data;

		//looping through each result item
		for (var i = 0; i < results.length; i++)
		{

			//creating and storing a div tag
			var topickDiv = $("<div>");

			//creating a paragraph tag with the result item's rating
			var p = $("<p>").text("Rating: " + results[i].rating);

			//creating and storring an image tag
			var topicImage = $("<img>");
			//setting the src attribute of the image to a property pulled off the result item
			topicImage.attr("src", results[i].images.fixed+height.url);

			//appending the pragraph and image tag to the topickDiv
			topickDiv.append(p);
			topickDiv.append(topicImage);

			//prepending the topickDiv to the html page in the "gifs" div
			$("#gifs").prepend(topickDiv);
		}
	});
});



/*for ( var i = 0; i < topic.length; i++) {
	var buttons = $("<button data-sign>" + topic[i] + "</button>");
	buttons.appendTo("#topic");
};

console.log(buttons);

$("button").on("click", function() {
	var sign = $(this).attr("data-sign");

	var queryURL = "https://api.giphy.com/v1/gifs/searchq=" + sign + "&api_key=dvYP7etkUUDkLBtsdXYJlKoIM2jYw0It";

	$.ajax({
		url:queryURL,
		method: "GET"
	})

		.then(function(response) {
			console.log(queryURL);

			console.log(response);


			var results = response.data;


			for (var i = 0; i < results.length; i++)
			{

				var signDiv = $("<div");

				var p = $("<p>").text("Rating: " + results[i].rating);

				var signImage = $("<img>");

				signImage.attr("src", results[i].images.fixed_height.url);

				signDiv.append(p);
				signDiv.append(signImage);

				$("#gifs-appear-here").prepend(animalDiv);
			}
		});
	});*/




/*var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dvYP7etkUUDkLBtsdXYJlKoIM2jYw0It";

$.ajax({
	url: queryURL,
	method: "GET"
}).then(function(response) {
	console.log(response);
});*/