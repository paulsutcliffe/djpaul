// Ticker
$(document).ready(function(){
		$('#fade').list_ticker({
			speed:4000,
			effect:'fade'
		});
		$('#slide').list_ticker({
			speed:2000,
			effect:'slide'
		});
		$(".video-fit").fitVids();

})


// Scroll Page

var scrollElement = 'html, body',
        $scrollElement;

    $(function() {
    "use strict";
        $('html, body').each(function () {
            var initScrollLeft = $(this).attr('scrollLeft');

            $(this).attr('scrollLeft', initScrollLeft + 1);
            if ($(this).attr('scrollLeft') == initScrollLeft + 1) {
                scrollElement = this.nodeName.toLowerCase();
                $(this).attr('scrollLeft', initScrollLeft);
                return false;
            }
        });
        $scrollElement = $(scrollElement);
    });

    $(function() {
	"use strict";
        var $sections = $('section.section');

        $sections.each(function() {
            var $section = $(this);
            var hash = '#' + this.id;

            $('a[href="' + hash + '"]').click(function(event) {
                $scrollElement.stop().animate({
                    scrollLeft: $section.offset().left
                }, 1200, 'easeOutCubic', function() {
                    window.location.hash = hash;
                });

				$('.cbp-vimenu a').removeClass('active');
                if($(this).hasClass('active-links')) {
                    var link = $(this).attr('href');
                    $('a[href="' + hash + '"]').addClass('active');
                } else {
                    $(this).addClass('active');
                }

                event.preventDefault();
            });
        });

    });

// Set Sections
$(document).ready(function() {

    function setSections() {
        var sections = $("section"),
            wWidth = $(window).width(),
            wCounter = 0;
        $.each(sections, function(eq) {
            if(eq > 0) {
                $(this).css({'left': wCounter});
            }
            wCounter = wCounter + $(this).width();
        });
    }

    function forcePosition() {
        var hash = window.location.hash,
        $panels = $('section');
        $panels.each(function(eq) {
            var panelId = $(this).attr('id');
            if( '#' + panelId == hash ) {
                var wWidth = $(window).width(),
                    scrollElement = 'html, body';

                $(scrollElement).stop().animate({
                    scrollLeft: wWidth * eq
                }, 300, 'easeOutCubic');

            }
        });
    }

    $(window).resize(function() {
        setSections();
        forcePosition();
    });

    setSections();


    function setNavigation() {
        var div = $('#fixed-elements'),
            wWidth = $(window).width();

        div.css({'left': wWidth });
    }

    setNavigation();

    function adjustNavigation() {
        var div = $('#fixed-elements'),
            scroll = $(window).scrollLeft(),
            wWidth = $(window).width();

        if(scroll >= wWidth) {
            div.css({
                'left': 0
            });
        } else {
            div.css({
                'left': wWidth - scroll
            });
        }
    }

    $(document).scroll(function() {
        adjustNavigation();
    });

    $(window).resize(function() {
        adjustNavigation();
    });

 });


//  Portfolio

$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });

	$("#loading").fadeOut("1000", function() {
	// Animation complete
		$('#loading img').css("display","none");
		$('#loading').css("display","none");
		$('#loading').css("background","none");
		$('#loading').css("width","0");
		$('#loading').css("height","0");
	});


});



// Slide Show

$(function() {
		"use strict";
		cbpBGSlideshow.init();
});


	//if submit button is clicked
	$('#submit').click(function () {

	//Get the data from all the fields
	var name = $('input[name=name]');
	var email = $('input[name=email]');
	var website = $('input[name=website]');
	var comment = $('textarea[name=comment]');
	var returnError = false;

	//Simple validation to make sure user entered something
	//Add your own error checking here with JS, but also do some error checking with PHP.
	//If error found, add hightlight class to the text field
	if (name.val()=='') {
		name.addClass('error');
		returnError = true;
	} else name.removeClass('error');

	if (email.val()=='') {
		email.addClass('error');
		returnError = true;
	} else email.removeClass('error');

	if (comment.val()=='') {
		comment.addClass('error');
		returnError = true;
	} else comment.removeClass('error');

	// Highlight all error fields, then quit.
	if(returnError == true){
		return false;
	}

	//organize the data
	var data = 'name=' + name.val() + '&email=' + email.val() + '&website=' +
	website.val() + '&comment='  + encodeURIComponent(comment.val());

	//disabled all the text fields
	$('.text').attr('disabled','true');

	//show the loading sign
	$('.loading').show();


});



//PlaceHolder for IE
if(!Modernizr.input.placeholder){

        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            });
        });
}
