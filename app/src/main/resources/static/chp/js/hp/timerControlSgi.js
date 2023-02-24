var timerID = 0;     
var tStart  = null;
var max_min = 10;  // 개발계에서는 50분 : 운영계, 테스트계에서는 10분으로..
 
  function UpdateTimer() {
     if(timerID) {
    	 clearTimeout(timerID);
    	 clockID  = 0;
     } 
     
     if(!tStart)
     tStart   = new Date();
     var   tDate = new Date();
     var   tDiff = tDate.getTime() - tStart.getTime();
    
     tDate.setTime(tDiff);
     var str_min = tDate.getMinutes();
     var str_sec = tDate.getSeconds();
     str_min = max_min-str_min-1;
     str_sec = 60-str_sec-1;
     
     if(str_min<10) str_min = "0" + str_min;
     if(str_sec<10) str_sec = "0" + str_sec;
     $('#logoutWarning').html("<strong class='min'>"+str_min+"</strong>분"+"<strong class='sec'>"+str_sec+"</strong>초");
     $('#logoutWarningTop').html(str_min+":"+str_sec);
     $('#logoutWarningHeader').html(str_min+":"+str_sec);		//헤더부분 연장 추가 --20190321

     if(str_min=='03' && str_sec=='00') {// 이서진( 1분에서 3분에 로그아웃시간 레이어 보이기로변경함. - SR2015042700037 )
     //if(str_min=='00' && str_sec=='59') {
    	 Dialog.open('#layerpop_logout');
     }
      
     if(str_min=='00' && str_sec=='00') {
    	 location.href = "/chp/logout?autoOut=Y";
    	 Stop();
     }
          
     timerID = setTimeout("UpdateTimer()", 1000);
  }
  
  function timerStart() {
     tStart   = new Date(); 
     max_min = parseInt(max_min);
     if(max_min<10) max_min = "0" + max_min;
     $('#logoutWarning').html("<strong class='min'>"+max_min+"</strong>분"+"<strong class='sec'>00</strong>초");
     $('#logoutWarningTop').html(max_min + ":00");
     $('#logoutWarningHeader').html(max_min + ":00");		//헤더부분 연장 추가 --20190321
     
     timerID  = setTimeout("UpdateTimer()", 1000);
  }
  
  function Stop() {
     if(timerID) {
    	 clearTimeout(timerID);
    	 timerID  = 0;
     }
     tStart = null;
  }
  function Reset() {
     tStart = null;
     if(max_min<10) max_min = "0" + max_min;
     $('#logoutWarning').html("<strong class='min'>"+max_min+"</strong>분"+"<strong class='sec'>00</strong>초");
     $('#logoutWarningTop').html(max_min + ":00");
     $('#logoutWarningHeader').html(max_min + ":00");		//헤더부분 연장 추가 --20190321
  }
  
  function timeContinue(){
			// Using the $.ajax() method				
			$.ajax({
				    // the URL for the request
				    url: "",
				 
				    // the data to send (will be converted to a query string)
				    data: {
				     //   id: 123
				    },
				 
				    // whether this is a POST or GET request
				    type: "GET",
				 
				    // the type of data we expect back
				    //If none is specified, jQuery will try to infer it based on the MIME type of the response
				    //dataType : "",
				 
				    // code to run if the request succeeds;
				    // the response is passed to the function
				    success: function( ) {
				    //	alert("Success!!");
				    },
				 
				    // code to run if the request fails; the raw request and status codes are passed to the function
				    error: function( xhr, status ) {
				       // alert( "Sorry, there was a problem!" );
				    },
				 
				    // code to run regardless of success or failure
				    complete: function( xhr, status ) {
				       // alert( "The request is complete!" );
				    }
				});					
				

				timerStart();
		
  }
  
  function loginExtension() {
	// Using the $.ajax() method				
		$.ajax({
		    // the URL for the request
		    url: "",
		 
		    // the data to send (will be converted to a query string)
		    data: {
		     //   id: 123
		    },
		 
		    // whether this is a POST or GET request
		    type: "GET",
		 
		    // the type of data we expect back
		    //If none is specified, jQuery will try to infer it based on the MIME type of the response
		    //dataType : "",
		 
		    // code to run if the request succeeds;
		    // the response is passed to the function
		    success: function( ) {
		    //	alert("Success!!");
		    },
		 
		    // code to run if the request fails; the raw request and status codes are passed to the function
		    error: function( xhr, status ) {
		       // alert( "Sorry, there was a problem!" );
		    },
		 
		    // code to run regardless of success or failure
		    complete: function( xhr, status ) {
		       // alert( "The request is complete!" );
		    }
		});					
		
		Dialog.close('#layerpop_logout');
		timerStart();
		return false;
  }
  
  
