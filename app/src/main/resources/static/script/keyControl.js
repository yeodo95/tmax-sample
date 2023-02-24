//마우스 오른쪽 버튼 막기
document.oncontextmenu = function(e){
	if(e){
		alert('마우스 오른쪽 버튼 사용이 불가합니다.');
		e.preventDefault();
	}else{
		alert('마우스 오른쪽 버튼 사용이 불가합니다.');
		event.keyCode = 0;
		event.returnValue = false;
	}
}

//새로고침 막기
document.onkeydown = function(e){
	var agt = navigator.userAgent.toLowerCase();

	var browserNm = "";
	if(agt.indexOf("firefox") != -1)browserNm = 'Firefox';
	
	key = (e) ? e.keyCode : event.keyCode;
	ctrl = (e) ? e.ctrlKey  : event.ctrlKey;
	
	if( (ctrl == true &&  key == 82) ||  key==116){
		if(e){
			if(browserNm != "Firefox")alert('새로고침 단축키 사용이 불가합니다.');    	
			e.preventDefault();
		}else{
			if(browserNm != "Firefox")alert('새로고침 단축키 사용이 불가합니다.');
			event.keyCode = 0;
			event.returnValue = false;
		}
	} //새로고침 막기 끝

	//뒤로가기(백스페이스) 막기
	/*if( key==8 ) 
	{
	 
		e = e ? e : window.event ; 
		var t = e.target ? e.target : e.srcElement ? e.srcElement : null ;
	  
		if( t.nodeName.toLowerCase() !="input" && t.nodeName.toLowerCase() !="textarea" && t.nodeName.toLowerCase() !="password" ){ 
				  
			if(e) 
			{
				alert('뒤로가기 단축키 사용이 불가합니다.');    	
				if( e.preventDefault){
					e.preventDefault();
				}
				return false ;
			} 
			else 
			{
				alert('뒤로가기 단축키 사용이 불가합니다.');
				event.keyCode = 0;
				event.returnValue = false;
			}
		}	
    
	}*/ //뒤로가기(백스페이스) 막기 끝
}



