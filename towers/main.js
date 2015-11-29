// need to check each pole after every move.
// if any pole has the solution pole 1, pole 2, pole 3, in its tower box, then correct.
// if not then no solution. 
// need to have a recursive solver in case she gets stuck

var box = document.getElementById('box')


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
    accept: '.tower > .ring',
    activeClass: 'ui-state-highlight',
    drop: function(event, ui) {
      moveRing(ui.draggable, ui)
    }
  })

  $tower2.droppable({
    accept: '.tower > .ring',
    activeClass: 'ui-state-highlight',
    drop: function(event, ui) {
      moveRing(ui.draggable, ui)
    }
  })

  $tower3.droppable({
    accept: '.tower > .ring',
    activeClass: 'ui-state-highlight',
    drop: function(event, ui) {
      moveRing(ui.draggable, ui)
    }
  })

  function moveRing( $item, ui ) {
    $item.fadeOut()

    if (ui.position.left < $('.tower-1').position().left + $('.tower-1').width() ) {
      console.log('moved to tower 1')
        $('.tower-1').prepend($item)
        $item.fadeIn()
    } else if (ui.position.left > $('.tower-3').position().left) {
      console.log("moved to 3")
      $('.tower-3').prepend($item)      
        // $item.fadeIn()
    } else {
      console.log('movsed to 2')
      $('.tower-2').prepend($item)
        // $item.fadeIn()
    }
  }
}())