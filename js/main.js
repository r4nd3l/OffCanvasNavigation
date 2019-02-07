// Default DevCorner JavaScript Setting
var $page = $('.page');

$('.menu_toggle').on('click', function(){
  $page.toggleClass('ledge');
});

$('.content').on('click', function(){
  $page.removeClass('ledge');
});
