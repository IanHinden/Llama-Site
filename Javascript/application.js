$(document).ready(function(){
	$('#eyephoto').on('click', 'button', function() {
		$('.eyeclass').slideToggle();
	});
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1) {
	$('header').addClass('sticky');
	}
	else{
	$('header').removeClass('sticky');
	}
});

function cycleImages(){
      var $active = $('#cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }
    
$(document).ready(function(){
setInterval('cycleImages()', 7000);
})

$('.anim').hover(function() {
      $(this).stop().animate({ fontSize : '20px' });
},
function() {
      $(this).stop().animate({ fontSize : '12px' });
});
