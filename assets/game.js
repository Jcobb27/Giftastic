$(document).ready(function () {
    console.log("ready!");
    //topics array
    var topics = ["panda", "polar beas", "penguin", "dog", "lion", "giraffe", "ape"];

    // Constructing a URL to search Giphy 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=";
    var APIKey = "&api_key=LBkkCevxm144fNiDp9zvKBSM3GXQ4cv9";


    //loop through topics array
    for (i = 0; i < topics.length; i++) {
        //AJAX method
        $.ajax({
            url: queryURL + topics[i] + APIKey,
            method: "GET"
        })

        $("#buttonsView").html();


    }

});