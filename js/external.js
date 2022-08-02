var a= 1;
var b=2;
var c=a+b;

function getPersonData(){
const person={
	name: "rabin",
	age: "21",
	gender: "Male",
	weight:65
};
console.log(person)
document.getElementById("getPerson").innerHTML="your name is:<b>" +person.name+
"</b><br> your age is <b>"+person.age+
"</b><br> your gender is <b>"+person.gender+
"</b><br> your weight is </b>"+person.weight+"</b>";
}
console.log(c)
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
	console.log(document.getElementById("UserName"))
	var name= document.getElementById("UserName").value;
	document.getElementById("getUserName").innerHTML="your UserName is:"+name;
}
function displayMessage(){
	var age=document.getElementById("age").value;
	if (age>18) {
         var message="Eligible for vote";
     }else{
		var message="not Eligible for vote";

	}
	alert(message)
	document.getElementById("message").innerHTML = message;
}
let day;
console.log(new Date().getDay())
switch(new Date().getDay()){
	case 0:
	day="sunday";
	break;
	case 1:
	day="monday";
	break;
	case 2:
	day="tuesday";
	break;
	case 3:
	day="wednesday";
	break;
	case 4:
	day="thursday"  ;
	break;
	case 5:
	day="friday";
	break;
	case 6:
	day="saturday";
}
alert("Today is "+day)
document.getElementById("day").innerHTML = "Today is "+day;

function displayNameFiveTimes(){
	for (var i=1; i<=5; i++){
		alert("loop " + i);
	}
}