$(document).ready(function () {
    $("#div1").click(function () {
        $("#div2").removeClass("blue");
        $("#div3").removeClass("blue");
        $("#div4").removeClass("blue");
        $("#div5").removeClass("blue");
        $("#div1").addClass("blue");
    });
    $("#div2").click(function () {
        $("#div1").removeClass("blue");
        $("#div3").removeClass("blue");
        $("#div4").removeClass("blue");
        $("#div5").removeClass("blue");
        $("#div2").addClass("blue");
    });
    $("#div3").click(function () {
        $("#div1").removeClass("blue");
        $("#div2").removeClass("blue");
        $("#div4").removeClass("blue");
        $("#div5").removeClass("blue");
        $("#div3").addClass("blue");
    });
    $("#div4").click(function () {
        $("#div1").removeClass("blue");
        $("#div2").removeClass("blue");
        $("#div3").removeClass("blue");
        $("#div5").removeClass("blue");
        $("#div4").addClass("blue");
    });
    $("#div5").click(function () {
        $("#div1").removeClass("blue");
        $("#div2").removeClass("blue");
        $("#div3").removeClass("blue");
        $("#div4").removeClass("blue");
        $("#div5").addClass("blue");
    });
});