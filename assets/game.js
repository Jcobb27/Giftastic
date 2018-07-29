$(document).ready(function () {
    console.log("ready!");
    //topics array
    var topics = ["panda", "polar bears", "penguin", "dog", "lion", "giraffe", "ape"];

    // Function for creating buttons
    function renderButtons() {
        $("#buttonsView").empty();
        //loop through topics array, labeling buttons
        for (var i = 0; i < topics.length; i++) {
            var button = $("<button>");
            button.addClass("animalBtn");
            button.attr("data-name", topics[i]);
            button.text(topics[i]);
            //apend button to page
            $("#buttonsView").append(button);
        }
    }
    renderButtons();

    //on click submit, get the user input and add it to animal array
    $("#submitBtn").on("click", function (event) {
        event.preventDefault();
        var animal = $("#animalInput").val().trim();
        topics.push(animal);
        //run render buttons function
        renderButtons();
    })

    //display GIFs function
    function displayGIFs() {
        var animal = $(this).attr("data-name");
        //create URL for AJAX call
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=LBkkCevxm144fNiDp9zvKBSM3GXQ4cv9&limit=10";

        //AJAX method for Giphy
        $.ajax({
            url: queryURL,
            method: "GET"
            //promise event
        }).then(function (response) {
            console.log(response);
            //looping through the response array 
            for (var j = 0; j < response.data.length; j++) {
                //creat div for each GIF
                var GIFDiv = $("<div class='GIFDiv'>");
                //store rating in a variable
                var rated = response.data[j].rating;
                console.log("Rating: " + rated);
                //create p tag with rating text
                pRating = $("<p>").text("Rating: " + rated);
                //add rating to GIF Div
                GIFDiv.append(pRating);
                //store image url in a variable
                var imageURL = response.data[j].images.fixed_height_still.url;
                //create an element to hold the image
                var image = $("<img>").attr("src", imageURL);
                //add image to GIF Div
                GIFDiv.append(image);
                //put GIF and rating above previous GIF
                $("#GIFSView").prepend(GIFDiv);
            }

        })

    }

    // Adding a click event listener for class "animalBtn"
    $(document).on("click", ".animalBtn", displayGIFs);

});