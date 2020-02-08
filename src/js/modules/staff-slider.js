import $ from 'jquery';
import 'slick-carousel';

export default function staffSlider() {
	$('#js-staff-slides').slick({
		arrows: false,
		infinite: true,
		speed: 1000,
		// fade: true,
		cssEase: 'cubic-bezier(.7, 0, .6, 1)',
		// autoplay: true,
  		// autoplaySpeed: 5000
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