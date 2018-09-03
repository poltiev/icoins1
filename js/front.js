//клик по бургеру
$('.burger').on('click', function(){
//бургер
	$(this).next().slideToggle(500);
	$(this).next().toggleClass('active');
	$(this).toggleClass('active');
});
// клик по иконке
$('.login-in').on('click', function(){
	$(this).next().slideToggle(500);
	$(this).toggleClass('active');
});
// Выпадающее меню
jQuery(function($) {
	// В класс "foo" обернуто все содержимое страницы.
	// Можно повесить событие и на body, но тогда это меню не будет работать на I-pad
	jQuery('.all').click(function( event ){
		// проверяем находится ли элемент на который кликнули в нашем меню,
		// то есть в контейнере "menu-container"
		var eventInMenu = $( event.target ).parents('.menu-container');

		// если родителя нет, значит клик был вне меню и меню сворачиваем
		if( !eventInMenu.length ){
			$('.dropdown-item').slideUp(500);
		}
	});
	jQuery('.menu-container .dropdown').click(function(){
		$('.dropdown-item').slideUp(500);
		$(this).children('.dropdown-item').slideToggle(500);
	});
});


// tabs
$('ul.tabs-caption').on('click', 'li:not(.active)', function() {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
});
//scroll top
$(window).scroll(function() {
	var height = $(window).scrollTop();
	/*скролл на 100px*/
	if(height > 100){
		$('.top-menu').addClass('active');
	} else{
		$('.top-menu').removeClass('active');
	}
});
