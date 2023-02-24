var hostname = document.location.hostname;
var chatUrl;
var allow;
if(hostname.indexOf("dev.") > -1){
	chatUrl = 'https://devcbgw.nhlife.co.kr:8083/service/#/29d82a9d-c2d3-424f-ab42-45741a97f66b/'; // 개발
}else{
	chatUrl = 'https://m.nhlife.co.kr:8183/service/#/e6259679-20b6-4692-9f98-da5df945366b'; // 운영
}

var chatbox =
        [
		"<div class='chatbot-box' style='width:420px;height:700px;display:block;z-index:10001' id='chat_div'>",
        	"<div class='chatbot-frame' style='width:99%;height:698px;top:0px;right:0px;border:1px solid black'><iframe id='ffdfdfdfd' style='width:100%;height:100%;border:none' ",
                "src='"+ chatUrl +"'></iframe>",
                "<button class='close'><img src='/sol/Chatbot/assets/img/btn_down_02_n.png'/></button>",
            "</div>",
        "</div>"].join('');
	var chatbtn = "<button class='chatbot-start'><img src='/sol/Chatbot/assets/img/intro_icon.png'/></button>";

	var iscbload = false;
	var cbload = function() {
		$(chatbox).appendTo('body');
		$('.close').click(close);
		iscbload = true;
	};
	
	var start = function() {
		if(iscbload) {
			$('.chatbot-start').css('display','none');   
	       	$('.chatbot-box').css('display','block');
	       	$('.chatbot-box').css('z-index','10001');
			$('.chatbot-frame').animate({top:"0px"});
			$(".chat-scroll").scrollTop($(document).height());
		} else {
			cbload();
		}
	};
	
	var close = function() {
		$('.chatbot-frame').animate({top:"615px"},function(){
			$('.chatbot-box').css('display','none');
			$('.chatbot-start').css('display','block');   
	        });
	};
	
	$('.close').click(close);