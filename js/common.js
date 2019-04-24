function checkNextSibling(element){
			while(element.nodeType !=1){
				element = element.nextSibling;
			}
			return element;
		}
function afterLoading(){
	var gnbUl = document.querySelector('#gnb-wrap > ul');
	//var subGnbWrap = document.querySelector('.sub-gnb-wrap');
	var mainMenu = document.querySelectorAll('#gnb-wrap > ul > li > a');
	//var liChild = document.querySelectorAll('#gnb-wrap > ul > li');
	var subMenu = document.querySelectorAll('#gnb-wrap .sub-gnb-wrap');
	var bgGnb = document.querySelector('.bg-gnb');

	for ( var i in mainMenu ){
		mainMenu[i].onfocus = mainMenu[i].onmouseover = mainMenuHandler;
		//checkNextSibling(mainMenu[i].onfocus.nextSibling) = checkNextSibling(mainMenu[i].onmouseover.nextSibling) = liChild;
	}
	function subMenuHidden() {
		for (var i in subMenu){
			if(subMenu[i].style) subMenu[i].style.display = 'none';
		}

	}

	function mainMenuHandler(){
		var ts = this;
		gnbUl.setAttribute('class','on')
		bgGnb.setAttribute('class','bg-gnb on');
		//subGnbWrap.setAttribute('class','on');
		//liChild.setAttribute('class','sub-gnb-wrap on');//.style.display="block";
		subMenuHidden();
		checkNextSibling(ts.nextSibling).style.display = 'block';
	
	}
	function helpme(){
		
	}
	gnbUl.onmouseleave = gnbUlMouseLeaveHandler;
	function gnbUlMouseLeaveHandler(){
		gnbUl.setAttribute('class','')
		bgGnb.setAttribute('class','bg-gnb');
		//subGnbWrap.setAttribute('class','sub-gnb-wrap');
		//mainMenu.next().setAttribute('class','sub-gnb-wrap');
	
	}
}

if (window.addEventListener){
	window.addEventListener('load',afterLoading);
} else {
	window.addEventListener('onload',afterLoading);
}