$(document).ready(function(){

    // 순차적으로 opcity가 1로 바뀌어라.
    $('.luck1').stop().animate({'opacity':1},1200,function(){
        $('.tea1').stop().animate({'opacity':1},800,function(){
            $('.tea2').stop().animate({'opacity':1},800,function(){
                $('.tea3').stop().animate({'opacity':1},800)
            })
        })
    })

    // ddddddddddd
    $('.search a').click(function(){
        $('.search').addClass('on')
    })

    // 메뉴를 호버했을때 서브메뉴가 보여라
    $('.gnb li').mouseenter(function(){
        let i = $(this).index()
        console.log(i)
        $('sub_menu>div').slideUp()
        $('.sub'+(i+1)).slideDown()
    });

    $('header').mouseleave(function(){
        $('.sub_menu>div').slideUp()
    })

    // sssssssssssssssssssssss
    $('.search a').click(function(){
        $('.search').animate({'width':'160px'},800,function(){
            $('.search').find('input').stop().animate({'opacity':1},200) 
        })
    })

    // 스크롤바가 일정거리만큼 왔을때 프로모션이미지와 텍스트가 움직여라
    // left:0 과 right:0
    $(window).scroll(function(){
        let sc = $(this).scrollTop()
        $('h1').text(sc);

        if(sc>=845 && sc<1200){
            $('.promotion_img').stop().animate({'left':'700px'},1800)
            $('.promotion_txt').stop().animate({'right':0},1800)
        }
        else{
            $('.promotion_img').stop().animate({'left':'-100%'},1800)
            $('.promotion_txt').stop().animate({'right':'-100%'},1800)
        }
    })
})