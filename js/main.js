/* global $ alert, console */

$(function() {

    'use strict';

    /* nicescroll */

    $('html').niceScroll({

        cursorcolor: '#f7600e',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'

    });

    /* change header height */

    $('.header').height($(window).height());

    /* Show hidden items */

    $('.show-more').click(function() {
        $('.our-work .hidden').fadeIn(2000);
    })

    /* testimonials */

    var leftArrow = $('.testim .fa-chevron-left'),
        rightArrow = $('.testim .fa-chevron-right');

    function checkClients() {

        if ($('.client:first').hasClass('active')) {

            leftArrow.fadeOut();

        } else {

            leftArrow.fadeIn();
        } 

        if ($('.client:last').hasClass('active')) {

            rightArrow.fadeOut();

        } else {
            
            rightArrow.fadeIn();
        } 
    }

    checkClients()

    $('.testim i').click(function() {

        if($(this).hasClass('fa-chevron-right')) {

            $('.testim .active').fadeOut(100, function() {

                $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                checkClients();

            });

        } else {

            $('.testim .active').fadeOut(100, function() {

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                checkClients();

            });

        }

    });

});