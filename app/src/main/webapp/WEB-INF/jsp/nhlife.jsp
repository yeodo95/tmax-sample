<%@page import="ch.qos.logback.core.net.SyslogOutputStream"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.net.InetAddress" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.util.Properties,java.util.*"%>
<%@ page import="java.util.List" %>
<!DOCTYPE html>
<html lang="ko">


<% 
  System.out.println("============================================================");
%>   

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Script-Type" content="text/javascript" />
<meta http-equiv="Content-Style-Type" content="text/css" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache" />
<meta name="author" content="NH농협생명" />
<meta name="Keywords" content="NH농협생명, 보험, 고객사랑 1등 보험사, my농협생명, 보험, 대출, 고객센터, 공시실, 라이프서비스, 온라인보험, 회사소개, 금융소비자보호, 농협보험수련원" />
<meta name="description" content="행복을 꽃피우는 고객사랑, 1등 생명보험사" />
<meta name="copyright" content="(03739) 서울특별시 서대문구 통일로 87 농협생명보험주식회사" />
<meta name="format-detection" content="telephone=no" />
<meta name="naver-site-verification" content="ecbeff89f527802db6e5315e0d9463e07ba12d25" />

<title>NH농협생명</title>
<link rel="icon" type="image/x-icon" href="/images/mweb/favicon.ico" />
<link rel="shortcut icon" type="image/x-icon" href="/images/mweb/favicon.ico" />
<link rel="apple-touch-icon" href="/images/mweb/favicon_iphone.png" />
<link rel="apple-touch-icon" href="/images/mweb/favicon_ipad_72x72.png" />
<link rel="apple-touch-icon" href="/images/mweb/favicon_iphone4_114x114.png" />
<link rel="stylesheet" type="text/css" href="./css/base.css?ver=20221114105304" media="all" />
<link rel="stylesheet" type="text/css" href="./css/common.css?ver=20221114105304" media="all" />
<link rel="stylesheet" type="text/css" href="./css/contents.css?ver=20221114105304" media="all" />
<link rel="stylesheet" type="text/css" href="./css/mainCnts.css?ver=20221114105304" media="all" />
<link rel="stylesheet" type="text/css" href="./css/submainCnts.css?ver=20221114105304" media="all" />
<link rel="stylesheet" type="text/css" href="./css/branch.css?ver=20221114105304" media="all" />

<script type="text/javascript" src="./script/jquery-1.9.1.js"></script>
<script type="text/javascript" src="./script/jquery-ui-1.10.0.custom.js"></script>
<script type="text/javascript" src="./script/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="./script/jquery.form.js"></script>
<script type="text/javascript" src="./script/common.js?ver=20201230"></script>
<script type="text/javascript" src="./script/publish.js"></script>
<script type="text/javascript" src="./validator.nhl"></script>

<!--  네이버연관채널 검색 START-->
<script type=application/id+json>
{
	"@context":"http://schema.org",
    "@type":"Organization",
    "name":"NongHyup Life Insurance",
    "url":"https://www.nhlife.co.kr",
    "sameAs":[
		"https://blog.naver.com/nhlife_pr",
		"https://play.google.com/store/apps/details?id=com.nhlife.customer.mobile",
		"https://www.youtube.com/channel/UCS8gDzKEBFOaBpVCpbxOcpQ",
		"https://m.facebook.com/nhlife.official/",
		"https://www.instagram.com/nhlife.official/",
        "https://itunes.apple.com/kr/app/id731207448"
        ]
}
</script>
<!--  네이버연관채널 검색 END-->

</head>

<body>
<dl id="skipNav">
	<dt><strong class="hide">바로가기 메뉴</strong></dt>
	<dd><a href="#container" class="accessibility01">본문 바로가기</a></dd>
	<dd><a href="#gnbNavi" class="accessibility02">주메뉴 바로가기</a></dd>
</dl>

<div id="wrap">

	<!--레이어팝업-->
	
		
	
		
	
	<!-- <div id="mainlayer">
		<div class="mainBanner" style="height:0">
			<ul>
			<li><a href="/ho/ci/HOCI0008M00.nhl?bulthId=1379">『 금융주소 한번에 서비스』 가 <span> '20년 8월 3일(월)부터 종료됩니다.</span></a></li>
			</ul>
			<p id="mainclose"><a href="#nhlife">닫기</a></p>
		</div>
	</div> -->

	<!--//레이어팝업-->
	











<!--
<script type="text/javascript" src="./script/jquery.cycle.all.min.js"></script>
<script type="text/javascript" src="./script/efusioni.js"></script>

<link href="./sol/Chatbot/assets/css/chatbot.css" rel="stylesheet" type="text/css" /> 
<script src="/sol/Ahnlab/AOS2/astx2/astx2.min.js?r=13284"></script>
<script src="/sol/Ahnlab/AOS2/astx2/astx2_custom.js"></script>
<script type="text/javascript" src="/script/keyControl.js"></script> 
<script type="text/javascript" src="/script/cyberCommon.js"></script>
-->



<script>
var nowd = 20221114105304;
var bypass = "null";
var pinAuthYn = "null";

var mobileGbn = "null";
var sessionTime=null;
var currentTime=1668390784856;
var sessionGbn = "null";
var amtChk="";
var second=currentTime-sessionTime;
var maxTime=10 * 60  * 1000; //기존 20분에서 10분 변경처리
var timeopenchk=true;
compareTime=maxTime-second;
var searchCnt = 10;
var clickChk = false;
if(bypass != "1"){
	
	if(nowd >= 20210211020000 && nowd <= 20210214060000){				// 운영 2021년 2월 11일(목) 02시 ~ 02월 15일(월) 06시
		location.href="https://www.nhlife.co.kr/nhNotice.jsp";						// 운영 
	}
}


if(typeof String.prototype.trim !== 'function'){
	String.prototype.trim = function(){
		return this.replace(/(^\s*)|(\s*$)/gi, '');
	};
}

window.dataLayer = window.dataLayer || [];

function gtag(){dataLayer.push(arguments);}

/* $(function(){
	gtag('js', new Date());
 	gtag('config', 'UA-123139270-2',{ //운영
		"page_title" : $(".header h2").length > 0 ? $(".header h2").text() : document.title,
		"page_location" : document.location.href.split("?")[0],
		"page_path" : document.location.pathname
	});
}); */
</script>
<!-- 챗봇 -->
<script>
	function init(){
		start();
	}

	/* window.addEventListener('message',function(event){
		console.log('post message received :',event.data);
		var data = event.data;
		try {
			data = JSON.parse(data);
		} catch(e){
		
		}
		
		if(data.action=='CHAT_INIT'){
			succLogin();
		}
		
		if (data.action=='CHAT_ACTION' && data.data.type == 'link') {
			console.log('CHAT_ACTION :',data.data.type);
		} else if(data.action=='CHAT_ACTION' && data.data.type == 'url') {
			console.log('CHAT_ACTION :',data.data.type);
		} else if(data.action=='CHAT_ACTION' && data.data.type == 'login') {
			console.log('CHAT_ACTION :',data.data.type);
		}
      	}); */

	function succLogin() {
	    var skey = "2015101284";
	    $('.chatbot-box iframe')[0].contentWindow.postMessage({action:'MSG_STATE',data:{global:{sessionKey:skey}}}, "https://chatbot.xxx.co.kr");
	}
	function succLogout() {
	$('.chatbot-box iframe')[0].contentWindow.postMessage({action:'MSG_STATE',data:{global:{sessionKey:null}}}, "https://chatbot.xxx.co.kr");
	}
	
</script>

<!--  네이버연관채널 검색 START-->
<script type=application/id+json>
{
	"@context":"http://schema.org",
    "@type":"Organization",
    "name":"NongHyup Life Insurance",
    "url":"https://www.nhlife.co.kr",
    "sameAs":[
		"https://blog.naver.com/nhlife_pr",
		"https://play.google.com/store/apps/details?id=com.nhlife.customer.mobile",
		"https://youtube.com/channel/nonghyuplife",
		"https://www.facebook.com/nhlife.official",
		"https://www.instagram.com/nhlife.official",
        "https://itunes.apple.com/kr/app/id731207448"
        ]
}
</script>
<!--  네이버연관채널 검색 END-->
<script type="text/javascript">

doDwldSvltExp(); // M사이트 예외처리

$(function(){			
	nhlifesideScroll(); //'위로가기' 버튼 		
});
 var alertChk;
$(document).ready(function(){
	
	

	
	
	
	
	if(nowd >= 20210423200000 && nowd <= 20210425120000){
		if(bypass != "1"){
			workingChk(); //시스템점검 처리
		}
	};
	
	$('.chatBot').click(start); // 7월 29일 반영
	$('#koribot').click(start); // 7월 29일 반영
// 	var uri = ["HOCC0062M00.nhl","HOIG0015M00.nhl","HOON0046M01.nhl","HOON0046M00.nhl"]; // 기존 예외처리되던부분
	var filter="win16|win32|win64|mac|macintel";
	var uri = ["HOLC0002M00.nhl","HOLC0002M02.nhl"];
	var filterUri = 
							[
							 "HOLC0002M00.nhl",  // 개인로그인
							 "HOLC0002M02.nhl",  // 기업로그인
							 "HOCC0033M00.nhl", // 휴면보험금 조회
							 "HOLG0017M01.nhl", // 직장인보험고객 신용대출
							 "HOLG0016M01.nhl", // 보험고객 신용대출
							 "HOCC0062M00.nhl", // 보안서비스 필수설치프로그램
							 "HOLC0006M00.nhl",  // 공동인증서 등록
							 "HOLC0006M02.nhl",  // 공동인증서 등록취소
							 "HOCC0045M00.nhl"   // 모바일 공동인증서
							 ]; // 해당 주소 모바일 이용고객 ALERT
	var openuri=window.document.URL;
	var urichk;
	var checkGbn = false;
	
	if(filter.indexOf(navigator.platform.toLowerCase())<0){
		
		jQuery(".footWrap .callnqr").css({'right': '50px'}); // 모바일일때만
		
		var filterGbn = false;
		for(var i=0; i< filterUri.length;i++){
			urichk=openuri.indexOf(filterUri[i]);
			if(urichk > 0){
				filterGbn = true;
				break;
			};
		}
		if(filterGbn){
			alert("모바일 환경에서 인증서가 필요한 일부기능이 제한됩니다\n대표홈페이지 PC 접속 또는 모바일앱을 이용하시기 바랍니다");
			location.href="/main.nhl";
			alertChk = "Y";
			return ;
		};
	}
	
	for(var i=0; i< uri.length;i++){
		urichk=openuri.indexOf(uri[i]);
		if(urichk > 0){
			checkGbn = true;
			break;
		};
	}
	
	if(checkGbn){
         		 doATX2CheckRun();       //운영
	};
	
	
		
	setTimeout(function(){
		$(".btn_open a").trigger("click");
	},1900);
	
	
	/*	메뉴검색*/
	srchKywNm = $("input[name=srchKywNm]");
	
	srchKywNm.keyup(function(e) {
		if(e.keyCode == 13) {
			$("#menuUrl").html("");
			searchWrd();
			return false;
		}
	});
	
	$("#menuSearch").keyup(function(){
		if($(this).val() == ""){$("#menuUrl").addClass("hide2").html(""); searchCnt = 10;$(".moreB").addClass("hide2");clickChk = false; return false;}
		console.log("keyWord="+hanDiv($(this).val())+"&hanWord="+$(this).val().replace(/\s/gi, ""));
		$.ajax({
			dataType: "json"
			, type: "POST"
			, url: "/ho/zz/HOZZ0100M00.nhl"
			, data: "keyWord="+hanDiv($(this).val())+"&hanWord="+$(this).val().replace(/\s/gi, "")
			, beforeSerialize: function(){
				
			}
			, beforeSend: function(){
				$("#menuUrl").html("");
			}
			, success: function(result){
				
				rtnData = result.rtnList;
				
				var resultMap = Object.keys(rtnData).map(function(key){
						console.log("[key] : " + key + " / " + "rtnData[key] : " +rtnData[key]);
						return [key, rtnData[key]];
					});
				if(resultMap.length == 0){
					$("#menuUrl").append("검색결과가 없습니다.");
					return false;
				}

				var mnnm = "";
				var urlnm = "";
				for(var i=0; i < resultMap.length; i++){
					var mnnm = "";
					var urlnm = "";
					var mnnmTm = "";
					var mnnmSm = "";
					for(var j=0; j < resultMap[i].length; j++){
						if(j != 0){
							for(var k=0; k < resultMap[i][j].length; k++){
								//0 : 메뉴명
								//1: 주소
								//2 : 최상단 메뉴
								//3 : 상위메뉴
								//4 : 설명
							
								if(k == 0){
									mnnm = resultMap[i][j][k];
								}else 	if(k == 1){
									urlnm = resultMap[i][j][k];
								}else 	if(k == 2){
									mnnmTm = resultMap[i][j][k];
								}else 	if(k == 3){
									mnnmSm = resultMap[i][j][k];
								}else 	if(k == 4){
									
								}
							}
							
						}
					}
					if(mnnmSm == null){
						continue;
					};
					if(i >0) $("#menuUrl").removeClass("hide2");
					
					var mnPath;
					if(mnnmTm == null && mnnmSm == null){
						mnPath =  mnnm;
					}else if(mnnmTm == null){
						mnPath =  mnnmSm+">"+ mnnm;
					}else{
						mnPath =  mnnmTm+"&gt;"+mnnmSm+"&gt;"+ mnnm;
					}
					
					$("#menuUrl").append("<li><a class=\"highlightArea\" href=\""+urlnm+"\">"+mnnm+"</a>" + "<span class=\"result\">[" + mnPath + "]</span></li>");
					if($("#menuUrl > a").size() == searchCnt) break;
				}
				
		        highlightAreaClass = "highlightArea";
		        text = $("#menuSearch").val();
				$("." + highlightAreaClass).each(function (idx, elem) {
			        elem = $(elem);
			        var innerHTML = elem.html();
			        var index = innerHTML.indexOf(text);
			        if (index >= 0) {
			            innerHTML = innerHTML.substring(0, index) +
			                "<span class='fwBold point_blue'>" + innerHTML.substring(index, index + text.length) + "</span>" +
			                innerHTML.substring(index + text.length);
			            elem.html(innerHTML);
			        }
			    });
			}
			, error: function(request, status, error){

			}
			, complete: function(xhr){
				
			}
		});
		
	});
	
	//메뉴검색 show/hide
	$("#mnuSearchBtn").click(function(){
		if($(".searchZone").hasClass("hide2")){
			$(".searchZone").removeClass("hide2");
		}else{
			$(".searchZone").addClass("hide2");
		}
	})
	
	//메뉴검색 show/hide 키보드 제어
	$("#mnuSearchBtn").keydown(function(){
		if($(".searchZone").hasClass("hide2")){
			$(".searchZone").removeClass("hide2");
		}else{
			$(".searchZone").addClass("hide2");
		}
	})
	
	$(".searchClose").click(function(){
		if($(".searchZone").hasClass("hide2") == true){
			$(".searchZone").removeClass("hide2");
		}else{
			$(".searchZone").addClass("hide2");
			$("#menuSearch").val("");
			$("#menuUrl").html("");
		}
	})
		
	
	//GNB제어
	$("#gnbNavi>li").on('mouseout focusout',function(){
		$("#gnbNavi>li").removeClass("current");
		$("#gnbNavi>li>div>ul").addClass("hide");
		$("#gnbNavi>li>div").removeClass("active");
		$(".navBg").removeClass("on");
		menuOn();
	});
	
	$("#gnbNavi>li").on('mouseover focusin',function(){
		$("#gnbNavi>li").removeClass("current");
		$(this).addClass("current");
		$(".navBg").addClass("on");
		$("#gnbNavi>li>div").eq($(this).index()).addClass("active");
		$("#gnbNavi>li>a").eq($(this).index()).addClass("on");
		$("#gnbNavi>li>div>ul").eq($(this).index()).removeClass("hide");
	});
	
	
	<!-- 선택메뉴 ON처리 -->
	menuOn();
	
	
	
});
function menuOn(){
	var openuri=document.location.pathname;
	if(openuri.indexOf("cd") > -1){ //My농협새명
		$("#gnbNavi > li").eq(0).addClass("current");	
	}else if(openuri.indexOf("ig") > -1){ //보험상품안내
		$("#gnbNavi > li").eq(2).addClass("current");
	}else if(openuri.indexOf("lg") > -1){ //대출상품안내
		$("#gnbNavi > li").eq(3).addClass("current");
	}else if(openuri.indexOf("cc") > -1){ //고객센터
		$("#gnbNavi > li").eq(4).addClass("current");
	/* }else if(openuri.indexOf("on") > -1){ //공시실
		$("#gnbNavi > li").eq(4).addClass("current"); */
	}else if(openuri.indexOf("hn") > -1){ //라이프서비스
		$("#gnbNavi > li").eq(5).addClass("current");
	}
}


function doATX2CheckRun(){
	$ASTX2.init(
		function onSuccess(){$_astxu.log('ASTX.init() success');},
		function onFailure(){
			var errno = $ASTX2.getLastError();
			$_astxu.log('ASTX.init() failure: errno='+errno);
			location.href="/ho/cc/HOCC0062M00.nhl?P_name=ASTx";
		}
	);
}

//미지급 보험금 내역조회
function accountsPayableChk(){
	window.open('/ho/cd/HOCD0000P00.nhl','미수령 일반보험금 안내','width=500, height=330, top=200px, left=300px');
}

var protc = window.location.protocol;

if (protc == "http:"){
	//location.href="https://www.nhlife.co.kr";//https포워딩
	//console.log("이거타나.........................................................")
}


function brofFnd(){
	var url = "/ho/cc/HOCC0034P00.nhl";
	var name = "brof";
	var opt = "statusbar=no, scrollbars=no, width=976px, height=620px";

	popupGet(url, name, opt);
}

function popHappyNumClc(url){
	var name = "happyNumClc";
	var w = 977;
	var h = 690;
	var left = (screen.width - w) / 2;
	var opt = "statusbar=no, scrollbars=no, width=" + w + "px, height=" + h + "px, top=0, left=" + left;
	
	popupGet(url, name, opt, true);
}

function popFncClc(url){
	var name = "fncClc";
	var opt = "statusbar=no, scrollbars=no, width=785px, height=606px";
	
	popupGet(url, name, opt);
}

function brofFndFc(){
	var url = "/ho/cc/HOCC0034P00.nhl?brofDcd=DS0002";
	var name = "brof";
	var opt = "statusbar=no, scrollbars=no, width=976px, height=620px";
	
	popupGet(url, name, opt);
}

function doGnntf(goUrl){
	var url = goUrl;
	var name = "gnntfInsRsk";
	var h = screen.height - 163;
	if(h < 605) h = 605;
	var opt = "statusbar=no, scrollbars=yes, width=820px, height=686px";
	
	popupGet(url, name, opt);
}

function cyberChkNgo(val){
	pageMove(val);
}

function cyberChkComp(val){
	location.href="/ho/lc/HOLC0002M03.nhl";
	pageMove(val);
}

function progressLink(val){
	pageMove(val);
	progressStatus();
}

function progressStatus(){
	var win=$(window);
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();
	
	if(maskHeight>$(window).height()){
		maskHeight=$(window).height();
	}

	$(".mask").css({"width":  $(document).width(), "height": $(document).height(),"background-color": "#FFF"});
	$(".mask").fadeTo("fast",0.8);

	var leftPostion = (maskWidth - $("#process").width()) / 2;
	var topPosition = win.scrollTop() + (maskHeight - $("#process").height()) / 2;

	$("#process").css({"left":leftPostion + "px", "top":topPosition + "px"});
	$("#process").fadeIn(100);
	$("#process").show();
}

function progressStatusClose(){
	$(".mask").hide();
	$("#process").hide();
}

function goOnLineInsChk(prodCd, cdId){
		goOnLineIns(prodCd, cdId);
}

//TOP 버튼, 하단 			
function nhlifesideScroll(){
	var jObj = $("#nhlifeAside");
	if(jObj.length == 0){
		return;
	}
			
	var topObj = jObj.find("> p.btnTop");		
	topObj.find('> a').click(function (){	
		$('body, html').animate({ scrollTop: 0 }, 800);	
		return false;
	});
	$(window).scroll(function (){
		if($(this).scrollTop() > 100){
			topObj.fadeIn();
		}else{
			topObj.fadeOut();
		}
	});
}

function loginTimeCheck(){
	var strmm=Math.floor(compareTime/(60 * 1000));
	var strss=Math.floor((compareTime%(60 * 1000))/1000);
	
	if((compareTime<(60 *1000)) && getCookie("loginTimeChk")==false){
		loginProcess();
	}
	if((compareTime<1000)){
		setCyberCookie("loginTimeChk","Y",-1);
		location.href="/ho/lc/HOLC0002M03.nhl";
	}
	$("#remainTime").html("<span class='time'>"+strmm+"분 " + strss+"초</span><span class='loginbutton'><a href='#NHLife' onclick='loginTimePlus();'>연장</a></span>");
	compareTime=compareTime-1000;
	setTimeout("loginTimeCheck()",1000); //1000
}

function loginTimePlus(){
	$.ajax({
		dataType: "json"
		, type: "POST"
		, url: "/ho/lc/HOLC1001M04.nhl"
		, success: function(data){
			setCyberCookie("loginTimeChk","Y",-1);
			loginProcessClose();
			compareTime = 60 * 10 * 1000;
		}
		, error: function(request, status, error){
			alert("로그인 연장중 오류가 발생하였습니다. 다시시도해 주시기 바랍니다.");
		}
		, complete: function(xhr){
		}
	});
}

function loginChk(strChk){
	if(strChk=="1"){//연장
		setCyberCookie("loginTimeChk","Y",-1);
		loginTimePlus();
	}else if(strChk=="2"){ //로그아웃
		loginProcessClose();
		setCyberCookie("loginTimeChk","Y",-1);
		location.href="/ho/lc/HOLC0002M03.nhl";
	}else if(strChk=="3"){
		loginProcessClose();
		setCyberCookie("loginTimeChk","Y",compareTime);
	}
}

function setCyberCookie(name, value, expiredays){
	var todayDate = new Date();
	todayDate.setTime(todayDate.getTime() + expiredays);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

function notice_getCookie(name){
	var nameOfCookie = name + "="; 
	var x = 0; 

	while(x <= document.cookie.length){ 
	    var y =(x+nameOfCookie.length); 
	
	    if(document.cookie.substring(x, y) == nameOfCookie){ 
            if((endOfCookie=document.cookie.indexOf(";", y)) == -1) 
            	endOfCookie = document.cookie.length; 
            return unescape(document.cookie.substring(y, endOfCookie)); 
	    }
	    x = document.cookie.indexOf(" ", x) + 1; 
	    if(x == 0) 
       	break; 
	}
	return ""; 
}

function searchAdd(){
	searchCnt = 10;
	$("#menuSearch").keyup();
	clickChk = true;
	$(".moreB").addClass("hide2");
}

function hanDiv(han) {
	var cCho = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ',
			'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ];
	var cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ',
			'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ];
	var cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ',
			'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ',
			'ㅌ', 'ㅍ', 'ㅎ' ], cho, jung, jong;
	var str = han;
	var rtnStr = "";
	var cnt = str.length;
	var chars = [];
	var cCode;
	for ( var i = 0; i < cnt; i++) {
		cCode = str.charCodeAt(i);
		if (cCode == 32) {
			continue;
		} // 한글이 아닌 경우
		if (cCode < 0xAC00 || cCode > 0xD7A3) {
			chars.push(str.charAt(i));
			continue;
		}
		cCode = str.charCodeAt(i) - 0xAC00;
		jong = cCode % 28; // 종성
		jung = ((cCode - jong) / 28) % 21 // 중성
		cho = (((cCode - jong) / 28) - jung) / 21 // 초성
		chars.push(cCho[cho], cJung[jung]);
		if (cJong[jong] !== '') {
			chars.push(cJong[jong]);
		}
	}
 
	for ( var i = 0; i < chars.length; i++) {
		rtnStr =  rtnStr + chars[i];
	}

	return rtnStr;	

}

function workingChk(){
	
	var openuri=window.document.URL;
	var filterUri = 
		[
		 "HOLG0017",  	//직장인보험고객 신용대출
 		 "HOCD0035",	//해지
 		 "HOCD0033"		//만기
		 ];
	
	for(var i=0; i< filterUri.length;i++){
		if(openuri.indexOf(filterUri[i]) > -1){
			alert("서비스 점검중입니다.\n점검 기간 : 2021년 04월 23일(금) 20:00 ~ 25일(일) 12:00\n이용에 불편을 드려 죄송합니다.");
			location.href="/main.nhl";
		};
	}
}

function doDwldSvltExp(){ //모바일접속 예외처리
	var filter="win16|win32|win64|mac|macintel";
	var uri = ["/ho/zz/FileDwld","HOIG0015M00.nhl","HOON0046M01.nhl","HOON0046M00.nhl","HOZZ0024P00.nhl","HOOC","HOCI","HOHN0005","HOON0004M00","HOCI0008M00","HOIG0200M00.nhl"];
	var openuri = window.document.URL;
	var urichk;
	
	if(mobileGbn == "1"){ //bypass  
		   // 패스 
		}else if (filter.indexOf(navigator.platform.toLowerCase())<0){ //-1
				var moUrl = "https://m.nhlife.co.kr";
				
				if(openuri.indexOf("dev") > -1){
					moUrl = "https://devm.nhlife.co.kr:8408";
				}

	  			if(openuri.indexOf("HOIG0000M00") > -1){
	  				location.href= moUrl+"/mo/pr/10/00/MOPR1000M00"; //보험상품안내 
	  				return;
	  			}else if(openuri.indexOf("HOCC0000M00") > -1){
	  				location.href=moUrl+"/mo/cs/91/00/MOCS9100M00"; // 고객센터
	  				return;
	  			}else if(openuri.indexOf("HOHN0000M00") > -1){
	  				location.href=moUrl+"/mo/cs/81/80/MOCS8180M00"; // 플러스정보
	  				return;
	  			}else if(openuri.indexOf("HOCI0000M00") > -1){
	  				location.href=moUrl+"/mo/ci/11/10/MOCI1110M00"; // CEO인사말
	  				return;
	  			}

				var checkGbn = true;
				for(var i=0; i< uri.length;i++){
					urichk=openuri.indexOf(uri[i]);
					if(urichk > 0){
						checkGbn = false;
						break;
					};
				}
				if(checkGbn){ //그 외 접근 모바일로 포워딩
					location.href=moUrl; // 운영
//	 				location.href="https://m.nhlife.co.kr"; // 운영
				};
		}else if (mobileGbn == "null") {
		    // 패스 
		};
}

function searchZoneSH(){
	if($(".searchZone").hasClass("hide2")){
		console.log("searchZone : " + $(".searchZone").hasClass("hide2"));
		$(".searchZone").removeClass("hide2");
	}else{
		console.log("searchZone : " + $(".searchZone").hasClass("hide2"));
		$(".searchZone").addClass("hide2");
	}
}

function fn_main_headPageAction(bbsTyCode, url){
	document.selectOne.bbsTyCode.value=bbsTyCode;
	
	var hostname = document.location.hostname;
	
	if(hostname.indexOf("dev.") > -1){
		goUrl = "https://dev.tc.nhlife.co.kr:8703";
	}else{
		goUrl = "https://tc.nhlife.co.kr";
	}

	var openNewWindow = window.open("about:blank");
	openNewWindow.location.href = goUrl+ url + "?bbsTyCode="+bbsTyCode;
    
}
		
	


</script>
<!--
<script src="/sol/Chatbot/assets/js/chatbot.js"></script>  챗봇  -->
<div class="hide2">
<a href="/ho/cc/HOCC0034P00.nhl" title="새창열림, 영업점 찾기">영업점 찾기</a>
<a href="/ho/ig/HOIG0000M00.nhl" title="보험상품안내">보험상품안내</a>
<a href="/ho/hn/HOHN0000M00.nhl" title="라이프서비스">라이프서비스</a>
<a href="/ho/cc/HOCC0000M00.nhl"  title="고객센터">고객센터</a>
<a href="/ho/ig/HOIG0200M00.nhl"  title="상품가입">상품가입</a>
</div>
<div id="header">
	<div class="headWrap">
		<h1 class="logo"><a href="#nhlife" onclick="cyberChkNgo('/')">NH농협생명<img src='./images/header/h1_logo.gif' alt='nh농협생명CI'/></a></h1>
		
		<div class="lnbWrap">
			<dl class="lnb">
			<dt>유틸메뉴</dt>
		
			
			
				
				
				
				<dd class="sta4"><span><a href="/ho/lc/HOLC0002M00.nhl" rel="nosublink">로그인</a></span></dd>
			
<%  
InetAddress inet= InetAddress.getLocalHost(); 
	SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:sss"); //날자 포맷
    String current_date = sdf.format(new Date());
%>   

               <dd class="sta61"><span>Time: <%=current_date%></span></dd>
				<dd class="sta61"><span>IP: <%=inet.getHostAddress()%></span></dd>
				<dd class="sta61"><span>Name: <%=inet.getHostName()%></span></dd>
	
			</dl>

		</div>


		<div class="nav" id="mainNav">
			<h2 class="hide" id="gnbMenu" rel="nosublink">메인메뉴</h2>
			<ul id="gnbNavi" class="navBg">	
	
	
			<li class="mNavi01 cyber"><a href="/ho/cd/HOCD0000M00.nhl" rel="nosublink" name="alink0001">My농협생명</a>
			<div>
				<ul class="hide">
					<li><a href="/ho/cd/HOCD0002M00.nhl" rel="nosublink">보험계약조회</a>
						<ul>
						<li><a href="/ho/cd/HOCD0002M00.nhl" rel="nosublink">보험계약조회</a></li>
						<li><a href="/ho/cd/HOCD0073M00.nhl" rel="nosublink">연금예상액조회</a></li>
						<li><a href="/ho/cd/HOCD0010M00.nhl" rel="nosublink">일반보험금 지급내역 조회</a></li>
						<li><a href="/ho/cd/HOCD0014M00.nhl" rel="nosublink">저축성(연금저축)보험 조회</a></li>
						<li><a href="/ho/cd/HOCD0017M00.nhl" rel="nosublink">청약철회</a></li>
						</ul>
					</li>
					<li><a href="/ho/cd/HOCD0030M00.nhl"  rel="nosublink">보험료 납입</a>
						<ul>
						<li><a href="/ho/cd/HOCD0030M00.nhl" rel="nosublink">보험료 납입</a></li>
						<li><a href="/ho/cd/HOCD0031M00.nhl" rel="nosublink">보험료 추가납입</a></li>
						<li><a href="/ho/cd/HOCD0067M00.nhl" rel="nosublink">보험료 자유납입(유니버셜)</a></li>
						<li><a href="/ho/cd/HOCD0042M00.nhl" rel="nosublink">보험료 자동이체</a></li>
						<li><a href="/ho/cd/HOCD0080M00.nhl" rel="nosublink">보험료 자동대출납입</a></li>
						<li><a href="/ho/cd/HOCD0081M00.nhl" rel="nosublink">가상계좌 발급/조회</a></li>
						</ul>
					</li>
					<li><a href="/ho/cd/HOCD0033M00.nhl" rel="nosublink">일반보험금 신청</a>
						<ul>
						<li><a href="/ho/cd/HOCD0033M00.nhl" rel="nosublink">만기보험금 신청</a></li>
						<li><a href="/ho/cd/HOCD0034M00.nhl" rel="nosublink">중도(분할)보험금 신청</a></li>
						<li><a href="/ho/cd/HOCD0035M00.nhl" rel="nosublink">해지환급금 신청(보험해지)</a></li>
						<li><a href="/ho/cd/HOCD0038M00.nhl" rel="nosublink">휴면보험금 신청</a></li>
						<li><a href="/ho/cd/HOCD0036M00.nhl" rel="nosublink">배당금 신청</a></li>
						<li><a href="/ho/cd/HOCD0037M00.nhl" rel="nosublink">중도인출금 신청</a></li>
						<li><a href="/ho/cd/HOCD0055M00.nhl" rel="nosublink">연금 신청</a></li>
						<li><a href="/ho/cd/HOCD0032M00.nhl" rel="nosublink">자동송금 신청(해지)</a></li>
						<li><a href="/ho/cd/HOCD0088M00.nhl" rel="nosublink">종신연금 보증기간종료 자동송금</a></li>
						<li><a href="/ho/cd/HOCD0083M00.nhl" rel="nosublink">비대면 일반지급 거래한도 변경내역</a></li>
						<li><a href="/ho/cd/HOCD0084M00.nhl" rel="nosublink">미수령 일반보험금 조회</a></li>
						</ul>
					</li>
					<li><a href="/ho/cc/HOCC0042M00.nhl" rel="nosublink">사고보험금 청구 및 조회</a>
						<ul>
						<li><a href="/ho/cc/HOCC0042M00.nhl" rel="nosublink">사고보험금 청구</a></li>
						<li><a href="/ho/cc/HOCC0042M00.nhl" rel="nosublink">사고보험금 청구내역조회</a></li>
						<li><a href="/ho/cd/HOCD0079M00.nhl" rel="nosublink">분할보험금 조회 및 청구</a></li>
						</ul>
					</li>
					<li><a href="/ho/cd/HOCD0021M00.nhl" rel="nosublink">보험계약사항 변경</a> 
						<ul>
						<li><a href="/ho/cd/HOCD0021M00.nhl" rel="nosublink">보험기간 변경조회</a></li>
						<li><a href="/ho/cd/HOCD0021M04.nhl" rel="nosublink">납입기간 변경조회</a></li> 
						<li><a href="/ho/cd/HOCD0022M00.nhl" rel="nosublink">선택특약 해지</a></li>
						<li><a href="/ho/cd/HOCD0069M00.nhl" rel="nosublink">연금저축보험료 변경</a></li>
						<li><a href="/ho/cd/HOCD0072M00.nhl" rel="nosublink">연금개시연령 변경</a></li>
						<li><a href="/ho/cd/HOCD0078M00.nhl" rel="nosublink">연금종류 변경</a></li>
						<li><a href="/ho/cd/HOCD0085M00.nhl" rel="nosublink">수익자 변경</a></li>
						<li><a href="/ho/cd/HOCD0087M00.nhl" rel="nosublink">보험계약변경 취소</a></li>
						</ul>
					</li>
					<li class="firstli"><a href="/ho/cd/HOCD0044M00.nhl" rel="nosublink">증권/증명서 신청</a>
						<ul>
						<li><a href="/ho/cd/HOCD0044M00.nhl" rel="nosublink">보험증권 재발행</a></li>
						<li><a href="/ho/cd/HOCD0040M00.nhl" rel="nosublink">보험료 납입증명서</a></li>
						<li><a href="/ho/cd/HOCD0041M00.nhl" rel="nosublink">소득·세액공제용 납입증명서</a></li>
						<li><a href="/ho/cd/HOCD0086M00.nhl" rel="nosublink">금융소득 및 원천징수내역</a></li>
						<li><a href="/ho/cd/HOCD0061M00.nhl" rel="nosublink">부채증명원</a></li>
						<li><a href="/ho/cd/HOCD0062M00.nhl" rel="nosublink">원리금납입증명서</a></li>
						<li><a href="/ho/cd/HOCD0068M00.nhl" rel="nosublink">팩스발송 내역조회</a></li>
						</ul>
					</li>			
					<li><a href="/ho/cd/HOCD0043M00.nhl" rel="nosublink">고객정보</a>
						<ul>
						<li><a href="/ho/cd/HOCD0043M00.nhl" rel="nosublink">고객정보 조회 및 변경</a></li>
						<li><a href="/ho/cd/HOCD0082M00.nhl" rel="nosublink">우수고객 등급조회</a></li>
						</ul>
					</li>
					<li><a href="/ho/cd/HOCD0070M00.nhl" rel="nosublink">대출서비스</a>
						<ul>
						<li><a href="/ho/cd/HOCD0070M00.nhl" rel="nosublink">보험계약대출 신청</a></li>
						<li><a href="/ho/cd/HOCD0027M00.nhl" rel="nosublink">신용대출 가능금액 조회</a></li>
						<li><a href="/ho/cd/HOCD0045M00.nhl" rel="nosublink">한도성 추가대출</a></li>
						<li><a href="/ho/cd/HOCD0028M00.nhl" rel="nosublink">대출내역조회/금리산정내역서</a></li>
						<li><a href="/ho/cd/HOCD0075M00.nhl" rel="nosublink">대출원리금 상환</a></li>
						<li><a href="/ho/cd/HOCD0052M00.nhl" rel="nosublink">대출기한연기 신청</a></li>
						<li><a href="/ho/cd/HOCD0054M00.nhl" rel="nosublink">금리인하요구 신청</a></li>
						<li><a href="/ho/cd/HOCD0059M00.nhl" rel="nosublink">대출자동이체계좌관리</a></li>
						<li><a href="/ho/cd/HOCD0053M00.nhl" rel="nosublink">대출계약철회 신청</a></li>
						<li><a href="/ho/cd/HOCD0077M00.nhl" rel="nosublink">CD/ATM 카드등록</a></li>
						<li><a href="/ho/cd/HOCD0057M00.nhl" rel="nosublink">개인신용평가 결과에 대한 대응권 신청</a></li>
						</ul>
					</li>
					<li><a href="/ho/cd/HOCD0051M00.nhl" rel="nosublink">스마트해피콜</a></li> 
					<li><a href="/ho/cd/HOCD0050M00.nhl" rel="nosublink">개인(신용)정보 이용·제공 조회</a> 
						<ul>
						<li><a href="/ho/cd/HOCD0050M00.nhl" rel="nosublink">마케팅목적 이용제공 조회/변경</a></li>
						<li><a href="/ho/cd/HOCD0058M00.nhl" rel="nosublink">NH농협금융 내 고객정보 제공내역</a></li>
						<li><a href="/ho/cd/HOCD0065M00.nhl" rel="nosublink">조회사항 개별통지 안내/신청</a></li>
						</ul>
					</li>
					</ul>
					</div>
			</li>
			
		
	
			<li class="mNavi07"><a href="#nhlife" onclick="goOnLineInsChk('/', 'B0001')" title="NH농협생명 온라인보험, 새 창에서 열기" name="alink0007">상품가입</a>
				<div>
				<ul class="hide">
					<li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0002M00.nhl', 'B0019')" title="NH농협생명 온라인보험 건강보험, 새 창에서 열기">건강보험</a>
						<ul>
							<li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0002M00.nhl', '')">모두의암보험</a>
							<!-- <li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0008M00.nhl', '')">쏙쏙골라암보험</a> -->
							<li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0007M00.nhl', '')">뇌심장튼튼건강보험</a>
							<!-- <li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0009M00.nhl', '')">아나파스면국민안심보험</a> -->
						</ul>
					</li>
					<li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0001M00.nhl', 'B0018')" title="NH농협생명 온라인보험 저축/연금보험, 새 창에서 열기">저축/연금보험</a>
						<ul>
							<li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0004M00.nhl', '')">부자습관저축보험</a>
							<li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0001M00.nhl', '')">세테크연금저축보험</a>
						</ul>
					</li>
					<li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0011M00.nhl', 'B0029')" title="NH농협생명 온라인보험 재해보험, 새 창에서 열기">재해보험</a>
						<ul>
							<li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0011M00.nhl', '')">올바른지구대중교통안전보험</a>
							<li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0006M00.nhl', '')">일년든든생활n레저보험</a>
						</ul>
					</li>
					<li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0010M00.nhl', 'B0129')" title="NH농협생명 온라인보험 보험선물, 새 창에서 열기">보험선물</a>
						<ul>
							<li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0010M00.nhl','')">효밍아웃부모님안전보험</a>
						</ul>
					</li>
					<li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0005M00.nhl', 'B0039')" title="NH농협생명 온라인보험 정책보험, 새 창에서 열기">정책보험</a>
						<ul>
							<li><a href="#nhlife" onclick="goOnLineInsChk('/ni/ig/NIIG0005M00.nhl', '')">농업인안전보험</a>
						</ul>
					</li>
					<li class="firstli"><a href="#nhlife" onclick="goOnLineInsChk('/ni/sa/NISA0001M01.nhl', 'B0041')" title="NH농협생명 온라인보험 my보험한눈에 새 창에서 열기">my보험한눈에</a></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				</div>
			</li>
			<li class="mNavi02 item"><a href="/ho/ig/HOIG0000M00.nhl" name="alink0002" title="보험상품안내">보험상품안내</a>
				<div>
					<ul class="hide">
						<li><a href="/ho/ig/HOIG0010M00.nhl?hmpgProdDcd=CTGR01" rel="nosublink">종신/정기보험</a>	</li>
						<li><a href="/ho/ig/HOIG0010M00.nhl?hmpgProdDcd=CTGR02" rel="nosublink">연금보험</a></li>
						<li><a href="/ho/ig/HOIG0010M00.nhl?hmpgProdDcd=CTGR03" rel="nosublink">저축보험</a></li>
						<li><a href="/ho/ig/HOIG0010M00.nhl?hmpgProdDcd=CTGR04" rel="nosublink">건강/재해보험</a></li>
						<li><a href="/ho/ig/HOIG0010M00.nhl?hmpgProdDcd=CTGR05" rel="nosublink">어린이보험</a></li>								
						<li class="firstli"><a href="/ho/ig/HOIG0010M00.nhl?hmpgProdDcd=CTGR06" rel="nosublink">농업인관련보험</a></li>
						<li><a href="/ho/ig/HOIG0010M00.nhl?hmpgProdDcd=CTGR14" rel="nosublink">온라인보험</a></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</li>
			<li class="mNavi03 loan"><a href="#nhlife" onclick="cyberChkNgo('/ho/lg/HOLG0000M00.nhl')" name="alink0003" title="대출상품안내">대출상품안내</a>
				<div>
					<ul class="hide">
						<li><a href="/ho/lg/HOLG0005M00.nhl" rel="nosublink">신용대출</a></li>
						<li><a href="/ho/lg/HOLG0019M00.nhl" rel="nosublink">부동산담보대출</a></li>
						<li><a href="/ho/lg/HOLG0002M00.nhl" rel="nosublink">보험계약대출</a></li>
						<li><a href="/ho/lg/HOLG0023M00.nhl" rel="nosublink">CD/ATM 카드등록</a></li>
						<li><a href="/ho/lg/HOLG0014M00.nhl" rel="nosublink">한도대출</a></li>
						<li class="firstli"><a href="/ho/lg/HOLG0017M00.nhl" rel="nosublink">인터넷/모바일대출</a></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</li>
			
			<li class="mNavi04"><a href="/ho/cc/HOCC0000M00.nhl" name="alink0004" title="고객센터">고객센터</a>
				<div>
				<ul class="hide">
					<li><a href="/ho/cc/HOCC0001M00.nhl" rel="nosublink">자주묻는질문</a></li>
					<li><a href="/ho/cc/HOCC0002M01.nhl" rel="nosublink">문의/상담접수</a>
						<ul>
						<li><a href="#nhlife" onclick="cyberChkNgo('/ho/cc/HOCC0002M01.nhl')">문의/상담접수</a></li>
						<li><a href="/ho/cc/HOCC0004M00.nhl" rel="nosublink">나의문의/상담내역</a></li>
						<li><a href="/ho/cc/HOCC0018M00.nhl" rel="nosublink">고객기상청(제안창구)</a></li>
						</ul>
					</li>
					<li><a href="/ho/cc/HOCC0020M00.nhl" rel="nosublink">보험가이드</a>
						<ul>
						<li><a href="/ho/cc/HOCC0020M00.nhl" rel="nosublink">보험상품가입</a></li>
						<li><a href="/ho/cc/HOCC0036M00.nhl" rel="nosublink">보험계약유지</a></li>
						<li><a href="/ho/cc/HOCC0039M00.nhl" rel="nosublink">일반보험금 신청</a></li>
						<li><a href="/ho/cc/HOCC0042M00.nhl" rel="nosublink">사고보험금청구</a></li>
						<li><a href="/ho/cc/HOCC0046M00.nhl" rel="nosublink">채권추심업무 안내</a></li>
						</ul>
					</li>
					<li><a href="/ho/cc/HOCC0028M00.nhl" rel="nosublink">보안센터</a>
						<ul>
						<li><a href="/ho/cc/HOCC0028M00.nhl" rel="nosublink">보안서비스</a></li>
						<li><a href="/ho/cc/HOCC0053M00.nhl" rel="nosublink">보안공지</a></li>
						</ul>
					</li>
					<li class="firstli"><a href="/ho/cc/HOCC0033M00.nhl" rel="nosublink">휴면보험금 조회</a></li>
					<li><a href="#NHLife" onclick="brofFnd();" title="새창열림, 영업점 찾기">영업점 찾기</a></li>
					
					<li><a href="/ho/cc/HOCC0067M00.nhl" rel="nosublink">홈페이지 이용안내</a>
						<ul>
						<li><a href="/ho/cc/HOCC0073M00.nhl" rel="nosublink">간편비밀번호(PIN) 안내</a></li>
						<li><a href="/ho/cc/HOCC0067M00.nhl" rel="nosublink">공동인증서 안내</a></li>
						<li><a href="/ho/cc/HOCC0074M00.nhl" rel="nosublink">휴대폰 본인확인 안내</a></li>
						<li><a href="/ho/cc/HOCC0068M00.nhl" rel="nosublink">홈페이지 이용시간 및 한도안내</a></li>
						<li><a href="/ho/cc/HOCC0070M00.nhl" rel="nosublink">홈페이지 자주묻는 질문</a></li>
						</ul>
					</li>
					<li><a href="/ho/cc/HOCC0071M00.nhl" rel="nosublink">모바일앱 이용안내</a>
						<ul>
						<li><a href="/ho/cc/HOCC0071M00.nhl" rel="nosublink">모바일앱 설치방법</a></li>
						<li><a href="/ho/cc/HOCC0066M00.nhl" rel="nosublink">모바일앱 이용시간 및 한도안내</a></li>
						</ul>
					</li>
					</ul>
				</div>
			</li>
			
			<!-- <li class="mNavi05 insure"><a href="#nhlife" onclick="cyberChkNgo('/ho/on/HOON0000M00.nhl')" name="alink0005" title="공시실">공시실</a>
				<div>
				<ul class="hide">
					<li><a href="/ho/on/HOON0001M00.nhl" rel="nosublink">경영공시</a>
						<ul>
						<li><a href="/ho/on/HOON0001M00.nhl" rel="nosublink">정기공시</a></li>
						<li><a href="/ho/on/HOON0002M00.nhl" rel="nosublink">수시공시</a></li>
						<li><a href="/ho/on/HOON0002M01.nhl" rel="nosublink">결산공고</a></li>
						</ul>
					</li>
					<li><a href="/ho/on/HOON0002M02.nhl" rel="nosublink">지배구조공시</a></li>
					<li><a href="/ho/on/HOON0003M00.nhl" rel="nosublink">상품공시</a>
						<ul>
						<li><a href="/ho/on/HOON0003M00.nhl" rel="nosublink">상품공시안내</a></li>
						<li><a href="/ho/on/HOON0004M00.nhl" rel="nosublink">전체상품공시</a></li>
						<li><a href="/ho/on/HOON0005M00.nhl" rel="nosublink">연금저축상품공시</a></li>
						<li><a href="/ho/on/HOON0019M00.nhl" rel="nosublink">방카슈랑스모집수수료율공시</a></li>
						<li><a href="/ho/on/HOON0022M00.nhl" rel="nosublink">계약자배당</a></li>
						<li><a href="/ho/on/HOON0038M00.nhl" rel="nosublink">적용이율안내</a></li>
						<li><a href="/ho/on/HOON0047M00.nhl" rel="nosublink">간병인 지원비용</a></li>
						<li><a href="/ho/on/HOON0045M00.nhl" rel="nosublink">직업분류및위험등급안내</a></li>
						</ul>
					</li>
					<li><a href="/ho/on/HOON0043M00.nhl" rel="nosublink">가격공시</a></li>
					<li><a href="/ho/on/HOON0036M00.nhl" rel="nosublink">보호금융상품등록부</a></li>
					</ul>
				</div>
			</li> -->
			
			<li class="mNavi06"><a href="/ho/hn/HOHN0000M00.nhl" name="alink0006" title="라이프서비스">라이프서비스</a>
				<div>
				<ul class="hide">
					<li><a href="/ho/hn/HOHN0005M00.nhl" rel="nosublink">우수고객서비스</a></li>
					<li><a href="/ho/hn/HOHN0004M00.nhl" rel="nosublink">건강케어서비스</a>
						<ul>
						<li><a href="/ho/hn/HOHN0009M00.nhl" rel="nosublink">NH헬스케어서비스</a></li>
						<li><a href="/ho/hn/HOHN0004M00.nhl" rel="nosublink">NH안심케어서비스</a></li>
						<li><a href="/ho/hn/HOHN0006M00.nhl" rel="nosublink">시니어안심헬스케어서비스</a></li>
						<li><a href="/ho/hn/HOHN0004M03.nhl" rel="nosublink">맘e든든케어서비스</a></li>
						<li><a href="/ho/hn/HOHN0004M06.nhl" rel="nosublink">마음든든케어서비스</a></li>	
						<li><a href="/ho/hn/HOHN0007M00.nhl" rel="nosublink">여성안심케어서비스</a></li>				
						</ul>
					</li>
					<li><a href="/ho/hn/HOHN0008M00.nhl" rel="nosublink">NH멤버스</a></li>
					<li><a href="/ho/hn/HOHN0104M00.nhl" rel="nosublink">보험용어사전</a></li>
					<li><a href="/ho/hn/HOHN0105M00.nhl" rel="nosublink">이벤트</a></li>
				</ul>
				</div>
			</li>
			
			
			
			</ul>
			<p class="mNavi08"><a href="#nhlife" onclick="cyberChkNgo('/ho/lc/HOLC0005M00.nhl')"  name="alink0008">사이트맵</a></p>			
		</div>
		<p class="mGif"><span class="hide2">움직이는 그림</span></p>
			<p class="searchIcon"><button type="button" id="mnuSearchBtn" onkeydown="searchZoneSH();">검색</button></p>
			<div class="hide2 searchZone">
				<div class="box_search">
					<p><input type="text" id="menuSearch" class="menuSearch" style="ime-mode:active;opacity: 0.8;" placeholder="메뉴 검색"  title="메뉴 검색"/><button id="button" class="btn_search">메뉴검색하기</button></p>
				</div>
				<ul id="menuUrl" class="hide2">
				</ul>
				<p class="searchClose"><a href="#nhlife">닫기</a></p>
		</div>
	</div>
</div>
	<div id="container" class="main">
			<p class="hide">여기서부터 컨텐츠가 시작됩니다.</p>
			












<script type="text/javascript" src="./script/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="./script/main_banner.js?var=20221114105304"></script> <!-- 롤링배너 제이쿼리 -->

<script type="text/javascript">
//<![CDATA[
function notice_getCookie(name){
	var nameOfCookie = name + "="; 
	var x = 0; 

	while(x <= document.cookie.length){ 
	    var y =(x+nameOfCookie.length); 
	
	    if(document.cookie.substring(x, y) == nameOfCookie){ 
            if((endOfCookie=document.cookie.indexOf(";", y)) == -1) 
            	endOfCookie = document.cookie.length; 
            return unescape(document.cookie.substring(y, endOfCookie)); 
	    }
	    x = document.cookie.indexOf(" ", x) + 1; 
	    if(x == 0) 
       	break; 
	}
	return ""; 
}
           
           
if(notice_getCookie("mainNavi") != "done"){
	$('#mainlayer').removeClass("hide2");
}
           
$(document).ready(function(){
	
	mainNotice(); //안내팝업

	var agent = navigator.userAgent.toLowerCase();
	if(agent.indexOf("firefox") != -1){
		alert("현 브라우저 속성 상 일부 서비스 이용이 제한됩니다.\n크롬 또는 인터넷익스플로러로 접속하시면 모든 서비스를 원활하게 이용하실 수 있습니다.");
	}else if(agent.indexOf("safafi") != -1){
		alert("현 브라우저 속성 상 일부 서비스 이용이 제한됩니다.\n크롬 또는 인터넷익스플로러로 접속하시면 모든 서비스를 원활하게 이용하실 수 있습니다.");
	}
	
	$(".indi > li").eq(0).addClass("on");
});

//영업점찾기
function brofFnd(){
	var url = "/ho/cc/HOCC0034P00.nhl";
	var name = "brof";
	var opt = "statusbar=no, scrollbars=no, width=976px, height=620px";
	
	popupGet(url, name, opt);
}

//보이스피핑사기주의 안내
function vocSagiGuidePop(){
	var url = "/ho/tp/HOTP0012P00.nhl";
	var name = "vocsagiguidePop";	
	var opt = "statusbar=no, scrollbars=no, width=740px, height=740px";
	
	popupGet(url, name, opt);
}

//공지사항
function viewOfancInfo(bulthId){
	$("input[name=bulthId]").val(bulthId);
	
	formSubmit("frm", "/ho/ci/HOCI0008M00.nhl");
}

//자주묻는질문
function viewFaqInfo(faqLccd, faqId){
	$("input[name=faqLccd]").val(faqLccd);
	$("input[name=faqId]").val(faqId);
	
	formSubmit("frm", "/ho/cc/HOCC0001M00.nhl");
}

//메인팝업 공지
function mainNotice(){
	notice_getCookie(mainNotice);
}

//이벤트 상세페이지 이동
function viewDetail(evntId){
	document.frm.evntId.value = evntId;
	document.frm.action = "/ho/hn/HOHN0105M01.nhl";
   	document.frm.submit();
}
//]]>

function notice_setCookie( name, value, expiredays ) {
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
} 

function notice_closeWin() {
	if ($("#cookieChk").is(":checked") )
	notice_setCookie( "mainNavi", "done" , 1); // 1=하룻동안 공지창 열지 않음 
	$('#mainlayer').slideUp(500);
} 

function navi_chk(){
	if ($("#cookieChk").is(":checked")){
		notice_closeWin();
	} else {
		$('#mainlayer').slideUp(500);
	} 
}

</script>

<form id="frm" name="frm" method="post" action="">
	<input type="hidden" name="bulthId"/>
	<input type="hidden" name="faqLccd"/>
	<input type="hidden" name="faqId"/>
	<input type="hidden" name="evntId"/>
	<input type="hidden" name="ctynm"/>
	<input type="hidden" name="ccwnm"/>
	<input type="hidden" name="stAge" value="0"/>

<div class="mdGoods">
	<div id="mdGoods">
	<h3 class="hide">NH농협생명 배너모음</h3>
<!-- 	<div id="mdGoods_list" style="position: relative;margin: 0 auto;width: 1000px;"> -->
	  <ul class="cnt">
		
	    
			
			<li style="z-index: 2">
				<a 
					
					
					
						target="_blank"
						href="https://www.nhelife.co.kr/ni/cc/NICC0001M02.nhl?evntId=EV202210281517320444"
						title="새창에서 열림, 온라인보험이벤트가기 "
					
					
					
					rel="nosublink"
				>
					<img alt="아래내용 참조" src="./images/contents/1000X320_11.png" data-color="#fdf4df" data-zindex="2"/>
				</a>
				<div class="hide">NH농협생명 가을맞이 이벤트 22.11.01~22.11.30 자세히보기
상품:농촌사랑상품권 or NH포인트 최대30,000원</div>
			</li>
			
		
		
	    
			
			<li style="z-index: 1">
				<a 
					
					
						href="/ho/ci/HOCI0008M00.nhl?bulthId=1770"
					
					
					
					
					rel="nosublink"
				>
					<img alt="아래내용 참조" src="./images/contents/banner_1000X320.jpg" data-color="#7a8fd9" data-zindex="1"/>
				</a>
				<div class="hide">당사 기존 실손가입자대상
계약체결일로부터 1년간 보험료 50%할인
4세대 실손보험 계약전환 할인혜택 제공안내 
22.01.01.~12.31. 자세히보기</div>
			</li>
			
		
		
	  </ul>
<!-- 	  </div> -->
	  <div class="indiArea">
		  <div class="auto">
		    <button type="button" id="playStopBtn" class="play" >stop</button>
		  </div>
	  </div>
	</div>
</div>

<div class="mainCnts">
	<div class="cntsLft">
		
		
		
		
	<div class="cyberBank">
		<h3 class="hide">편리한 빠른링크</h3>
		<ul>
		<li class="btn01"><a href="/ho/cd/HOCD0002M00.nhl" rel="nosublink">보험계약조회</a></li>
		<li class="btn02"><a href="/ho/cd/HOCD0030M00.nhl" rel="nosublink">보험료납입</a></li>
		<li class="btn03"><a href="/ho/cd/HOCD0070M00.nhl" rel="nosublink">보험계약대출 신청</a></li>
		<li class="btn04"><a href="/ho/cc/HOCC0042M00.nhl" rel="nosublink">사고보험금 청구</a></li>
		<li class="btn05"><a href="/ho/cd/HOCD0044M00.nhl" rel="nosublink">증권/증명서 신청</a></li>
		<li class="btn06"><a href="/ho/cd/HOCD0084M00.nhl" rel="nosublink">숨은보험금조회</a></li>
		<li class="btn07"><a href="/ho/on/HOON0004M00.nhl" rel="nosublink">약관찾기</a></li>
		<li class="btn08"><a href="#NHLife" onclick="brofFnd();" title="팝업으로 새창열기, 영업점 찾기안내 페이지 바로가기">영업점찾기</a></li>
		<li class="hide2"><a href="/ho/cc/HOCC0034P00.nhl" title="영업점 찾기안내" class="hide2">영업점찾기</a></li>
		</ul>
		</div>
	</div>
	
	<div class="cntsMid">
		<div class="newitemlist">
		
		
			
			<h3>농협홈페이지 시연을 시작하겠습니다.</h3>
			<!-- 
			<ul>
			<li class="i03"><a href="/ho/ig/HOIG0001M00.nhl?prodCd=N0000943" rel="nosublink"><span>종신/정기보험</span> <em>스마트페이NH종신보험</em>(해지환급금일부지급형,<br/>무배당)_2204 <span class="btn">자세히보기</span></a></li>
			<li class="i01"><a href="/ho/ig/HOIG0001M00.nhl?prodCd=N0000939" rel="nosublink"><span>종신/정기보험</span> <em>더좋아진NH종신보험</em>(무배당)_2204 <span class="btn">자세히보기</span></a></li>
			<li class="i02"><a href="/ho/ig/HOIG0001M00.nhl?prodCd=N0000885" rel="nosublink"><span>건강/재해보험</span> <em>새로나온NH암보험</em>(갱신형,비갱신형,무배당)_2104 <span class="btn">자세히보기</span></a></li>
			<li class="i04"><a href="#nhlife" onclick="goOnLineInsChk('N0000829', 'B0047')" title="NH농협생명 온라인보험, NH부자습관저축보험 새창에서 열기"><span>온라인보험</span> <em>NH부자습관저축보험</em>(Self가입형,갱신형,무배당) <span class="btn">자세히보기</span></a></li>
			</ul>
			
			<div class="btnArrow hide2">
				<button class="lftControl">다음 상품으로</button>
				<button class="rgtControl">이전 상품으로</button>
			</div>
			 -->
			 
			   <div class="tableAndPageNationWrapper">
			   
					   	<div class="flexColumnStyleWrapper">
		
		                                            <!-- 1테이블 -->
		                             				  <div class="flexColumnStyle">
		          									
			                                            <div style="cursor:pointer;"><font size="4">DB Result1</font></div>
			                              
		                                                <!-- 1행 -->
		                                               <div  class="flexRowStyle headerStyle">
		                                                  	<div class="flexWidthStyle ">
		                                                        입력일
		                                                    </div>
		                                                    <div class="flexWidthStyle ">
		                                                        거래유니크값
		                                                    </div>
		                                                    <div class="flexWidthStyle ">
		                                                        시도
		                                                    </div>
		                                                    <div class="flexWidthStyle ">
		                                                        구군
		                                                    </div>
		                                                    <div class="flexWidthStyle ">
		                                                        읍면
		                                                    </div>
		                                                    <div class="flexWidthStyle ">
		                                                        동
		                                                    </div>
		                                                </div> 
		                                                
		                                                <!-- 2행 -->
		                                                <%
		List zipcode_list = (List) request.getAttribute("zipcode");
		for (int i=0;i<zipcode_list.size();i++)
		{
			Map zip_data =(Map) zipcode_list.get(i);
		%>
		                                  	
			                                                <div  class="flexRowStyle">
			                                                    <div class="flexWidthStyle">
			                                                          <%=zip_data.get("INPT_DT")%>
			                                                    </div>
			                                                    <div class="flexWidthStyle">
			                                                          <%=zip_data.get("ID")%>
			                                                    </div>
			                                                    <div class="flexWidthStyle">
			                                                           <%=zip_data.get("SIDO")%>
			                                                    </div>
			                                                    <div class="flexWidthStyle">
			                                                            <%=zip_data.get("SIGUNGU")%>
			                                                    </div>
			                                                    <div class="flexWidthStyle">
			                                                            <%=zip_data.get("EUPMYUN")%>
			                                                    </div>
			                                                    <div class="flexWidthStyle">
			                                                            <%=zip_data.get("DORO")%>
			                                                    </div>
			                                                </div>
		<% 
		}
		%> 
				

											<div style="cursor:pointer;"><font size="4">DB Result2</font></div>
		                                        <div class="flexColumnStyle">
                                                <!-- 1행 -->
                                                 
                                                 
                                                <div  class="flexRowStyle headerStyle">
                                                    <div class="flexWidthStyle ">
                                                        거래유니크값
                                                    </div>
                                                    <div class="flexWidthStyle ">
                                                        입력시간
                                                    </div>
                                                 </div>
                                                 
                                                 <%
List insert_list = (List) request.getAttribute("insert_list");
for (int i=0;i<insert_list.size();i++)
{
	Map insert_data =(Map) insert_list.get(i);
%>                                              
                                                         
                                               
                                                <!-- 2행 -->
                                                <div  class="flexRowStyle">
                                                        <div class="flexWidthStyle">
                                                            <%=insert_data.get("id")%>
                                                        </div>
                                                        <div class="flexWidthStyle">
                                                            <%=insert_data.get("inpt_dt")%>
                                                        </div>
                                                        
                                                </div>
 <%
}
 %>    
						</div>
		</div>
				
				
				
				
		
		                </div>
		         </div>
				</div>
</form>

<script type="text/javascript">
var nowd = "20221114105304"; /*YYYYMMDDHHMMSS*/

/*  온라인보험 20.11.26 23시

	if(parseInt(nowd) < 20201106090000 || parseInt(nowd) > 20201126235900){
     	$(".banner_list li#panel4").remove();     
	} 
*/

// --> 
</script> 

	</div>
</div>
<hr/>














<script type="text/javascript">
var uri = window.location.pathname;
var nowd = "20221114105304";

$(document).ready(function(){
	if(uri == "/ho/ig/HOIG0000M00.nhl"){
		$("#footTotalMenuIg").show();
		$("#footTotalMenuCd").hide();
	}else if(uri == "/ho/cd/HOCD0000M00.nhl"){
		$("#footTotalMenuCd").show();
		$("#footTotalMenuIg").hide();
	}else{
		$("#footTotalMenuIg").hide();
		$("#footTotalMenuCd").hide();
	}
	
	$(".fmnTotal li dl dt").each(function(){
	    if($(this).hasClass('off')){
	        $(this).find('a').first().prop("title","목록닫힘");
	    }else{
	        $(this).find('a').first().prop("title","목록열림");
	        $('.submnList li a').removeAttr('title');
	    }
	});
	//온라인농(임)업인NH안전보험(무배당)
	$("#footTotalMenuIg").find("dl").eq(5).find("dd").children().last().append("<li><a href=\"#NHLife\" onclick=\"goOnLineIns('N1000847','B0038');\" id=\"N1000816\"><span>온라인농(임)업인NH안전보험(무배당)</span></a></li>");
	
	bottomMenuClick();

 	$(".nhlifeAside .loan").click(function(){
 		location.href = "/ho/cd/HOCD0070M00.nhl";	
 	});
 	
});

function bottomMenuClick(){
	$(".fmnTotal li dl dt a").click(function(){
		$(".fmnTotal li dl dt").each(function(){
		    if($(this).hasClass('off')){
		        $(this).find('a').first().prop("title","목록닫힘");
		    }else{
		        $(this).find('a').first().prop("title","목록열림");
		        $('.submnList li a').removeAttr('title');
		    }
		});
	});
}

function doGnntf(goUrl){
	var url = goUrl;
	var name = "gnntfInsRsk";
	var h = screen.height - 163;
	var opt = "statusbar=no, scrollbars=no, width=820px, height=745px";
	
	if(h < 605) h = 605;
	popupGet(url, name, opt);
}

function goPage(prodCd){
	location.href = "/ho/ig/HOIG0001M00.nhl?prodCd="+prodCd;
}

function cyberChkNgo(goUrl){
	location.href= goUrl;
}

/*메인상단배너_1905*/
$(function(){
	/* $('#mainclose').click(function(){
		$('#mainlayer').slideUp(500);
		return false;
	}); */
});



	


</script>

<!-- 하단전체메뉴 -->
<div id="footTotalMenuIg" class="footTotalMenu" style="display: none;">
	<div class="fmnTotalArea">
		<ul class="fmnTotal">
		
			
			
			
				<li>&nbsp;</li>
			
		</ul>
	</div>
</div>
<!-- //하단전체메뉴 -->

<!-- 하단전체메뉴 -->
<div id="footTotalMenuCd" class="footTotalMenu" style="display: none;">
	<div class="fmnTotalArea">
		<ul class="fmnTotal">
		<li>
			<dl>
			<dt class="mn1 off"><a href="#NHLife">보험계약조회</a></dt>
			<dd class="off">
				<ul class="submnList">
				<li><a href="/ho/cd/HOCD0002M00.nhl" rel="nosublink">보험계약조회</a></li>
				<li><a href="/ho/cd/HOCD0073M00.nhl" rel="nosublink">연금예상액조회</a></li>
				<li><a href="/ho/cd/HOCD0010M00.nhl" rel="nosublink">일반보험금 지급내역 조회</a></li>
				<li><a href="/ho/cd/HOCD0014M00.nhl" rel="nosublink">저축성(연금저축)보험 조회</a></li>
				<li><a href="/ho/cd/HOCD0017M00.nhl" rel="nosublink">청약철회</a></li>
				</ul>
			</dd>
			</dl>
		</li>
		<li>
			<dl>
			<dt class="mn2 off"><a href="#NHLife">보험료납입</a></dt>
			<dd class="off">
				<ul class="submnList">
				<li><a href="/ho/cd/HOCD0030M00.nhl" rel="nosublink">보험료 납입</a></li>
				<li><a href="/ho/cd/HOCD0031M00.nhl" rel="nosublink">보험료 추가납입</a></li>
				<li><a href="/ho/cd/HOCD0067M00.nhl" rel="nosublink">보험료 자유납입(유니버셜)</a></li>
				<li><a href="/ho/cd/HOCD0042M00.nhl" rel="nosublink">보험료 자동이체</a></li>
				<li><a href="/ho/cd/HOCD0080M00.nhl" rel="nosublink">보험료 자동대출납입</a></li>
				<li><a href="/ho/cd/HOCD0081M00.nhl" rel="nosublink">가상계좌 발급/조회</a></li>
				</ul>
			</dd>
			</dl>
		</li>
		<li>
			<dl>
			<dt class="mn3 off"><a href="#NHLife">일반보험금 신청</a></dt>
			<dd class="off">
				<ul class="submnList">
				<li><a href="/ho/cd/HOCD0033M00.nhl" rel="nosublink">만기보험금 신청</a></li>
				<li><a href="/ho/cd/HOCD0034M00.nhl" rel="nosublink">중도(분할)보험금 신청</a></li>
				<li><a href="/ho/cd/HOCD0035M00.nhl" rel="nosublink">해지환급금 신청(보험해지)</a></li>
				<li><a href="/ho/cd/HOCD0038M00.nhl" rel="nosublink">휴면보험금 신청</a></li>
				<li><a href="/ho/cd/HOCD0036M00.nhl" rel="nosublink">배당금 신청</a></li>
				<li><a href="/ho/cd/HOCD0037M00.nhl" rel="nosublink">중도인출금 신청</a></li>
				<li><a href="/ho/cd/HOCD0055M00.nhl" rel="nosublink">연금 신청</a></li>
				<li><a href="/ho/cd/HOCD0032M00.nhl" rel="nosublink">자동송금 신청(해지)</a></li>
				<li><a href="/ho/cd/HOCD0083M00.nhl" rel="nosublink">비대면 일반지급 거래한도 변경내역</a></li>
				<li><a href="/ho/cd/HOCD0084M00.nhl" rel="nosublink">미수령 일반보험금 조회</a></li>
				</ul>
			</dd>
			</dl>
		</li>
		<li>
			<dl>
			<dt class="mn4 off"><a href="#NHLife">보험계약사항변경</a></dt>
			<dd class="off">
				<ul class="submnList">
				<li><a href="/ho/cd/HOCD0021M00.nhl" rel="nosublink">보험기간 변경조회</a></li>
				<li><a href="/ho/cd/HOCD0021M04.nhl" rel="nosublink">납입기간 변경조회</a></li> 
				<li><a href="/ho/cd/HOCD0022M00.nhl" rel="nosublink">선택특약 해지</a></li>
				<li><a href="/ho/cd/HOCD0069M00.nhl" rel="nosublink">연금저축보험료 변경</a></li>
				<li><a href="/ho/cd/HOCD0072M00.nhl" rel="nosublink">연금개시연령 변경</a></li>
				<li><a href="/ho/cd/HOCD0078M00.nhl" rel="nosublink">연금종류 변경</a></li>
				</ul>
			</dd>
			</dl>
		</li>
		<li>
			<dl>
			<dt class="mn5 off"><a href="#NHLife">대출서비스</a></dt>
			<dd class="off">
				<ul class="submnList">
				<li><a href="/ho/cd/HOCD0070M00.nhl" rel="nosublink">보험계약대출 신청</a></li>
				<li><a href="/ho/cd/HOCD0027M00.nhl" rel="nosublink">신용대출 가능금액 조회</a></li>
				<li><a href="/ho/cd/HOCD0045M00.nhl" rel="nosublink">한도성 추가대출</a></li>
				<li><a href="/ho/cd/HOCD0028M00.nhl" rel="nosublink">대출내역조회/금리산정내역서</a></li>
				<li><a href="/ho/cd/HOCD0075M00.nhl" rel="nosublink">대출원리금 상환</a></li>
				<li><a href="/ho/cd/HOCD0052M00.nhl" rel="nosublink">대출기한연기 신청</a></li>
				<li><a href="/ho/cd/HOCD0054M00.nhl" rel="nosublink">금리인하요구 신청</a></li>
				<li><a href="/ho/cd/HOCD0059M00.nhl" rel="nosublink">대출자동이체계좌관리</a></li>
				<li><a href="/ho/cd/HOCD0053M00.nhl" rel="nosublink">대출계약철회 신청</a></li>
				<li><a href="/ho/cd/HOCD0077M00.nhl" rel="nosublink">CD/ATM 카드등록</a></li>
				<li><a href="/ho/cd/HOCD0057M00.nhl" rel="nosublink">개인신용평가 결과에 대한 대응권 신청</a></li>
				</ul>
			</dd>
			</dl>
		</li>
		<li>
			<dl>
			<dt class="mn6 off"><a href="#NHLife">증권/증명서 신청</a></dt>
			<dd class="off">
				<ul class="submnList">
				<li><a href="/ho/cd/HOCD0044M00.nhl" rel="nosublink">보험증권 재발행</a></li>
				<li><a href="/ho/cd/HOCD0040M00.nhl" rel="nosublink">보험료 납입증명서</a></li>
				<li><a href="/ho/cd/HOCD0041M00.nhl" rel="nosublink">소득·세액공제용 납입증명서</a></li>
				<li><a href="/ho/cd/HOCD0061M00.nhl" rel="nosublink">부채증명원</a></li>
				<li><a href="/ho/cd/HOCD0062M00.nhl" rel="nosublink">원리금납입증명서</a></li>
				<li><a href="/ho/cd/HOCD0068M00.nhl" rel="nosublink">팩스발송 내역조회</a></li>
				</ul>
			</dd>
			</dl>
		</li>
		</ul>
	</div>
</div>

<!-- //하단전체메뉴 -->



<div id="footer">
	<div class="helpCntr_2006">
	<dl>
		<dt class="hide">하단메뉴</dt>
		<dd class="provmn4"><a href="/ho/tp/HOTP0002M00.nhl" class="point_blue"  rel="nosublink"><strong>개인정보처리방침</strong></a></dd>
		<dd><a href="#" onclick="cyberChkNgo('/ho/oc/HOOC0010M00.nhl')"><strong>전자민원접수</strong></a></dd>
		<dd><a href="#" onclick="cyberChkNgo('/ho/on/HOON0036M00.nhl')"><strong>보호금융상품등록부</strong></a></dd>
		<dd><a href="/ho/tp/HOTP0001M00.nhl" rel="nosublink"><strong>이용약관</strong></a></dd>
		<dd><a href="#" onclick="cyberChkNgo('/ho/cc/HOCC0045M00.nhl')" class="point_blue"><strong>모바일 공동인증서</strong></a></dd>
		<dd class="smart"><a href="/nhsmart.nhl" target="_blank" rel="nosublink" title="스마트워크, 새창에서 열기" class="point_blue"><strong>스마트워크</strong></a></dd>
		<dd class="dlast"><a href="/ho/dp/HODP0001M00.nhl" rel="nosublink"><span class="hide">NH농협생명 디지털파트너</span></a></dd>
	</dl>
	</div>
	
	<div class="footArea">			
		<dl class="helpCntr">
			<dd class="helpmn7"><a href="/ho/ci/HOCI0008M00.nhl?bulthId=829" rel="nosublink"><strong class="point_purple">파인</strong></a></dd>
			<dd class="helpmn5"><a href="http://www.fss.or.kr/s1332" target="_blank" rel="nosublink" title="서민금융 1332, 새창에서 열기">서민금융 1332</a></dd>						
			<dd class="provmn5"><a href="/ho/tp/HOTP0008M00.nhl" rel="nosublink">전자금융거래약관</a></dd>
			<dd class="provmn7"><a href="#" onclick="cyberChkNgo('/ho/cd/HOCD0050M00.nhl')">본인정보이용·제공조회</a></dd>
			<dd><a href="/ho/ci/HOCI0013M00.nhl" rel="nosublink">사회공헌</a></dd>
			<dd class="quickmn1"><a href="#" onclick="cyberChkNgo('/ho/ci/HOCI0005M00.nhl')">윤리경영</a></dd>
			<dd><a href="/ho/ci/HOCI0008M00.nhl?bulthId=843" rel="nosublink">안전금융거래 유의사항</a></dd>
			<dd class="helpmn1"><a href="#" onclick="cyberChkNgo('/ho/oc/HOOC0001M00.nhl')">보험사기신고센터</a></dd>
			<dd class="helpmn2"><a href="https://www.klia.or.kr/consumer/insuDiscriminate/center.do" target="_blank" rel="nosublink" title="장애인 보험가입차별 신고센터, 새창에서 열기">장애인 보험가입차별 신고센터</a></dd>
			<dd class="helpmn3"><a href="#NHLife" onclick="popupGet('/ho/oc/HOOC0004P00.nhl', 'unjHdptAdvt', 'width=522px,height=430px,scrollbars=no');" title="대출모집인 부당·과장 광고 신고센터, 새창에서 열기" >대출모집인 부당·과장 광고 신고센터</a></dd>
			<dd class="quickmn2"><a href="#" onclick="cyberChkNgo('/ho/cc/HOCC0106M00.nhl')">칭찬합니다</a></dd>					
		</dl>
	</div>
	
	<div class="footWrap">
		<h1 class="fLogo hide">NH농협생명</h1>	
		<div class="copyright"> 
			<div class="flgt">
				
				<!-- <div class="callnqr">
					<ul class="callNum">
						<li class="call">
						<span>대표번호:1544-4000(해외: +82-2-6943-1601), 사고보험금상담: 1833-4100</span>
						<span class="ars"><a href="#NHLife" class="callARS_trigger">ARS안내</a></span>
						</li>
						<li class="qr"><span>NH농협생명 모바일 홈페이지(m.nhlife.co.kr)</span></li>
					</ul>
				</div> -->
				<address>(03739) 서울특별시 서대문구 통일로 87 농협생명보험주식회사</address>
							
			</div>
			<div class="fRgt">
				<div class="familySite">
					<dl class="family_site">
					<dt><a href="#NHLife" title="하위메뉴 있음">패밀리사이트</a></dt>
					<dd id="family_site">
						<ul>
						<li><a href="http://www.nonghyup.com/" target="_blank" rel="nosublink" title="농협중앙회, 새창에서 열기">농협중앙회</a></li> 
						<li><a href="http://www.nhfngroup.com/" target="_blank" rel="nosublink" title="NH농협금융지주, 새창에서 열기">NH농협금융지주</a></li>
						<li><a href="http://banking.nonghyup.com/" target="_blank" rel="nosublink" title="NH농협은행, 새창에서 열기">NH농협은행</a></li>
						<li><a href="https://www.nhlife.co.kr/" target="_blank" rel="nosublink" title="NH농협생명, 새창에서 열기">NH농협생명</a></li>
						<li><a href="http://www.nhfire.co.kr/" target="_blank" rel="nosublink" title="NH농협손해보험, 새창에서 열기">NH농협손해보험</a></li>
						<li><a href="http://card.nonghyup.com/" target="_blank" rel="nosublink" title="NH농협카드, 새 창에서 열기">NH농협카드</a></li>
						<li><a href="http://www.nhwm.com/" target="_blank" rel="nosublink" title="NH투자증권, 새창에서 열기">NH투자증권</a></li>
						<li><a href="http://www.nh-amundi.com/" target="_blank" rel="nosublink" title="NH-Amundi자산운용, 새창에서 열기">NH-Amundi자산운용</a></li>
						<li><a href="http://www.nhcapital.co.kr/" target="_blank" rel="nosublink" title="NH농협캐피탈, 새창에서 열기">NH농협캐피탈</a></li>
						<li><a href="http://www.futures.co.kr" target="_blank" rel="nosublink" title="NH선물, 새창에서 열기">NH선물</a></li>
						<li><a href="http://www.nhsavingsbank.co.kr/" target="_blank" rel="nosublink" title="NH저축은행, 새창에서 열기">NH저축은행</a></li>
						<li><a href="http://www.nhreits.com/" target="_blank" rel="nosublink" title="NH농협리츠운용, 새창에서 열기">NH농협리츠운용</a></li>
						<li><a href="http://www.nonghyupmall.com/" target="_blank" rel="nosublink" title="농협몰, 새창에서 열기">농협몰</a></li>
						<li><a href="http://www.moguchon.co.kr/" target="_blank"  rel="nosublink" title="농협목우촌, 새창에서 열기">NH-농협목우촌</a></li>
						</ul>
						<p class="close"><a href="#NHLife">닫기</a></p>
					</dd>
					</dl>
				</div>	
					
		 	</div>

		</div>
	</div>
</div>

<!-- 고객콜센터 ARS -->
<div class="callARSWrap" id="callArsWrapDiv" data-flag="main">
	<div class="bg">&nbsp;</div>
	<div class="callARSArea">
		
		<h1 class="hide">NH농협생명</h1>
		<h2 class="hide">내맘같은 고객센터 ARS: 1544-4000(해외:+82-31-8068-3601), 사고보험금 상담 1833-4100</h2>
		<div class="callARS">
			<p class="layerClose"><a class="close" href="#callARS_anchor" title="고객콜센터 ARS안내 레이어 닫기">닫기</a></p>
			<dl class="title">
				<dt>상담원연결: 09:00~18:00(평일)</dt>
				<dt>ARS 이용</dt>
				<dd>
					<ul>
					<li>조회서비스 365일 24시간 운영</li>
					<li>처리서비스 365일 07:00~23:30</li>
					</ul>
				</dd>
				<dt>상담원 연결</dt>
				<dd>평일 09:00~18:00</dd>
			</dl>
			<ul class="useGuide">
			<li>1544-4000 ARS 서비스			
				<ul>
					<li>0. 상담직원 연결
						<ul>
							<li>1. 보험계약대출문의</li>
							<li>2. 보험료납입 및 자동이체문의</li>
							<li>3. 해지/만기/중도인출/분할보험금 등 지급안내</li>
							<li>4. 사고, 수술, 입원 등 사고보험금 문의</li>
							<li>5. 안내장 및 증명서 신청</li>
							<li>6. 기타보험관련문의</li>
						</ul>
					</li>
					<li>1. 보험계약대출
						<ul>
							<li>1. 보험계약대출 금액 조회 및 신청</li>
							<li>2. 원리금 조회 및 상환</li>
							<li>0. 상담직원 연결</li>
						</ul>
					</li>
					<li>2. 보험료납입 및 계약사항조회
						<ul>
							<li>1. 보험료 실시간 이체</li>
							<li>2. 보험료납입 내역 조회</li>
							<li>3. 자동이체신청 및 변경</li>
							<li>4. 부활절차 및 납입금액 안내</li>
							<li>0. 상담직원 연결</li>
						</ul>
					</li>
					<li>3. 해지/만기/중도인출/분할보험금 등 보험금 신청
						<ul>
							<li>1. 해지환급금 조회</li>
							<li>2. 만기보험금 조회</li>
							<li>3. 분할보험금 조회</li>
							<li>4. 배당금 조회</li>
							<li>5. 중도인출 조회</li>
							<li>6. 휴면보험금 조회</li>
							<li>0. 상담직원 연결</li>
						</ul>
					</li>
					<li>4. 소득공제납입증명서 신청
						<ul>
							<li>0. 상담직원 연결</li>
						</ul>
					</li>
					<li>5. 비밀번호 등록 및 변경 신청
						<ul>
							<li>1. 비밀번호 등록</li>
							<li>2. 비밀번호 변경</li>
							<li>0. 상담직원 연결</li>
						</ul>
					</li>					
				</ul>
			</li>
			<li>1833-4100 ARS 서비스
				<ul>
					<li>1. 상담직원 연결</li>
					<li>2. ARS를 통한 사고보험금청구 서류안내
						<ul>
							<li>1. 실손의료비 입원 및 상해치료비</li>
							<li>2. 실손의료비 통원 및 처방</li>
							<li>3. 입원/수술</li>
							<li>4. 치아보험</li>
							<li>5. 골절진단</li>
							<li>6. 암진단, 수술</li>
							<li>7. 암입원, 통원</li>
						</ul>
					</li>
				</ul>
			</li>
			</ul>
			<dl>
				<dt>통화요금안내</dt>
				<dd>일반전화: 3분당 33원(시내요금 기준)/ 휴대폰</dd>
				<dd>인터넷전화: 통신사와 약정한 요금제 기준 부과</dd>
			</dl>
			
		</div>
	</div>
</div>
<!-- //고객콜센터 ARS -->

<div id="nhlifeAside" class="nhlifeAside">
		
		 <ul class="side_menu">
		  <li class="last"><a href="/ho/dp/HODP0001M00.nhl" rel="nosublink">NH농협생명 디지털파트너</a></li>
		 </ul>


</div>

<div id="loginProcess" style="display:none;position:absolute;width:290px;height:140px;z-index:100002">
	<div class="errorWrap">		
		<div class="errorArea tiny">
			<h1 class="hide">NH농협생명</h1>
			<h2>로그인연장</h2>
			<div class="errorInfo">
				<h1 class="hide">NH농협생명</h1>
				<ul class="txt">
				<li>잠시 후 접속시간이 10분이 되어 자동으로 로그아웃 됩니다.<br/> 
				로그인을 연장하시겠습니까?</li>
				</ul>
				<p class="tac">
					<span class="button large"><button onclick="loginChk('1');" id="btnLoginR" type="button">로그인 연장</button></span>
					<span class="button large action"><button onclick="loginChk('2');" id="btnLoginO"  type="button">로그아웃</button></span>
				</p>				
			</div>
			<p class="close"><span class="button small"><input type="button" onclick="loginChk('3');" id="btnLoginC"  value="창닫기"/></span></p>
		</div>
	</div>
</div>
<div id="process" style="display:none;position:absolute;width:290px;height:140px;z-index:100001"><img id='loadingimg' src='./images/common/loading.gif' alt='loading'/></div>
<div class="mask" style="display:none;position:absolute;left:0;top:0;background:#fff;z-index:1000"></div>
	
<form name="hOCD0047VO" id="hOCD0047VO" method="post" action=""> <!-- 캠페인통계조회 -->
	<input type="hidden" name="cdId" id="cdId"/>
	<input type="hidden" name="bsdt" id="bsdt"/>
	<input type="hidden" name="atdcCnt" id="atdcCnt"/>
</form>

<script>
$(function(){
	gtag('js', new Date());
 	gtag('config', 'UA-123139270-2',{ //운영
		"page_title" : document.title,
		"page_location" : document.location.href.split("?")[0],
		"page_path" : document.location.pathname
	});
 	gtag('set', 'location',document.location.href.split("?")[0]);
 	
 	$("button").click(function(){
 		gtag('event', $(this).text() +" - "+ document.title,{	// 이벤트 액션 alt
 		'event_category': '링크', 												// 이벤트 카테고리 title
 		'event_label': 'button'        											// 이벤트 라벨 이벤트 종류(a href, button
	 	});
 	});

 	$("a").click(function(){
 		gtag('event', $(this).text() +" - "+ document.title,{
 		'event_category': '링크',
 		'event_label': 'a href'
 		});
 	});
 	
 	$(".nhlifeAside .loan").click(function(){
 		gtag('event', '대출가능금액[배너] - ' + document.title,{
 	 	'event_category': '플루팅배너',
 	 	'event_label': '대출가능금액'
 	 	});
 	});
 		
 	$(".nhlifeAside .chatBot").click(function(){
 		gtag('event', '챗봇[배너] - '+document.title,{
 	 	'event_category': '플루팅배너',
 	 	'event_label': '챗봇'
 	 	});
 	});
 		
 	$("#koribot").click(function(){
 		gtag('event', '챗봇[하단] - '+document.title,{
 	 	'event_category': '플루팅배너', 	
 	 	'event_label': '챗봇'        			
 	 	});
 	});
 		
});

</script>
	<form name="selectOne" action="" class="selectOne">
		<input name="bbsTyCode" type="hidden" autocomplete="off">
	</form>
	<span itemscope="" itemtype="http://schema.org/Organization">
		<link itempro="url" href="https://www.nhlife.co.kr">
		<a itemprop="sameAs" href="https://blog.naver.com/nhlife_pr"></a>
		<a itemprop="sameAs" href="https://play.google.com/store/apps/details?id=com.nhlife.customer.mobile"></a>
		<a itemprop="sameAs" href="https://youtube.com/channel/nonghyuplife"></a>
		<a itemprop="sameAs" href="https://www.facebook.com/nhlife.official"></a>
		<a itemprop="sameAs" href="https://www.instagram.com/nhlife.official"></a>
		<a itemprop="sameAs" href="https://itunes.apple.com/kr/app/id731207448"></a>
	</span>
</body>
</html>