let service1=$("service1");
let de = $("de");
let dev = $("dev");
let devep = $("devep");
let ment = $("ment");
let proment = $("proment");

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
 $(document).ready(function(){
    $("#work4").mouseover(function(){
        $("#overlay").fadeIn("slow");
        $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
});

$(document).ready(function(){
    $("#work3").mouseover(function(){
        $("#overlay2").fadeIn("slow");
        $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
});

$(document).ready(function(){
    $("#work2").mouseover(function(){
        $("#overlay3").fadeIn("slow");
        $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
});

$(document).ready(function(){
    $("#work1").mouseover(function(){
        $("#overlay4").fadeIn("slow");
        $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
});

$(document).ready(function(){
    $("#work5").mouseover(function(){
        $("#overlay5").fadeIn("slow");
        $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
});

$(document).ready(function(){
    $("#work6").mouseover(function(){
        $("#overlay6").fadeIn("slow");
        $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
});

$(document).ready(function(){
    $("#work7").mouseover(function(){
        $("#overlay7").fadeIn("slow");
        $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
});

$(document).ready(function(){
    $("#work8").mouseover(function(){
        $("#overlay8").fadeIn("slow");    
        $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
});
