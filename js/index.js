var account=document.getElementsByClassName('account')[0];

var login=document.getElementsByClassName('login-form')[0];

var arrow=document.getElementsByClassName('down-arrow')[0];

account.addEventListener('click',function() {
	if(login.style.maxHeight){
		login.style.maxHeight=null;
		arrow.src='images/account-down.png';
	}
	else{
		login.style.maxHeight=login.scrollHeight+'px';
		arrow.src='images/account-up.png';
	}
});