$(document).ready(function(){

    // 브라우저의 높이값 찾기
    let ht = $(window).height()
    console.log(ht)

    // gnb의 높이를 찾아라
    let gnbht = $('#gnb').height()
    console.log(gnbht)
    
    // gnb의 가로갑을 찾아라
    let gnbwd = $('#gnb').width()
    console.log(gnbwd)

    $('section').height(ht)


    // 브라우저가 리사이즈 될때마다, 브라우저의 높이를 찾아
    // section의 높이값에 대입해라.
    $('window').resize(function(){
        let ht = $(window).height();
        $('section').height(ht);
    })

    // section에서 마우스가 움직였을때, 이미지의 위치값을 바꾸어라.
    $('section').mousemove(function(e){
        let posx = e.pageX;
        let posy = e.pageY;

        $('.box h2').eq(0).text(posx);
        $('.box h2').eq(1).text(posy);

        $('.p11').css({'bottom':20-posy/30,'right':20+posx/30})
        $('.p12').css({'bottom':-40+posy/30, 'right':130-posx/30})
        $('.p13').css({'bottom':180-posy/30, 'right':60+posx/30})

        $('.p21').css({'bottom':-480-posy/30, 'right':-180+posx/30})
        $('.p22').css({'bottom':-40+posy/30, 'right':130-posx/30})

        $('.p31').css({'bottom':30-posy/30, 'right':180+posx/20})
        $('.p32').css({'bottom':-270+posy/20, 'right':110+posx/30})
        $('.p33').css({'bottom':130-posy/20, 'right':-70+posx/20})

        $('.p41').css({'bottom':-120, 'right':20})
        $('.p42').css({'bottom':-180, 'right':0})
    })



    // 스크롤바의 위치값 찾아내기
    $(window).scroll(function(){
        let sc = $(this).scrollTop();
        $('h1').text(sc);

        let ht = $(window).height();

        // if(sc>=0 && sc< ht){
        //     $('#gnb li').removeClass('on')
        //     $('#gnb li').eq(0).addClass('on')
        // }
        // if(sc>=ht && sc< ht*2){
        //     $('#gnb li').removeClass('on')
        //     $('#gnb li').eq(1).addClass('on')
        // }
        // if(sc>=ht*2 && sc< ht*3){
        //     $('#gnb li').removeClass('on')
        //     $('#gnb li').eq(2).addClass('on')
        // }
        // if(sc>=ht*3 && sc< ht*4){
        //     $('#gnb li').removeClass('on')
        //     $('#gnb li').eq(3).addClass('on')
        // }

        // 반복문 설정
        for(var ab=0; ab<5; ab++){
            if(sc>=ht*ab && sc<ht*(ab+1)){
                $('gnb li').removeClass('on')
                $('gnb li').eq(ab).addClass('on')
            }
        }
    })



    // li를 클릭했을때, scrollTop을 해당 높이로 가게 만들어라.
    // 애니메이트 작성법 .animate({속성명:속성값},지속시간);
    
    $('#gnb li').click(function(){
        // 클릭했을때 나의 순번찾기
        let i = $(this).index();
        let ht = $(window).height();
    // 클릭했을때 나에게 클래스 on 값을 붙여라
    $('#gnb li').removeClass('on')
    $(this).addClass('on') // 전체에서 on값을 제거한 뒤 나에게만 on값을 부여하라

    $('html,body').animate({'scrollTop':ht*i}, 1400, 'easeOutBounce') // 1400은 1.4초를 뜻한다.
    })



    // h1에 마우스가 들어갔을때 나의 위치값을 찾아라
    $('h1').mouseenter(function(){
        let abc = $(this).offset().top
        alert(abc)
    })



    // 마우스휠을 올렸을때, 마우스휠을 내렸을때 화면이 바뀌어라.
    $('section').mousewheel(function(event,delta){
    // 마우스를 올렸을때
    if(delta>0){
        let prev = $(this).prev().offset().top;
        $('html,body').stop().animate({'scrollTop':prev},1400, 'easeOutBounce')
    } // offset은 높이값
    
    // 마우스를 내렸을때
    else if(delta<0){
        let next = $(this).next().offset().top;
        $('html,body').stop().animate({'scrollTop':next},1400, 'easeOutBounce')
    }
    })




})


// 마우스의 움직임 찾아내기

// .p11{bottom: 20px;right: 20px;}
// .p12{bottom: -40px;right: 130px;}
// .p13{bottom: 180px;right: 60px;}

// .p21{bottom: -480px;right: -180px;}
// .p22{bottom: -40px;right: 130px;}

// .p31{bottom: 30px;right: 180px;}
// .p32{bottom: -270px;right: 110px;}
// .p33{bottom: 130px;right: -70px;}

// .p41{bottom: -120px;right: 20px;}
// .p42{bottom: -180px;right: 0px;}



