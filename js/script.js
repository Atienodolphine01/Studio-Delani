let service1=("service1")
let de = ("de")

$(document).ready(function(){
    $(".service1").click(function(){
      $(this).hide();
      $(".de").show();

    });
    $(".de").click(function(){
      $(this).hide();
      $(".service1").show();
    });
  });
