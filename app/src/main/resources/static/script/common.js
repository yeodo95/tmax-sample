Number.prototype.to2 = function(){ return (this > 9 ? "" : "0")+this; };
Date.MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
Date.DAYS   = ["Sun", "Mon", "Tue", "Wed", "Tur", "Fri", "Sat"];

Date.prototype.getDateString = function(dateFormat){
     var result = "";
     
     dateFormat = dateFormat == 8 && "YYYY.MM.DD" ||
     dateFormat == 6 && "hh:mm:ss" ||
     dateFormat || "YYYY.MM.DD hh:mm:ss" ||
     dateFormat || "YYYY-MM-DD hh:mm";
    
     for (var i = 0; i < dateFormat.length; i++){
          result += dateFormat.indexOf("YYYY", i) == i ? (i+=3, this.getFullYear()          ) :
          dateFormat.indexOf("YY",   i) == i ? (i+=1, String(this.getFullYear()).substring(2)) :
          dateFormat.indexOf("MMM",  i) == i ? (i+=2, Date.MONTHS[this.getMonth()]          ) :
          dateFormat.indexOf("MM",   i) == i ? (i+=1, (this.getMonth()+1).to2()             ) :
          dateFormat.indexOf("M",    i) == i ? (     this.getMonth()+1                     ) :
          dateFormat.indexOf("DDD",  i) == i ? (i+=2, Date.DAYS[this.getDay()]              ) :
          dateFormat.indexOf("DD",   i) == i ? (i+=1, this.getDate().to2()                  ) :
          dateFormat.indexOf("D"   , i) == i ? (     this.getDate()                        ) :
          dateFormat.indexOf("hh",   i) == i ? (i+=1, this.getHours().to2()                 ) :
          dateFormat.indexOf("h",    i) == i ? (     this.getHours()                       ) :
          dateFormat.indexOf("mm",   i) == i ? (i+=1, this.getMinutes().to2()               ) :
          dateFormat.indexOf("m",    i) == i ? (     this.getMinutes()                     ) :
          dateFormat.indexOf("ss",   i) == i ? (i+=1, this.getSeconds().to2()               ) :
          dateFormat.indexOf("s",    i) == i ? (     this.getSeconds()                     ) :
          (dateFormat.charAt(i));
     }
     return result;
};

(function($){
	$.fn.jqueryPager = function(options){
		var defaults ={
			rowsize: 10
			, currPage: 1
			, pageTotal: 0
			, pagesize: 10
			, firstText: "[처음]"
			, prevText: "[이전]"
			, nextText: "[다음]"
			, lastText: "[끝]"
		};
		
		var subOption = $.extend(true, defaults, options); // defaults�� option�� �����Ѵ�.
		
		return this.each(function(){
		
			var currPage = subOption.currPage*1;  // ���� ������
			var rowsize = subOption.rowsize*1;   // ��� ����Ʈ ��
			var pagesize = subOption.pagesize*1;  // 1~10���� ��� 
			var pageTotal = subOption.pageTotal*1;  // �� ������ ��
			var firstText = subOption.firstText;
			var prevText = subOption.prevText;
			var nextText = subOption.nextText;
			var lastText = subOption.lastText;

			if (!rowsize) rowsize = 10;     // ��� ����Ʈ���� ������ �ʱⰪ 10���� ����
			if (!pagesize) pagesize = 10;     // ��� �ʱⰪ�� ������ 10���� ����
			if (!pageTotal) pageTotal = 0;
			
			if (!firstText) firstText = "[처음]";
			if (!prevText) prevText = "[이전]";
			if (!nextText) nextText = "[다음]";
			if (!lastText) lastText = "[끝]";
			
			var pageTotalCnt = Math.ceil(pageTotal/rowsize);
			var pageBlockCnt = Math.ceil(currPage/pagesize);
			var sPage, ePage;
			var html = "";
			
			if (pageBlockCnt > 1){
				sPage = (pageBlockCnt-1)*pagesize+1;
			}else{
				sPage = 1;
			}
			
			if ((pageBlockCnt*pagesize) >= pageTotalCnt){
				ePage = pageTotalCnt;
			}else{
				ePage = pageBlockCnt*pagesize;
			}
			
			if (sPage > 1){
				html += '<span class="clickable" onclick="goPage(' + 1 + ');" title="' + firstText + '">' + firstText + '</span>';
				html += '<span class="clickable" title="' + prevText + '" onclick="goPage(' + (sPage-pagesize) + ');">&nbsp;' + prevText + '</span>';
			}
			
			for (var i=sPage; i<=ePage; i++){
				if (currPage == i){
					html += '&nbsp;<strong class="first" title="' + i + '">' + i + '</strong>';
				}else{
					html += '&nbsp;<span class="clickable" title="' + i + '" onclick="goPage(' + i + ');">' + i + '</span>';
				}
			}
			
			if (ePage < pageTotalCnt){
				html += '<span class="clickable" title="' + nextText + '" onclick="goPage(' + (ePage+1) + ');">&nbsp;' + nextText + '</span>';
				html += '<span class="clickable" title="' + lastText + '" onclick="goPage(' + pageTotalCnt + ');">&nbsp;' + lastText + '</span>';
			}
			
			$(".list").empty().append(html);
		
		});
	
	};
	
	$.fn.loadingView = function(options){
	    var defaults ={
	         viewId: "#loadingLayer"
	         , dataId: ""
	         , startTime: 500
	         , endTime: 500
	    };
	    
	    var subOption = $.extend(true, defaults, options);
	    
	    return this.each(function(){
	         var viewId = subOption.viewId;
	         var dataId = subOption.dataId;
	         var startTime = subOption.startTime;
	         var endTime = subOption.endTime;

	         $(viewId).hide();
	         $(viewId)
	         .ajaxStart(function(){
	        	 if(dataId != ""){
					$(viewId).css("position", "absolute");
					$(viewId).css("left", $(dataId).offset().left);
					$(viewId).css("top", $(dataId).offset().top);
					$(viewId).css("width", $(dataId).css("width")); 
					$(viewId).css("height", $(dataId).css("height"));
	        	 }
				$(this).show();
	         }) 
	         .ajaxStop(function(){
	              $(this).hide();
	         });
	  });
	};
	
	$.fn.loadingAddView = function(options){
	    var defaults ={
	    	viewId: "#loadingLayer"
	        , addViewId: ".listMore"
	    };
	    
	    var subOption = $.extend(true, defaults, options);
	    
	    return this.each(function(){
	         var viewId = subOption.viewId;
	         var addViewId = subOption.addViewId;

	         $(viewId).hide();

	         $(viewId)
	         .ajaxStart(function(){
	        	 if(addViewId != ""){
	        		 $(addViewId).hide();
	        	 }

        		 $(this).css("text-align", "center");
        		 $(this).css("vertical-align", "middle");
	        	 $(this).show();
	         })
	         .ajaxStop(function(){
	        	 $(this).hide();
	        	 
	        	 if(addViewId != ""){
	        		 $(addViewId).show();
	        	 }
	         });
	  });
	};
	
	$.fn.loadingShow = function(options){
	    var defaults ={
	    	viewId: "#loadingLayer"
	        , addViewId: ".listMore"
	    };
	    
	    var subOption = $.extend(true, defaults, options);
	    
	    return this.each(function(){
	         var viewId = subOption.viewId;
	         var addViewId = subOption.addViewId;

        	 if(addViewId != ""){
        		 $(addViewId).hide();
        	 }

    		 $(viewId).css("text-align", "center");
    		 $(viewId).css("vertical-align", "middle");
        	 $(viewId).show();
	  });
	};
	
	$.fn.loadingHide = function(options){
	    var defaults ={
	    	viewId: "#loadingLayer"
	        , addViewId: ".listMore"
	    };
	    
	    var subOption = $.extend(true, defaults, options);
	    
	    return this.each(function(){
	         var viewId = subOption.viewId;
	         var addViewId = subOption.addViewId;

        	 $(viewId).hide();
        	 
        	 if(addViewId != ""){
        		 $(addViewId).show();
        	 }
	  });
	};

	Number.prototype.format = function(){
		if(this==0) return 0;

		var reg = /(^[+-]?\d+)(\d{3})/;
		var n = (this + '');

		while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

		return n;
	};

	String.prototype.format = function(){
		var num = parseFloat(this);
		if(isNaN(num)) return "0";

		return num.format();
	};
})($);


function getNumeric(obj){
	var patt = /[\ㄱ-ㅎ가-힣]/g;

    return obj.replace(patt, '');
}

function isNumeric(obj){
	var patt=/^([0-9]{1,20})$/;
	if(!patt.test(obj)) return false;
	
    return true;
}

function formSubmit(id, url){
	$("#" + id).attr({
		action: url
		, method: "POST"
		, target: "_self"
	}).submit();
}

function formSubmitMenu(id, menu_code, url){
	$("#" + id + " #menu_code").val(menu_code);
	$("#" + id).attr({
		action: url
		, method: "POST"
		, target: "_self"
	}).submit();
}

function pageMove(url){
	location.href = url;
}

function setTimeCheck(v){
	var result = "";
	
	if(v.substr(0,1) == "0"){
		result = v.substr(1);
	}else{
		result = v;
	}
	return result;
}

//콤마추가하기
function addComma2(obj,fLen){ 
	var fLen = fLen || 2; 
	var strValue = obj.value.replace(/,|\s+/g,'');
 	var strBeforeValue = (strValue.indexOf('.') != -1)? strValue.substring(0,strValue.indexOf('.')) :strValue ;
 	var strAfterValue = (strValue.indexOf('.') != -1)? strValue.substr(strValue.indexOf('.'),fLen+1) : '' ;
	
 	if(isNaN(strValue)){
 		alert(strValue.concat(' -> 숫자가 아닙니다.'));
		
 		return false;
 	}
 	
 	var intLast = strBeforeValue.length-1;
	var arrValue = new Array;
 	var strComma = '';
 	
 	for(var i=intLast,j=0; i >= 0; i--,j++){ 
		if(j !=0 && j%3 == 0){ 
			strComma = ',';
 		}else{
 			strComma = '';
 		}
		arrValue[arrValue.length] = strBeforeValue.charAt(i) + strComma ;
	}
	obj.value= arrValue.reverse().join('') + strAfterValue; 
}

//콤마추가하기
function addComma(obj,fLen){ 
	if(event.keyCode == 37 || event.keyCode == 39){ 
		return;
 	}
	var fLen = fLen || 2; 
	var strValue = obj.value.replace(/,|\s+/g,'');
	strValue=firstRemoveZero(strValue); // 맨앞자리 0을 제거한다.
	var strBeforeValue = (strValue.indexOf('.') != -1)? strValue.substring(0,strValue.indexOf('.')) :strValue ;
 	var strAfterValue = (strValue.indexOf('.') != -1)? strValue.substr(strValue.indexOf('.'),fLen+1) : '' ;
	
 	if(isNaN(strValue)){
 		alert(' 숫자가 아닙니다.\n\n0-9의 정수만 허용합니다.');
 		obj.value = "";
		return false;
 	}
 	var intLast = strBeforeValue.length-1;
	var arrValue = new Array;
 	var strComma = '';
 	
 	for(var i=intLast,j=0; i >= 0; i--,j++){
		if(j !=0 && j%3 == 0){ 
			strComma = ',';
 		}else{
 			strComma = '';
 		}
		arrValue[arrValue.length] = strBeforeValue.charAt(i) + strComma ;
	}
	obj.value= arrValue.reverse().join('') + strAfterValue; 
}

function delComma(num){
	if(num==""){
		return "";
	}else{
		return (num.replace(/\,/g,""));
	}
}

String.prototype.cut = function(len){
     var str = this;
     var l = 0;
     
     for(var i=0; i<str.length; i++){
    	 l += (str.charCodeAt(i) > 128) ? 2 : 1;
    	 if(l > len){
    		 return str.substring(0, i);
    	 }
     }
     return str;
}

 /** 
 * bool String::bytes(void)
 * 해당스트링의 바이트단위 길이를 리턴합니다. (기존의 length 속성은 2바이트 문자를 한글자로 간주합니다)
 */
String.prototype.bytes = function(){
     var str = this;
     var l = 0;
     
     for (var i=0; i<str.length; i++) l += (str.charCodeAt(i) > 128) ? 2 : 1;
     return l;
}
 
function popupGet(url, name, opt, flagCenter){
	var leftPostion = 0;
	var topPosition = 0;
	var isNotCenter = false;
	
	if(flagCenter) isNotCenter = flagCenter;
	
	if(!isNotCenter){
		var optArr = opt.split(",");
		
		for(var i = 0; i < optArr.length; i++){
			if(optArr[i].indexOf("width") > -1){
				var tmpOpt = optArr[i].split("=");
				var w = tmpOpt[1].replace("px", "");
				
				leftPostion = (screen.width - w) / 2;
			}else if(optArr[i].indexOf("height") > -1){
				var tmpOpt = optArr[i].split("=");
				var h = tmpOpt[1].replace("px", "");
				
				topPosition = (screen.height - h) / 2;
			}
		}
		opt += ",top=" + topPosition + ",left=" + leftPostion;
	}
	window.open(url, name, opt).focus();
	
	return false;
}
 
function popupPost(formName, url, name, opt, flagCenter){
	var leftPostion = 0;
	var topPosition = 0;
	var isNotCenter = false;
	
	if(flagCenter) isNotCenter = flagCenter;
	
	if(!isNotCenter){
		var optArr = opt.split(",");
		for(var i = 0; i < optArr.length; i++){
			if(optArr[i].indexOf("width") > -1){
				var tmpOpt = optArr[i].split("=");
				var w = tmpOpt[1].replace("px", "");
				
				leftPostion = (screen.width - w) / 2;
			}else if(optArr[i].indexOf("height") > -1){
				var tmpOpt = optArr[i].split("=");
				var h = tmpOpt[1].replace("px", "");
				
				topPosition = (screen.height - h) / 2;
			}
		}
		opt += ",top=" + topPosition + ",left=" + leftPostion;
	}

	window.open(url, name, opt);

	$("form[name='" + formName + "']").attr("action", url);
	$("form[name='" + formName + "']").attr("target", name);
	$("form[name='" + formName + "']").submit();

	return false;	
}

function fncCommonPopup(pUrl, pWinName, pWidth, pHeight, pTop, pLeft, scrollbarsYN){
	var features  = "";
	
	if(navigator.appVersion.indexOf('MSIE 6') > 0){
		pHeight = pHeight+30;
	}
	
	features  = features + "width=" + pWidth + "px, height=" + pHeight + "px, top=" + pTop + "px, left=" + pLeft + "px, ";
	features  = features + "resizeable=no, status=yes, scrollbars="+scrollbarsYN;

	var win  = window.open(pUrl, pWinName, features);
}

//다음칸이동 : onkeyup="KeyCheck(this,this.size,this.form.field2)"
function KeyCheck(objName,objSize,nextObjName){
/*
  if(objName.value.length == objSize){
    nextObjName.focus();
    return;
  }
*/
}

//사업자등록번호 유호성검사
function ValidateVendorNo(field){
	var v1,v2,v3,v4,v5,v6,v7;
	var v8,v9,v10;
	var x,y,z,c,t,xa,xb;
	var result = false;
 
	field = field.replace(/-/g,"");
	
	if(field.length == 10){
		result=true;
		
		if ((field == '2044902645') || (field == '4168302079') || (field == '5058302973') || (field == '2222222222') || (field == '3333333333') || (field == '4444444444') || (field == '5555555555') || (field == '6666666666')){
			return true;
		}

		v1 = field.charAt(0);
		v2 = field.charAt(1);
		v3 = field.charAt(2);
		v4 = field.charAt(3);
		v5 = field.charAt(4);
		v6 = field.charAt(5);
		v7 = field.charAt(6);
		v8 = field.charAt(7);
		v9 = field.charAt(8);
		v10 = field.charAt(9);

		w = (parseInt(v1,10) * 1) + (parseInt(v2,10) * 3) + (parseInt(v3,10) * 7);
		w = parseInt(w,10) + (parseInt(v4,10) * 1) + (parseInt(v5,10) * 3) + (parseInt(v6,10) * 7);
		w = parseInt(w,10) + (parseInt(v7,10) * 1) + (parseInt(v8,10) * 3);

		x = (parseInt(v9,10) * 5);

		if(x >= 10){
			xb = x % 10;
			xa = (x - xb) / 10;
			y = w + xa + xb;
		}else{
			y = w + x;
		}

		z1 = y / 10;
		z2 = y % 10;

		if(z2 != 0){
			z2 = 10 - z2;
		}

		if(z2 != v10){
			return false;
		}
	}else{
		result = false;
	}
	return result;
}

//날짜 선택
function f_datepicker(obj){
	$(obj).datepicker({
		showOn: "button",
        buttonImage: "/image/common/ico/ico_cal.gif", //버튼이미지에 사용할 이미지 경로
		buttonImageOnly: true,  //버튼이미지를 나오게 한다.
		dateFormat: 'yy-mm-dd',  //데이터 포멧형식
		minDate: '-6Y',      //오늘 부터 3달전까지만 선택 할 수 있다.
		maxDate: '+6Y',     //오늘 부터 36개월후까지만 선택 할 수 있다.
		changeMonth: true,    //달별로 선택 할 수 있다.
		changeYear: true,     //년별로 선택 할 수 있다.
		showOtherMonths: true,  //이번달 달력안에 상/하 빈칸이 있을경우 전달/다음달 일로 채워준다.
		selectOtherMonths: true, 
		showButtonPanel: false  //오늘 날짜로 돌아가는 버튼 및 닫기 버튼을 생성한다.
	}).datepicker("show");
}

function toggleView(id){
	$("#" + id).toggle();
}

function periodCheckId(formName, sId, eId){
	var sDate = $("#" + formName + " #" + sId).val();
	var eDate = $("#" + formName + " #" + eId).val();

	if(sDate > eDate){
		alert("날짜가 잘못 되었습니다.");
		$("#" + formName + " #" + sId).focus();
		return false;
	}
	return true;
}

function periodCheckName(formName, sName, eName){
	var sDate = $("#" + formName + " input[name=" + sName + "]").val();
	var eDate = $("#" + formName + " input[name=" + eName + "]").val();
	
	if(sDate > eDate){
		alert("시작일이 종료일보다 작아야합니다.\n다시 입력하세요.");
		$("#" + formName + " input[name=" + sName + "]").focus();
		return false;
	}
	return true;
}

function checkMinLength(val, len){
	var isValid = true;
	if((val.length > 0) && (val.length < len)){
		isValid = false;
	}
	return isValid;
}

function setFillZero(val, len){
	if(val == "") return "";
	
	var num = val;
	
	if(num.length >= len) return num.substring(0, len);
	
	var tmpVal = "";
	
	for(var i = 0; i < len-1; i++) tmpVal += "0";

	return tmpVal + num;
}

function fncCheckByte(objTitle, objID, intMaxBytes){    
   var len = 0, j;    
   var strCurrentText = $('#'+objID).val();
   var bool = true;
   
   for(i = 0, j = strCurrentText.length; i < j; i++, len++){
	   if ((strCurrentText.charCodeAt(i) < 0) || (strCurrentText.charCodeAt(i) > 127)){      
		   len = len + 1;     
       }   
       if (len >= intMaxBytes){      
           alert(objTitle+"은 "+intMaxBytes + "Bytes 까지 입력가능합니다.");
           document.getElementById(objID).value = strCurrentText.substring(0, i);
           document.getElementById(objID).blur();
           bool = false;
           return bool;
       }
   }
   return bool;
}

//한글 및 특수문자 방지
function imeModeDisabled(mode, loc){
	var regExp = "";
	var msg = "";
	
	//한글방지
	if(mode == 1){
		regExp = /[ㄱ-ㅎ가-힣]/gi;
		msg = "한글은 입력할 수 없습니다.";
	}else if(mode == 2){ //한글, 특수문자 방지
		regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\ \ㄱ-ㅎ가-힣]/gi;
		msg = "한글과 특수문자 및 공백은 입력할 수 없습니다.";
	}else if(mode == 3){ //한글, 특수문자 방지(_. 제외)
		regExp = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"\ \ㄱ-ㅎ가-힣]/gi;
		msg = "한글과 특수문자 및 공백은 입력할 수 없습니다.";
	}else if(mode == 4){ //한글, 특수문자 방지(@ 제외)
		regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>\#$%&\\\=\(\'\"\ \ㄱ-ㅎ가-힣]/gi;
		msg = "한글과 특수문자 및 공백은 입력할 수 없습니다.";
	}else if(mode == 5){ //한글, 특수문자 방지(_.@ 제외)
		regExp = /[\{\}\[\]\/?,;:|\)*~`!^\-+<>\#$%&\\\=\(\'\"\ \ㄱ-ㅎ가-힣]/gi;
		msg = "한글과 특수문자 및 공백은 입력할 수 없습니다.";
	}else if(mode == 6){ //특수문자 방지
		regExp = /[\{\}\[\]\/?,;:|\)*~`!^\-_+<>\#$%&\\\=\(\'\"\ ]/gi;
		msg = "특수문자 및 공백은 입력할 수 없습니다.";
	}else if(mode == 7){ //특수문자 방지
		regExp = /[\{\}\[\]\/?,;:|\)*~`!^\-_+<>\#$%&\\\=\(\'\"]/gi;
		msg = "특수문자는 입력할 수 없습니다.";
	}else if(mode == 8){
		regExp = /[^ㄱ-ㅎ가-힣]/gi;
		msg = "한글만 입력할 수 있습니다.";
	}else if(mode == 9){ //특수문자(\'" 만 입력불가)
		regExp = /[\\\'\"]/gi;
		msg = "특수문자(\\\'\")는 입력할 수 없습니다.";
	}
	
	if(regExp.test(loc.value)){
		alert(msg);
		loc.value = "";
		loc.focus();
	}
}

function onlyNumber(loc){
	if(/[^0123456789]/g.test(loc.value)){
		alert("숫자가 아닙니다.\n\n0-9의 정수만 허용합니다.");
		loc.value = "";
		loc.focus();
	}
}

function onlyNumberDot(loc){
	if(/[^0123456789.]/g.test(loc.value)){
		alert("0-9의 정수와 .만 허용합니다.");
		loc.value = "";
		loc.focus();
	}
}

function onlyNumberComma(loc){
	if(/[^0123456789,]/g.test(loc.value)){
		alert("0-9의 정수와 ,만 허용합니다.");
		loc.value = "";
		loc.focus();
	}
}

function checkPwdOld(uid, upw){
	if(!/^[a-zA-Z0-9]{6,38}$/.test(upw)){
		alert("비밀번호는 숫자와 영문자 조합으로 6 ~ 32자리를 사용해야 합니다.");
		return false;
	}
	
	var chk_num = upw.search(/[0-9]/g);
	var chk_eng = upw.search(/[a-z]/ig);
	
	if(chk_num < 0 || chk_eng < 0){
		alert("비밀번호는 숫자와 영문자를 혼용하여야 합니다.");
		return false;
	}
	if(/(\w)\1\1\1/.test(upw)){
		alert("비밀번호에 같은 문자를 4번이상 사용하실 수 없습니다.");
		return false;
	}
	if(uid != "" && upw.search(uid) > -1){
		alert("아이디가 포함된 비밀번호는 사용하실 수 없습니다.");
		return false;
	}
	return true;
}

function checkPwd(uid, upw){
	var checkPwd=/^.*(?=.{4,10})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
	
	if(!checkPwd.test(upw)){	
		alert("비밀번호는 숫자와 영문자, 특수문자 조합으로 10자리를 사용해야 합니다.");
		return false;
	}
	
	var chk_num = upw.search(/[0-9]/g);
	var chk_eng = upw.search(/[a-z]/gi);
	var chk_engU = upw.search(/[A-Z]/gi);
	var chk_spe = upw.search(/\W|\s/g);
	
	if(chk_num < 0 || (chk_eng < 0 && chk_engU < 0) || chk_spe < 0){
		alert("비밀번호는 숫자와 영문자, 특수문자를 혼용하여야 합니다.");
		return false;
	}
	if(/(\w)\1\1/.test(upw)){
		alert("비밀번호에 같은 문자를 3번이상 사용하실 수 없습니다.");
		return false;
	}
	if(uid != "" && upw.search(uid) > -1){
		alert("아이디가 포함된 비밀번호는 사용하실 수 없습니다.");
		return false;
	}
	var tuid=uid.split("@")[0];

	if(tuid.length>=3){
		if(upw.search(tuid) > -1){
			alert("아이디가 포함된 비밀번호는 사용하실 수 없습니다.");
			return false;
		}
	}
	
	var sampwd0=0;
	var sampwd1=0;
	var sampwd2=0;
	var chrpwd0;
	var chrpwd1;
	var chrpwd2;
	
	for(var i=0;i<upw.length;i++){
		chrpwd0=upw.charAt(i);
		chrpwd1=upw.charAt(i+1);

		//동일문자
		if(chrpwd0==chrpwd1){
			sampwd0=sampwd0+1;
		}
		
		chrpwd2=upw.charAt(i+2);
		//연속문자 +
		if(chrpwd0.charCodeAt(0) - chrpwd1.charCodeAt(0)==1 && chrpwd1.charCodeAt(0)-chrpwd2.charCodeAt(0)==1){
			sampwd1=sampwd1+1;
		}
		//연속문자(-)
		if(chrpwd0.charCodeAt(0) - chrpwd1.charCodeAt(0)==-1 && chrpwd1.charCodeAt(0) - chrpwd2.charCodeAt(0)==-1){
			sampwd2=sampwd2+1;
		}
	}
	//연속된 문자 체크
	if(sampwd1>=1 || sampwd2>=1){
		alert("비밀번호에 연속된 문자열 123, abc, cba등을 사용할 수 없습니다. ");
		return false;
	}
	return true;
}

function checkRlno(num){
	if(num == ""){
		alert("주민등록번호를 입력하세요.");
		return false;
	}
	
	if(num.length != 13){
		alert("주민등록번호를 '-'를 제외한 13자리 숫자로 입력하세요.");
		return false;
	}

	var ssn1 = num.substring(0, 6);
	var ssn2 = num.substring(6, 13);

	if((ssn1.length == 6) && (ssn2.length == 7)){
		var ssn = ssn1 + ssn2;
		var a = new Array(13);
		
		for(var i = 0; i < 13; i++){
			a[i] = parseInt(ssn.charAt(i));
		}
		
		var k = 11 - (((a[0] * 2) + (a[1] * 3) + (a[2] * 4) + (a[3] * 5) + (a[4] * 6) + (a[5] * 7) + (a[6] * 8) + (a[7] * 9) + (a[8] * 2) + (a[9] * 3) + (a[10] * 4) + (a[11] * 5)) % 11);
		
		if(k > 9) k-= 10;
		if(k != a[12]){
			alert("잘못된 주민등록번호입니다.\n다시 입력해주세요.");
			return false;
		}
	}
	
	return true;
}

function checkValue(obj, len){
	var checkValue = obj.val();
	
	if(checkValue.bytes() > len){
		alert("텍스트가 초과되었습니다.");
		checkValue = checkValue.cut(len);
		obj.val(checkValue);
	}
	return checkValue;
}

function selectInit(name, sVal, eVal, pm, label, selectedValue){
	var selValue = selectedValue;
	var selected = "";
	
	if(pm > 0){
		for(var i = sVal; i <= eVal; i += pm){
			if(i == selValue) selected = "selected='selected'";
			else selected = "";
			$("select[name=" + name + "]").append("<option value=\""+i+"\" " + selected + ">" + i + label + "</option>");
		}
	}else if(pm < 0){
		for(var i = sVal; i >= eVal; i += pm){
			if(i == selValue) selected = "selected='selected'";
			else selected = "";
			$("select[name=" + name + "]").append("<option value=\""+i+"\" " + selected + ">" + i + label + "</option>");
		}
	}
}

//수련원 동반인원 초기화
function selectInitTrngc(name, sVal, eVal, pm, label, selectedValue){
	var selValue = selectedValue;
	var selected = "";
	
	if(pm > 0){
		for(var i = sVal; i <= eVal; i += pm){
			if(i == eVal) selected = "selected='selected'";
			else selected = "";
			$("select[name=" + name + "]").append("<option value=\""+i+"\" " + selected + ">" + i + label + "</option>");
		}
	}else if(pm < 0){
		for(var i = sVal; i >= eVal; i += pm){
			if(i == eVal) selected = "selected='selected'";
			else selected = "";
			$("select[name=" + name + "]").append("<option value=\""+i+"\" " + selected + ">" + i + label + "</option>");
		}
	}
}

function initClsf(name, txtInit){
	if(txtInit != ""){
		$("select[name=" + name + "]")
		.find("option")
		.remove()
		.end()
		.append("<option value=''>" + txtInit + "</option>")
		.val("");
	}else{
		$("select[name=" + name + "]")
		.find("option")
		.remove();
	}
}

function fileDwld(apdFlid, fileSn){
	 location.href="/ho/zz/FileDwld.nhl?apdFlid=" + apdFlid + "&fileSeqn=" + fileSn;
}

function acrobatDwld(){
	window.open("http://get.adobe.com/kr/reader");
}

function setCookie(name, value, expiredays){
	var todayDate = new Date();
	
	todayDate.setDate(todayDate.getDate() + expiredays);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

function getCookie(name){
	var cookiedata = document.cookie;
	
	if(cookiedata.indexOf(name) >= 0){
		return true;
	}else{
		return false;
	}
}

function showLoadingLayer(viewId){
	$(this).loadingShow({
		viewId: "#loadingLayer"
		, addViewId: viewId
	});
}

function hideLoadingLayer(viewId){
	$(this).loadingHide({
		viewId: "#loadingLayer"
		, addViewId: viewId
	});
}


//콤마추가하기
function addComma3(str,fLen){ 
	if(event.keyCode == 37 || event.keyCode == 39){ 
		return;
	}
	var fLen = fLen || 2; 
	var strValue = str.replace(/,|\s+/g,'');
	
	strValue=firstRemoveZero(strValue); // 맨앞자리 0을 제거한다.
	
	var strBeforeValue = (strValue.indexOf('.') != -1)? strValue.substring(0,strValue.indexOf('.')) :strValue ;
	var strAfterValue = (strValue.indexOf('.') != -1)? strValue.substr(strValue.indexOf('.'),fLen+1) : '' ;
	
	if(isNaN(strValue)){
		alert(' 숫자가 아닙니다.\n\n0-9의 정수만 허용합니다.');
		str = "0";
		return str;
	}
	var intLast = strBeforeValue.length-1;
	var arrValue = new Array;
	var strComma = '';
	
	for(var i=intLast,j=0; i >= 0; i--,j++){ 
		if(j !=0 && j%3 == 0){ 
			strComma = ',';
		}else{
			strComma = '';
		}
		arrValue[arrValue.length] = strBeforeValue.charAt(i) + strComma ;
	}
	str= arrValue.reverse().join('') + strAfterValue; 
	return str;
}


function firstRemoveZero(str){
    var idx=0;

    for(var i=0;i<str.length;i++){
    	var ch=str.charAt(i);
    	
    	if(str.length>1){
    		if(ch=='0') idx++;
    		else if(ch=='.') idx--;
    		else break;
    	}
    }
    return str.substring(idx, str.length);
}

function setInsAge(obj){
	onlyNumber(obj);
	var brdtVal = obj.value;
	var sY = brdtVal.substring(0,4);// 년
	var sM = brdtVal.substring(4,6);// 월
	var sD = brdtVal.substring(6,8);// 일
	var today = new Date();
	var now = new Date().getDateString("YYYYMMDD");
	var age = 0;

	if(brdtVal != ""){
		if(brdtVal == ""){
			alert("생년월일을 입력하세요.");
			obj.focus();
			return age;
		}
		if(!checkMinLength(brdtVal, 8)){
			alert("생년월일은 8자리로 입력해야합니다.");
			obj.value="";
			obj.focus();
			return age;
		}
		if(!isValidDate(sD, sM, sY)){
			alert("생년월일은 날짜 형식으로 입력해야합니다.");
			obj.value="";
			obj.focus();
			return age;
		}
		if(brdtVal > now){
			alert("생년월일은 오늘날짜 이후는 입력할 수 없습니다.");
			obj.value="";
			obj.focus();
			return age;
		}

	    var y = parseInt(sY, 10);
	    var m = parseInt(sM, 10);
	    var d = parseInt(sD, 10);
	
		if(y<1 || m<1 || d<1){
		   alert("생년월일을 잘못 입력하셨습니다.");
		   return age;
		}else if(y > today.getFullYear()){
		   alert("생년월일을 잘못 입력하셨습니다.");
		  return age;
		}else if((m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12) && (d < 1 || d > 31)){
		   alert("생년월일을 잘못 입력하셨습니다.");
		  return age;
		}else if((m==4 || m==6 || m==9 || m==11) && (d < 1 || d > 30)){
		   alert("생년월일을 잘못 입력하셨습니다.");
		  return age;
		}else if (m==2 && (d<1 || d>29)){
		   alert("생년월일을 잘못 입력하셨습니다.");
		  return age;
		}else{
			var wkMm = 0;
			var stdYy = today.getFullYear();
			var stdMm = today.getMonth()+1;
			var stdDd = today.getDate();
			var tempMm = stdMm;
			var strBaseDt = stdYy.toString();
			
			if (stdMm.toString().length == 1){ strBaseDt += "0" + stdMm.toString(); }else{ strBaseDt += stdMm.toString(); }
			if (stdDd.toString().length == 1){ strBaseDt += "0" + stdDd.toString(); }else{ strBaseDt += stdDd.toString(); }
			
			if (Number(strBaseDt) < 19880100){
				wkMm = (stdYy * 12 + stdMm) - (y * 12 + m);
				age = wkMm / 12;
				
				if((wkMm % 12) > 6){
					age++;
				}
			}else{
				if(d > stdDd){
					tempMm--;
				}
				wkMm = (stdYy * 12 + tempMm) - (y * 12 + m);
				age = (wkMm + 6) / 12;
			}
		}
	}
	
	var resultAge = Math.floor(age);
	
	if(resultAge > 100){
		alert("생년월일은 100세이하로 입력해야합니다.");
		obj.focus();
		return 0;
	}
	return resultAge;
}

function checkDate(mode, val){
	var tDate = new Date();
	
	if(mode == 1){ //년
		var tYear = parseInt(tDate.getFullYear(), 10);
		
		if((tYear - parseInt(val, 10)) > 100){
			return false;
		}
	}else if(mode == 2){ //월
		if(parseInt(val, 10) < 1 || parseInt(val, 10) > 12){
			return false;
		}
	}else if(mode == 3){ //일
		var year = parseInt(val.substring(0, 4), 10);
		var month = parseInt(val.substring(4, 6), 10);
		var day = parseInt(val.substring(6, 8), 10);
		
		if(day < 1 || day > 31){
			return false;
		}else{
			var cDate = new Date(year, month-1, 1);
			var cMonth = parseInt(cDate.getMonth(), 10) + 1;
			cDate.setDate(day);
			var tmpMonth = parseInt(cDate.getMonth(), 10) + 1;
			
			if(tmpMonth != cMonth) return false;
		}
	}else if(mode == 4){ //생년월일
		var year = parseInt(val.substring(0, 4), 10);
		var month = parseInt(val.substring(4, 6), 10);
		var day = parseInt(val.substring(6, 8), 10);
		var iDate = new Date(year, month-1, day);
		
		if(tDate < iDate) return false;
	}else{
		return false;
	}
	return true;
}

function right(str,n){
	if(n<=0){
		return "";
	}else if(n>String(str).length){
		return str;
	}else{
		var iLen=String(str).length;
		return String(str).substring(iLen-n,iLen);
	}
}

function calDateRange(val1, val2){
	if(val1.length != 8 || val2.length != 8)
		return null;
	
	var fromDt = new Date(val1.substring(0, 4), parseInt(val1.substring(4, 6), 10)-1, val1.substring(6, 8));
	var toDt = new Date(val2.substring(0, 4), parseInt(val2.substring(4, 6), 10)-1, val2.substring(6, 8));
	
	return (toDt.getTime() - fromDt.getTime()) / 1000 / 60 /60 / 24;
}

function goSNS(gubun, imageName){	
	if (gubun == "twitter"){	
		sendTwitter();
	}else if (gubun == "facebook"){	
		shareFacebook(imageName);
	}else if (gubun == "me2day"){	
		//window.open("http://www.me2day.net/posts/new?new_post[body]=" + Link2 + "&new_post[url]=" + Link2, "open_me2day", "");     	
	}
}
 
function sendTwitter(){
	var sUrl    = "https://www.nhlife.co.kr";
	sUrl        = sUrl.split("#").join("%23");
	var sTitle  = $('#prodTitle').text();
	var shref   = "https://twitter.com/share?url=" + encodeURIComponent(sUrl) + "&text=" + encodeURIComponent(sTitle);
	var sWindow = window.open(shref, 'popTwitter', 'width=1008, height=650');
	
	if(sWindow){
		sWindow.focus();
	}
}

function sendFacebook(sTitle,sUrl){
	DocTitle    = sTitle;
    DocSummary  = $('.infoList').text();
    DocImage    = "http://img.naver.net/static/www/u/2013/0819/nmms_111143893.gif";
    
    var url = "http://www.facebook.com/sharer.php?s=100&p[url]="+ sUrl +"&p[title]="+DocTitle+"&p[summary]="+encodeURIComponent(DocSummary)+"&p[images][0]="+ encodeURIComponent(DocImage);
    url = url.split("#").join("%23");

    newwindow = window.open(url,'facebookpopup', 'toolbar=0, status=0, width=626, height=436');
    
    if (window.focus){newwindow.focus();}
}

function shareFacebook(imageName){
	var goUrl    = "https://www.nhlife.co.kr";
	var image   = "https://www.nhlife.co.kr/images/product/" + imageName + ".gif"; //http://10.240.11.199:8082/images/product/N0000303.gif [imageName].gif //실오픈 시 주석 풀 것
	var title   = $('#prodTitle').text();
	var summary = $('.infoList').text();
	var url = "http://www.facebook.com/sharer.php?s=100&p[url]=" + goUrl + "&p[images][0]=" + image + "&p[title]=" + title + "&p[summary]=" + summary;
	
	url = url.split("#").join("%23");
	url = encodeURI(url);
	
	newwindow = window.open(url,'facebookpopup', 'toolbar=0, status=0, width=626, height=436');
    
	if (window.focus){newwindow.focus();}
}

function progressloading(){
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

	$("#process").fadeIn(100);
	$("#process").show();
}

function progressloadingClose(){
	$(".mask").hide();
	$("#process").hide();
}

//인터넷보험링크시 클릭 수 저장(인터넷보험상품 변경시 URL 확인 필요)
function goOnLineIns(prodCd, cdId){
	var hostname = document.location.hostname;
	var cdLink = "";
	var tmpcdId = cdId;
	
	if(prodCd =="N0000831"){ //NH세테크연금저축보험(Self가입형,무배당)
		cdLink="/ni/ig/NIIG0001M00.nhl";
	}else if(prodCd =="N0000886"){ //NH모두의암보험(Self가입형,갱신형,비갱신형,무배당)_2104
		cdLink="/ni/ig/NIIG0002M00.nhl";
	}/*else if(prodCd =="N0000698"){ //실손보험-close
		cdLink="/ni/ig/NIIG0003M00.nhl";
	}*/else if(prodCd =="N0000829"){ //NH부자습관저축보험(Self가입형,무배당)
		cdLink="/ni/ig/NIIG0004M00.nhl";
	}else if(prodCd =="N1000847"){ //NH온라인 농(임)업인안전보험
		cdLink="/ni/ig/NIIG0005M00.nhl";
	}else if(prodCd =="N0000897"){ //NH일년든든생활n레저보험(Self가입형,무배당)_2104
		cdLink="/ni/ig/NIIG0006M00.nhl";
	}else if(prodCd =="N0000898"){ //NH뇌심장튼튼건강보험(Self가입형,무배당)_2104
		cdLink="/ni/ig/NIIG0007M00.nhl";
	}/*else if(prodCd =="N0000825"){ //NH쏙쏙골라암보험(Self가입형,갱신형,무배당)		22.04.01 - 판매중지
		cdLink="/ni/ig/NIIG0008M00.nhl";
	}else if(prodCd =="N1000917"){ //아나파스면NH국민안심보험(Self가입형,무배당)			22.04.01 - 판매중지
		cdLink="/ni/ig/NIIG0009M00.nhl";
	}*/else if(prodCd =="N0000912"){ //효밍아웃NH부모님안전보험(무배당)
		cdLink="/ni/ig/NIIG0010M00.nhl";
	}else if(prodCd =="N0000933"){ //NH올바른지구대중교통안전보험(Self가입형,무배당)
		cdLink="/ni/ig/NIIG0011M00.nhl";
	}else if(prodCd =="N0000953"){ //생활쏘옥NH미니보장보험(Self가입형,무배당)
		if(tmpcdId == "B0055") {
			cdLink="/ni/ig/NIIG0012M00.nhl?prodDtlCd=1";	
		} else {
			cdLink="/ni/ig/NIIG0012M00.nhl?prodDtlCd=2";
		}
	}else {
		cdLink = prodCd;
	}
	 
	
	$('#cdId').val(tmpcdId);
	
	$("#hOCD0047VO").ajaxSubmit({
		dataType: "json"
		, type: "POST"
		, url: "/ho/cd/insSnrg.nhl"
		, data: $(this).serialize()
		, beforeSerialize: function(){
		}
		, beforeSubmit: function(){
		}
		, success: function(data){
			if(data.msgCd=="1"){
				progressStatusClose();
			}else{
				progressStatusClose();
			}
		}
		, error: function(request, status, error){
		}
		, complete: function(xhr){
		}
	});
	
	if(hostname.indexOf("dev.") > -1){
		goUrl = "https://dev.nhelife.co.kr:8093"+cdLink;
	}else{
		goUrl = "https://www.nhelife.co.kr"+cdLink;
	}
	
	var openNewWindow = window.open("about:blank");
	
	openNewWindow.location.href = goUrl;
}

//보험나이 리턴
function setInsAgeCheck(obj){
	var brdtVal = obj.value;
	var sY = brdtVal.substring(0,4);// 년
	var sM = brdtVal.substring(4,6);// 월
	var sD = brdtVal.substring(6,8);// 일
	var today = new Date();
	var now = new Date().getDateString("YYYYMMDD");
	var age = 0;
	
	if(brdtVal != ""){
		if(brdtVal == ""){
			alert("생년월일을 입력하세요.");
			obj.focus();
			return age;
		}
		if(!checkMinLength(brdtVal, 8)){
			alert("생년월일은 8자리로 입력해야합니다.");
			obj.focus();
			return age;
		}
		if(brdtVal > now){
			alert("생년월일은 오늘날짜 이후는 입력할 수 없습니다.");
			obj.focus();
			return age;
		}
	
	    var y = parseInt(sY, 10);
	    var m = parseInt(sM, 10);
	    var d = parseInt(sD, 10);
	
		if(y<1 || m<1 || d<1){
		   alert("생년월일을 잘못 입력하셨습니다.");
		   return age;
		}else if(y > today.getFullYear()){
		   alert("생년월일을 잘못 입력하셨습니다.");
		  return age;
		}else if((m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12) && (d < 1 || d > 31)){
		   alert("생년월일을 잘못 입력하셨습니다.");
		  return age;
		}else if((m==4 || m==6 || m==9 || m==11) && (d < 1 || d > 30)){
		   alert("생년월일을 잘못 입력하셨습니다.");
		  return age;
		}else if (m==2 && (d<1 || d>29)){
		   alert("생년월일을 잘못 입력하셨습니다.");
		  return age;
		}else{
			var wkMm = 0;
			var stdYy = today.getFullYear();
			var stdMm = today.getMonth()+1;
			var stdDd = today.getDate();
			var tempMm = stdMm;
			var strBaseDt = stdYy.toString();
			
			if(stdMm.toString().length == 1){ strBaseDt += "0" + stdMm.toString(); }else{ strBaseDt += stdMm.toString();}
			if(stdDd.toString().length == 1){ strBaseDt += "0" + stdDd.toString(); }else{ strBaseDt += stdDd.toString();}
			
			if (Number(strBaseDt) < 19880100){
				wkMm = (stdYy * 12 + stdMm) - (y * 12 + m);
				age = wkMm / 12;
			  
				if((wkMm % 12) > 6){
					age++;
				}
			}else{
				if(d > stdDd){
					tempMm--;
				}
				wkMm = (stdYy * 12 + tempMm) - (y * 12 + m);
				age = (wkMm + 6) / 12;
			}
		}
	}
	var resultAge = Math.floor(age);
	
	if(resultAge > 100){
		alert("생년월일은 100세이하로 입력해야합니다.");
		obj.focus();
		
		return 0;
	}
	return resultAge;
}

function hostNmChk(){
	var hostname = document.location.hostname;
	
	if(hostname.indexOf("dev.") > -1){
		return "dev";
	}else if(hostname.indexOf("ver.") > -1){
		return "ver";
	}else if(hostname.indexOf("www.") > -1){
		return "www";
	}
}


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
	
	var leftPostion = (maskWidth - $("#lyrBasic").width()) / 2; //.replace("px", "")
	var topPosition =  win.scrollTop() + (maskHeight - $("#lyrBasic").height()) / 2; //.replace("px", "")

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

function loginProcess(){
	var win=$(window);
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();
	
	if(maskHeight>$(window).height()){
		maskHeight=$(window).height();
	}

	$(".mask").css({"width":  $(document).width(), "height": $(document).height(),"background-color": "#FFF"});
	$(".mask").fadeTo("fast",0.8);

	var leftPostion = (maskWidth - $("#loginProcess").width()) / 2;
	var topPosition = win.scrollTop() + (maskHeight - $("#loginProcess").height()) / 2;

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
	var leftPostion = (maskWidth - $("#lyrBasic").width()) / 2; //.replace("px", "")
	var topPosition =  win.scrollTop() + (maskHeight - $("#lyrBasic").height()) / 2; //.replace("px", "")

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


function loginProcess(){
	var win=$(window);
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();
	
	if(maskHeight>$(window).height()){
		maskHeight=$(window).height();
	}

	$(".mask").css({"width":  $(document).width(), "height": $(document).height(),"background-color": "#FFF"});
	$(".mask").fadeTo("fast",0.8);

	var leftPostion = (maskWidth - $("#loginProcess").width()) / 2;
	var topPosition = win.scrollTop() + (maskHeight - $("#loginProcess").height()) / 2;

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
