$(function(){
	common.init();
	devices.detect();
	Dialog.init();
	tabUI.init();
	accordion.init();
	slickSlider();
	tooltip();
	scrollAni('.ani, .sgi_com_guide');
	scrollUI.init();
	animateNumber('.num_ani',1000,true,true,true);
	sgiYoutube();
});

$(window).on('resize',function(){
	common.floating();
	common.contentH();
});

var devices = {
	ua: {window:null,mac:null,chrome:null,firefox:null,opera:null,safari:null,edge:null,msie:null,ie11:null,ie10:null,ie9:null,ie8:null,android:null,ios:null,iphone:null,ipad:null,blackberry:null,operam:null,iem:null},
	boolean: function(){
		devices.ua.window = navigator.userAgent.match(/windows/i);
		devices.ua.mac = navigator.userAgent.match(/macintosh/i);
		devices.ua.chrome = navigator.userAgent.match(/chrome/i);
		devices.ua.firefox = navigator.userAgent.match(/firefox/i);
		devices.ua.opera = navigator.userAgent.match(/opera|OPR/i);
		devices.ua.safari = navigator.userAgent.match(/safari/i) && !devices.ua.chrome;
		devices.ua.edge = navigator.userAgent.match(/edge/i);
		devices.ua.msie = navigator.userAgent.match(/rv:11.0|msie/i);
		devices.ua.ie11 = navigator.userAgent.match(/rv:11.0/i);
		devices.ua.ie10 = navigator.userAgent.match(/msie 10.0/i);
		devices.ua.ie9 = navigator.userAgent.match(/msie 9.0/i);
		devices.ua.ie8 = navigator.userAgent.match(/msie 8.0/i);
		devices.ua.android = navigator.userAgent.match(/Android/i);
		devices.ua.ios = navigator.userAgent.match(/iPhone|iPad|iPod/i);
		devices.ua.iphone = navigator.userAgent.match(/iPhone/i);
		devices.ua.ipad = navigator.userAgent.match(/iPad/i);
		devices.ua.blackberry = navigator.userAgent.match(/BlackBerry/i);
		devices.ua.operam = navigator.userAgent.match(/Opera Mini/i);
		devices.ua.iem = navigator.userAgent.match(/IEMobile/i);
	},
	detect: function(){
		var html = $('html');
		devices.boolean();
		if(devices.ua.window || devices.ua.mac){
			devices.ua.window ? html.addClass('win') : '';
			devices.ua.mac ? html.addClass('mac') : '';
			devices.ua.chrome ? html.addClass('chrome') : '';
			devices.ua.firefox ? html.addClass('firefox') : '';
			devices.ua.opera ? html.addClass('opera') : '';
			devices.ua.safari ? html.addClass('safari') : '';
			devices.ua.edge ? html.addClass('edge') : '';
			devices.ua.msie ? html.addClass('msie') : '';
			devices.ua.ie11 ? html.addClass('ie11') : '';
			devices.ua.ie10 ? html.addClass('ie10') : '';
			devices.ua.ie9 ? html.addClass('ie9') : '';
			devices.ua.ie8 ? html.addClass('ie8') : '';
		} else {
			devices.ua.android ? html.addClass('android') : '';
			devices.ua.ios ? html.addClass('ios') : '';
			devices.ua.iphone ? html.addClass('iphone') : '';
			devices.ua.ipad ? html.addClass('ipad') : '';
			devices.ua.blackberry ? html.addClass('blackberry') : '';
			devices.ua.operam ? html.addClass('operam') : '';
			devices.ua.iem ? html.addClass('iem') : '';
		}
	}
};

var common = {
	html: 'html',
	wrap: '#wrap',
	header: '#sgiHeader',
	footer: '#sgiFooter',
	winLoad: function(){
		//링크없는 a태그 role=button 추가
		$('a').each(function(e){
			var $href = $(this).attr('href');
			if(!$(this).hasClass('no-button')){
				if($href == undefined){
					$(this).attr({'href':'#'});
					if($(this).attr('role') == undefined)$(this).attr('role','button');
				}else{
					if(($href.startsWith('#'))&& $(this).attr('role') == undefined)$(this).attr('role','button');
				}
			}
		});
		//href가 #시작할때 a태그 클릭 시 기본속성 죽이기
		$(document).on('click','a',function(e){
			var $href = $(this).attr('href');
			if(!$(this).hasClass('no-button')){ //기본속성 살리는 클래스(스킵네비 등)
				if($href.startsWith('#')){
					e.preventDefault();
				}
			}
		});
		if($('.main_sgi_cs').length) $('#wrap').addClass('main_sgi');
	},
	contentH: function(){
		var _h = $(window).height() - $(common.header).height() - $(common.footer).height() + 100;
		$('#container').css('min-height', _h);
		if($('.sgi_direct_ins_wrap').length) {
			var _ins_h = $(window).height() - 80,
				$insContent = $('.sgi_direct_ins_content');
			$insContent.css('min-height', _ins_h);
			setTimeout(function(){
				var $step = $('.sgi_direct_ins_step'),
					$stepContainer = $('.sgi_direct_ins_step .ins_container'),
					_step_h = $stepContainer.height()+32,
					_step_h_half = _step_h/2,
					$btn = $step.find('.item .title h5 button'),
					_top = $(window).height()-_step_h-40,
					$w = $(window);
				$btn.on('click', function() {
					setTimeout(function(){
						_top = $(window).height()-$stepContainer.height()-32-40,
						_step_h_half = ($stepContainer.height()+32)/2;
						var st = $w.scrollTop();
						(st > _step_h_half) ? $step.css('top', _top) : $step.removeAttr('style');
					},500);
				});
				$w.scroll(function(e) {
					var st = $w.scrollTop();
					(st > _step_h_half) ? $step.css('top', _top) : $step.removeAttr('style');
				});
			},500);
		}
	},
	nav: '.gnb',
	menu: '.gnb>ul>li',
	subMenu: '.gnb .sub_menu',
	bg: '.gnb_bg',
	openTimeout: '',
	closeTimeout: '',
	navOpen: function(target,time){
		$('select').blur();
		clearTimeout(common.closeTimeout);
		var openInit = function(){
			var $subMenu = $(target).find('.sub_menu'), $subMenuHeight = $subMenu.outerHeight();
			if(!$(common.header).hasClass('fulldown')){
				$(target).children('a').attr('aria-expanded','true').closest('li').addClass('on').siblings('li').removeClass('on').find('a').attr('aria-expanded','false');
				$(target).find('.sub_menu>ul').css('height',$subMenuHeight);
				$(target).siblings().find('.sub_menu').removeAttr('style').removeClass('active');
				$subMenu.stop(true,false).show();
				setTimeout(function(){$subMenu.addClass('active')},100);
			} else {
				$(target).closest('li').addClass('on').siblings('li').removeClass('on');
				$(common.subMenu).stop(true,false).show();
				setTimeout(function(){$(common.subMenu).stop(true,false).addClass('active')},100);
				$(common.menu).each(function() {
					var _height = $(this).find('.sub_menu>ul').innerHeight();
					$subMenuHeight = _height > $subMenuHeight ? _height : $subMenuHeight;
					$(common.subMenu).css('height',$subMenuHeight);
				});
			}
			$(common.bg).css({'height':$subMenuHeight}).closest('#sgiHeader').addClass('show');
		};
		if(!!time){
			common.navOpenTimeout = setTimeout(function() {
				openInit();
			}, time);
		}else{
			openInit();
		}
	},
	navClose: function (time) {
		clearTimeout(common.navOpenTimeout);
		var closeInit = function(){
			$(common.menu).removeClass('on').children('a').attr('aria-expanded','false');
			$(common.subMenu).removeClass('active').hide().children('ul').removeAttr('style');
			(!$(common.header).hasClass('fulldown')) ? $(common.subMenu).removeAttr('style') : $(common.subMenu).css('height',0);
			$(common.bg).css('height',0).closest('#sgiHeader').removeClass('show');
		};
		if(!!time){
			common.closeTimeout = setTimeout(function(){
				closeInit();
			},time);
		}else{
			closeInit();
		}
	},
	navTrigger: function () {
		$(common.menu).children('a').attr('aria-expanded','false');
		var $current = $(common.nav).find('.current');
		var $openDep1 = '';
		$(common.menu).on('mouseover focusin', function (e){
			var $this = $(this);
			if(e.type == 'mouseover'){
				common.navOpen($this,100);
			}else{
				common.navOpen($this);
			}
			$openDep1 = $this;
		}).on('mouseout focusout', function (e){
			if(e.type == 'mouseout'){
				common.navClose(100);
			}else{
				common.navClose(10);
			}
		});
		$('.gnb_bg').on('mouseover', function (){
			common.navOpen($openDep1);
		}).on('mouseout', function(e){
			common.navClose(100);
		});
	},
	scrollTop :'',
	lock: function(){
		if(!$(common.html).hasClass('lock')){
			common.scrollTop = window.pageYOffset;
			$(common.wrap).css('top',-(common.scrollTop));
			$(common.html).addClass('lock');
		}
	},
	unlock: function(){
		$(common.html).removeClass('lock');
		$(common.wrap).removeAttr('style');
		window.scrollTo(0, common.scrollTop);
		window.setTimeout(function (){
			common.scrollTop = '';
		}, 0);
	},
	delBtn:function(target){//input 삭제버튼
		$(document).on('keyup focus', target, function(){
			var $this = $(this), $val = $this.val();
			if($this.prop('readonly') || $this.prop('disabled') || $this.hasClass('no_del')){
				return false;
			}
			if($val != ''){
				if(!$this.next('.inp_del').length){
					$this.after('<a href="#" class="inp_del"><span class="offscreen">입력내용삭제</span></a>');
				}
				if($this.next('.inp_del').length)setTimeout(function(){$this.closest('.del').addClass('on');},5);
			}else{
				if($this.next('.inp_del').length){
					$this.closest('.del').removeClass('on');
					setTimeout(function(){$this.closest('.del').find('.inp_del').remove();},200);
				}
			}
		}).on('focusout',target,function(){
			var $this = $(this);
			if($this.next('.inp_del').length){
				setTimeout(function(){$this.closest('.del').removeClass('on');},100);
				setTimeout(function(){$this.closest('.del').find('.inp_del').remove();},200);
			}
		});
		$(document).on('focusin',target,function(){
			if(!$(this).attr('readonly'))$(this).closest('.del').addClass('focus');
		}).on('blur',target,function(){
			$(this).closest('.del').removeClass('focus');
		});
		$(document).on('click','.inp_del',function(e){
			e.preventDefault();
			var $this = $(this), $inp = $this.prev(target);
			$this.closest('.del').removeClass('on');
			setTimeout(function(){$this.closest('.del').find('.inp_del').remove();},200);
			$inp.val('').change().focus();
		});
	},
	searchOpen:function(){
		var $search = $('#sgiSearchLayer'),
			$open = $('.s_link .search'),
			$close = $('#sgiSearchLayer').find('.btn_close_search'),
			$input = $search.find('#sgiSearch');
		$open.on('click', function() {
			$search.show();
			$input.focus();
			setTimeout(function(){$search.addClass('show');},100);
			common.lock();
		});
		$close.on('click', function() {
			$search.removeClass('show');
			setTimeout(function(){$search.hide();},400);
			$open.focus();
			common.unlock();
		});
	},
	sitemap:function(){
		var $sitemap = $('.sgi_sitemap'),
			$open = $('.s_link .sitemap'),
			$scroller = $sitemap.find('.nano');
			$close = $('.sgi_sitemap').find('.btn_close_sitemap');
		$sitemap.attr('aria-hidden','true');
		$open.on('click', function() {
			$sitemap.attr({'aria-hidden':'false','tabindex':'0'}).fadeIn(100).addClass('show').focus();
			$sitemap.on('blur', function(){ $(this).removeAttr('tabindex')});
			$scroller.nanoScroller({alwaysVisible:true});
			common.lock();
		});
		$close.on('click', function() {
			$sitemap.removeClass('show');
			setTimeout(function(){$sitemap.hide();},600);
			$sitemap.attr('aria-hidden','true').removeAttr('tabindex');
			$open.focus();
			common.unlock();
		});
	},
	floating:function(){
		var _windowW = $(window).width(),
			$floating = $('.sgi_floating'),
			$floatingFocus = $floating.find('a[href], button'),
			$top = $('.sgi_floating button.btn_top'),
			$close = $('.sgi_floating button.btn_close'),
			_closeTxt = $close.find('.offscreen');
		function floatingShow() {
			$floating.removeClass('hidden');
			_closeTxt.text('퀵메뉴닫기');
		}
		function floatingHide() {
			$floating.addClass('hidden');
			_closeTxt.text('퀵메뉴열기');
		}
		(_windowW < 1570) ? floatingHide() : floatingShow();
		if($floating.hasClass('hidden')){
			$floatingFocus.on('focusin', function() {
				floatingShow();
			});
		}
		$close.on('click', function() {
			($(this).closest('.sgi_floating.hidden').length) ? floatingShow() : floatingHide();
		});
		$(window).scroll(function() {
			($(window).scrollTop() > 100) ? $top.addClass('show') : $top.removeClass('show');
		});
	},
	btnTrigger:function(){
		var $top = $('.sgi_floating button.btn_top'),
			$btnToggle = $('.btn_sgi_toggle'),
			$family = $('.sgi_family_site'),
			$familyList = $family.find('.family_list'),
			$familyLinkLast = $family.find('ul>li:last-child>a'),
			$familyBtn = $family.find('>a'),
			$familyClose= $family.find('.family_close'),
			_familyBtnTxt = $family.find('>a>.offscreen'),
			$login = $('.util_menu>ul>li.login'),
			$loginList = $login.find('.login_list'),
			$loginLast = $('.util_menu>ul>li.login>ul.login_list>li:last-child>a'),
			$global = $('a.global').closest('li'),
			$globalBtn = $('a.global'),
			$globalList = $('.global_list'),
			$globalLinkLast = $('.global_list>li:last-child>a'),
			_globalBtnTxt = $globalBtn.find('.offscreen'),
			$btnQuickAll = $('.main_sgi_quick .btn_quick_all'),
			$btnCloseTopBanner = $('.top_banner .close');
		$top.on('click', function() {
			$('html,body').animate({'scrollTop':0},300);
		});
		$login.on('focusin', function(){
			$(this).addClass('focus');
		});
		$login.on('focusout', function(){
			$(this).removeClass('focus');
		});
		$btnToggle.on('click', function() {
			var $this = $(this),
				$group = $this.closest('.toggle_group');
			$group.find('.btn_sgi_toggle').removeClass('active').removeAttr('title');
			$this.addClass('active').attr('title','현재선택');
		});
		$globalBtn.on('click', function() {
			$globalList.slideToggle();
			$global.toggleClass('show');
			($global.hasClass('show')) ? _globalBtnTxt.text('닫기') : _globalBtnTxt.text('열기');
		});
		$globalLinkLast.on('focusout', function() {
			$globalList.slideUp();
			$global.removeClass('show');
			_globalBtnTxt.text('열기');
		});
		$familyBtn.on('click', function(e) {
			e.preventDefault();
			$familyList.slideToggle();
			$family.toggleClass('show');
			($family.hasClass('show')) ? _familyBtnTxt.text('닫기') : _familyBtnTxt.text('열기');
		});
		$familyLinkLast.on('focusout', function() {
			$familyList.slideUp();
			$family.removeClass('show');
			_familyBtnTxt.text('열기');
		});
		$familyClose.on('click', function() {
			$familyList.slideUp();
			$family.removeClass('show');
			_familyBtnTxt.text('열기');
			$familyBtn.focus();
		});
		$btnQuickAll.on('click', function() {
			var $this = $(this),
				_txt = $(this).find('span'), 
				$addService = $('.main_sgi_quick .add_service');
			$this.toggleClass('close');
			$addService.slideToggle();
			($this.hasClass('close')) ? _txt.text('닫기') : _txt.text('전체보기');
		});
		$btnCloseTopBanner.on('click', function() {
			$(this).closest('.top_banner').slideUp().addClass('off');
		});
		$('.target_show').on('click', function() {
			var $target = $($(this).attr('href'));
			$target.show();
			var _top = $target.offset().top-30;
			$('html,body').animate({'scrollTop':_top},600);
		});
		$('.file_upload span.upload').bind('keypress keyup', function(e) {
		  if(e.which === 32 || e.which === 13){
			e.preventDefault();
			$(this).closest('.file_upload').find('.type_file').click();
		  }    
		});
		$('.file_upload .type_file').change(function(e) {
		  var filename = $(this).val().split('\\').pop();
		  $(this).closest('.file_upload').find('.txt').val(filename).attr('placeholder', filename).focus();
		});
		$('.file_upload .file_del').on('click', function() {
		  $(this).closest('.file_upload').find('.txt').val('').attr('placeholder', '파일을 선택하세요.').focus();
		});
		if($('.radio.tab').length){
			$('.radio.tab input').each(function(){
				var $this = $(this),
					$link = $(this).attr('link');
				if($this.prop('checked') == true) $('#'+$link).show().addClass('active');
			});
			$(document).on('change', '.radio.tab input', function(){
				var $link = $(this).attr('link');
				var $group = $(this).attr('group');
				if($(this).attr('group')){
					var $group = $(this).attr('group');
					$('.'+$group).hide().removeClass('active');
					$('#'+$link).show().addClass('active');
					if($('#'+$link).find('nano').length) common.scrollSkin();
				} else {
					$('.rdo_panel').hide().removeClass('active');
					$('#'+$link).show().addClass('active');
					if($('#'+$link).find('nano').length) common.scrollSkin();
				}
			});
		}
		if($('.checkbox.tab').length){
			$('.checkbox.tab input').each(function(){
				var $this = $(this),
					$link = $(this).attr('link');
				if($this.prop('checked') == true) $('#'+$link).show().addClass('active');
			});
			$(document).on('change', '.checkbox.tab input', function(){
				var $this = $(this),
					$link = $this.attr('link');
				($this.prop('checked') == true) ? $('#'+$link).show().addClass('active') : $('#'+$link).hide().removeClass('active');
			});
		}
		if($('span.v_pad input[type="checkbox"]').length){
			$(document).on('change', 'span.v_pad input[type="checkbox"]', function(){
				var $this = $(this),
					$label = $this.closest('label');
				($this.prop('checked') == true) ? $label.addClass('chk') : $label.removeClass('chk');
			});
			$(document).on('focus', 'span.v_pad input[type="checkbox"]', function(){
				var $this = $(this),
					$label = $this.closest('label');
				$label.addClass('focus');
			});
			$(document).on('focusout', 'span.v_pad input[type="checkbox"]', function(){
				var $this = $(this),
					$label = $this.closest('label');
				$label.removeClass('focus');
			})
		}
	},
	btmFixed:function(target, std){
		var $target = $(target), 
			$std = $(std),
			$banner = $('.top_banner'),
			$cs = $('.main_sgi_cs');
		if(!$target.length) return false;
		$(window).scroll(function(e) {
			var _st = $(this).scrollTop() + $std.outerHeight(),
				_footTop = $std.offset().top,
				_maxT = _footTop - $target.outerHeight();
			if($cs.length && $banner.length) {
				_maxT = _maxT - 155;
			} else if($cs.length && !$banner.length) {
				_maxT = _maxT - 75;
			}
			(_st < _maxT) ? $target.removeClass('abs') : $target.addClass('abs');
		});
	},
	targetMove:function(){
		var target = $('.target_move'); 
		if(target.length){
			var $btn = target.find('a');
			$btn.on('click', function() {
				var $this = $(this), _herf = $this.attr('href'),
					_top = $(_herf).offset().top-30;
				$('html,body').animate({'scrollTop':_top},600);
			});
		}
	},
	calendar:function(element){
	//jquery UI datepicker
		var prevYrBtn = $('<button type="button" class="ui-datepicker-prev-y"><span class="offscreen">이전년도</span></button>');
		var nextYrBtn = $('<button type="button" class="ui-datepicker-next-y"><span class="offscreen">다음년도</span></button>');

		if($(element).length){
			$(element).each(function(){
				var $this = $(this),
					$minDate = $(this).data('min'),
					$maxDate = $(this).data('max');
				if($minDate == undefined)$minDate = '-100y';
				if($maxDate == undefined)$maxDate = '+100y';
				$this.datepicker({
					minDate: $minDate,
					maxDate: $maxDate,
					closeText: '닫기',
					prevText: '이전달',
					nextText: '다음달',
					currentText: '오늘',
					buttonText : '기간조회',
					monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
					monthNamesShort:['01','02','03','04','05','06','07','08','09','10','11','12'],
					dayNamesMin: ['일','월','화','수','목','금','토'],
					dateFormat:'yy-mm-dd',
					yearRange:'-100:+100',
					yearSuffix: '.',
					showMonthAfterYear: true,
					showButtonPanel: true,
					showOn:'button',
					changeMonth: true,
					changeYear: true,
					showOtherMonths: true,
					selectOtherMonths: true,
					beforeShow: function(el,ob){
						//열때
						var $cal = $('#'+ob.dpDiv[0].id);
						$(this).prop('readonly',true);
						setTimeout(function(){
							var $header = $cal.find('.ui-datepicker-header');
							$header.find('.ui-datepicker-prev').before(prevYrBtn);
							$header.find('.ui-datepicker-next').after(nextYrBtn);
							prevYrBtn.unbind('click').bind('click',function(){
								$.datepicker._adjustDate($this,-1,'Y');
							});
							nextYrBtn.unbind('click').bind('click',function(){
								$.datepicker._adjustDate($this,+1,'Y');
							});
							$cal.attr('tabindex',0).focus();
						},5);
					},
					onChangeMonthYear: function(y,m,ob){
						//달력 바뀔때
						var $cal = $('#'+ob.dpDiv[0].id);
						setTimeout(function(){
							var $header = $cal.find('.ui-datepicker-header');
							$header.find('.ui-datepicker-prev').before(prevYrBtn);
							$header.find('.ui-datepicker-next').after(nextYrBtn);
							prevYrBtn.unbind('click').bind('click',function(){
								$.datepicker._adjustDate($this,-1,'Y');
							});
							nextYrBtn.unbind('click').bind('click',function(){
								$.datepicker._adjustDate($this,+1,'Y');
							});
							$cal.focus();
						},5);
					},
					onSelect: function(d,ob){
						$(ob.input).change();
						var $cal = $('#'+ob.dpDiv[0].id);
						$cal.removeAttr('tabindex');
						$(this).next('.ui-datepicker-trigger').focus();
						$(this).prop('readonly',false);
						common.dateValue(this,'.sgi_datepicker',d);
					},
					onClose: function(d,ob){
						var $cal = $('#'+ob.dpDiv[0].id);
						$cal.removeAttr('tabindex');
						$(this).next('.ui-datepicker-trigger').focus();
						$(this).prop('readonly',false);
						$this.closest('.date_range').find('.btn_date_group>button').removeClass('active').removeAttr('title');
					}
				});
				
				var $btnDateGroup = $('.btn_date_group button');
				$btnDateGroup.on('click', function() {
					var $btn = $(this),
						$dateRange = $btn.closest('.date_range'),
						$start = $dateRange.find('.start'),
						$end = $dateRange.find('.end'),
						_data = $btn.attr('data-date'),
					 	num = _data.replace(/[a-z]/g, ''),
					 	str = _data.replace(/[0-9]/g, ''),
					 	today = new Date(),
						endDate = $.datepicker.formatDate('yy-mm-dd', today);
					$end.val(endDate);
					if(str == 'd'){
						today.setDate(today.getDate() - num);
					}else if (str == 'w'){
						today.setDate(today.getDate() - (num*7));
					}else if (str == 'y'){
						today.setYear(today.getFullYear() - num);
						today.setDate(today.getDate());
					}else if (str == 'm'){
						today.setMonth(today.getMonth() - num);
						today.setDate(today.getDate() - 1);
					}
					var startDate = $.datepicker.formatDate('yy-mm-dd', today);
					$start.val(startDate);
				});
			});
			$(element).focusin(function(){
				if($(this).hasClass('ui-date')){
					var $val = $(this).val();
					$(this).val(onlyNumber($val));
				}
			});
			$(element).focusout(function(){
				if($(this).hasClass('ui-date')){
					var $val = $(this).val();
					$(this).val(autoDateFormet($val,'.'));
				}
			});
		}
		$.fn.inputOnlyNumber = function(){
			this.val(this.val().replace(/[^0-9]/g, ''));
		};
		$.fn._enterDateText = function(){
			this.on('input.sgi_datepicker', function(){
				$(this).inputOnlyNumber();
				var nowValue = this.value;
				if (nowValue.length > 4) {
					this.value = nowValue.substr(0, 4) + '-' + nowValue.substr(4);
					if (nowValue.length > 6) {
						this.value = nowValue.substr(0, 4) + '-' + nowValue.substr(4, 2) + '-' + nowValue.substr(6);
					}
				}
			});
			this.on('focusout.sgi_datepicker', function(){
				var nowValue = this.value;
				var arrValue = nowValue.split('-');
				var arrNumValue = arrValue.map(function(v) {
					return parseInt(v, 10);
				});
				var yy = arrNumValue[0],
					mm = arrNumValue[1],
					dd = arrNumValue[2];
				// 날짜 유효성 체크
				function checkValidDate() {
					var result = true;
					try {
						var dateRegex = /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
						result = dateRegex.test(dd+'-'+mm+'-'+yy);
					} catch (err) {
						result = false;
					}
					return result;
				}
				// 오늘 이후의 날짜인지 return
				function checkAfterDate(){
					var nowDate = new Date();
					var targetDate =  new Date(yy, mm-1, dd);

					return (
						( nowDate.getTime() - ((nowDate.getHours()*3600 + nowDate.getMinutes()*60 + nowDate.getSeconds())*1000 ) - targetDate.getTime() )/(1000*3600*24) <= 0
					);
				}
				if(nowValue.length < 10) this.value = '';// 덜 입력할때
				$(this).closest('.date_range').find('.btn_date_group>button').removeClass('active').removeAttr('title');
			});
		};
		$('.sgi_datepicker').each(function(idx, item){
			$(item)._enterDateText();
		});
	},
	month:function(element){
	//jquery UI datepicker
		if($(element).length){
			$(element).each(function(){
				var $this = $(this);
				$this.monthpicker({
					monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
					pattern:'yyyy-mm',
					openOnFocus:false
				});
				var $btnMonth = '<button type="button" class="btn_month">월조회</button>';
				$this.parent('span.date').append($btnMonth);
				$this.next('.btn_month').on('click', function(e){
					$this.monthpicker('show');
				});
			});
			$(element).focusin(function(){
				if($(this).hasClass('ui-date')){
					var $val = $(this).val();
					$(this).val(onlyNumber($val));
				}
			});
			$(element).focusout(function(){
				if($(this).hasClass('ui-date')){
					var $val = $(this).val();
					$(this).val(autoDateFormet($val,'.'));
				}
			});
		}
		$.fn.inputOnlyNumber = function(){
			this.val(this.val().replace(/[^0-9]/g, ''));
		};
		$.fn._enterDateText = function(){
			this.on('input.sgi_monthpicker', function(){
				$(this).inputOnlyNumber();
				var nowValue = this.value;
				if (nowValue.length > 4) {
					this.value = nowValue.substr(0, 4) + '-' + nowValue.substr(4);
					if (nowValue.length > 6) {
						this.value = nowValue.substr(0, 4) + '-' + nowValue.substr(4, 2);
					}
				}
			});
		};
		$('.sgi_monthpicker').each(function(idx, item){
			$(item)._enterDateText();
		});
	},
	dateValue:function(target,className,dateVal){
		var $this = $(target);
		var $closest = $this.closest('.date_range');
		if($closest.length && $closest.find(className).length == 2){
			var $idx = $closest.find(className).index(target),
				$range = $this.data('range');
			if(!!$range){
				var $getDate = $this.datepicker('getDate');
				if(className == '.sgi_datepicker'){
					dateVal = autoDateFormet(dateVal,'-');
					$getDate = new Date(dateVal);
				}
				var $rangeAry = $range.split(' '),
					$getDateYear = $getDate.getFullYear(),
					$getDateMonth = $getDate.getMonth(),
					$getDateDay = $getDate.getDate(),
					$setDateYear = 0,
					$setDateMonth = 0,
					$setDateDay = 0,
					$setDateTxt = '';
				//for(var i in $rangeAry){
				for(var i=0; i<$rangeAry.length; i++){
					var $yIdx = $rangeAry[i].indexOf('y');
					var $mIdx = $rangeAry[i].indexOf('m');
					var $dIdx = $rangeAry[i].indexOf('d');
					if($yIdx >= 0)$setDateYear = parseInt($rangeAry[i].substr(0,$yIdx));
					if($mIdx >= 0)$setDateMonth = parseInt($rangeAry[i].substr(0,$mIdx));
					if($dIdx >= 0)$setDateDay = parseInt($rangeAry[i].substr(0,$dIdx));
				}
			}
			var $first = $closest.find(className).eq(0),
				$last = $closest.find(className).eq(1);
			if($idx == 0){ //앞달력 날짜 선택 시
				if(className == '.sgi_datepicker')$last.datepicker('option','minDate',dateVal);
				if(!!$range){
					$getDate.setDate($getDateDay+$setDateDay-1);
					if($setDateMonth > 0)$getDate.setDate($getDate.getDate()+($setDateMonth*30));
					if($setDateYear > 0)$getDate.setYear($getDate.getFullYear()+$setDateYear);
					$setDateTxt = autoDateFormet(timeString($getDate).substr(0,8));
					$last.val($setDateTxt);
				}
			}else{	//뒷달력 날짜 선택 시
				if(className == '.sgi_datepicker')$first.datepicker('option','maxDate',dateVal);
				if(!!$range){
					$getDate.setDate($getDateDay-$setDateDay+1);
					if($setDateMonth > 0)$getDate.setDate($getDate.getDate()-($setDateMonth*30));
					if($setDateYear > 0)$getDate.setYear($getDate.getFullYear()-$setDateYear);
					$setDateTxt = autoDateFormet(timeString($getDate).substr(0,8));
					$first.val($setDateTxt);
				}
			}
		}
	},
	dateFormat:function(target, data){
		function setLPadding (oOrg, sPaddingChar, iNum) {
			if (oOrg == null || sPaddingChar == null || iNum == null) return;

		 	var sReturn, sOrgStr;
		 	var sPaddingStr = "";

		 	if (typeof(oOrg) == "object")
		 		sOrgStr = oOrg.value;
		 	else if (typeof(oOrg) == "string")
		 		sOrgStr = oOrg;
		 	else
		 		return;

		 	if (sOrgStr.length == 0) return;

		 	for (var i=0; i < iNum; i++) {
		 		sPaddingStr += sPaddingChar;
		 	}

		 	sReturn = (sPaddingStr + sOrgStr).substring((sPaddingStr + sOrgStr).length-iNum, (sPaddingStr + sOrgStr).length);

		 	if (typeof(oOrg) == "object")
				oOrg.value = sReturn;
		 	else
		 		return	sReturn;
		}
		
		function isDate ( source ) {
			source = source.replace( /\/|\-/g, "" );
			if (source.length != 8) return false;

			var year 	= source.substring(0,4);
			var month 	= source.substring(4,6);
			var day   	= source.substring(6,8);

			if ( parseFloat( year ) >= 1900  && checkMonth( month ) && checkDay( year,month ,day) )
				return true;
			else
				return false;
		}
		
		function checkDay( yyyy, mm, dd )
		{
			var monthDD = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
			var year = parseFloat(yyyy);
			var im = parseFloat(mm) - 1;

			if( ( (yyyy % 4 == 0) && (yyyy % 100 != 0)) || (yyyy % 400 == 0) )
				monthDD[1] = 29;

			if( parseFloat( dd ) <= 0 || parseFloat( dd ) > monthDD[im] )
				return false;
			else
				return true;
		}
		
		function checkMonth( source ) {
			if ( parseFloat( source ) <= 0  || parseFloat( source ) > 12  )
				return false;
			else
				return true;
		}
		
		function trim (expression) {
			if (expression == null) return (false);
			return rtrim(ltrim(expression));
		}
		
		function ltrim (expression) {
			var i = 0;
			var j = expression.length - 1;

			if (expression == null) return (false);

			for (var i = 0; i < expression.length; i++)	{
				if (expression.substr(i, 1) != ' ' && expression.substr(i, 1) != '\t') 	break;
			}

			if (i <= j)
				return (expression.substr(i, (j+1)-i));
			else
				return ('');
		}
		
		function rtrim (expression) {
			var i = 0;
			var j = expression.length - 1;

			if (expression == null) return (false);

			for (var j = expression.length - 1; j >= 0; j--)	{
				if (expression.substr(j, 1) != ' ' && expression.substr(j, 1) != '\t') 	break;
			}

			if (i <= j)
				return (expression.substr(i, (j+1)-i));
			else
				return ('');
		}
		
		/**
		 * date string formatting
		 *
		 * @param		expression				string(YYYY/MM/DD or YYYYMMDD or "")
		 * @param		formatType				YYYY/MM/DD, YYYYMMDD, YYYY/MM (optional)
		 * @return	formatted date string/false
		 */
		function formatDate (expression, formatType) {
			var formatString;
			var sDate;
			var dToday = new Date();

			if(expression != null && trim(expression) != ""){
				sDate = expression ;
			}
			else{
				var curYear 	= dToday.getFullYear().toString();
				var curMonth 	= ((dToday.getMonth() + 1) + 100).toString().substr(1,2);
				var curDay 	= ((dToday.getDate()) + 100).toString().substr(1,2);

				sDate = curYear + curMonth + curDay;
			}

			var fieldValue = sDate.replace( /\/|\-/g, "" );

			if (!isDate(fieldValue)) return false;
			if (formatType == null) formatType = 1;

			var sYear 	= fieldValue.substr(0,4);
			var sMonth	= fieldValue.substr(4,2);
			var sDay 	= fieldValue.substr(6,2);

			switch ( formatType ){
				case "YYYY/MM/DD":
					formatString = sYear + DATE_SEPARATOR + sMonth + DATE_SEPARATOR + sDay;
					break;
				case "YYYY-MM-DD":
					formatString = sYear + "-" + sMonth + "-" + sDay;
					break;
				case "YYYYMMDD":
					formatString = sYear + sMonth + sDay;
					break;
				case "YYYY/MM":
					formatString = sYear + DATE_SEPARATOR + sMonth;
					break;
				default:
					formatString = sYear + DATE_SEPARATOR + sMonth + DATE_SEPARATOR + sDay;
			}

			return formatString;
		}

		/**
		 * 날짜 더하기
		 *
		 * @param		sDate		Date String (YYYYMMDD)
		 * @param		sOpt		add option ("Y", "M", "D")
		 * @param		iAddValue	add value
		 * @return		String
		 */
		function DateAdd (sDate, sOpt, iAddValue) {
			var sReturn = "";

			switch (sOpt) {
			case "y":
				var sYear = (parseFloat(sDate.substr(0,4)) + parseInt(iAddValue)).toString();
				sReturn = sYear + sDate.substr(4,7);
				break;
			case "m":
				var iMonth = parseInt((parseFloat(sDate.substr(4,2)) + parseInt(iAddValue)) % 12);
				var iYear;
				if (iMonth == 0) {
					iYear = parseInt((parseFloat(sDate.substr(4,2)) + parseInt(iAddValue)) / 12) - 1;
					iMonth = 12;
				}
				else
					iYear = parseInt((parseFloat(sDate.substr(4,2)) + parseInt(iAddValue)) / 12);
				
				var beforeDay = sDate.substr(6,2);
				var afterDay = sDate.substr(6,2);
				
				// -1m으로 들어올 경우 2021년 12월 31일의 -1m은 2021년 11월 31일로 계산되어 오류가 발생한다. 따라서 이런 경우 각 달의 마지막 날로 바꾼다. 2021.12.31 유영철
				// 30일이 말일인 경우 4 6 9 11
				if(iMonth == 4 || iMonth == 6 || iMonth == 9 || iMonth == 11){
					if(sDate.substr(6,2) > 30){
						afterDay = 30;
					}

				// 31일이 말일인 경우 1 3 5 7 8 10 12
				} else if(iMonth == 1 || iMonth == 3 || iMonth == 5 || iMonth == 7 || iMonth == 8 || iMonth == 10 || iMonth == 12){
					if(sDate.substr(6,2) > 31){
						afterDay = 31;
					}
				
				// 2월은 윤년이냐 아니냐에 따라 28일, 29일로 나뉜다. 따라서 아래와 같이 계산한다.
				} else if(iMonth == 2){

					// 29일이 말일인 경우 (윤년 윤달) 4로 나누어 떨어지고, 100으로 나누어 떨지지 않으면 윤년, 100으로 나누어 떨어져도 400으로 나누어 떨어지면 윤년
					if(sYear % 4 == 0 && (sYear % 100 > 0 || (sYear % 100 == 0 && sYear % 400 == 0) ) ){
						if(sDate.substr(6,2) > 29){
							afterDay = 29;
						}
					
					// 28일이 말일인 경우 2월
					} else {
						if(sDate.substr(6,2) > 28){
							afterDay = 28;
						}
					}
				}
				
				sReturn = (parseInt(sDate.substr(0,4)) + iYear).toString() + setLPadding((iMonth).toString(), "0", 2) + afterDay;
				break;
			case "d":
				var date = new Date(parseFloat(sDate.substr(0,4)), parseFloat(sDate.substr(4,2))-1, parseFloat(sDate.substr(6,2)));
				date.setDate(date.getDate() + (parseInt(iAddValue)));
				sReturn = date.getFullYear() + setLPadding((date.getMonth() + 1).toString(), "0", 2) + setLPadding((date.getDate()).toString(), "0", 2);
				break;
			}

			return sReturn;
		}
		
		var inputData = "";
		
		if(data.length != 8) {
			var num = data.replace(/[a-z]/g, '');
			if(num == '') num = 0;
		 	var str = data.replace(/^-?[0-9]/g, '');
		 	//console.log("num==="+num);
		 	//console.log("str==="+str);
		 	data = data.replace("-", "").replace("-", "");
		 	
		 	var cur_today = new Date();
		 	if(str == 'd'){
		 		cur_today.setDate(cur_today.getDate() - num);
			}else if (str == 'w'){
				cur_today.setDate(cur_today.getDate() - (num*7));
			}else if (str == 'y'){
				cur_today.setYear(cur_today.getFullYear() - num);
				cur_today.setDate(cur_today.getDate());
			}else if (str == 'm'){
				cur_today.setMonth(cur_today.getMonth() - num);
				cur_today.setDate(cur_today.getDate() - 1);
			}
		 	
		 	data = DateAdd(formatDate(cur_today, 'YYYYMMDD'), str, num);
		}
		
		value = String(data).substr(0, 4) + '-' + String(data).substr(4, 2) + '-' + String(data).substr(6, 2);
		$(target).val(value);
	},
	scrollSkin:function(){
		var $scroll = $('.nano');
		if($scroll.length){
			 $scroll.each(function(){
				$(this).nanoScroller({alwaysVisible:true});
			});
		}
	},
	sgiMap:function(){
		if(!$('.sgi_branch_map').length) return false;
		var $mapSection = $('.sgi_branch_map'),
		    $plannerMap = $mapSection.find('#sgiBranchMap'),
			$mapArea = $mapSection.find('area'),
			$mapAreaCurrent = $mapSection.find('area.current'),
			mapImg = $mapSection.find('#imgBranchMap'),
			areaNum = 0;
		$mapArea.on('mouseover focusin', function () {
			var myNum = this.href.substring(this.href.indexOf("#")+1);
			mapImg.attr('src', '../../../img/sgi/contents/sgi_branch_map'+myNum+'.gif');
		}).on('mouseout focusout', function () {
			if($mapArea.hasClass('current')){
				mapImg.attr('src', '../../../img/sgi/contents/sgi_branch_map'+areaNum+'.gif');
			} else {
				mapImg.attr('src', '../../../img/sgi/contents/sgi_branch_map1.gif');
			}
		});
		$mapArea.on('click', function (e) {
			var myNum = this.href.substring(this.href.indexOf("#")+1),
				txt = $(this).attr('alt');
			$(this).addClass('current').attr('alt',txt+' 현재선택');
			$(this).siblings('area').each(function(){
				var $alt = $(this).attr('alt');
				$(this).removeClass('current');
				$(this).attr('alt',$alt.replace('현재선택',''));
			})
			areaNum = $(this).index()+2;
		});
	},
	sgiInsSearch:function(){
		var $search = $('#sgiProductSearchBtn'),
			$sort = $('.sgi_ins_p_sorting .radio input'),
			$sortGuide = $('.sgi_ins_p_sorting_guide'),
			$panel = $('.sgi_ins_p_sorting_guide .rdo_panel'),
			$defalutPanel = $('.sgi_ins_p_sorting_guide .rdo_panel.defalut');
		if(!$search.length) return false;
		var _targetTop = $('.sgi_ins_p_sorting_guide').offset().top;
		$search.on('click', function (e) {
			$sort.prop('checked',false);
			$defalutPanel.addClass('active').show().siblings('.rdo_panel').removeClass('active').hide();
			$('html, body').animate({'scrollTop':_targetTop},500);
			$sortGuide.attr('tabindex','0').focus().removeAttr('tabindex');
		});
		$sort.on('change', function() {
            $('html, body').animate({'scrollTop':_targetTop},500);
			$sortGuide.attr('tabindex','0').focus().removeAttr('tabindex');
        });
	},
	init: function(){
		common.winLoad();
		common.contentH();
		common.navTrigger();
		common.delBtn('#sgiSearch1, #sgiSearch, #q_sv2');
		common.searchOpen();
		common.sitemap();
		common.floating();
		common.btnTrigger();
		common.btmFixed($('.sgi_floating'), $(common.footer));
		common.targetMove();
		common.calendar('.sgi_datepicker');
		common.month('.sgi_monthpicker');
		common.scrollSkin();
		common.sgiMap();
		common.sgiInsSearch();
	}
};
//--------------------------------------------------------------------
// Tooltip
//--------------------------------------------------------------------
var tooltipFlag = 0;
var tooltip = function(){
	var $tooltip = $('.sgi_tooltip'), $panel = $tooltip.find('.sgi_tooltip_panel'), $btnOpen = $tooltip.find('button:first'), $btnClose = $tooltip.find('.sgi_tooltip_close');
	var $focus = 'a[href], area[href], input:not([disabled]), input:not([readonly]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex=0]';
	$panel.attr('aria-hidden','true');
	$btnOpen.attr({'aria-haspopup':'true', 'aria-expanded':'false', 'title':'내용열기'}).addClass('sgi_tooltip_open');
	
	$('.sgi_tooltip_open').on('mouseover focusin', function (e){
		var $this = $(this);
		$tooltip.addClass('z0');
		$this.attr({'aria-expanded':'true', 'title':'내용닫기'}).closest('.sgi_tooltip').removeClass('z0').find('.sgi_tooltip_panel').attr({'aria-hidden':'false'}).show();
		var $tooltipH = $this.outerHeight(),
			$tooltipY,
			$panelHeight = $this.closest('.sgi_tooltip').find('.sgi_tooltip_panel').outerHeight(),
			$scrollEnd = $(window).scrollTop()+$panelHeight+100, 
			$scrollEndDialog = $('.dialog_content_scroller').scrollTop()+$panelHeight;
		($this.closest('.dialog_content_scroller').length > 0) ? $tooltipY = $this.position().top : $tooltipY = $this.offset().top
		if($scrollEnd > ($tooltipH+$tooltipY) || $scrollEndDialog > ($tooltipH+$tooltipY)){
			$tooltip.addClass('down');
		}else{
			$tooltip.removeClass('down');
		}
		tooltipFlag = 1;
	}).on('mouseout focusout', function (e){
		var $this = $(this);
		$tooltip.removeClass('z0');
		$this.attr({'aria-expanded':'false', 'title':'내용열기'}).closest('.sgi_tooltip').find('.sgi_tooltip_panel').attr('aria-hidden','true').hide();
		tooltipFlag = 0;
	});
};
//--------------------------------------------------------------------
// Accordion
//--------------------------------------------------------------------
var accordion = {
	toggler: '.accordion>.item>.title>h5>button',
	allOpenToggler: '.accordion.open>.item>.title>h5>button',
	arrow: '<i class="arrow"><span class="offscreen">내용열기</span></i>',
	arrowTxt: '.accordion>.item>.title>h5>button .offscreen',
	toggleOpen: '.accordion>.item.open',
	allControl: '.accordion>.accordion_control>button',
	set: function(){
		if(!$(accordion.toggler).length) return false;
		if(!$(accordion.toggler).find('.arrow').length) $(accordion.toggler).attr('aria-expanded','false').append(accordion.arrow);
		if($(accordion.toggleOpen).length){
			$(accordion.toggler).attr('aria-expanded','false').find('.offscreen').text('내용열기');
			$('.accordion .panel').hide().attr('aria-hidden','true');
			$(accordion.toggleOpen).addClass('active').find('.title>h5>button').attr('aria-expanded','true').find('.offscreen').text('내용닫기');
			$(accordion.toggleOpen).find('.panel').show().attr('aria-hidden','false');
			$(accordion.toggleOpen).removeClass('open');
		}
		if($(accordion.toggler).closest('.accordion.open').length) accordion.open($(accordion.allOpenToggler));
	},
	trigger: function(){
		$(accordion.toggler).off().on('click', function() {
			var $this = $(this);
			if($this.closest('.item.disabled').length) return false;
			($this.attr('aria-expanded') == 'false') ? accordion.open($this) : accordion.close($this);
		});
		$(accordion.allControl).off().on('click', function() {
			var $this = $(this), $toggler = $this.closest('.accordion').find('.item>.title>h5>button');
			($this.hasClass('open')) ? accordion.open($toggler) : accordion.close($toggler);
		});
	},
	open: function(target){
		var $item = target.closest('.item'),
			$panel = $item.find('.panel'),
			$txt = $item.find('.title button .offscreen'),
			$toggle = target.closest('.toggle');
		if($toggle.length){
			$item.siblings('.item').removeClass('active').find('.title>h5>button').attr('aria-expanded','false');
			$item.siblings('.item').find('.panel').slideUp().attr('aria-hidden','true');
			$(accordion.arrowTxt).text('내용열기');
		}
		target.attr('aria-expanded','true');
		$item.addClass('active');
		$txt.text('내용닫기');
		$panel.slideDown().attr('aria-hidden','false');
		if($panel.find('.nano').length) $panel.find('.nano').nanoScroller({alwaysVisible:true});
	},
	close: function(target){
		var $item = target.closest('.item'),
			$panel = $item.find('.panel');
		target.attr('aria-expanded','false');
		$item.removeClass('active');
		$(accordion.arrowTxt).text('내용열기');
		$panel.slideUp().attr('aria-hidden','true');
	},
	init: function(){
		accordion.set();
		accordion.trigger();
	}
};
//--------------------------------------------------------------------
// Tab UI
//--------------------------------------------------------------------
var tabUI = {
	tab : '.js_tab',
	tabBtn : '.js_tab a',
	tabMenu : '.tab_menu',
	onText : '현재선택',
	set : function(){
		if(!$(tabUI.tab).length) return;
		$(tabUI.tab).each(function(e){
			$(this).find('ul').attr('role','tablist');
			var tarAry = [];
			var $li = $(this).find('li');
			var tabNum = $li.length;
			var $active = $(this).find('li.active');
			$li.each(function(f){
				$(this).attr('role','presentation');
				var _a = $(this).find('a'),
					_aId = _a.attr('id'),
					_href = _a.attr('href');
				if(!_aId) _aId = 'tab_btn_'+e+'_'+f;
				tarAry.push(_href);
				_a.attr({
					'id' :_aId,
					'role' :'tab',
					'aria-controls': _href.substring(1),
					'aria-selected':'false'
				});
				$(_href).attr({
					'role':'tabpanel',
					'aria-labelledby':_aId,
					'aria-expanded':'false'
				});
			});
			$(this).data('target',tarAry.join(','));
			if(!$li.hasClass('active')){
				var $tPanel = $li.eq(0).addClass('active').find('a').attr('href'),
					$tabs = $li.closest('ul').find('li').filter(function(){
						return $(this).css('display')!='none';
					});
				$li.eq(0).find('a').attr({'title':tabUI.onText, 'aria-selected':'true'});
				$($tPanel).addClass('active').attr('aria-expanded','true').siblings('.tab_panel').removeClass('active').attr('aria-expanded','false');
				setTimeout(function(){$($tPanel).addClass('on')},10);
				if($($tPanel).find('.nano').length) common.scrollSkin();
			} else {
				var $tPanel = $active.find('a').attr('href'),
					$tabs = $li.closest('ul').find('li').filter(function(){
						return $(this).css('display')!='none';
					});
				$($tPanel).addClass('active').attr('aria-expanded','true').siblings('.tab_panel').removeClass('active').attr('aria-expanded','false');
				setTimeout(function(){$($tPanel).addClass('on')},10);
				if($($tPanel).find('.nano').length) common.scrollSkin();
			}
		});
	},
	trigger: function(){
		$(document).on('click', tabUI.tabBtn, function(e){
			e.preventDefault();
			var $this = $(this),
				$li = $this.closest('li'),
				$idx = $li.index(),
				$closest = $this.closest('.js_tab'),
				tabNum = $closest.find('ul>li').length,
				$href = $this.attr('href'),
				$tabs = $this.closest('ul').find('li').filter(function(){
					return $(this).css('display')!='none';
				});
			if($($href).length){
				$($href).show().addClass('active').attr('aria-expanded',true).siblings('.tab_panel').attr('aria-expanded',false).removeClass('active').hide();
				setTimeout(function(){
					$($href).addClass('on').siblings('.tab_panel').removeClass('on');
				},10);
				$this.attr('title',tabUI.onText).parent().addClass('active').siblings().removeClass('active').find('a').removeAttr('title');
				$this.attr('aria-selected',true).closest('li').siblings().find('[role=tab]').attr('aria-selected',false);
				if($($href).closest('.dialog_content').length) Dialog.height($($href).closest('.dialog'));
				if($($href).siblings('.tab_panel').find('.ani').length) {
					$($href).siblings('.tab_panel').find('.ani').removeClass('on');
				} else if ($($href).find('.ani').length) {
					$(window).scroll();
				}
			}
			if($($href).find('.main_sgi_product_slide').length) {
				$mainSgiProductSlide.slick('slickSetOption', 'refresh', '', true);
				$mainSgiProductSlide.find('.main_sgi_product_item:not(.slick-active)').attr('tabindex','-1').find('a').attr('tabindex','-1');
				$mainSgiProductSlide.find('.slick-current').prev('.slick-slide').addClass('prev off');
			}
			if($($href).find('.nano').length) common.scrollSkin();
		});
	},
	init: function(){
		tabUI.set();
		tabUI.trigger();
	}
};
//--------------------------------------------------------------------
// 레이어팝업
//--------------------------------------------------------------------
var $focus ='a[href], area[href], input:not([disabled],[readonly]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
var Dialog ={
	focusClass:'dialog_focused',
	open:function(tar){
		var $select_id = $(tar),
			$body = $('body'),
			$lastCloseBtn = '<a href="#" class="dialog_close last_focus role="button"><span class="offscreen">팝업창 닫기</span></a>',
			$scroller = $select_id.find('.nano');
		common.lock();
		//원래 포커스에 클래스 부여
		var $focus = $(':focus');
		if($focus.length){
			$($focus).addClass(Dialog.focusClass);
		}
		
		//팝업 마지막 포커스 버튼 적용
		$select_id.find('.dialog_wrap').append($lastCloseBtn);

		//열기
		$select_id.attr({'aria-hidden':'false','tabindex':'0'}).show().focus();
		setTimeout(function(){
			$select_id.addClass('show');
		},200);
		$select_id.on('blur', function(){ $(this).removeAttr('tabindex'); });
		//팝업 높이값 계산 및 스크롤 플로그인 호출
		setTimeout(function(){
			Dialog.height(tar);
		},200);
		//팝업 안에서만 포커스 이동
		Dialog.focusMove(tar);
	},
	height:function(tar){
		var $select_id = $(tar),
			$dialogScroller = $select_id.find('.dialog_content>.nano'),
			$scroller = $select_id.find('.dialog_content_scroller .nano'),
			_contentHeight = $select_id.find('.dialog_content_scroller').height(),
			$dialogContent = $select_id.find('.dialog_content');
		if($dialogContent.length){
			var _fullHeight = $(window).outerHeight() - $select_id.find('.dialog_header').outerHeight() - $select_id.find('.dialog_footer').outerHeight() - 200;
			if(_fullHeight < _contentHeight) {
				$dialogContent.css('height',_fullHeight).removeClass('no_scroll');
				$dialogScroller.nanoScroller({alwaysVisible:true});
			} else {
				$dialogContent.css('height',_contentHeight).addClass('no_scroll');
			}
		}
		if($scroller.length){
			$scroller.each(function(){
				$(this).nanoScroller({alwaysVisible:true});
			});
		}
	},
	focusMove:function(tar){
		if(!$(tar).is(':visible'))return false;
		var $tar = $(tar),
			$focusaEl = '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"])';
			$focusaEls = $tar.find($focusaEl);
			
		var $isFirstBackTab = false;
		$focusaEls.on('keydown',function(e){
			var $keyCode = (e.keyCode?e.keyCode:e.which),
				$focusable = $tar.find(':focusable').not('.last_focus'),
				$focusLength = $focusable.length,
				$firstFocus = $focusable.first(),
				$lastFocus = $focusable.last(),
				$index = $focusable.index(this);

			$isFirstBackTab = false;
			if($index == ($focusLength-1)){ //last
				if ($keyCode == 9){
					if(!e.shiftKey){
						$firstFocus.focus();
						e.preventDefault();
					};
				};
			}else if($index == 0){	//first
				if($keyCode == 9){
					if(e.shiftKey){
						$isFirstBackTab = true;
						$lastFocus.focus();
						e.preventDefault();
					};
				};
			}
		});
		
		$tar.on('keydown',function(e){
			var $keyCode = (e.keyCode?e.keyCode:e.which),
				$focusable = $tar.find(':focusable').not('.last_focus'),
				$lastFocus = $focusable.last();
			
			if(e.target == this && $keyCode == 9){
				if(e.shiftKey){
					$lastFocus.focus();
					e.preventDefault();
				};
			}
		});

		$(document).on('focusin',$tar.selector+' .last_focus',function(e){
			var $focusable = $tar.find(':focusable').not('.last_focus'),
				$firstFocus = $focusable.first(),
				$lastFocus = $focusable.last();
			if($isFirstBackTab){
				$lastFocus.focus();
			}else{
				$firstFocus.focus();
			}
		});
	},
	close:function(tar){
		//포커스 되돌려주기
		var $body = $('body'),
			$focusLength = $('.'+Dialog.focusClass).length;
		if($focusLength){
			$('.'+Dialog.focusClass).focus();
			setTimeout(function(){
				$('.'+Dialog.focusClass).removeClass(Dialog.focusClass);
			},50);
		}
		//닫기
		if($('.dialog.show').length == 1){
			common.unlock();
		}
		$(tar).attr('aria-hidden','true').removeClass('show').fadeOut(300);
		$(tar).find('.dialog_content_scroller').css('height','auto');
		isPopAllAgree = false;
	},
	init:function(){
		$('.dialog').attr({'aria-hidden':'true','aria-live':'polit','tabindex':-1});
		//열기
		$(document).on('click','.dialog_open',function(e){
			e.preventDefault();
			var $pop = $(this).attr('href');
			Dialog.open($pop);
		});
		$(document).on('click', '.dialog_close',function(e){
			e.preventDefault();
			var $pop = $(this).attr('href');
			if ($pop == '#' || $pop == '#none' || $pop == undefined)$pop = $(this).closest('.dialog');
			Dialog.close($pop);
		});
	}
};
//--------------------------------------------------------------------
// Slick
//--------------------------------------------------------------------
var $mainVisualSlide, $mainSgiProductSlide, $mainBannerSlide, $popNoticeSlide, sgiFooterBannerSlide;
var slickSlider = function(){
	if($('.main_visual_slide').length > 0) {
		var $page = $('.main_visual_control .page_num'),
			$length = $('.main_visual_slide').find('.main_visual_item').length;
		$mainVisualSlide = $('.main_visual_slide').slick({
			infinite:true,
			fade:true,
			autoplay:true,
			autoplaySpeed:6000,
			speed:1000,
			arrows:false,
			appendDots:$('.main_visual_control .pagination_dot'),
			dots:true,
			customPaging: function(slider, i) {
				var num = i+1;
				return '<button type="button" data-role="none" role="button"><span class="offscreen">'+num+'번째 배너</span></button>';
			}
		});
		$mainVisualSlide.find('.slick-current').addClass('active');
		$page.find('.current').text('1');
		$page.find('.total').text($length);
		$mainVisualSlide.find('.slick-active').removeAttr('tabindex');
		$mainVisualSlide.on('beforeChange',function(event, slick, currentSlide, nextSlide){
			var i = nextSlide+1;
			$page.find('.current').text(i);
			$page.find('.total').text(slick.slideCount);
			$(this).find('.slick-slide[data-slick-index="'+nextSlide+'"]').addClass('active');
			$(this).find('.slick-slide[data-slick-index="'+currentSlide+'"]').removeClass('active').addClass('prev_hide');
		});
		$mainVisualSlide.on('afterChange',function(event, slick, currentSlide, nextSlide){
			$(this).find('.slick-slide').removeClass('prev_hide');
		});
		$('.main_visual_control button').on('click',function(){
			var $this = $(this), $txt = $this.find('.offscreen');
			if($this.hasClass('prev')) $mainVisualSlide.slick('slickPrev');
			if($this.hasClass('next')) $mainVisualSlide.slick('slickNext');
			if($this.hasClass('pause')) {
				$mainVisualSlide.slick('slickPause');
				setTimeout(function(){$this.removeClass('pause').addClass('play');},5);
				$txt.text('배너시작');
			}
			if($this.hasClass('play')) {
				$mainVisualSlide.slick('slickPlay');
				setTimeout(function(){$this.removeClass('play').addClass('pause');},5);
				$txt.text('배너정지');
			}
		});
	}
	if($('.main_sgi_product_slide').length > 0) {
		$('.main_sgi_product_slide').each(function(){
			var $this = $(this), $btn = $this.closest('.tab_panel').find('.btn_arrow button');
			$mainSgiProductSlide = $this.slick({
				accessibility: false,
				slidesToShow: 3,
				infinite:true,
				speed:400,
				variableWidth:true, 
				cssEase:'linear',
				appendArrows:$this.closest('.tab_panel').find('.btn_arrow'),
				prevArrow:'<button type="button" class="prev slick-prev"><span class="offscreen">이전 상품</span></button>',
				nextArrow:'<button type="button" class="next slick-next"><span class="offscreen">다음 상품</span></button>'
			});
			$mainSgiProductSlide.find('.main_sgi_product_item:not(.slick-active)').attr('tabindex','-1').find('a').attr('tabindex','-1');
			$mainSgiProductSlide.find('.slick-current').prev('.slick-slide').addClass('prev off');
			$mainSgiProductSlide.on('beforeChange',function(event, slick, currentSlide, nextSlide){
				$(this).find('.slick-slide').removeClass('prev off');
				$(this).find('.slick-slide[data-slick-index="'+nextSlide+'"]').prev('.slick-slide').addClass('prev');
			});
			$mainSgiProductSlide.on('afterChange',function(event, slick, currentSlide, nextSlide){
				$(this).find('.slick-slide').removeAttr('tabindex').find('a').removeAttr('tabindex');
				$(this).find('.slick-slide:not(.slick-active)').attr('tabindex','-1').find('a').attr('tabindex','-1');
			});
		});
	}
	if($('.main_banner_slide').length > 0) {
		$mainBannerSlide = $('.main_banner_slide').slick({
			infinite:true,
			autoplay:true,
			autoplaySpeed:6000,
			speed:1000,
			fade:true,
			cssEase:'linear',
			arrows:false,
			appendDots:$('.main_banner_control .pagination_dot'),
			dots:true,
			customPaging: function(slider, i) {
				var num = i+1;
				return '<button type="button" data-role="none" role="button"><span class="offscreen">'+num+'번째 배너</span></button>';
			}
		});
		$('.main_banner_control button').on('click',function(){
			var $this = $(this), $txt = $this.find('.offscreen');
			if($this.hasClass('prev')) $mainBannerSlide.slick('slickPrev');
			if($this.hasClass('next')) $mainBannerSlide.slick('slickNext');
			if($this.hasClass('pause')) {
				$mainBannerSlide.slick('slickPause');
				setTimeout(function(){$this.removeClass('pause').addClass('play');},5);
				$txt.text('배너시작');
			}
			if($this.hasClass('play')) {
				$mainBannerSlide.slick('slickPlay');
				setTimeout(function(){$this.removeClass('play').addClass('pause');},5);
				$txt.text('배너정지');
			}
		});
	}
	if($('.pop_notice_slide').length > 0) {
		$popNoticeSlide = $('.pop_notice_slide').slick({
			infinite:true,
			autoplay:true,
			autoplaySpeed:4000,
			speed:600,
			cssEase:'linear',
			arrows:true,
			appendDots:$('.pop_notice_contents .pagination_dot'),
			dots:true,
			customPaging: function(slider, i) {
				var num = i+1;
				return '<button type="button" data-role="none" role="button"><span class="offscreen">'+num+'번째 배너</span></button>';
			}
		});
		var $control = $('.pop_notice_contents .pagination_dot');
		$control.prepend('<button type="button" class="control pause"><span class="offscreen">배너정지</span></button>');
		var $btnControl = $control.find('.control');
		$btnControl.on('click',function(){
			var $this = $(this), $txt = $this.find('.offscreen');
			if($this.hasClass('pause')) {
				$popNoticeSlide.slick('slickPause');
				setTimeout(function(){$this.removeClass('pause').addClass('play');},5);
				$txt.text('배너시작');
			}
			if($this.hasClass('play')) {
				$popNoticeSlide.slick('slickPlay');
				setTimeout(function(){$this.removeClass('play').addClass('pause');},5);
				$txt.text('배너정지');
			}
		});
	}
	if($('.sgi_footer_banner_slide').length > 0) {
		sgiFooterBannerSlide = $('.sgi_footer_banner_slide').slick({
			vertical:true,
			infinite:true,
			autoplay:true,
			autoplaySpeed:3000,
			speed:1000,
			arrows:false,
			dots:false
		});
		$('.sgi_footer_banner .control>button').on('click',function(){
			var $this = $(this), $txt = $this.find('.offscreen');
			if($this.hasClass('prev')) sgiFooterBannerSlide.slick('slickPrev');
			if($this.hasClass('next')) sgiFooterBannerSlide.slick('slickNext');
			if($this.hasClass('pause')) {
				sgiFooterBannerSlide.slick('slickPause');
				setTimeout(function(){$this.removeClass('pause').addClass('play');},5);
				$txt.text('배너시작');
			}
			if($this.hasClass('play')) {
				sgiFooterBannerSlide.slick('slickPlay');
				setTimeout(function(){$this.removeClass('play').addClass('pause');},5);
				$txt.text('배너정지');
			}
		});
	}
};
//--------------------------------------------------------------------
// 글자바꾸기
//--------------------------------------------------------------------
var changeTxt = function(target, beforeTxt, afterTxt){
	return $(target).each(function(){
		var element = $(this);
		element.html(element.html().split(beforeTxt).join(afterTxt));
	});
};
//--------------------------------------------------------------------
// scroll to element
//--------------------------------------------------------------------
function scrollToEl (target, duration, space) {
    $('html, body').animate({
      scrollTop: $(target).offset().top + space
    }, duration);
}
//--------------------------------------------------------------------
// Detect if you are in the screen
//--------------------------------------------------------------------
var detectScreenIn = function(target, add){
	if(add == undefined) add = 0;
	var $window = $(window),
		$wHeight = $window.height()+add,
		$scrollTop = $window.scrollTop(),
		$winBottom = ($scrollTop + $wHeight);
	var $el = $(target),
		$elHeight = $($el).outerHeight(),
		$elTop = $($el).offset().top,
		$elCenter = $elTop + ($elHeight/2),
		$elBottom = $elTop + $elHeight;
	if(($elCenter >= $scrollTop) && ($elCenter <= $winBottom)){
		return true;
	}else{
		return false;
	}
};
//--------------------------------------------------------------------
// Scroll Animate
//--------------------------------------------------------------------
var scrollAni = function(target){
	return $(target).each(function(){
		var $this = $(this), _delay = 0;
		if($this.data('delay')) _delay = $this.data('delay');
		if($('html').hasClass('mobile')) _delay = 0;
		$(window).scroll(function(){
			if(detectScreenIn($this, 200)){
				setTimeout(function() {
					if($this.closest('.tab_panel').hasClass('active') || !$this.closest('.tab_panel').length) $this.addClass('on');
				}, _delay);
			}
		});
		$(window).scroll();
	});
};
//--------------------------------------------------------------------
// Scroll UI
//--------------------------------------------------------------------
var scrollUI = {
	hidden: function(target, min, add){
		var $wrap = $('#wrap'),
			_lastScrollTop = 0,
			delta = 5,
			_minScrollTop = min,
			_add = 0,
			$target = $(target);
		if($(add).length > 0){
			_add = $(add).height();
		} else {
			_add = 0;
		}
		$(window).on('scroll', function(){
			var _st = $(this).scrollTop();
			if(Math.abs(_lastScrollTop - _st) >= delta){
				if(_st > _lastScrollTop && _st > _minScrollTop + _add){
					$wrap.addClass('off');
				} else {
					$wrap.removeClass('off');
				}
				_lastScrollTop = _st;
			}
		});
		$target.find('a').on('focusin', function(e){
			$wrap.removeClass('off');
		});
	},
	fixed: function(fixed, target){
		var $fixed = $(fixed), _h = $(target).height(), $header = $('#sgiHeader');
		if(!$(target).length) {
			$fixed.addClass('fixed no_banner');
			return false;
		}
		$(window).on('scroll', function(){
			if(!$('#wrap').hasClass('no_banner')) {
				var _st = $(this).scrollTop();
				if(_st >= _h) {
					$fixed.addClass('fixed');
				} else {
					$fixed.removeClass('fixed');
				}
			}
		});
	},
	productTab: function(target, space){
		var $wrap = $('#wrap'),
			$fixed = $(target);
		if($(target).length) {
			_top = $fixed.offset().top - space;
			var $targetTrigger = $('.product_tab_wrap .product_tab .tab');
			$(window).on('scroll', function(){
				var _st = $(this).scrollTop();
				if($wrap.hasClass('off')){
					if(_st >= _top) {
						$fixed.addClass('fixed');
					} else {
						$fixed.removeClass('fixed');
					} 
				} else {
					if(_st >= _top-120) {
						$fixed.addClass('fixed');
					} else {
						$fixed.removeClass('fixed');
					}
				}
			});
			$targetTrigger.on('click', function (e) {
				var _targetTop = $('.product_tab_wrap').offset().top - 50;
				$('html, body').animate({'scrollTop':_targetTop},500);
				setTimeout(function(){
					($(window).height() > $('html').height()) ? $wrap.removeClass('off') : $wrap.addClass('off');
					//($(window).hasScrollBar()) ? $wrap.addClass('off') : $wrap.removeClass('off');
				},600);
			});
		}
	},
	init: function(){
		scrollUI.hidden('#sgiHeader',120,'.top_banner');
		scrollUI.fixed('#wrap', '.top_banner');
		scrollUI.productTab('.product_tab_wrap', 50);
	}
};

//scrollbar check
$.fn.hasScrollBar = function(){
	return this.get(0).scrollHeight > this.get(0).clientHeight;
};
//resize가 끝나면: resizeEnd
//$(window).resizeEnd(function(){console.log('resizeEnd');},300);
var resizeEndCut = 0;
$.fn.resizeEnd = function(callback, timeout){
	resizeEndCut = resizeEndCut+1;
	var cut = resizeEndCut;
	return this.each(function(){
		var $this = $(this);
		$this.resize(function(){
			if($this.data('resizeTimeout'+cut)){
				clearTimeout($this.data('resizeTimeout'+cut));
			}
			$this.data('resizeTimeout'+cut, setTimeout(callback,timeout));
		});
	});
};
//scroll이 끝나면: scrollEnd
//$(window).scrollEnd(function(){console.log('scrollEnd');},300);
var scrollEndCut = 0;
$.fn.scrollEnd = function(callback, timeout){
	scrollEndCut = resizeEndCut+1;
	var cut = scrollEndCut;
	return this.each(function(){
		var $this = $(this);
		$this.scroll(function(){
			if($this.data('scrollTimeout'+cut)){
				clearTimeout($this.data('scrollTimeout'+cut));
			}
			$this.data('scrollTimeout'+cut, setTimeout(callback,timeout));
		});
	});
};
//--------------------------------------------------------------------
// SGI Youtube
//--------------------------------------------------------------------
var sgiYoutube = function(){
	if($('.sgi_pr_movie').length){
		if($('.movie_thumb_item').length < 3) $('.movie_thumb').find('.arrow').hide();
		var $youtubeThumbSlide = $('.movie_thumb_slide').slick({
			slidesToShow:3,
			slidesToScroll:3,
			variableWidth: true,
			infinite: true,
			appendArrows:$('.movie_thumb .arrow'),
			prevArrow:'<button type="button" class="prev slick-prev"><span class="offscreen">이전 홍보영상</span></button>',
			nextArrow:'<button type="button" class="next slick-next"><span class="offscreen">다음 홍보영상</span></button>',
			dots:false
		});
		var $iframe = $('.sgi_pr_movie').find('iframe'),
			$frame = $('.sgi_pr_movie').find('.frame'),
			$frame_title = $('.sgi_pr_movie .title').find('h3'),
			$description = $('.description .nano-content'),
			$current = $('.movie_thumb_item.slick-current>a'),
			_defalut_tit = $current.find('.tit').text(),
			_defalut_url = $current.attr("data-url"),
			_defalut_des = $current.attr("data-des"),
			$scroller = $('.sgi_pr_movie').find('.nano');
		$iframe.attr('src','https://www.youtube.com/embed/'+_defalut_url+'?wmode=transparent');
		$description.append($('#'+_defalut_des).find('p').clone());
		$frame_title.text(_defalut_tit);
		$scroller.nanoScroller({alwaysVisible:true});
		$('.movie_thumb_item>a').on('click', function(e) {
			e.preventDefault();
			var $this = $(this), 
				_tit = $this.find('.tit').text(),
				_url = $this.attr("data-url"),
				_des = $this.attr("data-des");
			$this.addClass('current').closest('.movie_thumb_item').siblings('.movie_thumb_item').find('a').removeClass('current');
			$iframe.attr('src','https://www.youtube.com/embed/'+_url+'?wmode=transparent');
			$description.find('p').remove();
			$description.append($('#'+_des).find('p').clone());
			$frame_title.text(_tit);
			$scroller.nanoScroller({alwaysVisible:true});
			$('html,body').animate({'scrollTop':$frame.offset().top - 220},300);
		});
	}
};
//로딩함수
var LoadingOpen = function() {
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
var LoadingClose = function() {
	$('.sgi_loading_wrap').stop(true,false).fadeOut(300,function(){
		$(this).remove();
	});
	common.unlock();
};
var animateNumber = function(target,speed,isComma,useScroll,setTime){
	return $(target).each(function(){
		var $this = $(this),
			number = $this.data('num');
		var $number = onlyNumber(number);
		if(speed == undefined)speed = 500;
		if(isComma == undefined)isComma = false;
		if(useScroll == undefined)useScroll = false;
		if(setTime == undefined)setTime = false;
		var animateInit = function(){
			$({now:0}).stop(true,false).animate({now:$number},{
				duration: speed,
				step: function(now,e){
					if(isComma){
						$this.text(addComma(Math.floor(now)));
					}else{
						$this.text(Math.floor(now));
					}
				}
			});
			$this.data('first',false);
		};
		if(useScroll){
			$this.data('first',true);
			$(window).scroll(function(){
				if($this.data('first') && detectScreenIn($this, 200) && setTime>0){
					$this.data('first',false);
					setTimeout(function(){
						animateInit();
					},setTime);
				} else if($this.data('first') && detectScreenIn($this, 200)){
					animateInit();
				}
			});
			$(window).scroll();
		}else{
			animateInit();
		}
	});
};
//숫자만
var onlyNumber = function(num){
	return num.toString().replace(/[^0-9]/g,'');
};
//콤마넣기
var addComma = function(num){
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
};
//ie에서 startsWith,endsWith 작동되게
String.prototype.startsWith = function(str){
	if(this.length < str.length) return false;
	return this.indexOf(str) == 0;
}
String.prototype.endsWith = function(str){
	if(this.length < str.length) return false;
	return this.lastIndexOf(str) + str.length == this.length;
}
//Window Close
function CloseWindow(){
	//self.opener=self;
	window.close();
	self.close();
	window.opener=window.location.href; self.close();
	window.open('about:blank','_self').close();
}

/**
 * 2021.05.27
 * 서영운
 * 개인정보동의 
 * 해당 accordion 접혀있을때 동의함 체크 안하고 공동인증서 및 카카오인증 처리할경우 accordion 열리면서 포커싱 
 */
function tapOpen(idx) {
	var flag01 = $('#tapOpen1').attr('aria-expanded');
	var flag02 = $('#tapOpen2').attr('aria-expanded');
	var flag03 = $('#tapOpen3').attr('aria-expanded');
	
	if(idx == 1) {
		if(flag01 == "false") {
			$('#tapOpen1').click();
			var _top = $("#check1").offset().top-200;
			$('html,body').animate({'scrollTop':_top},600);
		}
	} else if(idx == 2) {
		if(flag01 == "false") {
			$('#tapOpen1').click();
			var _top = $("#check2").offset().top-200;
			$('html,body').animate({'scrollTop':_top},600);
		}
	} else if(idx == 3) {
		if(flag02 == "false") {
			$('#tapOpen2').click();
			var _top = $("#check3").offset().top-200;
			$('html,body').animate({'scrollTop':_top},600);
		}
	} else if(idx == 4) {
		if(flag02 == "false") {
			$('#tapOpen2').click();
			var _top = $("#check4").offset().top-200;
			$('html,body').animate({'scrollTop':_top},600);
		}
	} else if(idx == 5) {
		if(flag03 == "false") {
			$('#tapOpen3').click();
			var _top = $("#check5").offset().top-200;
			$('html,body').animate({'scrollTop':_top},600);
		}
	} else if(idx == 6) {
		if(flag03 == "false") {
			$('#tapOpen3').click();
			var _top = $("#check6").offset().top-200;
			$('html,body').animate({'scrollTop':_top},600);
		}
	} else {
		return;
	}
	
}

/*! nanoScrollerJS - v0.8.7 - (c) 2015 James Florentino; Licensed MIT */
!function(a){return"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b,window,document)}):"object"==typeof exports?module.exports=a(require("jquery"),window,document):a(jQuery,window,document)}(function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;z={paneClass:"nano-pane",sliderClass:"nano-slider",contentClass:"nano-content",enabledClass:"has-scrollbar",flashedClass:"flashed",activeClass:"active",iOSNativeScrolling:!1,preventPageScrolling:!1,disableResize:!1,alwaysVisible:!1,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null,documentContext:null,windowContext:null},u="scrollbar",t="scroll",l="mousedown",m="mouseenter",n="mousemove",p="mousewheel",o="mouseup",s="resize",h="drag",i="enter",w="up",r="panedown",f="DOMMouseScroll",g="down",x="wheel",j="keydown",k="keyup",v="touchmove",d="Microsoft Internet Explorer"===b.navigator.appName&&/msie 7./i.test(b.navigator.appVersion)&&b.ActiveXObject,e=null,D=b.requestAnimationFrame,y=b.cancelAnimationFrame,F=c.createElement("div").style,H=function(){var a,b,c,d,e,f;for(d=["t","webkitT","MozT","msT","OT"],a=e=0,f=d.length;f>e;a=++e)if(c=d[a],b=d[a]+"ransform",b in F)return d[a].substr(0,d[a].length-1);return!1}(),G=function(a){return H===!1?!1:""===H?a:H+a.charAt(0).toUpperCase()+a.substr(1)},E=G("transform"),B=E!==!1,A=function(){var a,b,d;return a=c.createElement("div"),b=a.style,b.position="absolute",b.width="100px",b.height="100px",b.overflow=t,b.top="-9999px",c.body.appendChild(a),d=a.offsetWidth-a.clientWidth,c.body.removeChild(a),d},C=function(){var a,c,d;return c=b.navigator.userAgent,(a=/(?=.+Mac OS X)(?=.+Firefox)/.test(c))?(d=/Firefox\/\d{2}\./.exec(c),d&&(d=d[0].replace(/\D+/g,"")),a&&+d>23):!1},q=function(){function j(d,f){this.el=d,this.options=f,e||(e=A()),this.$el=a(this.el),this.doc=a(this.options.documentContext||c),this.win=a(this.options.windowContext||b),this.body=this.doc.find("body"),this.$content=this.$el.children("."+this.options.contentClass),this.$content.attr("tabindex",this.options.tabIndex||0),this.content=this.$content[0],this.previousPosition=0,this.options.iOSNativeScrolling&&null!=this.el.style.WebkitOverflowScrolling?this.nativeScrolling():this.generate(),this.createEvents(),this.addEvents(),this.reset()}return j.prototype.preventScrolling=function(a,b){if(this.isActive)if(a.type===f)(b===g&&a.originalEvent.detail>0||b===w&&a.originalEvent.detail<0)&&a.preventDefault();else if(a.type===p){if(!a.originalEvent||!a.originalEvent.wheelDelta)return;(b===g&&a.originalEvent.wheelDelta<0||b===w&&a.originalEvent.wheelDelta>0)&&a.preventDefault()}},j.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"}),this.iOSNativeScrolling=!0,this.isActive=!0},j.prototype.updateScrollValues=function(){var a,b;a=this.content,this.maxScrollTop=a.scrollHeight-a.clientHeight,this.prevScrollTop=this.contentScrollTop||0,this.contentScrollTop=a.scrollTop,b=this.contentScrollTop>this.previousPosition?"down":this.contentScrollTop<this.previousPosition?"up":"same",this.previousPosition=this.contentScrollTop,"same"!==b&&this.$el.trigger("update",{position:this.contentScrollTop,maximum:this.maxScrollTop,direction:b}),this.iOSNativeScrolling||(this.maxSliderTop=this.paneHeight-this.sliderHeight,this.sliderTop=0===this.maxScrollTop?0:this.contentScrollTop*this.maxSliderTop/this.maxScrollTop)},j.prototype.setOnScrollStyles=function(){var a;B?(a={},a[E]="translate(0, "+this.sliderTop+"px)"):a={top:this.sliderTop},D?(y&&this.scrollRAF&&y(this.scrollRAF),this.scrollRAF=D(function(b){return function(){return b.scrollRAF=null,b.slider.css(a)}}(this))):this.slider.css(a)},j.prototype.createEvents=function(){this.events={down:function(a){return function(b){return a.isBeingDragged=!0,a.offsetY=b.pageY-a.slider.offset().top,a.slider.is(b.target)||(a.offsetY=0),a.pane.addClass(a.options.activeClass),a.doc.bind(n,a.events[h]).bind(o,a.events[w]),a.body.bind(m,a.events[i]),!1}}(this),drag:function(a){return function(b){return a.sliderY=b.pageY-a.$el.offset().top-a.paneTop-(a.offsetY||.5*a.sliderHeight),a.scroll(),a.contentScrollTop>=a.maxScrollTop&&a.prevScrollTop!==a.maxScrollTop?a.$el.trigger("scrollend"):0===a.contentScrollTop&&0!==a.prevScrollTop&&a.$el.trigger("scrolltop"),!1}}(this),up:function(a){return function(b){return a.isBeingDragged=!1,a.pane.removeClass(a.options.activeClass),a.doc.unbind(n,a.events[h]).unbind(o,a.events[w]),a.body.unbind(m,a.events[i]),!1}}(this),resize:function(a){return function(b){a.reset()}}(this),panedown:function(a){return function(b){return a.sliderY=(b.offsetY||b.originalEvent.layerY)-.5*a.sliderHeight,a.scroll(),a.events.down(b),!1}}(this),scroll:function(a){return function(b){a.updateScrollValues(),a.isBeingDragged||(a.iOSNativeScrolling||(a.sliderY=a.sliderTop,a.setOnScrollStyles()),null!=b&&(a.contentScrollTop>=a.maxScrollTop?(a.options.preventPageScrolling&&a.preventScrolling(b,g),a.prevScrollTop!==a.maxScrollTop&&a.$el.trigger("scrollend")):0===a.contentScrollTop&&(a.options.preventPageScrolling&&a.preventScrolling(b,w),0!==a.prevScrollTop&&a.$el.trigger("scrolltop"))))}}(this),wheel:function(a){return function(b){var c;if(null!=b)return c=b.delta||b.wheelDelta||b.originalEvent&&b.originalEvent.wheelDelta||-b.detail||b.originalEvent&&-b.originalEvent.detail,c&&(a.sliderY+=-c/3),a.scroll(),!1}}(this),enter:function(a){return function(b){var c;if(a.isBeingDragged)return 1!==(b.buttons||b.which)?(c=a.events)[w].apply(c,arguments):void 0}}(this)}},j.prototype.addEvents=function(){var a;this.removeEvents(),a=this.events,this.options.disableResize||this.win.bind(s,a[s]),this.iOSNativeScrolling||(this.slider.bind(l,a[g]),this.pane.bind(l,a[r]).bind(""+p+" "+f,a[x])),this.$content.bind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.removeEvents=function(){var a;a=this.events,this.win.unbind(s,a[s]),this.iOSNativeScrolling||(this.slider.unbind(),this.pane.unbind()),this.$content.unbind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.generate=function(){var a,c,d,f,g,h,i;return f=this.options,h=f.paneClass,i=f.sliderClass,a=f.contentClass,(g=this.$el.children("."+h)).length||g.children("."+i).length||this.$el.append('<div class="'+h+'"><div class="'+i+'" /></div>'),this.pane=this.$el.children("."+h),this.slider=this.pane.find("."+i),0===e&&C()?(d=b.getComputedStyle(this.content,null).getPropertyValue("padding-right").replace(/[^0-9.]+/g,""),c={right:-14,paddingRight:+d+14}):e&&(c={right:-e},this.$el.addClass(f.enabledClass)),null!=c&&this.$content.css(c),this},j.prototype.restore=function(){this.stopped=!1,this.iOSNativeScrolling||this.pane.show(),this.addEvents()},j.prototype.reset=function(){var a,b,c,f,g,h,i,j,k,l,m,n;return this.iOSNativeScrolling?void(this.contentHeight=this.content.scrollHeight):(this.$el.find("."+this.options.paneClass).length||this.generate().stop(),this.stopped&&this.restore(),a=this.content,f=a.style,g=f.overflowY,d&&this.$content.css({height:this.$content.height()}),b=a.scrollHeight+e,l=parseInt(this.$el.css("max-height"),10),l>0&&(this.$el.height(""),this.$el.height(a.scrollHeight>l?l:a.scrollHeight)),i=this.pane.outerHeight(!1),k=parseInt(this.pane.css("top"),10),h=parseInt(this.pane.css("bottom"),10),j=i+k+h,n=Math.round(j/b*i),n<this.options.sliderMinHeight?n=this.options.sliderMinHeight:null!=this.options.sliderMaxHeight&&n>this.options.sliderMaxHeight&&(n=this.options.sliderMaxHeight),g===t&&f.overflowX!==t&&(n+=e),this.maxSliderTop=j-n,this.contentHeight=b,this.paneHeight=i,this.paneOuterHeight=j,this.sliderHeight=n,this.paneTop=k,this.slider.height(n),this.events.scroll(),this.pane.show(),this.isActive=!0,a.scrollHeight===a.clientHeight||this.pane.outerHeight(!0)>=a.scrollHeight&&g!==t?(this.pane.hide(),this.isActive=!1):this.el.clientHeight===a.scrollHeight&&g===t?this.slider.hide():this.slider.show(),this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""}),c=this.$content.css("position"),("static"===c||"relative"===c)&&(m=parseInt(this.$content.css("right"),10),m&&this.$content.css({right:"",marginRight:m})),this)},j.prototype.scroll=function(){return this.isActive?(this.sliderY=Math.max(0,this.sliderY),this.sliderY=Math.min(this.maxSliderTop,this.sliderY),this.$content.scrollTop(this.maxScrollTop*this.sliderY/this.maxSliderTop),this.iOSNativeScrolling||(this.updateScrollValues(),this.setOnScrollStyles()),this):void 0},j.prototype.scrollBottom=function(a){return this.isActive?(this.$content.scrollTop(this.contentHeight-this.$content.height()-a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTop=function(a){return this.isActive?(this.$content.scrollTop(+a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTo=function(a){return this.isActive?(this.scrollTop(this.$el.find(a).get(0).offsetTop),this):void 0},j.prototype.stop=function(){return y&&this.scrollRAF&&(y(this.scrollRAF),this.scrollRAF=null),this.stopped=!0,this.removeEvents(),this.iOSNativeScrolling||this.pane.hide(),this},j.prototype.destroy=function(){return this.stopped||this.stop(),!this.iOSNativeScrolling&&this.pane.length&&this.pane.remove(),d&&this.$content.height(""),this.$content.removeAttr("tabindex"),this.$el.hasClass(this.options.enabledClass)&&(this.$el.removeClass(this.options.enabledClass),this.$content.css({right:""})),this},j.prototype.flash=function(){return!this.iOSNativeScrolling&&this.isActive?(this.reset(),this.pane.addClass(this.options.flashedClass),setTimeout(function(a){return function(){a.pane.removeClass(a.options.flashedClass)}}(this),this.options.flashDelay),this):void 0},j}(),a.fn.nanoScroller=function(b){return this.each(function(){var c,d;if((d=this.nanoscroller)||(c=a.extend({},z,b),this.nanoscroller=d=new q(this,c)),b&&"object"==typeof b){if(a.extend(d.options,b),null!=b.scrollBottom)return d.scrollBottom(b.scrollBottom);if(null!=b.scrollTop)return d.scrollTop(b.scrollTop);if(b.scrollTo)return d.scrollTo(b.scrollTo);if("bottom"===b.scroll)return d.scrollBottom(0);if("top"===b.scroll)return d.scrollTop(0);if(b.scroll&&b.scroll instanceof a)return d.scrollTo(b.scroll);if(b.stop)return d.stop();if(b.destroy)return d.destroy();if(b.flash)return d.flash()}return d.reset()})},a.fn.nanoScroller.Constructor=q});
