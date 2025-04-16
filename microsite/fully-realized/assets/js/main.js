$(document).ready(function() {
    $("#mbuttons").click(function() {
        $(".mlinks").toggleClass("showlinks");
        $("#open").toggle();
        $("#close").toggle();
    });
});

$(window).resize(function() {
    if ($(window).width() > 1300) {
        $(".mlinks").removeClass("showlinks");
        $("#open").show();
        $("#close").hide();
    }
});

let debounceTimer;
$(window).scroll(function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function() {
        if ($(window).scrollTop() > 10) {
            $("header").addClass("shrink");
        } else {
            $("header").removeClass("shrink");
        }
    }, 50);
});