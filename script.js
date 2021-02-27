$(document).ready(function() {
    $(".hide-development").click(function(){
        $(".hide-development").slideDown("1500").hide("1000");
        $("#development").show("1500");
    });
    $("#development").click(function(){
        $("#development").slideUp("1500");
        $(".hide-development").slideDown("1500");
    });
});