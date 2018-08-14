
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

        
        for (var i = 0; i < results.length; i++) {

          
          var dogDiv = $("<div>");

          
          var p = $("<p>").text("Rating: " + results[i].rating);

          
          var dogImg = $("<img>");
          
          dogImg.attr("src", results[i].images.fixed_height.url);

          
          dogDiv.append(p);
          dogDiv.append(dogImg);

          
          $("#dog-view").prepend(dogDiv);
        }
      });



        $("#newButtons").empty();

        
        for (var i = 0; i < newDogs.length; i++) {

        
          var a = $("<button>");
        
          
          a.attr("data-name", newDogs[i]);
         
          a.text(newDogs[i]);
          
          $("#newButtons").append(a);
        }








    

      
      $("#add-dog").on("click", function(event) {
        event.preventDefault();
        
        var doggie = $("#dogInput").val().trim();

        
        newDogs.push(doggie);

        $("#newButtons").append(newDogs);

        
      });





});