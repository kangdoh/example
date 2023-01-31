$(document).ready(function(){


    $('article').mouseenter(function(){
        let vid = $(this).find('video').get(0)
        // .get - 가져오겠다는 명령어 중요하다!!
        vid.play()
        // 동영상을 움직이는 자바스크립트 명령어 - play

        $(this).stop().animate({'width':'35%'},1000)
        $(this).find('video').animate({'opacity':1},1200)  

        $(this).find('h3').stop().animate({'right':'50px'},800)
        $(this).find('p').stop().animate({'right':'50px'},1000)
    })



    $('article').mouseleave(function(){
        let vid = $(this).find('video').get(0)
        vid.currentsTime=0
        // 동영상을 다시 처음으로 되돌리는 명령어 - currentsTime / 0은 처음이라는 뜻

        vid.pause()
        // 마우스가 안들어가 있을 때 영상이 일시정지 상태 이도록 부여 - pause()
        

        $('article').stop().animate({'width':'12%'},1000)
        $(this).find('video').animate({'opacity':0},1200)
        $(this).find('h3').stop().animate({'right':'-300px'},800)
        $(this).find('p').stop().animate({'right':'-300px'},1000)
    })


})