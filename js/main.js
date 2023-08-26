/// <reference types="../@types/jquery" />

/*$('.open_Tab li').css('color' , 'white')*/

var targetDate = new Date("2024-12-31T23:59:59");




$(document).ready(function () {
    // Toggle side bar
    $('.open_Tab .open_box').animate({ width: 'toggle' }, 0)
    $('.open_Tab .btn_open').on('click', function () {
        $('.open_Tab .open_box').animate({ width: 'toggle' }, 1000)
    })
    $('.open_Tab .close_icon').on('click', function () {
        $('.open_Tab .open_box').animate({ width: 'toggle' }, 1000)
    })

    // Add click event handler to accordion headers
    $('.accordion-header').click(function () {
        // Toggle the visibility of the clicked accordion content
        $(this).next('.accordion-content').slideToggle();

        // Hide other accordion items' content
        $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
    });

    // Update CountDown each second
    var countdownInterval = setInterval(updateCountdown, 1000);

    // Set max chars message text
    $('#messageArea').on('input', function() {
        // Handle input changes here
        var enteredValue = $(this).val();
        console.log(enteredValue)
        $("#count").text(100 - enteredValue.length)
      });
});

function updateCountdown() {
    // Calculate the remaining time in milliseconds
    var currentTime = new Date().getTime();
    var remainingTime = targetDate - currentTime;

    if (remainingTime < 0) {
        return
    }

    // Calculate the remaining days, hours, minutes, and seconds
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the remaining time in the HTML elements
    $("#days").text(days + " D");
    $("#hours").text(hours + " h");
    $("#minutes").text(minutes + " m");
    $("#seconds").text(seconds + " s");
}