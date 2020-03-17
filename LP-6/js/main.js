//ドロワーメニューの利用宣言
$(document).ready(function () {
	$('.drawer').drawer();
});

//スライダー
var swiper = new Swiper('.swiper-container', {
	loop: true,
	// autoplay: 5000,
	slidesPerView: 1, //小数点が使える　2.8枚表示 min
	// width: 422,
	// spaceBetween: 24,
	// centeredSlides: false,
	// initialSlide: 0,
	// setWrapperSize: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets', //○○○
		clickable: true,
	},
	breakpoints: {
		//min
		771: {
			slidesPerView: 2.6,
			spaceBetween: 24,
		},
	},
});

//アコーディオン
$('.faqList-item').click(function () {
	var answer = $(this).find('.faqList-item-answer');
	if (answer.hasClass('open')) {
		answer.removeClass('open');
		answer.slideUp();
		$(this)
			.find('span')
			.text('＋');
	} else {
		answer.addClass('open');
		answer.slideDown();
		$(this)
			.find('span')
			.text('－');
	}
});

//ハンバーガーメニュー
$('.hum').click(function () {
	$('.hum__line').toggleClass('active');
	$('.gnav').fadeToggle();
});
$('.gnav__wrap').click(function () {
	$('.hum').click();
});

// アニメーション
new WOW().init();


$('.gnav-item a').on('click', function () {
	//ナビゲーション現在地表示
	// $('.humNavi a').removeClass('active');
	// if (!$(this).hasClass('active')) {
	// 	$(this).addClass('active');
	// }

	//アンカーリンク　スムーススクロール
	var id = $(this).attr('href');
	var position = $(id).offset().top - 79; //header幅分引く
	$('html, body').animate(
		{
			scrollTop: position,
		},
		300,
	);
});
$('.drawer-menu-item').on('click', function () {
	//ナビゲーション現在地表示
	// $('.humNavi a').removeClass('active');
	// if (!$(this).hasClass('active')) {
	// 	$(this).addClass('active');
	// }

	//アンカーリンク　スムーススクロール
	var id = $(this).attr('href');
	var position = $(id).offset().top - 68; //header幅分引く
	$('html, body').animate(
		{
			scrollTop: position,
		},
		300,
	);
});

//フローティングボタン　スムーススクロール
$('.floating').on('click', function () {
	console.log('test');
	$('html, body').animate(
		{
			scrollTop: 0,
		},
		300,
	);
	return false;
});

$(window).on('scroll', function () {
	//スムーススクロール　フローティングボタン
	if ($(this).scrollTop() > 100) {
		$('.floating').fadeIn();
	} else {
		$('.floating').hide();
	}

	//最初のセクションまで来たらヘッダーの色変更
	var scrollCount = $(this).scrollTop();
	var position = $('.news').offset().top;
	if (position < scrollCount) {
		$('.gnav').css('background-color', '#fff');
	} else {
		$('.gnav').css('background-color', '#ffffff1a');
	}
});
