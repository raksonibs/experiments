function checkCompleted($tower3) {
  finished = $($tower3.children()[0]).data('ring-number') === 3 && $tower3.children().length === 3
  return finished
}


function bottomRing($tower, $ring) {
  var okayOrder = true
  var lastRingNumber = $($tower.children()[0]).data('ring-number')
  if (lastRingNumber === null || lastRingNumber === $ring.data('ring-number')) {
    lastRingNumber = 0
  }
  okayOrder = lastRingNumber < $ring.data('ring-number') ? true : false
  
  return okayOrder
}


$(function() {
  var $tower1 = $(".tower-1"),
      $tower2 = $(".tower-2"),
      $tower3 = $(".tower-3")
      $towers = $('.tower')

  $('.ring', $towers).draggable({
    revert: "invalid",
    helper: 'clone',
    cursor: 'move'
  })

  $tower1.droppable({
    accept: '.tower > .ring:first-child',
    activeClass: 'ui-state-highlight',
    drop: function(event, ui) {
      moveRing(ui.draggable, ui)
    }
  })

  $tower2.droppable({
    accept: '.tower > .ring:first-child',
    activeClass: 'ui-state-highlight',
    drop: function(event, ui) {
      moveRing(ui.draggable, ui)
    }
  })

  $tower3.droppable({
    accept: '.tower > .ring:first-child',
    activeClass: 'ui-state-highlight',
    drop: function(event, ui) {
      moveRing(ui.draggable, ui)
    }
  })

  function moveRing( $item, ui ) {
    $item.fadeOut()

    if (ui.position.left < $('.tower-1').position().left + ($('.tower-1').width()/2) ) {
      var okayOrder = bottomRing($('.tower-1'), $item)
      if (okayOrder) {
        console.log('moved to tower 1')
          $('.tower-1').prepend($item)
          // $('.tower-1 .ring').css('top', '150px');
      }
      $item.fadeIn()        
    } else if (ui.position.left > $('.tower-3').position().left) {
       var okayOrder = bottomRing($('.tower-3'), $item)
      if (okayOrder) {
        console.log("moved to 3")
        $('.tower-3').prepend($item)     
        var towerComplete = checkCompleted($('.tower-3'))
        if (towerComplete) {
          $('body').html('<p>You did it </p>')
        }
      } else {
        
      }
      $item.fadeIn()
    } else {
       var okayOrder = bottomRing($('.tower-2'), $item)
      if (okayOrder) {
        console.log('movsed to 2')
        $('.tower-2').prepend($item)
        }
        $item.fadeIn()
    }
  }
}())