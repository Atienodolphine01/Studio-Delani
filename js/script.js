let service1=("service1")
let de = ("de")
$(document).ready(function(){
    $(".picture").on(click,function(){
      $(this).hide();
      $(".de").show();
    });
    $(".de").click(function(){
      $(this).hide();
      $(".picture").show();
    });
  });