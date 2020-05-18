$(document).ready(function(){
  //this fuction adds smooth scrolling to html
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

$(document).ready(function() {
  $('#contactUs form').submit(function() {
    var nameInput = $('input#name').val();
    var emailInput = $('input#email').val();
    var mrssageInput = $('input#message').val();
    alert('Thank you '+ nameInput + ', we have received your message!')
  //  document.getElementById("#contactUs").reset();
    event.preventDefault();
  });
});

$(document).ready(function() {
  $('#designIcon').click(function(){
    $('#designIcon img').toggle();
    $('#designP').toggle();
  });
});

$(document).ready(function() {
  $('#developmentIcon').click(function(){
    $('#developmentIcon img').toggle();
    $('#developmentP').toggle();
  });
});

$(document).ready(function() {
  $('#productManagementIcon').click(function(){
    $('#productManagementIcon img').toggle();
    $('#productManagementP').toggle();
  });
});
