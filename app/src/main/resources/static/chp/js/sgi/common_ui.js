/* 1depth menu */  
function initNavigation(seq) {
	nav = document.getElementById("gnb");
	nav.menu = new Array();
	nav.current = null;
	nav.menuseq = 0;
	navLen = nav.childNodes.length;

	allA = nav.getElementsByTagName("li");
	for(k = 0; k < allA.length; k++) {
		allA.item(k).onmouseover = allA.item(k).onfocus = function () {
			nav.isOver = true;
		};
		allA.item(k).onmouseout = allA.item(k).onblur = function () {
			nav.isOver = false;
			setTimeout(function () {
				if (nav.isOver == false) {
					if (nav.menu[seq])
						nav.menu[seq].onmouseover();
					else if(nav.current) {
						menuImg = nav.current.childNodes.item(0);
						menuImg.src = menuImg.src.replace("_on.gif", ".gif");
						if (nav.current.submenu)
							nav.current.submenu.style.display = "none";
						nav.current = null;
					}
				}
			}, 1500);
		};
	} 
	
	for (i = 0; i < navLen; i++) {
		navItem = nav.childNodes.item(i);
		if (navItem.tagName != "LI")
			continue;

		navAnchor = navItem.getElementsByTagName("a").item(0);
		navAnchor.submenu = navItem.getElementsByTagName("div").item(0);

		navAnchor.onmouseover = navAnchor.onfocus = function () {
			if (nav.current) {
				menuImg = nav.current.childNodes.item(0);
				menuImg.src = menuImg.src.replace("_on.gif", ".gif");
				if (nav.current.submenu)
					nav.current.submenu.style.display = "none";
				nav.current = null;
			}
			if (nav.current != this) {
				menuImg = this.childNodes.item(0);
				menuImg.src = menuImg.src.replace(".gif", "_on.gif");
				if (this.submenu)
					this.submenu.style.display = "block";
				nav.current = this;
			}
			nav.isOver = true;
		};
		nav.menuseq++;
		nav.menu[nav.menuseq] = navAnchor;
	}
	if (nav.menu[seq]) {
	    nav.menu[seq].onmouseover();
	}
}

//Tab Content_click
function initTabMenu(tabContainerID) {
 
	var tabContainer = document.getElementById(tabContainerID);
	var tabAnchor = tabContainer.getElementsByTagName("a");
	var i = 0;

	for(i=0; i<tabAnchor.length; i++) {
		if (tabAnchor.item(i).className == "tabcont")
		thismenu = tabAnchor.item(i);
		else
	continue;

	thismenu.container = tabContainer;
	thismenu.targetEl = document.getElementById(tabAnchor.item(i).href.split("#")[1]);
	thismenu.targetEl.style.display = "none";
	thismenu.imgEl = thismenu.getElementsByTagName("img").item(0);
	thismenu.onclick = thismenu.onfocus = function tabMenuClick() {
	currentmenu = this.container.current;
	if (currentmenu == this)
		return false;

	if (currentmenu) {
		currentmenu.targetEl.style.display = "none";
		if (currentmenu.imgEl) {
		currentmenu.imgEl.src = currentmenu.imgEl.src.replace("_on.gif", ".gif");
		} else {
		currentmenu.className = currentmenu.className.replace(" on", "");
		}
	}
	this.targetEl.style.display = "";
	if (this.imgEl) {
    this.imgEl.src = this.imgEl.src.replace(".gif", "_on.gif");
	} else {
	this.className += " on";
	}
	this.container.current = this;

	return false;
	};
	if (!thismenu.container.first)
	thismenu.container.first = thismenu;
	}
	if (tabContainer.first)
	tabContainer.first.onclick();
}


//Tab Content_onmouseover
function prodTabMenu(tabContainerID) {
 
	var tabContainer = document.getElementById(tabContainerID);
	var tabAnchor = tabContainer.getElementsByTagName("a");
	var i = 0;

	for(i=0; i<tabAnchor.length; i++) {
		if (tabAnchor.item(i).className == "tabcont")
		thismenu = tabAnchor.item(i);
		else
	continue;

	thismenu.container = tabContainer;
	thismenu.targetEl = document.getElementById(tabAnchor.item(i).href.split("#")[1]);
	thismenu.targetEl.style.display = "none";
	thismenu.imgEl = thismenu.getElementsByTagName("img").item(0);
	thismenu.onmouseover = thismenu.onfocus = function tabMenuOver() {
	currentmenu = this.container.current;
	if (currentmenu == this)
		return false;

	if (currentmenu) {
		currentmenu.targetEl.style.display = "none";
		if (currentmenu.imgEl) {
		currentmenu.imgEl.src = currentmenu.imgEl.src.replace("_on.gif", ".gif");
		} else {
		currentmenu.className = currentmenu.className.replace(" on", "");
		}
	}
	this.targetEl.style.display = "";
	if (this.imgEl) {
    this.imgEl.src = this.imgEl.src.replace(".gif", "_on.gif");
	} else {
	this.className += " on";
	}
	this.container.current = this;

	return false;
	};
	if (!thismenu.container.first)
	thismenu.container.first = thismenu;
	}
	if (tabContainer.first)
	tabContainer.first.onmouseover();
}

$(document).ready(function(){
	
	/* 2depth menu */
	$('.menu01 .gnbdep > ul > li > a').mouseover(function() {
		$('.gnbdep > ul > li > ul').show(200);
		//$('.gnbmask').animate({'height':'283'},{ duration:150 });
		$('.gnbmask').height("283px");
		$('.gnbdep').addClass('bgline');
	});

	$('.menu02 .gnbdep > ul > li > a').mouseover(function() {
		$('.gnbdep > ul > li > ul').show(200);
		//$('.gnbmask').animate({'height':'306'},{ duration:150 });
		$('.gnbmask').height("325");
		$('.gnbdep').addClass('bgline');
	});
	
/* 보상서비스 3차 메뉴가 없음으로 - 대신 cs 메뉴에 제공  */
	$('.cmenu03 .gnbdep > ul > li > a').mouseover(function() {
		$('.gnbdep > ul > li > ul').show(200);
		//$('.gnbmask').animate({'height':'266'},{ duration:150 });
		$('.gnbmask').height("306");  //메뉴 추가로 길이수정
		$('.gnbdep').addClass('bgline');
	});
	
/* 보상서비스 3차 메뉴가 없음으로 - 대신cr 메뉴에 제공  */	
	$('.rmenu03 .gnbdep > ul > li > a').mouseover(function() {
		$('.gnbdep > ul > li > ul').show(200);
		//$('.gnbmask').animate({'height':'285'},{ duration:150 });
		$('.gnbmask').height("306");
		$('.gnbdep').addClass('bgline');
	});
	
	/* 보상서비스 3차 메뉴가 없음으로 - 대신cr 메뉴에 제공  */	
	$('.rmenu04 .gnbdep > ul > li > a').mouseover(function() {
		$('.gnbdep > ul > li > ul').show(200);
		//$('.gnbmask').animate({'height':'285'},{ duration:150 });
		$('.gnbmask').height("306");
		$('.gnbdep').addClass('bgline');
	});
	
	$('.menu04 .gnbdep > ul > li > a').mouseover(function() {
		$('.gnbdep > ul > li > ul').show(200);
		//$('.gnbmask').animate({'height':'285'},{ duration:150 });
		$('.gnbmask').height("306");
		$('.gnbdep').addClass('bgline');
	});

	$('.menu05 .gnbdep > ul > li > a').mouseover(function() {
		$('.gnbdep > ul > li > ul').show(200);
		//$('.gnbmask').animate({'height':'325'},{ duration:150 });
		$('.gnbmask').height("325");
		$('.gnbdep').addClass('bgline');
	});
	
	$('.menu05 .gnbdep > ul:last > li:last > ul:last > li:last > a:last').focusout(function() {		
		$('.gnbdep > ul > li > ul').hide();
		//$('.gnbmask').animate({'height':'143'},{ duration:150 });
		$('.gnbmask').height("143");
		$('.gnbdep').removeClass('bgline');
	});
	
	$('.gnbdep').mouseleave(function() {
		$('.gnbdep > ul > li > ul').hide();
		//$('.gnbmask').animate({'height':'143'},{ duration:150 });
		$('.gnbmask').height("143");
		$('.gnbdep').removeClass('bgline');
	});

	$('#gnb ul li a').focus(function(){ $('#gnb ul li ul').slideDown(150);});
	$('.menu01 .gnbdep > ul > li > a').focus(function(){ $('.gnbmask').animate({'height':'283'},{ duration:150 });$('.gnbdep').addClass('bgline');});
	$('.menu02 .gnbdep > ul > li > a').focus(function(){ $('.gnbmask').animate({'height':'306'},{ duration:150 });$('.gnbdep').addClass('bgline');});
	$('.menu03 .gnbdep > ul > li > a').focus(function(){ $('.gnbmask').animate({'height':'266'},{ duration:150 });$('.gnbdep').addClass('bgline');});
	$('.cmenu03 .gnbdep > ul > li > a').focus(function(){ $('.gnbmask').animate({'height':'266'},{ duration:150 });$('.gnbdep').addClass('bgline');});
	$('.rmenu03 .gnbdep > ul > li > a').focus(function(){ $('.gnbmask').animate({'height':'266'},{ duration:150 });$('.gnbdep').addClass('bgline');});
	$('.menu04 .gnbdep > ul > li > a').focus(function(){ $('.gnbmask').animate({'height':'285'},{ duration:150 });$('.gnbdep').addClass('bgline');});
	$('.menu05 .gnbdep > ul > li > a').focus(function(){ $('.gnbmask').animate({'height':'325'},{ duration:150 });$('.gnbdep').addClass('bgline');});
	$('.location a').focus(function(){
		$('.gnbdep > ul > li > ul').hide(200);
		$('.gnbmask').animate({'height':'143'},{ duration:150 });
		$('.gnbdep').removeClass('bgline');
	});
	
	//tab_add
	/*
	$('.mem_tab li a').addClass('ov');
	$('.mem_tab li a.on').removeClass('ov');
	*/
	//tab_on
	/*
	$('.mem_tab > li > a.on > img').find(function(){
		$('.mem_tab > li > a.on > img').attr({ src: function() { 
			return $(this).attr('src').replace('.gif', '_on.gif'); } 
		});
	});
	*/
	//img_rollover
	$(".myguide,.gnbdep ul li a,.mem_tab li a.ov").each(function(){
		var image = $(this).children("img");
		var imgsrc = $(image).attr("src");

		$(this).mouseover(function(){
		var on = imgsrc.replace('.gif','_on.gif');		
		$(image).attr("src",on);
		});

		$(this).mouseout(function(){
		var off = imgsrc.replace('_on.gif','.gif');
		$(image).attr("src",off);
		});

	  	$(this).focus(function(){
	   	var fc = imgsrc.replace('.gif','_on.gif');
	   	$(image).attr("src",fc);
	  	});

		$(this).blur(function(){
	   	var bl = imgsrc.replace('_on.gif','.gif');
	   	$(image).attr("src",bl);
	  	});
  	});

	//acc_menu open,close
	var atc = $('#accMenu .article');
		atc.addClass('hidden');
		atc.find('.cont').hide();
		atc.eq(0).removeClass('hidden').find('.cont').show();
	$('#accMenu .article .title a.act').click (function() {
		var accatc = $(this).parents('.article:first');
		if(accatc.hasClass('hidden')) {
			atc.addClass('hidden').removeClass('current').find('.cont').slideUp(200);
			accatc.removeClass('hidden').addClass('current').find('.cont').slideDown(200);
		} else {
			accatc.removeClass('current').addClass('hidden').find('.cont').slideUp(200);
		}
		return false;
	});
/*
function layer_pop(value) {
     if (value=="on"){
      document.getElementById('layer_pop').style.display="block";
     }else if (value=="off"){
      document.getElementById('layer_pop').style.display="none";
	  $('#fade').remove();
	  return false;
     }
  }
*/
	//클래스방식추가
	var coatc = $('.COaccMenu .article');
		coatc.addClass('hidden');
		coatc.find('.cont').hide();
		coatc.eq(0).removeClass('hidden').find('.cont').show();
	$('.COaccMenu .article .title a.act').click (function() {
		var coaccatc = $(this).parents('.article:first');
		if(coaccatc.hasClass('hidden')) {
			coatc.addClass('hidden').removeClass('current').find('.cont').slideUp(200);
			coaccatc.removeClass('hidden').addClass('current').find('.cont').slideDown(200);
		} else {
			coaccatc.removeClass('current').addClass('hidden').find('.cont').slideUp(200);
		}
		return false;
	});
	$('.all_accmenu .open').click(function() {
		var hidden = $('.COaccMenu .hidden').length;
		if(hidden > 0) {
			atc.removeClass('hidden').addClass('current').find('.cont').slideDown(100);
		}
	});
	$('.all_accmenu .close').click(function() {
		var hidden = $('.COaccMenu .current').length;
		if(hidden > 0) {
			atc.removeClass('current').addClass('hidden').find('.cont').slideUp(100);
	    }
	});

	//acc_menu checkbox open,close
	$(function(){
		for (var i=1; i<=10; i++) {
		    (function() {
	             var cnt = i;
	             $(".nextmenu"+cnt).click(function(){
	                 $(".acclist"+cnt).removeClass('current').addClass('hidden').find('.cont').hide(100);
	                 $(".acclist"+cnt).next().removeClass('hidden').addClass('current').find('.cont').show(100);
		         });
		    })();
		}
	 });

	//acc_menu all open,close
	$('.all_accmenu .open').click(function() {
		var hidden = $('#accMenu .hidden').length;
		if(hidden > 0) {
			atc.removeClass('hidden').addClass('current').find('.cont').slideDown(100);
		}
	});
	$('.all_accmenu .close').click(function() {
		var hidden = $('#accMenu .current').length;
		if(hidden > 0) {
			atc.removeClass('current').addClass('hidden').find('.cont').slideUp(100);
	    }
	});
	

 /*

	$('.layer_hide').click(function(){
		$('#fade, #layer_pop').fadeOut();
		return false;
	});

	$('.layer_show1').click(function(){
		$('#layer_pop1').fadeIn();
		$('#wrap').append('<div id="fade"></div>');
		$('#fade').show();
	});
	$('.layer_hide1').click(function(){
		$('#fade, #layer_pop1').hide();
		return false;
	});

	$('.layer_show2').click(function(){
		$('#layer_pop2').fadeIn();
		$('#wrap').append('<div id="fade"></div>');
		$('#fade').fadeIn();
	});
	$('.layer_hide2').click(function(){
		$('#fade, #layer_pop2').fadeOut()
	});

	$('.layer_show3').click(function(){
		$('#layer_pop3').fadeIn();
		$('#wrap').append('<div id="fade"></div>');
		$('#fade').css({ 'filter': 'alpha(opacity=50)','opacity':'0.4', 'height': $(document).height()}).fadeIn();
	});
	$('.layer_hide3').click(function(){
		$('#fade, #layer_pop3').fadeOut()
	});

	$('.layer_show4').click(function(){
		$('#layer_pop4').fadeIn();
		$('#wrap').append('<div id="fade"></div>');
		$('#fade').css({ 'filter': 'alpha(opacity=50)','opacity':'0.4', 'height': $(document).height()}).fadeIn();
	});
	$('.layer_hide4').click(function(){
		$('#fade, #layer_pop4').fadeOut()
	});

	$('.layer_login_show1').click(function(){
		$('#layer_login1').fadeIn();
		$('#wrap').append('<div id="fade"></div>');
		$('#fade').css({ 'filter': 'alpha(opacity=50)','opacity':'0.4', 'height': $(document).height()}).fadeIn();
	});
	$('.layer_login_hide1').click(function(){
		$('#fade, #layer_login1').fadeOut()
	});

	$('.layer_login_show2').click(function(){
		$('#layer_login2').fadeIn();
		$('#wrap').append('<div id="fade"></div>');
		$('#fade').css({ 'filter': 'alpha(opacity=50)','opacity':'0.4','height': $(document).height()}).fadeIn();
	});
	$('.layer_login_hide2').click(function(){
		$('#fade, #layer_login2').fadeOut()
	});
*/
//레이어보이기닫기
/*
function layer_pop(value) {
     if (value=="on"){
      document.getElementById('layer_pop').style.display="block";
     }else if (value=="off"){
      document.getElementById('layer_pop').style.display="none";
	  $('#fade').remove();
	  return false;
     }
  }
*/
/*
function layer_pop1(value) {
     if (value=="on"){
      document.getElementById('layer_pop1').style.display="block";
	 return false;
	 }else if (value=="off"){
      document.getElementById('layer_pop1').style.display="none";
	 return false;

     }
  }

function layer_pop2(value) {
     if (value=="on"){
      document.getElementById('layer_pop2').style.display="block";
     }else if (value=="off"){
      document.getElementById('layer_pop2').style.display="none";
     }
  }

function layer_pop3(value) {
     if (value=="on"){
      document.getElementById('layer_pop3').style.display="block";
     }else if (value=="off"){
      document.getElementById('layer_pop3').style.display="none";
     }
  }

function layer_pop4(value) {
     if (value=="on"){
      document.getElementById('layer_pop4').style.display="block";
     }else if (value=="off"){
      document.getElementById('layer_pop4').style.display="none";
     }
  }

function layer_login1(value) {
     if (value=="on"){
      document.getElementById('layer_login1').style.display="block";
     }else if (value=="off"){
      document.getElementById('layer_login1').style.display="none";
     }
  }
 
function layer_login2(value) {
     if (value=="on"){
      document.getElementById('layer_login2').style.display="block";
     }else if (value=="off"){
      document.getElementById('layer_login2').style.display="none";
     }
  }

function layerShow(value) {
     if (value=="on"){
      document.getElementById('layerShow').style.display="block";
     }else if (value=="off"){
      document.getElementById('layerShow').style.display="none";
     }
  }
 */
	// Input_label
	var intype = $('.ov_label').next('.intype');
	$('.ov_label').css('position','absolute');
	intype.focus(function(){
		$(this).prev('.ov_label').css('visibility','hidden');
		})
		.blur(function(){
			if($(this).val() == ''){
				$(this).prev('.ov_label').css('visibility','visible');
			} else {
				$(this).prev('.ov_label').css('visibility','hidden');
			}
		})
		.change(function(){
			if($(this).val() == ''){
				$(this).prev('.ov_label').css('visibility','visible');
			} else {
				$(this).prev('.ov_label').css('visibility','hidden');
			}
		})
		.blur();
	
	//top_search
	$('.top_search a').toggle(function(){
		$('.inner_form').show();
	},function(){
		$('.inner_form').hide();
	});
	$('.top_search a').focus(function() { 
	   $('.inner_form').show();
	});

	//top_인재개발원 분기
	$('.top_tosite1 a').toggle(function(){
		$('.inner_form1').show();
	},function(){
		$('.inner_form1').hide();
	});
	$('.top_tosite1 a').focus(function() { 
	   $('.inner_form1').show();
	});

	//top_english 분기
	$('.top_tosite2 a').toggle(function(){
		$('.inner_form2').show();
	},function(){
		$('.inner_form2').hide();
	});
	$('.top_tosite2 a').focus(function() { 
	   $('.inner_form2').show();
	});
	
	//top_재무제표,기업현황표 분기 
	$('.top_tosite3 a').toggle(function(){
		$('.inner_form3').show();
	},function(){
		$('.inner_form3').hide();
	});
	$('.top_tosite3 a').focus(function() { 
	   $('.inner_form3').show();
	});
	
	//top_재무제표,기업현황표 분기  - main
	$('.gnb_tosite a').toggle(function(){
		$('.inner_form4').show();
	},function(){	
		$('.inner_form4').hide();
	});
	$('.gnb_tosite a').focus(function() { 
	   $('.inner_form4').show();
	});
	
	//top_영문홈페이지 focus 변경  - main 201605
	$('.tshop a').focus(function() { 
		$('.inner_form1').hide();
	});
	$('.top_tosite1 a').focus(function() { 
		$('.inner_form2').hide();
		$('.inner_form3').hide();
	});
	$('.top_tosite2 a').focus(function() { 
		$('.inner_form1').hide();
		$('.inner_form3').hide();
	});
	$('.top_tosite3 a').focus(function() { 
		$('.inner_form1').hide();
		$('.inner_form2').hide();
	});
	//top_사회공헌 focus 변경  - main 201606
	$('#tcon a').focus(function() {
		$('.inner_form3').hide();	
	});
	$('.iacc1 a').focus(function() {
		$('.inner_form4').hide();
	});
	$('.iacc3 a').focus(function() {
		$('.inner_form4').hide();
	});
	
});
/***
*	레이어 팝업 
***/
function openLayer(layer_num,popupOpener){
	if(!layer_num)
		var layer_num = $(this).attr("layer");
		var layer_body = $(".layer_pop[layer="+layer_num+"]");

		$('body').append('<div id="fade"></div>');//어두운뒷배경도 같이 소환
		/*
		$('.layer_pop[layer='+layer_num+']').clone().appendTo('body');//body 밑에 복사하고(이미개발된페이지가 많아 마크업수정이 어려움)(IE7 어두운뒷배경 문제)
		$('.layer_pop[layer='+layer_num+']').eq(0).remove();//원본마크업을 지움
		*/
		$(layer_body).show();//레이어를 소환하고
		$(layer_body).prepend("<p class='hide layerstart'>레이어팝업이 시작됩니다. ESC키로 닫습니다.</p>");//접근성
		$(layer_body).append("<p class='hide layerend'>레이어팝업이 끝났습니다. ESC키로 닫습니다.</p>");//접근성
		$(layer_body).find('.layer_btnr').append("<a href='#' style='height:0;width:0;' class='trick_'><!-- 텝이동으로 레이어 빠져나오지 못함 --></a>");//레이어가 살아있을때 포커스가 탈주못하게 트릭!!
		$(layer_body).find("a:first,input:first,button:first,textarea:first,*[tabindex=0]").focus();//처음 탐색할 포커스 찾아가기
		//var popupOpener = $(this);//레이어 팝업뜨기전 opener 포커스를 기억하고
		$(layer_body).find(".layer_hide").click(function(){//닫기버튼 클릭시 닫기
			$(layer_body).hide();
			$('#fade,.layerstart,.layerend,.trick_').remove();
			$(popupOpener).focus();//레이어닫을때 opener 로 포커스이동시킴
			return false;
		});
		$("#fade").click(function(){//어두운뒷배경 클릭시 닫기
			$(layer_body).hide();
			$('#fade,.layerstart,.layerend,.trick_').remove();
			$(popupOpener).focus();//레이어닫을때 opener 로 포커스이동시킴
			return false;
		});
		$(document).keydown(function(event){//ESC키로 닫기
			if(event.keyCode != 27) return true;
			$(layer_body).hide();
			$('#fade,.layerstart,.layerend,.trick_').remove();
			$(popupOpener).focus();//레이어닫을때 opener 로 포커스이동시킴
		});
		$(layer_body).find(".layer_btnr > .layer_hide").focusout(//레이어 안에서만 포커스가 탈주못하게 막음
			function(){
				$(layer_body).find("a:first,input:first,button:first,textarea:first,*[tabindex=0]").focus();//레이어 안에서 포커스가 끝나면 레이어 안에서 처음 탐색할 포커스를 찾음
			}
		);
		return false;	
}
jQuery(function($){
$('.layer_show').click(
	function(){
		var layer_num = $(this).attr("layer");
		var popupOpener = $(this);//레이어 팝업뜨기전 opener 포커스를 기억하고
		openLayer(layer_num,popupOpener);
	}
	);
});
function layerStart(layer_num){//레이어 띄우기
	openLayer(layer_num);
	return false;
}
function closeLayer(layer_num){
	$('.layer_pop[layer='+layer_num+']').hide();
	$('#fade,.layerstart,.layerend,.trick_').remove();
	var popupOpener = $(this);//레이어 팝업뜨기전 opener 포커스를 기억하고
	$(popupOpener).focus();//레이어닫을때 opener 로 포커스이동시킴
}


//포커스이동
function bncFocus(num) {
    document.getElementsByName('next'+num)[0].focus();
}

//quick_menu
function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		};
	}
}

var scroll_pixel,div_pixel,gtpos,gbpos,loop,moving_spd, f, k, glimit, bottom_margin;
var top_margin = 56;
var bottom_margin = 300;
var moving_speed = 20;
var interval_time = 10;
var quickDivHeight = 806;

function start_scrollmove() {
	tidSlide = setInterval("check_scrollmove()",interval_time);
}

function check_scrollmove() {
	if(document.body && (document.body.scrollLeft || document.scrollTop)) {
		scroll_pixel = document.body.scrollTop;
		gtpos = document.body.scrollTop+top_margin;
		glimit = document.body.scrollHeight - bottom_margin - quickDivHeight;
	} else if(document.documentElement &&(document.documentElement.scrollLeft||document.documentElement.scrollTop)) {
		scroll_pixel = document.documentElement.scrollTop;
		gtpos = document.documentElement.scrollTop+top_margin;
		glimit = document.documentElement.scrollHeight - bottom_margin - quickDivHeight;
	} else {
		scroll_pixel = document.body.scrollTop;
		gtpos = document.body.scrollTop+top_margin;
		glimit = document.body.scrollHeight - bottom_margin - quickDivHeight;
	}

	if (gtpos > glimit) {
		gtpos = glimit;
	}

	var qu = document.getElementById("quick"); //quick메뉴
	if (!(qu == null || qu == "undefined")){ //quick메뉴가 존재할경우에만 아래 실행
		var divTop = parseInt( document.getElementById("quick").style.top.replace("px","") );
		if( divTop < gtpos){
			moving_spd=(gtpos-divTop)/moving_speed;
			document.getElementById("quick").style.top = parseInt((divTop + moving_spd)) + "px";
		} else if(divTop > gtpos) {
			if(divTop > top_margin) {
				moving_spd=(divTop-gtpos)/moving_speed;
				document.getElementById("quick").style.top = parseInt((divTop - moving_spd)) + "px";
			} else {
				document.getElementById("quick").style.top = top_margin + "px";
			}
		}
	}

}
addLoadEvent(start_scrollmove); //Quick메뉴가 없는 페이지에서 이 스크립트 파일을 로드하면 에러메세지남 <div id="quick"></div>빈 테그를 넣으면 해결




function MM_swapImgRestore() {
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() {
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) {
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() {
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
/***
*	패밀리사이트
***/
jQuery(function($){
	$(".family").find("input[type=image]").click(
		function(){
			go_site = $(".family").find("select").val();
			window.open(go_site,"_blank");
		}
	);

});	
/***
*	툴팁 레이어
***/
jQuery(function($){
	function __tooltip(){
		var arrow_position ="";
		$("div.tooltip").hide();
		$(this).next("div.tooltip").show();
		tooltip_offset = $(this).position();
		$(this).focusout(
			function(){
				$(this).next("div.tooltip").hide();
			}
		);
		$(this).mouseout(
			function(){
				$(this).next("div.tooltip").hide();
			}
		);
		arrow_position = $(this).next("div.tooltip").children(".conts").attr("class");//꼬리위치찾기
		arrow_position = arrow_position.split(" ");
		arrow_position = arrow_position[2];//class 중에서 arrow 방향만 추출


		switch (arrow_position)
		{
		case "top"://꼬리가 위일때 
			conts_witdh = $(this).next("div.tooltip").children(".conts").width();
			anchor_height = $(this).height();
			anchor_width = $(this).width();
			conts_witdh = (conts_witdh / 2 * -1) -20; // left padding -20
			conts_witdh = conts_witdh + anchor_width / 2;
			anchor_height = anchor_height +10;
			break;
		case "bottom"://꼬리가 아래일때
			conts_witdh = $(this).next("div.tooltip").children(".conts").width();
			anchor_height = $(this).next("div.tooltip").children(".conts").height();
			anchor_width = $(this).width();
			conts_witdh = (conts_witdh / 2 * -1) -20; // left padding -20
			conts_witdh = conts_witdh + anchor_width / 2;
			anchor_height = (anchor_height * -1) - 55;
			break;
		case "left"://꼬리가왼쪽일때
			conts_witdh = $(this).next("div.tooltip").children(".conts").width();
			anchor_height = $(this).height();
			anchor_height2 = $(this).next("div.tooltip").children(".conts").height();
			conts_witdh = $(this).width()+15;
			anchor_height = (anchor_height/2) - (anchor_height2/2 +20);//ㅆ저ㅣ넝쪼ㅉ딴와ㅣㄴㅇ러니러ㅏ나
			break;
		case "right"://꼬리가오른일때
			conts_witdh = $(this).next("div.tooltip").children(".conts").width();
			anchor_height = $(this).height();
			anchor_width = $(this).width();
			anchor_height2 = $(this).next("div.tooltip").children(".conts").height();
			conts_witdh = (conts_witdh+50) * -1;
			anchor_height = (anchor_height/2) - (anchor_height2/2 +20);//아써ㅣ바ㅓㅣ나ㅚㄴㅇ라널
			break;
		}
		
		$(this).next("div.tooltip").css("margin-left",Math.round(conts_witdh)+"px");
		$(this).next("div.tooltip").css("margin-top",Math.round(anchor_height)+"px");
		$(this).next("div.tooltip").css("top",Math.round(tooltip_offset.top)+"px");
		$(this).next("div.tooltip").css("left",Math.round(tooltip_offset.left)+"px");
		return false;
	}
	$("a.tooltip").click(__tooltip).focus(__tooltip).mouseover(__tooltip);
});

var  commonTooltip = function( selectKey ){
	function __tooltip(){
		var arrow_position ="";
		$("div.tooltip").hide();
		$(this).next("div.tooltip").show();
		tooltip_offset = $(this).position();
		$(this).focusout(
			function(){
				$(this).next("div.tooltip").hide();
			}
		);
		$(this).mouseout(
			function(){
				$(this).next("div.tooltip").hide();
			}
		);
		arrow_position = $(this).next("div.tooltip").children(".conts").attr("class");//꼬리위치찾기
		arrow_position = arrow_position.split(" ");
		arrow_position = arrow_position[2];//class 중에서 arrow 방향만 추출


		switch (arrow_position)
		{
		case "top"://꼬리가 위일때 
			conts_witdh = $(this).next("div.tooltip").children(".conts").width();
			anchor_height = $(this).height();
			anchor_width = $(this).width();
			conts_witdh = (conts_witdh / 2 * -1) -20; // left padding -20
			conts_witdh = conts_witdh + anchor_width / 2;
			anchor_height = anchor_height +10;
			break;
		case "bottom"://꼬리가 아래일때
			conts_witdh = $(this).next("div.tooltip").children(".conts").width();
			anchor_height = $(this).next("div.tooltip").children(".conts").height();
			anchor_width = $(this).width();
			conts_witdh = (conts_witdh / 2 * -1) -20; // left padding -20
			conts_witdh = conts_witdh + anchor_width / 2;
			anchor_height = (anchor_height * -1) - 55;
			break;
		case "left"://꼬리가왼쪽일때
			conts_witdh = $(this).next("div.tooltip").children(".conts").width();
			anchor_height = $(this).height();
			anchor_height2 = $(this).next("div.tooltip").children(".conts").height();
			conts_witdh = $(this).width()+15;
			anchor_height = (anchor_height/2) - (anchor_height2/2 +20);//ㅆ저ㅣ넝쪼ㅉ딴와ㅣㄴㅇ러니러ㅏ나
			break;
		case "right"://꼬리가오른일때
			conts_witdh = $(this).next("div.tooltip").children(".conts").width();
			anchor_height = $(this).height();
			anchor_width = $(this).width();
			anchor_height2 = $(this).next("div.tooltip").children(".conts").height();
			conts_witdh = (conts_witdh+50) * -1;
			anchor_height = (anchor_height/2) - (anchor_height2/2 +20);//아써ㅣ바ㅓㅣ나ㅚㄴㅇ라널
			break;
		}
		
		$(this).next("div.tooltip").css("margin-left",Math.round(conts_witdh)+"px");
		$(this).next("div.tooltip").css("margin-top",Math.round(anchor_height)+"px");
		$(this).next("div.tooltip").css("top",Math.round(tooltip_offset.top)+"px");
		$(this).next("div.tooltip").css("left",Math.round(tooltip_offset.left)+"px");
		return false;
	}
	$(selectKey).click(__tooltip).focus(__tooltip).mouseover(__tooltip);
};

function uGuide(url){
	var name = "guide";
	var width = "990";
	var height = "900";
	var top  = screen.height / 2 - height / 2 - 50;
	var left = screen.width / 2 - width / 2 ;
	var win = open(url, name, 'width=' + width + ', height=' + height + ', top=' + top +
	        ', left=' + left + ', scrollbars=yes, resizable=no, status=yes, toolbar=no, menubar=no');
	win.focus();
}

var comnWebLogCmmnt = function( hmpgWorkDtedc , hmpgWorkLwrnDtedc  , comment , etc ){

	var url  = "/chp/comnWebLog.html?HMPG_WORK_DTEDC="+hmpgWorkDtedc+"&HMPG_WORK_LWRN_DTEDC="+hmpgWorkLwrnDtedc ;  
	if( comment!=null && comment!='' ) url+="&CMMNT="+comment ;
	if( etc!=null && etc!='' ) url+="&"+etc ;
//alert(url);
    var data = "" ; 
    $.ajax({
     	contentType: "application/x-www-form-urlencoded; charset=UTF-8",
         url :  url,
         type : 'get',
         data : data ,
         dataType : 'text'
    })
    .done(function(data) {
    	//alert("data");
    })
    .fail(function(jqXHR, textStatus) {
    	//alert("fail");
    });

};

var comnWebLogSucc = function( hmpgWorkDtedc , hmpgWorkLwrnDtedc  , comment , etc ){

	var url  = "/chp/comnWebLog.html?HMPG_WORK_DTEDC="+hmpgWorkDtedc+"&HMPG_WORK_LWRN_DTEDC="+hmpgWorkLwrnDtedc+"&RESULT=S00" ;  
	if( comment!=null && comment!='' ) url+="&CMMNT="+comment ;
	if( etc!=null && etc!='' ) url+="&"+etc ;
//alert(url);
    var data = "" ; 
    $.ajax({
     	contentType: "application/x-www-form-urlencoded; charset=UTF-8",
         url :  url,
         type : 'get',
         data : data ,
         dataType : 'text'
    })
    .done(function(data) {
    	//alert("data");
    })
    .fail(function(jqXHR, textStatus) {
    	//alert("fail");
    });

};

var comnWebLogErr = function( hmpgWorkDtedc , hmpgWorkLwrnDtedc , comment , etc ){

	var url  = "/chp/comnWebLog.html?HMPG_WORK_DTEDC="+hmpgWorkDtedc+"&HMPG_WORK_LWRN_DTEDC="+hmpgWorkLwrnDtedc+"&RESULT=E00" ;  
	if( comment!=null && comment!='' ) url+="&CMMNT="+comment ;
	if( etc!=null && etc!='' ) url+="&"+etc ;
	
	//alert(url);
    var data = "" ; 
    $.ajax({
     	contentType: "application/x-www-form-urlencoded; charset=UTF-8",
         url :  url,
         type : 'get',
         data : data ,
         dataType : 'text'
    })
    .done(function(data) {
    	//alert("data");
    })
    .fail(function(jqXHR, textStatus) {
    	//alert("fail");
    });

};

/*	2017.02 행자부 주소 추가작
 *  팝업페이지에서 주소입력한 정보를 받아서,   
	현 페이지에 정보를 등록합니다.
 */       
 
function jusoCallBack(addr01, addr02, zipNo){
	// 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
	$("#displayZpcd").val(zipNo);
	$("#addr01").val(addr01);
	$("#addr02").val(addr02);
	document.dataForm.displayZpcd.value = zipNo;
	document.dataForm.addr01.value = addr01;
	document.dataForm.addr02.value = addr02;
}