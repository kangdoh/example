$(document).ready(function(){

    let imgs=""

    for(var i = 0; i<200; i++){

        console.log(i)
        $('h1').text(i)
        imgs+='<img src="img/pic'+i+'.jpg">'

        $('section').html(imgs)
    }





    // 최대움직인거리에서 내가 움직인 거리를 나누고 곱하기200
    // 움직인거리 (x) / 최대거리(윈도우의 width거리)

    $(window).mousemove(function(e){

        let x = e.pageX
        let wd = $(window).width()

        // 연산식
        let number =Math.floor((x/wd)*200)

        $('section img').hide()
        $('section img').eq(number).show()
    })


})