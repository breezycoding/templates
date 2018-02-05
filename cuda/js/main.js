$(document).ready(function(){
    new WOW().init();
    
    
    
    
    $(".animated_img").waypoint(function(direction){
        if(direction == "down"){
            if($(".animated_img").hasClass("branding_img")){
                $(".branding_img").addClass("show_img animated fadeInLeft");
            }
            if($(".animated_img").hasClass("design_img")){
                 $(".design_img").addClass("show_img animated fadeInUp");
            }
            if($(".animated_img").hasClass("development_img")){
                 $(".development_img").addClass("show_img animated fadeInDown");
            }
            if($(".animated_img").hasClass("rocket_img")){
                 $(".rocket_img").addClass("show_img animated fadeInRight");
            }
        }
    },{
        offset:"60%"
    });
    
    $(".animated_img").waypoint(function(direction){
        if(direction == "up"){
            if($(".animated_img").hasClass("branding_img")){
                $(".branding_img").removeClass("show_img animated fadeInLeft");
            }
            if($(".animated_img").hasClass("design_img")){
                $(".design_img").removeClass("show_img animated fadeInUp");
            }
            if($(".animated_img").hasClass("development_img")){
                $(".development_img").removeClass("show_img animated fadeInDown");
            }
            if($(".animated_img").hasClass("rocket_img")){
                $(".rocket_img").removeClass("show_img animated fadeInRight");
            }
        }
    },{
        offset:"100%"
    });
    
     $(".team").waypoint(function(direction){
        if(direction == "down"){
            if($(".team").hasClass("grey_bg_big_img")){
                 $(".grey_bg_big_img").addClass("show_img animated pulse");
            }
        }
    },{
        offset:"60%"
    });
    $(".team").waypoint(function(direction){
        if(direction == "up"){
            if($(".team").hasClass("grey_bg_big_img")){
                 $(".grey_bg_big_img").removeClass("show_img animated pulse");
            }
        }
    },{
        offset:"100%"
    });
    
    $(".skills").waypoint(function(direction){
        if(direction == "down"){
            $(".skills").each(function(i, obj){
                var self = this;
                setTimeout(function() { 
                    $(self).addClass("show_img animated rotateIn");
                }, 300 * i); 
            });
        }
    },{
        offset:"30%"
    });
    $(".skills").waypoint(function(direction){
        if(direction == "up"){
            if($(".skills").hasClass("skills_animate")){
                 $(".skills_animate").removeClass("show_img animated rotateIn");
            }
        }
    },{
        offset:"100%"
    });
    
     $(".portfolio_d").waypoint(function(direction){
        if(direction == "down"){
            if($(".portfolio_d").hasClass("portfolio_down")){
                 $(".portfolio_down").addClass("show_img animated slideInDown");
            }
        }
    },{
        offset:"60%"
    });
    $(".portfolio_d").waypoint(function(direction){
        if(direction == "up"){
            if($(".portfolio_d").hasClass("portfolio_down")){
                 $(".portfolio_down").removeClass("show_img animated slideInDown");
            }
        }
    },{
        offset:"100%"
    });
    
    $(".portfolio_u").waypoint(function(direction){
        if(direction == "down"){
            if($(".portfolio_u").hasClass("portfolio_up")){
                 $(".portfolio_up").addClass("show_img animated slideInUp");
            }
        }
    },{
        offset:"60%"
    });
    $(".portfolio_u").waypoint(function(direction){
        if(direction == "up"){
            if($(".portfolio_u").hasClass("portfolio_up")){
                 $(".portfolio_up").removeClass("show_img animated slideInUp");
            }
        }
    },{
        offset:"100%"
    });
    
    $(".grey_bg_small").waypoint(function(direction){
        if(direction == "down"){
            if($(".grey_bg_small").hasClass("grey_bg_small_img")){
                 $(".grey_bg_small_img").addClass("show_img animated pulse");
            }
        }
    },{
        offset:"60%"
    });
    $(".grey_bg_small").waypoint(function(direction){
        if(direction == "up"){
            if($(".grey_bg_small").hasClass("grey_bg_small_img")){
                 $(".grey_bg_small_img").removeClass("show_img animated pulse");
            }
        }
    },{
        offset:"140%"
    });
    
    $(".people_say").waypoint(function(direction){
        if(direction == "down"){
            if($(".people_say").hasClass("people_say_txt")){
                 $(".people_say_txt").addClass("show_img animated flash");
            }
        }
    },{
        offset:"60%"
    });
    $(".people_say").waypoint(function(direction){
        if(direction == "up"){
            if($(".people_say").hasClass("people_say_txt")){
                 $(".people_say_txt").removeClass("show_img animated flash");
            }
        }
    },{
        offset:"140%"
    });
    
    $(".burger_nav").on("click",function(){
        $("#hero .navbar .nav").toggleClass("open",500,"easeOutSine");
        return false;
    });
    
    $(".nav_click").on("click",function(){
        var href_id = $(this).attr("href");
        $("body, html").animate({
            scrollTop:$(href_id).offset().top
        },600,"linear");
        return false;
    });
    
    /*Click event to scroll to top*/
    $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$(".arrow_to_top").fadeIn();
		} else {
			$(".arrow_to_top").fadeOut();
		}
	});
	$(".arrow_to_top").click(function(){
		$("body, html").animate({scrollTop : 0},800);
		return false;
	});
    /*Click event to scroll to top*/
    
    
})