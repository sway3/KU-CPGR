$(document).ready(function() {

    $(".all").on("click", function() {

        $(".menu").addClass("on");
        $(".dim").show();

    });

    $(".menu .close").on("click", function() {

        $(".menu").removeClass("on");
        $(".dim").hide();

    });

});