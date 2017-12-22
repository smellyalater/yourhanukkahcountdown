// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.





$(document).ready(function() {



    // countdown timer

    // Set the date we're counting down to
    var countDownDate = new Date("Dec 2, 2018 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;



        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var countdownTimerObj = ({
            timerDays: days,
            timerHours: hours,
            timerMinutes: minutes,
            timerSeconds: seconds
        });



        // Output the result in an element with id="demo"
        // document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        //     minutes + "m " + seconds + "s ";


        $('.days').text(countdownTimerObj.timerDays)
        $('.hours').text(countdownTimerObj.timerHours);
        $('.minutes').text(countdownTimerObj.timerMinutes);
        $('.seconds').text(countdownTimerObj.timerSeconds);


        // If the count down is over, write some text 
        //     if (distance < 0) {
        //         clearInterval(x);
        //         document.getElementById("demo").innerHTML = "EXPIRED";
        //     }
    }, 1000);

});