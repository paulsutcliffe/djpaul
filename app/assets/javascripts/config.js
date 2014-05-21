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


// Gird
$(function() {
		"use strict";
		Grid.init();
});

// Testimonials
$( function() {
	     "use strict";
		/*
		- how to call the plugin:
		$( selector ).cbpQTRotator( [options] );
		- options:
		{
			// default transition speed (ms)
			speed : 700,
			// default transition easing
			easing : 'ease',
			// rotator interval (ms)
			interval : 8000
		}
		- destroy:
		$( selector ).cbpQTRotator( 'destroy' );
		*/

		$( '#cbp-qtrotator' ).cbpQTRotator();

} );

//FancyBox

$(document).ready(function() {

		$('.fancybox').fancybox();

		$(".fancybox-effects-a").fancybox({
			helpers: {
				title : {
					type : 'outside'
				},
				overlay : {
					speedOut : 0
				}
			}
		});

		// Disable opening and closing animations, change title type
		$(".fancybox-effects-b").fancybox({
			openEffect  : 'none',
			closeEffect	: 'none',

			helpers : {
				title : {
					type : 'over'
				}
			}
		});

		// Set custom style, close if clicked, change title type and overlay color
		$(".fancybox-effects-c").fancybox({
			wrapCSS    : 'fancybox-custom',
			closeClick : true,

			openEffect : 'none',

			helpers : {
				title : {
					type : 'inside'
				},
				overlay : {
					css : {
						'background' : 'rgba(238,238,238,0.85)'
					}
				}
			}
		});

		// Remove padding, set opening and closing animations, close if clicked and disable overlay
		$(".fancybox-effects-d").fancybox({
			padding: 0,

			openEffect : 'elastic',
			openSpeed  : 150,

			closeEffect : 'elastic',
			closeSpeed  : 150,

			closeClick : true,

			helpers : {
				overlay : null
			}
		});

		/*
		 *  Button helper. Disable animations, hide close button, change title type and content
		 */

		$('.fancybox-buttons').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',

			prevEffect : 'none',
			nextEffect : 'none',

			closeBtn  : false,

			helpers : {
				title : {
					type : 'inside'
				},
				buttons	: {}
			},

			afterLoad : function() {
				this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			}
		});


		/*
		 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
		 */

		$('.fancybox-thumbs').fancybox({
			prevEffect : 'none',
			nextEffect : 'none',

			closeBtn  : false,
			arrows    : false,
			nextClick : true,

			helpers : {
				thumbs : {
					width  : 50,
					height : 50
				}
			}
		});

		/*
		 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
		*/
		$('.fancybox-media')
			.attr('rel', 'media-gallery')
			.fancybox({
				openEffect : 'none',
				closeEffect : 'none',
				prevEffect : 'none',
				nextEffect : 'none',

				arrows : false,
				helpers : {
					media : {},
					buttons : {}
				}
			});

		/*
		 *  Open manually
		 */

		$("#fancybox-manual-a").click(function() {
			$.fancybox.open('1_b.jpg');
		});

		$("#fancybox-manual-b").click(function() {
			$.fancybox.open({
				href : 'iframe.html',
				type : 'iframe',
				padding : 5
			});
		});

		$("#fancybox-manual-c").click(function() {
			$.fancybox.open([
				{
					href : 'img/portfolio/3.jpg',
					title : 'Project Name'
				}, {
					href : 'img/portfolio/5.jpg',
					title : 'Project Name'
				}, {
					href : 'img/portfolio/7.jpg',
					title : 'Project Name'
				}
			], {
				helpers : {
					thumbs : {
						width: 75,
						height: 50
					}
				}
			});
		});


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
