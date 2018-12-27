/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 200) {
        $('#scroll_btn').fadeIn();
    } else {
        $('#scroll_btn').fadeOut();
    }
});
$(document).ready(function() {
    $("#scroll_btn").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/