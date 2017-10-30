//菜单
var RightMenu = document.querySelector('.RightMenu');
M.onclick = function() {
	RightMenu.style.display = 'block';
}
x.onclick = function() {
	RightMenu.style.display = 'none';
}

//切换
//console.log(screen.height);
//console.log(window.screenX);
//console.log(document.body.clientHeight);
var h = document.body.clientHeight;
var a=0;
$(function() {
	$('#RFousUl li').click(function() {
		$('#RFousUl li').removeClass('lii').eq($(this).index()).addClass('lii')
		a = $(this).index();
		$('.banner').stop().animate({
			'marginTop': a * -h + 'px'
		}, 10)

	})
})

//圆形下箭头
$(function() {
	$('.scle').click(function() {
		$('#RFousUl li').removeClass('lii').eq(1).addClass('lii')
		$('.banner').stop().animate({
			'marginTop': -h + 'px'
		}, 10)
	})
})

//鼠标滑轮
 var wrapDiv=document.querySelectorAll(".banner div");
 var span=document.querySelectorAll('#RFousUl li');
 var n=0;
 document.onmousewheel= function (e) {
   var e=e||event;
        span[a].className='';
        if(e.deltaY>0){
            a++;
            if(a>5){
                a=5;
            }
//          console.log(e.deltaY)
            ban.style.marginTop=-a*h+'px';
            span[a].className='lii';
//          console.log(span[n]);
        }else if(e.deltaY<0){
            a--;
            if(a<0){
                a=0;
            }
            span[a].className='lii';
            ban.style.marginTop=-a*h+'px';
        }
    }

    
	



