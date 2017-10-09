var account=document.getElementsByClassName('account')[0];

var login=document.getElementsByClassName('login-form')[0];

var arrow=document.getElementsByClassName('down-arrow')[0];

var hamburger=document.getElementsByClassName('hamburger')[0];
var hamburgerImage=document.getElementsByClassName('hamburger-image')[0];
var navigation=document.getElementsByClassName('navigation')[0];

var slider=document.getElementsByClassName('slider')[0];

var numOfImg=document.getElementsByClassName('circle').length;

var outerCircle;

var marginLeft=0;

account.addEventListener('click',function() {
	if(login.style.maxHeight){
		login.style.maxHeight=null;
		arrow.src='images/account-down.png';
	}
	else{
		navigation.style.maxHeight=null;
		hamburgerImage.src='images/hamburger.png';
		login.style.maxHeight=login.scrollHeight+'px';
		arrow.src='images/account-up.png';
	}
});

hamburger.addEventListener('click',function(){
	if(navigation.style.maxHeight) {
		navigation.style.maxHeight=null;
		hamburgerImage.src='images/hamburger.png';
	}
	else {
		login.style.maxHeight=null;
		arrow.src='images/account-down.png';
		navigation.style.maxHeight=navigation.scrollHeight+'px';
		hamburgerImage.src='images/close.png';
	}
});

outerCircle=document.getElementsByClassName('circle');
outerCircle[0].children[0].style.backgroundColor='#cc003e';
outerCircle[0].children[0].children[0].style.color='white';
var current=0;

for(var i=0;i<numOfImg;i++){
	outerCircle[i].addEventListener('click',function(){
		outerCircle[current%4].children[0].style.backgroundColor='white';
		outerCircle[current%4].children[0].children[0].style.color='#cc003e';
		current=parseInt(this.id[1])-1;
		this.children[0].style.backgroundColor='#cc003e';
		this.children[0].children[0].style.color='white';
	});
}


// window.getComputedStyle(document.getElementsByClassName('slider')[0]).marginLeft
