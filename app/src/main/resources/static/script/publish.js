

/* FAQ */

function faq(){

	$('.faq .faqList dt').click(function(){
		$(this).parent().find('dt').removeClass('on');
		$(this).parent().find('dd').slideUp();
		
		if( $(this).next('dd').is(":hidden") ) {

			$(this).next('dd').slideToggle();
			$(this).toggleClass('on');


		}

		if($(this).hasClass("on")){
			console.log("on");
			$(this).find('a').attr("title","확장됨");
		}else{
			console.log("off ");
			$(this).find('a').attr("title","축소됨");	
		}
		
		
	});

};

$(function(){ faq(); });


/*사고보험금 안내 list*/

function faq_sago(){
	$('.sagob dt').click(function(){
		$(this).parent().find('dt').removeClass('on');
		$(this).parent().find('a').removeClass('close');

		$(this).parent().find('dd').slideUp();

		if( $(this).next('dd').is(":hidden") ) {

			$(this).next('dd').slideToggle();
			$(this).toggleClass('on');
			$(this).parent().find('dt.on a').addClass('close');

		}
		

	});

};

$(function(){ faq_sago(); });




/* 보험상품설계 레이어 */

$(function layerinsuContain(){

	$('.layerbtn.close a').click(function(){

		$('.insuWrap').addClass('off');

		$('.layerbtn.open').removeClass('hide');

		$('.layerbtn.close').addClass('hide');

	});

	$('.layerbtn.open a').click(function(){

		$('.insuWrap').removeClass('off');

		$('.layerbtn.open').addClass('hide');

		$('.layerbtn.close').removeClass('hide');

	});

});



/* 계산식 레이어 */

$(function layerformula(){

	$(".qmark").mouseover(function(){

		$(".qmark").next("div").addClass("hide");

		$(this).next("div").removeClass("hide");

	});

	$(".qmark").mouseout(function() {

		$(this).next("div").addClass("hide");

	});

	$(".qmark").focusin(function() {

		$(".qmark").next("div").addClass("hide");

		$(this).next("div").removeClass("hide");

	});

	$(".qmark").focusout(function() {

		$(this).next("div").addClass("hide");

	});

});



/* 메인 */

var intnum=0;

function start(st,e,int){

	if (st > 1){st=0;}

	var c=st;

	sliderIntervalID = setInterval(function(){

		newslide((c));

		intnum = c;

		if (c==(e)){c=0;}else{c=c+1;}

	},int);

};

function newslide(e){

	if( $('.eventList li').length >= 2) {

		$('.eventList li.on .eventArea').fadeOut();

		$('.eventList li.on').removeClass('on');

		$('.navi:eq('+(e)+')').parent().attr('class','on');

		$('.navi:eq('+(e)+')').next().fadeIn();

		intnum = (e);

	}

};



$(function(){

	/* falily site */

	$('#family_site').hide();

	$('.family_site dt').click(function(){

		$('#family_site').toggle();

		$(this).toggleClass('fold');

		$('#footer').css({'overflow':'visible'});

		return false;

	});

	$('#family_site .close').click(function(){

		$('#family_site').toggle();

		$('.family_site dt').removeClass('fold');

		$('#footer').css({'overflow':'hidden'});
		$('.family_site a').focus();
		return false;

	});

	/**/
	
	/*플로팅메뉴*/
	$('#chatArea').show();
	$('#loan_num').show();
	$('.btn_open').addClass('close');
	$('.btn_open a').click(function(){
		if($('.btn_open').hasClass('close')){
				/*닫힘*/
			$(".side_menu").fadeOut(300);
				$('.btn_open').removeClass('close');
				$('#loan_num').toggle();
				$('#chatArea').toggle();
			}else{
				$(".side_menu").fadeIn(300);
				$('.btn_open').addClass('close');
				/*열림*/
				$('#loan_num').toggle();
				$('#chatArea').toggle();
			}
		return false;
	});
	
	/*$('.loan').click(function(){
		if($('.btn_open').hasClass('close')){
				닫힘
				$('.btn_open').removeClass('close');
				$('#loan_num').toggle();
			}else{
				열림
				$('.btn_open').addClass('close');
				$('#loan_num').toggle();
			}
		return false;
	});*/
	
	/* auto Cursor */
	$('.autoCursor .qmark').click(function(){
		$('#autoCcom').toggle();
		$('.autoCursor').css({'overflow':'visible'});
		return false;
	});

	$('#autoCcom .close').click(function(){
		$('#autoCcom').toggle();
		$('.autoCursor').css({'overflow':'hidden'});
		return false;
	});



	/* customer call ARS */

	var arsWindow = $('.callARSWrap');

	$('.callARS_trigger').click(function(){
		
		arsWindow.addClass('open');
		$("#callArsWrapDiv").data("flag", "bottom");
		$('.callARS .close').focus();
	});

	$('.callARS .close').click(function(){
		arsWindow.removeClass('open');
		
		if($("#callArsWrapDiv").data("flag") == "main") {
			$(".cntsRgt .callARS_trigger_main").focus();
		}else {
			$(".callARS_trigger").focus();
		}
		
	}); 

	arsWindow.find('>.bg').mousedown(function(event){
		arsWindow.removeClass('open');
		return false; 
	});


	var arsWindow = $('.callARSWrap');

	$('.cntsRgt .callARS_trigger_main').click(function(){		
		arsWindow.addClass('open');
		$("#callArsWrapDiv").data("flag", "main");
		$('.callARS .close').focus();
	});




	/*알뜰폰 layer*/
	var phoneWindow = $('.phoneWrap');
	$('.phone_trigger').click(function(){ 
		phoneWindow.addClass('open');
		$('.phoneWrap .close').focus();
		return false; 
	});
	/*알뜰폰 레이어 닫기버튼*/
	$('.phoneWrap .close').click(function(){
		phoneWindow.removeClass('open');
		$(".phone_trigger").focus();
		return false; 
	}); 



	/* visual Wrap */

	/*var visualWindow = $('.visualWrap');

    $('.headClose a').click(function(){ 

        visualWindow.addClass('off');

		$('.headClose').addClass('hide2');

		$('.headOpen').removeClass('hide2');

		return false;

    });

    $('.headOpen a').click(function(){ 

        visualWindow.removeClass('off');

		$('.headClose').removeClass('hide2');

		$('.headOpen').addClass('hide2');

		return false;

    });
	 */







	$('#openClose').click(function(){


		if($('.visualWrap').hasClass("off")) {


			$('.visualWrap').removeClass('off');    		

			$('#openClose').removeClass('headOpen').addClass('headClose');

			$('#openClose').html('<a href="#NHLife">비쥬얼이미지와 콜센터 운영시간 화면 CLOSE</a>');

			$('#openClose a').focus();

		}
		else {

			$('#openClose').addClass('headOpen').removeClass('headClose');

			$('.visualWrap').addClass("off");

			$('#openClose').html('<a href="#NHLife">비쥬얼이미지와 콜센터 운영시간 화면 OPEN</a>');

			$('#openClose a').focus();}


		return false;


	});

	/* sidemenu 닫기&상세보기 버튼*/
	$('#nhlife_open').click(function(){
		
		if($("#nhlife_open_p").hasClass("close")) {
			
			$('#nhlife_open_span').html('사이드메뉴 닫기');
		}else {
			$('#nhlife_open_span').html('사이드메뉴 상세보기');
		};
	});
	



	/*금리인하권*/

	$('#btnClick .ok01').click(function(){

		$('#btnClick #calllayer03').toggleClass('hide2');

		$('#btnClick #calllayer04').addClass('hide2');

		return false;


	});



	$('#btnClick .ok02').click(function(){    	

		$('#btnClick #calllayer04').toggleClass('hide2');    	

		$('#btnClick #calllayer03').addClass('hide2');

		return false;


	});




	$('#btnClick #calllayer03 a, #btnClick #calllayer03 button').click(function(){

		$('#btnClick #calllayer03').addClass('hide2');

		$('#btnClick .ok01 button').focus();

		return false;


	});



	$('#btnClick #calllayer04 a, #calllayer04 button').click(function(){

		$('#btnClick #calllayer04').addClass('hide2');

		$('#btnClick .ok02 button').focus();

		return false;


	});








	/* footer TotalMenu */

	$('.fmnTotal dl dt a').click(function(){ 

		$('.fmnTotal dl dt').toggleClass('off');

		$('.fmnTotal dl dd').toggleClass('off');

		return false;

	});

	/* am branch */
	$('.ambranch li').click(function(obj){ 
		var tmpId = $(this).attr("class").split("_");
		var index = parseInt(tmpId[1]);
		if(index == 0 || index == 1 || index == 2 || index == 3) { //서울
			$('.ambranch_info dl').eq(0).addClass('on');
			$('.ambranch_info dl').eq(1).removeClass('on');
			$('.ambranch_info dl').eq(2).removeClass('on');
			$('.ambranch_info dl').eq(3).removeClass('on');
			$('.ambranch_info dl').eq(4).removeClass('on');
			$('.ambranch_info dl').eq(5).removeClass('on');
			$('.guide').addClass('hide');
		} else if(index == 4 || index == 5 || index == 6) { //대전
			$('.ambranch_info dl').eq(0).removeClass('on');
			$('.ambranch_info dl').eq(1).addClass('on');
			$('.ambranch_info dl').eq(2).removeClass('on');
			$('.ambranch_info dl').eq(3).removeClass('on');
			$('.ambranch_info dl').eq(4).removeClass('on');
			$('.ambranch_info dl').eq(5).removeClass('on');
			$('.guide').addClass('hide');
		} else if(index == 16 || index == 17 || index == 18 || index == 19 || index == 20 || index == 21) { //부산
			$('.ambranch_info dl').eq(0).removeClass('on');
			$('.ambranch_info dl').eq(1).removeClass('on');
			$('.ambranch_info dl').eq(2).addClass('on');
			$('.ambranch_info dl').eq(3).removeClass('on');
			$('.ambranch_info dl').eq(4).removeClass('on');
			$('.ambranch_info dl').eq(5).removeClass('on');
			$('.guide').addClass('hide');
		} else if(index == 12 || index == 13 || index == 14 || index == 15) { //대구
			$('.ambranch_info dl').eq(0).removeClass('on');
			$('.ambranch_info dl').eq(1).removeClass('on');
			$('.ambranch_info dl').eq(2).removeClass('on');
			$('.ambranch_info dl').eq(3).addClass('on');
			$('.ambranch_info dl').eq(4).removeClass('on');
			$('.ambranch_info dl').eq(5).removeClass('on');
			$('.guide').addClass('hide');
		} else if(index == 9 || index == 10 || index == 11 || index == 22) { //광주
			$('.ambranch_info dl').eq(0).removeClass('on');
			$('.ambranch_info dl').eq(1).removeClass('on');
			$('.ambranch_info dl').eq(2).removeClass('on');
			$('.ambranch_info dl').eq(3).removeClass('on');
			$('.ambranch_info dl').eq(4).addClass('on');
			$('.ambranch_info dl').eq(5).removeClass('on');
			$('.guide').addClass('hide');
		} else if(index == 7 || index == 8) { //전주
			$('.ambranch_info dl').eq(0).removeClass('on');
			$('.ambranch_info dl').eq(1).removeClass('on');
			$('.ambranch_info dl').eq(2).removeClass('on');
			$('.ambranch_info dl').eq(3).removeClass('on');
			$('.ambranch_info dl').eq(4).removeClass('on');
			$('.ambranch_info dl').eq(5).addClass('on');
			$('.guide').addClass('hide');
		}
		return false;
	});



});


/*mainContent layer popup*/
$(document).ready(function(){

	$("#hide").click(function(){
		$("div.mainLayerPopup").hide();
	});
});

