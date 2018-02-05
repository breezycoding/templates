
function initMap() {
  var uluru = {lat: 14.870063, lng: 120.829088};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

$(document).ready(function(){
    new WOW().init();
    $(".features_txt").waypoint(function(direction){
        if(direction == "down"){
            $(".features_txt").addClass("show_img animated zoomIn");
        }
    },{
        offset:"80%"
    });
    $(".features_txt").waypoint(function(direction){
        if(direction == "up"){
            $(".features_txt").removeClass("show_img animated zoomIn");
        }
    },{
        offset:"100%"
    });
    
    $(".features_heart").waypoint(function(direction){
        if(direction == "down"){
            $(".features_heart").addClass("show_img animated flash");
        }
    },{
        offset:"80%"
    });
    $(".features_heart").waypoint(function(direction){
        if(direction == "up"){
            $(".features_heart").removeClass("show_img animated flash");
        }
    },{
        offset:"100%"
    });
    
    $(".features_col").waypoint(function(direction){
        if(direction == "down"){
            if($(".features_col").hasClass("features_branding")){
                $(".features_branding").addClass("show_img animated fadeInLeft");
            }
            if($(".features_col").hasClass("features_development")){
                 $(".features_development").addClass("show_img animated fadeInUp");
            }
            if($(".features_col").hasClass("features_consulting")){
                 $(".features_consulting").addClass("show_img animated fadeInRight");
            }
        }
    },{
        offset:"80%"
    });
    
    $(".features_col").waypoint(function(direction){
        if(direction == "up"){
            if($(".features_col").hasClass("features_branding")){
                $(".features_branding").removeClass("show_img animated fadeInLeft");
            }
            if($(".features_col").hasClass("features_development")){
                $(".features_development").removeClass("show_img animated fadeInUp");
            }
            if($(".features_col").hasClass("features_consulting")){
                $(".features_consulting").removeClass("show_img animated fadeInRight");
            }
        }
    },{
        offset:"100%"
    });
    
    $(".works_text").waypoint(function(direction){
        if(direction == "down"){
            $(".works_text").addClass("show_img animated zoomIn");
        }
    },{
        offset:"80%"
    });
    $(".works_text").waypoint(function(direction){
        if(direction == "up"){
            $(".works_text").removeClass("show_img animated zoomIn");
        }
    },{
        offset:"100%"
    });
    
    $(".works_heart").waypoint(function(direction){
        if(direction == "down"){
            $(".works_heart").addClass("animated flash");
        }
    },{
        offset:"80%"
    });
    $(".works_heart").waypoint(function(direction){
        if(direction == "up"){
            $(".works_heart").removeClass("animated flash");
        }
    },{
        offset:"100%"
    });
    
    $(".team_text").waypoint(function(direction){
        if(direction == "down"){
            $(".team_text").addClass("show_img animated zoomIn");
        }
    },{
        offset:"80%"
    });
    $(".team_text").waypoint(function(direction){
        if(direction == "up"){
            $(".team_text").removeClass("show_img animated zoomIn");
        }
    },{
        offset:"100%"
    });
    
    $(".team_heart").waypoint(function(direction){
        if(direction == "down"){
            $(".team_heart").addClass("animated flash");
        }
    },{
        offset:"80%"
    });
    $(".team_heart").waypoint(function(direction){
        if(direction == "up"){
            $(".team_heart").removeClass("animated flash");
        }
    },{
        offset:"100%"
    });
    
    $(".facts_text").waypoint(function(direction){
        if(direction == "down"){
            $(".facts_text").addClass("show_img animated zoomIn");
        }
    },{
        offset:"80%"
    });
    $(".facts_text").waypoint(function(direction){
        if(direction == "up"){
            $(".facts_text").removeClass("show_img animated zoomIn");
        }
    },{
        offset:"100%"
    });
    
    $(".facts_heart").waypoint(function(direction){
        if(direction == "down"){
            $(".facts_heart").addClass("animated flash");
        }
    },{
        offset:"80%"
    });
    $(".facts_heart").waypoint(function(direction){
        if(direction == "up"){
            $(".facts_heart").removeClass("animated flash");
        }
    },{
        offset:"100%"
    });
    
    $(".discuss_text").waypoint(function(direction){
        if(direction == "down"){
            $(".discuss_text").addClass("show_img animated zoomIn");
        }
    },{
        offset:"80%"
    });
    $(".discuss_text").waypoint(function(direction){
        if(direction == "up"){
            $(".discuss_text").removeClass("show_img animated zoomIn");
        }
    },{
        offset:"100%"
    });
    
    $(".discuss_heart").waypoint(function(direction){
        if(direction == "down"){
            $(".discuss_heart").addClass("animated flash");
        }
    },{
        offset:"80%"
    });
    $(".discuss_heart").waypoint(function(direction){
        if(direction == "up"){
            $(".discuss_heart").removeClass("animated flash");
        }
    },{
        offset:"100%"
    });
    
    $(".img_facts").waypoint(function(direction){
        if(direction == "down"){
            if($(".img_facts").hasClass("img_animate")){
                 $(".img_animate").addClass("show_img animated rotateIn");
            }
        }
    },{
        offset:"60%"
    });
    $(".img_facts").waypoint(function(direction){
        if(direction == "up"){
            if($(".img_facts").hasClass("img_animate")){
                 $(".img_animate").removeClass("show_img animated rotateIn");
            }
        }
    },{
        offset:"100%"
    });
    
    $(".team_member").waypoint(function(direction){
        if(direction == "down"){
            if($(".team_member").hasClass("team_animate")){
                 $(".team_animate").addClass("show_img animated flipInX");
            }
        }
    },{
        offset:"60%"
    });
    $(".team_member").waypoint(function(direction){
        if(direction == "up"){
            if($(".team_member").hasClass("team_animate")){
                 $(".team_animate").removeClass("show_img animated flipInX");
            }
        }
    },{
        offset:"100%"
    });
    
    
    $(".img_works").waypoint(function(direction){
        if(direction == "down"){
            $(".img_works").each(function(i, obj){
                var self = this;
                setTimeout(function() { 
                    $(self).addClass("show_img animated pulse");
                }, 300 * i); 
            });
        }
    },{
        offset:"50%"
    });
    
    $(".img_works").waypoint(function(direction){
        if(direction == "up"){
            if($(".img_works").hasClass("works_animate")){
                 $(".works_animate").removeClass("show_img animated pulse");
            }
        }
    },{
        offset:"100%"
    });
    
    $(".burger_nav").on("click",function(){
        $("#hero .navbar .nav").toggleClass("open",500);
        //$(".navbar").css("float","none");
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