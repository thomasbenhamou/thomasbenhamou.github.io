$(function () {


    $(".col1").click(function () {
        $(".sqr1").animate({
            height: 'toggle'
        });

    });

    $(".col2").click(function () {

        $(".sqr2").animate({
            height: 'toggle'
        });
    });

    $(".col3").click(function () {

        $(".sqr3").animate({
            height: 'toggle'
        });
    });

    $(".col4").click(function () {

        $(".sqr4").animate({
            height: 'toggle'
        });
    });

    $(".sqr1, .sqr2, .sqr3, .sqr4").click(function () {
        $(this).animate({
            height: 'toggle'
        });
    });



});
