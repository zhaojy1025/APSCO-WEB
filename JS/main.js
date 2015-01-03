/*导航栏相关代码*/
function navEffect() {
	$("#nav li").hover(function() {
		$(this).find(".child").slideDown(200, "linear")
	}, function() {
		$(this).find(".child").hide()
	})
}
jQuery(function() {
	navEffect()
})

/* 图片库相关代码 */
var $slider = $('.slider_picture ul');
var $slider_child_l = $('.slider_picture ul li').length;
var $slider_width = $('.slider_picture ul li').width();
$slider.width($slider_child_l * $slider_width);

var slider_count = 0;

if ($slider_child_l < 6) {
	$('#btn-right-picture').css({
		cursor : 'auto'
	});
	$('#btn-right-picture').removeClass("dasabled");
}

$('#btn-right-picture').click(function() {
	if ($slider_child_l < 6 || slider_count >= $slider_child_l - 6) {
		return false;
	}

	slider_count++;
	$slider.animate({
		left : '-=' + $slider_width + 'px'
	}, 'slow');
	slider_pic();
});

$('#btn-left-picture').click(function() {
	if (slider_count <= 0) {
		return false;
	}

	slider_count--;
	$slider.animate({
		left : '+=' + $slider_width + 'px'
	}, 'slow');
	slider_pic();
});

function slider_pic() {
	if (slider_count >= $slider_child_l - 6) {
		$('#btn-right-picture').css({
			cursor : 'auto'
		});
		$('#btn-right-picture').addClass("dasabled");
	} else if (slider_count > 0 && slider_count <= $slider_child_l - 6) {
		$('#btn-left-picture').css({
			cursor : 'pointer'
		});
		$('#btn-left-picture').removeClass("dasabled");
		$('#btn-right-picture').css({
			cursor : 'pointer'
		});
		$('#btn-right-picture').removeClass("dasabled");
	} else if (slider_count <= 0) {
		$('#btn-left-picture').css({
			cursor : 'auto'
		});
		$('#btn-left-picture').addClass("dasabled");
	}
}

$('.slider_picture a').hover(function() {
	if ($(this).find('img:animated').length)
		return;
	$(this).animate({
		marginTop : '0px'
	}, 300);
	$(this).find('img').animate({
		width : '130px'
	}, 300);
}, function() {

	$(this).animate({
		marginTop : '24px'
	}, 200);
	$(this).find('img').animate({
		width : '100px'
	}, 200);
});

/* 视频库相关代码 */
var $slider1 = $('.slider_video ul');
var $slider_child_l1 = $('.slider_video ul li').length;
var $slider_width1 = $('.slider_video ul li').width();
$slider1.width($slider_child_l1 * $slider_width1);

var slider_count1 = 0;

if ($slider_child_l1 < 6) {
	$('#btn-right-video').css({
		cursor : 'auto'
	});
	$('#btn-right-video').removeClass("dasabled");
}

$('#btn-right-video').click(function() {
	if ($slider_child_l1 < 6 || slider_count1 >= $slider_child_l1 - 6) {
		return false;
	}

	slider_count1++;
	$slider1.animate({
		left : '-=' + $slider_width1 + 'px'
	}, 'slow');
	slider_pic1();
});

$('#btn-left-video').click(function() {
	if (slider_count1 <= 0) {
		return false;
	}

	slider_count1--;
	$slider1.animate({
		left : '+=' + $slider_width1 + 'px'
	}, 'slow');
	slider_pic1();
});

function slider_pic1() {
	if (slider_count1 >= $slider_child_l1 - 6) {
		$('#btn-right-video').css({
			cursor : 'auto'
		});
		$('#btn-right-video').addClass("dasabled");
	} else if (slider_count1 > 0 && slider_count1 <= $slider_child_l1 - 6) {
		$('#btn-left-video').css({
			cursor : 'pointer'
		});
		$('#btn-left-video').removeClass("dasabled");
		$('#btn-right-video').css({
			cursor : 'video'
		});
		$('#btn-right-video').removeClass("dasabled");
	} else if (slider_count1 <= 0) {
		$('#btn-left-video').css({
			cursor : 'auto'
		});
		$('#btn-left-video').addClass("dasabled");
	}
}

$('.slider_video a').hover(function() {
	if ($(this).find('img:animated').length)
		return;
	$(this).animate({
		marginTop : '0px'
	}, 300);
	$(this).find('img').animate({
		width : '130px'
	}, 300);
}, function() {

	$(this).animate({
		marginTop : '24px'
	}, 200);
	$(this).find('img').animate({
		width : '100px'
	}, 200);
});
