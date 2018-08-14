
var newDogs = [];
// This is a on click function that connects all the functionality I want to my HTML buttons
$("button").on("click", function(){

    // Attributing API info to button
    var dog = $(this).attr("data-dog");

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + dog + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        console.log(queryURL);

        console.log(response);
      
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var dogDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          var dogImg = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          dogImg.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the dogDiv
          dogDiv.append(p);
          dogDiv.append(dogImg);

          // Prependng the dogDiv to the HTML page in the "#gifs-appear-here" div
          $("#dog-view").prepend(dogDiv);
        }
      });


 // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#newButtons").empty();

        // Looping through the array of movies
        for (var i = 0; i < newDogs.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
        
          // Adding a data-attribute
          a.attr("data-name", newDogs[i]);
          // Providing the initial button text
          a.text(newDogs[i]);
          // Adding the button to the buttons-view div
          $("#newButtons").append(a);
        }








    

      
      $("#add-dog").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var doggie = $("#dogInput").val().trim();

        // Adding movie from the textbox to our array
        newDogs.push(doggie);

        $("#newButtons").append(newDogs);

        
      });





});