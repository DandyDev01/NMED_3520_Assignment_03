
$(".light-toggle").on("click", function() {
    $("#overlay").toggleClass("disable");
});

$("#painting").on("click", function() {
    var painting = $("#painting");

    if (painting.attr("src") == "Images/painting_crocked_01.png") {
        painting.attr("src", "Images/painting_crocked_00.png");
    }
    else {
        painting.attr("src", "Images/painting_crocked_01.png");
    }
});


$(document).ready(function () {
    // Click event handler for the image
    $('#myImage').on('click', function () {
        // Play the audio when the image is clicked
        $('#myAudio')[0].play();
    });
});

 // Function to make a specific image wiggle
 function wiggleImage(image) {
    // Use jQuery"s animate function to create a simple wiggle effect
    $(image).animate({ marginLeft: "+=10px" }, 100)
           .animate({ marginLeft: "-=20px" }, 100)
           .animate({ marginLeft: "+=10px" }, 100);

    // Call the wiggleImage function for the same image at a different interval
    var randomInterval = Math.floor(Math.random() * 3000) + 1000; // Random interval between 1 and 4 seconds
    setTimeout(function() {
        wiggleImage(image);
    }, randomInterval);
}

// Function to start the wiggle effect for each image
function startWiggle() {
    // Select all images with the class "wiggle-image"
    var images = $(".wiggle-image");

    // Start the wiggle effect for each image
    images.each(function() {
        wiggleImage(this);
    });
}

// Initial call to start the animation
startWiggle();