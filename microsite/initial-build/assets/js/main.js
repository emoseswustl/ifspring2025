$(document).ready(function() {
    $("#mbuttons").click(function() {
        $(".mlinks").css("display", function(_, currentDisplay) {
            return currentDisplay === "none" ? "flex" : "none";
        });
        $("#open").toggle();
        $("#close").toggle();
    });
});

$(window).resize(function() {
    if ($(window).width() > 1100) {
        $(".mlinks").hide();
        $("#open").show();
        $("#close").hide();
    }
});