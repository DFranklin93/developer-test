$(document).ready(()=>{
  //Find screen width size to be used for sideMenu
  var screenWidth = self.innerWidth+20+"px";
  //Smooth Scroll function
  var sideMenu = $('#side-menu');
  $('.slide-selector').on('click',function(e){
    var linkHref = $(this).attr('href');
    console.log(linkHref);
    $("html, body").animate({
      scrollTop: $(linkHref).offset().top}, 900);
      e.preventDefault();
      // Closes Menu Upon Selection
      if(sideMenu.css({"left": screenWidth})){
        $('html, body').css({'overflow-y':'visible'});
      }else if(sideMenu.css({'left':0})){
        sideMenu.css({'left': screenWidth})
        $('html, body').css({'overflow-y':'hidden'});
        sideMenu.css({'transition':'1s ease-in-out'});
      }
  });
  //Toggle Nav Smaller Screens
    var screenWidth = self.innerWidth+20+"px";
    sideMenu.css({"left": screenWidth})
    $('#toggle').click(function(){
      if(sideMenu.css({"left":screenWidth})){
        sideMenu.css({'left':'0'});
        $('html, body').css({'overflow':'hidden'});
        $('#nav-bar-li').css('display','inline-block');
      }else if(sideMenu.css({"left":'0'})){
        sideMenu.css({'right': screenWidth});
        $('html, body').css({'overflow':'visible'});
      }
    });
    // Touchevent
    $('.toggle').on('tap',function(){
      if(sideMenu.css({"left":screenWidth})){
        sideMenu.css({'left':'0'});
        $('html, body').css({'overflow':'hidden'});
        $('#nav-bar-li').css('display','inline-block');
      }else if(sideMenu.css({"left":'0'})){
        sideMenu.css({'right': screenWidth});
        $('html, body').css({'overflow':'visible'});
      }
    });
    // Btn to close menu
    $('.btn-close').click(function(){
      sideMenu.css({'left': screenWidth});
      $('html, body').css({'overflow':'visible'});
    });
    // Btn close touchevent
    $('.btn-close').on('tap',function(){
      sideMenu.css({'left': screenWidth});
      $('html, body').css({'overflow':'visible'});
    });

    $(document).on('scroll', function(){
      var windowTop = $(window).scrollTop();
      //Fades in elements once window is to element
      $('.fadeIn').each( function(i){
        var bottom_of_object = $(this).offset().top + $(window).height() / 3;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},1500);
        };
      });
    });
  // Creating a carousel
  //grab the width and calculate left value
  var item_width = $('.carouselItems li').outerWidth();
  var left_value = item_width * (-1);

  //move the last item before first item, just in case yser click prev button
  $('.carouselItems li:first').before($('.carouselItems li:last'));

  //set the default item to the correct position
  $('.carouselItems ul').css({'left': left_value});

  //////////////////////Below is for click events/////////////////////////////////

  //if user clicked on prev button
  $('#prev img').on('click', () =>{
    //get the right position
    var left_indent = parseInt($('carouselItems ul').css('left')) + item_width;

    //slide the item
    $('.carouselItems ul').animate({'left' : left_indent,}, 'fast',()=>{
      //move the last item and put it as first item
      $('.carouselItems li:first').before($('.carouselItems li:last'));
      //set the default item to correct position
      $('.carouselItems ul').css({'left' : left_value});
    });

    //cancel the link behavior
    return false;
  });

  //if user clicked on prev button
  $('#next img').on('click', () =>{
    //get the left position
    //get the right position
    var left_indent = parseInt($('.carouselItems ul').css('left')) + item_width;

    //slide the item
    $('.carouselItems ul').animate({'left': left_indent}, 200, () =>{
      //move the first item and put it as last items
      $('.carouselItems li:last').after($('.carouselItems li:first'));
      //set the default item to correct position
      $('.carouselItems ul').css({'left':left_value});
    });
    //cancel the link behavior
    return false;
  });

  //////////////////////Above is for click events/////////////////////////////////
  //////////////////////Below is for tap events/////////////////////////////////

  //if user clicked on prev button
  $('#prev img').on('tap', () =>{
    //get the right position
    var left_indent = parseInt($('carouselItems ul').css('left')) + item_width;

    //slide the item
    $('.carouselItems ul').animate({'left' : left_indent}, 200,()=>{
      //move the last item and put it as first item
      $('.carouselItems li:first').before($('.carouselItems li:last'));
      //set the default item to correct position
      $('.carouselItems ul').css({'left' : left_value});
    });

    //cancel the link behavior
    return false;
  });

  //if user clicked on prev button
  $('#next img').on('tap', () =>{
    //get the left position
    //get the right position
    var left_indent = parseInt($('.carouselItems ul').css('left')) + item_width;

    //slide the item
    $('.carouselItems ul').animate({'left': left_indent}, 200, () =>{
      //move the first item and put it as last items
      $('.carouselItems li:last').after($('.carouselItems li:first'));
      //set the default item to correct position
      $('.carouselItems ul').css({'left':left_value});
    });
    //cancel the link behavior
    return false;
  });

  //////////////////////Above is for tap events/////////////////////////////////

});
