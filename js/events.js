//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  var images = $('img')
  images.on('load', function() {
    images.addClass("tasty")
  })
}

function pressIt() {
  $('input').on('keydown', function(e) {
    const key = parseInt(e.detail || e.which)
    if (key === 71) {
      alert("You pressed 'g'!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}


$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()
  submitIt()

});
