$(document).ready(function(){ 
   $('gauche li a').removeClass('active');
   alert('id')
   $(this).addClass('active');
   var id=$(this).attr('href');
   scrollTo(id);
   return false;
});
	function scroolTo(target){
	if($(target).length>=1){height=$(target).offset().top;
}
	$('html,body').animate({scroolTop:height},1200;
	return false;
	}
});