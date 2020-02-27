import $ from 'jquery';
import 'slick-carousel';

export default function staffSlider() {
	$('#js-staff-slides').slick({
		arrows: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
    	slidesToScroll: 1,
  		responsive: [
	      	{
		        breakpoint: 768,
		        settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
		    	}
	    	}
	    ]
	});

	$('.js-staff-arrow-prev').click((e) => {
		e.preventDefault();
	    $('#js-staff-slides').slick('slickPrev');
	});

	$('.js-staff-arrow-next').click((e) => {
		e.preventDefault();
	    $('#js-staff-slides').slick('slickNext');
	});
}