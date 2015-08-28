'use strict'

$(document).ready(function(){
  animateListPoints();
});

function animateListPoints(){
  var listItems = $('#overlay-items').children();
  var itemIndex = -1;

  function showNextItem() {

    ++itemIndex;
    $(listItems.eq(itemIndex % listItems.length)).appendTo($('#info-points'))
    .fadeIn(1000)
    .delay(2000)
    .fadeOut(1000, function(){
      $('#info-points:first-child').remove();
    showNextItem();  
    });
  };
  showNextItem();
};