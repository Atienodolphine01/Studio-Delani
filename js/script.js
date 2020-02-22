/*$(document).ready(function(){
    $("#service1").click(function(){
        $(".de").toggle();
    })
})*/
let picture = $("picture");
let de = $("de");

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