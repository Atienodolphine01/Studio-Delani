let service1=$("service1");
let de = $("de");
let dev = $("dev");
let devep = $("devep");
let ment = $("ment");
let proment = $("proment")

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

$(document).ready(function(){
    $(".dev").click(function(){
      $(this).hide();
      $(".devep").show();
    });
    $(".devep").click(function(){
      $(this).hide();
      $(".dev").show();
    });
  });

$(document).ready(function(){
    $(".ment").click(function(){
      $(this).hide();
      $(".proment").show();
    });
    $(".proment").click(function(){
      $(this).hide();
      $(".ment").show();
    });
  });

  //hover images
  $('.port').mouseenter(function(){
    $('.porttext').css('background-color', "yellow");
 }, function(){
    $('.porttext',this).slideToggle('slow');
 });