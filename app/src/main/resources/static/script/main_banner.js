window.addEventListener("load", function () {
		var px = 4;
		/*while(true){
			var bnWid = $("#mdGoods").width();
			if(bnWid % px ==0){
				break;
			}
			px++;	
		}*/

		var MOVEING_PX = px,
	    AUTO_TIME = 5000,
	    slide = document.getElementById("mdGoods"),
	    indi = document.createElement("ul"),
	    slideCnt = slide.getElementsByClassName("cnt"),
	    slideCntItem = slideCnt[0].getElementsByTagName("li"),
	    playStopBtn = document.getElementById("playStopBtn"),
//	    playBtn = slide.getElementsByClassName("play"),
//	    stopBtn = slide.getElementsByClassName("stop"),
	    playSet = null,
	    before = 0,
	    after = 0,
	    moveIng = false;

	  // init
	  slideCntItem[0].style.left = 0;
//	  playBtn[0].style.display = "block";
//	  var indi = document.createElement("ul");
	  for (var i = 0; i < slideCntItem.length; i++) {
	    indi.innerHTML += "<li><a href='#nhlife'><span class='hide'>"+(i+1)+"번 배너로 이동</span></a></li>";
	  }
	  indi.classList.add("indi");
	  indi.children[0].classList.add("on");
	  $(".indiArea").append(indi);
// 	  slide.append(indi);
	
	
	$(".cnt a").eq(0).attr("tabindex","0");
	$(".cnt a").attr("tabindex","-1");
	$(".cnt li").eq(0).attr("style","background-color: "+$(".cnt img").eq(0).attr("data-color")+";z-index:" + $(".cnt img").eq(0).attr("data-zindex"));
//	$(".cnt li").eq(0).attr("style","background-color: "+$(".cnt img").eq(0).attr("data-color")+";z-index: 1");
	  for (var j = 0; j < indi.children.length; j++) {
	    indiClick(j);
	  }

	  // initEvnet
	  
	  playStopBtn.addEventListener("click", function () {
		 
		 if($("#playStopBtn").hasClass("play")){
			 $("#playStopBtn").attr("class","stop");
			 $("#playStopBtn").text("stop");
			 playSet = setInterval(function () {
			      if (!moveIng) {
			        after++;
			        if (after >= slideCntItem.length) {
			          after = 0;
			        }
			        move(after, before, "next");
			        before = after;
			      }
			    }, AUTO_TIME);
		 }else{
			 $("#playStopBtn").attr("class","play");
			 $("#playStopBtn").text("play");
			 clearInterval(playSet);
		 }
		  
	    
	  });

	  /*stopBtn[0].addEventListener("click", function () {
	    playBtn[0].style.display = "block";
	    stopBtn[0].style.display = "none";
	    
	  });*/

	  function indiClick(target) {
	    indi.children[target].addEventListener("click", function () {
	    	$(".cnt a").eq(target).attr("tabindex","0");
	    	$(".indi a").attr("title","");
	    	$(".indi a").eq(target).attr("title","선택됨");
	    	$(".cnt a").attr("tabindex","-1");
	      if (!moveIng) {
	        after = target;
	        if (after > before) {
	          move(after, before, "next");
	        } else if (after < before) {
	          move(after, before);
	        }
	        before = after;
	      }
	    });
	  }

	  function move(after, before, type) {
//		  const slideCntItemTemp = []; 
		  var slideCntItemTemp = []; 
		  
		$(".cnt li").each(function(i){
			slideCntItemTemp.push(i);
		});
		  
		var arr_index = slideCntItemTemp.indexOf(after);
		
		slideCntItemTemp.splice(arr_index, 1);
		  
		$(".cnt a").attr("tabindex","-1");
		$(".cnt a").eq(after).attr("tabindex","0");
	  
		$(".cnt li").eq(after).attr("style","background-color: "+$(".cnt img").eq(after).attr("data-color")+";z-index:" + $(".cnt img").eq(after).attr("data-zindex"));
//		$(".cnt li").eq(after).attr("style","background-color: "+$(".cnt img").eq(after).attr("data-color")+";z-index: 1");
//	    set = setInterval(function () {
//	      moveIng = true;
//	      if (type === "next") {
//	        nextX -= MOVEING_PX;
//	        slideCntItem[after].style.left = nextX + "px";
//	        if (nextX <= 0) {
//	          clearInterval(set);
//	          nextX = slide.offsetWidth;
//	          moveIng = false;
//	        }
//	        prevX -= MOVEING_PX;
//	      } else {
//    	  
////		      for(var i = 0; i < slideCntItemTemp.length ;i++){
////			      slideCntItem[slideCntItemTemp[i]].style.zIndex = 0;
////		      }  
////		      slideCntItem[before].style.zIndex = 4;
//    	  slideCntItem[before].style.zIndex = 20;
//    	  slideCntItem[after].style.zIndex = 30;
//	        nextX += MOVEING_PX;
//	        slideCntItem[after].style.left = nextX + "px";
//	        
//	        if (nextX >= 0) {
//	          clearInterval(set);
//	          nextX = slide.offsetWidth * -1;
//	          moveIng = false;
//	        }
//	        prevX += MOVEING_PX;
//	      }
//	      for(var i = 0; i < slideCntItemTemp.length ;i++){
//		      slideCntItem[slideCntItemTemp[i]].style.left = prevX + "px";
//	      }
	      
    	$(".cnt li").eq(before).fadeOut(500);
    	$(".cnt li").eq(after).fadeIn(1500);
	    	
//	    });
	    indi.children[before].classList.remove("on");
	    indi.children[after].classList.add("on");
	    
	    var i = $("#mdGoods .cnt > li").length;
		$("#mdGoods .cnt > li").each(function(){
//	    	$(this).css("z-index",i);
			i--;
		})

	    $(".cnt li").eq(before).css("z-index", "20");
	    $(".cnt li").eq(after).css("z-index", "10");
	    
	  }
	  
	  setTimeout(playStopBtn.click(), 1000);
	  
	});