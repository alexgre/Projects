$(document).ready(function() {
    $('.ui.checkbox')
        .checkbox();
    $('.ui.rating')
        .rating();
    window.addEventListener('load', function() {
        new FastClick(document.body);
    }, false);
    // PANEL
    // Expand Panel
    $("#open").click(function() {
        $("div#panel").slideDown("slow");

    });

    // Collapse Panel
    $("#close").click(function() {
        $("div#panel").slideUp("slow");
    });

    // Switch buttons from "Log In | Register" to "Close Panel" on click
    $("#toggle a").click(function() {
        $("#toggle a").toggle();
    });
    // ---- MENU SLIDERS
    $(".box1").click(function() {
        $(".box2").slideToggle(800);

    });
    $(".box3").click(function() {
        $(".box4").slideToggle(800);
    });
    $(".box5").click(function() {
        $(".box6").slideToggle(800);
    });
    $(".box7").click(function() {
        $(".box8").slideToggle(800);
    });
    
    // $( ".box3" ).click(function() {
    //   $( ".box4" ).hide('slow');
    // });
    // $(".trigger").click(function() {
    //     var currentTrigger = $(this);            
    //     currentTrigger.addClass('current');
    //     $('.trigger:not(.current)').next(".blind").hide('slow', function(){
    //         currentTrigger.removeClass('current').next(".blind").show("slow");
    //     });

    // });
    


    $('.trigger').next('.blind').hide();
    $('.trigger').hover(function() {
        var el = $(this).next('.blind');
        var doit = el.is(':visible') ? el.hide('slow') : ($('.blind').hide('slow'))(el.show('slow'));
    });


});
