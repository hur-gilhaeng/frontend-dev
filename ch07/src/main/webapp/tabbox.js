// 이전 버젼
/*var TabBox = {
	init: function(){
		window.addEventListener('load', this._onWindowLoad);		
	},	
	_onWindowLoad: function(){
		var divTabBox = document.getElementsByClassName('tab-box')[0];
		var ulTabBox = divTabBox.childNodes[1];
		var liTabs = ulTabBox.getElementsByTagName('li');

		for(var i = 0; i < liTabs.length; i++){
			liTabs[i].addEventListener('click', TabBox._onTabClicked);
		}
	},
	_onTabClicked: function(){
		//unselect
		var liSelecetds = document.getElementsByClassName('selected');
		(liSelecetds.length == 1) && (liSelecetds[0].className = '');		

		// seclect
		this.className = 'selected';
	}	
}*/

//jQuery 버젼
var TabBox = {
	init: function(){
		$(this._initLoad);
	},	
	_initLoad: function(){
		$('.tab-box li').click(TabBox._onTabClicked);
		//TabBox._onTabClicked();
	},
	_onTabClicked: function(){
		
		console.log(this);
		console.log(typeof this);
		
		console.log(this == TabBox);
		
		//unselect
		$('.tab-box li.selected').removeClass('selected');

		// seclect
		$(this).addClass('selected');
		
		// text-box 내용수정
		// $('.text-box').text($(this).text()+'의 탭뷰 입니다.');
		$('.text-box').text($(this).data('no') + '의 탭뷰 입니다.');
	}
}

/*
// 강사님 코드 버전
var TabBox = {
		init: function(){
			$(this._init);		
		},	
		_init: function(){
			$('.tab-box li').click(TabBox._changeTab);
			TabBox._changeTab();
		},
		_changeTab: function(){
			$('.tab-box li.selected').removeClass('selected');

			var $liTab = (this == TabBox) ?	$('.tab-box li:first-child') : $(this);
			// 위의 코드는 다음과 같이 풀어 쓸 수 있다.
			// var $liTab = null;
			// if(this == TabBox){
			//   $liTab = $('.tab-box li:first-child')
			// } else {
			//   $liTab = $(this);
			// }
			
			$('.tab-box div').text($liTab.data('no') + "의 탭뷰입니다.");
			$liTab.addClass('selected');
		}	
}
*/






