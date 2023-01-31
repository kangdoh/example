$(document).ready(function(){
    
    $(window).scroll(function(){
        let sc = $(window).scrollTop()
        $('h1').text(sc);
        // $('section>article').eq(0).css({'transform': 'translateZ('+(-0+sc)+'px)'})
        // $('section>article').eq(1).css({'transform': 'translateZ('+(-5000+sc)+'px)'})
        // $('section>article').eq(2).css({'transform': 'translateZ('+(-10000+sc)+'px)'})
        // $('section>article').eq(3).css({'transform': 'translateZ('+(-15000+sc)+'px)'})
        // $('section>article').eq(4).css({'transform': 'translateZ('+(-20000+sc)+'px)'})
    
        // 반복문을 통한 축역방식
        for(var a=0; a<5; a++){
            $('section>article').eq(a).css({'transform': 'translateZ('+(-5000*a+sc)+'px)'})
        }


        if(sc>=0 && sc<5000){
            $('section>article').removeClass('on')
            $('section>article').eq(0).addClass('on')
            $('.menu li').removeClass('on')
            $('.menu li').eq(0).addClass('on')
        }
        if(sc>=5000 && sc<10000){
            $('section>article').removeClass('on')
            $('section>article').eq(1).addClass('on')
            $('.menu li').removeClass('on')
            $('.menu li').eq(1).addClass('on')
        }
        if(sc>=10000 && sc<15000){
            $('section>article').removeClass('on')
            $('section>article').eq(2).addClass('on')
            $('.menu li').removeClass('on')
            $('.menu li').eq(2).addClass('on')
        }
        if(sc>=15000 && sc<20000){
            $('section>article').removeClass('on')
            $('section>article').eq(3).addClass('on')
            $('.menu li').removeClass('on')
            $('.menu li').eq(3).addClass('on')
        }
        if(sc>=20000){
            $('section>article').removeClass('on')
            $('section>article').eq(4).addClass('on')
            $('.menu li').removeClass('on')
            $('.menu li').eq(4).addClass('on')
        }
    });


    $('.menu li').click(function(){
        let i = $(this).index();
        $('html,body').stop().animate({'scrollTop':5000*i},800)
    });
    $('body').mousemove(function(e){
        let x = e.pageX;
        let y = e.pageY;
        $('.mouse').css({'left':x, 'top':y})
    })

    $('.obj11').css({'left':-270+(x)+'px','top':-100+(-y/80)+'px'})



})