$(document).ready(function() {

    //_________VARIABLES__________


    var topics = ['Soccer', 'American Football', 'Baseball', 'Basketball', 'Hockey'];

    //_________FUNCTIONS__________

    function generateGifInfo() {

        //empty the displayed gifs everytime a button is clicked.
         $(".gifDump").empty();

         //assigns data with attribute name as a search parameter in the queryURL
        var sport = $(this).attr('data-name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sport +
            "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET",
        }).done(function(response) {
            console.log(response)


        var response = response.data;
        for (var i=0; i<response.length; i++){

            //grabs image url from ajax request
            var imageUrl = response[i].images.fixed_height.url;


            //takes the rating from api call 
            var rating = " Rating: " + response[i].rating;
         

            //creates image tag used to display image
            var gifElement = $('<img class="sport-image well">');

            //attaches image url src to created img tag
            gifElement.attr('src', imageUrl);
            gifElement.attr('alt', 'sport image');

            $('.gifDump').append(gifElement);
            $('.rating').append(rating);

                }
        })

    }

    //displaying gifs when clicked   
    $(document).on('click', '.sportButton', generateGifInfo);

    //iterates through the array of given sports
    function generateButton() {

        topics.forEach(function(category) {
            var buttons = $("<button>");

            buttons.addClass("sportButton");

            buttons.attr("data-name", category);

            buttons.text(category);

            $("#buttonsDump").append(buttons);
        });
    }

//generates pre determined buttons
    generateButton();

    
     $('#gifSubmit').on("click", function(event) { 
        event.preventDefault();
         $("#buttonsDump").empty();

            console.log(event)
        var sportGif = $('#gifInput').val().trim();

        topics.push(sportGif);
            console.log(topics)
            
                generateButton();
    });

$('.sport-image').on('click',function(){

    var state = $(this).attr("data-state");

    if(state === "still"){
        $(this).attr("src", $(this).attr('data-animate'));
        $(this).attr("data-state","animate");
    } else {
        $(this).attr("src", $(this).attr('data-still'));
        $(this).attr("data-state","still")
    }
});

});

//__________________________________________-
/*

        //for (var i = 0; i<topics.length; i++){}
    console.log(category);*/


//create gifDiv element with a class of gifDump to hold the gifs
// var gifDiv = $("<div>");
