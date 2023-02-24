/*
 * 비밀번호 변경 (90일 이전 로그인 대상자 변경안내 팝업띄위기)
 */
var changePwYn = null;

/**
 * Layer display
 */
function showLayerChangePw(layer) {
  if (changePwYn == "Y") {
    var cookiedata = document.cookie;
    if (cookiedata.indexOf("changePw=N") < 0) {
      $("body").append("<div id='fade' ></div>");
      $("#fade")
        .css({ filter: "alpha(opacity=50)", opacity: "0.4", height: $(document).height() })
        .fadeIn();
      $("#" + layer).show();

      //callInitTransKeyFooter();
      /*
	        $("input[name=keyPadUsePW]").click ( function() {
	            
	            if ( this.checked ) {//가상키패드 사용시                        
	                $("#loginChngPw").val('');//미사용 가상키패드 사용 input                      
	                $("#loginChngPwEncSpan").show();  //가상키패트 input show  
	                $("#loginChngPwSpan").hide();  //미사용 show
	                
	            } else {
	                transkey["Tk_loginChngPwEnc"].clear();                  
	                $("#loginChngPwEncSpan").hide();  //가상키패트 input hide    
	                $("#loginChngPwSpan").show();  //미사용 show
	            }
	        }) ;//click event						
			*/
    } //end if
  } //end if
} //end function

/**
 * Layer display
 */
function showLayerChangePwInput() {
  $("#layer_pop01").hide();
  $("#layer_pop02").show();
} //end function

/**
 * Layer hidden
 */
function hideLayerChangePw(layer) {
  $("#" + layer).hide();
  $("#fade").remove();

  //쿠키적용(창안뜨시)
  //hideLayerChangePw
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + 1);
  document.cookie = "changePw=" + escape("N") + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

//비밀번호 변경로직 스크립트
/*
var callInitTransKeyFooter = function() {

	if( typeof( transkeyUuid )=="undefined" || transkeyUuid==null || transkeyUuid.length==0 ){
		initTransKey();
	}
	makeTransKeyFooter();
};  
var makeTransKeyFooter = function() {//키패드 설정
  addTransKey( document.getElementById("loginChngPwEnc"), "on", "qwerty", -135, -260);      
};   
*/

//비밀번호 변경화면으로 이동
var goChangePassWord = function () {
  hideLayerChangePw("layer_pop02");
  document.location.href = "/chp/iutf/hp/member/CHPMEMB007RM0.mvc";
};

//비밀번호 체크하기
var comparePassWord = function () {
  var rstVal = "";
  rstVal = $("#pw").val();

  if ($.trim(rstVal) == "") {
    alert("거래비밀번호를 입력하여주십시오.");
    $("#pw").focus();
    return false;
  }
  tk.fillEncData(); //가상키보드 암호화 20171120

  var dataString = $("#loginChngPwForm").serialize();
  var url = "/chp/iutf/hp/member/comparePsswr.mvc";

  $.ajax({
    type: "post",
    url: url,
    data: dataString,
    success: function (res) {
      ajaxSuccessCompare(res);
    },
  });

  function ajaxSuccessCompare(res) {
    //$("#pwRstY").css("display","none");
    //$("#pwRstY2").css("display","none");
    //$("#pwRstN").css("display","none");
    //$("#pwRstN2").css("display","none");

    if (res.result.errCode != "0") {
      $("#pwRstY").css("display", "none");
      $("#pwRstY2").css("display", "none");
      $("#pwRstN").css("display", "block");
      $("#pwRstN2").css("display", "block");
      return false;
    }

    $("#pwRstY").css("display", "block");
    $("#pwRstY2").css("display", "block");
    $("#pwRstN").css("display", "none");
    $("#pwRstN2").css("display", "none");
  }
};
