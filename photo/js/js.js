$(document).ready(function(){

    // body의 높이값과 section의 가로값을 통일시키기
    // article갯수를 구하고 article의 가로값을 구해서 
    // 두개를 곱한값 section의 가로값으로 변환
    let a = $('article').size();
    // 갯수를 구하는 명령어 - size
    let awd = $('article').width();
    $('section').width(a*(awd+20)+600)
    $('body').height(a*(awd+20))


    $(window).resize(function(){
        // 화면이 리사이징 될때만다 body의 높이값과 section의 가로값을 통일시키기
        // article갯수를 구하고 article의 가로값을 구해서 
        // 두개를 곱한값 section의 가로값으로 변환
        let a = $('article').size();
        // 갯수를 구하는 명령어 - size
        let awd = $('article').width();
        $('section').width(a*(awd+20)+600)
        $('body').height(a*(awd+20))

    
        $('html,body').scrollTop(a*(awd+20))
    })




    // 화면에서 스크롤바가 움직일때 상단바의 위치를 찾아라
    $(window).scroll(function(){
        let sc = $(window).scrollTop();
        $('h1').text(sc);
        $('section').stop().animate({'left':-sc},600)
    })

    $('.gnb li').click(function(){
        
        let i = $(this).index();
        // index는 nth-child처럼 자기가 가지고 있는 순번을 찾는거다.
        $('section').stop().animate({'left':-1000*i},200);
        // $('html,body').scrollTop(1000*i)
    });



    // article을 클릭했을때 addClass를 해라
    // 모든 article에겐 removeClass를 먼저해라

    $('article h2').click(function(e){
        e.preventDefault(); // preventDefault - 기존에 있었던 a의 이벤트 값을 없애라.
        

        // 클릭한 나의 부모자의 순번을 찾아라.
        let id = $(this).parent().index();
        // 클릭한 나의 자손인'a'의 속성값 / attr-속성값
        let src = $(this).children('a').attr('href')
        $('article p img').attr({'src':''})


        // 클릭한 나의 형제인 'p'의 자손인'img'안에 속성명 src안에 대입해라.
        $(this).siblings('p').children('img').attr({'src':src}) //sibilings-형제자
    
        $('article').removeClass('on');
        $(this).parent().addClass('on');

        $('html,body').scrollTop(200*id)


    })

    // span을 클릭했을때 article에 removeClass를 해라
    // 자손자는 부모자에게 .parent()가 있어야 적용가능
    $('article span').click(function(){
        $(this).parent().removeClass('on')
    })





















    $(window).mousemove(function(e){
        let x = e.pageX
        let y = e.pageY
        
        $('.xy h2').eq(0).text(x);
        $('.xy h2').eq(1).text(y);
    });
})