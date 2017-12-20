$(document).ready(function(){
	
	    var di = $("h1.intro");
        di.animate({height: '180px', opacity: '0.4'}, "slow");
        di.animate({width: '440px', opacity: '0.8'}, "slow");
        di.animate({height: '180px', opacity: '0.4'}, "slow");
        di.animate({width: '440px', opacity: '0.8'}, "slow");

	//$('#myDiv').animate({opacity: 'hide', height: 'hide'}, 'slow'); //
});

$("a[href='#3a']").on('shown.bs.tab', function(){
    google.maps.event.trigger(map, 'resize');
});