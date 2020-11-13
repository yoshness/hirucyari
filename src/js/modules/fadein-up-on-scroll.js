export default function fadeinUpOnScroll() {
    const BREAKPOINT_MOBILE = 768;
    // fade-in-up on scroll
    $(window).on('load, scroll', () => {
        $('.js-fadein').each((i, e) => {
        	let target = e, offset = 0;

            if($(window).width() > BREAKPOINT_MOBILE){
            	if($(target).data('offset') != undefined) {
            		offset = $(target).data('offset');
            	}
            	else {
            		offset = 200;
            	}
            }
            else {
                offset = 150;
            }

            let top_of_object = $(target).offset().top + offset;
            let bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > top_of_object ){
                $(target).addClass('is-active');
                $(target).find('.js-draw-from-right').first().addClass('is-shown');
            }
        }); 
    });
}