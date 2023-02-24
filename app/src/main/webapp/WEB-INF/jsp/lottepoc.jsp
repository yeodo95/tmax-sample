<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.net.InetAddress" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.util.Properties,java.util.*"%>
<%@ page import="java.util.List" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="테스트 홈페이지" />
    <link rel="stylesheet" type="text/css" href="chp/css/sgi/sgi.css">
    <link rel="stylesheet" type="text/css" href="chp/css/sgi/custom.css">

    <script type="text/javascript" src="chp/js/sgi/jquery.min.js"></script>
    <script type="text/javascript" src="chp/js/sgi/jquery-ui.js"></script>
    <script type="text/javascript" src="chp/js/sgi/common_ui.js"></script>
   
    
    <title>테스트입니다.2222.</title>
	<script type="text/javascript">
	
	
	function printClock() {
	    
	    var clock = document.getElementById("clock");            // 출력할 장소 선택
	    var currentDate = new Date();                                     // 현재시간
	    var calendar = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() // 현재 날짜
	    var amPm = 'AM'; // 초기값 AM
	    var currentHours = addZeros(currentDate.getHours(),2); 
	    var currentMinute = addZeros(currentDate.getMinutes() ,2);
	    var currentSeconds =  addZeros(currentDate.getSeconds(),2);
	    
	    if(currentHours >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
	    	amPm = 'PM';
	    	currentHours = addZeros(currentHours - 12,2);
	    }

	    if(currentSeconds >= 50){// 50초 이상일 때 색을 변환해 준다.
	       currentSeconds = '<span style="color:#de1951;">'+currentSeconds+'</span>'
	    }
	    clock.innerHTML = currentHours+":"+currentMinute+":"+currentSeconds +" <span style='font-size:30px;'>"+ amPm+"</span>"; //날짜를 출력해 줌
	    
	    setTimeout("printClock()",1000);         // 1초마다 printClock() 함수 호출
	}

	function addZeros(num, digit) { // 자릿수 맞춰주기
		  var zero = '';
		  num = num.toString();
		  if (num.length < digit) {
		    for (i = 0; i < digit - num.length; i++) {
		      zero += '0';
		    }
		  }
		  return zero + num;
	}

	
	//<![CDATA[
	var contextRoot = "chp";
	
	//비회원 이고 인증서 로그인 일때 알럿창 한번만 뜨게 체크 (세션값) 시작
	var joinAlert="N";//비회원 이고 인증서 로그인 일때 알럿창 한번만 뜨게 체크 (세션값)
	var mSessLoginType = "1";
	
	//init
	$(document).ready(function() {
	    
	    //잘못된 연락처 정보 수정 - 팝업   시작 (20160627)        
	    if( mSessLoginType=="3" && ""!="" ){
	        jsPopup('chp/html/hp/popup/p_smsEmail.jsp?cntctStppg=','415','274');  }
	    //잘못된 연락처 정보 수정 - 팝업   끝 
	
	    cookiedata = document.cookie;
	    
	    if(parseInt(cookiedata.indexOf("popNotice=checked")) < 0) {
	        $("#popNotice").css("display", "block"); 
	    } else {
	        $("#popNotice").css("display", "none");
	    }
	
	
	
	
//상단팝업 끝
    if ( joinAlert=="N" && ( mSessLoginType == "2" || mSessLoginType == "8" ) ) {
         
        var hmpgScssnRsncd    = '' ;
        var mmbrsAtmtcDstrcYn = '' ;
        var mmbrsExchnPssblYn = '' ;
        
        
        if( mSessLoginType == "2" && mmbrsExchnPssblYn == 'Y' ){  
            
             Dialog.open("#layer_pop03");
            
            
        }else{
            var ans;
            if( mSessLoginType == "2" ){
            	ans = confirm("고객님은 홈페이지 회원이 아닙니다. \n전자서명, 보험료 결제 등 보험계약 체결 업무는 \n회원가입 후 이용 가능합니다.\n회원가입하시겠습니까?\n(계약조회, 보험금청구는 비회원 이용 가능)");
                if (ans)  {
                    var url = "chp/iutf/hp/membe/CHPMEMB002VM0.mvc";
                    location.href=url;
                }
            }else if( mSessLoginType == "8" ){
                ans = confirm("아이핀 인증 회원이 아닙니다.\n금융거래회원 가입 후 로그인시 건별 본인인증이 필요하지 않습니다.\n\n금융거래회원으로 가입하시겠습니까?\n\n단, 상담게시판을 이용하실 경우, 아이핀인증만으로도\n가능하오니 취소를 눌러 사용해주십시오.");
                if(ans)  {
                    var url = "chp/iutf/hp/membe/CHPMEMB002VM0.mvc";
                    location.href=url;
                }
            }
            else if( mSessLoginType == "C" ){
                ans = confirm("고객님은 현재 금융거래회원이 아닌 휴대폰 본인확인에 의한 비회원입니다. \n전자서명, 보험료 결제, 계약조회 등의 업무를 이용하시려면 \n먼저 금융거래회원으로 가입하여 주시기 바랍니다.\n금융거래회원 가입메뉴로 이동하시겠습니까?");
                if(ans){
                    var url = "chp/iutf/hp/membe/CHPMEMB002VM0.mvc";
                    location.href=url;
                }
            }
        }
    }
    //비회원 이고 인증서 로그인 일때 알럿창 한번만 뜨게 체크 (세션값) 끝
});

    //** 2013-12-18  팝업에 관한 쿠키값 설정
    function setCookie( name, value, expiredays ) {  
       var todayDate = new Date();   
       todayDate.setDate( todayDate.getDate() + expiredays );   
       document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    } 
    
    function closeWin(id) {
        if ($("#"+id+"box").attr("checked")=="checked") setCookie( id+"Notice", "checked" , 1 );   
        $("#"+id+"Notice").hide();
    }
    
    
    var jsBlockUI = function() {
        var $html = '';
        $html += '<div class="sgi_loading_wrap">';
            $html += '<div class="sgi_loading"></div>';
        $html += '</div>';
        if(!$('.sgi_loading_wrap').length)$('body').prepend($html);
        setTimeout(function(){
            $('.sgi_loading_wrap').addClass('show');
        },10);
        common.lock();
    };

    var jsUnblockUI = function() {
        $('.sgi_loading_wrap').stop(true,false).fadeOut(300,function(){
            $(this).remove();
        });
        common.unlock();
    };
    
    var jsPopup = function(url, width, height) {
        var name = "popupzone";
        var top  = screen.height / 2 - height / 2 - 50;
        var left = screen.width / 2 - width / 2 ;
        var win = open(url, name, 'width=' + width + ', height=' + height + ', top=' + top +
                ', left=' + left + ', scrollbars=yes, resizable=yes, status=yes, toolbar=no, menubar=no');
    
        win.focus();
        return win;
    };

/*
 *  컨테이널별 구분을 위한 변수값
*/
var srcCookie = document.cookie  ;
//srcCookie = "PD-H-SESSION-ID=0_J0dIZfLwaqoJ+XV/j0wjLmstBiwfJiRxxbKSCxDnDy42PgPfDq4=; ccsession=20141114170737af14011f01fe434a42; ccguid=20141114170737af14011f01fe434a42; __smVisitorID=RdU0JF1rnaB; JSESSIONID=u4szxBUsCaQmTQtqk1VT4d2zhLSM6OcPndzg1xm9BJeXBreRq1zmo79laX8EiAiK.egisap1_servlet_engine14" ;
 
var titles = "" ;
//srcCookie  = "egisap1_servlet_engine11";
if( srcCookie.indexOf("egisap1_servlet_engine11")>-1 ){
    titles= "11" ;
}else if( srcCookie.indexOf("egisap1_servlet_engine12")>-1 ){
    titles= "12" ;
}else if( srcCookie.indexOf("egisap1_servlet_engine13")>-1 ){
    titles= "13" ;
}else if( srcCookie.indexOf("egisap1_servlet_engine14")>-1 ){
    titles= "14" ;
}else if( srcCookie.indexOf("egisap2_servlet_engine11")>-1 ){	
    titles= "21" ;
}else if( srcCookie.indexOf("egisap2_servlet_engine12")>-1 ){
    titles= "22" ;
}else if( srcCookie.indexOf("egisap2_servlet_engine13")>-1 ){
    titles= "23" ;
}else if( srcCookie.indexOf("egisap2_servlet_engine14")>-1 ){
    titles= "24" ;  
}

document.title= "안녕하세요! | "+titles  ;


//]]>
</script>
</head>
<body onload="printClock()">
    	
    <h2 class="hide">바로가기 메뉴</h2>
    <div id="accessibility">
        <ul>
            <li><a href="#container" class="no-button">본문 바로가기</a></li>
        </ul>
    </div>
    <hr />
    
 	
 

    <div id="wrap" class="main">
        
        
         


 

<script type="text/javascript">





    var contextRoot = "chp";
    
    $(document).ready(function() {  
        
        /* 메뉴 리스트 호출 */
        
        
        //최근 검색어 표시
        var list = JSON.parse(localStorage.getItem('chp'));
        if(list != null){
            list=list.reverse();//역순으로 정렬
            var storageHtml='';
            for(i =0;  list.length >i ; i++){
                storageHtml += '<li><a href="javascript:goSearchTotal(\''+list[i]+'\')">#'+list[i]+'</a></li>';
            }
            $('#ulStorageText').append(storageHtml);
        }
        
        /* 통합검색 */
        $("#sgiSearch").keyup(function(e){
            var key = e.keyCode || e.which;
            if (key === 13 && this.value) {
                $("#btn_wd").click();
            }
            return false;
        });
        
        $("#sgiSearch1").keyup(function(e){
            var key = e.keyCode || e.which;
            if (key === 13 && this.value) {
                $("#btn_wd1").click();
            }
            return false;
        });
        
        /* 통합검색시 최근검색어를 위해 localStorage에 데이터를 저장함 */
        $("#btn_wd").click(function(e){
            if ( $("#sgiSearch").val() ) {
                var list = JSON.parse(localStorage.getItem('chp'));
                if(list != null){
                    for(i =0;  list.length >i ; i++){
                        if($("#sgiSearch").val()==list[i]){
                            list.splice(i,1);   
                            break;
                        }
                    }
                    if(list.length >= 6){//6 개로제한
                        list.shift();
                    }
                    list.push($("#sgiSearch").val());
                    localStorage.clear();
                    
                    localStorage.setItem('chp',JSON.stringify(list));
                }else{
                    var list = new Array();
                    list.push($("#sgiSearch").val());
                    
                    localStorage.setItem('chp',JSON.stringify(list));
                }
                jsSearch();
            }
        });
        
        $("#btn_wd1").click(function(e){
            if ( $("#sgiSearch1").val() ) {
                var list = JSON.parse(localStorage.getItem('chp'));
                if(list != null){
                    for(i =0;  list.length >i ; i++){
                        if($("#sgiSearch1").val()==list[i]){
                            list.splice(i,1);   
                            break;
                        }
                    }
                    if(list.length >= 6){//6 개로제한
                        list.shift();
                    }
                    list.push($("#sgiSearch1").val());
                    localStorage.clear();
                    
                    localStorage.setItem('chp',JSON.stringify(list));
                }else{
                    var list = new Array();
                    list.push($("#sgiSearch1").val());
                    
                    localStorage.setItem('chp',JSON.stringify(list));
                }
                jsSearch1();
            }
        });
        
        // 추천검색어, 메인화면 검색 및의 text 클릭시
        $("#keywordSearch,.key_word").find(".spKw").click(function(){
            var keyword = $(this).text().replace("#", "");
            goSearchTotal(keyword);
            return false;
        });
        
        var jsSearch = function() {
            var searchValue = $("#sgiSearch").val();
            if (searchValue.length < 2) {
                alert("검색어를 2자 이상 입력하세요."); $("#sgiSearch").focus(); return;
            }
            else {
                jsBlockUI();
                location.href = "ch/CHPSRCH101VM0.mvc?q_sk=&q_sv=" + searchValue;
            }
        };
        
        var jsSearch1 = function() {
            var searchValue = $("#sgiSearch1").val();
            if (searchValue.length < 2) {
                alert("검색어를 2자 이상 입력하세요."); $("#sgiSearch1").focus(); return;
            }
            else {
                jsBlockUI();
                location.href = "ch/CHPSRCH101VM0.mvc?q_sk=&q_sv=" + searchValue;
            }
        };
        
        window.addEventListener("message", function(e){
        	console.log("e.data" + e.data);
        	if(JSON.parse(e.data).onlyChat == 'Y'){
        		timeContinue();
        	}
        });
    });
    
    //통합검색
    function goSearchTotal(serachText){
        $("#sgiSearch").val(serachText);
        $("#btn_wd").click();
    }

    var jsHeaderGuide = function() {
        location.href="chp/fileDownload/download.mvc?prdidCode=00000";
        return false;
        /* var url = "chp/iutf/co/guide/bgn/guide01.mvc";
        var name = "guide";
        var width = "990";
        var height = "900";
        var top  = screen.height / 2 - height / 2 - 50;
        var left = screen.width / 2 - width / 2 ;
        var win = open(url, name, 'width=' + width + ', height=' + height + ', top=' + top +
                ', left=' + left + ', scrollbars=yes, resizable=no, status=yes, toolbar=no, menubar=no');

        win.focus();
        return win; */
    };    
    

    function gotoUrl(gotoUrl,naviId)
    {
        $.ajax({
            async : false,
            type : "post",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            dataType : "json",
            url :  'chp/menuInfo/naviIdsessSet.mvc?naviId='+naviId,
            success : function(jsonResult) {
                location.href = gotoUrl;
            },
            error : function(e) {
            }
        });

    }
    
    function sessChg()
    {
        $("#sessChgDiv").toggle();
    }

    function validation()
    {
        if ($("#sessChgDiv").find("input:radio[name=gubun]").eq(0).is(":checked") == true)
        {
            if ($("#sessChgDiv").find("#jumin1").val() == "" || $("#sessChgDiv").find("#jumin2").val() == "")
            {
                // 맞춤법 내에서 ~시요는 어색한 표현으로 이를 ~시오로 수정함. 2017.06.22
                alert("주민등록번호를 입력하여 주십시오");
                return false;
            }
            return true;
        }
        else($("#sessChgDiv").find("input:radio[name=gubun]").eq(1).is(":checked") == true)
        {
            if ($("#sessChgDiv").find("#saup1").val() == "" || $("#sessChgDiv").find("#saup2").val() == "" || $("#sessChgDiv").find("#saup3").val() == "")
            {
                // 맞춤법 내에서 ~시요는 어색한 표현으로 이를 ~시오로 수정함. 2017.06.22
                alert("사업자등록번호를 입력하여 주십시오");
                return false;
            }
            return true;
        }
    }

    function viewChg(flag)
    {
        if (flag == "1")
        {
            $("#sessChgDiv").find("#ind").show();
            $("#sessChgDiv").find("#comp").hide();
        }
        else if(flag == "2")
        {
            $("#sessChgDiv").find("#ind").hide();
            $("#sessChgDiv").find("#comp").show();
        }
        $("#sessChgDiv").find("#jumin1").val("");
        $("#sessChgDiv").find("#jumin2").val("");
        $("#sessChgDiv").find("#saup1").val("");
        $("#sessChgDiv").find("#saup2").val("");
        $("#sessChgDiv").find("#saup3").val("");
    }

</script>

       <header id="sgiHeader" style="background: #00c9f2">
            <div class="head_inner">
                <div class="util_menu">
                    <ul>
                    
                        
                        <li class="login"><a href="#">로그인</a>
							<ul class="login_list">
								<li><a href="chp/iutf/hp/comn/securit/CHPMEMB001RM0.mvc" class="private"><span>개인회원</span></a></li>
								<li><a href="chp/iutf/hp/comn/securit/CHPMEMB001RM0.mvc?tabs=2" class="corporation"><span>법인회원</span></a></li>
							</ul>
						</li>
                        <li><a href="chp/iutf/hp/membe/CHPMEMB002VM0.mvc">회원가입</a></li>
                        <li><a href="chp/iutf/hp/comn/securit/CHPSIGN001RM0.mvc">인증센터</a></li>
                    
                        <li><a href="chp/iutf/hp/proan/CHPSGIC202VM0.mvc">상품공시</a></li>
                        <li><a href="chp/iutf/hp/intro/main.mvc">회사소개</a></li>
                        <li><a href="chp/iutf/cs/cs_main.mvc">소비자포털</a></li>
                        <li>
                            <a href="#" class="global f_en">GLOBAL<span class="offscreen">열기</span></a>
                            <ul class="global_list">
                                <li><a href="chp/iutf/en/main/en_main.mvc" target="_blank" title="새창이동">ENGLISH</a></li>
                                <li><a href="http://sgic.com.vn"  target="_blank" title="새창이동">VIETNAM</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- Tmax 로고 예정 -->
                <h1><a style="background-image: url('./chp/img/TmaxCloud_CI.png');"><span class="offscreen">티맥스</span></a></h1>
                <h2 class="offscreen">주요메뉴</h2>
                <nav id="sgiGnb" class="gnb">
                    <ul class="nav-snb">
               
                             
                             
                         <li><a href="#" class="f_en" role="button" aria-expanded="false"><span>About Tmax</span></a> <div class="sub_menu" id="sub01"><ul class="gnb_link"><li class="i1"><a href="/chp/iutf/ib/elfi/bi/IndividualAgreement/CIBCOAG001VM0_01.mvc" aria-expanded="false"><h3>개인정보동의</h3><p>보험계약관련 개인정보동의를<br>온라인으로 진행할 수 있습니다.</p><span class="txt_arrow_link">바로가기</span></a></li><li class="i2"><a href="/chp/iutf/ib/elfi/bi/ElectronicSignature/CIBCOSG001VM0.mvc" aria-expanded="false"><h3>보험계약 전자서명</h3><p>보험계약관련 전자서명을<br>온라인으로 진행할 수 있습니다.</p><span class="txt_arrow_link">바로가기</span></a></li></ul><ul id="ul11"><li><span><span>보험가입</span></span><ul id="lv2Link11"><li><a id="lv3Link111" href="/chp/iutf/ib/elfi/bi/IndividualAgreement/CIBCOAG001VM0_01.mvc"  aria-expanded="false"><span>개인정보동의</span></a></li><li><a id="lv3Link112" href="/chp/iutf/ib/elfi/bi/ElectronicSignature/CIBCOSG001VM0.mvc"  aria-expanded="false"><span>보험계약 전자서명</span></a></li><li><a id="lv3Link114" href="/chp/iutf/ib/elfi/bi/InsuranceDocuments/CIBCOSG101VM0_03.mvc"  aria-expanded="false"><span>보험서식 전자서명</span></a></li><li><a id="lv3Link115" href="/chp/iutf/ib/elfi/bi/PremiumPayment/CIBCOPA001VM0.mvc"  aria-expanded="false"><span>보험료 결제</span></a></li><li><a id="lv3Link116" href="/chp/iutf/ib/uwfm/CIBUWFM0001VM0.mvc"  aria-expanded="false"><span>심사서류 제출</span></a></li><li><a id="lv3Link117" href="/chp/iutf/ib/uwfm/CIBUWFM0011VM0.mvc"  aria-expanded="false"><span>심사서류 제출내역</span></a></li><li><a id="lv3Link118" href="/chp/iutf/ib/elfi/cc/reissuancemngnt/CHPCUST101VM0.mvc"  aria-expanded="false"><span>재무제표 제출</span></a></li><li><a id="lv3Link119" href="/chp/iutf/ib/elfi/bi/InsuranceDocuments/CIBCOSG132RM0.mvc"  aria-expanded="false"><span>건설기계 대여계약서 제출</span></a></li><li><a id="lv3Link1111" href="/chp/iutf/ib/elfi/bi/DirectInsurance/CIBCOSB300VM0.mvc"  aria-expanded="false"><span>다이렉트 진행현황 조회</span></a></li></ul></li></ul><ul id="ul12"><li><span><span>나의 계약</span></span><ul id="lv2Link12"><li><a id="lv3Link121" href="/chp/iutf/ib/elfi/ir/insbondpobox/CIBELFI101VM0.mvc"  aria-expanded="false"><span>보험증권 사서함</span></a></li><li><a id="lv3Link122" href="/chp/iutf/ib/elfi/ir/schnpntInsbond/CIBELFI102VM0_index.mvc"  aria-expanded="false"><span>보험계약 조회</span></a></li><li><a id="lv3Link123" href="/chp/iutf/ib/elfi/ir/schnpntInsbond/CIBELFI103VM0_index.mvc"  aria-expanded="false"><span>연대보증 조회</span></a></li><li><a id="lv3Link124" href="/chp/iutf/ib/elfi/ir/search/CIBELFI105VM0.mvc"  aria-expanded="false"><span>한도약정 조회</span></a></li><li><a id="lv3Link125" href="/chp/iutf/ib/elfi/ir/search/CIBELFI106VM0.mvc"  aria-expanded="false"><span>담보물 조회</span></a></li><li><a id="lv3Link126" href="/chp/iutf/ib/elfi/ir/nPntInsBond/CIBELFI107VM0.mvc"  aria-expanded="false"><span>전자보증서 발급결과 조회</span></a></li><li><a id="lv3Link127" href="/chp/iutf/ib/elfi/ir/agreeinsuredmanage/CIBELFI201RM0.mvc"  aria-expanded="false">
                            <span>피보험자 증권조회</span></a></li></ul></li></ul><ul id="ul13"><li><span><span>SuperApp</span></span><ul id="lv2Link13"><li><a id="lv3Link131" href="/chp/iutf/ib/elfi/cc/reissuancemngnt/CIBELFI302RM0_index.mvc"  aria-expanded="false"><span>증명서 발급</span></a></li><li><a id="lv3Link132" href="/chp/iutf/ib/elfi/cc/reissuancemngnt/CIBELFI301VM0_index.mvc"  aria-expanded="false"><span>증권 재발급</span></a></li><li><a id="lv3Link133" href="/chp/iutf/ib/elfi/ir/search/CIBELFI104VM0.mvc"  aria-expanded="false"><span>증권발급내용 조회</span></a></li><li><a id="lv3Link134" href="/chp/iutf/ib/elfi/ir/insbondpobox/CIBELFI101VM5.mvc"  aria-expanded="false"><span>공탁증권 발급확인서</span></a></li><li><a id="lv3Link135" href="/chp/iutf/ib/elfi/ir/schemppmt/CIBEMPL001VM0.mvc"  aria-expanded="false"><span>고용허가 조회</span></a></li><li><a id="lv3Link136" href="/chp/iutf/ib/elfi/ir/finance/CIBCFINC001VM0.mvc"  aria-expanded="false"><span>입금내역 조회</span></a></li></ul></li></ul><ul id="ul14"><li><span><span>회원정보</span></span><ul id="lv2Link14"><li><a id="lv3Link142" href="/chp/iutf/hp/member/CHPMEMB005RM0.mvc"  aria-expanded="false"><span>회원정보 변경</span></a></li><li><a id="lv3Link144" href="/chp/iutf/hp/member/CHPMEMB012RM0.mvc"  aria-expanded="false"><span>본인정보 현황조회</span></a></li><li><a id="lv3Link145" href="/chp/iutf/ib/elfi/bi/IndividualAgreement/CIBELFI400VM0.mvc"  aria-expanded="false"><span>개인신용평가 결과안내</span></a></li><li><a id="lv3Link146" href="/chp/iutf/ib/elfi/cc/reissuancemngnt/CHPMEMB012RM0.mvc"  aria-expanded="false"><span>개인신용정보 제공 동의 철회</span></a></li></ul></li></ul></div></li><li><a href="#" role="button" aria-expanded="false"><span>SuperApp</span></a> <div class="sub_menu" id="sub02"><ul class="gnb_link"><li class="i7"><a href="/chp/iutf/ib/elfi/bi/DirectInsurance/CIBCOSB100VM0.mvc" aria-expanded="false"><h3>다이렉트 보험가입</h3><p>지점방문 필요없이 쉽고 간편하게<br>다이렉트 보험을 가입해 보세요!</p><span class="txt_arrow_link">바로가기</span></a></li><li class="i1"><a href="/chp/iutf/ib/elfi/bi/IndividualAgreement/CIBCOAG001VM0_01.mvc" aria-expanded="false"><h3>개인정보동의</h3><p>보험계약관련 개인정보동의를<br>온라인으로 진행할 수 있습니다.</p><span class="txt_arrow_link">바로가기</span></a></li><li class="i2"><a href="/chp/iutf/ib/elfi/bi/ElectronicSignature/CIBCOSG001VM0.mvc" aria-expanded="false"><h3>보험계약 전자서명</h3><p>보험계약관련 전자서명을<br>온라인으로 진행할 수 있습니다.</p><span class="txt_arrow_link">바로가기</span></a></li></ul><ul id="ul21"><li><span><span>상품찾기 및 안내</span></span><ul id="lv2Link21"><li><a id="lv3Link211" href="/chp/iutf/hp/insurance/CHPINFO001VM0.mvc"  aria-expanded="false"><span>나에게 맞는 보험찾기</span></a></li></ul></li><li><span><span>상품가입 서비스</span></span><ul id="lv2Link22"><li><a id="lv3Link221" href="/chp/iutf/ib/elfi/bi/simplicity/CCRSMPL000VM0.mvc"  aria-expanded="false"><span>일괄보험가입서비스</span></a></li><li><a id="lv3Link222" href="/chp/iutf/ib/elfi/bi/PackageSignature/CIBCOPK001VM0.mvc"  aria-expanded="false"><span>일괄보험가입서비스<br>(공동주택하자용)</span></a></li><li><a id="lv3Link223" href="/chp/iutf/ib/elfi/bi/DirectInsurance/CIBCOSB131VM0.mvc"  aria-expanded="false"><span>전자서명 원스톱서비스</span></a></li><li><a id="lv3Link224" href="/chp/iutf/ib/elfi/bi/DirectInsurance/CIBELFI000VM0.mvc"  aria-expanded="false"><span>생활안정자금</span></a></li></ul></li><li><a href="/chp/iutf/ib/elfi/bi/DirectInsurance/CIBCOSB100VM0.mvc" aria-expanded="false"><span><span>다이렉트 보험가입</span></span></a><ul id="lv2Link23"><li><a id="lv3Link231" href="/chp/iutf/ib/elfi/bi/DirectInsurance/CIBCOSB100VM0.mvc"  aria-expanded="false"><span>신원보증보험</span></a></li><li><a id="lv3Link232" href="/chp/iutf/ib/elfi/bi/DirectInsurance/CIBCOSB100VM0.mvc"  aria-expanded="false"><span>입찰보증보험</span></a></li><li><a id="lv3Link233" href="/chp/iutf/ib/elfi/bi/DirectInsurance/CIBCOSB100VM0.mvc"  aria-expanded="false"><span>계약보증보험</span></a></li><li><a id="lv3Link234" href="/chp/iutf/ib/elfi/bi/DirectInsurance/CIBCOSB100VM0.mvc"  aria-expanded="false"><span>선금보증보험</span></a></li><li><a id="lv3Link235" href="/chp/iutf/ib/elfi/bi/DirectInsurance/CIBCOSB100VM0.mvc"  aria-expanded="false"><span>하자보증보험</span></a></li><li><a id="lv3Link236" href="/chp/iutf/ib/elfi/bi/DirectInsurance/CIBELFI005RM0.mvc"  aria-expanded="false"><span>전자보증서 발급</span></a></li></ul></li></ul><ul id="ul24"><li><span><span>직장인</span></span><ul id="lv2Link24"><li><a id="lv3Link241" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=1"  aria-expanded="false"><span>신원보증보험</span></a></li><li><a id="lv3Link242" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=16"  aria-expanded="false"><span>생활안정자금보증보험</span></a></li><li><a id="lv3Link243" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=3"  aria-expanded="false"><span>교육훈련비보증보험</span></a></li></ul></li><li><span><span>소상공인</span></span><ul id="lv2Link25"><li><a id="lv3Link251" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=105"  aria-expanded="false"><span>상가보증금보장신용보험</span></a></li><li><a id="lv3Link252" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=106"  aria-expanded="false"><span>권리금보호신용보험</span></a></li><li><a id="lv3Link253" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=87"  aria-expanded="false"><span>가맹사업자보증보험</span></a></li></ul></li><li><span><span>주거안정</span></span><ul id="lv2Link26"><li><a id="lv3Link261" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=104"  aria-expanded="false"><span>전세금보장신용보험<br>(개인용)</span></a></li><li><a id="lv3Link262" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=103"  aria-expanded="false"><span>전세금보장신용보험<br>(법인용)</span></a></li><li><a id="lv3Link263" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=74"  aria-expanded="false"><span>임대주택보증보험</span></a></li></ul></li></ul><ul id="ul27"><li><span><span>사업자</span></span><ul id="lv2Link27"><li><a id="lv3Link271" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=67"  aria-expanded="false"><span>지급보증보험</span></a></li><li><a id="lv3Link272" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=66"  aria-expanded="false"><span>이행(상품판매대금)<br>보증보험</span></a></li><li><a id="lv3Link273" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=61"  aria-expanded="false"><span>입찰보증보험</span></a></li><li><a id="lv3Link274" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=62"  aria-expanded="false"><span>계약보증보험</span></a></li><li><a id="lv3Link275" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=65"  aria-expanded="false"><span>선금보증보험</span></a></li><li><a id="lv3Link276" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=64"  aria-expanded="false"><span>하자보증보험</span></a></li><li><a id="lv3Link277" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=24"  aria-expanded="false">
                            <span>전자상거래(쇼핑몰)<br>보증보험</span></a></li><li><a id="lv3Link278" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=13"  aria-expanded="false"><span>분양보증보험</span></a></li><li><a id="lv3Link279" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=8"  aria-expanded="false"><span>설계감리보증보험</span></a></li><li><a id="lv3Link2710" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=10"  aria-expanded="false"><span>공사이행보증보험</span></a></li><li><a id="lv3Link2711" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=60"  aria-expanded="false"><span>공매보증보험</span></a></li></ul></li></ul><ul id="ul28"><li><span><span>법령성</span></span><ul id="lv2Link28"><li><a id="lv3Link281" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=90"  aria-expanded="false"><span>가맹본부보증보험</span></a></li><li><a id="lv3Link282" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=11"  aria-expanded="false"><span>인허가보증보험</span></a></li><li><a id="lv3Link283" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=4"  aria-expanded="false"><span>납세보증보험</span></a></li><li><a id="lv3Link284" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=22"  aria-expanded="false"><span>공탁보증보험</span></a></li><li><a id="lv3Link285" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=23"  aria-expanded="false"><span>보석보증보험</span></a></li><li><a id="lv3Link286" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=76"  aria-expanded="false"><span>선원보증보험<br>(유기구제비용담보용)</span></a></li><li><a id="lv3Link287" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=102"  aria-expanded="false"><span>선원보증보험<br>(체불임금담보용)</span></a></li><li><a id="lv3Link288" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=86"  aria-expanded="false"><span>주택관리사보증보험</span></a></li><li><a id="lv3Link289" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=100"  aria-expanded="false"><span>정보보호보증보험</span></a></li><li><a id="lv3Link2810" href="/chp/iutf/hp/insurance/CHPINFO002VM0_06.mvc?q_insrnSrlno=59"  aria-expanded="false"><span>경매보증보험</span></a></li></ul></li><li><span><span>신용보험</span></span><ul id="lv2Link29"><li><a id="lv3Link291" href="/chp/iutf/hp/insurance/CHPINFO002VM2_01.mvc"  aria-expanded="false"><span>신용보험</span></a></li></ul></li></ul></div></li><li><a href="#" role="button" aria-expanded="false"><span>Media</span></a> <div class="sub_menu" id="sub03"><ul class="gnb_link"><li class="i3"><a href="/chp/iutf/hp/bbs/CHPINFO102VM0.mvc" aria-expanded="false"><h3>청구서류안내</h3><p>보험상품별 제출서류를 자세히<br>안내해드립니다.</p><span class="txt_arrow_link">바로가기</span></a></li><li class="i4"><a href="/chp/iutf/cib/elcl/claimGuidance/CHPINFO103VM0.mvc" aria-expanded="false"><h3>담당부서 안내</h3><p>보험금 청구 접수 및 심사부서를<br>안내해드립니다.</p><span class="txt_arrow_link">바로가기</span></a></li></ul><ul id="ul31"><li><span><span>보상서비스 안내</span></span><ul id="lv2Link31"><li><a id="lv3Link311" href="/chp/iutf/ib/elcl/cs/claimGuidance/CHPINFO101VM0.mvc"  aria-expanded="false"><span>보상서비스 안내</span></a></li></ul></li></ul><ul id="ul32"><li><span><span>보험금 청구</span></span><ul id="lv2Link32"><li><a id="lv3Link321" href="/chp/iutf/cib/elcl/claimDemand/CIBELCL001RM0.mvc"  aria-expanded="false"><span>보험금 청구</span></a></li><li><a id="lv3Link324" href="/chp/iutf/cib/elcl/claimAddition/CIBELCL004RM0.mvc"  aria-expanded="false"><span>추가서류 제출</span></a></li><li><a id="lv3Link325" href="/chp/iutf/cib/elcl/claimChange/CIBELCL006RM0.mvc"  aria-expanded="false"><span>변경·취소</span></a></li><li><a id="lv3Link326" href="/chp/iutf/cib/elcl/claimDemandStatus/CIBELCL005RM0.mvc"  aria-expanded="false"><span>진행사항 조회</span></a></li></ul></li></ul></div></li><li><a href="#" role="button" aria-expanded="false"><span>Tmax Life</span></a> <div class="sub_menu" id="sub04"><ul class="gnb_link"><li class="helpdesk i5"><h3>고객지원센터</h3><span class="tel f_en">1670.7000</span><span class="tag"><a href="#" role="button" aria-expanded="false">#보험금청구</a><a href="#" role="button" aria-expanded="false">#홈페이지이용문의</a><a href="#" role="button" aria-expanded="false">#휴대폰채무및단순상담</a></span></li><li class="i6"><a href="/chp/iutf/hp/faq/CHPFQNC101VM0.mvc?q_cls=FAQ0&amp;q_sort=0" aria-expanded="false"><h3>자주 하는 질문</h3><p>궁금한게 있으신가요?<br>궁금한 사항을 자주하는 질문에서<br>안내해드립니다.</p><span class="txt_arrow_link">바로가기</span></a></li></ul><ul id="ul41"><li><span><span>자주 하는 질문</span></span><ul id="lv2Link41"><li><a id="lv3Link411" href="/chp/iutf/hp/faq/CHPFQNC101VM0.mvc?q_cls=FAQ0&amp;q_sort=0"  aria-expanded="false"><span>자주 하는 질문</span></a></li></ul></li><li><span><span>고객상담</span></span><ul id="lv2Link45"><li><a id="lv3Link451" href="/chp/iutf/hp/consultation/CHPCUST003RM0.mvc"  aria-expanded="false"><span>주요상담 전화번호</span></a></li><li><a id="lv3Link452" href="/chp/iutf/hp/consultation/CHPCUST001RM0.mvc?tm=2&amp;hd=cs"  aria-expanded="false"><span>상담 신청</span></a></li><li><a id="lv3Link453" href="/chp/iutf/hp/consultation/cus/list.mvc"  aria-expanded="false"><span>상담내역 조회</span></a></li></ul></li></ul><ul id="ul42"><li><span><span>채무안내</span></span><ul id="lv2Link42"><li><a id="lv3Link421" href="/chp/iutf/cib/elrv/recovery/CIBELRV005RM0.mvc"  aria-expanded="false"><span>채무 종합안내</span></a></li></ul></li><li><span><span>채무조회 및 조정신청</span></span><ul id="lv2Link46"><li><a id="lv3Link461" href="/chp/iutf/cib/elrv/recovery/CIBELRV001VM0.mvc"  aria-expanded="false"><span>채무 조회</span></a></li><li><a id="lv3Link462" href="/chp/iutf/cib/elrv/recovery/CIBELRV002RM0.mvc"  aria-expanded="false"><span>채무 조정신청</span></a></li><li><a id="lv3Link463" href="/chp/iutf/cib/elrv/recovery/CIBELRV004RM0.mvc"  aria-expanded="false"><span>채무확인서(법원제출용)</span></a></li><li><a id="lv3Link464" href="/chp/iutf/cib/elrv/recovery/CIBELRV003RM0.mvc"  aria-expanded="false"><span>초과변제금 조회</span></a></li></ul></li></ul><ul id="ul43"><li><span><span>고객의 소리</span></span><ul id="lv2Link43"><li><a id="lv3Link431" href="/chp/iutf/hp/consultation/CHPCUST001RM1.mvc?tm=3&amp;hd=cs"  aria-expanded="false"><span>민원 신청</span></a></li><li><a id="lv3Link432" href="/chp/iutf/hp/consultation/pra/edit.mvc"  aria-expanded="false"><span>직원·대리점 칭찬</span></a></li><li><a id="lv3Link433" href="/chp/iutf/hp/consultation/pro/edit.mvc"  aria-expanded="false"><span>신규상품 제안</span></a></li><li><a id="lv3Link434" href="/chp/iutf/hp/consultation/imp/list.mvc"  aria-expanded="false"><span>업무개선 제안</span></a></li><li><a id="lv3Link435" href="/chp/iutf/hp/consultation/abs/edit.mvc"  aria-expanded="false"><span>부조리 제보</span></a></li><li><a id="lv3Link436" href="/chp/iutf/hp/consultation/trk/edit.mvc"  aria-expanded="false"><span>보험사기 의심 제보</span></a></li></ul></li><li><span><span>공지사항</span></span><ul id="lv2Link47"><li><a id="lv3Link471" href="/chp/iutf/hp/bbs/CHPCMBD101VM0.mvc?q_ns=2"  aria-expanded="false"><span>공지사항</span></a></li></ul></li></ul><ul id="ul44"><li><span><span>고객안내</span></span><ul id="lv2Link44"><li><a id="lv3Link442" href="/chp/iutf/hp/branchFront/CHPSGIC402VM5.mvc"  aria-expanded="false"><span>지점 안내</span></a></li><li><a id="lv3Link443" href="/chp/iutf/hp/agencyFront/CHPSGIC403VM0.mvc"  aria-expanded="false"><span>대리점 안내</span></a></li><li><a id="lv3Link444" href="/chp/iutf/hp/consultation/CHPCUST006RM0.mvc"  aria-expanded="false"><span>장애인고객 이용안내</span></a></li><li><a id="lv3Link445" href="/chp/iutf/hp/consultation/CHPCUST007RM0.mvc"  aria-expanded="false"><span>고객확인제도안내</span></a></li></ul></li><li><span><span>자료실</span></span><ul id="lv2Link48"><li><a id="lv3Link481" href="/chp/iutf/hp/bbs/CHPCMBD101VM0.mvc?q_ns=4"  aria-expanded="false"><span>서식자료실</span></a></li><li><a id="lv3Link483" href="/chp/iutf/hp/download/CHPCUST601VM3.mvc"  aria-expanded="false"><span>다운로드센터</span></a></li></ul></li></ul></div></li><li class=""><a href="#" role="button" aria-expanded="false"><span>Family Network</span></a> <div class="sub_menu" id="sub05"><ul class="gnb_link"><li class="helpdesk i5"><h3>고객지원센터</h3><span class="tel f_en">1670.7000</span><span class="tag"><a href="#" role="button">#보험금청구</a><a href="#" role="button">#홈페이지이용문의</a><a href="#" role="button">#휴대폰채무및단순상담</a></span></li><li class="i6"><a href="/chp/iutf/hp/faq/CHPFQNC101VM0.mvc?q_cls=FAQ0&amp;q_sort=0"><h3>자주 하는 질문</h3><p>궁금한게 있으신가요?<br>궁금한 사항을 자주하는 질문에서<br>안내해드립니다.</p><span class="txt_arrow_link">바로가기</span></a></li></ul><ul id="ul51"><li><span><span>중소기업 지원센터</span></span><ul id="lv2Link51"><li><a id="lv3Link511" href="/chp/iutf/cas/csm/credit/CASCRED002.mvc" ><span>중소기업 교육지원</span></a></li><li><a id="lv3Link512" href="/chp/iutf/cas/csm/credit/CASCRED001.mvc" ><span>신용관리서비스</span></a></li><li><a id="lv3Link514" href="/chp/iutf/hp/bbs/CHPCMBD101VM0.mvc?q_ns=37" ><span>정책뉴스관</span></a></li></ul></li></ul><ul id="ul52"><li><span><span>입찰정보</span></span><ul id="lv2Link52"><li><a id="lv3Link521" href="/chp/iutf/cas/csm/information/CASINFO001.mvc" ><span>입찰정보</span></a></li></ul></li></ul><ul id="ul53"><li><span><span>기업홍보관</span></span><ul id="lv2Link53"><li><a id="lv3Link531" href="/chp/iutf/cas/csm/company/CASCOMP001.mvc" ><span>홍보내용 조회</span></a></li><li><a id="lv3Link532" href="/chp/iutf/cas/csm/company/CASCOMP002.mvc" ><span>우리회사 홍보</span></a></li></ul></li></ul></div></li></ul>
                </nav>
                <div class="s_link">
                    <ul>
                        <li><a href="chp/iutf/ib/elfi/bi/DirectInsurance/CIBCOSB100VM0.mvc" class="direct">아이콘</a></li>
                        <li><a href="#" class="search"><span class="offscreen">검색</span><i class="guide_p" style="top:-15px;left:3px"><i></i></i></a></li>
                        <li><a href="#" class="sitemap"><span class="offscreen">사이트맵</span></a></li>
                    </ul>
                </div>
            </div>
           <div class="gnb_bg"></div>
            <div id="sgiSearchLayer" class="dialog sgi_search_layer">
                <div class="sgi_search_container">
                    <div class="sgi_search">
                            <fieldset>
                                <legend>검색</legend>
                                <div class="search_form del">
                                    <input type="text" id="sgiSearch" title="어떤 서비스를 찾으세요?" placeholder="어떤 서비스를 찾으세요?" />
                                    <button type="submit" class="btn_search" id="btn_wd"><span class="offscreen">검색</span></button>
                                </div>
                            </fieldset>
                    </div>
                    <div class="sgi_keyword">
                        <div class="sgi_keyword_item">
                            <h3>추천검색어</h3>
                            <div class="sgi_keyword_list" id="keywordSearch">
                                <ul>
                                    <li><a href="#">#매출채권신용보험</a></li>
                                    <li><a href="#">#이행보증</a></li>
                                    <li><a href="#">#신용보험</a></li>
                                    <li><a href="#">#전자서명</a></li>
                                    <li><a href="#">#개인정보동의</a></li>
                                    <li><a href="#">#사서함</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="sgi_keyword_item">
                            <h3>최근검색어</h3>
                            <div class="sgi_keyword_list">
                               <ul id="ulStorageText">
                                   <!-- 
                                   <li><a href="#">#이행(계약)</a></li>
                                   <li><a href="#">#이행(입찰)</a></li>
                                   <li><a href="#">#이행(계약)</a></li>
                                   <li><a href="#">#이행(하자)</a></li>
                                   <li><a href="#">#이행(선급금)</a></li>
                                   <li><a href="#">#신원보증보험</a></li>
                                    -->
                               </ul>
                           </div>
                        </div>
                    </div>
                    <button type="button" class="btn_close_search"><span class="offscreen">검색창닫기</span><i class="guide_p" style="top:-15px;left:23px"><i></i></i></button>
                </div>
            </div>
            
            <!-- sitemap : S -->
            <div class="sgi_sitemap">
                <div class="sgi_sitemap_head">
                    <div class="sgi_section">
                        <h2>전체메뉴</h2>
                        <button type="button" class="btn_close_sitemap"><span class="offscreen">전체메뉴닫기</span></button>
                    </div>
                </div>
                <div class="sgi_sitemap_menu">
                    <div class="nano">
                        <div id="sgi_sitemap_div" class="nano-content" tabindex="0">
                            <!--
                            <div class="sgi_sitemap_item">
                                <h3 class="f_en">MY SGI</h3>
                                <div class="menu">
                                    <ul>
                                        <li><span><span>보험가입</span></span>
                                            <ul>
                                                <li><a href="#"><span>개인정보동의</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sgi_sitemap_item">
                                <h3>상품</h3>
                            </div>
                        </div>
                         -->
                    </div>
                </div>
            </div>
            <!-- sitemap : E -->
        </header>    
        

        
        <div id="container">

    
            <div class="main_head">
                <div class="inner">
                    <div class="main_visual">
                        <div class="main_visual_slide"> 
                            <div class="main_visual_item">
                            <h1></h1>
                                <div style="box-sizing: border-box;position: relative; width: 100%;height: 100%;background-size: 100% 100%;padding:136px 53px 25px 53px">
                                   <!--여기에 작성해 주시면 됩니다-->
                                   <div>테스트 롯데POC</div>
                                    <div class="tableAndPageNationWrapper">
             
             						
                                        <div class="flexColumnStyleWrapper">
                                         	<div style="flex-grow:1">
	                                        <div>
	                                            <div style="cursor:pointer;"><font size="4">Transaction 1</font></div>
	                                        </div>
                                            <!-- 1테이블 -->
                             				  <div class="flexColumnStyle">
          								
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
                                      </div>
                                            </div>
                                            <!-- 2테이블 -->
                                           <div style="flex-grow:1">
	                                        <div>
	                                            <div style="cursor:pointer;"><font size="4">Transaction 2</font></div>
	                                        </div>
                                        
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

                             
                                    <!-- 여기에 작성해 주시면 됩니다 -->
                                </div>  
                            </div>
                        </div>
                     
                    </div>
<% 
InetAddress inet= InetAddress.getLocalHost(); 
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:sss"); //날자 포맷
    String current_date = sdf.format(new Date());
%>    
                
                    <div class="main_login">
                        <div class="login_link">
                            
                            <div class="btn_set">
                                                                 
                                     <span>
                                           <h3><strong class="c1"><font color="REd">서버 수행 시간: </strong></font></h3>
                                           <br><font size="4" color="black"><%=current_date%><br></font>
                                     </span>
                                     <br>
									 <span>
									       <h3><strong class="c1"><font color="RED">서버  IP: </strong></font></h3>
									       <br><font size="4" color="black"><%=inet.getHostAddress()%><br></font>
									 
									 </span>
									 <br>
									 <span>
									       <h3><strong class="c1"><font color="RED">서버 이름: </strong></font>
									       <br><font size="4" color="black"><%=inet.getHostName()%></font></h3>
									 </span><br><br>   
                          </div>
                        </div>
                        <div style="border:1px solid #dedede; width:190px; height:80px; line-height:70px; color:#666;font-size:30px; text-align:center;" id="clock">
                      </div>
                    </div>
                
                </div>
            </div>

    
</body>
</html>
