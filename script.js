
// Wrap every letter in a span for home page
$('.ml3').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function(el, i) {
      return 150 * (i+1)
    }
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // Wrap every letter in a span for about me page

  $("a[href='#2a']").on('shown.bs.tab', function(){
    console.log("lets make the text move");
    $('#recommendations').each(function(){
    $(this).html($(this).text().replace(/./g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({loop: true})
      .add({
        targets: '#recommendations .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: function(el, i) {
          return 150 * (i+1)
        }
      }).add({
        targets: '#recommendations',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
});

// this jquery function is to animate the text "intro"
//$(document).ready(function(){
	
	    //var di = $("h1.intro");
       // di.animate({height: '180px', opacity: '0.4'}, "slow");
        //di.animate({width: '335px', opacity: '0.8'}, "slow");
        //di.animate({height: '180px', opacity: '0.4'}, "slow");
        //di.animate({width: '335px', opacity: '0.8'}, "slow");

	//this jquery function is to show the map on change of tabs fromn the navigation bar
//});

$("a[href='#3a']").on('shown.bs.tab', function(){
    google.maps.event.trigger(map, 'resize');
});

// This function is to change tabs with click of "contact" botton
$(function() {

  var activate = false,
      tabLinks = $('.tabs a');
      tabContent = $('.tab-content').children();

  tabLinks.eq(0).addClass('active'); // Add active class, could possibly go in markup
  
  
  tabLinks.bind('click', function(e) {
    e.preventDefault();
    if(activate === true) { // Only do something if button has been clicked
      var target = this.hash,
          el = $(this);

      tabLinks.filter('.active').removeClass('active');
      el.addClass('active');

      tabContent.hide(); // Hide all
      $(target).show(); // Show selected
    }
  });

  $('button').bind('click', function() {
    activate = true; // Activate tab functionality
    tabLinks.eq(2).trigger('click'); // Trigger a click on the second tab link
    google.maps.event.trigger(map, 'resize'); // this triggers the map to show when changing tabs
  });

});

 
