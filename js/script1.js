$(function(){
    //.board li a를 누르면
    $('.board li a').click(function(){
        //눌러진 a의 부모요소에 'on'클래스가 추가되고, 부모의 형제요소들은 .on이 지워진다. 
        $(this).parent().addClass('on').siblings().removeClass('on');
    });

});
$(document).ready(function(){
 
    $('.menu_btn>a').on('click', function(){
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            left:0
        });  
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            left: '-' + 100 + '%'
                    },function(){
                        $('.sidebar_menu').hide();          
                    });  
    });

});

$(function(){
    start();
    var imgs=1;
    var now=0;
    function start(){
        $('#banner img').eq(0).siblings().fadeOut(1000);
        setInterval(function(){slide();},2000);
    };
    function slide(){
        now=now==imgs?0:now+=1;
        $('#banner img').eq(now-1).fadeOut(1000);
        $('#banner img').eq(now).fadeIn(1000);
    };
});


$(function() {
 
    // store the slider in a local variable
    var $window = $(window),
        flexslider = { vars:{} };
   
    // tiny helper function to add breakpoints
    function getGridSize() {
      return (window.innerWidth < 600) ? 2 :
             (window.innerWidth < 900) ? 3 : 4;
    }
   
    $(function() {
      SyntaxHighlighter.all();
    });
   
    $window.load(function() {
      $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        minItems: getGridSize(), // use function to pull in initial value
        maxItems: getGridSize() // use function to pull in initial value
      });
    });
   
    // check grid size on resize event
    $window.resize(function() {
      var gridSize = getGridSize();
   
      flexslider.vars.minItems = gridSize;
      flexslider.vars.maxItems = gridSize;
    });
  }());

