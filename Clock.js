setInterval(setClock,1000);

const hourH = document.querySelector('[h-h]');
const minuteH=document.querySelector('[m-h]');
const secondH=document.querySelector('[s-h]');

function setClock(){
 //得到幕前個指針的圓周百分比
	const currentDate=new Date();
	const secondsRatio=currentDate.getSeconds()/60;
	const minutesRatio=(secondsRatio+currentDate.getMinutes())/60; 
	const HoursRatio=(minutesRatio+currentDate.getHours())/12;

	setRotation(hourH,HoursRatio);
	setRotation(minuteH,minutesRatio);
	setRotation(secondH,secondsRatio);
}

function setRotation(element,r){

	element.style.setProperty('--rotation',r * 360);
}

setClock();