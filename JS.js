

$(function(){
  $('a.select').on('click hover',function(e){
    var parentT = $(this).parent();
      parentT.css('border', '1.5px solid red');
      e.preventDefault();
  });
  

})

