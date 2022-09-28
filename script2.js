function abrirMenu(){
    $(".menu").animate({"left":"0"},450)
    $("#link-abrir").attr("data","aberto")
    $("#icon-flecha").css({
      transform: 'rotate(-180deg)',
      WebkitTransform: 'rotate(-180deg)',
      '-moz-transform': 'rotate(-180deg)',
      '-ms-transform': 'rotate(-180deg)',
      '-o-transform': 'rotate(-180deg)'
    });
  }

  function fecharMenu(){
      $(".menu").animate({"left":"-160px"},450)
      $("#link-abrir").attr("data","fechado")
      $("#icon-flecha").css({
        transform: 'rotate(0deg)',
        WebkitTransform: 'rotate(0deg)',
        '-moz-transform': 'rotate(0deg)',
        '-ms-transform': 'rotate(0deg)',
        '-o-transform': 'rotate(0deg)'
       });
  }
  
  $("#link-abrir").click(function(){
  
    var status = jQuery("#link-abrir").attr("data");
  
    if(status == "fechado"){
      abrirMenu();
    }
    else{
      fecharMenu();
    }
  });
  
  setTimeout(function() {
       abrirMenu();
  }, 1000);
  
  setTimeout(function() {
       fecharMenu();
  }, 3000);