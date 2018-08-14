
/*====================================
=  Funciones de Greensock Mobile    =
====================================*/

$(function(){
    var tl1m = new TimelineMax({repeat:-1});
    tl1m.from("#txt1m", 2, {scale:0.5, top:-100, opacity:0, delay:1,       ease:Power4.easeOut, force3D:true})
        .to("#txt1m", 2, {scale:0.5, top:100, opacity:0, delay:1, ease:Power4.easeIn, force3D:true},"+=1")
        .from("#txt2m", 2, {scale:0.5, top:-100, opacity:0, delay:1, ease:Power4.easeOut, force3D:true})
        .to("#txt2m", 2, {scale:0.5, top:100, opacity:0, delay:1, ease:Power4.easeIn, force3D:true},"+=1")
        .from("#txt3m", 2, {scale:0.5, top:-100, opacity:0, delay:1, ease:Power4.easeOut, force3D:true})
        .to("#txt3m", 2, {scale:0.5, top:100, opacity:0, delay:1, ease:Power4.easeIn, force3D:true},"+=1")
        .from("#txt4m", 2, {scale:0.5, top:-100, opacity:0, delay:1, ease:Power4.easeOut, force3D:true})
        .to("#txt4m", 2, {scale:0.5, top:100, opacity:0, delay:1, ease:Power4.easeIn, force3D:true},"+=1")
        .from("#txt5m", 2, {scale:0.5, top:-100, opacity:0, delay:1, ease:Power4.easeOut, force3D:true})
        .to("#txt5m", 2, {scale:0.5, top:100, opacity:0, delay:1, ease:Power4.easeIn, force3D:true},"+=1");
    
});



/*====================================
=  Funciones de Greensock Desktop       =
====================================*/

$(function(){
    var tl1 = new TimelineMax({repeat:-1});
    tl1.from("#txt1", 2, {scale:0.5, top:-100, opacity:0, delay:1,       ease:Power4.easeOut, force3D:true})
        .to("#txt1", 2, {scale:0.5, top:100, opacity:0, delay:1, ease:Power4.easeIn, force3D:true},"+=1")
        .from("#txt2", 2, {scale:0.5, top:-100, opacity:0, delay:1, ease:Power4.easeOut, force3D:true})
        .to("#txt2", 2, {scale:0.5, top:100, opacity:0, delay:1, ease:Power4.easeIn, force3D:true},"+=1")
        .from("#txt3", 2, {scale:0.5, top:-100, opacity:0, delay:1, ease:Power4.easeOut, force3D:true})
        .to("#txt3", 2, {scale:0.5, top:100, opacity:0, delay:1, ease:Power4.easeIn, force3D:true},"+=1")
        .from("#txt4", 2, {scale:0.5, top:-100, opacity:0, delay:1, ease:Power4.easeOut, force3D:true})
        .to("#txt4", 2, {scale:0.5, top:100, opacity:0, delay:1, ease:Power4.easeIn, force3D:true},"+=1")
        .from("#txt5", 2, {scale:0.5, top:-100, opacity:0, delay:1, ease:Power4.easeOut, force3D:true})
        .to("#txt5", 2, {scale:0.5, top:100, opacity:0, delay:1, ease:Power4.easeIn, force3D:true},"+=1");
    
});


/*====================================
=  Funciones de Slide Services       =
====================================*/
$(function() {
  $('.btndesarrollo').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav();
  });
    $('.btnGestion').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav2();
  });
    $('.btnMoviles').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav3();
  });
    $('.btnProyectos').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav4();
  });
    $('.btnArquitectura').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav5();
  });
    $('.btnNegocios').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav6();
  });
    $('.btnWeb').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav7();
  });
    $('.btnImplementaciones').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav8();
  });
});


/*========================================
=     Funciones de Slide Services        =
========================================*/
function toggleNav() {
    if ($('#infoServices').hasClass('show-nav')) {
      // Al abrir Services
        $('.listDesarrollo').show();
        $('#infoServices').slideDown("slow").removeClass("show-nav");

        $('.listGestion,.listMoviles,.listProyectos').hide();
    } else {
      // Al cerrar Services
        $('#infoServices').slideUp("slow").addClass("show-nav");
        $('.listGestion,.listMoviles,.listProyectos').hide();
    }
}

function toggleNav2() {
    if ($('#infoServices').hasClass('show-nav')) {
      // Do things on Nav Close
        $('.listGestion').show();
        $('#infoServices').slideDown("slow").removeClass("show-nav");

        $('.listDesarrollo,.listMoviles,.listProyectos').hide();
    } else {
      // Do things on Nav Open
        $('#infoServices').slideUp("slow").addClass("show-nav");
        $('.listDesarrollo,.listMoviles,.listProyectos').hide();
    }
}

function toggleNav3() {
    if ($('#infoServices').hasClass('show-nav')) {
      // Do things on Nav Close
        $('.listMoviles').show();
        $('#infoServices').slideDown("slow").removeClass("show-nav");
        $('.listDesarrollo,.listGestion,.listProyectos').hide();
    } else {
      // Do things on Nav Open
        $('#infoServices').slideUp("slow").addClass("show-nav");
        $('.listDesarrollo,.listGestion,.listProyectos').hide();
    }
}

function toggleNav4() {
    if ($('#infoServices').hasClass('show-nav')) {
      // Do things on Nav Close
        $('.listProyectos').show();
        $('#infoServices').slideDown("slow").removeClass("show-nav");
        $('.listDesarrollo,.listGestion,.listMoviles').hide();
    } else {
      // Do things on Nav Open
        $('#infoServices').slideUp("slow").addClass("show-nav");
        $('.listDesarrollo,#listGestion,#listMoviles').hide();
    }
}

function toggleNav5() {
    if ($('#infoServices2').hasClass('show-nav')) {
      // Do things on Nav Close
        $('.listArquitectura').show();
        $('#infoServices2').slideDown("slow").removeClass("show-nav");
        $('.listNegocios,.listWeb,.listImplementaciones').hide();
    } else {
      // Do things on Nav Open
        $('#infoServices2').slideUp("slow").addClass("show-nav");
        $('.listNegocios,.listWeb,.listImplementaciones').hide();
    }
}

function toggleNav6() {
    if ($('#infoServices2').hasClass('show-nav')) {
      // Do things on Nav Close
        $('.listNegocios').show();
        $('#infoServices2').slideDown("slow").removeClass("show-nav");
        $('.listArquitectura,.listWeb,.listImplementaciones').hide();
    } else {
      // Do things on Nav Open
        $('#infoServices2').slideUp("slow").addClass("show-nav");
        $('.listArquitectura,.listWeb,.listImplementaciones').hide();
    }
}

function toggleNav7() {
    if ($('#infoServices2').hasClass('show-nav')) {
      // Do things on Nav Close
        $('.listWeb').show();
        $('#infoServices2').slideDown("slow").removeClass("show-nav");
        $('.listArquitectura,.listNegocios,.listImplementaciones').hide();
    } else {
      // Do things on Nav Open
        $('#infoServices2').slideUp("slow").addClass("show-nav");
        $('.listArquitectura,.listNegocios,.listImplementaciones').hide();
    }
}

function toggleNav8() {
    if ($('#infoServices2').hasClass('show-nav')) {
      // Do things on Nav Close
        $('.listImplementaciones').show();
        $('#infoServices2').slideDown("slow").removeClass("show-nav");
        $('.listArquitectura,.listNegocios,.listWeb').hide();
    } else {
      // Do things on Nav Open
        $('#infoServices2').slideUp("slow").addClass("show-nav");
        $('.listArquitectura,.listNegocios,.listWeb').hide();
    }
}