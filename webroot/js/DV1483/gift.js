//jQuery(function() {
$(document).ready(function(){
    'use strict';
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    if (sPage === 'kmom03') {
        $.fn.extend({
            scrollToMe: function () {
                var x = $(this).offset().top - 55.0;
                $('html,body').animate({scrollTop: x}, 400, "swing");
                console.log($(this).offset().top);
            }});
            /**
            * Related to all examples. This expands the box to full width.
            */
            $('.gift').click(function() {
                $(this).scrollToMe();
                $(this).parent().addClass('fullwidth');
                $(this).parent().find('*').show('slow');
                $(this).parent().children('.gift').hide();
                console.log("Clicked to open a box, displaying it in full width.");
            });

            /**
            * Related to all examples. This minimizes the box.
            */
            $('.minimize').click(function(event) {
                $(this).parent().find('*').hide();
                $(this).parent().removeClass().addClass('box').show();
                $(this).parent().children('.gift').show();
                console.log("Minimizing the box.");
            });

            // Gift 1
            $('#box1 h3, #box1 p, #box1 img.example').click(function() {
                $(this).example1();
            });

            // Gift 2
            $('#box2, #box2 img.example').click(function(event) {
                if ($(this).is('img')) {
                    event.stopPropagation();
                    $(this).example2();
                    console.log("click on pic!");
                } else {
                    if ($(this).hasClass('fullwidth')) {
                        $(this).example1();
                    }
                }
            });

            // Gift 3
            $('#button').click(function() {
                $(this).example3();
            });

            // Gift 4
            $('#box4').example4();

            // Gift 5
            $('#box5').example5();

            // Gift 6
            $('#box6').example6();

            // Gift 7
            $('#box7').example7();

            // Gift 8
            $('#box8').one("click", function() {
                $(this).example8();
            });

            // Gift 9
            $('#ex9 img').click(function() {
                $(this).lightbox();
            });
        } else {
            $('.clickable').click(function() {
                $(this).addLightbox();
            });
            $('#lightbox-gallery-container').addGallery();
        }
    });
