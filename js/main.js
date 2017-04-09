setInterval(function () {
    $(".highlight").toggleClass("hidden")
}, 12000);

setInterval(function () {
    var current = $(".testimonial:visible");
    current.addClass("hidden");
    var next = current.next(".testimonial");
    if (next.length === 0)
        next = current.siblings().filter(".testimonial:first");
    next.removeClass("hidden");
}, 12000);


$(document).ready(function () {
    $(".question-action").click(function () {
        $(this).children('.answer').toggleClass("hidden");
    });

    $("#contact").submit(function (event) {
        event.preventDefault();

        var contact = {
            title: $("#title").val(),
            email: $("#email-address").val(),
            message: $("#message").val()
        };

        $.post("https://ehgb201ss5.execute-api.eu-west-1.amazonaws.com/prod/contact", contact)
            .done(function (data) {
                $("#title").val("");
                $("#email-address").val("");
                $("#message").val("");
                $(".contact-message")
                    .text("Thank you for getting in touch. We will get back to you shortly.")
                    .removeClass("hidden");
            });
    });

    $.get("https://ehgb201ss5.execute-api.eu-west-1.amazonaws.com/prod/tweet", function (tweets) {
        tweets.forEach(function (tweet) {
            $(".tweets").append(
                "<div class='tweet'>" +
                "   <div class='tweet-icon'>" +
                "       <i class='icon-et-logo'></i>" +
                "   </div><div class='tweet-details'>" +
                "   <div class='tweet-header'>" +
                "       <div class='tweet-title'>ET Driving School</div>" +
                "       <div class='tweet-author'>@etdrivingschool</div>" +
                "   </div>" +
                "   <div class='tweet-text'>" + tweet.text + "</div>" +
                "   </div>" +
                "</div>")
        });
    });
});