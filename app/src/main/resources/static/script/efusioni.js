	//���� ��Ű�� ����
	var efusioni = new Object();

	//��� ��Ű��
	// efusioni.* ��ſ� �� ��Ű�� ����
	// ������Ʈ���� �޸� �� �� �ִ�.
	var ef = efusioni;
	
	//efusioni.utils : ��ƿ ��Ű�� ����
	efusioni.utils = new Object();
	
	//Random ���� ����
	efusioni.utils.Random = function() {
		/*
		 * 0 ~ n-1 ������ ���������� ��ȯ
		 * 
		 * n : ����
		 * size : �������ϸ� 0 ~ n-1 ������ ���� ��ȯ
		 *        �����ϸ� size ũ���� 0 ~ n-1 ������ �ߺ����� �ʴ� ���� �迭�� ��ȯ
		 *        
		 *        ���� : size > n �̸� n ũ���� �迭 ��ȯ
		 */
		this.number = function(n, size) {
			if (size == null || size == undefined) {
				return parseInt(Math.random() * n);
			}
			else {
				var arr = new Array();
				while (arr.length < n) {
					var ran = parseInt(Math.random() * n);

					var isDuplicate = false;
					for (var i=0; i<arr.length; i++) {
						if (ran == arr[i]) {
							isDuplicate = true;
							break;
						}
					}

					if (!isDuplicate) {
						arr.push(ran);
					}
				}
				
				return arr;
			}
		};
	};
	//Random ���� ��

	//Validator ���� ���� --------------------------------------------------------
	/*
		Usage
		
		var v = null;
		$(function() {
			// �⺻������ ���ʵ�(add�޽��) �������ͷ��� ������ �ʱ�ȭ�� ����
			// maxlength, �������� �Էµ��� �ش� ����ü�� �ڵ����� �����ȴ�. 
			v = new ef.utils.Validator(document.form);
			v.add("name", {
				empty : "�̸��� �Է����� �ʾҽ��ϴ�."
			})
			.add("age", {
				empty : "���̸� �Է����� �ʾҽ��ϴ�.",
				format : "numeric"
			});
			.add("ssn1", {
				empty : "�ֹε�Ϲ�ȣ�� �Է����� �ʾҽ��ϴ�.",
				min : 6,
				max : 6
			})
			.add("ssn2", {
				empty : "�ֹε�Ϲ�ȣ�� �Է����� �ʾҽ��ϴ�.",
				min : 7,
				max : 7
			})
		});
		
		function proc() {
			var ssn = $("#ssn1").val() + $("#ssn2").val();
			
			//text�� ���� �������ͷ��� ����(validate()) �ٷ� ����.
			v.addText(ssn, {
				format : "ssn",
				formatFail : function() {
					$("#ssn1").val("").focus();
					$("#ssn2").val("");
				}
			})
			if (v.validate()) document.form.submit();
		}
		
	*/
	efusioni.utils.Validator = function (form) {
		this.form = (form instanceof jQuery) ? form[0] : form; //DOM ��ü
		this.validities = [];
	};
	
	/*
		�� ������� ��ü�� ���� ������Ҹ� �߰�
		
		��������
		name : "�ʵ��"
		validity
		{
			empty	: "�˷�����",	//���� ����ְų�, ������ �ȵǾ� ��������� �˷� �޽���
			format	: "����",		//numeric(����), real(�Ǽ�), ssn(�ֹε�Ϲ�ȣ), phone(��ȭ��ȣ), email(�̸���)
			min		: �ּұ���,		//�Է¹��ڿ� �ּұ���
			max		: �ִ����		//�Է¹��ڿ� �ִ����
		}
	*/
	efusioni.utils.Validator.prototype.add = function(name, validity) {
		var item = validity;
		item.name = name;
		this.validities.push(item);
		
		var obj = $("[name=" + name + "]", $(this.form));
		
		if (obj.length == 0) {
			alert("Validator error (" + name + "): " + name + " �Ӽ��� �������� �ʽ��ϴ�.");
			return;
		}
		
		var tag = $(obj[0]).prop("tagName");
		var type = $(obj[0]).attr("type");
		
		tag = (tag == null || tag == undefined) ? "" : tag;
		type = (type == null || tag == undefined) ? "" : type;
		
		if (tag.toLowerCase() == "select") {
			if (this.isValuable(item.format)) {
				alert("Validator error (" + name + "): select tag�� format �Ӽ��� �ü� �����ϴ�.");
				return;
			}
			if (this.isValuable(item.min)) {
				alert("Validator error (" + name + "): select tag�� min �Ӽ��� �ü� �����ϴ�.");
				return;
			}
			if (this.isValuable(item.max)) {
				alert("Validator error (" + name + "): select tag�� max �Ӽ��� �ü� �����ϴ�.");
				return;
			}
		}
		else if (tag.toLowerCase() == "textarea") {
			if (this.isValuable(item.format)) {
				alert("Validator error (" + name + "): textarea tag�� format �Ӽ��� �ü� �����ϴ�.");
				return;
			}
			if (this.isValuable(item.min)) {
				alert("Validator error (" + name + "): textarea tag�� min �Ӽ��� �ü� �����ϴ�.");
				return;
			}
			if (this.isValuable(item.max)) {
				alert("Validator error (" + name + "): textarea tag�� max �Ӽ��� �ü� �����ϴ�.");
				return;
			}
		}
		else if (tag.toLowerCase() == "input") {
			if (type.toLowerCase() == "radio") {
				if (this.isValuable(item.format)) {
					alert("Validator error (" + name + "): radio button�� format �Ӽ��� �ü� �����ϴ�.");
					return;
				}
				if (this.isValuable(item.min)) {
					alert("Validator error (" + name + "): radio button�� min �Ӽ��� �ü� �����ϴ�.");
					return;
				}
				if (this.isValuable(item.max)) {
					alert("Validator error (" + name + "): radio button�� max �Ӽ��� �ü� �����ϴ�.");
					return;
				}
			}
			else if (type.toLowerCase() == "checkbox") {
				if (this.isValuable(item.format)) {
					alert("Validator error (" + name + "): checkbox button�� format �Ӽ��� �ü� �����ϴ�.");
					return;
				}
				if (this.isValuable(item.min)) {
					alert("Validator error (" + name + "): checkbox button�� min �Ӽ��� �ü� �����ϴ�.");
					return;
				}
				if (this.isValuable(item.max)) {
					alert("Validator error (" + name + "): checkbox button�� max �Ӽ��� �ü� �����ϴ�.");
					return;
				}
			}
			else if (type.toLowerCase() == "file") {
				if (this.isValuable(item.format)) {
					alert("Validator error (" + name + "): file�� format �Ӽ��� �ü� �����ϴ�.");
					return;
				}
				if (this.isValuable(item.min)) {
					alert("Validator error (" + name + "): file�� min �Ӽ��� �ü� �����ϴ�.");
					return;
				}
				if (this.isValuable(item.max)) {
					alert("Validator error (" + name + "): file�� max �Ӽ��� �ü� �����ϴ�.");
					return;
				}				
			}
			else if (type.toLowerCase() == "password") {
				if (this.isValuable(item.format)) {
					alert("Validator error (" + name + "): password�� format �Ӽ��� �ü� �����ϴ�.");
					return;
				}
			}
			else if (type.toLowerCase() == "text") {			
			}
			else {
				alert("Validator error (" + name + "): select, radio, checkbox, text, file, password, textarea�� �ƴ� ������Ʈ�Դϴ�.");
				return;
			}
		}
		else {
			alert("Validator error (" + name + "): select, radio, checkbox, text, file, password, textarea�� �ƴ� ������Ʈ�Դϴ�.");
			return;
		}
		
		if (this.isValuable(item.format)) {
			if (item.format != "numeric" && item.format != "real" && item.format != "ssn" && item.format != "phone" && item.format != "email") {
				alert("Validator error (" + name + "): " + item.format + "�� format �ɼ��� �������� �ʽ��ϴ�.");
				return;
			}
		}

		var v = this;
		if (type.toLowerCase() == "text") {
			if (this.isValuable(item.format)) {
				if (item.format == "numeric") {
					obj.css("ime-mode", "disabled");
					obj.keypress(function(e) {
						if (e.keyCode < 48 || e.keyCode > 57) {
							v.preventDefault(e);
						}
					});
				}
				else if (item.format == "real") {
					obj.css("ime-mode", "disabled");
					obj.keypress(function(e) {
						if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 46) {
							v.preventDefault(e);
						}
					});
				}
				else if (item.format == "ssn") {
					obj.css("ime-mode", "disabled");
					obj.keypress(function(e) {
						if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 45) {
							v.preventDefault(e);
						}
					});
				}
				else if (item.format == "phone") {
					obj.css("ime-mode", "disabled");
					obj.keypress(function(e) {
						if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 45) {
							v.preventDefault(e);
						}
					});
				}
			}
		}

		return this;
	};
	
	/*
		���� ���� ������Ҹ� �߰�
		
		��������
		text : "������ ���ڿ�"
		validity
		{
			empty		: "�˷�����",	//���� ����ְų�, ������ �ȵǾ� ��������� �˷� �޽���
			format		: "����",		//numeric(����), real(�Ǽ�), ssn(�ֹε�Ϲ�ȣ), phone(��ȭ��ȣ), email(�̸���)
			formatFail	: ������ ���� ���� ����� ��ó�� callback. ���˰��� alert�� �� ��, ����ȴ�.
			min			: �ּұ���,		//�Է¹��ڿ� �ּұ���
			max			: �ִ����		//�Է¹��ڿ� �ִ����
		}
	*/
	efusioni.utils.Validator.prototype.addText = function(text, validity) {
		var item = validity;
		item.text = text;
		this.validities.push(item);
		
		if (this.isValuable(item.format)) {
			if (item.format != "numeric" && item.format != "real" && item.format != "ssn" && item.format != "phone" && item.format != "email") {
				alert("Validator error : " + item.format + "�� format �ɼ��� �������� �ʽ��ϴ�.");
				return;
			}
		}

		return this;
	};
	
	efusioni.utils.Validator.prototype.preventDefault = function(e) {
	    if(e.preventDefault) {
	    	e.preventDefault();
	    }
	    else e.stop();

	    e.returnValue = false;
	    e.stopPropagation();
	};

	efusioni.utils.Validator.prototype.isValuable = function(obj) {
		if (obj == null) return false;
		if (obj == undefined) return false;
		if (obj == "") return false;
		
		return true;
	};
	
	efusioni.utils.Validator.prototype.validate = function() {
		for (var i=0; i<this.validities.length; i++) {
			var item = this.validities[i];
			
			if (item.name != null && item.name != undefined) {
				var obj = $("[name=" + item.name + "]", $(this.form));
				var tag = $(obj[0]).prop("tagName");
				var type = $(obj[0]).attr("type");
				
				tag = (tag == null) ? "" : tag;
				type = (type == null) ? "" : type;

				if (tag.toLowerCase() == "select") {
					if (this.isValuable(item.empty)) {
						if ($.trim(obj.val()) == "" ) {
							alert(item.empty);
							obj.focus();
							return false;
						}
					}
				}
				else if (type.toLowerCase() == "radio" || type.toLowerCase() == "checkbox") {
					var isChecked = false;
					for (var j=0; j<obj.length; j++) {
						if (obj[j].checked) {
							isChecked = true;
							break;
						}
					}
					
					if (!isChecked) {
						alert(item.empty);
						return false;
					}
				}
				else if (type.toLowerCase() == "text" || type.toLowerCase() == "password" || tag.toLowerCase() == "textarea"){
					if (type.toLowerCase() == "text") {
						if (this.isValuable(item.format)) {
							if (!this.isValidFormat(obj, item.format, item.formatFail)) return false;
						}
					}
					
					if (this.isValuable(item.empty)) {
						if ($.trim(obj.val()) == "" ) {
							alert(item.empty);
							obj.focus();
							return false;
						}
					}
					
					if (this.isValuable(item.max)) {
						if (obj.val().length > item.max) {
							alert(item.max + "�� �̻� �Է��� �� �����ϴ�.");
							obj.focus();
							return false;
						}
					}
					if (this.isValuable(item.min)) {
						if (obj.val().length < item.min) {
							alert(item.min + "�� ���� �Է��� �� �����ϴ�.");
							obj.focus();
							return false;
						}
					}
				}				
				else if (type.toLowerCase() == "file") {
					if (this.isValuable(item.empty)) {
						if ($.trim(obj.val()) == "" ) {
							alert(item.empty);
							obj.focus();
							return false;
						}
					}
				}
			}
			else if (item.text != null && item.text != undefined){
				if (this.isValuable(item.format)) {
					if (!this.isValidFormat(item.text, item.format, item.formatFail)) return false;
				}
			}
			else {
				alert("Validator error : form name �Ǵ� text�� �������� �ʽ��ϴ�.");
				return false;
			}
		}
		
		return true;
	};
	
	efusioni.utils.Validator.prototype.isValidFormat = function(obj, format, callback) {
		var text = null;
		var isFormObj = true;
		if (obj.val) {
			text = obj.val();
		}
		else {
			text = obj;
			isFormObj = false;
		}
		
		if (format == "numeric") {
			if ($.trim(text).search(/[^0-9]/) != -1) {
				alert("���ڸ� �Է� �����մϴ�.");
				if (isFormObj) obj.val("").focus();
				else callback();
				return false;
			}
		}
		else if (format == "real") {
			if ($.trim(text).search(/[^0-9\.]/) != -1) {
				alert("���ڸ� �Է� �����մϴ�.");
				if (isFormObj) obj.val("").focus();
				else callback();
				return false;
			}
		}
		else if (format == "ssn") {
		    var s = text;
		    s = s.replace(/\-/gi, "");
		    var isSSN = true;
		    
		    var sum = 0 ;
		    sum = s.charAt(0) * 2 + s.charAt(1) * 3 + s.charAt(2) * 4 + s.charAt(3) * 5 +
		          s.charAt(4) * 6 + s.charAt(5) * 7 + s.charAt(6) * 8 + s.charAt(7) * 9 +
		          s.charAt(8) * 2 + s.charAt(9) * 3 + s.charAt(10) * 4 + s.charAt(11) * 5;

		    if (sum == 0) isSSN = false;
		    else {
		        sum = 11 - sum % 11 ;
		        if (sum > 9) sum = sum - 10;

		        if (sum != s.charAt(12)) isSSN = false;
		    }
		    
		    if (!isSSN) {
				alert("�ùٸ� �ֹε�� ��ȣ ������ �ƴմϴ�.");
				if (isFormObj) obj.val("").focus();
				else callback();
				return false;
		    }
		}
		else if (format == "email") {
			if ($.trim(text).search(/^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/) < 0) {
				alert("�ùٸ� �̸��� ������ �ƴմϴ�.");
				if (isFormObj) obj.val("").focus();
				else callback();
				return false;
			}
		}
		else if (format == "phone") {
			if ($.trim(text).search(/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/) < 0) {
				alert("�ùٸ� ��ȭ��ȣ ������ �ƴմϴ�.");
				if (isFormObj) obj.val("").focus();
				else callback();
				return false;
			}
		}
		
		return true;
	};
	//Validator ���� �� --------------------------------------------------------

	//efusioni.visual : ����� ��Ű�� ����
	efusioni.visual = new Object();
	
	//Player ���� ���� --------------------------------------------------------
	var efusioniPlayerId = 0;
	
	efusioni.visual.Player = function (ip) {
		/*private member*/
		var PLAYING_ON = 0;
		var PLAYING_PAUSED = 1;
		var PLAYING_STOPPED = 2;
		var PLAYING_DONE = 3;
		
		var mode = null;
		var source = null;
		var frame = null;
		var currentFrame = 0;
		var timer = null;
		var self = this;
		var status = PLAYING_STOPPED;
		var bRotate = false;
		var images = null;
		var length = null;
		var bLoaded = false;
		
		/*init parameter*/
		mode = (ip.mode == null) ? "serial" : ip.mode;
		if (mode == "serial") {
			source = ip.source;
			length = ip.length;
		}
		else frame = ip.frame;
		
		var step = ip.step;
		var width = ip.width;
		var height = ip.height;
		var duration = ip.duration;
		var container = ip.container;
		var mouseControll = ip.mouseControll;
		var mouseDirection = ip.mouseDirection;
		var loadCompleteCallback = ip.loadCompleteCallback;
		var frameAt = ip.frameAt;
		var playDone = ip.playDone;
		var bReverse = (ip.reverse == null) ? false : ip.reverse;

		/*Optional Value Settings*/
		if (step == null) step = 1;
		if (duration == null) duration = 1000;
		if (mouseControll == null) mouseControll = false;
		if (mouseControll) {
			if (mouseDirection == null) mouseDirection = "normal";
		}

		$(container).data("player", this);
		
		efusioniPlayerId++;
		
		var initX = 0;
		var stopFrame = 0;
		
		if (mouseControll) {
			$(container).mousedown(function(e) {
				e.preventDefault();
				initX = e.pageX - $(container).offset().left;
				stopFrame = currentFrame;
				
				$(document).mousemove(function(e) {
					e.preventDefault();
					var x = e.pageX - $(container).offset().left;
					x = x - initX;
					
					var frame = 0;
					if (mouseDirection == "reverse") {
						frame = length - parseInt(x / width * length);
					}
					else {
						frame = parseInt(x / width * length);
					}
					
					frame = self._mod(stopFrame + frame);
					self.drawFrame(frame);
				});
				
				$(document).mouseup(function() {
					$(document).unbind("mousemove");
				});
			});
		}
		
		this._mod = function(n) {
			if (n >=0) {
				return n % length;
			}
			else {
				return (n + 1) % length + length - 1;
			}
		};
		
		this._play = function() {
			if (timer != null) clearTimeout(timer);
			if (status == PLAYING_ON) {
				self.drawFrame(currentFrame);
				
				if (bReverse) {
					if (currentFrame == 0) {
						if (bRotate) {
							currentFrame = length - 1;
						}
						else {
							status = PLAYING_DONE;
					
							if (playDone != null) playDone(self);
							return;
						}
					}
					else {
						currentFrame--;
					}
				}
				else {
					if (currentFrame == length - 1) {
						if (bRotate) {
							currentFrame = 0;
						}
						else {
							status = PLAYING_DONE;
					
							if (playDone != null) playDone(self);
							return;
						}
					}
					else {
						currentFrame++;
					}
				}
			}
			else if (status == PLAYING_STOPPED) {
				return;
			}

			timer = setTimeout(self._play, duration);
		};
		
		this.drawFrame = function(frm) {
			if (mode == "serial") {
				var margin = frm * width;
				$("img", container).css("margin-left", "-" + margin + "px");
			}
			else {
				$("img", container).attr("src", images[frm].src);
			}
			currentFrame = frm;
			if (frameAt != null) {
				frameAt(self, currentFrame);
			}
		};
		
		this._preload = function() {
			if (mode == "frame") {
				images = new Array(parseInt(frame.length / step));
				for (var i=0; i<images.length; i++) {
					images[i] = new Image();
					images[i].src = frame[i * step];
				}
				length = images.length;

			}
		};
		
		this.size = function() {
			return length;
		};
		
		this.getImage = function(frameIdx) {
			return images[frameIdx].src;
		};
		
		this.setImage = function(frameIdx, frameSrc) {
			images[frameIdx].src = frameSrc;
		};
		
		this.isLoaded = function() {
			return bLoaded;
		};
		
		this.isReverse = function() {
			return bReverse;
		};
		
		this.setReverse = function(b) {
			bReverse = b;
		};
		
		this.isPlaying = function() {
			return (status == PLAYING_ON);
		};
		
		this.isStopped = function() {
			return (status == PLAYING_STOPPED);
		};
		
		this.isPaused = function() {
			return (status == PLAYING_PAUSED);
		};
		
		this.isDone = function() {
			return (status == PLAYING_DONE);
		};
		
		this.setDuration = function(d) {
			duration = d;
		};
		
		this.getContainer = function() {
			return container;
		};
		
		this.play = function() {
			if (bLoaded) {				
				status = PLAYING_ON;
				bRotate = false;
				
				currentFrame = 0;
				
				self._play();
			}
			else alert("Not Initialized");
		};
		
		this.rotate = function() {
			if (bLoaded) {
				status = PLAYING_ON;
				bRotate = true;
				
				currentFrame = 0;
				
				self._play();
			}
			else alert("Not Initialized");
		};
		
		this.pause = function() {
			status = PLAYING_PAUSED;
		};
		
		this.resume = function() {
			status = PLAYING_ON;
		};
		
		this.stop = function() {
			status = PLAYING_STOPPED;
			
			currentFrame = 0;
			self.drawFrame(0);
		};

		/*init process start*/
		if (mode == "serial") {
			$(container).html("<div style=' width:" + width + "px; height:" + height + "px; overflow:hidden;'><img src='" + source + "' width='" + (width * length) + "' height='" + height + "' id='efusioniPlayer" + efusioniPlayerId + "' alt='' style='margin-left:0px'></div>");
		}
		else {
			$(container).html("<img src='" + frame[0] + "' width='" + width + "' height='" + height + "' id='efusioniPlayer" + efusioniPlayerId + "' alt=''>");
		}
		this._preload();
				
		bLoaded = true;
		if (loadCompleteCallback != null) loadCompleteCallback(this);
		/*init process end*/
		
	};
	//Player ���� �� --------------------------------------------------------
	
	// efusioni.ui : UI ��Ű�� ����
	efusioni.ui = new Object();
	
	//UIManager ���� ���� --------------------------------------------------------
	efusioni.ui._UIManager = function() {
		this.idx = 0;
		this.euis = new Array();
		this.MAX_ZINDEX = 100000;

		/*
			Document�� �󿵿��� Ŭ������ ���, ������ SelectBox�� �ݾ��ش�.
		*/
		var self = this;
		$(document).click(function(e) {
			var isOnSelect = false;
			for (var i=0; i<self.euis.length; i++) {
				var obj = self.euis[i];
				if (obj.type == "SELECT" && obj.visualElement != null) {
					if ($(e.target).parents("#" + obj.visualElement.attr("id")).length) {
						isOnSelect = true;
					}
				}
			}
			
			if (!isOnSelect) {
				for (var i=0; i<self.euis.length; i++) {
					var obj = self.euis[i];
					if (obj.type == "SELECT" && obj.visualElement != null) {
						$(".euiSelectList", obj.visualElement).hide();
					}
				}
			}
		});
	};

	efusioni.ui._UIManager.prototype.add = function(euiObj) {
		this.euis[this.idx] = euiObj;
		euiObj.euiIdx = this.idx;
		
		this.idx++;
	};

	efusioni.ui._UIManager.prototype.get = function(idx) {
		return this.euis[idx];
	};

	efusioni.ui._UIManager.prototype.size = function() {
		return this.euis.length;
	};

	efusioni.ui._UIManager.prototype.updateUi = function(formElement) {
		var eui = $(formElement).data("eui");
		if (eui != null) eui.update();
	};

	efusioni.ui.UIManager = new efusioni.ui._UIManager();
	//UIManager ���� �� --------------------------------------------------------

	//UI Select ���� ���� --------------------------------------------------------
	efusioni.ui.Select = function (formElement, visualTemplate) {
		/*Eui ���� ����*/
		this.type = "SELECT";
		this.euiIdx = -1;
		this.formElement = formElement;
		this.visualElement = null;
		this.zIndex = null;

		this.formElement.data("eui", this);
		efusioni.ui.UIManager.add(this);
		/*Eui ���� ��*/
		
		this.template = visualTemplate;
		
		this._init();
	};

	efusioni.ui.Select.prototype.render = function() {
		this._parse();

		
		this._setTitleListener();
		this._setItemListener();
	};

	efusioni.ui.Select.prototype.update = function() {
		this._parse();
		
		this._setTitleListener();
		this._setItemListener();
	};

	efusioni.ui.Select.prototype._init = function() {
		var tag = this.template.html;
		this.visualElement = $(tag);
		$(this.visualElement).attr("id", "eui_" + this.euiIdx);
		$(this.visualElement).attr("style", this.formElement.attr("style"));
		
		this.formElement.hide();
		this.formElement.after(this.visualElement);
		$(this.visualElement).attr("class", this.template.visualClass);
		this.zIndex = $(this.visualElement).css("z-index");

		this._setBaseListener();
	};

	efusioni.ui.Select.prototype._parse = function() {
		var sItem = "";
		$("option", this.formElement).each(function() {
			sItem += "<li>" + $(this).text() + "</li>";
		});

		$(".euiSelectList", this.visualElement).html(sItem);
		
		this._setTitle();
	};

	efusioni.ui.Select.prototype._setTitle = function() {
		var self = this;
		$(".euiSelectTitle", this.visualElement).text($("option:selected", this.formElement).text());

		if (this.template.itemOnClass != null) {
			$(".euiSelectList li", this.visualElement).each(function(idx) {
				$(this).removeClass();
				if (idx == $("option:selected", self.formElement).index()) {
					$(this).attr("class", self.template.itemOnClass);
				}
				else {
					$(this).attr("class", "");
				}
			});
		}
		
		
		if (this.template.itemSelecClass != null) {
			$(".euiSelectList li", this.visualElement).each(function(idx) {
				$(this).removeClass();
				if (idx == $("option:selected", self.formElement).index()) {
					$(this).attr("class", self.template.itemSelecClass);
				}
				else {
					$(this).attr("class", "");
				}
			});
		}
	};

	efusioni.ui.Select.prototype._setBaseListener = function() {
		var self = this;

		/*mouseOver�� ��ħ�� �������� ��*/
		if (this.template.isMouseOverFolding != null && this.template.isMouseOverFolding) {
			/*Select Box �⺻ Folding */
			$(self.visualElement).mouseenter(function() {
				for (var i=0; i<efusioni.ui.UIManager.size(); i++) {
					var obj = efusioni.ui.UIManager.get(i);
		
					if (obj.type == "SELECT") {
						if (self.euiIdx == obj.euiIdx) {
							$(self.visualElement).css("z-index", efusioni.ui.UIManager.MAX_ZINDEX);
							$(".euiSelectList", self.visualElement).show();
						}
						else {
							/*�ڽſ��� �ٸ� SelectBox���� Ŭ���� list item�� �ݾ���� �Ѵ�.*/
							$(obj.visualElement).css("z-index", self.zIndex);
							$(".euiSelectList", obj.visualElement).hide();
						}
					}
				}
			});
			
			$(self.visualElement).mouseleave(function() {
				$(".euiSelectList", self.visualElement).hide();
			});
		}
	};

	efusioni.ui.Select.prototype._setTitleListener = function() {
		var self = this;
		/*Select Box �⺻ Folding */
		if (this.template.isMouseOverFolding == null || !this.template.isMouseOverFolding) {
			/*Select Box �⺻ Folding */
			$(".euiSelectMain", self.visualElement).click(function() {
				for (var i=0; i<efusioni.ui.UIManager.size(); i++) {
					var obj = efusioni.ui.UIManager.get(i);
		
					if (obj.type == "SELECT") {
						if (self.euiIdx == obj.euiIdx) {
							$(self.visualElement).css("z-index", efusioni.ui.UIManager.MAX_ZINDEX);
							$(".euiSelectList", self.visualElement).show();
						}
						else {
							/*�ڽſ��� �ٸ� SelectBox���� Ŭ���� list item�� �ݾ���� �Ѵ�.*/
							$(obj.visualElement).css("z-index", self.zIndex);
							$(".euiSelectList", obj.visualElement).hide();
						}
					}
				}
			});
		}
	};

	efusioni.ui.Select.prototype._setItemListener = function() {
		var self = this;
		/*Item�� Ŭ��������, ���� SelectBox�� �̺�Ʈ�� Simulate*/
		$(".euiSelectList li", self.visualElement).click(function() {
			/*onchange���ݿ� �°� �ٸ� Item�� Ŭ������ ��츸*/
			if (self.formElement.prop("selectedIndex") != $(this).index()) {	
				self.formElement.prop("selectedIndex", $(this).index());
				self._setTitle();	
				/*���� SelectBox�� �̺�Ʈ�� ȣ��*/
				self.formElement.change();
			}
			$(".euiSelectList", self.visualElement).hide();
		});
		
		/*itemOn Class�� ���������� ���콺 over ȿ��*/
		if (this.template.itemOnClass != null) {
			$(".euiSelectList li", this.visualElement).mouseenter(function() {
				$(this).attr("class", self.template.itemOnClass);
			});
			
			$(".euiSelectList li", this.visualElement).mouseleave(function() {
				if ($(this).index() != $("option:selected", self.formElement).index()) {
					$(this).attr("class", "");
				}
			});
		}
	};
	//UI Select ���� �� --------------------------------------------------------
	
	
	//UI Radio ���� ���� --------------------------------------------------------
	efusioni.ui.Radio = function (formElement) {
		this.formElement = $(formElement);
		this.className = this.formElement.attr("class");
		this.checkType = this.formElement.attr("checked");
	};

	efusioni.ui.Radio.prototype.render = function() {
		this.formElement.wrap('<span class="' + this.className + '_off"></span>');
		if(this.checkType){
			this.formElement.parent().addClass(this.className + "_on");
		}
		this.formElement.click(function(){
			$("input[name=" + $(this).attr("name") + "]").parent().removeClass(this.className + "_on");	
			$(this).parent().addClass(this.className + "_on");
		});
	};

	efusioni.ui.Radio.prototype.update = function() {
		$("input[name=" + this.formElement.attr("name") + "]").parent().removeClass(this.className + "_on");	
		this.formElement.parent().addClass(this.className + "_on");
	};
	
	//UI Radio ���� �� --------------------------------------------------------
	
	
	//UI Check ���� ���� --------------------------------------------------------
	efusioni.ui.Check = function (formElement) {
		this.formElement = $(formElement);
		this.className = this.formElement.attr("class");
		this.checkType = this.formElement.attr("checked");
	};

	efusioni.ui.Check.prototype.render = function() {
		this.formElement.wrap('<span class="' + this.className + '_off"></span>');
		if(this.checkType){
			this.formElement.parent().addClass(this.className + "_on");
		}
		this.formElement.click(function(){
			$(this).parent().toggleClass(this.className + "_on");
		});
	};

	efusioni.ui.Check.prototype.update = function() {
		if(this.checkType){
			this.formElement.parent().addClass(this.className + "_on");	
		} else {
			this.formElement.parent().removeClass(this.className + "_on");
		}		
	};
	//UI Check ���� �� --------------------------------------------------------
	
	
	
	
	