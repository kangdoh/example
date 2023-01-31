$(document).ready(function(){
    
    // 갤러리이미지 움직임 설정
    // 왼쪽버튼을 클리시 이미지가 이동
    let i = 0
    $('.gallery .left').click(function(){
        if(i<5) i++;

        let gwd = $('.gallery li').width()
        $('.gallery ul').stop().animate({'left':i*-(gwd+5)},200)
        
        $('.gallery li').removeClass('on')
        $('.gallery li').eq(i).addClass('on')
        $('.gallery li').eq(i-1).animate({'opacity':0},200)
    })
    // 오른쪽 클릭시 이미지가 오른쪽으로 이동
    $('.gallery .right').click(function(){
        if(i>0) i--;

        let gwd = $('.gallery li').width()
        $('.gallery ul').stop().animate({'left':i*-(gwd+5)},200)
        
        $('.gallery li').removeClass('on')
        $('.gallery li').eq(i).addClass('on')
        $('.gallery li').eq(i).animate({'opacity':1},200)
    })



    // review 버튼설정
    // 왼쪽
    let l = 0
    $('.review .left').click(function(){
        if(l<4) l++;
        console.log(l)

        let lbt = $('.review li').width()
        $('.review ul').stop().animate({'left':l*-(lbt+20)},200)

        $('.review li').eq(l).addClass('on')
        $('.review li').eq(l-1).removeClass('on')
        $('.review li').eq(l-1).animate({'opacity':0},200)
    })


    // 왼쪽
    
})