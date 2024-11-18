$(document).ready(function () {
	const $sliderList = $('.slider-list');
	const $sliderPrev = $('.slider-prev');
	const $currentSlide = $('.current-slide');
	const $totalSlides = $('.total-slides');

	// Инициализация основного слайдера
	$sliderList.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		appendDots: $('.slider-dots'),
		asNavFor: '.slider-prev',
		customPaging: function(slick, index) {
			var image = $(slick.$slides[index]).find('.slider__img').attr('src');
			return '<div class="dots-line"></div>'
		}
	});

	// Инициализация навигационного слайдера
	$sliderPrev.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-list',
		arrows: true,
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		nextArrow: document.querySelector('.slick-next'),
		prevArrow: document.querySelector('.slick-prev') 
	});

	// Установка общего количества слайдов
	$totalSlides.text($sliderList.slick('getSlick').slideCount);

	// Обновление текущего слайда
	$sliderList.on('afterChange', function (event, slick, currentSlide) {
		$currentSlide.text(currentSlide + 1);
	});
});



$(document).ready(function () {
	$(".menu-item").hover(
	function () {
		$(this).find(".submenu-list").stop(true, true).fadeIn(300).addClass("active");
	},
	function () {
		$(this).find(".submenu-list").stop(true, true).fadeOut(300).removeClass("active");
	}
	);
});
