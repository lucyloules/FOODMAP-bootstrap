
$(document).ready(function(){

/* Vista Splash */
 $('.splash').delay(2000).fadeOut("slow");

setTimeout(function(){
    $('.splash').show();
    }, 2000);

$(function() {
/* Muestra imagenes de categorías */
  $('#Canapes').hide();
  $('#fast_food').hide();
  $('#gourmet').hide();
  $('#chilean_food').hide();
  $('#desserts').hide();

/* filtros de categorías */
  $('#options').change(function(){
    if($('#options').val() == 'Canapes'){
      $('#Canapes').show();
      $('.principal').hide();
    } else {
      $('#Canapes').hide();
    }
    
  });
  $('#options').change(function(){
    if($('#options').val() == 'fast_food'){
      $('#fast_food').show();
      $('.principal').hide();
    } else {
      $('#fast_food').hide();
    }
    
  });
  $('#options').change(function(){
    if($('#options').val() == 'gourmet'){
      $('#gourmet').show();
      $('.principal').hide();
    } else {
      $('#gourmet').hide();
    }
    
  });
    $('#options').change(function(){
    if($('#options').val() == 'chilean_food'){
      $('#chilean_food').show();
      $('.principal').hide();
    } else {
      $('#chilean_food').hide();
    }
    
  });
     $('#options').change(function(){
    if($('#options').val() == 'dessert'){
      $('#dessert').show();
      $('.principal').hide();
    } else {
      $('#dessert').hide();
    }
    
  });

});
});