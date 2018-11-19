// let introHeight = $(window).height() - $('header').height();
// $('.intro').css({'height': introHeight});
// $('.middleBox').on('click', ()=>{
//   $('#a').css({'fill-opacity': '0', 'stroke':'#fff','stroke-miterlimit':'10','stroke-width':'3px'});
//   $('#b').css({'fill-opacity':'0', 'stroke':'#fff','stroke-miterlimit':'10','stroke-width':'3px'});
//   console.log('clicked');
// });

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
