/*$(document).ready(function(){
    $("#service1").click(function(){
        $(".de").toggle();
    })
})*/
$(document).ready(function(){
    $("#service1").click(function(){
      $(this).hide();
      $(".de").show();

    });
    $(".de").click(function(){
      $(this).hide();
      $("#service1").show();
    });
  });