$(document).ready(function() {

    //_________VARIABLES__________


    var topics = ['Soccer', 'American Football', 'Baseball', 'Basketball', 'Hockey'];

    //_________FUNCTIONS__________

    function generateGifInfo() {

        var sport = $(this).attr('data-name');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sport +
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
            var rating = response[i].rating;
            

            //creates image tag used to display image
            var gifElement = $('<img>');

            //attaches image url src to created img tag
            gifElement.attr('src', imageUrl);
            gifElement.attr('alt', 'sport image');

            $('.gifDump').append(gifElement, rating);
                }
        })

    }

    //displaying gifs when clicked   
    $(document).on('click', '.sportButton', generateGifInfo);
   



    //iterates through the array of given sports
    function generateButton() {
        $("#buttonsDump").empty();

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

    
     $('.sportButton').on("click", function(event) { 
        event.preventDefault();

        var sportGif = $('#gifInput').val().trim();

        topics.push(sportGif);

            

    });
});






//__________________________________________-
/*

        //for (var i = 0; i<topics.length; i++){}
    console.log(category);*/


//create gifDiv element with a class of gifDump to hold the gifs
// var gifDiv = $("<div>");
