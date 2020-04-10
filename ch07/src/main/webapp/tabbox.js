// jQuery 버젼
var TabBox = {
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
}