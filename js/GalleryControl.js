$(document).ready(function(){
	$(".slid_animation_area").each(function(n){

			$(this).find(".nav").attr("id","nav_"+n)
			$(this).find(".horse_bg .slider").cycle({
					fx:"scrollHorz",
					timeOut:3000,
					speed:800,
					next:$(this).find(".arrowNext"),
					prev:$(this).find(".arrowPrev"),
					pager:"#nav_"+n,
					pagerAnchorBuilder: function(idx, slide) { 
        				return '<li><a href="#"><img src="' + slide.src + '" width="90" height="90" /></a></li>'; 
    				} 
				})
		})
})