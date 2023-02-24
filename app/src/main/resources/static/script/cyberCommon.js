
function poliView(poliNo){
	var url="/ho/cd/HOCD0011P00.nhl?poliNo="+poliNo;
	var opt = "statusbar=no, scrollbars=yes, width=800px, height=650px";
	
	popupGet(url,"poliView", opt);
	
}
function goBack(value){
	if(value==""){
		history.back();
	}else{
		history.back(-value);
	}
	
}
function cyberInit(){
	
	//필드체크오류인경우 오류표시
	if($("#errFieldCheck").val()!=""){
		wrapWindowByMask($("#errFieldCheck").val());
		$("#errFieldCheck").val("");
	}
	//정상처리가 아닌경우 msg를 표출함.
	if($.trim($("#errMsgCd").val())!=""){
		if($("#errMsgCd").val() =="0000" || $("#errMsgCd").val()=="1" || $("#errMsgCd").val()=="00"|| $("#errMsgCd").val()=="0000000" || $("#errMsgCd").val()=="CMI0004" || $("#errMsgCd").val()=="LCI0001" || $("#errMsgCd").val()=="CMI0008" || $("#errMsgCd").val()=="CMI0014"  || $("#errMsgCd").val()=="0" || $("#errMsgCd").val()=="LCB0329" || $("#errMsgCd").val()=="CMB0012" || $("#errMsgCd").val()=="CMB0005" || $("#errMsgCd").val()=="PYB0010" ||  (uri.substring(uri.length,uri.length-9)!="40M00.nhl" && $("#errMsgCd").val()=="CMB0037") || (uri.substring(uri.length,uri.length-9)=="50M03.nhl" && $("#errMsgCd").val()=="CMI0001") || (uri.substring(uri.length,uri.length-9)=="50M04.nhl" && $("#errMsgCd").val()=="CMI0001")){ 
			//|| $("#errMsgCd").val()=="PYB0010"
		}else{
			var errCd=$("#errMsgCd").val();
			var errMsg=$("#errMsgCont").val();
			if(errMsg.indexOf("해당자료가 없습니다")==-1){
				wrapWindowByMask("에러코드 : " + errCd , errMsg);
				// $("#errMsgCont").val()
			}
		}
		$("#errMsgCd").val("");
		$("#errMsgCont").val("");
	}
	
	$("#errBtn").click(function(){
		if($("#errGoUrl").val()==""){
			history.back(0);
		}else{
			location.href=$("#errGoUrl").val();
		}
		//$("#contents").show();
		//$(".mask").hide();
		//$("#lyrBasic").hide();
		
	});
	
	

}


function wrapWindowByMask(msgId,msg){
	var win=$(window);
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();
	if(maskHeight>$(window).height()){
		maskHeight=$(window).height();
	}
	
	

	$(".mask").css({"width": $(document).width(), "height": $(document).height()});
	$(".mask").fadeTo("slow", 0.8);
	$(".mask").fadeIn(250);

	$("#contents").hide();
	//.css("width").replace("px", "")
	//.css("height").replace("px", "")
	var leftPostion = (maskWidth - $("#lyrBasic").width()) / 2; //.replace("px", "")
	var topPosition =  win.scrollTop() + (maskHeight - $("#lyrBasic").height()) / 2; //.replace("px", "")

	//var leftPostion = win.scrollTop() + ((win.height() -$("#lyrBasic").height()) /2);
	//var topPosition= win.scrollLeft()+((win.width() - $("#lyrBasic").width()) /2);
	
	
	
	$("#lyrBasic").css({"left":leftPostion + "px", "top":topPosition + "px"});
	$("#lyrBasic").fadeIn(100);
	
	$("#errMsgShow").html(msg);
	$("#errMsgId").html(msgId);
	$("#lyrBasic").show();
	$("#errBtn").focus();
}

function warpByMask(){
	$(".mask").css({"width": $(document).width(), "height": $(document).height()});
	$(".mask").fadeTo("slow", 0.8);
	$(".mask").fadeIn(100);
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

	//var leftPostion = win.scrollTop() + ((win.height() -$("#lyrBasic").height()) /2);
	//var topPosition= win.scrollLeft()+((win.width() - $("#lyrBasic").width()) /2);
	
	//css("height")

	var leftPostion = (maskWidth - $("#process").width()) / 2;
	var topPosition = win.scrollTop() + (maskHeight - $("#process").height()) / 2;

	//var leftPostion = (maskWidth - $("#process").css("width").replace("px", "")) / 2;
	//var topPosition = win.scrollTop() + (maskHeight - $("#process").css("height").replace("px", "")) / 2;

	
	$("#process").css({"left":leftPostion + "px", "top":topPosition + "px"});
	$("#process").fadeIn(100);
	$("#process").show();
}
function progressStatusClose(){
	$(".mask").hide();
	$("#process").hide();
}


function loginProcess(){
	var win=$(window);
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();
	if(maskHeight>$(window).height()){
		maskHeight=$(window).height();
	}

	$(".mask").css({"width":  $(document).width(), "height": $(document).height(),"background-color": "#FFF"});
	$(".mask").fadeTo("fast",0.8);

	//var leftPostion = win.scrollTop() + ((win.height() -$("#lyrBasic").height()) /2);
	//var topPosition= win.scrollLeft()+((win.width() - $("#lyrBasic").width()) /2);
	
	//css("height")

	var leftPostion = (maskWidth - $("#loginProcess").width()) / 2;
	var topPosition = win.scrollTop() + (maskHeight - $("#loginProcess").height()) / 2;

	//var leftPostion = (maskWidth - $("#process").css("width").replace("px", "")) / 2;
	//var topPosition = win.scrollTop() + (maskHeight - $("#process").css("height").replace("px", "")) / 2;

	
	$("#loginProcess").css({"left":leftPostion + "px", "top":topPosition + "px"});
	$("#loginProcess").fadeIn(100);
	$("#loginProcess").show();
	$("#btnLoginR").focus();
}

function loginProcessClose(){
	$(".mask").hide();
	$("#loginProcess").hide();
}


$(function(){
	$.datepicker.regional['ko'] = {
		closeText: '닫기',
		prevText: '이전달',
		nextText: '다음달',
		currentText: '오늘',
		monthNames: ['1월','2월','3월','4월','5월','6월',
		'7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월',
		'7월','8월','9월','10월','11월','12월'],
		dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		weekHeader: 'Wk',
		dateFormat: 'yy-mm-dd',
		yearRange : "-30",
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '년'};
	$.datepicker.setDefaults($.datepicker.regional['ko']);
});

function loginRemainOpen(){
	
	var win=$(window);
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();
	if(maskHeight>$(window).height()){
		maskHeight=$(window).height();
	}

	$(".mask").css({"width": $(document).width(), "height": $(document).height()});
	$(".mask").fadeTo("slow", 0.8);
	$(".mask").fadeIn(100);

	
	var leftPostion = (maskWidth - $("#lyrBasic").css("width").replace("px", "")) / 2; //.replace("px", "")
	var topPosition =  win.scrollTop() + (maskHeight - $("#lyrBasic").css("height").replace("px", "")) / 2; //.replace("px", "")

	$("#lyrBasic").css({"left":leftPostion + "px", "top":topPosition + "px"});
	$("#lyrBasic").fadeIn(100);
	
	$("#lyrBasic").show();
}

//이니텍 암호화 데이타 전송 > 제거됨 20170824 단순 form submit
function CheckSendForm(readForm){
    		readForm.submit();
    return; //반드시 false를 return;
}

function openPop(url,name,w,h){
	
	var opt = "statusbar=no, scrollbars=yes, width="+ w +"px, height=" + h + "px";
	
	popupGet(url, name, opt);
	
}

//이니텍 전자서명 암호화 데이타 전송 > 제거됨 20170824 단순 form submit
function CheckSignForm(readForm){
	progressStatus(); //처리중
    		readForm.submit();
    return; //반드시 false를 return;
}

function getSignData(orgData){
	var data="";
	var arrData=orgData.split("&");
	for(var i=0;i<arrData.length;i++){
		var splitData=arrData[i].split("=");
		data= AddSignValue(data, splitData[0], splitData[1]);
	}
	//getSignData=data;
	return data;
}

function getSDate(value){
	 var s1=replaceAll(value,"-","");
  	 return new Date(s1.substr(0,4), s1.substr(4,2)-1, s1.substr(6,2));;
 }
 

function replaceAll(inputString, targetString, replacement){
		var v_ret = null;
		var v_regExp = new RegExp(targetString,"g");
		v_ret = inputString.replace(v_regExp, replacement);
		return v_ret;
}

function leadingZeros(n,digits){
    var zero='';
    n=n.toString();
    if(n.length<digits){
        for(i=0;i<digits-n.length;i++){

            zero+='0';
        }
    }
    return zero+n;
}

function AddSignValue(data, name, value){
	if(data!="") data += "&";
	data += name;
	data += "=";
	data += value;
	return data;
}