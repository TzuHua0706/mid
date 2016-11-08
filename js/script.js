$(document).ready(function() {

	// when a nav parent is clicked
	$(".site-nav-rwd .menu").click(function() {
    var $ul = $(this).parent(".site-nav-rwd").children(".group")
		// if section is already active and clicked again
		if ( $ul.hasClass("menu-click") ) {
			$ul.removeClass("menu-click");
			$ul.slideUp();
		} else {
		// if section is made active
			$ul.addClass("menu-click");
			$ul.slideDown();
			return false;
		}
	}); // end click event handler
});
