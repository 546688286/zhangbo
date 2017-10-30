
//var divindex=document.querySelector();







//右焦点
	var h = document.body.clientHeight;
	var a = 0;
	$(function(){
		$('.RightFous li').click(function() {
			$('.RightFous li').removeClass('Lli').eq($(this).index()).addClass('Lli')
			a = $(this).index();
			$('.banner').stop().animate({
				'marginTop': a * -h + 'px'
			}, 10)
		})
	})
	
//鼠标滑轮	
	
	var wrapDiv = document.querySelectorAll(".banner div");
	var span=document.querySelectorAll('.RightFous li');
	var n = 0;
	document.onmousewheel = function(e) {
		var e = e || event;
		span[a].className='';
		if(e.deltaY > 0) {
			a++;
			if(a > 4) {
				a = 4;
			}
			//          console.log(e.deltaY)
			ban.style.marginTop = -a * h + 'px';
			span[a].className='Lli';
			//          console.log(span[n]);
		} else if(e.deltaY < 0) {
			a--;
			if(a < 0) {
				a = 0;
			}
			span[a].className='Lli';
			ban.style.marginTop = -a * h + 'px';
		}
		
	}


//侧菜单切换
	var Plink = document.querySelector('.SideNav');
	var RightNav = document.querySelector('.SideNav_cen');
	Plink.onclick = function() {
		RightNav.style.display = 'block';
	}
	Iimg.onclick = function() {
		RightNav.style.display = 'none';
	}

//顶部轮播
	var w=document.documentElement.clientWidth;
//	console.log(w)
	$(function() {
		$('.Btn div').click(function() {
			a = $(this).index();
			$('.BanOneImg').stop().animate({
				'left':a*-w+'px'
			})

		})
	})

//第二屏轮播
	var DW=$('.BTlunbo').width();
//	console.log(DW)
	$(function() {
		$('.BTLimg ul li').click(function() {
			$('.BTLimg ul li').removeClass('ulli').eq($(this).index()).addClass('ulli');
			a = $(this).index();
			$('.BTLimg').stop().animate({
				'marginLeft':a*-DW+'px'
			})

		})
	})










	
