var a= 1;
var b=2;
var c=a+b;
function getDate(){
	var date = new Date();
	var par = document.getElementById("current_date");
	console.log(par)
	par.innerHTML= date;
	par.style.color= "red";
}
function getEmail(){
	var email=document.getElementById("Email").value;
	document.getElementById("email").innerHTML= "Your email is:" +email;
}
function getUserName(){
	var UserName=document.getElementById("UserName").value:
	document.getElementById("UserName").innerHTML="your UserName is:" +UserName;
}